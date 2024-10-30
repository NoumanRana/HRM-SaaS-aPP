using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("EventPrint")]
    [ReportDesign(MVC.Views.Operation.Event.EventPrint)]
    [RequiredPermission("*")]
    public class EventPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public EventPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new EventPrintData();

            using (var connection = SqlConnections.NewFor<EventRow>())
            {
                var h = EventRow.Fields;
                data.Header = connection.TryById<EventRow>(Id, q => q
                     .SelectTableFields());
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class EventPrintData
    {
        public EventRow Header { get; set; }
    }
}
