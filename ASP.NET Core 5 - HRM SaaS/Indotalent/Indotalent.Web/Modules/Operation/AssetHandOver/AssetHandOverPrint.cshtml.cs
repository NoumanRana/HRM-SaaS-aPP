using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("AssetHandOverPrint")]
    [ReportDesign(MVC.Views.Operation.AssetHandOver.AssetHandOverPrint)]
    [RequiredPermission("*")]
    public class AssetHandOverPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public AssetHandOverPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new AssetHandOverPrintData();

            using (var connection = SqlConnections.NewFor<AssetHandOverRow>())
            {
                var h = AssetHandOverRow.Fields;
                data.Header = connection.TryById<AssetHandOverRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.AssetNumber)
                     .Select(h.AssetDescription)
                     .Select(h.AssetTagNumber)
                     .Select(h.Manufacturer)
                     .Select(h.Model)
                     .Select(h.SerialNumber)
                     .Select(h.ProductionYear)
                     .Select(h.HandOverByName)
                     .Select(h.HandOverToName));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class AssetHandOverPrintData
    {
        public AssetHandOverRow Header { get; set; }
    }
}
