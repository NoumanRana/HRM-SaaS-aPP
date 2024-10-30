using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(PunchOutRow))]
    public class PunchOutController : Controller
    {
        [Route("EmployeeSelfService/PunchOut")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/PunchOut/PunchOutIndex.cshtml");
        }
    }
}