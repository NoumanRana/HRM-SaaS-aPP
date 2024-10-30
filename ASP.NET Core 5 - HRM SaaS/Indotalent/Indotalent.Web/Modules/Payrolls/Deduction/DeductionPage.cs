using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(DeductionRow))]
    public class DeductionController : Controller
    {
        [Route("Payrolls/Deduction")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/Deduction/DeductionIndex.cshtml");
        }
    }
}