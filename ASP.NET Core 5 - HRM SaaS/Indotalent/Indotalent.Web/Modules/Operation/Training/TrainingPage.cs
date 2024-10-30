using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(TrainingRow))]
    public class TrainingController : Controller
    {
        [Route("Operation/Training")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Training/TrainingIndex.cshtml");
        }
    }
}