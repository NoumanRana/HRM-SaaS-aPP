using Indotalent.Payrolls;
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

namespace Indotalent.Attendance
{
    [ConnectionKey("Default"), Module("Attendance"), TableName("[dbo].[Overtime]")]
    [DisplayName("Overtimes"), InstanceName("Overtime")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Attendance:Overtime")]
    [ModifyPermission("Attendance:Overtime")]
    public sealed class OvertimeRow : LoggingRow<OvertimeRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeName")]
        [LookupEditor(typeof(EmployeeRow), InplaceAdd = false)]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[Name]"), QuickSearch, NameProperty]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Employee Number"), Expression("jEmployee.[EmployeeNumber]")]
        public String EmployeeNumber
        {
            get => fields.EmployeeNumber[this];
            set => fields.EmployeeNumber[this] = value;
        }

        [DisplayName("Overtime Date"), NotNull]
        public DateTime? OvertimeDate
        {
            get => fields.OvertimeDate[this];
            set => fields.OvertimeDate[this] = value;
        }

        [DisplayName("Duration (in Minutes)"), NotNull]
        public Int32? Duration
        {
            get => fields.Duration[this];
            set => fields.Duration[this] = value;
        }

        [DisplayName("Description")]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Overtime Status"), NotNull]
        [DefaultValue(1)]
        public OvertimeStatus? OvertimeStatus
        {
            get => (OvertimeStatus?)fields.OvertimeStatus[this];
            set => fields.OvertimeStatus[this] = (Int32?)value;
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

        public OvertimeRow()
            : base()
        {
        }

        public OvertimeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public StringField EmployeeNumber;
            public DateTimeField OvertimeDate;
            public Int32Field Duration;
            public StringField Description;
            public Int32Field OvertimeStatus;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
