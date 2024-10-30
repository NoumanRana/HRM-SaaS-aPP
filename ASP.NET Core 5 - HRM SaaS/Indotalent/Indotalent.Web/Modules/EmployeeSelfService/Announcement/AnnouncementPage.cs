using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Indotalent.EmployeeSelfService.Pages
{

    [PageAuthorize(typeof(AnnouncementRow))]
    public class AnnouncementController : Controller
    {
        [Route("EmployeeSelfService/Announcement")]
        public ActionResult Index()
        {
            return View("~/Modules/EmployeeSelfService/Announcement/AnnouncementIndex.cshtml");
        }
    }
}