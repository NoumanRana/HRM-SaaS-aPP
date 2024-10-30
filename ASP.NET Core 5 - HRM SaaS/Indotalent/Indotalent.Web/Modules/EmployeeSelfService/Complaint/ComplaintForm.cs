using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.Complaint")]
    [BasedOnRow(typeof(ComplaintRow), CheckNames = true)]
    public class ComplaintForm
    {
        [Tab("General")]
        [Category("Complaint Info")]
        public String Number { get; set; }
        [DefaultValue("now")]
        public DateTime IncidentDate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Location { get; set; }

        [Category("Witness")]
        public String Witness { get; set; }

        [Category("Incident")]
        public String IncidentDescription { get; set; }

        [Category("Resolve Suggestion")]
        public String ResolveSuggestion { get; set; }

        [Category("Reporter")]
        public Int32 ReporterId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }
    }
}