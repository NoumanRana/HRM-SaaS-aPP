using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(PromotionRow))]
    public class PromotionController : Controller
    {
        [Route("Performance/Promotion")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/Promotion/PromotionIndex.cshtml");
        }
    }
}