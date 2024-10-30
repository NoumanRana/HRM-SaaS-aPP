using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.Resignation")]
    [BasedOnRow(typeof(ResignationRow), CheckNames = true)]
    public class ResignationForm
    {
        [Tab("General")]
        [Category("Resignation Info")]
        public String Number { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Start Notice Period")]
        public DateTime ResignationDate { get; set; }

        [Category("Last Day")]
        public DateTime EffectiveDate { get; set; }

        [Category("Resignee")]
        public Int32 ResigneeId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }
    }
}