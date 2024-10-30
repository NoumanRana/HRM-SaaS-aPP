using Indotalent.Administration.Entities;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Indotalent.Settings
{
    [ConnectionKey("Default"), Module("Settings"), TableName("[dbo].[Tenant]")]
    [DisplayName("My Company"), InstanceName("My Company")]
    [ReadPermission("Settings:MyCompany")]
    [ModifyPermission("Settings:MyCompany")]
    public sealed class MyCompanyRow : LoggingRow<MyCompanyRow.RowFields>, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Company Id"), Identity, IdProperty]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        [DisplayName("Company Name"), Size(200), NotNull, QuickSearch, NameProperty]
        public String TenantName
        {
            get => fields.TenantName[this];
            set => fields.TenantName[this] = value;
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Currency"), Size(5), NotNull]
        public String Currency
        {
            get => fields.Currency[this];
            set => fields.Currency[this] = value;
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

        [DisplayName("Zip Code"), Size(50)]
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

        [DisplayName("User Max"), NotNull, Updatable(false)]
        public Int32? MaximumUser
        {
            get => fields.MaximumUser[this];
            set => fields.MaximumUser[this] = value;
        }

        [DisplayName("Employee Prefix"), Size(5), DefaultValue("EMP")]
        public String EmployeeNumberPrefix
        {
            get => fields.EmployeeNumberPrefix[this];
            set => fields.EmployeeNumberPrefix[this] = value;
        }

        [DisplayName("Employee Use Date"), DefaultValue(false)]
        public Boolean? EmployeeNumberUseDate
        {
            get => fields.EmployeeNumberUseDate[this];
            set => fields.EmployeeNumberUseDate[this] = value;
        }

        [DisplayName("Employee Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? EmployeeNumberLength
        {
            get => fields.EmployeeNumberLength[this];
            set => fields.EmployeeNumberLength[this] = value;
        }

        [DisplayName("Leave Request Prefix"), Size(5), DefaultValue("LVR")]
        public String LeaveRequestNumberPrefix
        {
            get => fields.LeaveRequestNumberPrefix[this];
            set => fields.LeaveRequestNumberPrefix[this] = value;
        }

        [DisplayName("Leave Request Use Date"), DefaultValue(true)]
        public Boolean? LeaveRequestNumberUseDate
        {
            get => fields.LeaveRequestNumberUseDate[this];
            set => fields.LeaveRequestNumberUseDate[this] = value;
        }

        [DisplayName("Leave Request Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? LeaveRequestNumberLength
        {
            get => fields.LeaveRequestNumberLength[this];
            set => fields.LeaveRequestNumberLength[this] = value;
        }

        [DisplayName("Evaluation Prefix"), Size(5), DefaultValue("EVL")]
        public String EvaluationNumberPrefix
        {
            get => fields.EvaluationNumberPrefix[this];
            set => fields.EvaluationNumberPrefix[this] = value;
        }

        [DisplayName("Evaluation Use Date"), DefaultValue(true)]
        public Boolean? EvaluationNumberUseDate
        {
            get => fields.EvaluationNumberUseDate[this];
            set => fields.EvaluationNumberUseDate[this] = value;
        }

        [DisplayName("Evaluation Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? EvaluationNumberLength
        {
            get => fields.EvaluationNumberLength[this];
            set => fields.EvaluationNumberLength[this] = value;
        }

        [DisplayName("Appraisal Prefix"), Size(5), DefaultValue("APR")]
        public String AppraisalNumberPrefix
        {
            get => fields.AppraisalNumberPrefix[this];
            set => fields.AppraisalNumberPrefix[this] = value;
        }

        [DisplayName("Appraisal Use Date"), DefaultValue(true)]
        public Boolean? AppraisalNumberUseDate
        {
            get => fields.AppraisalNumberUseDate[this];
            set => fields.AppraisalNumberUseDate[this] = value;
        }

        [DisplayName("Appraisal Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? AppraisalNumberLength
        {
            get => fields.AppraisalNumberLength[this];
            set => fields.AppraisalNumberLength[this] = value;
        }

        [DisplayName("Promotion Prefix"), Size(5), DefaultValue("PRM")]
        public String PromotionNumberPrefix
        {
            get => fields.PromotionNumberPrefix[this];
            set => fields.PromotionNumberPrefix[this] = value;
        }

        [DisplayName("Promotion Use Date"), DefaultValue(true)]
        public Boolean? PromotionNumberUseDate
        {
            get => fields.PromotionNumberUseDate[this];
            set => fields.PromotionNumberUseDate[this] = value;
        }

        [DisplayName("Promotion Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? PromotionNumberLength
        {
            get => fields.PromotionNumberLength[this];
            set => fields.PromotionNumberLength[this] = value;
        }

        [DisplayName("Transfer Prefix"), Size(5), DefaultValue("TRF")]
        public String TransferNumberPrefix
        {
            get => fields.TransferNumberPrefix[this];
            set => fields.TransferNumberPrefix[this] = value;
        }

        [DisplayName("Transfer Use Date"), DefaultValue(true)]
        public Boolean? TransferNumberUseDate
        {
            get => fields.TransferNumberUseDate[this];
            set => fields.TransferNumberUseDate[this] = value;
        }

        [DisplayName("Transfer Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? TransferNumberLength
        {
            get => fields.TransferNumberLength[this];
            set => fields.TransferNumberLength[this] = value;
        }

        [DisplayName("Vacancy Prefix"), Size(5), DefaultValue("VCY")]
        public String VacancyNumberPrefix
        {
            get => fields.VacancyNumberPrefix[this];
            set => fields.VacancyNumberPrefix[this] = value;
        }

        [DisplayName("Vacancy Use Date"), DefaultValue(true)]
        public Boolean? VacancyNumberUseDate
        {
            get => fields.VacancyNumberUseDate[this];
            set => fields.VacancyNumberUseDate[this] = value;
        }

        [DisplayName("Vacancy Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? VacancyNumberLength
        {
            get => fields.VacancyNumberLength[this];
            set => fields.VacancyNumberLength[this] = value;
        }

        [DisplayName("Applicant Prefix"), Size(5), DefaultValue("ACT")]
        public String ApplicantNumberPrefix
        {
            get => fields.ApplicantNumberPrefix[this];
            set => fields.ApplicantNumberPrefix[this] = value;
        }

        [DisplayName("Applicant Use Date"), DefaultValue(true)]
        public Boolean? ApplicantNumberUseDate
        {
            get => fields.ApplicantNumberUseDate[this];
            set => fields.ApplicantNumberUseDate[this] = value;
        }

        [DisplayName("Applicant Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? ApplicantNumberLength
        {
            get => fields.ApplicantNumberLength[this];
            set => fields.ApplicantNumberLength[this] = value;
        }

        [DisplayName("Interview Prefix"), Size(5), DefaultValue("TVW")]
        public String InterviewNumberPrefix
        {
            get => fields.InterviewNumberPrefix[this];
            set => fields.InterviewNumberPrefix[this] = value;
        }

        [DisplayName("Interview Use Date"), DefaultValue(true)]
        public Boolean? InterviewNumberUseDate
        {
            get => fields.InterviewNumberUseDate[this];
            set => fields.InterviewNumberUseDate[this] = value;
        }

        [DisplayName("Interview Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? InterviewNumberLength
        {
            get => fields.InterviewNumberLength[this];
            set => fields.InterviewNumberLength[this] = value;
        }

        [DisplayName("Reimbursement Prefix"), Size(5), DefaultValue("MBR")]
        public String ReimbursementNumberPrefix
        {
            get => fields.ReimbursementNumberPrefix[this];
            set => fields.ReimbursementNumberPrefix[this] = value;
        }

        [DisplayName("Reimbursement Use Date"), DefaultValue(true)]
        public Boolean? ReimbursementNumberUseDate
        {
            get => fields.ReimbursementNumberUseDate[this];
            set => fields.ReimbursementNumberUseDate[this] = value;
        }

        [DisplayName("Reimbursement Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? ReimbursementNumberLength
        {
            get => fields.ReimbursementNumberLength[this];
            set => fields.ReimbursementNumberLength[this] = value;
        }

        [DisplayName("Ticket Prefix"), Size(5), DefaultValue("TCK")]
        public String TicketNumberPrefix
        {
            get => fields.TicketNumberPrefix[this];
            set => fields.TicketNumberPrefix[this] = value;
        }

        [DisplayName("Ticket Use Date"), DefaultValue(true)]
        public Boolean? TicketNumberUseDate
        {
            get => fields.TicketNumberUseDate[this];
            set => fields.TicketNumberUseDate[this] = value;
        }

        [DisplayName("Ticket Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? TicketNumberLength
        {
            get => fields.TicketNumberLength[this];
            set => fields.TicketNumberLength[this] = value;
        }

        [DisplayName("Asset Prefix"), Size(5), DefaultValue("AST")]
        public String AssetNumberPrefix
        {
            get => fields.AssetNumberPrefix[this];
            set => fields.AssetNumberPrefix[this] = value;
        }

        [DisplayName("Asset Use Date"), DefaultValue(true)]
        public Boolean? AssetNumberUseDate
        {
            get => fields.AssetNumberUseDate[this];
            set => fields.AssetNumberUseDate[this] = value;
        }

        [DisplayName("Asset Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? AssetNumberLength
        {
            get => fields.AssetNumberLength[this];
            set => fields.AssetNumberLength[this] = value;
        }

        [DisplayName("Asset Hand Over Prefix"), Size(5), DefaultValue("AHO")]
        public String AssetHandOverNumberPrefix
        {
            get => fields.AssetHandOverNumberPrefix[this];
            set => fields.AssetHandOverNumberPrefix[this] = value;
        }

        [DisplayName("Asset Hand Over Use Date"), DefaultValue(true)]
        public Boolean? AssetHandOverNumberUseDate
        {
            get => fields.AssetHandOverNumberUseDate[this];
            set => fields.AssetHandOverNumberUseDate[this] = value;
        }

        [DisplayName("Asset Hand Over Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? AssetHandOverNumberLength
        {
            get => fields.AssetHandOverNumberLength[this];
            set => fields.AssetHandOverNumberLength[this] = value;
        }

        [DisplayName("Complaint Prefix"), Size(5), DefaultValue("CPL")]
        public String ComplaintNumberPrefix
        {
            get => fields.ComplaintNumberPrefix[this];
            set => fields.ComplaintNumberPrefix[this] = value;
        }

        [DisplayName("Complaint Use Date"), DefaultValue(true)]
        public Boolean? ComplaintNumberUseDate
        {
            get => fields.ComplaintNumberUseDate[this];
            set => fields.ComplaintNumberUseDate[this] = value;
        }

        [DisplayName("Complaint Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? ComplaintNumberLength
        {
            get => fields.ComplaintNumberLength[this];
            set => fields.ComplaintNumberLength[this] = value;
        }

        [DisplayName("Resignation Prefix"), Size(5), DefaultValue("RSG")]
        public String ResignationNumberPrefix
        {
            get => fields.ResignationNumberPrefix[this];
            set => fields.ResignationNumberPrefix[this] = value;
        }

        [DisplayName("Resignation Use Date"), DefaultValue(true)]
        public Boolean? ResignationNumberUseDate
        {
            get => fields.ResignationNumberUseDate[this];
            set => fields.ResignationNumberUseDate[this] = value;
        }

        [DisplayName("Resignation Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? ResignationNumberLength
        {
            get => fields.ResignationNumberLength[this];
            set => fields.ResignationNumberLength[this] = value;
        }

        [DisplayName("Warning Prefix"), Size(5), DefaultValue("WRN")]
        public String WarningNumberPrefix
        {
            get => fields.WarningNumberPrefix[this];
            set => fields.WarningNumberPrefix[this] = value;
        }

        [DisplayName("Warning Use Date"), DefaultValue(true)]
        public Boolean? WarningNumberUseDate
        {
            get => fields.WarningNumberUseDate[this];
            set => fields.WarningNumberUseDate[this] = value;
        }

        [DisplayName("Warning Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? WarningNumberLength
        {
            get => fields.WarningNumberLength[this];
            set => fields.WarningNumberLength[this] = value;
        }

        [DisplayName("Termination Prefix"), Size(5), DefaultValue("TRM")]
        public String TerminationNumberPrefix
        {
            get => fields.TerminationNumberPrefix[this];
            set => fields.TerminationNumberPrefix[this] = value;
        }

        [DisplayName("Termination Use Date"), DefaultValue(true)]
        public Boolean? TerminationNumberUseDate
        {
            get => fields.TerminationNumberUseDate[this];
            set => fields.TerminationNumberUseDate[this] = value;
        }

        [DisplayName("Termination Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? TerminationNumberLength
        {
            get => fields.TerminationNumberLength[this];
            set => fields.TerminationNumberLength[this] = value;
        }

        [DisplayName("SOP Prefix"), Size(5), DefaultValue("SOP")]
        public String SOPNumberPrefix
        {
            get => fields.SOPNumberPrefix[this];
            set => fields.SOPNumberPrefix[this] = value;
        }

        [DisplayName("SOP Use Date"), DefaultValue(false)]
        public Boolean? SOPNumberUseDate
        {
            get => fields.SOPNumberUseDate[this];
            set => fields.SOPNumberUseDate[this] = value;
        }

        [DisplayName("SOP Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? SOPNumberLength
        {
            get => fields.SOPNumberLength[this];
            set => fields.SOPNumberLength[this] = value;
        }

        [DisplayName("Payroll Prefix"), Size(5), DefaultValue("PYR")]
        public String PayrollNumberPrefix
        {
            get => fields.PayrollNumberPrefix[this];
            set => fields.PayrollNumberPrefix[this] = value;
        }

        [DisplayName("Payroll Use Date"), DefaultValue(true)]
        public Boolean? PayrollNumberUseDate
        {
            get => fields.PayrollNumberUseDate[this];
            set => fields.PayrollNumberUseDate[this] = value;
        }

        [DisplayName("Payroll Length"), DefaultValue(16), NotNull, IntegerEditor(MinValue = 2, MaxValue = 50)]
        public Int16? PayrollNumberLength
        {
            get => fields.PayrollNumberLength[this];
            set => fields.PayrollNumberLength[this] = value;
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        public MyCompanyRow()
            : base()
        {
        }

        public MyCompanyRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field TenantId;
            public StringField TenantName;
            public StringField Description;
            public StringField Currency;
            public StringField Street;
            public StringField City;
            public StringField State;
            public StringField ZipCode;
            public StringField Phone;
            public StringField Email;
            public Int32Field MaximumUser;

            public StringField EmployeeNumberPrefix;
            public BooleanField EmployeeNumberUseDate;
            public Int16Field EmployeeNumberLength;
            public StringField LeaveRequestNumberPrefix;
            public BooleanField LeaveRequestNumberUseDate;
            public Int16Field LeaveRequestNumberLength;
            public StringField EvaluationNumberPrefix;
            public BooleanField EvaluationNumberUseDate;
            public Int16Field EvaluationNumberLength;
            public StringField AppraisalNumberPrefix;
            public BooleanField AppraisalNumberUseDate;
            public Int16Field AppraisalNumberLength;
            public StringField PromotionNumberPrefix;
            public BooleanField PromotionNumberUseDate;
            public Int16Field PromotionNumberLength;
            public StringField TransferNumberPrefix;
            public BooleanField TransferNumberUseDate;
            public Int16Field TransferNumberLength;
            public StringField VacancyNumberPrefix;
            public BooleanField VacancyNumberUseDate;
            public Int16Field VacancyNumberLength;
            public StringField ApplicantNumberPrefix;
            public BooleanField ApplicantNumberUseDate;
            public Int16Field ApplicantNumberLength;
            public StringField InterviewNumberPrefix;
            public BooleanField InterviewNumberUseDate;
            public Int16Field InterviewNumberLength;
            public StringField ReimbursementNumberPrefix;
            public BooleanField ReimbursementNumberUseDate;
            public Int16Field ReimbursementNumberLength;
            public StringField TicketNumberPrefix;
            public BooleanField TicketNumberUseDate;
            public Int16Field TicketNumberLength;
            public StringField AssetNumberPrefix;
            public BooleanField AssetNumberUseDate;
            public Int16Field AssetNumberLength;
            public StringField AssetHandOverNumberPrefix;
            public BooleanField AssetHandOverNumberUseDate;
            public Int16Field AssetHandOverNumberLength;
            public StringField ComplaintNumberPrefix;
            public BooleanField ComplaintNumberUseDate;
            public Int16Field ComplaintNumberLength;
            public StringField ResignationNumberPrefix;
            public BooleanField ResignationNumberUseDate;
            public Int16Field ResignationNumberLength;
            public StringField WarningNumberPrefix;
            public BooleanField WarningNumberUseDate;
            public Int16Field WarningNumberLength;
            public StringField TerminationNumberPrefix;
            public BooleanField TerminationNumberUseDate;
            public Int16Field TerminationNumberLength;
            public StringField SOPNumberPrefix;
            public BooleanField SOPNumberUseDate;
            public Int16Field SOPNumberLength;
            public StringField PayrollNumberPrefix;
            public BooleanField PayrollNumberUseDate;
            public Int16Field PayrollNumberLength;

        }
    }
}
