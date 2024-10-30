using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Indotalent.Performance
{
    [EnumKey("Performance.EvaluationResult")]
    public enum EvaluationResult
    {
        [Description("Satisfactory")]
        Satisfactory = 1,
        [Description("Adequate")]
        Adequate = 2,
        [Description("Needs Improvement")]
        NeedsImprovement = 3
    }
}
