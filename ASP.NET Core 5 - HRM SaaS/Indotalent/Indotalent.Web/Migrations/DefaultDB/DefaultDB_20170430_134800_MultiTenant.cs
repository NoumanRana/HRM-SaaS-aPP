using FluentMigrator;
using Serenity.Extensions;

namespace Indotalent.Migrations.DefaultDB
{
    [Migration(20170430134800)]
    public class DefaultDB_20170430_134800_MultiTenant : AutoReversingMigration
    {
        public override void Up()
        {

            Create.Table("Tenant")
                .WithColumn("TenantId").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("TenantName").AsString(200).Unique().NotNullable()
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("Currency").AsString(5).NotNullable()
                .WithColumn("Street").AsString(200).Nullable()
                .WithColumn("City").AsString(200).Nullable()
                .WithColumn("State").AsString(200).Nullable()
                .WithColumn("ZipCode").AsString(50).Nullable()
                .WithColumn("Phone").AsString(50).Nullable()
                .WithColumn("Email").AsString(200).Nullable()
                .WithColumn("EmployeeNumberPrefix").AsString(5).Nullable().WithDefaultValue("EMP")
                .WithColumn("EmployeeNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("EmployeeNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("LeaveRequestNumberPrefix").AsString(5).Nullable().WithDefaultValue("LVR")
                .WithColumn("LeaveRequestNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("LeaveRequestNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("EvaluationNumberPrefix").AsString(5).Nullable().WithDefaultValue("EVL")
                .WithColumn("EvaluationNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("EvaluationNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("AppraisalNumberPrefix").AsString(5).Nullable().WithDefaultValue("APR")
                .WithColumn("AppraisalNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("AppraisalNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("PromotionNumberPrefix").AsString(5).Nullable().WithDefaultValue("PRM")
                .WithColumn("PromotionNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("PromotionNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("TransferNumberPrefix").AsString(5).Nullable().WithDefaultValue("TRF")
                .WithColumn("TransferNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("TransferNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("VacancyNumberPrefix").AsString(5).Nullable().WithDefaultValue("VCY")
                .WithColumn("VacancyNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("VacancyNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("ApplicantNumberPrefix").AsString(5).Nullable().WithDefaultValue("ACT")
                .WithColumn("ApplicantNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("ApplicantNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("InterviewNumberPrefix").AsString(5).Nullable().WithDefaultValue("TVW")
                .WithColumn("InterviewNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("InterviewNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("ReimbursementNumberPrefix").AsString(5).Nullable().WithDefaultValue("MBR")
                .WithColumn("ReimbursementNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("ReimbursementNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("TicketNumberPrefix").AsString(5).Nullable().WithDefaultValue("TCK")
                .WithColumn("TicketNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("TicketNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("AssetNumberPrefix").AsString(5).Nullable().WithDefaultValue("AST")
                .WithColumn("AssetNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("AssetNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("AssetHandOverNumberPrefix").AsString(5).Nullable().WithDefaultValue("AHO")
                .WithColumn("AssetHandOverNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("AssetHandOverNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("ComplaintNumberPrefix").AsString(5).Nullable().WithDefaultValue("CPL")
                .WithColumn("ComplaintNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("ComplaintNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("ResignationNumberPrefix").AsString(5).Nullable().WithDefaultValue("RSG")
                .WithColumn("ResignationNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("ResignationNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("WarningNumberPrefix").AsString(5).Nullable().WithDefaultValue("WRN")
                .WithColumn("WarningNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("WarningNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("TerminationNumberPrefix").AsString(5).Nullable().WithDefaultValue("TRM")
                .WithColumn("TerminationNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("TerminationNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("SOPNumberPrefix").AsString(5).Nullable().WithDefaultValue("SOP")
                .WithColumn("SOPNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("SOPNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("PayrollNumberPrefix").AsString(5).Nullable().WithDefaultValue("PYR")
                .WithColumn("PayrollNumberUseDate").AsBoolean().Nullable().WithDefaultValue(true)
                .WithColumn("PayrollNumberLength").AsInt16().NotNullable().WithDefaultValue(16)
                .WithColumn("MaximumUser").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().Nullable()
                .WithColumn("InsertUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable();

            Insert.IntoTable("Tenant")
                .Row(new
                {
                    TenantName = "ADMIN ROOT",
                    Currency = "USD",
                    MaximumUser = 1000,
                    EmployeeNumberPrefix = "EMP",
                    EmployeeNumberUseDate = true,
                    EmployeeNumberLength = 16,
                    LeaveRequestNumberPrefix = "LVR",
                    LeaveRequestNumberUseDate = true,
                    LeaveRequestNumberLength = 16,
                    EvaluationNumberPrefix = "EVL",
                    EvaluationNumberUseDate = true,
                    EvaluationNumberLength = 16,
                    AppraisalNumberPrefix = "APR",
                    AppraisalNumberUseDate = true,
                    AppraisalNumberLength = 16,
                    PromotionNumberPrefix = "PRM",
                    PromotionNumberUseDate = true,
                    PromotionNumberLength = 16,
                    TransferNumberPrefix = "TRF",
                    TransferNumberUseDate = true,
                    TransferNumberLength = 16,
                    VacancyNumberPrefix = "VCY",
                    VacancyNumberUseDate = true,
                    VacancyNumberLength = 16,
                    ApplicantNumberPrefix = "ACT",
                    ApplicantNumberUseDate = true,
                    ApplicantNumberLength = 16,
                    InterviewNumberPrefix = "TVW",
                    InterviewNumberUseDate = true,
                    InterviewNumberLength = 16,
                    ReimbursementNumberPrefix = "MBR",
                    ReimbursementNumberUseDate = true,
                    ReimbursementNumberLength = 16,
                    TicketNumberPrefix = "TCK",
                    TicketNumberUseDate = true,
                    TicketNumberLength = 16,
                    AssetNumberPrefix = "AST",
                    AssetNumberUseDate = true,
                    AssetNumberLength = 16,
                    AssetHandOverNumberPrefix = "AHO",
                    AssetHandOverNumberUseDate = true,
                    AssetHandOverNumberLength = 16,
                    ComplaintNumberPrefix = "CPL",
                    ComplaintNumberUseDate = true,
                    ComplaintNumberLength = 16,
                    ResignationNumberPrefix = "RSG",
                    ResignationNumberUseDate = true,
                    ResignationNumberLength = 16,
                    WarningNumberPrefix = "WRN",
                    WarningNumberUseDate = true,
                    WarningNumberLength = 16,
                    TerminationNumberPrefix = "TRM",
                    TerminationNumberUseDate = true,
                    TerminationNumberLength = 16,
                    SOPNumberPrefix = "SOP",
                    SOPNumberUseDate = true,
                    SOPNumberLength = 16,
                    PayrollNumberPrefix = "PYR",
                    PayrollNumberUseDate = true,
                    PayrollNumberLength = 16
                });

            Alter.Table("Users")
                .AddColumn("IsTenantAdmin").AsBoolean().NotNullable().WithDefaultValue(false)
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                    .ForeignKey("FK_Users_TenantId", "Tenant", "TenantId");

            Alter.Table("Roles")
                .AddColumn("TenantId").AsInt32().NotNullable().WithDefaultValue(1)
                    .ForeignKey("FK_Roles_TenantId", "Tenant", "TenantId");
        }
    }
}
