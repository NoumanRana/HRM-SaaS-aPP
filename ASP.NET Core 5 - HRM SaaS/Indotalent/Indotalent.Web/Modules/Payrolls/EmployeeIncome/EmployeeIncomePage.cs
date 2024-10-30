using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeIncomeRow))]
    public class EmployeeIncomeController : Controller
    {
        [Route("Payrolls/EmployeeIncome")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeIncome/EmployeeIncomeIndex.cshtml");
        }
    }
}