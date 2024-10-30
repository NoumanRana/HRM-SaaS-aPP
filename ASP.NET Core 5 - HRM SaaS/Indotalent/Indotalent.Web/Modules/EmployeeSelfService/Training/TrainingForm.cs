using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.EmployeeSelfService.Forms
{
    [FormScript("EmployeeSelfService.Training")]
    [BasedOnRow(typeof(TrainingRow), CheckNames = true)]
    public class TrainingForm
    {
        [Tab("General")]
        [Category("Training Info")]
        public String Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }

        [Category("Venue")]
        public String Location { get; set; }

        [Category("Address")]
        public String Street { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String ZipCode { get; set; }
        public String Phone { get; set; }
        public String Email { get; set; }

        [Tab("Participants")]
        [Category("Training Participants")]
        [TrainingParticipantEditor]
        public List<TrainingParticipantRow> ItemList { get; set; }
    }
}