using System.Text;

namespace PeristingGridLayoutApp.Authorization
{
    public class AppCredentialsModel
    {
        public string Name { get; set; }
        public string Secret { get; set; }

        public override string ToString()
        {
            var settings = new StringBuilder();
            settings.AppendLine($"Name: {Name}");
            settings.AppendLine($"Secret: {Secret}");
            return settings.ToString();
        }
    }
}

