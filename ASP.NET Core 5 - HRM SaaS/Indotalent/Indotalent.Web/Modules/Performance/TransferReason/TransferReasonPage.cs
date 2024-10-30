using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(TransferReasonRow))]
    public class TransferReasonController : Controller
    {
        [Route("Performance/TransferReason")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/TransferReason/TransferReasonIndex.cshtml");
        }
    }
}