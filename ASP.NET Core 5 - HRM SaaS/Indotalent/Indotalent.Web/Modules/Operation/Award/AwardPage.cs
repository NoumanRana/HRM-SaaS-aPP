using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(AwardRow))]
    public class AwardController : Controller
    {
        [Route("Operation/Award")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Award/AwardIndex.cshtml");
        }
    }
}