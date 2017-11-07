using System;
using Umbraco.Core.Logging;

namespace te2u.lib.Services
{
    public static class EncodeString
    {

        public static string Base64Encode(string plainText)
        {
            if (plainText == null)
                return null;
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        public static string Base64Decode(string base64EncodedData)
        {
            if (base64EncodedData == null)
                return null;
            try
            {
                var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
                return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
            }
            catch (Exception ex)
            {
                LogHelper.Info(base64EncodedData.GetType(), ex.ToString);
                return null;
            }
        }


    }
}