using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(LeaveEmergencyContactRow))]
    public class LeaveEmergencyContactController : Controller
    {
        [Route("EmployeeSelfService/LeaveEmergencyContact")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/LeaveEmergencyContact/LeaveEmergencyContactIndex.cshtml");
        }
    }
}