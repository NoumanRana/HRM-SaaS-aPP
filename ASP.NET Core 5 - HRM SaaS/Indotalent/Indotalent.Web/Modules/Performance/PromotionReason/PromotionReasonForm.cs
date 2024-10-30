using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.PromotionReason")]
    [BasedOnRow(typeof(PromotionReasonRow), CheckNames = true)]
    public class PromotionReasonForm
    {
        [Tab("General")]
        [Category("Promotion Reason")]
        public String ShortNote { get; set; }
    }
}