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
    [ConnectionKey("Default"), Module("Recruitment"), TableName("[dbo].[Interview]")]
    [DisplayName("Interviews"), InstanceName("Interview")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Recruitment:Interview")]
    [ModifyPermission("Recruitment:Interview")]
    public sealed class InterviewRow : LoggingRow<InterviewRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Room"), Size(200), NotNull, QuickSearch]
        public String Room
        {
            get => fields.Room[this];
            set => fields.Room[this] = value;
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

        [DisplayName("Applicant"), NotNull, ForeignKey("[dbo].[Applicant]", "Id"), LeftJoin("jApplicant"), TextualField("ApplicantName")]
        [LookupEditor(typeof(ApplicantRow), InplaceAdd = false)]
        public Int32? ApplicantId
        {
            get => fields.ApplicantId[this];
            set => fields.ApplicantId[this] = value;
        }

        [DisplayName("Applicant"), Expression("jApplicant.[Name]")]
        public String ApplicantName
        {
            get => fields.ApplicantName[this];
            set => fields.ApplicantName[this] = value;
        }

        [DisplayName("Start Date"), NotNull]
        [DateTimeEditor]
        [DefaultValue("now")]
        [DisplayFormat("g")]
        public DateTime? StartDate
        {
            get => fields.StartDate[this];
            set => fields.StartDate[this] = value;
        }

        [DisplayName("End Date"), NotNull]
        [DateTimeEditor]
        [DefaultValue("now")]
        [DisplayFormat("g")]
        public DateTime? EndDate
        {
            get => fields.EndDate[this];
            set => fields.EndDate[this] = value;
        }

        [DisplayName("Vacancy"), ForeignKey("[dbo].[Vacancy]", "Id"), LeftJoin("jVacancy"), TextualField("VacancyNumber")]
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

        [DisplayName("Hiring Manager"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jHiringManager"), TextualField("HiringManagerName")]
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



        [DisplayName("Results"), MasterDetailRelation(foreignKey: "InterviewId"), NotMapped]
        public List<InterviewResultRow> ResultList
        {
            get => fields.ResultList[this];
            set => fields.ResultList[this] = value;
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

        public InterviewRow()
            : base()
        {
        }

        public InterviewRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Room;
            public StringField Number;
            public StringField Description;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public Int32Field ApplicantId;
            public StringField ApplicantName;
            public Int32Field VacancyId;
            public StringField VacancyNumber;
            public StringField JobTitle;
            public Int32Field HiringManagerId;
            public StringField HiringManagerName;
            public Int32Field TenantId;
            public StringField TenantName;


            public RowListField<InterviewResultRow> ResultList;
        }
    }
}
