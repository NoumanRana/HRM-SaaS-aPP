using Microsoft.AspNetCore.Mvc;

namespace CoreMVCWebApplication.Controllers
{
    public class MyController : Controller
    {
        public IActionResult Index( string name)
        {
            ViewBag.Name = $"Hey {name} Welcome!";
            return View();
        }
    }
}
