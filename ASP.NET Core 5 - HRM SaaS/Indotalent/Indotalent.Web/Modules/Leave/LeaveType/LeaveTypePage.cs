using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Leave.Pages
{

    [PageAuthorize(typeof(LeaveTypeRow))]
    public class LeaveTypeController : Controller
    {
        [Route("Leave/LeaveType")]
        public ActionResult Index()
        {
            return View("~/Modules/Leave/LeaveType/LeaveTypeIndex.cshtml");
        }
    }
}