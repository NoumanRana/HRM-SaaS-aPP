using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Columns
{
    [ColumnsScript("Operation.MeetingParticipant")]
    [BasedOnRow(typeof(MeetingParticipantRow), CheckNames = true)]
    public class MeetingParticipantColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String EmployeeName { get; set; }
        [Width(200)]
        public String DepartmentName { get; set; }
    }
}