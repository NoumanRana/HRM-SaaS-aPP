using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(BusinessTripParticipantRow))]
    public class BusinessTripParticipantController : Controller
    {
        [Route("Operation/BusinessTripParticipant")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/BusinessTripParticipant/BusinessTripParticipantIndex.cshtml");
        }
    }
}