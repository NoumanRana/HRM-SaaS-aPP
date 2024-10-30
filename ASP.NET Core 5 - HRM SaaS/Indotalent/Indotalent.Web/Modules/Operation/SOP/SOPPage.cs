using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(SOPRow))]
    public class SOPController : Controller
    {
        [Route("Operation/SOP")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/SOP/SOPIndex.cshtml");
        }
    }
}