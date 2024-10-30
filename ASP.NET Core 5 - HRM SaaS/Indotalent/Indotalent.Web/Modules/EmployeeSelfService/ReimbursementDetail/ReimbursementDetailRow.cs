using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.EmployeeSelfService
{
    [ConnectionKey("Default"), Module("EmployeeSelfService"), TableName("[dbo].[ReimbursementDetail]")]
    [DisplayName("Reimbursement Details"), InstanceName("Reimbursement Detail")]
    [ReadPermission("EmployeeSelfService:Reimbursement")]
    [ModifyPermission("EmployeeSelfService:Reimbursement")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ReimbursementDetailRow : LoggingRow<ReimbursementDetailRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Reimbursement"), NotNull, ForeignKey("[dbo].[Reimbursement]", "Id"), LeftJoin("jReimbursement"), TextualField("ReimbursementNumber")]
        public Int32? ReimbursementId
        {
            get => fields.ReimbursementId[this];
            set => fields.ReimbursementId[this] = value;
        }

        [DisplayName("Short Note"), Size(100), QuickSearch, NameProperty]
        public String ShortNote
        {
            get => fields.ShortNote[this];
            set => fields.ShortNote[this] = value;
        }

        [DisplayName("Amount"), NotNull]
        [DefaultValue(0)]
        public Double? Amount
        {
            get => fields.Amount[this];
            set => fields.Amount[this] = value;
        }

        [DisplayName("Reimbursement"), Expression("jReimbursement.[Number]")]
        public String ReimbursementNumber
        {
            get => fields.ReimbursementNumber[this];
            set => fields.ReimbursementNumber[this] = value;
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

        public ReimbursementDetailRow()
            : base()
        {
        }

        public ReimbursementDetailRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field ReimbursementId;
            public StringField ShortNote;
            public DoubleField Amount;
            public StringField ReimbursementNumber;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
