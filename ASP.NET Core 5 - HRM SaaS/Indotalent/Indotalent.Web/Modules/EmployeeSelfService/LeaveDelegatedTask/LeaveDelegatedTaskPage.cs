using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(LeaveDelegatedTaskRow))]
    public class LeaveDelegatedTaskController : Controller
    {
        [Route("EmployeeSelfService/LeaveDelegatedTask")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/LeaveDelegatedTask/LeaveDelegatedTaskIndex.cshtml");
        }
    }
}