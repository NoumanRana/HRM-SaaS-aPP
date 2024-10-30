using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(ApplicantEducationRow))]
    public class ApplicantEducationController : Controller
    {
        [Route("Recruitment/ApplicantEducation")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/ApplicantEducation/ApplicantEducationIndex.cshtml");
        }
    }
}