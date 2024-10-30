using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(LeaveRequestRow))]
    public class LeaveRequestController : Controller
    {
        [Route("EmployeeSelfService/LeaveRequest")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/LeaveRequest/LeaveRequestIndex.cshtml");
        }
    }
}