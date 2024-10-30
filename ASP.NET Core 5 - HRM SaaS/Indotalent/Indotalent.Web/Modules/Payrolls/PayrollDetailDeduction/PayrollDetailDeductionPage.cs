using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(PayrollDetailDeductionRow))]
    public class PayrollDetailDeductionController : Controller
    {
        [Route("Payrolls/PayrollDetailDeduction")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/PayrollDetailDeduction/PayrollDetailDeductionIndex.cshtml");
        }
    }
}