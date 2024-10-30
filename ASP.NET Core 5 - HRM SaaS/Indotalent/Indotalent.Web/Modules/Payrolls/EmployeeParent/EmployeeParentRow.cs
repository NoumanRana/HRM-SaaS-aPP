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
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[EmployeeParent]")]
    [DisplayName("Employee Parents"), InstanceName("Employee Parent")]
    [ReadPermission("Payrolls:Employee")]
    [ModifyPermission("Payrolls:Employee")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class EmployeeParentRow : LoggingRow<EmployeeParentRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Name"), Size(200), QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Profession"), Size(200)]
        public String Profession
        {
            get => fields.Profession[this];
            set => fields.Profession[this] = value;
        }

        [DisplayName("Date Of Birth")]
        public DateTime? DateOfBirth
        {
            get => fields.DateOfBirth[this];
            set => fields.DateOfBirth[this] = value;
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[Name]")]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Street"), Size(200)]
        public String Street
        {
            get => fields.Street[this];
            set => fields.Street[this] = value;
        }

        [DisplayName("City"), Size(200)]
        public String City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State"), Size(200)]
        public String State
        {
            get => fields.State[this];
            set => fields.State[this] = value;
        }

        [DisplayName("Zip Code"), Size(10)]
        public String ZipCode
        {
            get => fields.ZipCode[this];
            set => fields.ZipCode[this] = value;
        }

        [DisplayName("Phone"), Size(50)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Email"), Size(200)]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
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

        public EmployeeParentRow()
            : base()
        {
        }

        public EmployeeParentRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public StringField Name;
            public StringField Profession;
            public DateTimeField DateOfBirth;
            public StringField EmployeeName;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
