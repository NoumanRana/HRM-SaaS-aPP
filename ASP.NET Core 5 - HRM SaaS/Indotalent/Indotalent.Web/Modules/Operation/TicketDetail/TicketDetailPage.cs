using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(TicketDetailRow))]
    public class TicketDetailController : Controller
    {
        [Route("Operation/TicketDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/TicketDetail/TicketDetailIndex.cshtml");
        }
    }
}