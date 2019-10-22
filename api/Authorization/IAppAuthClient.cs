using System.Threading.Tasks;

namespace PersistingGridLayoutApp.Authorization
{
    public interface IAppAuthClient
    {
        Task<AppAuthTokenModel> GetSession(string encryptedAppCredentials, string sessionId);
        Task<AppAuthTokenModel> ValidateAndIssueToken(string encryptedAppCredentials, string inboundToken);
    }
}
