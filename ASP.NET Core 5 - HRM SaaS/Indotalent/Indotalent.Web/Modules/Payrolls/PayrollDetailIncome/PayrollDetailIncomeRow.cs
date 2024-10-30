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
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[PayrollDetailIncome]")]
    [DisplayName("Incomes"), InstanceName("Income")]
    [ReadPermission("Payrolls:Payroll")]
    [ModifyPermission("Payrolls:Payroll")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PayrollDetailIncomeRow : LoggingRow<PayrollDetailIncomeRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Payroll Detail"), NotNull, ForeignKey("[dbo].[PayrollDetail]", "Id"), LeftJoin("jPayrollDetail"), TextualField("PayrollDetailEmployeeName")]
        public Int32? PayrollDetailId
        {
            get => fields.PayrollDetailId[this];
            set => fields.PayrollDetailId[this] = value;
        }

        [DisplayName("Income"), NotNull, ForeignKey("[dbo].[Income]", "Id"), LeftJoin("jIncome"), TextualField("IncomeName")]
        [LookupEditor(typeof(IncomeRow))]
        public Int32? IncomeId
        {
            get => fields.IncomeId[this];
            set => fields.IncomeId[this] = value;
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

        [DisplayName("Income Name"), Expression("jIncome.[Name]"), MinSelectLevel(SelectLevel.List), QuickSearch, NameProperty]
        public String IncomeName
        {
            get => fields.IncomeName[this];
            set => fields.IncomeName[this] = value;
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

        public PayrollDetailIncomeRow()
            : base()
        {
        }

        public PayrollDetailIncomeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field PayrollDetailId;
            public Int32Field IncomeId;
            public StringField ShortNote;
            public DoubleField Amount;
            public StringField IncomeName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
