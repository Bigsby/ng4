using System.Web.Http;

namespace ng4owin.Api
{
    public class SimpleController : ApiController
    {
        public string Get()
        {
            return "From controller";
        }
    }
}