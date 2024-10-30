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
    [ConnectionKey("Default"), Module("Recruitment"), TableName("[dbo].[VacancyBenefit]")]
    [DisplayName("Compensation & Benefits"), InstanceName("Compensation & Benefit")]
    [ReadPermission("Recruitment:Vacancy")]
    [ModifyPermission("Recruitment:Vacancy")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class VacancyBenefitRow : LoggingRow<VacancyBenefitRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Vacancy"), NotNull, ForeignKey("[dbo].[Vacancy]", "Id"), LeftJoin("jVacancy"), TextualField("VacancyNumber")]
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

        [DisplayName("Benefit"), NotNull, NameProperty]
        public String ShortNote
        {
            get => fields.ShortNote[this];
            set => fields.ShortNote[this] = value;
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

        public VacancyBenefitRow()
            : base()
        {
        }

        public VacancyBenefitRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field VacancyId;
            public StringField VacancyNumber;
            public StringField ShortNote;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
