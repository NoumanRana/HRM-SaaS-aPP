using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(ReimbursementRow))]
    public class ReimbursementController : Controller
    {
        [Route("Operation/Reimbursement")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Reimbursement/ReimbursementIndex.cshtml");
        }
    }
}