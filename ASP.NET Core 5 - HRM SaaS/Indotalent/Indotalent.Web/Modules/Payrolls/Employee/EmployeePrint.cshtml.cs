using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Indotalent.Payrolls
{
    [Report("EmployeePrint")]
    [ReportDesign(MVC.Views.Payrolls.Employee.EmployeePrint)]
    [RequiredPermission("Payrolls:Employee")]
    public class EmployeePrintModel : IReport, ICustomizeHtmlToPdf
    {
        public EmployeePrintModel(ISqlConnections sqlConnections)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public int Id { get; set; }

        protected ISqlConnections SqlConnections { get; }

        public object GetData()
        {
            var data = new EmployeePrintData();

            using (var connection = SqlConnections.NewFor<EmployeeRow>())
            {
                var h = EmployeeRow.Fields;
                data.Header = connection.TryById<EmployeeRow>(Id, q => q
                     .SelectTableFields()
                     .Select(h.GradeName)
                     .Select(h.DepartmentName)
                     .Select(h.DesignationName));

                var i = EmployeeIncomeRow.Fields;
                data.Incomes = connection.List<EmployeeIncomeRow>(q => q
                    .SelectTableFields()
                    .Select(i.IncomeName)
                    .Where(i.EmployeeId == Id));

                var d = EmployeeDeductionRow.Fields;
                data.Deductions = connection.List<EmployeeDeductionRow>(q => q
                    .SelectTableFields()
                    .Select(d.DeductionName)
                    .Where(d.EmployeeId == Id));
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
        }
    }

    public class EmployeePrintData
    {
        public EmployeeRow Header { get; set; }
        public List<EmployeeIncomeRow> Incomes { get; set; }
        public List<EmployeeDeductionRow> Deductions { get; set; }
    }
}
