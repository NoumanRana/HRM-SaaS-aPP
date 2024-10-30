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
    [ConnectionKey("Default"), Module("Performance"), TableName("[dbo].[PromotionReason]")]
    [DisplayName("Promotion Reasons"), InstanceName("Promotion Reason")]
    [ReadPermission("Performance:Promotion")]
    [ModifyPermission("Performance:Promotion")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class PromotionReasonRow : LoggingRow<PromotionReasonRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Promotion"), NotNull, ForeignKey("[dbo].[Promotion]", "Id"), LeftJoin("jPromotion"), TextualField("PromotionNumber")]
        public Int32? PromotionId
        {
            get => fields.PromotionId[this];
            set => fields.PromotionId[this] = value;
        }

        [DisplayName("Promotion"), Expression("jPromotion.[Number]")]
        public String PromotionNumber
        {
            get => fields.PromotionNumber[this];
            set => fields.PromotionNumber[this] = value;
        }

        [DisplayName("Reason"), NotNull, NameProperty]
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

        public PromotionReasonRow()
            : base()
        {
        }

        public PromotionReasonRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field PromotionId;
            public StringField PromotionNumber;
            public StringField ShortNote;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
