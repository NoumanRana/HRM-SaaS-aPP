using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(BusinessTripRow))]
    public class BusinessTripController : Controller
    {
        [Route("EmployeeSelfService/BusinessTrip")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/BusinessTrip/BusinessTripIndex.cshtml");
        }
    }
}