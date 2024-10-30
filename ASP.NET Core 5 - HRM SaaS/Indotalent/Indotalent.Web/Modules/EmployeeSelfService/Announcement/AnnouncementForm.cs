using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.Announcement")]
    [BasedOnRow(typeof(AnnouncementRow), CheckNames = true)]
    public class AnnouncementForm
    {
        [Tab("General")]
        [Category("Announcement Info")]
        public String Name { get; set; }
        public DateTime Date { get; set; }

        [Category("Message")]
        public String Message { get; set; }
    }
}