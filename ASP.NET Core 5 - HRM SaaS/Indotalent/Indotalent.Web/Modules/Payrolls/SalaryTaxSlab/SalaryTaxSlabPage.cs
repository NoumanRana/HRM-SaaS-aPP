using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{
    [PageAuthorize(typeof(SalaryTaxSlabRow))]
    public class SalaryTaxSlabController : Controller
    {
        [Route("Payrolls/SalaryTaxSlab")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/SalaryTaxSlab/SalaryTaxSlabIndex.cshtml");
        }
    }
}
