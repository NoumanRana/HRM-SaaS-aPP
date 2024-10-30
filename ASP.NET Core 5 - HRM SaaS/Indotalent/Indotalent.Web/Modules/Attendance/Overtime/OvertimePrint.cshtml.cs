using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Attendance
{
    [Report("OvertimePrint")]
    [ReportDesign(MVC.Views.Attendance.Overtime.OvertimePrint)]
    [RequiredPermission("*")]
    public class OvertimePrintModel : IReport, ICustomizeHtmlToPdf
    {
        public OvertimePrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new OvertimePrintData();

            using (var connection = SqlConnections.NewFor<OvertimeRow>())
            {
                var h = OvertimeRow.Fields;
                data.Header = connection.TryById<OvertimeRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class OvertimePrintData
    {
        public OvertimeRow Header { get; set; }
    }
}
