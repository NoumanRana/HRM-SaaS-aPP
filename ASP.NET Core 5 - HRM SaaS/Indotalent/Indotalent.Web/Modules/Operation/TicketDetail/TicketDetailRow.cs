using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;
using Indotalent.Controls;

namespace Indotalent.Operation
{
    [ConnectionKey("Default"), Module("Operation"), TableName("[dbo].[TicketDetail]")]
    [DisplayName("Ticket Responses"), InstanceName("Ticket Response")]
    [ReadPermission("Operation:Ticket")]
    [ModifyPermission("Operation:Ticket")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class TicketDetailRow : LoggingRow<TicketDetailRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Ticket"), NotNull, ForeignKey("[dbo].[Ticket]", "Id"), LeftJoin("jTicket"), TextualField("TicketNumber")]
        public Int32? TicketId
        {
            get => fields.TicketId[this];
            set => fields.TicketId[this] = value;
        }

        [DisplayName("Response Message"), NotNull, QuickSearch]
        [CustomHtmlNoteContentEditor]
        public String Response
        {
            get => fields.Response[this];
            set => fields.Response[this] = value;
        }

        [DisplayName("Response By")]
        public String ResponseBy
        {
            get => fields.ResponseBy[this];
            set => fields.ResponseBy[this] = value;
        }

        [DisplayName("Response At")]
        [DateTimeEditor]
        [DisplayFormat("g")]
        public DateTime? ResponseAt
        {
            get => fields.ResponseAt[this];
            set => fields.ResponseAt[this] = value;
        }

        [DisplayName("Ticket"), Expression("jTicket.[Number]"), NameProperty]
        public String TicketNumber
        {
            get => fields.TicketNumber[this];
            set => fields.TicketNumber[this] = value;
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

        public TicketDetailRow()
            : base()
        {
        }

        public TicketDetailRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field TicketId;
            public StringField Response;
            public StringField ResponseBy;
            public DateTimeField ResponseAt;
            public StringField TicketNumber;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
