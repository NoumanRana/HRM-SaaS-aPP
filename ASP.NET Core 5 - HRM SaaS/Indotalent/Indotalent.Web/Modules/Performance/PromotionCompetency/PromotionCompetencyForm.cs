using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Performance.Forms
{
    [FormScript("Performance.PromotionCompetency")]
    [BasedOnRow(typeof(PromotionCompetencyRow), CheckNames = true)]
    public class PromotionCompetencyForm
    {
        [Tab("General")]
        [Category("Promotion Competency")]
        public String ShortNote { get; set; }
    }
}