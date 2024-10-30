using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Columns
{
    [ColumnsScript("Recruitment.Interview")]
    [BasedOnRow(typeof(InterviewRow), CheckNames = true)]
    public class InterviewColumns
    {
        [EditLink]
        [Width(150)]
        [SortOrder(1, descending: true)]
        public String Number { get; set; }
        [Width(150)]
        public String Room { get; set; }
        [Width(150)]
        public DateTime StartDate { get; set; }
        [Width(150)]
        public DateTime EndDate { get; set; }
        [Width(150)]
        public String ApplicantName { get; set; }
        [Width(150)]
        public String HiringManagerName { get; set; }
        [Width(200)]
        public String TenantName { get; set; }
    }
}