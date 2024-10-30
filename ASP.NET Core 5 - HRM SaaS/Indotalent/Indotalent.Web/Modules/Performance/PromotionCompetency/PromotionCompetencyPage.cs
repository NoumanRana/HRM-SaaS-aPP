using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(PromotionCompetencyRow))]
    public class PromotionCompetencyController : Controller
    {
        [Route("Performance/PromotionCompetency")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/PromotionCompetency/PromotionCompetencyIndex.cshtml");
        }
    }
}