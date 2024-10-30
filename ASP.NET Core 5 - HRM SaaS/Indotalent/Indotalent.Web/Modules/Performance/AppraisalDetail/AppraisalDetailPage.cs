using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Performance.Pages
{

    [PageAuthorize(typeof(AppraisalDetailRow))]
    public class AppraisalDetailController : Controller
    {
        [Route("Performance/AppraisalDetail")]
        public ActionResult Index()
        {
            return View("~/Modules/Performance/AppraisalDetail/AppraisalDetailIndex.cshtml");
        }
    }
}