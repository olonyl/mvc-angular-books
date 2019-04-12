using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace WebApp.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Script/Bundles")
                .Include(
                    "~/ClientApp/node_modules/inline.*",
                    "~/ClientApp/src/app/polyfills.*",
                    "~/ClientApp/node_modules/scripts.*",
                    "~/ClientApp/node_modules/vendor.*",
                    "~/ClientApp/src/app/main.*"));
            bundles.Add(new StyleBundle("~/Content/Styles")
                .Include("~/ClientApp/node_modules/styles.*"));
        }
    }
}