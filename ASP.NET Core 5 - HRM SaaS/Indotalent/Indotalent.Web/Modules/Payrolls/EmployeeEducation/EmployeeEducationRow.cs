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
    [ConnectionKey("Default"), Module("Payrolls"), TableName("[dbo].[EmployeeEducation]")]
    [DisplayName("Employee Educations"), InstanceName("Employee Education")]
    [ReadPermission("Payrolls:Employee")]
    [ModifyPermission("Payrolls:Employee")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class EmployeeEducationRow : LoggingRow<EmployeeEducationRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("School Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public String SchoolName
        {
            get => fields.SchoolName[this];
            set => fields.SchoolName[this] = value;
        }

        [DisplayName("Study Major"), Size(200)]
        public String StudyMajor
        {
            get => fields.StudyMajor[this];
            set => fields.StudyMajor[this] = value;
        }

        [DisplayName("Grade"), Size(200)]
        public String Grade
        {
            get => fields.Grade[this];
            set => fields.Grade[this] = value;
        }

        [DisplayName("Short Note"), Size(200)]
        public String ShortNote
        {
            get => fields.ShortNote[this];
            set => fields.ShortNote[this] = value;
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

        public EmployeeEducationRow()
            : base()
        {
        }

        public EmployeeEducationRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public Int32Field EmployeeId;
            public StringField SchoolName;
            public StringField StudyMajor;
            public StringField Grade;
            public StringField ShortNote;
            public DateTimeField StartDate;
            public DateTimeField EndDate;
            public StringField EmployeeName;
            public Int32Field TenantId;
            public StringField TenantName;
        }
    }
}
