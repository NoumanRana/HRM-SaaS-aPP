using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(ReimbursementDetailRow))]
    public class ReimbursementDetailController : Controller
    {
        [Route("EmployeeSelfService/ReimbursementDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/ReimbursementDetail/ReimbursementDetailIndex.cshtml");
        }
    }
}