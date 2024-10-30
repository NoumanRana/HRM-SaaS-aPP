using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(AssetRow))]
    public class AssetController : Controller
    {
        [Route("Operation/Asset")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Asset/AssetIndex.cshtml");
        }
    }
}