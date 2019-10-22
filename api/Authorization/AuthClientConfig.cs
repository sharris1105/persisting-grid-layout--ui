using PersistingGridLayoutApp.ConfigModels;

namespace PersistingGridLayoutApp.Authorization
{
    public class AuthClientConfig : HttpClientConfig
    {
        public string AppName { get; set; }
        public string AppSecret { get; set; }

    }
}
