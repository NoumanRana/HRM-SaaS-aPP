using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Administration.Forms
{
    [FormScript("Administration.Tenant")]
    [BasedOnRow(typeof(TenantRow), CheckNames = true)]
    public class TenantForm
    {
        [Tab("General")]
        [Category("Identity")]
        public String TenantName { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
        public String Currency { get; set; }

        [Category("Address")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }

        [Tab("Number Sequence")]
        [Category("Employee")]
        [OneThirdWidth]
        public String EmployeeNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean EmployeeNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 EmployeeNumberLength { get; set; }
        [Category("Leave")]
        [OneThirdWidth]
        public String LeaveRequestNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean LeaveRequestNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 LeaveRequestNumberLength { get; set; }
        [Category("Performance")]
        [OneThirdWidth]
        public String EvaluationNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean EvaluationNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 EvaluationNumberLength { get; set; }
        [OneThirdWidth]
        public String AppraisalNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean AppraisalNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 AppraisalNumberLength { get; set; }
        [OneThirdWidth]
        public String PromotionNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean PromotionNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 PromotionNumberLength { get; set; }
        [OneThirdWidth]
        public String TransferNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean TransferNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 TransferNumberLength { get; set; }
        [Category("Recruitment")]
        [OneThirdWidth]
        public String VacancyNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean VacancyNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 VacancyNumberLength { get; set; }
        [OneThirdWidth]
        public String ApplicantNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean ApplicantNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 ApplicantNumberLength { get; set; }
        [OneThirdWidth]
        public String InterviewNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean InterviewNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 InterviewNumberLength { get; set; }
        [Category("Operation")]
        [OneThirdWidth]
        public String ReimbursementNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean ReimbursementNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 ReimbursementNumberLength { get; set; }
        [OneThirdWidth]
        public String TicketNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean TicketNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 TicketNumberLength { get; set; }
        [OneThirdWidth]
        public String AssetNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean AssetNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 AssetNumberLength { get; set; }
        [OneThirdWidth]
        public String AssetHandOverNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean AssetHandOverNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 AssetHandOverNumberLength { get; set; }
        [OneThirdWidth]
        public String ComplaintNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean ComplaintNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 ComplaintNumberLength { get; set; }
        [OneThirdWidth]
        public String ResignationNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean ResignationNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 ResignationNumberLength { get; set; }
        [OneThirdWidth]
        public String WarningNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean WarningNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 WarningNumberLength { get; set; }
        [OneThirdWidth]
        public String TerminationNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean TerminationNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 TerminationNumberLength { get; set; }
        [OneThirdWidth]
        public String SOPNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean SOPNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 SOPNumberLength { get; set; }
        [Category("Payrolls")]
        [OneThirdWidth]
        public String PayrollNumberPrefix { get; set; }
        [OneThirdWidth]
        public Boolean PayrollNumberUseDate { get; set; }
        [OneThirdWidth]
        public Int16 PayrollNumberLength { get; set; }

        [Tab("Package")]
        [Category("Provisioning")]
        public int MaximumUser { get; set; }
    }
}