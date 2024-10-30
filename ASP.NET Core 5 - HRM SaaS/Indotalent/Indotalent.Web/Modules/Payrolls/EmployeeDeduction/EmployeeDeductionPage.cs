using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeDeductionRow))]
    public class EmployeeDeductionController : Controller
    {
        [Route("Payrolls/EmployeeDeduction")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeDeduction/EmployeeDeductionIndex.cshtml");
        }
    }
}