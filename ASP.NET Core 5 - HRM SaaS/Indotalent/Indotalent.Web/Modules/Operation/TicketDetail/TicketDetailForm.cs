using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.TicketDetail")]
    [BasedOnRow(typeof(TicketDetailRow), CheckNames = true)]
    public class TicketDetailForm
    {
        [Tab("General")]
        [Category("Main")]
        public String Response { get; set; }

        [Category("Info")]
        public String ResponseBy { get; set; }
        [DefaultValue("now")]
        public DateTime ResponseAt { get; set; }
    }
}