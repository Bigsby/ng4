using System.Web;
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
            //var request = HttpContext.Current.Request;
            var isMultiPart = Request.Content.IsMimeMultipartContent();
            if (isMultiPart)
            {
                var multi = await Request.Content.ReadAsMultipartAsync();
                foreach (var content in multi.Contents)
                    using (var fileStream = File.OpenWrite(Path.Combine(folderPath, content.Headers.ContentDisposition.FileName.Trim('"'))))
                        await content.CopyToAsync(fileStream);
            }
            //if (isMultiPart) {
            //var streamProvider = new MultipartFormDataStreamProvider(HostingEnvironment.MapPath("~/uploads"));
            //await Request.Content.ReadAsMultipartAsync(streamProvider);
            //}
            //if (request.Files?.Count > 0) {

            //    foreach (string file in request.Files)
            //    {
            //        var postFile = request.Files[file];
            //        var path = HostingEnvironment.MapPath("~/uploads/" + postFile.FileName);
            //        postFile.SaveAs(path);
            //    }
            //}

        }
    }
}
