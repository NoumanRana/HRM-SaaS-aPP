using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeOkrObjectiveRow))]
    public class EmployeeOkrObjectiveController : Controller
    {
        [Route("Payrolls/EmployeeOkrObjective")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeOkrObjective/EmployeeOkrObjectiveIndex.cshtml");
        }
    }
}