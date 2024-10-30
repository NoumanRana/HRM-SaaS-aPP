using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(OvertimeRow))]
    public class OvertimeController : Controller
    {
        [Route("EmployeeSelfService/Overtime")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Overtime/OvertimeIndex.cshtml");
        }
    }
}