using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(ApplicantRow))]
    public class ApplicantController : Controller
    {
        [Route("Recruitment/Applicant")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/Applicant/ApplicantIndex.cshtml");
        }
    }
}