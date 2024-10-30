using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(HolidayRow))]
    public class HolidayController : Controller
    {
        [Route("Operation/Holiday")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Holiday/HolidayIndex.cshtml");
        }
    }
}