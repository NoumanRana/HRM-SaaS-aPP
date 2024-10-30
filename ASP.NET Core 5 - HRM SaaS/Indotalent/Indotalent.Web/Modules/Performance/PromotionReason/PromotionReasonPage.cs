using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(PromotionReasonRow))]
    public class PromotionReasonController : Controller
    {
        [Route("Performance/PromotionReason")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/PromotionReason/PromotionReasonIndex.cshtml");
        }
    }
}