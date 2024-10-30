using Indotalent.Administration;
using Indotalent.Leave;
using Indotalent.Operation;
using Indotalent.Payrolls;
using Indotalent.Performance;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Indotalent.Common.DashboardMain.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        protected IUserRetrieveService UserRetrieveService { get; }

        public DashboardController(ISqlConnections sqlConnections, IUserRetrieveService userRetrieveService)
        {
            SqlConnections = sqlConnections;
            UserRetrieveService = userRetrieveService;
        }

        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var dashboardPageModel = new DashboardPageModel();

            var user = (UserDefinition)User.GetUserDefinition(UserRetrieveService);
            using (var connection = SqlConnections.NewFor<TenantRow>())
            {
                var tenant = connection.ById<TenantRow>(user.TenantId);

                var employees = connection.List<EmployeeRow>(x => x
                                        .SelectTableFields()
                                        .Select(EmployeeRow.Fields.GenderName)
                                        .Select(EmployeeRow.Fields.DesignationName)
                                        .Select(EmployeeRow.Fields.DepartmentName)
                                        .Where(EmployeeRow.Fields.TenantId == tenant.TenantId.Value));

                var employeeByGender = employees.GroupBy(x => x.GenderName)
                                        .Select(x => new DashboardPageModel.Grouped { Key = x.Key, Value = x.Count() })
                                        .OrderByDescending(x => x.Value)
                                        .ToList();

                var employeeByGenderDoughnut = new List<DashboardPageModel.Doughnut>();

                foreach (var item in employeeByGender)
                {
                    employeeByGenderDoughnut.Add(new DashboardPageModel.Doughnut { label = item.Key, value = item.Value });
                }
                if (employeeByGenderDoughnut.Count > 0)
                {
                    dashboardPageModel.EmployeeGenderList = employeeByGenderDoughnut;
                }
                else
                {
                    dashboardPageModel.EmployeeGenderList.Add(new DashboardPageModel.Doughnut { label = "N/A", value = 100 });
                }

                var employeeByDepartment = employees.GroupBy(x => x.DepartmentName)
                                        .Select(x => new DashboardPageModel.Grouped { Key = x.Key, Value = x.Count() })
                                        .OrderByDescending(x => x.Value)
                                        .ToList();

                var employeeByDepartmentDoughnut = new List<DashboardPageModel.Doughnut>();

                foreach (var item in employeeByDepartment)
                {
                    employeeByDepartmentDoughnut.Add(new DashboardPageModel.Doughnut { label = item.Key, value = item.Value });
                }
                if (employeeByDepartmentDoughnut.Count > 0)
                {
                    dashboardPageModel.EmployeeDepartmentList = employeeByDepartmentDoughnut;
                }
                else
                {
                    dashboardPageModel.EmployeeDepartmentList.Add(new DashboardPageModel.Doughnut { label = "N/A", value = 100 });
                }

                var employeeByDesignation = employees.GroupBy(x => x.DesignationName)
                                        .Select(x => new DashboardPageModel.Grouped { Key = x.Key, Value = x.Count() })
                                        .OrderByDescending(x => x.Value)
                                        .ToList();

                var employeeByDesignationDoughnut = new List<DashboardPageModel.Doughnut>();

                foreach (var item in employeeByDesignation)
                {
                    employeeByDesignationDoughnut.Add(new DashboardPageModel.Doughnut { label = item.Key, value = item.Value });
                }
                if (employeeByDesignationDoughnut.Count > 0)
                {
                    dashboardPageModel.EmployeeDesignationList = employeeByDesignationDoughnut;
                }
                else
                {
                    dashboardPageModel.EmployeeDesignationList.Add(new DashboardPageModel.Doughnut { label = "N/A", value = 100 });
                }


                var leaves = connection.List<LeaveRequestRow>(x => x
                                        .SelectTableFields()
                                        .Select(LeaveRequestRow.Fields.LeaveTypeName)
                                        .Where(LeaveRequestRow.Fields.TenantId == tenant.TenantId.Value));

                var leaveByType = leaves.GroupBy(x => x.LeaveTypeName)
                                        .Select(x => new DashboardPageModel.Grouped { Key = x.Key, Value = x.Count() })
                                        .OrderByDescending(x => x.Value)
                                        .ToList();

                var leaveByTypeDoughnut = new List<DashboardPageModel.Doughnut>();

                foreach (var item in leaveByType)
                {
                    leaveByTypeDoughnut.Add(new DashboardPageModel.Doughnut { label = item.Key, value = item.Value });
                }
                if (leaveByTypeDoughnut.Count > 0)
                {
                    dashboardPageModel.LeaveList = leaveByTypeDoughnut;
                }
                else
                {
                    dashboardPageModel.LeaveList.Add(new DashboardPageModel.Doughnut { label = "N/A", value = 100 });
                }

                var appraisals = connection.List<AppraisalRow>(x => x
                                        .SelectTableFields()
                                        .Where(AppraisalRow.Fields.TenantId == tenant.TenantId.Value));

                dashboardPageModel.AppraisalCount = appraisals.Count();

                var promotions = connection.List<PromotionRow>(x => x
                                        .SelectTableFields()
                                        .Where(PromotionRow.Fields.TenantId == tenant.TenantId.Value));

                dashboardPageModel.PromotionCount = promotions.Count();

                var transfers = connection.List<TransferRow>(x => x
                                        .SelectTableFields()
                                        .Where(TransferRow.Fields.TenantId == tenant.TenantId.Value));

                dashboardPageModel.TransferCount = transfers.Count();

                var resignations = connection.List<ResignationRow>(x => x
                                        .SelectTableFields()
                                        .Where(ResignationRow.Fields.TenantId == tenant.TenantId.Value));

                var terminations = connection.List<TerminationRow>(x => x
                                        .SelectTableFields()
                                        .Where(TerminationRow.Fields.TenantId == tenant.TenantId.Value));

                if (employees.Count() > 0)
                {
                    dashboardPageModel.ActiveCount = (employees.Count() - resignations.Count() - terminations.Count()) * 100.0 / employees.Count();
                    dashboardPageModel.ResignationCount = resignations.Count() * 100 / employees.Count();
                    dashboardPageModel.TerminationCount = terminations.Count() * 100 / employees.Count();
                }

                var today = DateTime.Now;
                var zeroTime = new DateTime(1, 1, 1);

                var year01 = new DashboardPageModel.LengthOfService { LOS = "0 to 1 Year", Year = 0 };
                var year23 = new DashboardPageModel.LengthOfService { LOS = "2 to 3 Year", Year = 0 };
                var year45 = new DashboardPageModel.LengthOfService { LOS = "4 to 5 Year", Year = 0 };
                var year610 = new DashboardPageModel.LengthOfService { LOS = "6 to 10 Year", Year = 0 };
                var year150 = new DashboardPageModel.LengthOfService { LOS = "11 to 50 Year", Year = 0 };

                foreach (var item in employees)
                {
                    TimeSpan ts = today - item.DateOfJoining.Value;
                    int years = (zeroTime + ts).Year - 1;
                    if (years >= 0 && years < 2)
                    {
                        year01.Year = year01.Year + 1;
                    } 
                    else if (years >= 2 && years < 4)
                    {
                        year23.Year = year23.Year + 1;
                    }
                    else if (years >= 4 && years < 6)
                    {
                        year45.Year = year45.Year + 1;
                    }
                    else if (years >= 6 && years < 11)
                    {
                        year610.Year = year610.Year + 1;
                    }
                    else if (years >= 11 && years < 51)
                    {
                        year150.Year = year150.Year + 1;
                    }

                }

                var LOSList = new List<DashboardPageModel.LengthOfService>();

                LOSList.Add(year01);
                LOSList.Add(year23);
                LOSList.Add(year45);
                LOSList.Add(year610);
                LOSList.Add(year150);

                dashboardPageModel.lengthOfServices = LOSList;

            }


            return View(MVC.Views.Common.DashboardMain.DashboardIndex, dashboardPageModel);
        }
    }
}
