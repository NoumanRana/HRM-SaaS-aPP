using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.ReimbursementDetail")]
    [BasedOnRow(typeof(ReimbursementDetailRow), CheckNames = true)]
    public class ReimbursementDetailColumns
    {
        [EditLink]
        [Width(300)]
        public String ShortNote { get; set; }
        [Width(200)]
        public Double Amount { get; set; }
    }
}