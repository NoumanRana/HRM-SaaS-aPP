using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(TicketRow))]
    public class TicketController : Controller
    {
        [Route("Operation/Ticket")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Ticket/TicketIndex.cshtml");
        }
    }
}