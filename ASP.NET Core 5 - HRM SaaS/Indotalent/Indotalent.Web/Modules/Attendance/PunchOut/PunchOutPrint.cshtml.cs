using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Attendance
{
    [Report("PunchOutPrint")]
    [ReportDesign(MVC.Views.Attendance.PunchOut.PunchOutPrint)]
    [RequiredPermission("*")]
    public class PunchOutPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public PunchOutPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new PunchOutPrintData();

            using (var connection = SqlConnections.NewFor<PunchOutRow>())
            {
                var h = PunchOutRow.Fields;
                data.Header = connection.TryById<PunchOutRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName)
                     .Select(h.OutHour)
                     .Select(h.OutMinute));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class PunchOutPrintData
    {
        public PunchOutRow Header { get; set; }
    }
}
