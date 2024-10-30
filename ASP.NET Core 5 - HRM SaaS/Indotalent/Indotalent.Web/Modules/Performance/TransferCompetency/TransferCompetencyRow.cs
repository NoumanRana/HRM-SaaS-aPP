using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Performance
{
    [ConnectionKey("Default"), Module("Performance"), TableName("[dbo].[TransferCompetency]")]
    [DisplayName("Transfer Competencies"), InstanceName("Transfer Competency")]
    [ReadPermission("Performance:Transfer")]
    [ModifyPermission("Performance:Transfer")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class TransferCompetencyRow : LoggingRow<TransferCompetencyRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Transfer"), NotNull, ForeignKey("[dbo].[Transfer]", "Id"), LeftJoin("jTransfer"), TextualField("TransferNumber")]
        public Int32? TransferId
        {
            get => fields.TransferId[this];
            set => fields.TransferId[this] = value;
        }

        [DisplayName("Transfer"), Expression("jTransfer.[Number]")]
        public String TransferNumber
        {
            get => fields.TransferNumber[this];
            set => fields.TransferNumber[this] = value;
        }

        [DisplayName("Competency"), NotNull, NameProperty]
        public String ShortNote
        {
            get => fields.ShortNote[this];
            set => fields.ShortNote[this] = value;
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

        public TransferCompetencyRow()
            : base()
        {
        }

        public TransferCompetencyRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field TransferId;
            public StringField TransferNumber;
            public StringField ShortNote;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
