using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(AssetHandOverRow))]
    public class AssetHandOverController : Controller
    {
        [Route("Operation/AssetHandOver")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/AssetHandOver/AssetHandOverIndex.cshtml");
        }
    }
}