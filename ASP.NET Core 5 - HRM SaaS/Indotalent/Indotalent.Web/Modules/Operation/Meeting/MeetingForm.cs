﻿using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.Meeting")]
    [BasedOnRow(typeof(MeetingRow), CheckNames = true)]
    public class MeetingForm
    {
        [Tab("General")]
        [Category("Meeting Info")]
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
        [Category("Meeting Participants")]
        [MeetingParticipantEditor]
        public List<MeetingParticipantRow> ItemList { get; set; }
    }
}