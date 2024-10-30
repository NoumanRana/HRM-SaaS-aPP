using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Payrolls.Pages
{

    [PageAuthorize(typeof(EmployeeTopSkillRow))]
    public class EmployeeTopSkillController : Controller
    {
        [Route("Payrolls/EmployeeTopSkill")]
        public ActionResult Index()
        {
            return View("~/Modules/Payrolls/EmployeeTopSkill/EmployeeTopSkillIndex.cshtml");
        }
    }
}