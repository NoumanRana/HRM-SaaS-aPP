using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(TransferCompetencyRow))]
    public class TransferCompetencyController : Controller
    {
        [Route("Performance/TransferCompetency")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/TransferCompetency/TransferCompetencyIndex.cshtml");
        }
    }
}