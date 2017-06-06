using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using System.Web.Http;

[assembly: OwinStartup(typeof(ng4owin.Startup))]
namespace ng4owin
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
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
                context.Response.ContentType = "text/plain";
                return context.Response.WriteAsync("OWIN here!");
            });
        }
    }
}