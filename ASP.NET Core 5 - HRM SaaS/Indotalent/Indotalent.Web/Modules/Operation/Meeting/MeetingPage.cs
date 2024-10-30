using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(MeetingRow))]
    public class MeetingController : Controller
    {
        [Route("Operation/Meeting")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Meeting/MeetingIndex.cshtml");
        }
    }
}