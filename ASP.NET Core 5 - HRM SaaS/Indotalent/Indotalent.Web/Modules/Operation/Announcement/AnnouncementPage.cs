using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.Operation.Pages
{

    [PageAuthorize(typeof(AnnouncementRow))]
    public class AnnouncementController : Controller
    {
        [Route("Operation/Announcement")]
        public ActionResult Index()
        {
            return View("~/Modules/Operation/Announcement/AnnouncementIndex.cshtml");
        }
    }
}