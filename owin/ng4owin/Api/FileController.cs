using System.Web.Hosting;
using System.Web.Http;
using System.Net.Http;
using System.IO;

namespace ng4owin.Api
{
    public class FileController : ApiController
    {
        [HttpPost]
        public async void Upload()
        {
            var folderPath = HostingEnvironment.MapPath("~/uploads");
            var isMultiPart = Request.Content.IsMimeMultipartContent();
            if (isMultiPart)
            {
                Directory.CreateDirectory(folderPath);
                var multi = await Request.Content.ReadAsMultipartAsync();
                foreach (var content in multi.Contents)
                    using (var fileStream = File.OpenWrite(Path.Combine(folderPath, content.Headers.ContentDisposition.FileName.Trim('"'))))
                        await content.CopyToAsync(fileStream);
            }
        }

    }
}
