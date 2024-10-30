using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(IncomeRow))]
    public class IncomeController : Controller
    {
        [Route("Payrolls/Income")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/Income/IncomeIndex.cshtml");
        }
    }
}