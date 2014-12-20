/// <reference path="../Models/Asset.ts" />
var Services;
(function (Services) {
    var AssetLibraryService = (function () {
        function AssetLibraryService() {
            // TODO: move this to a configuration file
            this.getAssetsUrl = "../api/assets";
            this.getAssetUrl = "../api/assets?assetId=";
        }
        AssetLibraryService.prototype.getAssets = function (skip, take) {
            if (typeof skip === "undefined") { skip = 0; }
            if (typeof take === "undefined") { take = 10; }
            // TODO: handle errors
            var request = $.ajax({
                url: this.getAssetsUrl + "?skip=" + skip + "&take=" + take,
                cache: false
            });

            return request;
        };

        AssetLibraryService.prototype.getAsset = function (assetId) {
            // TODO: handle errors
            var request = $.ajax({
                url: this.getAssetUrl + assetId,
                cache: false
            });

            return request;
        };
        return AssetLibraryService;
    })();
    Services.AssetLibraryService = AssetLibraryService;
})(Services || (Services = {}));
//# sourceMappingURL=AssetLibraryService.js.map
