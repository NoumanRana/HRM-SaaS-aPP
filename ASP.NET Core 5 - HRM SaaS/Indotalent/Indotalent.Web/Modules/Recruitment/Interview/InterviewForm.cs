using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Recruitment.Forms
{
    [FormScript("Recruitment.Interview")]
    [BasedOnRow(typeof(InterviewRow), CheckNames = true)]
    public class InterviewForm
    {
        [Tab("General")]
        [Category("Interview Info")]
        public String Number { get; set; }
        public String Room { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Interview Address")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }

        [Category("Candidate")]
        public Int32 ApplicantId { get; set; }

        [Category("Vacancy")]
        public Int32 VacancyId { get; set; }
        public String JobTitle { get; set; }
        public Int32 HiringManagerId { get; set; }


        [Tab("Results")]
        [Category("Info")]
        [InterviewResultEditor]
        public List<InterviewResultRow> ResultList { get; set; }
    }
}