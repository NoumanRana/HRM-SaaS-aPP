using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using Indotalent.Controls;

namespace Indotalent.EmployeeSelfService
{
    [ConnectionKey("Default"), Module("EmployeeSelfService"), TableName("[dbo].[Complaint]")]
    [DisplayName("Complaints"), InstanceName("Complaint")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("EmployeeSelfService:Complaint")]
    [ModifyPermission("EmployeeSelfService:Complaint")]
    public sealed class ComplaintRow : LoggingRow<ComplaintRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Incident Description"), Size(int.MaxValue), NotNull]
        [CustomHtmlNoteContentEditor]
        public String IncidentDescription
        {
            get => fields.IncidentDescription[this];
            set => fields.IncidentDescription[this] = value;
        }

        [DisplayName("Incident Date"), NotNull]
        public DateTime? IncidentDate
        {
            get => fields.IncidentDate[this];
            set => fields.IncidentDate[this] = value;
        }

        [DisplayName("Do you have any suggestions for resolving the complaint?"), Size(int.MaxValue)]
        [CustomHtmlNoteContentEditor]
        public String ResolveSuggestion
        {
            get => fields.ResolveSuggestion[this];
            set => fields.ResolveSuggestion[this] = value;
        }

        [DisplayName("Location"), NotNull]
        public String Location
        {
            get => fields.Location[this];
            set => fields.Location[this] = value;
        }

        [DisplayName("If there are other witnessed, please provide name and phone number")]
        [CustomHtmlNoteContentEditor]
        public String Witness
        {
            get => fields.Witness[this];
            set => fields.Witness[this] = value;
        }

        [DisplayName("Reported By"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jReporter")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? ReporterId
        {
            get => fields.ReporterId[this];
            set => fields.ReporterId[this] = value;
        }

        [DisplayName("Reported By"), Expression("jReporter.[Name]")]
        public String ReporterName
        {
            get => fields.ReporterName[this];
            set => fields.ReporterName[this] = value;
        }

        [DisplayName("Branch"), ForeignKey("[dbo].[Branch]", "Id"), LeftJoin("jBranch")]
        [LookupEditor(typeof(Organization.BranchRow), InplaceAdd = false)]
        public Int32? BranchId
        {
            get => fields.BranchId[this];
            set => fields.BranchId[this] = value;
        }

        [DisplayName("Branch"), Expression("jBranch.[Name]")]
        public String BranchName
        {
            get => fields.BranchName[this];
            set => fields.BranchName[this] = value;
        }

        [DisplayName("Department"), ForeignKey("[dbo].[Department]", "Id"), LeftJoin("jDepartment")]
        [LookupEditor(typeof(Organization.DepartmentRow), InplaceAdd = false)]
        public Int32? DepartmentId
        {
            get => fields.DepartmentId[this];
            set => fields.DepartmentId[this] = value;
        }

        [DisplayName("Department"), Expression("jDepartment.[Name]")]
        public String DepartmentName
        {
            get => fields.DepartmentName[this];
            set => fields.DepartmentName[this] = value;
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

        public ComplaintRow()
            : base()
        {
        }

        public ComplaintRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField IncidentDescription;
            public DateTimeField IncidentDate;
            public StringField ResolveSuggestion;
            public StringField Location;
            public StringField Witness;
            public Int32Field ReporterId;
            public StringField ReporterName;
            public Int32Field BranchId;
            public StringField BranchName;
            public Int32Field DepartmentId;
            public StringField DepartmentName;
            public Int32Field TenantId;
            public StringField TenantName;


        }
    }
}
