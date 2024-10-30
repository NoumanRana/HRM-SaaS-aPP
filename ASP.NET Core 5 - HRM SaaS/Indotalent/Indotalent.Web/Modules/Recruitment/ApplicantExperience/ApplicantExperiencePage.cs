using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(ApplicantExperienceRow))]
    public class ApplicantExperienceController : Controller
    {
        [Route("Recruitment/ApplicantExperience")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/ApplicantExperience/ApplicantExperienceIndex.cshtml");
        }
    }
}