using Indotalent.Administration;
using Indotalent.Administration.Entities;
using Indotalent.Leave;
using Indotalent.Organization;
using Indotalent.Payrolls;
using Indotalent.Performance;
using Indotalent.Settings;
using Serenity.Data;
using Serenity.Services;
using System.Data;
using System.Globalization;
using System.Linq;

namespace Indotalent
{
    public class GetNextNumberRequest : ServiceRequest
    {
        public string Prefix { get; set; }
        public int Length { get; set; }
    }
    public class GetNextNumberResponse : ServiceResponse
    {
        public long Number { get; set; }
        public string Serial { get; set; }
    }


    public class MultiTenantHelper
    {
        public static GetNextNumberResponse GetNextNumber(IDbConnection connection,
                                                          GetNextNumberRequest request, 
                                                          Field field,
                                                          int? tenantId)
        {
            var prefix = request.Prefix ?? "";

            var max = connection.Query<string>(new SqlQuery()
                .From(field.Fields)
                .Select(Sql.Max(field.Expression))
                .Where("TenantId = " + tenantId)
                .Where(
                    field.StartsWith(prefix) &&
                    field >= prefix.PadRight(request.Length, '0') &&
                    field <= prefix.PadRight(request.Length, '9')))
                .FirstOrDefault();

            var response = new GetNextNumberResponse
            {
                Number = max == null ||
                !long.TryParse(max[prefix.Length..], out long l) ? 1 : l + 1
            };

            if (!(request.Length > prefix.Length))
            {
                request.Length = prefix.Length + response.Number.ToString(CultureInfo.InvariantCulture).Length + 3;
            }

            response.Serial = prefix + response.Number.ToString(CultureInfo.InvariantCulture)
                .PadLeft(request.Length - prefix.Length, '0');

            return response;
        }
        public static int CreateTenant(IDbConnection connection, string name, string currency, int maxUser)
        {
            var tenantId = (int)connection.InsertAndGetID(new TenantRow
            {
                TenantName = name,
                Currency = currency,
                MaximumUser = maxUser,
                EmployeeNumberPrefix = "EMP",
                EmployeeNumberUseDate = true,
                EmployeeNumberLength = 16,
                LeaveRequestNumberPrefix = "LVR",
                LeaveRequestNumberUseDate = true,
                LeaveRequestNumberLength = 16,
                EvaluationNumberPrefix = "EVL",
                EvaluationNumberUseDate = true,
                EvaluationNumberLength = 16,
                AppraisalNumberPrefix = "APR",
                AppraisalNumberUseDate = true,
                AppraisalNumberLength = 16,
                PromotionNumberPrefix = "PRM",
                PromotionNumberUseDate = true,
                PromotionNumberLength = 16,
                TransferNumberPrefix = "TRF",
                TransferNumberUseDate = true,
                TransferNumberLength = 16,
                VacancyNumberPrefix = "VCY",
                VacancyNumberUseDate = true,
                VacancyNumberLength = 16,
                ApplicantNumberPrefix = "ACT",
                ApplicantNumberUseDate = true,
                ApplicantNumberLength = 16,
                InterviewNumberPrefix = "TVW",
                InterviewNumberUseDate = true,
                InterviewNumberLength = 16,
                ReimbursementNumberPrefix = "MBR",
                ReimbursementNumberUseDate = true,
                ReimbursementNumberLength = 16,
                TicketNumberPrefix = "TCK",
                TicketNumberUseDate = true,
                TicketNumberLength = 16,
                AssetNumberPrefix = "AST",
                AssetNumberUseDate = true,
                AssetNumberLength = 16,
                AssetHandOverNumberPrefix = "AHO",
                AssetHandOverNumberUseDate = true,
                AssetHandOverNumberLength = 16,
                ComplaintNumberPrefix = "CPL",
                ComplaintNumberUseDate = true,
                ComplaintNumberLength = 16,
                ResignationNumberPrefix = "RSG",
                ResignationNumberUseDate = true,
                ResignationNumberLength = 16,
                WarningNumberPrefix = "WRN",
                WarningNumberUseDate = true,
                WarningNumberLength = 16,
                TerminationNumberPrefix = "TRM",
                TerminationNumberUseDate = true,
                TerminationNumberLength = 16,
                SOPNumberPrefix = "SOP",
                SOPNumberUseDate = true,
                SOPNumberLength = 16,
                PayrollNumberPrefix = "PYR",
                PayrollNumberUseDate = true,
                PayrollNumberLength = 16
            });

            return tenantId;
        }

