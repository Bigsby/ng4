using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using System.Web.Http;
using System.IO;
using Microsoft.Owin.Security.Cookies;
using System.Web.Http.Dependencies;
using System;
using System.Collections.Generic;

[assembly: OwinStartup(typeof(ng4owin.Startup))]
namespace ng4owin
{
    public class Startup
    {
        public const string AuthenticationType = "myApp";

        public void Configuration(IAppBuilder app)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = AuthenticationType
            });

            var apiConfig = new HttpConfiguration();
            apiConfig.Routes.MapHttpRoute("default", "api/{controller}/{action}");
            app.UseWebApi(apiConfig);

            var fileSystem = new PhysicalFileSystem("wwwroot");
            var staticFilesConfig = new FileServerOptions
            {
                FileSystem = fileSystem
            };
            staticFilesConfig.DefaultFilesOptions.DefaultFileNames = new[]
            {
                "index.html"
            };

            app.UseFileServer(staticFilesConfig);

            app.Run(context =>
            {
                IFileInfo index;
                if (fileSystem.TryGetFileInfo("index.html", out index))
                {
                    context.Response.ContentType = "text/html";
                    return context.Response.WriteAsync(ReadFully(index.CreateReadStream()));
                }
                context.Response.ContentType = "text/plain";
                return context.Response.WriteAsync("OWIN here!");
            });
        }

        private static byte[] ReadFully(Stream input)
        {
            byte[] buffer = new byte[16 * 1024];
            using (MemoryStream ms = new MemoryStream())
            {
                int read;
                while ((read = input.Read(buffer, 0, buffer.Length)) > 0)
                {
                    ms.Write(buffer, 0, read);
                }
                return ms.ToArray();
            }
        }
    }
}