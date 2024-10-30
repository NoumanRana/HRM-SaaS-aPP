using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Recruitment
{
    [ConnectionKey("Default"), Module("Recruitment"), TableName("[dbo].[Vacancy]")]
    [DisplayName("Vacancies"), InstanceName("Vacancy")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Recruitment:Vacancy")]
    [ModifyPermission("Recruitment:Vacancy")]
    public sealed class VacancyRow : LoggingRow<VacancyRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Job Title"), Size(200), NotNull]
        public String JobTitle
        {
            get => fields.JobTitle[this];
            set => fields.JobTitle[this] = value;
        }

        [DisplayName("Job Description"), Size(1000), NotNull]
        public String JobDescription
        {
            get => fields.JobDescription[this];
            set => fields.JobDescription[this] = value;
        }

        [DisplayName("Hiring Manager"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jHiringManager"), TextualField("HiringManagerName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? HiringManagerId
        {
            get => fields.HiringManagerId[this];
            set => fields.HiringManagerId[this] = value;
        }

        [DisplayName("HiringManager"), Expression("jHiringManager.[Name]")]
        public String HiringManagerName
        {
            get => fields.HiringManagerName[this];
            set => fields.HiringManagerName[this] = value;
        }


        [DisplayName("Open Date"), NotNull]
        public DateTime? OpenDate
        {
            get => fields.OpenDate[this];
            set => fields.OpenDate[this] = value;
        }

        [DisplayName("Close Date"), NotNull]
        public DateTime? CloseDate
        {
            get => fields.CloseDate[this];
            set => fields.CloseDate[this] = value;
        }

        [DisplayName("Branch"), ForeignKey("[dbo].[Branch]", "Id"), LeftJoin("jHiringManagerBranch"), TextualField("HiringManagerBranchName")]
        [LookupEditor(typeof(Organization.BranchRow), InplaceAdd = true)]
        public Int32? HiringManagerBranchId
        {
            get => fields.HiringManagerBranchId[this];
            set => fields.HiringManagerBranchId[this] = value;
        }

        [DisplayName("Branch"), Expression("jHiringManagerBranch.[Name]")]
        public String HiringManagerBranchName
        {
            get => fields.HiringManagerBranchName[this];
            set => fields.HiringManagerBranchName[this] = value;
        }

        [DisplayName("Department"), ForeignKey("[dbo].[Department]", "Id"), LeftJoin("jHiringManagerDepartment"), TextualField("HiringManagerDepartmentName")]
        [LookupEditor(typeof(Organization.DepartmentRow), InplaceAdd = true)]
        public Int32? HiringManagerDepartmentId
        {
            get => fields.HiringManagerDepartmentId[this];
            set => fields.HiringManagerDepartmentId[this] = value;
        }

        [DisplayName("Department"), Expression("jHiringManagerDepartment.[Name]")]
        public String HiringManagerDepartmentName
        {
            get => fields.HiringManagerDepartmentName[this];
            set => fields.HiringManagerDepartmentName[this] = value;
        }

        [DisplayName("Job Requirements"), MasterDetailRelation(foreignKey: "VacancyId"), NotMapped]
        public List<VacancyRequirementRow> VacancyRequirementList
        {
            get => fields.VacancyRequirementList[this];
            set => fields.VacancyRequirementList[this] = value;
        }

        [DisplayName("Compensation & Benefits"), MasterDetailRelation(foreignKey: "VacancyId"), NotMapped]
        public List<VacancyBenefitRow> VacancyBenefitList
        {
            get => fields.VacancyBenefitList[this];
            set => fields.VacancyBenefitList[this] = value;
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

        public VacancyRow()
            : base()
        {
        }

        public VacancyRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField JobTitle;
            public StringField JobDescription;
            public Int32Field HiringManagerId;
            public StringField HiringManagerName;
            public Int32Field HiringManagerDepartmentId;
            public StringField HiringManagerDepartmentName;
            public Int32Field HiringManagerBranchId;
            public StringField HiringManagerBranchName;
            public DateTimeField OpenDate;
            public DateTimeField CloseDate;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<VacancyRequirementRow> VacancyRequirementList;

            public RowListField<VacancyBenefitRow> VacancyBenefitList;
        }
    }
}
