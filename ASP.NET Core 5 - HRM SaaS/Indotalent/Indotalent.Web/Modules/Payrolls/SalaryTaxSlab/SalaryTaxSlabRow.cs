using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Indotalent.Payrolls
{
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[SalaryTaxSlab]")]
    [DisplayName("Salary Tax Slab"), InstanceName("Salary Tax Slab")]
    [ReadPermission("Payrolls:SalaryTaxSlab")]
    [ModifyPermission("Payrolls:SalaryTaxSlab")]
    public sealed class SalaryTaxSlabRow : Row<SalaryTaxSlabRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Tax Slab Id"), Identity, IdProperty]
        public Int32? TaxSlabId
        {
            get => fields.TaxSlabId[this];
            set => fields.TaxSlabId[this] = value;
        }

        // No direct Name field in the table, so use a computed Name property
        [DisplayName("Slab Range"), NameProperty, Expression("CONCAT('From ', T0.[From], ' to ', T0.[To])")]
        public String SlabRange
        {
            get => fields.SlabRange[this];
            set => fields.SlabRange[this] = value;
        }

        [DisplayName("From"), NotNull]
        public Decimal? From
        {
            get => fields.From[this];
            set => fields.From[this] = value;
        }

        [DisplayName("To"), NotNull]
        public Decimal? To
        {
            get => fields.To[this];
            set => fields.To[this] = value;
        }

        [DisplayName("Exempted Amount"), NotNull]
        public Decimal? ExemptedAmount
        {
            get => fields.ExemptedAmount[this];
            set => fields.ExemptedAmount[this] = value;
        }

        [DisplayName("Rate"), NotNull]
        public Decimal? Rate
        {
            get => fields.Rate[this];
            set => fields.Rate[this] = value;
        }

        public SalaryTaxSlabRow()
            : base()
        {
        }

        public SalaryTaxSlabRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TaxSlabId;
            public StringField SlabRange; // Used as a computed name
            public DecimalField From;
            public DecimalField To;
            public DecimalField ExemptedAmount;
            public DecimalField Rate;
        }
    }
}
