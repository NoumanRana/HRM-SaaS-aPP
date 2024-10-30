using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Leave.Columns
{
    [ColumnsScript("Leave.LeaveDelegatedTask")]
    [BasedOnRow(typeof(LeaveDelegatedTaskRow), CheckNames = true)]
    public class LeaveDelegatedTaskColumns
    {
        [EditLink]
        [Width(400)]
        public String ShortNote { get; set; }
    }
}