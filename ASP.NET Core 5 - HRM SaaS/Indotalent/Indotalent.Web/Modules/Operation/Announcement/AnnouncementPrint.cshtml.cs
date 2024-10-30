using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("AnnouncementPrint")]
    [ReportDesign(MVC.Views.Operation.Announcement.AnnouncementPrint)]
    [RequiredPermission("*")]
    public class AnnouncementPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public AnnouncementPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new AnnouncementPrintData();

            using (var connection = SqlConnections.NewFor<AnnouncementRow>())
            {
                var h = AnnouncementRow.Fields;
                data.Header = connection.TryById<AnnouncementRow>(Id, q => q
                     .SelectTableFields());
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class AnnouncementPrintData
    {
        public AnnouncementRow Header { get; set; }
    }
}
