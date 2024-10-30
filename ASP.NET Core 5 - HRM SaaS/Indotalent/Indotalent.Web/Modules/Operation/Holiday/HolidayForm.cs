using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.Holiday")]
    [BasedOnRow(typeof(HolidayRow), CheckNames = true)]
    public class HolidayForm
    {
        [Tab("General")]
        [Category("Holiday Info")]
        public String Name { get; set; }
        public DateTime Date { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}