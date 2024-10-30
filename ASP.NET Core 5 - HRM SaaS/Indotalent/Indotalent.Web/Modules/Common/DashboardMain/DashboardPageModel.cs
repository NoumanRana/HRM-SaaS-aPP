
using System;
using System.Collections.Generic;

namespace Indotalent.Common.DashboardMain
{

    public class DashboardPageModel
    {
        public class Grouped
        {
            public string Key { get; set; }
            public double Value { get; set; }
        }

        public class Doughnut
        {
            public string label { get; set; }
            public double value { get; set; }
        }

        public class LengthOfService
        {
            public string LOS { get; set; }
            public int Year { get; set; }
        }

        public List<Doughnut> EmployeeGenderList { get; set; } = new List<Doughnut>();
        public List<Doughnut> EmployeeDepartmentList { get; set; } = new List<Doughnut>();
        public List<Doughnut> EmployeeDesignationList { get; set; } = new List<Doughnut>();
        public List<Doughnut> LeaveList { get; set; } = new List<Doughnut>();
        public double AppraisalCount { get; set; } = 0.0;
        public double PromotionCount { get; set; } = 0.0;
        public double TransferCount { get; set; } = 0.0;
        public double ActiveCount { get; set; } = 0.0;
        public double ResignationCount { get; set; } = 0.0;
        public double TerminationCount { get; set; } = 0.0;
        public List<LengthOfService> lengthOfServices { get; set; } = new List<LengthOfService>();

    }
}