using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Organization.Pages
{

    [PageAuthorize(typeof(DesignationRow))]
    public class DesignationController : Controller
    {
        [Route("Organization/Designation")]
        public ActionResult Index()
        {
            return View("~/Modules/Organization/Designation/DesignationIndex.cshtml");
        }
    }
}