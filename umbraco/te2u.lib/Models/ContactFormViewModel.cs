using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace te2u.lib.Models
{
    public class ContactFormViewModel
    {
        [Required(ErrorMessage = "Name is required")]
        [DisplayName("Name:")]
        public string Name { get; set; }
        [Required(ErrorMessage = "E-mail is required")]
        [EmailAddress(ErrorMessage = "Please type in a valid e-mail address")]
        [DisplayName("E-Mail:")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Message is required")]
        [DisplayName("Message:")]
        public string Message { get; set; }

        [HiddenInput(DisplayValue = false)]
        public string SendTo { get; set; }
        [HiddenInput(DisplayValue = false)]
        public string Subject { get; set; }
    }
}