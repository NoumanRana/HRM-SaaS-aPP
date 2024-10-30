using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(ComplaintRow))]
    public class ComplaintController : Controller
    {
        [Route("EmployeeSelfService/Complaint")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Complaint/ComplaintIndex.cshtml");
        }
    }
}