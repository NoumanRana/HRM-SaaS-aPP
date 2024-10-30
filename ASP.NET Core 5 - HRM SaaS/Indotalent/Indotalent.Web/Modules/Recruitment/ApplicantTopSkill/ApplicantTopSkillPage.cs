using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(ApplicantTopSkillRow))]
    public class ApplicantTopSkillController : Controller
    {
        [Route("Recruitment/ApplicantTopSkill")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/ApplicantTopSkill/ApplicantTopSkillIndex.cshtml");
        }
    }
}