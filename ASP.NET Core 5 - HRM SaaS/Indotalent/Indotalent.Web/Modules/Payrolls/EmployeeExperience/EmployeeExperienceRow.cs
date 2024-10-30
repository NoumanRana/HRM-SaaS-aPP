using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Payrolls
{
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[EmployeeExperience]")]
    [DisplayName("Employee Experiences"), InstanceName("Employee Experience")]
    [ReadPermission("Payrolls:Employee")]
    [ModifyPermission("Payrolls:Employee")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class EmployeeExperienceRow : LoggingRow<EmployeeExperienceRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeName")]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Company Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public String CompanyName
        {
            get => fields.CompanyName[this];
            set => fields.CompanyName[this] = value;
        }

        [DisplayName("Position"), Size(200), NotNull]
        public String Position
        {
            get => fields.Position[this];
            set => fields.Position[this] = value;
        }

        [DisplayName("Start Date"), NotNull]
        public DateTime? StartDate
        {
            get => fields.StartDate[this];
            set => fields.StartDate[this] = value;
        }

        [DisplayName("End Date"), NotNull]
        public DateTime? EndDate
        {
            get => fields.EndDate[this];
            set => fields.EndDate[this] = value;
        }

        [DisplayName("Salary"), NotNull, DecimalEditor(Decimals = 2, MinValue = 0), DisplayFormat("#,##0.##")]
        public Double? Salary
        {
            get => fields.Salary[this];
            set => fields.Salary[this] = value;
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[Name]")]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
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

        public EmployeeExperienceRow()
            : base()
        {
        }

        public EmployeeExperienceRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public StringField CompanyName;
            public StringField Position;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public DoubleField Salary;
            public StringField EmployeeName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
