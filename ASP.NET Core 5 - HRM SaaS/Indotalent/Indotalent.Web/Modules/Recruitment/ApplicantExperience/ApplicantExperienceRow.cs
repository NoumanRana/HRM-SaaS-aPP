using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Recruitment
{
    [ConnectionKey("Default"), Module("Recruitment"), TableName("[dbo].[ApplicantExperience]")]
    [DisplayName("Applicant Experiences"), InstanceName("Applicant Experience")]
    [ReadPermission("Recruitment:Applicant")]
    [ModifyPermission("Recruitment:Applicant")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ApplicantExperienceRow : LoggingRow<ApplicantExperienceRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Applicant"), NotNull, ForeignKey("[dbo].[Applicant]", "Id"), LeftJoin("jApplicant"), TextualField("ApplicantName")]
        public Int32? ApplicantId
        {
            get => fields.ApplicantId[this];
            set => fields.ApplicantId[this] = value;
        }

        [DisplayName("Company Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public String CompanyName
        {
            get => fields.CompanyName[this];
            set => fields.CompanyName[this] = value;
        }

        [DisplayName("Position"), Size(200), NotNull]
        public String Position
        {
            get => fields.Position[this];
            set => fields.Position[this] = value;
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get => fields.StartDate[this];
            set => fields.StartDate[this] = value;
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get => fields.EndDate[this];
            set => fields.EndDate[this] = value;
        }

        [DisplayName("Salary"), NotNull]
        public Double? Salary
        {
            get => fields.Salary[this];
            set => fields.Salary[this] = value;
        }

        [DisplayName("Applicant Name"), Expression("jApplicant.[Name]")]
        public String ApplicantName
        {
            get => fields.ApplicantName[this];
            set => fields.ApplicantName[this] = value;
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

        public ApplicantExperienceRow()
            : base()
        {
        }

        public ApplicantExperienceRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field ApplicantId;
            public StringField CompanyName;
            public StringField Position;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public DoubleField Salary;
            public StringField ApplicantName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
