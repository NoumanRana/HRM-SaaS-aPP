using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeParentRow))]
    public class EmployeeParentController : Controller
    {
        [Route("Payrolls/EmployeeParent")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeParent/EmployeeParentIndex.cshtml");
        }
    }
}