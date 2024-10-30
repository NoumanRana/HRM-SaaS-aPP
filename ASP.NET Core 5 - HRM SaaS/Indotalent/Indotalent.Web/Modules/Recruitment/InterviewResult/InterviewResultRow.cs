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
    [ConnectionKey("Default"), Module("Recruitment"), TableName("[dbo].[InterviewResult]")]
    [DisplayName("Interview Results"), InstanceName("Interview Result")]
    [ReadPermission("Recruitment:Interview")]
    [ModifyPermission("Recruitment:Interview")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class InterviewResultRow : LoggingRow<InterviewResultRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Interview"), NotNull, ForeignKey("[dbo].[Interview]", "Id"), LeftJoin("jInterview"), TextualField("InterviewNumber")]
        public Int32? InterviewId
        {
            get => fields.InterviewId[this];
            set => fields.InterviewId[this] = value;
        }

        [DisplayName("Result Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public String ResultName
        {
            get => fields.ResultName[this];
            set => fields.ResultName[this] = value;
        }

        [DisplayName("Result Score"), NotNull]
        [DefaultValue(100)]
        public Int32? ResultScore
        {
            get => fields.ResultScore[this];
            set => fields.ResultScore[this] = value;
        }

        [DisplayName("Interview Number"), Expression("jInterview.[Number]")]
        public String InterviewNumber
        {
            get => fields.InterviewNumber[this];
            set => fields.InterviewNumber[this] = value;
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

        public InterviewResultRow()
            : base()
        {
        }

        public InterviewResultRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field InterviewId;
            public StringField ResultName;
            public Int32Field ResultScore;
            public StringField InterviewNumber;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
