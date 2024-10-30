using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("AssetPrint")]
    [ReportDesign(MVC.Views.Operation.Asset.AssetPrint)]
    [RequiredPermission("*")]
    public class AssetPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public AssetPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new AssetPrintData();

            using (var connection = SqlConnections.NewFor<AssetRow>())
            {
                var h = AssetRow.Fields;
                data.Header = connection.TryById<AssetRow>(Id, q => q
                     .SelectTableFields());
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class AssetPrintData
    {
        public AssetRow Header { get; set; }
    }
}
