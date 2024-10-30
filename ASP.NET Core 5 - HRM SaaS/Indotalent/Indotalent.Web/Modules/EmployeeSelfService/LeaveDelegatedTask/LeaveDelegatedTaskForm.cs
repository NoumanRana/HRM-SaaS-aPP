using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.LeaveDelegatedTask")]
    [BasedOnRow(typeof(LeaveDelegatedTaskRow), CheckNames = true)]
    public class LeaveDelegatedTaskForm
    {
        [Tab("General")]
        [Category("Delegation")]
        public String ShortNote { get; set; }
    }
}