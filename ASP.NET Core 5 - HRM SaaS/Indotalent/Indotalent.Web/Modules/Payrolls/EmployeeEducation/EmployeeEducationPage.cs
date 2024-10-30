using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeEducationRow))]
    public class EmployeeEducationController : Controller
    {
        [Route("Payrolls/EmployeeEducation")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeEducation/EmployeeEducationIndex.cshtml");
        }
    }
}