using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(TrainingParticipantRow))]
    public class TrainingParticipantController : Controller
    {
        [Route("Operation/TrainingParticipant")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/TrainingParticipant/TrainingParticipantIndex.cshtml");
        }
    }
}