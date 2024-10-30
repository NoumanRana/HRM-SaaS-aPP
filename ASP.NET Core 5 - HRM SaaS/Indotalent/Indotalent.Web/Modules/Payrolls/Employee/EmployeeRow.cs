using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using Indotalent.Organization;
using Indotalent.Settings;
using Serenity.Extensions.Entities;

namespace Indotalent.Payrolls
{
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[Employee]")]
    [DisplayName("Employees"), InstanceName("Employee")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>), Permission = "?")]
    [ReadPermission("Payrolls:Employee")]
    [ModifyPermission("Payrolls:Employee")]
    public sealed class EmployeeRow : LoggingRow<EmployeeRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Employee Number"), Size(200), NotNull]
        [Insertable(false), Updatable(false)]
        [DefaultValue("auto")]
        public String EmployeeNumber
        {
            get => fields.EmployeeNumber[this];
            set => fields.EmployeeNumber[this] = value;
        }

        [DisplayName("Street"), Size(200)]
        public String Street
        {
            get => fields.Street[this];
            set => fields.Street[this] = value;
        }

        [DisplayName("City"), Size(200)]
        public String City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), Size(200)]
        public String State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Zip Code"), Size(10)]
        public String ZipCode
        {
            get => fields.ZipCode[this];
            set => fields.ZipCode[this] = value;
        }

        [DisplayName("Phone"), Size(50)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Email"), Size(200)]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Picture"), Size(200), ImageUploadEditor(FilenameFormat = "Image/Employee/~")]
        public String Picture
        {
            get => fields.Picture[this];
            set => fields.Picture[this] = value;
        }

        [DisplayName("Grade"), NotNull, ForeignKey("[dbo].[Grade]", "Id"), LeftJoin("jGrade"), TextualField("GradeName")]
        [LookupEditor(typeof(GradeRow), InplaceAdd = true)]
        public Int32? GradeId
        {
            get => fields.GradeId[this];
            set => fields.GradeId[this] = value;
        }

        [DisplayName("Basic Salary"), NotNull]
        [DefaultValue(0)]
        public Double? BasicSalary
        {
            get => fields.BasicSalary[this];
            set => fields.BasicSalary[this] = value;
        }

        [DisplayName("Leave Quota"), NotNull]
        [DefaultValue(0)]
        public Double? LeaveQuota
        {
            get => fields.LeaveQuota[this];
            set => fields.LeaveQuota[this] = value;
        }

        [DisplayName("Leave Taken")]
        [DefaultValue(0)]
        public Double? LeaveTaken
        {
            get => fields.LeaveTaken[this];
            set => fields.LeaveTaken[this] = value;
        }

        [DisplayName("Designation"), NotNull, ForeignKey("[dbo].[Designation]", "Id"), LeftJoin("jDesignation"), TextualField("DesignationName")]
        [LookupEditor(typeof(DesignationRow), InplaceAdd = true)]
        public Int32? DesignationId
        {
            get => fields.DesignationId[this];
            set => fields.DesignationId[this] = value;
        }

        [DisplayName("Department"), NotNull, ForeignKey("[dbo].[Department]", "Id"), LeftJoin("jDepartment"), TextualField("DepartmentName")]
        [LookupEditor(typeof(DepartmentRow), InplaceAdd = true)]
        public Int32? DepartmentId
        {
            get => fields.DepartmentId[this];
            set => fields.DepartmentId[this] = value;
        }

        [DisplayName("Gender"), NotNull, ForeignKey("[dbo].[Gender]", "Id"), LeftJoin("jGender"), TextualField("GenderName")]
        [LookupEditor(typeof(GenderRow), InplaceAdd = false)]
        public Int32? GenderId
        {
            get => fields.GenderId[this];
            set => fields.GenderId[this] = value;
        }

        [DisplayName("Branch"), NotNull, ForeignKey("[dbo].[Branch]", "Id"), LeftJoin("jBranch"), TextualField("BranchName")]
        [LookupEditor(typeof(BranchRow), InplaceAdd = false)]
        public Int32? BranchId
        {
            get => fields.BranchId[this];
            set => fields.BranchId[this] = value;
        }

        [DisplayName("Bank Account Number For Payroll"), Size(200), NotNull]
        public String BankAccountForPayroll
        {
            get => fields.BankAccountForPayroll[this];
            set => fields.BankAccountForPayroll[this] = value;
        }

        [DisplayName("Bank Name For Payroll"), Size(200), NotNull]
        public String BankNameForPayroll
        {
            get => fields.BankNameForPayroll[this];
            set => fields.BankNameForPayroll[this] = value;
        }

        [DisplayName("Date Of Joining"), NotNull]
        [DefaultValue("now")]
        public DateTime? DateOfJoining
        {
            get => fields.DateOfJoining[this];
            set => fields.DateOfJoining[this] = value;
        }

        [DisplayName("Date Of Birth"), NotNull]
        [DefaultValue("now")]
        public DateTime? DateOfBirth
        {
            get => fields.DateOfBirth[this];
            set => fields.DateOfBirth[this] = value;
        }

        [DisplayName("Place Of Birth"), Size(200), NotNull]
        public String PlaceOfBirth
        {
            get => fields.PlaceOfBirth[this];
            set => fields.PlaceOfBirth[this] = value;
        }

        [DisplayName("Biometric Number"), Size(200)]
        public String BiometricNumber
        {
            get => fields.BiometricNumber[this];
            set => fields.BiometricNumber[this] = value;
        }

        [DisplayName("Tax Number"), Size(200)]
        public String TaxNumber
        {
            get => fields.TaxNumber[this];
            set => fields.TaxNumber[this] = value;
        }

        [DisplayName("Grade"), Expression("jGrade.[Name]")]
        public String GradeName
        {
            get => fields.GradeName[this];
            set => fields.GradeName[this] = value;
        }

        [DisplayName("Designation"), Expression("jDesignation.[Name]")]
        public String DesignationName
        {
            get => fields.DesignationName[this];
            set => fields.DesignationName[this] = value;
        }

        [DisplayName("Department"), Expression("jDepartment.[Name]")]
        public String DepartmentName
        {
            get => fields.DepartmentName[this];
            set => fields.DepartmentName[this] = value;
        }

        [DisplayName("Gender"), Expression("jGender.[Name]")]
        public String GenderName
        {
            get => fields.GenderName[this];
            set => fields.GenderName[this] = value;
        }

        [DisplayName("Branch"), Expression("jBranch.[Name]")]
        public String BranchName
        {
            get => fields.BranchName[this];
            set => fields.BranchName[this] = value;
        }

        [DisplayName("Incomes"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeIncomeRow> IncomeList
        {
            get => fields.IncomeList[this];
            set => fields.IncomeList[this] = value;
        }

        [DisplayName("Deductions"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeDeductionRow> DeductionList
        {
            get => fields.DeductionList[this];
            set => fields.DeductionList[this] = value;
        }

        [DisplayName("Documents"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeDocumentRow> DocumentList
        {
            get => fields.DocumentList[this];
            set => fields.DocumentList[this] = value;
        }

        [DisplayName("Experiences"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeExperienceRow> ExperienceList
        {
            get => fields.ExperienceList[this];
            set => fields.ExperienceList[this] = value;
        }

        [DisplayName("Educations"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeEducationRow> EducationList
        {
            get => fields.EducationList[this];
            set => fields.EducationList[this] = value;
        }

        [DisplayName("Top Skill"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeTopSkillRow> TopSkillList
        {
            get => fields.TopSkillList[this];
            set => fields.TopSkillList[this] = value;
        }

        [DisplayName("Parent"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeParentRow> ParentList
        {
            get => fields.ParentList[this];
            set => fields.ParentList[this] = value;
        }

        [DisplayName("Children"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeChildrenRow> ChildrenList
        {
            get => fields.ChildrenList[this];
            set => fields.ChildrenList[this] = value;
        }

        [DisplayName("Job Description"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeJobDescriptionRow> JobDescriptionList
        {
            get => fields.JobDescriptionList[this];
            set => fields.JobDescriptionList[this] = value;
        }

        [DisplayName("KPI"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeKpiRow> KpiList
        {
            get => fields.KpiList[this];
            set => fields.KpiList[this] = value;
        }

        [DisplayName("OKR Objective"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeOkrObjectiveRow> OkrObjectiveList
        {
            get => fields.OkrObjectiveList[this];
            set => fields.OkrObjectiveList[this] = value;
        }

        [DisplayName("OKR Result"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeOkrResultRow> OkrResultList
        {
            get => fields.OkrResultList[this];
            set => fields.OkrResultList[this] = value;
        }

        [DisplayName("System User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("SystemUsername")]
        [LookupEditor(typeof(Administration.Entities.UserRow))]
        public Int32? SystemUserId
        {
            get => fields.SystemUserId[this];
            set => fields.SystemUserId[this] = value;
        }

        [DisplayName("System User"), Expression("jUser.[Username]")]
        public String SystemUsername
        {
            get => fields.SystemUsername[this];
            set => fields.SystemUsername[this] = value;
        }


        [DisplayName("Supervisor"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jSupervisor"), TextualField("SupervisorName")]
        [LookupEditor(typeof(EmployeeRow), InplaceAdd = false)]
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





        [DisplayName("Name"), Size(200)]
        public String SpouseName
        {
            get => fields.SpouseName[this];
            set => fields.SpouseName[this] = value;
        }

        [DisplayName("Profession"), Size(200)]
        public String SpouseProfession
        {
            get => fields.SpouseProfession[this];
            set => fields.SpouseProfession[this] = value;
        }

        [DisplayName("Date Of Birth"), Size(200)]
        public DateTime? SpouseDateOfBirth
        {
            get => fields.SpouseDateOfBirth[this];
            set => fields.SpouseDateOfBirth[this] = value;
        }

        [DisplayName("Street"), Size(200)]
        public String SpouseStreet
        {
            get => fields.SpouseStreet[this];
            set => fields.SpouseStreet[this] = value;
        }

        [DisplayName("City"), Size(200)]
        public String SpouseCity
        {
            get => fields.SpouseCity[this];
            set => fields.SpouseCity[this] = value;
        }

        [DisplayName("State"), Size(200)]
        public String SpouseState
        {
            get => fields.SpouseState[this];
            set => fields.SpouseState[this] = value;
        }

        [DisplayName("Zip Code"), Size(10)]
        public String SpouseZipCode
        {
            get => fields.SpouseZipCode[this];
            set => fields.SpouseZipCode[this] = value;
        }

        [DisplayName("Phone"), Size(50)]
        public String SpousePhone
        {
            get => fields.SpousePhone[this];
            set => fields.SpousePhone[this] = value;
        }

        [DisplayName("Email"), Size(200)]
        public String SpouseEmail
        {
            get => fields.SpouseEmail[this];
            set => fields.SpouseEmail[this] = value;
        }

        [DisplayName("Latest Education Degree"), NotNull]
        [DefaultValue(2)]
        public LatestEducationDegree? LatestEducationDegree
        {
            get => (LatestEducationDegree?)fields.LatestEducationDegree[this];
            set => fields.LatestEducationDegree[this] = (Int32?)value;
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

        public EmployeeRow()
            : base()
        {
        }

        public EmployeeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Description;
            public StringField EmployeeNumber;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public StringField Picture;
            public Int32Field GradeId;
            public DoubleField BasicSalary;
            public Int32Field DesignationId;
            public Int32Field DepartmentId;
            public StringField BankAccountForPayroll;
            public StringField BankNameForPayroll;
            public DateTimeField DateOfBirth;
            public StringField PlaceOfBirth;
            public StringField BiometricNumber;
            public StringField TaxNumber;
            public Int32Field GenderId;
            public StringField GenderName;
            public DateTimeField DateOfJoining;
            public Int32Field BranchId;
            public StringField BranchName;
            public Int32Field SupervisorId;
            public StringField SupervisorName;
            public StringField GradeName;
            public StringField DesignationName;
            public StringField DepartmentName;
            public DoubleField LeaveQuota;
            public DoubleField LeaveTaken;
            public Int32Field LatestEducationDegree;


            public StringField SpouseName;
            public DateTimeField SpouseDateOfBirth;
            public StringField SpouseProfession;
            public StringField SpouseStreet;
            public StringField SpouseCity;
            public StringField SpouseState;
            public StringField SpouseZipCode;
            public StringField SpousePhone;
            public StringField SpouseEmail;

            public RowListField<EmployeeIncomeRow> IncomeList;

            public RowListField<EmployeeDeductionRow> DeductionList;

            public RowListField<EmployeeDocumentRow> DocumentList;

            public RowListField<EmployeeExperienceRow> ExperienceList;

            public RowListField<EmployeeEducationRow> EducationList;

            public RowListField<EmployeeTopSkillRow> TopSkillList;

            public RowListField<EmployeeParentRow> ParentList;

            public RowListField<EmployeeChildrenRow> ChildrenList;

            public RowListField<EmployeeJobDescriptionRow> JobDescriptionList;

            public RowListField<EmployeeKpiRow> KpiList;

            public RowListField<EmployeeOkrObjectiveRow> OkrObjectiveList;

            public RowListField<EmployeeOkrResultRow> OkrResultList;

            public Int32Field SystemUserId;
            public StringField SystemUsername;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
