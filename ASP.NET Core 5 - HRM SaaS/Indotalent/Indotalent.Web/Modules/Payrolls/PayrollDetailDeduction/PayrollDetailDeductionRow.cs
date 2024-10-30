using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Payrolls
{
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[PayrollDetailDeduction]")]
    [DisplayName("Deductions"), InstanceName("Deduction")]
    [ReadPermission("Payrolls:Payroll")]
    [ModifyPermission("Payrolls:Payroll")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PayrollDetailDeductionRow : LoggingRow<PayrollDetailDeductionRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Payroll Detail"), NotNull, ForeignKey("[dbo].[PayrollDetail]", "Id"), LeftJoin("jPayrollDetail")]
        public Int32? PayrollDetailId
        {
            get => fields.PayrollDetailId[this];
            set => fields.PayrollDetailId[this] = value;
        }

        [DisplayName("Deduction"), NotNull, ForeignKey("[dbo].[Deduction]", "Id"), LeftJoin("jDeduction"), TextualField("DeductionName")]
        [LookupEditor(typeof(DeductionRow))]
        public Int32? DeductionId
        {
            get => fields.DeductionId[this];
            set => fields.DeductionId[this] = value;
        }

        [DisplayName("Deduction Name"), Expression("jDeduction.[Name]"), MinSelectLevel(SelectLevel.List), QuickSearch, NameProperty]
        public String DeductionName
        {
            get => fields.DeductionName[this];
            set => fields.DeductionName[this] = value;
        }

        [DisplayName("Short Note"), Size(100)]
        public String ShortNote
        {
            get => fields.ShortNote[this];
            set => fields.ShortNote[this] = value;
        }

        [DisplayName("Amount"), NotNull]
        public Double? Amount
        {
            get => fields.Amount[this];
            set => fields.Amount[this] = value;
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

        public PayrollDetailDeductionRow()
            : base()
        {
        }

        public PayrollDetailDeductionRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field PayrollDetailId;
            public Int32Field DeductionId;
            public StringField ShortNote;
            public DoubleField Amount;
            public StringField DeductionName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
