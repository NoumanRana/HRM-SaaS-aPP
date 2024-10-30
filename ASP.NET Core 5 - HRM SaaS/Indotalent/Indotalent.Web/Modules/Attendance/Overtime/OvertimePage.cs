using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Attendance.Pages
{

    [PageAuthorize(typeof(OvertimeRow))]
    public class OvertimeController : Controller
    {
        [Route("Attendance/Overtime")]
        public ActionResult Index()
        {
            return View("~/Modules/Attendance/Overtime/OvertimeIndex.cshtml");
        }
    }
}