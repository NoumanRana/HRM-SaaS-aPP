using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(MeetingParticipantRow))]
    public class MeetingParticipantController : Controller
    {
        [Route("Operation/MeetingParticipant")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/MeetingParticipant/MeetingParticipantIndex.cshtml");
        }
    }
}