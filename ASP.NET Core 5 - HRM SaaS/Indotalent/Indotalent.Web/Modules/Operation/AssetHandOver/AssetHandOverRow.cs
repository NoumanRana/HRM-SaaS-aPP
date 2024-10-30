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
    [ConnectionKey("Default"), Module("Operation"), TableName("[dbo].[AssetHandOver]")]
    [DisplayName("Asset Hand Overs"), InstanceName("Asset Hand Over")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Operation:AssetHandOver")]
    [ModifyPermission("Operation:AssetHandOver")]
    public sealed class AssetHandOverRow : LoggingRow<AssetHandOverRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Hand Over Date"), NotNull]
        public DateTime? HandOverDate
        {
            get => fields.HandOverDate[this];
            set => fields.HandOverDate[this] = value;
        }

        [DisplayName("Asset#"), NotNull, ForeignKey("[dbo].[Asset]", "Id"), LeftJoin("jAsset")]
        [LookupEditor(typeof(AssetRow), InplaceAdd = false)]
        public Int32? AssetId
        {
            get => fields.AssetId[this];
            set => fields.AssetId[this] = value;
        }

        [DisplayName("Asset#"), Expression("jAsset.[Number]")]
        public String AssetNumber
        {
            get => fields.AssetNumber[this];
            set => fields.AssetNumber[this] = value;
        }

        [DisplayName("Asset Description"), Expression("jAsset.[Description]")]
        public String AssetDescription
        {
            get => fields.AssetDescription[this];
            set => fields.AssetDescription[this] = value;
        }

        [DisplayName("Asset Tag#"), Expression("jAsset.[AssetTagNumber]")]
        public String AssetTagNumber
        {
            get => fields.AssetTagNumber[this];
            set => fields.AssetTagNumber[this] = value;
        }

        [DisplayName("Manufacturer"), Expression("jAsset.[Manufacturer]")]
        public String Manufacturer
        {
            get => fields.Manufacturer[this];
            set => fields.Manufacturer[this] = value;
        }

        [DisplayName("Model"), Expression("jAsset.[Model]")]
        public String Model
        {
            get => fields.Model[this];
            set => fields.Model[this] = value;
        }

        [DisplayName("Serial Number"), Expression("jAsset.[SerialNumber]")]
        public String SerialNumber
        {
            get => fields.SerialNumber[this];
            set => fields.SerialNumber[this] = value;
        }

        [DisplayName("Production Year"), Expression("jAsset.[ProductionYear]")]
        public Int32? ProductionYear
        {
            get => fields.ProductionYear[this];
            set => fields.ProductionYear[this] = value;
        }

        [DisplayName("Hand Over By"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jHandOverBy")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? HandOverById
        {
            get => fields.HandOverById[this];
            set => fields.HandOverById[this] = value;
        }

        [DisplayName("Hand Over By"), Expression("jHandOverBy.[Name]")]
        public String HandOverByName
        {
            get => fields.HandOverByName[this];
            set => fields.HandOverByName[this] = value;
        }

        [DisplayName("Hand Over To"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jHandOverTo")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? HandOverToId
        {
            get => fields.HandOverToId[this];
            set => fields.HandOverToId[this] = value;
        }

        [DisplayName("Hand Over To"), Expression("jHandOverTo.[Name]")]
        public String HandOverToName
        {
            get => fields.HandOverToName[this];
            set => fields.HandOverToName[this] = value;
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


        public AssetHandOverRow()
            : base()
        {
        }

        public AssetHandOverRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public DateTimeField HandOverDate;
            public Int32Field AssetId;
            public StringField AssetNumber;
            public StringField AssetDescription;
            public StringField AssetTagNumber;
            public StringField Manufacturer;
            public StringField Model;
            public StringField SerialNumber;
            public Int32Field ProductionYear;
            public Int32Field HandOverById;
            public StringField HandOverByName;
            public Int32Field HandOverToId;
            public StringField HandOverToName;
            public Int32Field TenantId;
            public StringField TenantName;


        }
    }
}
