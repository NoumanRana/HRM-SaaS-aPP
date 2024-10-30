using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeKpiRow))]
    public class EmployeeKpiController : Controller
    {
        [Route("Payrolls/EmployeeKpi")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeKpi/EmployeeKpiIndex.cshtml");
        }
    }
}