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
    [ConnectionKey("Default"), Module("Operation"), TableName("[dbo].[Reimbursement]")]
    [DisplayName("Reimbursements"), InstanceName("Reimbursement")]
    [ReadPermission("Operation:Reimbursement")]
    [ModifyPermission("Operation:Reimbursement")]
    [LookupScript(LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ReimbursementRow : LoggingRow<ReimbursementRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Number"), Size(200), NotNull, QuickSearch, NameProperty]
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

        [DisplayName("Transaction Date"), NotNull]
        public DateTime? TransactionDate
        {
            get => fields.TransactionDate[this];
            set => fields.TransactionDate[this] = value;
        }

        [DisplayName("Total Amount"), NotNull]
        [DefaultValue(0), Insertable(false), Updatable(false)]
        public Double? TotalAmount
        {
            get => fields.TotalAmount[this];
            set => fields.TotalAmount[this] = value;
        }


        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
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

        [DisplayName("Supervisor"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jSupervisor")]
        [LookupEditor(typeof(Payrolls.EmployeeRow), InplaceAdd = false)]
        public Int32? SupervisorId
        {
            get => fields.SupervisorId[this];
            set => fields.SupervisorId[this] = value;
        }

        [DisplayName("Supervisor"), Expression("jSupervisor.[Name]")]
        public String SupervisorName
        {
            get => fields.SupervisorName[this];
            set => fields.SupervisorName[this] = value;
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

        [DisplayName("Status"), NotNull]
        [DefaultValue(1)]
        public ReimbursementStatus? ReimbursementStatus
        {
            get => (ReimbursementStatus?)fields.ReimbursementStatus[this];
            set => fields.ReimbursementStatus[this] = (Int32?)value;
        }

        [DisplayName("Items"), MasterDetailRelation(foreignKey: "ReimbursementId"), NotMapped]
        public List<ReimbursementDetailRow> ItemList
        {
            get => fields.ItemList[this];
            set => fields.ItemList[this] = value;
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

        [DisplayName("Currency"), Size(10), Expression("jTenant.Currency"), Insertable(false), Updatable(false)]
        public String CurrencyName
        {
            get => fields.CurrencyName[this];
            set => fields.CurrencyName[this] = value;
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public ReimbursementRow()
            : base()
        {
        }

        public ReimbursementRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField Number;
            public StringField Description;
            public DateTimeField TransactionDate;
            public DoubleField TotalAmount;
            public Int32Field EmployeeId;
            public StringField EmployeeName;
            public Int32Field BranchId;
            public StringField BranchName;
            public Int32Field DepartmentId;
            public StringField DepartmentName;
            public Int32Field SupervisorId;
            public StringField SupervisorName;
            public Int32Field ReimbursementStatus;
            public RowListField<ReimbursementDetailRow> ItemList;
            public Int32Field TenantId;
            public StringField TenantName;
            public StringField CurrencyName;
        }
    }
}
