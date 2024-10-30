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
    [ConnectionKey("Default"), Module("Recruitment"), TableName("[dbo].[ApplicantTopSkill]")]
    [DisplayName("Applicant Top Skills"), InstanceName("Applicant Top Skill")]
    [ReadPermission("Recruitment:Applicant")]
    [ModifyPermission("Recruitment:Applicant")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ApplicantTopSkillRow : LoggingRow<ApplicantTopSkillRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Skill Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public String SkillName
        {
            get => fields.SkillName[this];
            set => fields.SkillName[this] = value;
        }

        [DisplayName("Proficiency Score"), NotNull]
        [DefaultValue(100)]
        public Int32? ProficiencyScore
        {
            get => fields.ProficiencyScore[this];
            set => fields.ProficiencyScore[this] = value;
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

        public ApplicantTopSkillRow()
            : base()
        {
        }

        public ApplicantTopSkillRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field ApplicantId;
            public StringField SkillName;
            public Int32Field ProficiencyScore;
            public StringField ApplicantName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
