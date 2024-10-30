using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Operation
{
    [Report("BusinessTripPrint")]
    [ReportDesign(MVC.Views.Operation.BusinessTrip.BusinessTripPrint)]
    [RequiredPermission("*")]
    public class BusinessTripPrintModel : IReport, ICustomizeHtmlToPdf
    {
        public BusinessTripPrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new BusinessTripPrintData();

            using (var connection = SqlConnections.NewFor<BusinessTripRow>())
            {
                var h = BusinessTripRow.Fields;
                data.Header = connection.TryById<BusinessTripRow>(Id, q => q
                     .SelectTableFields());

                var i = BusinessTripParticipantRow.Fields;
                data.Participants = connection.List<BusinessTripParticipantRow>(q => q
                    .SelectTableFields()
                    .Select(i.EmployeeName)
                    .Select(i.BranchName)
                    .Select(i.DepartmentName)
                    .Where(i.BusinessTripId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class BusinessTripPrintData
    {
        public BusinessTripRow Header { get; set; }
        public List<BusinessTripParticipantRow> Participants { get; set; }
    }
}
