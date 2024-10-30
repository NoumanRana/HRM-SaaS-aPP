using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Operation
{
    [ConnectionKey("Default"), Module("Operation"), TableName("[dbo].[SOP]")]
    [DisplayName("SOP"), InstanceName("SOP")]
    [ReadPermission("Operation:SOP")]
    [ModifyPermission("Operation:SOP")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class SOPRow : Row<SOPRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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


        [DisplayName("Reference"), Size(200), FileUploadEditor(FilenameFormat = "File/SOP/~")]
        public String Reference
        {
            get => fields.Reference[this];
            set => fields.Reference[this] = value;
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

        public SOPRow()
            : base()
        {
        }

        public SOPRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Name;
            public StringField Description;
            public StringField Reference;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
