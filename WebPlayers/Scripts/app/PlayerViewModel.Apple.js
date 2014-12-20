/// <reference path="../typings/knockout/knockout.d.ts" />
/// <reference path="../typings/dash/dash.d.ts" />
/// <reference path="Models/Asset.ts" />
var ViewModels;
(function (ViewModels) {
    (function (Apple) {
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
                this.videoElement.setAttribute("src", asset.hlsUri);
                this.videoElement.setAttribute("autoplay", "true");
                this.streamingUrl(asset.hlsUri);
            };
            return PlayerViewModel;
        })();
        Apple.PlayerViewModel = PlayerViewModel;
    })(ViewModels.Apple || (ViewModels.Apple = {}));
    var Apple = ViewModels.Apple;
})(ViewModels || (ViewModels = {}));
//# sourceMappingURL=PlayerViewModel.Apple.js.map
