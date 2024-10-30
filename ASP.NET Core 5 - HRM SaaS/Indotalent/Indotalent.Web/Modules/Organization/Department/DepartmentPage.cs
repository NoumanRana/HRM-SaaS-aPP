using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Organization.Pages
{

    [PageAuthorize(typeof(DepartmentRow))]
    public class DepartmentController : Controller
    {
        [Route("Organization/Department")]
        public ActionResult Index()
        {
            return View("~/Modules/Organization/Department/DepartmentIndex.cshtml");
        }
    }
}