using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(PayrollRow))]
    public class PayrollController : Controller
    {
        [Route("Payrolls/Payroll")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/Payroll/PayrollIndex.cshtml");
        }
    }
}