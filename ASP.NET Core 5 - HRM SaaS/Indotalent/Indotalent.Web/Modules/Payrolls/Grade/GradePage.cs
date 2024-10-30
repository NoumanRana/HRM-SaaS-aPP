using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(GradeRow))]
    public class GradeController : Controller
    {
        [Route("Payrolls/Grade")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/Grade/GradeIndex.cshtml");
        }
    }
}