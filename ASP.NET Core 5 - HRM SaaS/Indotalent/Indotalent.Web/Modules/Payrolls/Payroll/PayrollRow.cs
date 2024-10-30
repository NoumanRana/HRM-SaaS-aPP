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
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[Payroll]")]
    [DisplayName("Payroll"), InstanceName("Payroll")]
    [ReadPermission("Payrolls:Payroll")]
    [ModifyPermission("Payrolls:Payroll")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PayrollRow : LoggingRow<PayrollRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Number"), Size(200), NotNull, QuickSearch, NameProperty]
        [Insertable(false), Updatable(false)]
        [DefaultValue("auto")]
        public String Number
        {
            get => fields.Number[this];
            set => fields.Number[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Payment Date"), NotNull]
        public DateTime? PaymentDate
        {
            get => fields.PaymentDate[this];
            set => fields.PaymentDate[this] = value;
        }

        [DisplayName("Auto Generate Payroll Detail"), DefaultValue(true), Updatable(false)]
        public Boolean? AutoGeneratePayrollDetail
        {
            get => fields.AutoGeneratePayrollDetail[this];
            set => fields.AutoGeneratePayrollDetail[this] = value;
        }

        [DisplayName("Total Basic Salary"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? TotalBasicSalary
        {
            get => fields.TotalBasicSalary[this];
            set => fields.TotalBasicSalary[this] = value;
        }

        [DisplayName("Total Income"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? TotalIncome
        {
            get => fields.TotalIncome[this];
            set => fields.TotalIncome[this] = value;
        }

        [DisplayName("Total Deduction"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? TotalDeduction
        {
            get => fields.TotalDeduction[this];
            set => fields.TotalDeduction[this] = value;
        }

        [DisplayName("Total Take Home Pay"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? TotalTakeHomePay
        {
            get => fields.TotalTakeHomePay[this];
            set => fields.TotalTakeHomePay[this] = value;
        }

        [DisplayName("Total Payment Amount"), NotNull]
        [DefaultValue(0)]
        public Double? TotalPaymentAmount
        {
            get => fields.TotalPaymentAmount[this];
            set => fields.TotalPaymentAmount[this] = value;
        }

        [DisplayName("Employee List"), MasterDetailRelation(foreignKey: "PayrollId"), NotMapped]
        public List<PayrollDetailRow> ItemList
        {
            get => fields.ItemList[this];
            set => fields.ItemList[this] = value;
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

        [DisplayName("Currency"), Size(10), Expression("jTenant.Currency"), Insertable(false), Updatable(false)]
        public String CurrencyName
        {
            get => fields.CurrencyName[this];
            set => fields.CurrencyName[this] = value;
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public PayrollRow()
            : base()
        {
        }

        public PayrollRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public DateTimeField PaymentDate;
            public BooleanField AutoGeneratePayrollDetail;
            public DoubleField TotalBasicSalary;
            public DoubleField TotalIncome;
            public DoubleField TotalDeduction;
            public DoubleField TotalTakeHomePay;
            public DoubleField TotalPaymentAmount;
            public StringField CurrencyName;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<PayrollDetailRow> ItemList;
        }
    }
}
