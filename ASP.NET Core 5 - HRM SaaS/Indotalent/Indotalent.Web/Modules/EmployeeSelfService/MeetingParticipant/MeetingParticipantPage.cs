using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(MeetingParticipantRow))]
    public class MeetingParticipantController : Controller
    {
        [Route("EmployeeSelfService/MeetingParticipant")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/MeetingParticipant/MeetingParticipantIndex.cshtml");
        }
    }
}