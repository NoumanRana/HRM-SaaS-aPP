using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(TicketDetailRow))]
    public class TicketDetailController : Controller
    {
        [Route("EmployeeSelfService/TicketDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/TicketDetail/TicketDetailIndex.cshtml");
        }
    }
}