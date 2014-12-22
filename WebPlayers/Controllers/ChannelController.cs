using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Web.Mvc;
using Microsoft.WindowsAzure.MediaServices.Client;

namespace WebPlayers.Controllers
{
    [Authorize]
    public class ChannelController : Controller
    {
        private const string MediaServicesAccountName = "MediaServicesAccountName";
        private const string MediaServicesAccountKey = "MediaServicesAccountKey";

        private CloudMediaContext _context;

        public ChannelController() :
            this(new CloudMediaContext(
                ConfigurationManager.AppSettings[MediaServicesAccountName],
                ConfigurationManager.AppSettings[MediaServicesAccountKey]))
        {
        }

        public ChannelController(CloudMediaContext context)
        {
            _context = context;
        }

        // GET: Channel
        public ActionResult Index()
        {
            return View(_context.Channels);
        }

        public ActionResult Programs(string id)
        {
            var firstOrDefault = _context.Channels.ToList().FirstOrDefault(x => x.Name == id);
            if (firstOrDefault == null)
                return new HttpStatusCodeResult(404);
            
            return View(firstOrDefault);
        }

        public ActionResult AddProgram(string id)
        {
            var firstOrDefault = _context.Channels.ToList().FirstOrDefault(x => x.Name == id);
            if (firstOrDefault == null)
                return new HttpStatusCodeResult(404);

            return View("AddProgram", firstOrDefault);
        }

        public ActionResult Start(string id)
        {
            var firstOrDefault = _context.Channels.ToList().FirstOrDefault(x => x.Name == id);
            if (firstOrDefault == null)
                return new HttpStatusCodeResult(404);
            
            firstOrDefault.StartAsync();

            return View("Index", _context.Channels);
        }

        public ActionResult Stop(string id)
        {
            var firstOrDefault = _context.Channels.ToList().FirstOrDefault(x => x.Name == id);
            if (firstOrDefault == null)
                return new HttpStatusCodeResult(404);
            
            firstOrDefault.StopAsync();

            return View("Index", _context.Channels);
        }
        public ActionResult Reset(string id)
        {
            var firstOrDefault = _context.Channels.ToList().FirstOrDefault(x => x.Name == id);
            if (firstOrDefault == null)
                return new HttpStatusCodeResult(404);

            firstOrDefault.ResetAsync();

            return View("Index", _context.Channels);
        }

        public ActionResult Add()
        {
            return null;
        }

        // POST: Channel
        [HttpPost]
        public ActionResult Add(string a)
        {
            //3. Create a channel
            //3.1 Create Channel Input
            var input = new ChannelInput
            {
                StreamingProtocol = StreamingProtocol.RTMP,
                AccessControl = new ChannelAccessControl
                {
                    IPAllowList = new List<IPRange>
                    {
                        new IPRange{
                            Name="MyInput",
                            Address=IPAddress.Parse("0.0.0.0"),
                            SubnetPrefixLength = 0
                        }
                    }
                }
            };

            //3.2 Create Channel Preview
            
            var preview = new ChannelPreview
            {
                AccessControl = new ChannelAccessControl
                {
                    IPAllowList = new List<IPRange>()
                    {
                        new IPRange{
                            Name= "MyPreview",
                            Address = IPAddress.Parse("0.0.0.0"),
                            SubnetPrefixLength = 0
                        }
                    }
                }
            };

            //3.3 Create Channel Output
            var output = new ChannelOutput { Hls = new ChannelOutputHls { FragmentsPerSegment = 1 } };

            var channel = _context.Channels.Create(new ChannelCreationOptions
            {
                Name = "Channel-Returngis-1",
                Input = input,
                Preview = preview,
                Output = output

            });

            channel.Start();

            return View();
        }
    }
}