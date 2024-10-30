using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(ReimbursementDetailRow))]
    public class ReimbursementDetailController : Controller
    {
        [Route("Operation/ReimbursementDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/ReimbursementDetail/ReimbursementDetailIndex.cshtml");
        }
    }
}