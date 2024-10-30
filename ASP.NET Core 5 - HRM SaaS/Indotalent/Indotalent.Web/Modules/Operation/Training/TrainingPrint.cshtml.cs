using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("TrainingPrint")]
    [ReportDesign(MVC.Views.Operation.Training.TrainingPrint)]
    [RequiredPermission("*")]
    public class TrainingPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public TrainingPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new TrainingPrintData();

            using (var connection = SqlConnections.NewFor<TrainingRow>())
            {
                var h = TrainingRow.Fields;
                data.Header = connection.TryById<TrainingRow>(Id, q => q
                     .SelectTableFields());

                var i = TrainingParticipantRow.Fields;
                data.Participants = connection.List<TrainingParticipantRow>(q => q
                    .SelectTableFields()
                    .Select(i.EmployeeName)
                    .Select(i.BranchName)
                    .Select(i.DepartmentName)
                    .Where(i.TrainingId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class TrainingPrintData
    {
        public TrainingRow Header { get; set; }
        public List<TrainingParticipantRow> Participants { get; set; }
    }
}
