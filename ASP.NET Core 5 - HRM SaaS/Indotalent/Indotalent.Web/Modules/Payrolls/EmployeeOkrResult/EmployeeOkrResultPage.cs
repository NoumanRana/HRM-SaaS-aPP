using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeOkrResultRow))]
    public class EmployeeOkrResultController : Controller
    {
        [Route("Payrolls/EmployeeOkrResult")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeOkrResult/EmployeeOkrResultIndex.cshtml");
        }
    }
}