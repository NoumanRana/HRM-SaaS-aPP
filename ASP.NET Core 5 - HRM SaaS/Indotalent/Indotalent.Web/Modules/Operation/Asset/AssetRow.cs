using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Operation
{
    [ConnectionKey("Default"), Module("Operation"), TableName("[dbo].[Asset]")]
    [DisplayName("Assets"), InstanceName("Asset")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Operation:Asset")]
    [ModifyPermission("Operation:Asset")]
    public sealed class AssetRow : LoggingRow<AssetRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Purchase Date"), NotNull]
        public DateTime? PurchaseDate
        {
            get => fields.PurchaseDate[this];
            set => fields.PurchaseDate[this] = value;
        }

        [DisplayName("Purchase Price"), NotNull]
        [DefaultValue(0)]
        public Double? PurchasePrice
        {
            get => fields.PurchasePrice[this];
            set => fields.PurchasePrice[this] = value;
        }

        [DisplayName("Purchase Order#")]
        public String PurchaseOrderNumber
        {
            get => fields.PurchaseOrderNumber[this];
            set => fields.PurchaseOrderNumber[this] = value;
        }

        [DisplayName("Invoice / Bill#")]
        public String PurchaseOrderBill
        {
            get => fields.PurchaseOrderBill[this];
            set => fields.PurchaseOrderBill[this] = value;
        }

        [DisplayName("Support Center")]
        public String SupportCenter
        {
            get => fields.SupportCenter[this];
            set => fields.SupportCenter[this] = value;
        }

        [DisplayName("Manufacturer")]
        public String Manufacturer
        {
            get => fields.Manufacturer[this];
            set => fields.Manufacturer[this] = value;
        }

        [DisplayName("Model")]
        public String Model
        {
            get => fields.Model[this];
            set => fields.Model[this] = value;
        }

        [DisplayName("Serial Number")]
        public String SerialNumber
        {
            get => fields.SerialNumber[this];
            set => fields.SerialNumber[this] = value;
        }

        [DisplayName("Production Year")]
        public Int32? ProductionYear
        {
            get => fields.ProductionYear[this];
            set => fields.ProductionYear[this] = value;
        }

        [DisplayName("Asset Tag#")]
        public String AssetTagNumber
        {
            get => fields.AssetTagNumber[this];
            set => fields.AssetTagNumber[this] = value;
        }

        [DisplayName("Asset Images"), MultipleImageUploadEditor(FilenameFormat = "Asset/Images/~")]
        public string Images
        {
            get => fields.Images[this];
            set => fields.Images[this] = value;
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

        public AssetRow()
            : base()
        {
        }

        public AssetRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public DateTimeField PurchaseDate;
            public DoubleField PurchasePrice;
            public StringField PurchaseOrderNumber;
            public StringField PurchaseOrderBill;
            public StringField SupportCenter;
            public StringField Manufacturer;
            public StringField Model;
            public StringField SerialNumber;
            public Int32Field ProductionYear;
            public StringField AssetTagNumber;
            public StringField Images;
            public Int32Field TenantId;
            public StringField TenantName;


        }
    }
}
