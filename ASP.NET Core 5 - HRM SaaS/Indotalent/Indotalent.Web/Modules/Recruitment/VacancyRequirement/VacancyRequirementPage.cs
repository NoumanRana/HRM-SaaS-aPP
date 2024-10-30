using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(VacancyRequirementRow))]
    public class VacancyRequirementController : Controller
    {
        [Route("Recruitment/VacancyRequirement")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/VacancyRequirement/VacancyRequirementIndex.cshtml");
        }
    }
}