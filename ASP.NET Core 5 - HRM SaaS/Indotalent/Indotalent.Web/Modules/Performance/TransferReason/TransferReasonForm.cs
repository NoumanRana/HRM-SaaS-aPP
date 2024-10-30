using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.TransferReason")]
    [BasedOnRow(typeof(TransferReasonRow), CheckNames = true)]
    public class TransferReasonForm
    {
        [Tab("General")]
        [Category("Transfer Reason")]
        public String ShortNote { get; set; }
    }
}