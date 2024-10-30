using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeJobDescriptionRow))]
    public class EmployeeJobDescriptionController : Controller
    {
        [Route("Payrolls/EmployeeJobDescription")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeJobDescription/EmployeeJobDescriptionIndex.cshtml");
        }
    }
}