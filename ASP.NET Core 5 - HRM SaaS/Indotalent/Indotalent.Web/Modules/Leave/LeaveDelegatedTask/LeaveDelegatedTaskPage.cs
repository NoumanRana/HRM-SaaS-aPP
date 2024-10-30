using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Leave.Pages
{

    [PageAuthorize(typeof(LeaveDelegatedTaskRow))]
    public class LeaveDelegatedTaskController : Controller
    {
        [Route("Leave/LeaveDelegatedTask")]
        public ActionResult Index()
        {
            return View("~/Modules/Leave/LeaveDelegatedTask/LeaveDelegatedTaskIndex.cshtml");
        }
    }
}