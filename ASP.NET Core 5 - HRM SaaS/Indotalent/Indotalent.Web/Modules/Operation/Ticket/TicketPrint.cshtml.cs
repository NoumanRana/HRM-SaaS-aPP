using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("TicketPrint")]
    [ReportDesign(MVC.Views.Operation.Ticket.TicketPrint)]
    [RequiredPermission("*")]
    public class TicketPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public TicketPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new TicketPrintData();

            using (var connection = SqlConnections.NewFor<TicketRow>())
            {
                var h = TicketRow.Fields;
                data.Header = connection.TryById<TicketRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName)
                     .Select(h.BranchName)
                     .Select(h.DepartmentName));

                var i = TicketDetailRow.Fields;
                data.Details = connection.List<TicketDetailRow>(q => q
                    .SelectTableFields()
                    .Where(i.TicketId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class TicketPrintData
    {
        public TicketRow Header { get; set; }
        public List<TicketDetailRow> Details { get; set; }
    }
}
