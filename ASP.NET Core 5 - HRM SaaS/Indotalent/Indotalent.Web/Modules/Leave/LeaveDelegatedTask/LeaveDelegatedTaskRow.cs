﻿using Indotalent.Settings;
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
    [ConnectionKey("Default"), Module("Leave"), TableName("[dbo].[LeaveDelegatedTask]")]
    [DisplayName("Delegated Tasks"), InstanceName("Delegated Task")]
    [ReadPermission("Leave:LeaveRequest")]
    [ModifyPermission("Leave:LeaveRequest")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class LeaveDelegatedTaskRow : LoggingRow<LeaveDelegatedTaskRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Short Note (Task)"), Size(200), NotNull, QuickSearch, NameProperty]
        public String ShortNote
        {
            get => fields.ShortNote[this];
            set => fields.ShortNote[this] = value;
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

        public LeaveDelegatedTaskRow()
            : base()
        {
        }

        public LeaveDelegatedTaskRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field LeaveRequestId;
            public StringField LeaveRequestNumber;
            public StringField ShortNote;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
