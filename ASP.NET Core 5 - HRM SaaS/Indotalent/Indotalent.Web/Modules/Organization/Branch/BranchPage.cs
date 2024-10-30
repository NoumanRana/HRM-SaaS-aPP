using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Organization.Pages
{

    [PageAuthorize(typeof(BranchRow))]
    public class BranchController : Controller
    {
        [Route("Organization/Branch")]
        public ActionResult Index()
        {
            return View("~/Modules/Organization/Branch/BranchIndex.cshtml");
        }
    }
}