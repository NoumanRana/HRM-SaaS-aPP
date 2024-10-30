using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(InterviewResultRow))]
    public class InterviewResultController : Controller
    {
        [Route("Recruitment/InterviewResult")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/InterviewResult/InterviewResultIndex.cshtml");
        }
    }
}