using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(AwardRow))]
    public class AwardController : Controller
    {
        [Route("EmployeeSelfService/Award")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Award/AwardIndex.cshtml");
        }
    }
}