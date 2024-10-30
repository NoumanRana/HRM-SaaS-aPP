using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Columns
{
    [ColumnsScript("EmployeeSelfService.TrainingParticipant")]
    [BasedOnRow(typeof(TrainingParticipantRow), CheckNames = true)]
    public class TrainingParticipantColumns
    {
        [EditLink]
        [SortOrder(1, descending: true)]
        [Width(200)]
        public String EmployeeName { get; set; }
        [Width(200)]
        public String DepartmentName { get; set; }
    }
}