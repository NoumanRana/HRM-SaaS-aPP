using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(TerminationRow))]
    public class TerminationController : Controller
    {
        [Route("Operation/Termination")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Termination/TerminationIndex.cshtml");
        }
    }
}