using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Indotalent.Payrolls
{
    [EnumKey("Payrolls.LatestEducationDegree")]
    public enum LatestEducationDegree
    {
        [Description("High School")]
        HighSchool = 1,
        [Description("Diploma")]
        Diploma = 2,
        [Description("Bachelor")]
        Bachelor = 3,
        [Description("Master")]
        Master = 4,
        [Description("Doctorate")]
        Doctor = 5
    }
}
