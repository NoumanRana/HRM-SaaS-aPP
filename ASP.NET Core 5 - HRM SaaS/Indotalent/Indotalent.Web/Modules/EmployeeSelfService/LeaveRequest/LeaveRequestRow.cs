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

namespace Indotalent.EmployeeSelfService
{
    [ConnectionKey("Default"), Module("EmployeeSelfService"), TableName("[dbo].[LeaveRequest]")]
    [DisplayName("Leave Requests"), InstanceName("Leave Request")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("EmployeeSelfService:LeaveRequest")]
    [ModifyPermission("EmployeeSelfService:LeaveRequest")]
    public sealed class LeaveRequestRow : LoggingRow<LeaveRequestRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Number"), Size(200), NotNull, QuickSearch, NameProperty]
        [Insertable(false), Updatable(false)]
        [DefaultValue("auto")]
        public String Number
        {
            get => fields.Number[this];
            set => fields.Number[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Leave From Date"), NotNull]
        public DateTime? FromDate
        {
            get => fields.FromDate[this];
            set => fields.FromDate[this] = value;
        }

        [DisplayName("Leave To Date"), NotNull]
        public DateTime? ToDate
        {
            get => fields.ToDate[this];
            set => fields.ToDate[this] = value;
        }

        [DisplayName("Duration (Days)")]
        public Double? Duration
        {
            get => fields.Duration[this];
            set => fields.Duration[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        [Updatable(false)]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee"), Expression("jEmployee.[Name]")]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Delegated Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jDelegatedEmployee"), TextualField("DelegatedEmployeeName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? DelegatedEmployeeId
        {
            get => fields.DelegatedEmployeeId[this];
            set => fields.DelegatedEmployeeId[this] = value;
        }

        [DisplayName("Delegated Employee"), Expression("jDelegatedEmployee.[Name]")]
        public String DelegatedEmployeeName
        {
            get => fields.DelegatedEmployeeName[this];
            set => fields.DelegatedEmployeeName[this] = value;
        }

        [DisplayName("Leave Type"), NotNull, ForeignKey("[dbo].[LeaveType]", "Id"), LeftJoin("jLeaveType"), TextualField("LeaveTypeName")]
        [LookupEditor(typeof(Leave.LeaveTypeRow), InplaceAdd = true)]
        public Int32? LeaveTypeId
        {
            get => fields.LeaveTypeId[this];
            set => fields.LeaveTypeId[this] = value;
        }

        [DisplayName("Leave Type"), Expression("jLeaveType.[Name]")]
        public String LeaveTypeName
        {
            get => fields.LeaveTypeName[this];
            set => fields.LeaveTypeName[this] = value;
        }

        [DisplayName("Status"), NotNull]
        [DefaultValue(1)]
        public LeaveRequestStatus? LeaveRequestStatus
        {
            get => (LeaveRequestStatus?)fields.LeaveRequestStatus[this];
            set => fields.LeaveRequestStatus[this] = (Int32?)value;
        }

        [DisplayName("Delegated Tasks"), MasterDetailRelation(foreignKey: "LeaveRequestId"), NotMapped]
        public List<LeaveDelegatedTaskRow> LeaveDelegatedTaskList
        {
            get => fields.LeaveDelegatedTaskList[this];
            set => fields.LeaveDelegatedTaskList[this] = value;
        }

        [DisplayName("Emergency Contacts"), MasterDetailRelation(foreignKey: "LeaveRequestId"), NotMapped]
        public List<LeaveEmergencyContactRow> LeaveEmergencyContactList
        {
            get => fields.LeaveEmergencyContactList[this];
            set => fields.LeaveEmergencyContactList[this] = value;
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

        public LeaveRequestRow()
            : base()
        {
        }

        public LeaveRequestRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public DateTimeField FromDate;
            public DateTimeField ToDate;
            public DoubleField Duration;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public Int32Field DelegatedEmployeeId;
            public StringField DelegatedEmployeeName;
            public Int32Field LeaveTypeId;
            public StringField LeaveTypeName;
            public Int32Field LeaveRequestStatus;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<LeaveDelegatedTaskRow> LeaveDelegatedTaskList;
            public RowListField<LeaveEmergencyContactRow> LeaveEmergencyContactList;
        }
    }
}
