using System;
using System.Net.Mail;
using System.Threading;
using te2u.lib.Models;
using Umbraco.Core.Logging;

namespace te2u.lib.Services
{
    public class SendMail 
    {


        public bool SendEmail(ContactFormViewModel model)
        {

            SmtpClient client = new SmtpClient();
            MailMessage message = GetMailMessage(model);
            try
            {
                client.Send(message);
                return true;
            }
            catch (SmtpFailedRecipientException ex)
            {
                SmtpStatusCode statusCode = ex.StatusCode;

                if (statusCode == SmtpStatusCode.MailboxBusy ||
                    statusCode == SmtpStatusCode.MailboxUnavailable ||
                    statusCode == SmtpStatusCode.TransactionFailed)
                {
                    // wait 5 seconds, try a second time
                    Thread.Sleep(5000);

                    client.Send(message);
                    return true;
                }
                else
                {
                    LogHelper.Info(this.GetType(), ex.ToString);
                    return false;
                }
            }
            catch (Exception ex)
            {
                LogHelper.Info(this.GetType(), ex.ToString);
                return false;
            }
            finally
            {
                message.Dispose();
            }
        }

        public MailMessage GetMailMessage(ContactFormViewModel model)
        {
            MailMessage message = new MailMessage();
            message.To.Add(model.SendTo);
            message.Subject = $"{model.Subject} - {model.Email}";
            message.Body = $"Sender name: {model.Name}\nSender e-mail: {model.Email}\n\nMessage:\n{model.Message}";
            return message;
        }
    }
}