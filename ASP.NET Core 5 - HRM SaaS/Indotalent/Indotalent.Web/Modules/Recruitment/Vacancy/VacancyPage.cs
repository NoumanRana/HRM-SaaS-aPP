using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Recruitment.Pages
{

    [PageAuthorize(typeof(VacancyRow))]
    public class VacancyController : Controller
    {
        [Route("Recruitment/Vacancy")]
        public ActionResult Index()
        {
            return View("~/Modules/Recruitment/Vacancy/VacancyIndex.cshtml");
        }
    }
}