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
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[EmployeeDeduction]")]
    [DisplayName("Employee Deductions"), InstanceName("Employee Deduction")]
    [ReadPermission("Payrolls:Employee")]
    [ModifyPermission("Payrolls:Employee")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class EmployeeDeductionRow : LoggingRow<EmployeeDeductionRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeName")]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Deduction"), NotNull, ForeignKey("[dbo].[Deduction]", "Id"), LeftJoin("jDeduction"), TextualField("DeductionName")]
        [LookupEditor(typeof(DeductionRow), InplaceAdd = true)]
        public Int32? DeductionId
        {
            get => fields.DeductionId[this];
            set => fields.DeductionId[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Amount"), NotNull]
        public Double? Amount
        {
            get => fields.Amount[this];
            set => fields.Amount[this] = value;
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[Name]")]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Deduction Name"), Expression("jDeduction.[Name]"), MinSelectLevel(SelectLevel.List), QuickSearch, NameProperty]
        public String DeductionName
        {
            get => fields.DeductionName[this];
            set => fields.DeductionName[this] = value;
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

        public EmployeeDeductionRow()
            : base()
        {
        }

        public EmployeeDeductionRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public Int32Field DeductionId;
            public StringField Description;
            public DoubleField Amount;
            public StringField EmployeeName;
            public StringField DeductionName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
