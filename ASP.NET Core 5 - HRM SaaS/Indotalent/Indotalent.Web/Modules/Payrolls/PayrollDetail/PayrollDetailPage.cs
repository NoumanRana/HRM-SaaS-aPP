using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(PayrollDetailRow))]
    public class PayrollDetailController : Controller
    {
        [Route("Payrolls/PayrollDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/PayrollDetail/PayrollDetailIndex.cshtml");
        }
    }
}