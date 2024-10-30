using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(PayrollDetailIncomeRow))]
    public class PayrollDetailIncomeController : Controller
    {
        [Route("Payrolls/PayrollDetailIncome")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/PayrollDetailIncome/PayrollDetailIncomeIndex.cshtml");
        }
    }
}