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
    [ConnectionKey("Default"), Module("EmployeeSelfService"), TableName("[dbo].[Warning]")]
    [DisplayName("Warnings"), InstanceName("Warning")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("EmployeeSelfService:Warning")]
    [ModifyPermission("EmployeeSelfService:Warning")]
    public sealed class WarningRow : LoggingRow<WarningRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }


        [DisplayName("Number"), Size(100), NotNull, QuickSearch, NameProperty]
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

        [DisplayName("Warning Date"), NotNull]
        [DefaultValue("now")]
        public DateTime? WarningDate
        {
            get => fields.WarningDate[this];
            set => fields.WarningDate[this] = value;
        }

        [DisplayName("Due Corrective Date"), NotNull]
        [DefaultValue("now")]
        public DateTime? CorrectiveDate
        {
            get => fields.CorrectiveDate[this];
            set => fields.CorrectiveDate[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
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

        [DisplayName("Supervisor"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jSupervisor")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? SupervisorId
        {
            get => fields.SupervisorId[this];
            set => fields.SupervisorId[this] = value;
        }

        [DisplayName("Supervisor"), Expression("jSupervisor.[Name]")]
        public String SupervisorName
        {
            get => fields.SupervisorName[this];
            set => fields.SupervisorName[this] = value;
        }

        [DisplayName("Branch"), ForeignKey("[dbo].[Branch]", "Id"), LeftJoin("jBranch")]
        [LookupEditor(typeof(Organization.BranchRow), InplaceAdd = false)]
        public Int32? BranchId
        {
            get => fields.BranchId[this];
            set => fields.BranchId[this] = value;
        }

        [DisplayName("Branch"), Expression("jBranch.[Name]")]
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

        [DisplayName("Department"), Expression("jDepartment.[Name]")]
        public String DepartmentName
        {
            get => fields.DepartmentName[this];
            set => fields.DepartmentName[this] = value;
        }

        [DisplayName("Warning Reasons"), Size(int.MaxValue), NotNull]
        [CustomHtmlNoteContentEditor]
        public String WarningReason
        {
            get => fields.WarningReason[this];
            set => fields.WarningReason[this] = value;
        }

        [DisplayName("Corrective Actions"), Size(int.MaxValue), NotNull]
        [CustomHtmlNoteContentEditor]
        public String CorrectiveAction
        {
            get => fields.CorrectiveAction[this];
            set => fields.CorrectiveAction[this] = value;
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

        public WarningRow()
            : base()
        {
        }

        public WarningRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public StringField WarningReason;
            public StringField CorrectiveAction;
            public DateTimeField WarningDate;
            public DateTimeField CorrectiveDate;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public Int32Field BranchId;
            public StringField BranchName;
            public Int32Field DepartmentId;
            public StringField DepartmentName;
            public Int32Field SupervisorId;
            public StringField SupervisorName;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
