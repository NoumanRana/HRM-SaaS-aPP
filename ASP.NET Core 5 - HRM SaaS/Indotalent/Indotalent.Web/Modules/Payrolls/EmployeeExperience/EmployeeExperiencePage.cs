using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeExperienceRow))]
    public class EmployeeExperienceController : Controller
    {
        [Route("Payrolls/EmployeeExperience")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeExperience/EmployeeExperienceIndex.cshtml");
        }
    }
}