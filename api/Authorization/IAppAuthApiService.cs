using System.Threading.Tasks;

namespace PersistingGridLayoutApp.Authorization
{
    public interface IAppAuthApiService
    {
        Task<AppAuthTokenModel> ValidateAndIssueToken(string inboundToken);
        Task<AppAuthTokenModel> GetSession(string sessionId);
    }
}
