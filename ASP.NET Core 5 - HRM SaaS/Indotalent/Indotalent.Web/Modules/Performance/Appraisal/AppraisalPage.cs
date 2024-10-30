using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(AppraisalRow))]
    public class AppraisalController : Controller
    {
        [Route("Performance/Appraisal")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/Appraisal/AppraisalIndex.cshtml");
        }
    }
}