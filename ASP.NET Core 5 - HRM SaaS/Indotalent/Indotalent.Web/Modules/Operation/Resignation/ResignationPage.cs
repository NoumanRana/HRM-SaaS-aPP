using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(ResignationRow))]
    public class ResignationController : Controller
    {
        [Route("Operation/Resignation")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Resignation/ResignationIndex.cshtml");
        }
    }
}