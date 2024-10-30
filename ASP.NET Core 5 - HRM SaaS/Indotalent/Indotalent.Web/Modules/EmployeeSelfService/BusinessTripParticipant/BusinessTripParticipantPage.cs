using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(BusinessTripParticipantRow))]
    public class BusinessTripParticipantController : Controller
    {
        [Route("EmployeeSelfService/BusinessTripParticipant")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/BusinessTripParticipant/BusinessTripParticipantIndex.cshtml");
        }
    }
}