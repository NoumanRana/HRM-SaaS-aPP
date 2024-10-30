using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(ReimbursementRow))]
    public class ReimbursementController : Controller
    {
        [Route("EmployeeSelfService/Reimbursement")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Reimbursement/ReimbursementIndex.cshtml");
        }
    }
}