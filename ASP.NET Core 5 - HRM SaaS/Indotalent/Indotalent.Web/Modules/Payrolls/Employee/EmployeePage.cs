using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeRow))]
    public class EmployeeController : Controller
    {
        [Route("Payrolls/Employee")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/Employee/EmployeeIndex.cshtml");
        }
    }
}