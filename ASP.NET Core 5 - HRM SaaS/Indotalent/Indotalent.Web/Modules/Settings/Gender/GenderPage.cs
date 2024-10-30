using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Settings.Pages
{

    [PageAuthorize(typeof(GenderRow))]
    public class GenderController : Controller
    {
        [Route("Settings/Gender")]
        public ActionResult Index()
        {
            return View("~/Modules/Settings/Gender/GenderIndex.cshtml");
        }
    }
}