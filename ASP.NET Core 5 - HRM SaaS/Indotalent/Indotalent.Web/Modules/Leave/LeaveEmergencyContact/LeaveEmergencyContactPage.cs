using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Leave.Pages
{

    [PageAuthorize(typeof(LeaveEmergencyContactRow))]
    public class LeaveEmergencyContactController : Controller
    {
        [Route("Leave/LeaveEmergencyContact")]
        public ActionResult Index()
        {
            return View("~/Modules/Leave/LeaveEmergencyContact/LeaveEmergencyContactIndex.cshtml");
        }
    }
}