using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using Indotalent.Controls;

namespace Indotalent.EmployeeSelfService
{
    [ConnectionKey("Default"), Module("EmployeeSelfService"), TableName("[dbo].[Announcement]")]
    [DisplayName("Announcements"), InstanceName("Announcement")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("EmployeeSelfService:Announcement")]
    [ModifyPermission("EmployeeSelfService:Announcement")]
    public sealed class AnnouncementRow : LoggingRow<AnnouncementRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Title"), Size(200), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Date"), NotNull]
        [DefaultValue("now")]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Announcement Message"), Size(int.MaxValue), NotNull]
        [CustomHtmlNoteContentEditor]
        public String Message
        {
            get => fields.Message[this];
            set => fields.Message[this] = value;
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

        public AnnouncementRow()
            : base()
        {
        }

        public AnnouncementRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public DateTimeField Date;
            public StringField Message;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
