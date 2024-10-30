using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Attendance.Pages
{

    [PageAuthorize(typeof(TimesheetRow))]
    public class TimesheetController : Controller
    {
        [Route("Attendance/Timesheet")]
        public ActionResult Index()
        {
            return View("~/Modules/Attendance/Timesheet/TimesheetIndex.cshtml");
        }
    }
}