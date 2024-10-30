using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Leave.Pages
{

    [PageAuthorize(typeof(LeaveRequestRow))]
    public class LeaveRequestController : Controller
    {
        [Route("Leave/LeaveRequest")]
        public ActionResult Index()
        {
            return View("~/Modules/Leave/LeaveRequest/LeaveRequestIndex.cshtml");
        }
    }
}