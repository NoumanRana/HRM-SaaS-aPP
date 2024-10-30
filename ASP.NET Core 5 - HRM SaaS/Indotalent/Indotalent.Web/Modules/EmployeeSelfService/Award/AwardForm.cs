using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.Award")]
    [BasedOnRow(typeof(AwardRow), CheckNames = true)]
    public class AwardForm
    {
        [Tab("General")]
        [Category("Award Info")]
        public String Name { get; set; }
        public DateTime Date { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Achievement")]
        public String Achievement { get; set; }

        [Category("Awardee")]
        public Int32 AwardeeId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }

        [Category("Reward for Awardee")]
        public String Reward { get; set; }
    }
}