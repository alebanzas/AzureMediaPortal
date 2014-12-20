/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/dash/dash.d.ts" />
/// <reference path="Models/Asset.ts" />
var ViewModels;
(function (ViewModels) {
    (function (Android) {
        var PlayerViewModel = (function () {
            function PlayerViewModel(videoElement) {
                var _this = this;
                this.videoElement = videoElement;

                this.selectedAsset = ko.observable(null).subscribeTo("selectedAsset");
                this.selectedAsset.subscribe(function (newAsset) {
                    if (newAsset) {
                        _this.setPlayerSource(newAsset);
                    }
                });

                this.streamingUrl = ko.observable(null);
            }
            PlayerViewModel.prototype.setPlayerSource = function (asset) {
                //this.videoElement.setAttribute("src", asset.mpegDashUri);
                //this.videoElement.setAttribute("autoplay", "true");
                //this.streamingUrl(asset.mpegDashUri);
                //this.videoElement.setAttribute("src", asset.hlsUri);
                //this.videoElement.setAttribute("autoplay", "true");
                //this.streamingUrl(asset.hlsUri);
                this.videoElement.setAttribute("src", asset.hlsv3Uri);
                this.videoElement.setAttribute("autoplay", "true");
                this.streamingUrl(asset.hlsv3Uri);
            };
            return PlayerViewModel;
        })();
        Android.PlayerViewModel = PlayerViewModel;
    })(ViewModels.Android || (ViewModels.Android = {}));
    var Android = ViewModels.Android;
})(ViewModels || (ViewModels = {}));
//# sourceMappingURL=PlayerViewModel.Android.js.map
