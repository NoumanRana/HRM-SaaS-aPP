using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Attendance
{
    [Report("PunchInPrint")]
    [ReportDesign(MVC.Views.Attendance.PunchIn.PunchInPrint)]
    [RequiredPermission("*")]
    public class PunchInPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public PunchInPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new PunchInPrintData();

            using (var connection = SqlConnections.NewFor<PunchInRow>())
            {
                var h = PunchInRow.Fields;
                data.Header = connection.TryById<PunchInRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName)
                     .Select(h.InHour)
                     .Select(h.InMinute));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class PunchInPrintData
    {
        public PunchInRow Header { get; set; }
    }
}
