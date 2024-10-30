using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(ComplaintRow))]
    public class ComplaintController : Controller
    {
        [Route("Operation/Complaint")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Complaint/ComplaintIndex.cshtml");
        }
    }
}