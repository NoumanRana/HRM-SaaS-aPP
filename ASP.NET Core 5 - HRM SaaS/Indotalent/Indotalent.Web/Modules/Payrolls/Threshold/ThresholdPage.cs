using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(ThresholdRow))]
    public class ThresholdController : Controller
    {
        [Route("Payrolls/Threshold")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/Threshold/ThresholdIndex.cshtml");
        }
    }
}