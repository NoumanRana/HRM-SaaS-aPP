using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Payrolls
{
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[PayrollDetail]")]
    [DisplayName("Payroll Detail"), InstanceName("Payroll Detail")]
    [ReadPermission("Payrolls:Payroll")]
    [ModifyPermission("Payrolls:Payroll")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PayrollDetailRow : LoggingRow<PayrollDetailRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Payroll"), NotNull, ForeignKey("[dbo].[Payroll]", "Id"), LeftJoin("jPayroll")]
        public Int32? PayrollId
        {
            get => fields.PayrollId[this];
            set => fields.PayrollId[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeName")]
        [LookupEditor(typeof(EmployeeRow))]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee"), Expression("jEmployee.[Name]"), MinSelectLevel(SelectLevel.List), QuickSearch, NameProperty]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Bank Account"), Size(200), NotNull]
        public String BankAccount
        {
            get => fields.BankAccount[this];
            set => fields.BankAccount[this] = value;
        }

        [DisplayName("Bank Name"), Size(200), NotNull]
        public String BankName
        {
            get => fields.BankName[this];
            set => fields.BankName[this] = value;
        }

        [DisplayName("Basic Salary"), NotNull]
        [DefaultValue(0)]
        public Double? BasicSalary
        {
            get => fields.BasicSalary[this];
            set => fields.BasicSalary[this] = value;
        }

        [DisplayName("Total Income"), NotNull]
        [DefaultValue(0)]
        public Double? TotalIncome
        {
            get => fields.TotalIncome[this];
            set => fields.TotalIncome[this] = value;
        }

        [DisplayName("Total Deduction"), NotNull]
        [DefaultValue(0)]
        public Double? TotalDeduction
        {
            get => fields.TotalDeduction[this];
            set => fields.TotalDeduction[this] = value;
        }

        [DisplayName("Take Home Pay"), NotNull]
        [DefaultValue(0)]
        public Double? TakeHomePay
        {
            get => fields.TakeHomePay[this];
            set => fields.TakeHomePay[this] = value;
        }

        [DisplayName("Incomes"), MasterDetailRelation(foreignKey: "PayrollDetailId"), MinSelectLevel(SelectLevel.List), NotMapped]
        public List<PayrollDetailIncomeRow> IncomeList
        {
            get => fields.IncomeList[this];
            set => fields.IncomeList[this] = value;
        }

        [DisplayName("Deductions"), MasterDetailRelation(foreignKey: "PayrollDetailId"), MinSelectLevel(SelectLevel.List), NotMapped]
        public List<PayrollDetailDeductionRow> DeductionList
        {
            get => fields.DeductionList[this];
            set => fields.DeductionList[this] = value;
        }

        [DisplayName("Tenant"), ForeignKey("Tenant", "TenantId"), LeftJoin("jTenant")]
        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Tenant"), Expression("jTenant.TenantName")]
        public String TenantName
        {
            get { return Fields.TenantName[this]; }
            set { Fields.TenantName[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public PayrollDetailRow()
            : base()
        {
        }

        public PayrollDetailRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field PayrollId;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public StringField BankAccount;
            public StringField BankName;
            public DoubleField BasicSalary;
            public DoubleField TotalIncome;
            public DoubleField TotalDeduction;
            public DoubleField TakeHomePay;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<PayrollDetailIncomeRow> IncomeList;
            public RowListField<PayrollDetailDeductionRow> DeductionList;
        }
    }
}
