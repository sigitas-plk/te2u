using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using te2u.lib.Models;
using te2u.lib.Services;
using Umbraco.Web.Mvc;



namespace te2u.lib.Controllers
{
    public class ContactFormSurfaceController : SurfaceController
    {
        private const string PathToPartialViews = "~/Views/Partials/ContactForm/";

        [ChildActionOnly]
        public ActionResult RenderContactForm(string reciever, string subject)
        {
            if(!string.IsNullOrEmpty(reciever) && !string.IsNullOrEmpty(subject))
            {
                EmailAddressAttribute attribute = new EmailAddressAttribute();

                if (attribute.IsValid(reciever))
                {
                    string encoded = EncodeString.Base64Encode(reciever);

                    return PartialView(PathToPartialViews + "ContactFormView.cshtml", new ContactFormViewModel
                    {
                        SendTo = encoded,
                        Subject = subject
                    });
                }
                TempData["ConfigError"] = $"{reciever} is not a valid E-mail address. Pleace update macro configuration";
                return PartialView(PathToPartialViews + "ConfigErrView.cshtml");

            }
            TempData["ConfigError"] = "Please configure both E-mail and Subject in macro parameters";
            return PartialView(PathToPartialViews + "ConfigErrView.cshtml");

        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SubmitContactForm(ContactFormViewModel model) 
        {
            if (ModelState.IsValid)
            {
                SendMail mail = new SendMail();
               string decoded = EncodeString.Base64Decode(model.SendTo);
                model.SendTo = decoded;

                if (decoded!=null&&mail.SendEmail(model))
                {
                    TempData["Name"] = model.Name;
                    return PartialView(PathToPartialViews + "ContactFormSentView.cshtml");
                }
                TempData["Error"] = true;
                return PartialView(PathToPartialViews + "ContactFormSentView.cshtml");
            }
            return PartialView(PathToPartialViews + "ContactFormView.cshtml", model);
        }

    }
}