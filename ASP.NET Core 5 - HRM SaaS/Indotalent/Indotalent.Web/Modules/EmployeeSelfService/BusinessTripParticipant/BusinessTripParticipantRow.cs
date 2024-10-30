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
    [ConnectionKey("Default"), Module("EmployeeSelfService"), TableName("[dbo].[BusinessTripParticipant]")]
    [DisplayName("Business Trip Participants"), InstanceName("Business Trip Participant")]
    [ReadPermission("EmployeeSelfService:BusinessTrip")]
    [ModifyPermission("EmployeeSelfService:BusinessTrip")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class BusinessTripParticipantRow : LoggingRow<BusinessTripParticipantRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Business Trip"), NotNull, ForeignKey("[dbo].[BusinessTrip]", "Id"), LeftJoin("jBusinessTrip"), TextualField("BusinessTripName")]
        public Int32? BusinessTripId
        {
            get => fields.BusinessTripId[this];
            set => fields.BusinessTripId[this] = value;
        }

        [DisplayName("Business Trip"), Expression("jBusinessTrip.[Name]"), NameProperty]
        public String BusinessTripName
        {
            get => fields.BusinessTripName[this];
            set => fields.BusinessTripName[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee"), Expression("jEmployee.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Branch"), ForeignKey("[dbo].[Branch]", "Id"), LeftJoin("jBranch")]
        [LookupEditor(typeof(Organization.BranchRow), InplaceAdd = false)]
        public Int32? BranchId
        {
            get => fields.BranchId[this];
            set => fields.BranchId[this] = value;
        }

        [DisplayName("Branch"), Expression("jBranch.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String BranchName
        {
            get => fields.BranchName[this];
            set => fields.BranchName[this] = value;
        }

        [DisplayName("Department"), ForeignKey("[dbo].[Department]", "Id"), LeftJoin("jDepartment")]
        [LookupEditor(typeof(Organization.DepartmentRow), InplaceAdd = false)]
        public Int32? DepartmentId
        {
            get => fields.DepartmentId[this];
            set => fields.DepartmentId[this] = value;
        }

        [DisplayName("Department"), Expression("jDepartment.[Name]"), MinSelectLevel(SelectLevel.List)]
        public String DepartmentName
        {
            get => fields.DepartmentName[this];
            set => fields.DepartmentName[this] = value;
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

        public BusinessTripParticipantRow()
            : base()
        {
        }

        public BusinessTripParticipantRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field BusinessTripId;
            public StringField BusinessTripName;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public Int32Field BranchId;
            public StringField BranchName;
            public Int32Field DepartmentId;
            public StringField DepartmentName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
