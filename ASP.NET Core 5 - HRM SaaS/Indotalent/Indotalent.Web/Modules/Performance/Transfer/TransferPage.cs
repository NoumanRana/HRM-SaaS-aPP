using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(TransferRow))]
    public class TransferController : Controller
    {
        [Route("Performance/Transfer")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/Transfer/TransferIndex.cshtml");
        }
    }
}