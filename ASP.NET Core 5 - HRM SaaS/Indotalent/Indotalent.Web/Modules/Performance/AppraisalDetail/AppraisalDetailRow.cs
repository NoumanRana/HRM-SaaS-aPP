using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Performance
{
    [ConnectionKey("Default"), Module("Performance"), TableName("[dbo].[AppraisalDetail]")]
    [DisplayName("Appraisal Details"), InstanceName("Appraisal Detail")]
    [ReadPermission("Performance:Appraisal")]
    [ModifyPermission("Performance:Appraisal")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class AppraisalDetailRow : LoggingRow<AppraisalDetailRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Appraisal"), NotNull, ForeignKey("[dbo].[Appraisal]", "Id"), LeftJoin("jAppraisal"), TextualField("AppraisalNumber")]
        public Int32? AppraisalId
        {
            get => fields.AppraisalId[this];
            set => fields.AppraisalId[this] = value;
        }

        [DisplayName("Appraisal"), Expression("jAppraisal.[Number]")]
        public String AppraisalNumber
        {
            get => fields.AppraisalNumber[this];
            set => fields.AppraisalNumber[this] = value;
        }

        [DisplayName("Evaluation"), NotNull, ForeignKey("[dbo].[Evaluation]", "Id"), LeftJoin("jEvaluation"), TextualField("EvaluationNumber")]
        [LookupEditor(typeof(EvaluationRow), InplaceAdd = true)]
        public Int32? EvaluationId
        {
            get => fields.EvaluationId[this];
            set => fields.EvaluationId[this] = value;
        }

        [DisplayName("Number"), Expression("jEvaluation.[Number]"), MinSelectLevel(SelectLevel.List), QuickSearch, NameProperty]
        public String EvaluationNumber
        {
            get => fields.EvaluationNumber[this];
            set => fields.EvaluationNumber[this] = value;
        }

        [DisplayName("Group"), Expression("jEvaluation.[Group]"), MinSelectLevel(SelectLevel.List)]
        public String EvaluationGroup
        {
            get => fields.EvaluationGroup[this];
            set => fields.EvaluationGroup[this] = value;
        }

        [DisplayName("Indicator"), Expression("jEvaluation.[Indicator]"), MinSelectLevel(SelectLevel.List)]
        public String EvaluationIndicator
        {
            get => fields.EvaluationIndicator[this];
            set => fields.EvaluationIndicator[this] = value;
        }

        [DisplayName("Evaluation Result"), NotNull]
        [DefaultValue(1)]
        public EvaluationResult? EvaluationResult
        {
            get => (EvaluationResult?)fields.EvaluationResult[this];
            set => fields.EvaluationResult[this] = (Int32?)value;
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

        public AppraisalDetailRow()
            : base()
        {
        }

        public AppraisalDetailRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field AppraisalId;
            public StringField AppraisalNumber;
            public Int32Field EvaluationResult;
            public Int32Field EvaluationId;
            public StringField EvaluationNumber;
            public StringField EvaluationGroup;
            public StringField EvaluationIndicator;
            public Int32Field TenantId;
            public StringField TenantName;

        }
    }
}
