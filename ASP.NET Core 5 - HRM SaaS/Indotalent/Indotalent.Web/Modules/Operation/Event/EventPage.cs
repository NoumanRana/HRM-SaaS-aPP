using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(EventRow))]
    public class EventController : Controller
    {
        [Route("Operation/Event")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Event/EventIndex.cshtml");
        }
    }
}