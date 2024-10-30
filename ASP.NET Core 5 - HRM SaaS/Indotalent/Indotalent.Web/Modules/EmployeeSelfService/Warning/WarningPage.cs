using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(WarningRow))]
    public class WarningController : Controller
    {
        [Route("EmployeeSelfService/Warning")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Warning/WarningIndex.cshtml");
        }
    }
}