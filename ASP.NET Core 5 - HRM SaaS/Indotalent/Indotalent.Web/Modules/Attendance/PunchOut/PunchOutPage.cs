using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Attendance.Pages
{

    [PageAuthorize(typeof(PunchOutRow))]
    public class PunchOutController : Controller
    {
        [Route("Attendance/PunchOut")]
        public ActionResult Index()
        {
            return View("~/Modules/Attendance/PunchOut/PunchOutIndex.cshtml");
        }
    }
}