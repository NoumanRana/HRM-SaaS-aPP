using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("MeetingPrint")]
    [ReportDesign(MVC.Views.Operation.Meeting.MeetingPrint)]
    [RequiredPermission("*")]
    public class MeetingPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public MeetingPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new MeetingPrintData();

            using (var connection = SqlConnections.NewFor<MeetingRow>())
            {
                var h = MeetingRow.Fields;
                data.Header = connection.TryById<MeetingRow>(Id, q => q
                     .SelectTableFields());

                var i = MeetingParticipantRow.Fields;
                data.Participants = connection.List<MeetingParticipantRow>(q => q
                    .SelectTableFields()
                    .Select(i.EmployeeName)
                    .Select(i.BranchName)
                    .Select(i.DepartmentName)
                    .Where(i.MeetingId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class MeetingPrintData
    {
        public MeetingRow Header { get; set; }
        public List<MeetingParticipantRow> Participants { get; set; }
    }
}
