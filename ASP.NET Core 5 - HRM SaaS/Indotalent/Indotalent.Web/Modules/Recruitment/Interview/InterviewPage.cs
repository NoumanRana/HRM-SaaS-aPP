using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(InterviewRow))]
    public class InterviewController : Controller
    {
        [Route("Recruitment/Interview")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/Interview/InterviewIndex.cshtml");
        }
    }
}