using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(EvaluationRow))]
    public class EvaluationController : Controller
    {
        [Route("Performance/Evaluation")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/Evaluation/EvaluationIndex.cshtml");
        }
    }
}