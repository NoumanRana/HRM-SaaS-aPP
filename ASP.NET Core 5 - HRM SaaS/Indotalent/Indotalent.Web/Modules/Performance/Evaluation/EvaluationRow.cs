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
    [ConnectionKey("Default"), Module("Performance"), TableName("[dbo].[Evaluation]")]
    [DisplayName("Evaluations"), InstanceName("Evaluation")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Performance:Evaluation")]
    [ModifyPermission("Performance:Evaluation")]
    public sealed class EvaluationRow : LoggingRow<EvaluationRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }


        [DisplayName("Name"), NameProperty]
        [Expression("CONCAT(T0.[Number], CONCAT(' - ', T0.[Indicator]))")]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }


        [DisplayName("Number"), Size(10), NotNull, QuickSearch]
        [Insertable(false), Updatable(false)]
        [DefaultValue("auto")]
        public String Number
        {
            get => fields.Number[this];
            set => fields.Number[this] = value;
        }

        [DisplayName("Group"), Size(100), NotNull]
        public String Group
        {
            get => fields.Group[this];
            set => fields.Group[this] = value;
        }

        [DisplayName("Indicator"), Size(1000), NotNull]
        public String Indicator
        {
            get => fields.Indicator[this];
            set => fields.Indicator[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
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

        public EvaluationRow()
            : base()
        {
        }

        public EvaluationRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Number;
            public StringField Group;
            public StringField Indicator;
            public StringField Description;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
