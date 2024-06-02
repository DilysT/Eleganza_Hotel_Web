using Microsoft.AspNetCore.Mvc;

namespace hotel_frontend.Controllers
{
    public class InvoiceController : Controller
    {
        public IActionResult Invoice()
        {
            return View();
        }
    }
}
