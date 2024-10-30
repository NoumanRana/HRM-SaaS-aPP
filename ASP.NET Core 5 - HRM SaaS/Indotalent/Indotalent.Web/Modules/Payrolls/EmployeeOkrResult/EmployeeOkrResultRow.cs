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
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[EmployeeOkrResult]")]
    [DisplayName("Employee OKR Result"), InstanceName("Employee OKR Result")]
    [ReadPermission("Payrolls:Employee")]
    [ModifyPermission("Payrolls:Employee")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class EmployeeOkrResultRow : LoggingRow<EmployeeOkrResultRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Result"), Size(200), NotNull, QuickSearch, NameProperty]
        public String Result
        {
            get => fields.Result[this];
            set => fields.Result[this] = value;
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

        public EmployeeOkrResultRow()
            : base()
        {
        }

        public EmployeeOkrResultRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public StringField Result;
            public StringField EmployeeName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
