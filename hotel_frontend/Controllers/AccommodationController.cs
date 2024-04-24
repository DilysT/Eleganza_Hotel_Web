using Microsoft.AspNetCore.Mvc;

namespace hotel_frontend.Controllers
{
    public class AccommodationController : Controller
    {
        public IActionResult Accommodation()
        {
            return View();
        }
    }
}
