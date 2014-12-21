namespace WebPlayers
{
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/jquery.tmpl.js"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/knockout.validation.js",
                "~/Scripts/knockout.mapping-latest.js"));

            bundles.Add(new ScriptBundle("~/bundles/app/common")
                .IncludeDirectory(directoryVirtualPath: "~/Scripts/app/Models", searchPattern: "*.js", searchSubdirectories: true)
                .IncludeDirectory(directoryVirtualPath: "~/Scripts/app/Services", searchPattern: "*.js", searchSubdirectories: true)
                .IncludeDirectory(directoryVirtualPath: "~/Scripts/app/ViewModels", searchPattern: "*.js", searchSubdirectories: true));

            bundles.Add(new ScriptBundle("~/bundles/app/desktop").Include(
                "~/Scripts/app/PlayerViewModel.Desktop.js"));

            bundles.Add(new ScriptBundle("~/bundles/app/windowsphone").Include(
                "~/Scripts/app/PlayerViewModel.WindowsPhone.js"));

            bundles.Add(new ScriptBundle("~/bundles/app/apple").Include(
                "~/Scripts/app/PlayerViewModel.Apple.js"));

            bundles.Add(new ScriptBundle("~/bundles/app/android").Include(
                "~/Scripts/app/PlayerViewModel.Android.js"));

            bundles.Add(new StyleBundle("~/Content/css").IncludeDirectory(
                directoryVirtualPath: "~/Content", searchPattern: "*.css", searchSubdirectories: false));

            bundles.Add(new ScriptBundle("~/bundles/dash")
                .Include("~/Scripts/dash/dash.js"));


            //ADMIN
            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/Admin/css").Include(
                "~/Content/Admin/site.css",
                "~/Content/Admin/playerframework.css"));

            bundles.Add(new StyleBundle("~/Content/Admin/themes/base/css").Include(
                        "~/Content/Admin/themes/base/jquery.ui.core.css",
                        "~/Content/Admin/themes/base/jquery.ui.resizable.css",
                        "~/Content/Admin/themes/base/jquery.ui.selectable.css",
                        "~/Content/Admin/themes/base/jquery.ui.accordion.css",
                        "~/Content/Admin/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/Admin/themes/base/jquery.ui.button.css",
                        "~/Content/Admin/themes/base/jquery.ui.dialog.css",
                        "~/Content/Admin/themes/base/jquery.ui.slider.css",
                        "~/Content/Admin/themes/base/jquery.ui.tabs.css",
                        "~/Content/Admin/themes/base/jquery.ui.datepicker.css",
                        "~/Content/Admin/themes/base/jquery.ui.progressbar.css",
                        "~/Content/Admin/themes/base/jquery.ui.theme.css"));
        }
    }
}
