using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Payrolls.Forms
{
    [FormScript("Payrolls.EmployeeChildren")]
    [BasedOnRow(typeof(EmployeeChildrenRow), CheckNames = true)]
    public class EmployeeChildrenForm
    {
        [Tab("General")]
        [Category("Info")]
        public String Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public String Profession { get; set; }
        [Category("Address")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }
    }
}