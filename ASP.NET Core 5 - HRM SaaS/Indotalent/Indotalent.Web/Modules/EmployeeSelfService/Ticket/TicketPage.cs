using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(TicketRow))]
    public class TicketController : Controller
    {
        [Route("EmployeeSelfService/Ticket")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Ticket/TicketIndex.cshtml");
        }
    }
}