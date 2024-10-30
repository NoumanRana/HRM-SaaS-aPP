﻿using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Operation.Forms
{
    [FormScript("Operation.TrainingParticipant")]
    [BasedOnRow(typeof(TrainingParticipantRow), CheckNames = true)]
    public class TrainingParticipantForm
    {
        [Tab("General")]
        [Category("Participant")]
        public Int32 EmployeeId { get; set; }
        public Int32 BranchId { get; set; }
        public Int32 DepartmentId { get; set; }
    }
}