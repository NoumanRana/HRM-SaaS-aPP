using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(VacancyBenefitRow))]
    public class VacancyBenefitController : Controller
    {
        [Route("Recruitment/VacancyBenefit")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/VacancyBenefit/VacancyBenefitIndex.cshtml");
        }
    }
}