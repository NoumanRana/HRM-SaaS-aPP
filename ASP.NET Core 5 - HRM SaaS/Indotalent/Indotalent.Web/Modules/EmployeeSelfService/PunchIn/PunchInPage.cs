using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(PunchInRow))]
    public class PunchInController : Controller
    {
        [Route("EmployeeSelfService/PunchIn")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/PunchIn/PunchInIndex.cshtml");
        }
    }
}