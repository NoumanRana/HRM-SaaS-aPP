using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(TrainingParticipantRow))]
    public class TrainingParticipantController : Controller
    {
        [Route("EmployeeSelfService/TrainingParticipant")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/TrainingParticipant/TrainingParticipantIndex.cshtml");
        }
    }
}