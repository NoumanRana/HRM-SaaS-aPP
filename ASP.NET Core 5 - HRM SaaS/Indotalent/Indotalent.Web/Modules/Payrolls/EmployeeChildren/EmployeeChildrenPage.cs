using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeChildrenRow))]
    public class EmployeeChildrenController : Controller
    {
        [Route("Payrolls/EmployeeChildren")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeChildren/EmployeeChildrenIndex.cshtml");
        }
    }
}