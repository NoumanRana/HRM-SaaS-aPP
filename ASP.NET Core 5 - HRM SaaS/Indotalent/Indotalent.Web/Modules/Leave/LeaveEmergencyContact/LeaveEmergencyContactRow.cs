using Indotalent.Settings;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Leave
{
    [ConnectionKey("Default"), Module("Leave"), TableName("[dbo].[LeaveEmergencyContact]")]
    [DisplayName("Emergency Contacts"), InstanceName("Emergency Contact")]
    [ReadPermission("Leave:LeaveRequest")]
    [ModifyPermission("Leave:LeaveRequest")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class LeaveEmergencyContactRow : LoggingRow<LeaveEmergencyContactRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("LeaveRequest"), NotNull, ForeignKey("[dbo].[LeaveRequest]", "Id"), LeftJoin("jLeaveRequest"), TextualField("LeaveRequestNumber")]
        public Int32? LeaveRequestId
        {
            get => fields.LeaveRequestId[this];
            set => fields.LeaveRequestId[this] = value;
        }

        [DisplayName("Contact Name"), NotNull, Size(200), QuickSearch, NameProperty]
        public String ContactName
        {
            get => fields.ContactName[this];
            set => fields.ContactName[this] = value;
        }

        [DisplayName("Contact Phone Number"), NotNull, Size(100)]
        public String ContactPhoneNumber
        {
            get => fields.ContactPhoneNumber[this];
            set => fields.ContactPhoneNumber[this] = value;
        }

        [DisplayName("LeaveRequest"), Expression("jLeaveRequest.[Number]")]
        public String LeaveRequestNumber
        {
            get => fields.LeaveRequestNumber[this];
            set => fields.LeaveRequestNumber[this] = value;
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

        public LeaveEmergencyContactRow()
            : base()
        {
        }

        public LeaveEmergencyContactRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field LeaveRequestId;
            public StringField LeaveRequestNumber;
            public StringField ContactName;
            public StringField ContactPhoneNumber;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
