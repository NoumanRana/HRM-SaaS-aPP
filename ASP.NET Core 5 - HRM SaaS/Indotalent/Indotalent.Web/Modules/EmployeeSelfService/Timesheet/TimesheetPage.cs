using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(TimesheetRow))]
    public class TimesheetController : Controller
    {
        [Route("EmployeeSelfService/Timesheet")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Timesheet/TimesheetIndex.cshtml");
        }
    }
}