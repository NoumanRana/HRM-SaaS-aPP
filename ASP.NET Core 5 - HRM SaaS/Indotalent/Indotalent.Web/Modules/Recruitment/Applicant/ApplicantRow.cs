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

namespace Indotalent.Recruitment
{
    [ConnectionKey("Default"), Module("Recruitment"), TableName("[dbo].[Applicant]")]
    [DisplayName("Applicants"), InstanceName("Applicant")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Recruitment:Applicant")]
    [ModifyPermission("Recruitment:Applicant")]
    public sealed class ApplicantRow : LoggingRow<ApplicantRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Name"), Size(200), NotNull, QuickSearch]
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

        [DisplayName("Picture"), Size(200), ImageUploadEditor(FilenameFormat = "Image/Applicant/~")]
        public String Picture
        {
            get => fields.Picture[this];
            set => fields.Picture[this] = value;
        }

        [DisplayName("Gender"), NotNull, ForeignKey("[dbo].[Gender]", "Id"), LeftJoin("jGender"), TextualField("GenderName")]
        [LookupEditor(typeof(GenderRow), InplaceAdd = false)]
        public Int32? GenderId
        {
            get => fields.GenderId[this];
            set => fields.GenderId[this] = value;
        }

        [DisplayName("Gender"), Expression("jGender.[Name]")]
        public String GenderName
        {
            get => fields.GenderName[this];
            set => fields.GenderName[this] = value;
        }

        [DisplayName("Date Of Birth"), NotNull]
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

        [DisplayName("Vacancy"), NotNull, ForeignKey("[dbo].[Vacancy]", "Id"), LeftJoin("jVacancy"), TextualField("VacancyNumber")]
        [LookupEditor(typeof(VacancyRow), InplaceAdd = false)]
        public Int32? VacancyId
        {
            get => fields.VacancyId[this];
            set => fields.VacancyId[this] = value;
        }

        [DisplayName("Vacancy"), Expression("jVacancy.[Number]")]
        public String VacancyNumber
        {
            get => fields.VacancyNumber[this];
            set => fields.VacancyNumber[this] = value;
        }

        [DisplayName("Job Title"), Expression("jVacancy.[JobTitle]")]
        public String JobTitle
        {
            get => fields.JobTitle[this];
            set => fields.JobTitle[this] = value;
        }

        [DisplayName("HiringManager"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jHiringManager"), TextualField("HiringManagerName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? HiringManagerId
        {
            get => fields.HiringManagerId[this];
            set => fields.HiringManagerId[this] = value;
        }

        [DisplayName("Hiring Manager"), Expression("jHiringManager.[Name]")]
        public String HiringManagerName
        {
            get => fields.HiringManagerName[this];
            set => fields.HiringManagerName[this] = value;
        }


        [DisplayName("Experiences"), MasterDetailRelation(foreignKey: "ApplicantId"), NotMapped]
        public List<ApplicantExperienceRow> ExperienceList
        {
            get => fields.ExperienceList[this];
            set => fields.ExperienceList[this] = value;
        }

        [DisplayName("Educations"), MasterDetailRelation(foreignKey: "ApplicantId"), NotMapped]
        public List<ApplicantEducationRow> EducationList
        {
            get => fields.EducationList[this];
            set => fields.EducationList[this] = value;
        }

        [DisplayName("Skills"), MasterDetailRelation(foreignKey: "ApplicantId"), NotMapped]
        public List<ApplicantTopSkillRow> SkillList
        {
            get => fields.SkillList[this];
            set => fields.SkillList[this] = value;
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

        public ApplicantRow()
            : base()
        {
        }

        public ApplicantRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Number;
            public StringField Description;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public StringField Picture;
            public DateTimeField DateOfBirth;
            public StringField PlaceOfBirth;
            public Int32Field GenderId;
            public StringField GenderName;
            public Int32Field VacancyId;
            public StringField VacancyNumber;
            public StringField JobTitle;
            public Int32Field HiringManagerId;
            public StringField HiringManagerName;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<ApplicantExperienceRow> ExperienceList;
            public RowListField<ApplicantEducationRow> EducationList;
            public RowListField<ApplicantTopSkillRow> SkillList;

        }
    }
}
