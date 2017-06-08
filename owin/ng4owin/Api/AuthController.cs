using Microsoft.Owin.Security;
using System;
using System.Security.Claims;
using System.Security.Principal;
using System.Web;
using System.Web.Http;

namespace ng4owin.Api
{
    public class AuthController : ApiController
    {
        [HttpGet]
        public AuthenticationStatus Status()
        {
            return HttpContext.Current.GetOwinContext().Authentication.User.Identity.ToUser();
        }

        [HttpPost]
        public AuthenticationStatus SignIn(SignInRequest request)
        {
            if (request.Username == "b" && request.Password == "p")
            {
                var user = new User
                {
                    Username = request.Username,
                    DisplayName = "Bigsby"
                };
                HttpContext.Current.GetOwinContext().Authentication.SignIn(
                    new AuthenticationProperties
                    {
                        AllowRefresh = true,
                        ExpiresUtc = DateTime.UtcNow.AddMinutes(1),
                        IsPersistent = true
                    },
                    user.ToIdentity(Startup.AuthenticationType)
                );
                return user;
            }
            return AuthenticationStatus.Fail;
        }

        [HttpGet]
        public void SignOut() => HttpContext.Current.GetOwinContext().Authentication.SignOut();
    }

    public static class Extensions
    {
        public static User ToUser(this IIdentity identity)
        {
            if (!identity.IsAuthenticated)
                return null;

            var claimsIdentity = identity as ClaimsIdentity;
            var user = new User();
            foreach (var claim in claimsIdentity.Claims)
                switch (claim.Type)
                {
                    case ClaimTypes.Name:
                        user.DisplayName = claim.Value;
                        break;

                    case ClaimTypes.NameIdentifier:
                        user.Username = claim.Value;
                        break;
                }

            return user;
        }
    }

    public class User
    {
        public string Username { get; set; }
        public string DisplayName { get; set; }
        public ClaimsIdentity ToIdentity(string authorityType)
        {
            return new ClaimsIdentity(
                        new[] {
                            new Claim(ClaimTypes.Name, DisplayName),
                            new Claim(ClaimTypes.NameIdentifier, Username)
                        },
                        authorityType);
        }
    }

    public class AuthenticationStatus
    {
        public bool IsAuthenticated { get; set; }
        public User User { get; set; }

        public static implicit operator AuthenticationStatus(User user)
        {
            if (null == user)
                return Fail;
            return new AuthenticationStatus
            {
                IsAuthenticated = true,
                User = user
            };
        }

        public static AuthenticationStatus Fail => new AuthenticationStatus();
    }

    public class SignInRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
