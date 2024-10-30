

using FluentMigrator;
using Serenity.Extensions;

namespace Indotalent.Migrations.DefaultDB
{
    [Migration(20211010130000)]
    public class DefaultDB_20211010_130000_Indotalent : AutoReversingMigration
    {
        public override void Up()
        {
            /*
             *  
             *  
             *  
             *  
             *  
             *  
             *  
             *  
             *  
             *  
             *  
             *  Attendance
             *  |_ Punch In
             *  |_ Punch Out
             *  |_ Overtime
             *  |_ Timesheet
             *  
             *  
             *  Leave
             *  |_ LeaveType
             *  |_ LeaveRequest
             *      |_ DelegatedTask
             *  
             *  
             *  Recruitment
             *  |_ Vacancy
             *  |_ Applicant
             *      |_ Experiences
             *      |_ Educations
             *      |_ Skills
             *  |_ Interview
             *      |_ InterviewResults
             *  |_ Onboarding
             *      |_ WorkingTools
             *  
             *      
             *  Performance
             *  |_ Evaluation
             *  |_ Appraisal
             *  |_ Promotion
             *  |_ Transfer
             *  
             *  
             *  Operation
             *  |_ Reimbursement
             *      |_ ReimbursementDetail
             *  |_ Ticket
             *      |_ TicketResponse
             *  |_ Meeting
             *      |_ MeetingParticipants
             *  |_ Training
             *      |_ TrainingParticipants
             *  |_ BusinessTrip
             *      |_ BusinessTripParticipants
             *  |_ Asset
             *  |_ AssetHandOver
             *  |_ Complaint
             *  |_ Event
             *  |_ Holiday
             *  |_ Award
             *  |_ Resignation
             *  |_ Warning
             *  |_ Termination
             *  |_ Announcement
             *  |_ StandardOperatingProcedure
             *          
             *  Payrolls
             *  |_ Income
             *  |_ Deduction
             *  |_ Grade
             *  |_ Employee
             *      |_ EmployeeIncome
             *      |_ EmployeeDeduction
             *      |_ EmployeeDocument
             *      |_ EmployeeExperience
             *      |_ EmployeeEducation
             *      |_ EmployeeTopSkill
             *  |_ Payroll
             *      |_ PayrollDetail
             *          |_PayrollDetailIncome
             *          |_PayrollDetailDeduction
             *  
             *  Organization
             *  |_ Designation
             *  |_ Department
             *  |_ Branch
             *  
             *  Settings
             *  |_ Company
             *  |_ Gender
             *  
             */



            Create.Table("Gender")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(20).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("GenderUniqueConstraint").OnTable("Gender").Columns("Name", "TenantId");

            Create.Table("Designation")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("DesignationUniqueConstraint").OnTable("Designation").Columns("Name", "TenantId");

            Create.Table("Department")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("DepartmentUniqueConstraint").OnTable("Department").Columns("Name", "TenantId");

            Create.Table("Branch")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("BranchUniqueConstraint").OnTable("Branch").Columns("Name", "TenantId");

            Create.Table("Income")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("IncomeUniqueConstraint").OnTable("Income").Columns("Name", "TenantId");

            Create.Table("Deduction")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("DeductionUniqueConstraint").OnTable("Deduction").Columns("Name", "TenantId");

            Create.Table("Grade")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("BasicSalary").AsDouble().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("GradeUniqueConstraint").OnTable("Grade").Columns("Name", "TenantId");

            Create.Table("Employee")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("EmployeeNumber").AsString(200).NotNullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("Picture").AsString(200).Nullable()
                .WithColumn("DateOfBirth").AsDateTime().NotNullable()
                .WithColumn("PlaceOfBirth").AsString(200).NotNullable()
                .WithColumn("BiometricNumber").AsString(200).Nullable()
                .WithColumn("TaxNumber").AsString(200).Nullable()
                .WithColumn("LatestEducationDegree").AsInt32().NotNullable()
                .WithColumn("GenderId").AsInt32().NotNullable()
                    .ForeignKey("FK_Employee_GenderId", "Gender", "Id")
                .WithColumn("GradeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Employee_GradeId", "Grade", "Id")
                .WithColumn("BasicSalary").AsDouble().NotNullable().WithDefaultValue(0)
                .WithColumn("DesignationId").AsInt32().NotNullable()
                    .ForeignKey("FK_Employee_DesignationId", "Designation", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Employee_DepartmentId", "Department", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_Employee_BranchId", "Branch", "Id")
                .WithColumn("SupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Employee_SupervisorId", "Employee", "Id")
                .WithColumn("LeaveQuota").AsDouble().NotNullable().WithDefaultValue(0)
                .WithColumn("LeaveTaken").AsDouble().WithDefaultValue(0)
                .WithColumn("DateOfJoining").AsDateTime().NotNullable()
                .WithColumn("BankAccountForPayroll").AsString(200).NotNullable()
                .WithColumn("BankNameForPayroll").AsString(200).NotNullable()
                .WithColumn("SpouseName").AsString(200).Nullable()
                .WithColumn("SpouseDateOfBirth").AsDateTime().Nullable()
                .WithColumn("SpouseProfession").AsString(200).Nullable()
                .WithColumn("SpouseStreet").AsString(200).Nullable()
                .WithColumn("SpouseCity").AsString(200).Nullable()
                .WithColumn("SpouseState").AsString(200).Nullable()
                .WithColumn("SpouseZipCode").AsString(10).Nullable()
                .WithColumn("SpousePhone").AsString(50).Nullable()
                .WithColumn("SpouseEmail").AsString(200).Nullable()
                .WithColumn("SystemUserId").AsInt32().Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("EmployeeUniqueConstraintEmployeeNumber").OnTable("Employee").Columns("EmployeeNumber", "TenantId");
            Create.UniqueConstraint("EmployeeUniqueConstraintBiometricNumber").OnTable("Employee").Columns("BiometricNumber", "TenantId");
            Create.UniqueConstraint("EmployeeUniqueConstraintTaxNumber").OnTable("Employee").Columns("TaxNumber", "TenantId");
            Create.UniqueConstraint("EmployeeUniqueConstraintBankAccountForPayroll").OnTable("Employee").Columns("BankAccountForPayroll", "TenantId");

            Create.Table("EmployeeIncome")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeIncome_EmployeeId", "Employee", "Id")
                .WithColumn("IncomeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeIncome_IncomeId", "Income", "Id")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Amount").AsDouble().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("EmployeeIncomeUniqueConstraint").OnTable("EmployeeIncome").Columns("EmployeeId", "IncomeId");

            Create.Table("EmployeeDeduction")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeDeduction_EmployeeId", "Employee", "Id")
                .WithColumn("DeductionId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeDeduction_DeductionId", "Deduction", "Id")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Amount").AsDouble().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("EmployeeDeductionUniqueConstraint").OnTable("EmployeeDeduction").Columns("EmployeeId", "DeductionId");

            Create.Table("EmployeeDocument")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeDocument_EmployeeId", "Employee", "Id")
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("ExpiredDate").AsDateTime().NotNullable()
                .WithColumn("Picture").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("EmployeeDocumentUniqueConstraint").OnTable("EmployeeDocument").Columns("EmployeeId", "Name");

            Create.Table("EmployeeExperience")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeExperience_EmployeeId", "Employee", "Id")
                .WithColumn("CompanyName").AsString(200).NotNullable()
                .WithColumn("Position").AsString(200).NotNullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("Salary").AsDouble().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("EmployeeEducation")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeEducation_EmployeeId", "Employee", "Id")
                .WithColumn("SchoolName").AsString(200).NotNullable()
                .WithColumn("StudyMajor").AsString(200).Nullable()
                .WithColumn("Grade").AsString(200).Nullable()
                .WithColumn("ShortNote").AsString(200).Nullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("EmployeeTopSkill")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeTopSkill_EmployeeId", "Employee", "Id")
                .WithColumn("SkillName").AsString(200).NotNullable()
                .WithColumn("ProficiencyScore").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("EmployeeParent")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeParent_EmployeeId", "Employee", "Id")
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("DateOfBirth").AsDateTime().Nullable()
                .WithColumn("Profession").AsString(200).Nullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("EmployeeChildren")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeChildren_EmployeeId", "Employee", "Id")
                .WithColumn("Name").AsString(200).Nullable()
                .WithColumn("DateOfBirth").AsDateTime().Nullable()
                .WithColumn("Profession").AsString(200).Nullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("EmployeeJobDescription")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeJobDescription_EmployeeId", "Employee", "Id")
                .WithColumn("JobDescription").AsString(200).NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("EmployeeKpi")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeKpi_EmployeeId", "Employee", "Id")
                .WithColumn("KpiDescription").AsString(200).NotNullable()
                .WithColumn("KpiIndicator").AsDouble().NotNullable()
                .WithColumn("KpiUnit").AsString(50).NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("EmployeeOkrObjective")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeOkrObjective_EmployeeId", "Employee", "Id")
                .WithColumn("Objective").AsString(200).NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("EmployeeOkrResult")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_EmployeeOkrResult_EmployeeId", "Employee", "Id")
                .WithColumn("Result").AsString(200).NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("Payroll")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("PaymentDate").AsDateTime().NotNullable()
                .WithColumn("AutoGeneratePayrollDetail").AsBoolean()
                .WithColumn("TotalBasicSalary").AsDouble().NotNullable()
                .WithColumn("TotalIncome").AsDouble().NotNullable()
                .WithColumn("TotalDeduction").AsDouble().NotNullable()
                .WithColumn("TotalTakeHomePay").AsDouble().NotNullable()
                .WithColumn("TotalPaymentAmount").AsDouble().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("PayrollUniqueConstraint").OnTable("Payroll").Columns("Number", "TenantId");

            Create.Table("PayrollDetail")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("PayrollId").AsInt32().NotNullable()
                    .ForeignKey("FK_PayrollDetail_PayrollId", "Payroll", "Id")
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_PayrollDetail_EmployeeId", "Employee", "Id")
                .WithColumn("BankAccount").AsString(200).NotNullable()
                .WithColumn("BankName").AsString(200).NotNullable()
                .WithColumn("BasicSalary").AsDouble().NotNullable()
                .WithColumn("TotalIncome").AsDouble().NotNullable()
                .WithColumn("TotalDeduction").AsDouble().NotNullable()
                .WithColumn("TakeHomePay").AsDouble().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();


            Create.Table("PayrollDetailIncome")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("PayrollDetailId").AsInt32().NotNullable()
                    .ForeignKey("FK_PayrollDetailIncome_PayrollDetailId", "PayrollDetail", "Id")
                .WithColumn("IncomeId").AsInt32().NotNullable()
                    .ForeignKey("FK_PayrollDetailIncome_IncomeId", "Income", "Id")
                .WithColumn("ShortNote").AsString(100).Nullable()
                .WithColumn("Amount").AsDouble().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("PayrollDetailDeduction")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("PayrollDetailId").AsInt32().NotNullable()
                    .ForeignKey("FK_PayrollDetailDeduction_PayrollDetailId", "PayrollDetail", "Id")
                .WithColumn("DeductionId").AsInt32().NotNullable()
                    .ForeignKey("FK_PayrollDetailDeduction_DeductionId", "Deduction", "Id")
                .WithColumn("ShortNote").AsString(100).Nullable()
                .WithColumn("Amount").AsDouble().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("Reimbursement")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("TransactionDate").AsDateTime().NotNullable()
                .WithColumn("TotalAmount").AsDouble().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Reimbursement_EmployeeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_Reimbursement_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Reimbursement_DepartmentId", "Department", "Id")
                .WithColumn("SupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Reimbursement_SupervisorId", "Employee", "Id")
                .WithColumn("ReimbursementStatus").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("ReimbursementUniqueConstraint").OnTable("Reimbursement").Columns("Number", "TenantId");

            Create.Table("ReimbursementDetail")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("ReimbursementId").AsInt32().NotNullable()
                    .ForeignKey("FK_ReimbursementDetail_ReimbursementId", "Reimbursement", "Id")
                .WithColumn("ShortNote").AsString(100).Nullable()
                .WithColumn("Amount").AsDouble().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("Ticket")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Request").AsString(int.MaxValue).NotNullable()
                .WithColumn("TicketDate").AsDateTime().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Ticket_EmployeeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_Ticket_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Ticket_DepartmentId", "Department", "Id")
                .WithColumn("SupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Ticket_SupervisorId", "Employee", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("TicketUniqueConstraint").OnTable("Ticket").Columns("Number", "TenantId");

            Create.Table("TicketDetail")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("TicketId").AsInt32().NotNullable()
                    .ForeignKey("FK_TicketDetail_TicketId", "Ticket", "Id")
                .WithColumn("Response").AsString(int.MaxValue).NotNullable()
                .WithColumn("ResponseBy").AsString(200).Nullable()
                .WithColumn("ResponseAt").AsDateTime().Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("Meeting")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Location").AsString(200).Nullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("MeetingUniqueConstraint").OnTable("Meeting").Columns("Name", "TenantId");

            Create.Table("MeetingParticipant")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("MeetingId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingParticipant_MeetingId", "Meeting", "Id")
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingParticipant_EmployeeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingParticipant_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingParticipant_DepartmentId", "Department", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("MeetingParticipantUniqueConstraint").OnTable("MeetingParticipant").Columns("MeetingId", "EmployeeId");



            Create.Table("Training")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Location").AsString(200).Nullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("TrainingUniqueConstraint").OnTable("Training").Columns("Name", "TenantId");

            Create.Table("TrainingParticipant")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("TrainingId").AsInt32().NotNullable()
                    .ForeignKey("FK_TrainingParticipant_TrainingId", "Training", "Id")
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_TrainingParticipant_EmployeeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_TrainingParticipant_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_TrainingParticipant_DepartmentId", "Department", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("TrainingParticipantUniqueConstraint").OnTable("TrainingParticipant").Columns("TrainingId", "EmployeeId");


            Create.Table("BusinessTrip")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Location").AsString(200).Nullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("BusinessTripUniqueConstraint").OnTable("BusinessTrip").Columns("Name", "TenantId");

            Create.Table("BusinessTripParticipant")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("BusinessTripId").AsInt32().NotNullable()
                    .ForeignKey("FK_BusinessTripParticipant_BusinessTripId", "BusinessTrip", "Id")
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_BusinessTripParticipant_EmployeeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_BusinessTripParticipant_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_BusinessTripParticipant_DepartmentId", "Department", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("BusinessTripParticipantUniqueConstraint").OnTable("BusinessTripParticipant").Columns("BusinessTripId", "EmployeeId");


            Create.Table("Asset")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(100).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("PurchaseDate").AsDateTime().NotNullable()
                .WithColumn("PurchasePrice").AsDouble().NotNullable()
                .WithColumn("PurchaseOrderNumber").AsString(100).Nullable()
                .WithColumn("PurchaseOrderBill").AsString(100).Nullable()
                .WithColumn("SupportCenter").AsString(1000).Nullable()
                .WithColumn("Manufacturer").AsString(200).Nullable()
                .WithColumn("Model").AsString(200).Nullable()
                .WithColumn("SerialNumber").AsString(200).Nullable()
                .WithColumn("ProductionYear").AsInt32().Nullable()
                .WithColumn("Images").AsString(int.MaxValue).Nullable()
                .WithColumn("AssetTagNumber").AsString(100).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("AssetNumberUniqueConstraint").OnTable("Asset").Columns("Number", "TenantId");
            Create.UniqueConstraint("AssetTagUniqueConstraint").OnTable("Asset").Columns("AssetTagNumber", "TenantId");


            Create.Table("AssetHandOver")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(100).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("HandOverDate").AsDateTime().NotNullable()
                .WithColumn("HandOverById").AsInt32().NotNullable()
                    .ForeignKey("FK_AssetHandOver_HandOverById", "Employee", "Id")
                .WithColumn("HandOverToId").AsInt32().NotNullable()
                    .ForeignKey("FK_AssetHandOver_HandOverToId", "Employee", "Id")
                .WithColumn("AssetId").AsInt32().NotNullable()
                    .ForeignKey("FK_AssetHandOver_AssetId", "Asset", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("AssetHandOverUniqueConstraint").OnTable("AssetHandOver").Columns("Number", "TenantId");

            Create.Table("Complaint")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("IncidentDate").AsDateTime().NotNullable()
                .WithColumn("IncidentDescription").AsString(int.MaxValue).Nullable()
                .WithColumn("ResolveSuggestion").AsString(int.MaxValue).Nullable()
                .WithColumn("Location").AsString(1000).Nullable()
                .WithColumn("Witness").AsString(1000).Nullable()
                .WithColumn("ReporterId").AsInt32().NotNullable()
                    .ForeignKey("FK_Complaint_ReporterId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_Complaint_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Complaint_DepartmentId", "Department", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("ComplaintUniqueConstraint").OnTable("Complaint").Columns("Number", "TenantId");

            Create.Table("Event")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Location").AsString(200).Nullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("EventUniqueConstraint").OnTable("Event").Columns("Name", "TenantId");

            Create.Table("Holiday")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("Award")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Reward").AsString(1000).Nullable()
                .WithColumn("Achievement").AsString(int.MaxValue).Nullable()
                .WithColumn("AwardeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Award_AwardeeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_Award_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Award_DepartmentId", "Department", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("AwardUniqueConstraint").OnTable("Award").Columns("Name", "TenantId");

            Create.Table("Resignation")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("ResignationDate").AsDateTime().NotNullable()
                .WithColumn("EffectiveDate").AsDateTime().NotNullable()
                .WithColumn("ResigneeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Resignation_ResigneeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_Resignation_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Resignation_DepartmentId", "Department", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("ResignationUniqueConstraint").OnTable("Resignation").Columns("Number", "TenantId");

            Create.Table("Warning")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("WarningDate").AsDateTime().NotNullable()
                .WithColumn("CorrectiveDate").AsDateTime().NotNullable()
                .WithColumn("WarningReason").AsString(int.MaxValue).NotNullable()
                .WithColumn("CorrectiveAction").AsString(int.MaxValue).NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Warning_EmployeeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_Warning_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Warning_DepartmentId", "Department", "Id")
                .WithColumn("SupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Warning_SupervisorId", "Employee", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("WarningUniqueConstraint").OnTable("Warning").Columns("Number", "TenantId");

            Create.Table("Termination")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("TerminationDate").AsDateTime().NotNullable()
                .WithColumn("EffectiveDate").AsDateTime().NotNullable()
                .WithColumn("TerminationReason").AsString(int.MaxValue).NotNullable()
                .WithColumn("ReturnedItem").AsString(int.MaxValue).NotNullable()
                .WithColumn("CompletedForm").AsString(int.MaxValue).Nullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Termination_EmployeeId", "Employee", "Id")
                .WithColumn("BranchId").AsInt32().NotNullable()
                    .ForeignKey("FK_Termination_BranchId", "Branch", "Id")
                .WithColumn("DepartmentId").AsInt32().NotNullable()
                    .ForeignKey("FK_Termination_DepartmentId", "Department", "Id")
                .WithColumn("SupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Termination_SupervisorId", "Employee", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("TerminationUniqueConstraint").OnTable("Termination").Columns("Number", "TenantId");

            Create.Table("Announcement")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("Message").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("AnnouncementUniqueConstraint").OnTable("Announcement").Columns("Name", "TenantId");

            Create.Table("SOP")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Reference").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("SOPNumberUniqueConstraint").OnTable("SOP").Columns("Number", "TenantId");
            Create.UniqueConstraint("SOPNameUniqueConstraint").OnTable("SOP").Columns("Name", "TenantId");


            Create.Table("Evaluation")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(100).NotNullable()
                .WithColumn("Group").AsString(100).NotNullable()
                .WithColumn("Indicator").AsString(1000).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("EvaluationUniqueConstraint").OnTable("Evaluation").Columns("Number", "TenantId");


            Create.Table("Appraisal")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(100).NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Appraisal_EmployeeId", "Employee", "Id")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Comment").AsString(1000).Nullable()
                .WithColumn("Recomendation").AsString(1000).Nullable()
                .WithColumn("CurrentAppraisalDate").AsDateTime().NotNullable()
                .WithColumn("LastAppraisalDate").AsDateTime().NotNullable()
                .WithColumn("EvaluatorId").AsInt32().NotNullable()
                    .ForeignKey("FK_Appraisal_EvaluatorId", "Employee", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("AppraisalUniqueConstraint").OnTable("Appraisal").Columns("Number", "TenantId");


            Create.Table("AppraisalDetail")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("AppraisalId").AsInt32().NotNullable()
                    .ForeignKey("FK_AppraisalDetail_AppraisalId", "Appraisal", "Id")
                .WithColumn("EvaluationId").AsInt32().NotNullable()
                    .ForeignKey("FK_AppraisalDetail_EvaluationId", "Evaluation", "Id")
                .WithColumn("EvaluationResult").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("AppraisalDetailUniqueConstraint").OnTable("AppraisalDetail").Columns("AppraisalId", "EvaluationId");


            Create.Table("Promotion")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(100).NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Promotion_EmployeeId", "Employee", "Id")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("EffectiveDate").AsDateTime().NotNullable()
                .WithColumn("PromotorId").AsInt32().NotNullable()
                    .ForeignKey("FK_Promotion_PromotorId", "Employee", "Id")
                .WithColumn("CurrentBasicSalary").AsDouble().NotNullable()
                .WithColumn("NewBasicSalary").AsDouble().NotNullable()
                .WithColumn("CurrentBranchId").AsInt32().Nullable()
                    .ForeignKey("FK_Promotion_CurrentBranchId", "Branch", "Id")
                .WithColumn("NewBranchId").AsInt32().Nullable()
                    .ForeignKey("FK_Promotion_NewBranchId", "Branch", "Id")
                .WithColumn("CurrentDepartmentId").AsInt32().Nullable()
                    .ForeignKey("FK_Promotion_CurrentDepartmentId", "Department", "Id")
                .WithColumn("NewDepartmentId").AsInt32().Nullable()
                    .ForeignKey("FK_Promotion_NewDepartmentId", "Department", "Id")
                .WithColumn("CurrentDesignationId").AsInt32().Nullable()
                    .ForeignKey("FK_Promotion_CurrentDesignationId", "Designation", "Id")
                .WithColumn("NewDesignationId").AsInt32().Nullable()
                    .ForeignKey("FK_Promotion_NewDesignationId", "Designation", "Id")
                .WithColumn("CurrentSupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Promotion_CurrentSupervisorId", "Employee", "Id")
                .WithColumn("NewSupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Promotion_NewSupervisorId", "Employee", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("PromotionUniqueConstraint").OnTable("Promotion").Columns("Number", "TenantId");

            Create.Table("PromotionReason")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("PromotionId").AsInt32().NotNullable()
                    .ForeignKey("FK_PromotionReason_PromotionId", "Promotion", "Id")
                .WithColumn("ShortNote").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("PromotionCompetency")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("PromotionId").AsInt32().NotNullable()
                    .ForeignKey("FK_PromotionCompetency_PromotionId", "Promotion", "Id")
                .WithColumn("ShortNote").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();


            Create.Table("Transfer")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(100).NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Transfer_EmployeeId", "Employee", "Id")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("EffectiveDate").AsDateTime().NotNullable()
                .WithColumn("PromotorId").AsInt32().NotNullable()
                    .ForeignKey("FK_Transfer_PromotorId", "Employee", "Id")
                .WithColumn("CurrentBasicSalary").AsDouble().NotNullable()
                .WithColumn("NewBasicSalary").AsDouble().NotNullable()
                .WithColumn("CurrentBranchId").AsInt32().Nullable()
                    .ForeignKey("FK_Transfer_CurrentBranchId", "Branch", "Id")
                .WithColumn("NewBranchId").AsInt32().Nullable()
                    .ForeignKey("FK_Transfer_NewBranchId", "Branch", "Id")
                .WithColumn("CurrentDepartmentId").AsInt32().Nullable()
                    .ForeignKey("FK_Transfer_CurrentDepartmentId", "Department", "Id")
                .WithColumn("NewDepartmentId").AsInt32().Nullable()
                    .ForeignKey("FK_Transfer_NewDepartmentId", "Department", "Id")
                .WithColumn("CurrentDesignationId").AsInt32().Nullable()
                    .ForeignKey("FK_Transfer_CurrentDesignationId", "Designation", "Id")
                .WithColumn("NewDesignationId").AsInt32().Nullable()
                    .ForeignKey("FK_Transfer_NewDesignationId", "Designation", "Id")
                .WithColumn("CurrentSupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Transfer_CurrentSupervisorId", "Employee", "Id")
                .WithColumn("NewSupervisorId").AsInt32().Nullable()
                    .ForeignKey("FK_Transfer_NewSupervisorId", "Employee", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("TransferUniqueConstraint").OnTable("Transfer").Columns("Number", "TenantId");

            Create.Table("TransferReason")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("TransferId").AsInt32().NotNullable()
                    .ForeignKey("FK_TransferReason_TransferId", "Transfer", "Id")
                .WithColumn("ShortNote").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("TransferCompetency")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("TransferId").AsInt32().NotNullable()
                    .ForeignKey("FK_TransferCompetency_TransferId", "Transfer", "Id")
                .WithColumn("ShortNote").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();


            Create.Table("Vacancy")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(100).NotNullable()
                .WithColumn("JobTitle").AsString(200).Nullable()
                .WithColumn("JobDescription").AsString(1000).Nullable()
                .WithColumn("OpenDate").AsDateTime().NotNullable()
                .WithColumn("CloseDate").AsDateTime().NotNullable()
                .WithColumn("HiringManagerId").AsInt32().NotNullable()
                    .ForeignKey("FK_Vacancy_HiringManagerId", "Employee", "Id")
                .WithColumn("HiringManagerBranchId").AsInt32().Nullable()
                    .ForeignKey("FK_Vacancy_HiringManagerBranchId", "Branch", "Id")
                .WithColumn("HiringManagerDepartmentId").AsInt32().Nullable()
                    .ForeignKey("FK_Vacancy_HiringManagerDepartmentId", "Department", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("VacancyUniqueConstraint").OnTable("Vacancy").Columns("Number", "TenantId");

            Create.Table("VacancyRequirement")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("VacancyId").AsInt32().NotNullable()
                    .ForeignKey("FK_VacancyRequirement_VacancyId", "Vacancy", "Id")
                .WithColumn("ShortNote").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("VacancyBenefit")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("VacancyId").AsInt32().NotNullable()
                    .ForeignKey("FK_VacancyBenefit_VacancyId", "Vacancy", "Id")
                .WithColumn("ShortNote").AsString(200).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("Applicant")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("Picture").AsString(200).Nullable()
                .WithColumn("DateOfBirth").AsDateTime().NotNullable()
                .WithColumn("PlaceOfBirth").AsString(200).NotNullable()
                .WithColumn("GenderId").AsInt32().NotNullable()
                    .ForeignKey("FK_Applicant_GenderId", "Gender", "Id")
                .WithColumn("VacancyId").AsInt32().NotNullable()
                    .ForeignKey("FK_Applicant_VacancyId", "Vacancy", "Id")
                .WithColumn("HiringManagerId").AsInt32().NotNullable()
                    .ForeignKey("FK_Applicant_HiringManagerId", "Employee", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("ApplicantUniqueConstraint").OnTable("Applicant").Columns("Number", "TenantId");

            Create.Table("ApplicantExperience")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("ApplicantId").AsInt32().NotNullable()
                    .ForeignKey("FK_ApplicantExperience_ApplicantId", "Applicant", "Id")
                .WithColumn("CompanyName").AsString(200).NotNullable()
                .WithColumn("Position").AsString(200).NotNullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("Salary").AsDouble().NotNullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("ApplicantEducation")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("ApplicantId").AsInt32().NotNullable()
                    .ForeignKey("FK_ApplicantEducation_ApplicantId", "Applicant", "Id")
                .WithColumn("SchoolName").AsString(200).NotNullable()
                .WithColumn("StudyMajor").AsString(200).Nullable()
                .WithColumn("Grade").AsString(200).Nullable()
                .WithColumn("ShortNote").AsString(200).Nullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("ApplicantTopSkill")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("ApplicantId").AsInt32().NotNullable()
                    .ForeignKey("FK_ApplicantTopSkill_ApplicantId", "Applicant", "Id")
                .WithColumn("SkillName").AsString(200).NotNullable()
                .WithColumn("ProficiencyScore").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("Interview")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Room").AsString(200).NotNullable()
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(10).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("ApplicantId").AsInt32().NotNullable()
                    .ForeignKey("FK_Interview_ApplicantId", "Applicant", "Id")
                .WithColumn("VacancyId").AsInt32().NotNullable()
                    .ForeignKey("FK_Interview_VacancyId", "Vacancy", "Id")
                .WithColumn("HiringManagerId").AsInt32().NotNullable()
                    .ForeignKey("FK_Interview_HiringManagerId", "Employee", "Id")
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("InterviewUniqueConstraint").OnTable("Interview").Columns("Number", "TenantId");

            Create.Table("InterviewResult")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("InterviewId").AsInt32().NotNullable()
                    .ForeignKey("FK_InterviewResult_InterviewId", "Interview", "Id")
                .WithColumn("ResultName").AsString(200).NotNullable()
                .WithColumn("ResultScore").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("LeaveType")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("LeaveTypeUniqueConstraint").OnTable("LeaveType").Columns("Name", "TenantId");

            Create.Table("LeaveRequest")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("Number").AsString(200).NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("FromDate").AsDateTime().NotNullable()
                .WithColumn("ToDate").AsDateTime().NotNullable()
                .WithColumn("Duration").AsDouble()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_LeaveRequest_EmployeeId", "Employee", "Id")
                .WithColumn("LeaveTypeId").AsInt32().NotNullable()
                    .ForeignKey("FK_LeaveRequest_LeaveTypeId", "LeaveType", "Id")
                .WithColumn("DelegatedEmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_LeaveRequest_DelegatedEmployeeId", "Employee", "Id")
                .WithColumn("LeaveRequestStatus").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("LeaveRequestUniqueConstraint").OnTable("LeaveRequest").Columns("Number", "TenantId");

            Create.Table("LeaveDelegatedTask")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("LeaveRequestId").AsInt32().NotNullable()
                    .ForeignKey("FK_LeaveDelegatedTask_LeaveRequestId", "LeaveRequest", "Id")
                .WithColumn("ShortNote").AsString(200).NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("LeaveEmergencyContact")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("LeaveRequestId").AsInt32().NotNullable()
                    .ForeignKey("FK_LeaveEmergencyContact_LeaveRequestId", "LeaveRequest", "Id")
                .WithColumn("ContactName").AsString(200).NotNullable()
                .WithColumn("ContactPhoneNumber").AsString(100).NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.Table("Punch")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Punch_EmployeeId", "Employee", "Id")
                .WithColumn("PunchDate").AsDate().NotNullable()
                .WithColumn("PunchIn").AsDateTime().NotNullable()
                .WithColumn("PunchOut").AsDateTime().Nullable()
                .WithColumn("Duration").AsDouble().Nullable().WithDefaultValue(0)
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("PunchUniqueConstraint").OnTable("Punch").Columns("EmployeeId", "PunchDate");

            Create.Table("Overtime")
                .WithColumn("Id").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("EmployeeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Overtime_EmployeeId", "Employee", "Id")
                .WithColumn("OvertimeDate").AsDate().NotNullable()
                .WithColumn("Duration").AsDouble().Nullable().WithDefaultValue(0)
                .WithColumn("OvertimeStatus").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("TenantId").AsInt32().NotNullable();

            Create.UniqueConstraint("OvertimeUniqueConstraint").OnTable("Overtime").Columns("EmployeeId", "OvertimeDate");

        }
    }
}