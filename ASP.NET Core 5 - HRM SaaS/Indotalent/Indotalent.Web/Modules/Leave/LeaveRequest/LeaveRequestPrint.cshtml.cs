using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Leave
{
    [Report("LeaveRequestPrint")]
    [ReportDesign(MVC.Views.Leave.LeaveRequest.LeaveRequestPrint)]
    [RequiredPermission("*")]
    public class LeaveRequestPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public LeaveRequestPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new LeaveRequestPrintData();

            using (var connection = SqlConnections.NewFor<LeaveRequestRow>())
            {
                var h = LeaveRequestRow.Fields;
                data.Header = connection.TryById<LeaveRequestRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName)
                     .Select(h.Duration));

                var i = LeaveDelegatedTaskRow.Fields;
                data.Tasks = connection.List<LeaveDelegatedTaskRow>(q => q
                    .SelectTableFields()
                    .Where(i.LeaveRequestId == Id));

                var d = LeaveEmergencyContactRow.Fields;
                data.Contacts = connection.List<LeaveEmergencyContactRow>(q => q
                    .SelectTableFields()
                    .Select(d.ContactName)
                    .Where(d.LeaveRequestId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class LeaveRequestPrintData
    {
        public LeaveRequestRow Header { get; set; }
        public List<LeaveDelegatedTaskRow> Tasks { get; set; }
        public List<LeaveEmergencyContactRow> Contacts { get; set; }
    }
}
