using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(BusinessTripRow))]
    public class BusinessTripController : Controller
    {
        [Route("Operation/BusinessTrip")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/BusinessTrip/BusinessTripIndex.cshtml");
        }
    }
}