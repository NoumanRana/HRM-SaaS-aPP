using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(MeetingRow))]
    public class MeetingController : Controller
    {
        [Route("EmployeeSelfService/Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Meeting/MeetingIndex.cshtml");
        }
    }
}