        public static void GenerateDefaultBusinessEntity(IDbConnection dbConnection, int? tenantId)
        {
            var connection = dbConnection;

            //Evaluation
            connection.Insert(new EvaluationRow
            {
                Number = "1.1",
                Group = "Interest and Motivation",
                Indicator = "Show interest in present job",
                TenantId = tenantId
            });
            connection.Insert(new EvaluationRow
            {
                Number = "1.2",
                Group = "Interest and Motivation",
                Indicator = "Interested and ambitious in self-development",
                TenantId = tenantId
            });
            connection.Insert(new EvaluationRow
            {
                Number = "1.3",
                Group = "Interest and Motivation",
                Indicator = "Interested in doing good job",
                TenantId = tenantId
            });
            connection.Insert(new EvaluationRow
            {
                Number = "2.1",
                Group = "Productivity",
                Indicator = "Quantity and quality of resulting work",
                TenantId = tenantId
            });
            connection.Insert(new EvaluationRow
            {
                Number = "2.2",
                Group = "Productivity",
                Indicator = "Task completion without unecessary delay",
                TenantId = tenantId
            });
            connection.Insert(new EvaluationRow
            {
                Number = "3.1",
                Group = "Knowledge",
                Indicator = "Knows and understand job requirements",
                TenantId = tenantId
            });
            connection.Insert(new EvaluationRow
            {
                Number = "3.2",
                Group = "Knowledge",
                Indicator = "Knows how to perform work effectively",
                TenantId = tenantId
            });

            //Leave Type
            connection.Insert(new LeaveTypeRow
            {
                Name = "Annual",
                TenantId = tenantId
            });

            connection.Insert(new LeaveTypeRow
            {
                Name = "Sick",
                TenantId = tenantId
            });

            connection.Insert(new LeaveTypeRow
            {
                Name = "Maternity",
                TenantId = tenantId
            });

            connection.Insert(new LeaveTypeRow
            {
                Name = "Personal",
                TenantId = tenantId
            });

            //Gender
            connection.Insert(new GenderRow
            {
                Name = "Male",
                TenantId = tenantId
            });
            connection.Insert(new GenderRow
            {
                Name = "Female",
                TenantId = tenantId
            });

            //Designation
            connection.Insert(new DesignationRow
            {
                Name = "Staff",
                TenantId = tenantId
            });
            connection.Insert(new DesignationRow
            {
                Name = "Supervisor",
                TenantId = tenantId
            });
            connection.Insert(new DesignationRow
            {
                Name = "Manager",
                TenantId = tenantId
            });
            connection.Insert(new DesignationRow
            {
                Name = "Director",
                TenantId = tenantId
            });
            connection.Insert(new DesignationRow
            {
                Name = "Chief",
                TenantId = tenantId
            });

            //Department
            connection.Insert(new DepartmentRow
            {
                Name = "OPS",
                Description = "Operation Department",
                TenantId = tenantId
            });
            connection.Insert(new DepartmentRow
            {
                Name = "FA",
                Description = "Finance & Accounting Department",
                TenantId = tenantId
            });
            connection.Insert(new DepartmentRow
            {
                Name = "IT",
                Description = "Information Technology Department",
                TenantId = tenantId
            });
            connection.Insert(new DepartmentRow
            {
                Name = "SM",
                Description = "Sales & Marketing Department",
                TenantId = tenantId
            });
            connection.Insert(new DepartmentRow
            {
                Name = "HR",
                Description = "Human Resource Department",
                TenantId = tenantId
            });

            //Branch
            connection.Insert(new BranchRow
            {
                Name = "Head Office",
                TenantId = tenantId
            });

            //Income
            connection.Insert(new IncomeRow
            {
                Name = "Allowance",
                TenantId = tenantId
            });
            connection.Insert(new IncomeRow
            {
                Name = "Bonus",
                TenantId = tenantId
            });
            connection.Insert(new IncomeRow
            {
                Name = "Overtime",
                TenantId = tenantId
            });
            connection.Insert(new IncomeRow
            {
                Name = "Reimbursement",
                TenantId = tenantId
            });

            //Deduction
            connection.Insert(new DeductionRow
            {
                Name = "Provident Fund",
                TenantId = tenantId
            });
            connection.Insert(new DeductionRow
            {
                Name = "Tax",
                TenantId = tenantId
            });

            //Grade
            connection.Insert(new GradeRow
            {
                Name = "GS-01",
                BasicSalary = 1700,
                TenantId = tenantId
            });
            connection.Insert(new GradeRow
            {
                Name = "GS-02",
                BasicSalary = 1900,
                TenantId = tenantId
            });
            connection.Insert(new GradeRow
            {
                Name = "GS-03",
                BasicSalary = 2100,
                TenantId = tenantId
            });
            connection.Insert(new GradeRow
            {
                Name = "GS-04",
                BasicSalary = 2500,
                TenantId = tenantId
            });
            connection.Insert(new GradeRow
            {
                Name = "GS-05",
                BasicSalary = 2700,
                TenantId = tenantId
            });
        }

        public static void GenerateDefaultTenantAdminPermission(int tenantAdminId, IDbConnection dbConnection)
        {
            var connection = dbConnection;

            //administration
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Administration:Security",
                Granted = true
            });

            //settings
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Settings:MyCompany",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Settings:Gender",
                Granted = true
            });

            //Organization
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Organization:Designation",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Organization:Department",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Organization:Branch",
                Granted = true
            });

            //Payrolls
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Payrolls:Income",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Payrolls:Deduction",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Payrolls:Grade",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Payrolls:Employee",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Payrolls:Payroll",
                Granted = true
            });

            //Recruitment
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Recruitment:Applicant",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Recruitment:Interview",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Recruitment:Vacancy",
                Granted = true
            });

            //Performance
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Performance:Appraisal",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Performance:Evaluation",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Performance:Promotion",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Performance:Transfer",
                Granted = true
            });

            //Operation
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Announcement",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Asset",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:AssetHandOver",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Award",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:BusinessTrip",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Complaint",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Event",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Holiday",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Meeting",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Reimbursement",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Resignation",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:SOP",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Termination",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Ticket",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Training",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Operation:Warning",
                Granted = true
            });

            //Leave
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Leave:LeaveType",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Leave:LeaveRequest",
                Granted = true
            });

            //Attendance
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Attendance:Overtime",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Attendance:PunchIn",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Attendance:PunchOut",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "Attendance:Timesheet",
                Granted = true
            });

            //Employee Self Service
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:PunchIn",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:PunchOut",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Overtime",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Timesheet",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:LeaveRequest",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Reimbursement",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Ticket",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Meeting",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Training",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:BusinessTrip",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Complaint",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Warning",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Award",
                Granted = true
            });
            connection.Insert(new UserPermissionRow
            {
                UserId = tenantAdminId,
                PermissionKey = "EmployeeSelfService:Announcement",
                Granted = true
            });


        }
    }
}
