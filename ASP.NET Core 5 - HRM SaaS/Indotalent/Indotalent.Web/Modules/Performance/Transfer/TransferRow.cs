using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Extensions.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Performance
{
    [ConnectionKey("Default"), Module("Performance"), TableName("[dbo].[Transfer]")]
    [DisplayName("Transfers"), InstanceName("Transfer")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    [ReadPermission("Performance:Transfer")]
    [ModifyPermission("Performance:Transfer")]
    public sealed class TransferRow : LoggingRow<TransferRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
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

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        [Updatable(false)]
        public Int32? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Employee"), Expression("jEmployee.[Name]")]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Transfer Date"), NotNull]
        public DateTime? EffectiveDate
        {
            get => fields.EffectiveDate[this];
            set => fields.EffectiveDate[this] = value;
        }

        [DisplayName("Promotor"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jPromotor"), TextualField("PromotorName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        [Updatable(false)]
        public Int32? PromotorId
        {
            get => fields.PromotorId[this];
            set => fields.PromotorId[this] = value;
        }

        [DisplayName("Promotor"), Expression("jPromotor.[Name]")]
        public String PromotorName
        {
            get => fields.PromotorName[this];
            set => fields.PromotorName[this] = value;
        }

        [DisplayName("Basic Salary"), NotNull]
        public double? CurrentBasicSalary
        {
            get => fields.CurrentBasicSalary[this];
            set => fields.CurrentBasicSalary[this] = value;
        }

        [DisplayName("New Salary"), NotNull]
        public double? NewBasicSalary
        {
            get => fields.NewBasicSalary[this];
            set => fields.NewBasicSalary[this] = value;
        }

        [DisplayName("Branch"), ForeignKey("[dbo].[Branch]", "Id"), LeftJoin("jCurrentBranch"), TextualField("CurrentBranchName")]
        [LookupEditor(typeof(Organization.BranchRow), InplaceAdd = true)]
        public Int32? CurrentBranchId
        {
            get => fields.CurrentBranchId[this];
            set => fields.CurrentBranchId[this] = value;
        }

        [DisplayName("Branch"), Expression("jCurrentBranch.[Name]")]
        public String CurrentBranchName
        {
            get => fields.CurrentBranchName[this];
            set => fields.CurrentBranchName[this] = value;
        }

        [DisplayName("Branch"), ForeignKey("[dbo].[Branch]", "Id"), LeftJoin("jNewBranch"), TextualField("NewBranchName")]
        [LookupEditor(typeof(Organization.BranchRow), InplaceAdd = true)]
        public Int32? NewBranchId
        {
            get => fields.NewBranchId[this];
            set => fields.NewBranchId[this] = value;
        }

        [DisplayName("Branch"), Expression("jNewBranch.[Name]")]
        public String NewBranchName
        {
            get => fields.NewBranchName[this];
            set => fields.NewBranchName[this] = value;
        }

        [DisplayName("Department"), ForeignKey("[dbo].[Department]", "Id"), LeftJoin("jCurrentDepartment"), TextualField("CurrentDepartmentName")]
        [LookupEditor(typeof(Organization.DepartmentRow), InplaceAdd = true)]
        public Int32? CurrentDepartmentId
        {
            get => fields.CurrentDepartmentId[this];
            set => fields.CurrentDepartmentId[this] = value;
        }

        [DisplayName("Department"), Expression("jCurrentDepartment.[Name]")]
        public String CurrentDepartmentName
        {
            get => fields.CurrentDepartmentName[this];
            set => fields.CurrentDepartmentName[this] = value;
        }

        [DisplayName("Department"), ForeignKey("[dbo].[Department]", "Id"), LeftJoin("jNewDepartment"), TextualField("NewDepartmentName")]
        [LookupEditor(typeof(Organization.DepartmentRow), InplaceAdd = true)]
        public Int32? NewDepartmentId
        {
            get => fields.NewDepartmentId[this];
            set => fields.NewDepartmentId[this] = value;
        }

        [DisplayName("Department"), Expression("jNewDepartment.[Name]")]
        public String NewDepartmentName
        {
            get => fields.NewDepartmentName[this];
            set => fields.NewDepartmentName[this] = value;
        }

        [DisplayName("Designation"), ForeignKey("[dbo].[Designation]", "Id"), LeftJoin("jCurrentDesignation"), TextualField("CurrentDesignationName")]
        [LookupEditor(typeof(Organization.DesignationRow), InplaceAdd = true)]
        public Int32? CurrentDesignationId
        {
            get => fields.CurrentDesignationId[this];
            set => fields.CurrentDesignationId[this] = value;
        }

        [DisplayName("Designation"), Expression("jCurrentDesignation.[Name]")]
        public String CurrentDesignationName
        {
            get => fields.CurrentDesignationName[this];
            set => fields.CurrentDesignationName[this] = value;
        }

        [DisplayName("Designation"), ForeignKey("[dbo].[Designation]", "Id"), LeftJoin("jNewDesignation"), TextualField("NewDesignationName")]
        [LookupEditor(typeof(Organization.DesignationRow), InplaceAdd = true)]
        public Int32? NewDesignationId
        {
            get => fields.NewDesignationId[this];
            set => fields.NewDesignationId[this] = value;
        }

        [DisplayName("Designation"), Expression("jNewDesignation.[Name]")]
        public String NewDesignationName
        {
            get => fields.NewDesignationName[this];
            set => fields.NewDesignationName[this] = value;
        }

        [DisplayName("Supervisor"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jCurrentSupervisor"), TextualField("CurrentSupervisorName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? CurrentSupervisorId
        {
            get => fields.CurrentSupervisorId[this];
            set => fields.CurrentSupervisorId[this] = value;
        }

        [DisplayName("Supervisor"), Expression("jCurrentSupervisor.[Name]")]
        public String CurrentSupervisorName
        {
            get => fields.CurrentSupervisorName[this];
            set => fields.CurrentSupervisorName[this] = value;
        }

        [DisplayName("Supervisor"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jNewSupervisor"), TextualField("NewSupervisorName")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? NewSupervisorId
        {
            get => fields.NewSupervisorId[this];
            set => fields.NewSupervisorId[this] = value;
        }

        [DisplayName("Supervisor"), Expression("jNewSupervisor.[Name]")]
        public String NewSupervisorName
        {
            get => fields.NewSupervisorName[this];
            set => fields.NewSupervisorName[this] = value;
        }

        [DisplayName("Transfer Reason"), MasterDetailRelation(foreignKey: "TransferId"), NotMapped]
        public List<TransferReasonRow> TransferReasonList
        {
            get => fields.TransferReasonList[this];
            set => fields.TransferReasonList[this] = value;
        }

        [DisplayName("Transfer Competency"), MasterDetailRelation(foreignKey: "TransferId"), NotMapped]
        public List<TransferCompetencyRow> TransferCompetencyList
        {
            get => fields.TransferCompetencyList[this];
            set => fields.TransferCompetencyList[this] = value;
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

        public TransferRow()
            : base()
        {
        }

        public TransferRow(RowFields fields)
            : base(fields)
        {
        }


        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public DateTimeField EffectiveDate;
            public Int32Field PromotorId;
            public StringField PromotorName;
            public DoubleField CurrentBasicSalary;
            public DoubleField NewBasicSalary;
            public Int32Field CurrentBranchId;
            public StringField CurrentBranchName;
            public Int32Field NewBranchId;
            public StringField NewBranchName;
            public Int32Field CurrentDepartmentId;
            public StringField CurrentDepartmentName;
            public Int32Field NewDepartmentId;
            public StringField NewDepartmentName;
            public Int32Field CurrentDesignationId;
            public StringField CurrentDesignationName;
            public Int32Field NewDesignationId;
            public StringField NewDesignationName;
            public Int32Field CurrentSupervisorId;
            public StringField CurrentSupervisorName;
            public Int32Field NewSupervisorId;
            public StringField NewSupervisorName;
            public Int32Field TenantId;
            public StringField TenantName;

            public RowListField<TransferReasonRow> TransferReasonList;

            public RowListField<TransferCompetencyRow> TransferCompetencyList;

        }
    }
}
