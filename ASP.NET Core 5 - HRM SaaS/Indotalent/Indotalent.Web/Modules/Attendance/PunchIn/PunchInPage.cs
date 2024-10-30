using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Attendance.Pages
{

    [PageAuthorize(typeof(PunchInRow))]
    public class PunchInController : Controller
    {
        [Route("Attendance/PunchIn")]
        public ActionResult Index()
        {
            return View("~/Modules/Attendance/PunchIn/PunchInIndex.cshtml");
        }
    }
}