namespace WebPlayers.Controllers
{
    using System.Web.Mvc;

    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("Index", "_LayoutSimple");
        }

        public ActionResult Lista()
        {
            return View("Index", "_LayoutPlayers");
        }
    }
}
