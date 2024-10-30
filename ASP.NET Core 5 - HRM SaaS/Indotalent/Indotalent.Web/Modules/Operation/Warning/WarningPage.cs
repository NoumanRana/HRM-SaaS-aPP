using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(WarningRow))]
    public class WarningController : Controller
    {
        [Route("Operation/Warning")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Warning/WarningIndex.cshtml");
        }
    }
}