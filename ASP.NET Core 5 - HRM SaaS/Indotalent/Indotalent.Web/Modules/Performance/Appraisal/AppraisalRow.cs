using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Performance
{
    [ConnectionKey("Default"), Module("Performance"), TableName("[dbo].[Appraisal]")]
    [DisplayName("Appraisals"), InstanceName("Appraisal")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Performance:Appraisal")]
    [ModifyPermission("Performance:Appraisal")]
    public sealed class AppraisalRow : LoggingRow<AppraisalRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Comment"), Size(1000)]
        public String Comment
        {
            get => fields.Comment[this];
            set => fields.Comment[this] = value;
        }

        [DisplayName("Recomendation"), Size(1000)]
        public String Recomendation
        {
            get => fields.Recomendation[this];
            set => fields.Recomendation[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        [Updatable(false)]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee"), Expression("jEmployee.[Name]")]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Last Appraisal Date"), NotNull]
        public DateTime? LastAppraisalDate
        {
            get => fields.LastAppraisalDate[this];
            set => fields.LastAppraisalDate[this] = value;
        }

        [DisplayName("Appraisal Date"), NotNull]
        public DateTime? CurrentAppraisalDate
        {
            get => fields.CurrentAppraisalDate[this];
            set => fields.CurrentAppraisalDate[this] = value;
        }

        [DisplayName("Evaluator"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEvaluator"), TextualField("EvaluatorName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        [Updatable(false)]
        public Int32? EvaluatorId
        {
            get => fields.EvaluatorId[this];
            set => fields.EvaluatorId[this] = value;
        }

        [DisplayName("Evaluator"), Expression("jEvaluator.[Name]")]
        public String EvaluatorName
        {
            get => fields.EvaluatorName[this];
            set => fields.EvaluatorName[this] = value;
        }

        [DisplayName("Appraisal Detail"), MasterDetailRelation(foreignKey: "AppraisalId"), NotMapped]
        public List<AppraisalDetailRow> AppraisalDetailList
        {
            get => fields.AppraisalDetailList[this];
            set => fields.AppraisalDetailList[this] = value;
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

        public AppraisalRow()
            : base()
        {
        }

        public AppraisalRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Comment;
            public StringField Recomendation;
            public StringField Description;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public DateTimeField LastAppraisalDate;
            public DateTimeField CurrentAppraisalDate;
            public Int32Field EvaluatorId;
            public StringField EvaluatorName;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<AppraisalDetailRow> AppraisalDetailList;
        }
    }
}
