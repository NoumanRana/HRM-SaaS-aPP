using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeDocumentRow))]
    public class EmployeeDocumentController : Controller
    {
        [Route("Payrolls/EmployeeDocument")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeDocument/EmployeeDocumentIndex.cshtml");
        }
    }
}