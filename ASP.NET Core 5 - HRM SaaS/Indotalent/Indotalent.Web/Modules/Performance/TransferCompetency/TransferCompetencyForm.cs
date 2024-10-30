using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.TransferCompetency")]
    [BasedOnRow(typeof(TransferCompetencyRow), CheckNames = true)]
    public class TransferCompetencyForm
    {
        [Tab("General")]
        [Category("Transfer Competency")]
        public String ShortNote { get; set; }
    }
}