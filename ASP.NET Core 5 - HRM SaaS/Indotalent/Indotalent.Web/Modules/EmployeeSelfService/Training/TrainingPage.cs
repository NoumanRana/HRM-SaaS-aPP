using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(TrainingRow))]
    public class TrainingController : Controller
    {
        [Route("EmployeeSelfService/Training")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Training/TrainingIndex.cshtml");
        }
    }
}