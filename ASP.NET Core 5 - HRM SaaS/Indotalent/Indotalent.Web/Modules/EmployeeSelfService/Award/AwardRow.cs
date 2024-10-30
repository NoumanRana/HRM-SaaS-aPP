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
    [ConnectionKey("Default"), Module("EmployeeSelfService"), TableName("[dbo].[Award]")]
    [DisplayName("Awards"), InstanceName("Award")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("EmployeeSelfService:Award")]
    [ModifyPermission("EmployeeSelfService:Award")]
    public sealed class AwardRow : LoggingRow<AwardRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Reward"), Size(1000)]
        public String Reward
        {
            get => fields.Reward[this];
            set => fields.Reward[this] = value;
        }

        [DisplayName("Date"), NotNull]
        [DefaultValue("now")]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Extraordinary Achievement Done by Awardee"), Size(int.MaxValue)]
        [CustomHtmlNoteContentEditor]
        public String Achievement
        {
            get => fields.Achievement[this];
            set => fields.Achievement[this] = value;
        }

        [DisplayName("Awardee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jAwardee")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? AwardeeId
        {
            get => fields.AwardeeId[this];
            set => fields.AwardeeId[this] = value;
        }

        [DisplayName("Awardee"), Expression("jAwardee.[Name]")]
        public String AwardeeName
        {
            get => fields.AwardeeName[this];
            set => fields.AwardeeName[this] = value;
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

        public AwardRow()
            : base()
        {
        }

        public AwardRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public DateTimeField Date;
            public StringField Reward;
            public StringField Achievement;
            public Int32Field AwardeeId;
            public StringField AwardeeName;
            public Int32Field BranchId;
            public StringField BranchName;
            public Int32Field DepartmentId;
            public StringField DepartmentName;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
