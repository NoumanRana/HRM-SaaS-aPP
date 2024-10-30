using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Performance
{
    [Report("PromotionPrint")]
    [ReportDesign(MVC.Views.Performance.Promotion.PromotionPrint)]
    [RequiredPermission("Performance:Promotion")]
    public class PromotionPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public PromotionPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new PromotionPrintData();

            using (var connection = SqlConnections.NewFor<PromotionRow>())
            {
                var h = PromotionRow.Fields;
                data.Header = connection.TryById<PromotionRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.EmployeeName)
                     .Select(h.PromotorName)
                     .Select(h.CurrentBranchName)
                     .Select(h.CurrentDepartmentName)
                     .Select(h.CurrentDesignationName)
                     .Select(h.NewBranchName)
                     .Select(h.NewDepartmentName)
                     .Select(h.NewDesignationName));

                var i = PromotionReasonRow.Fields;
                data.Reasons = connection.List<PromotionReasonRow>(q => q
                    .SelectTableFields()
                    .Where(i.PromotionId == Id));

                var d = PromotionCompetencyRow.Fields;
                data.Competencies = connection.List<PromotionCompetencyRow>(q => q
                    .SelectTableFields()
                    .Where(d.PromotionId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class PromotionPrintData
    {
        public PromotionRow Header { get; set; }
        public List<PromotionReasonRow> Reasons { get; set; }
        public List<PromotionCompetencyRow> Competencies { get; set; }
    }
}
