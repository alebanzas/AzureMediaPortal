/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../../typings/knockout.postbox/knockout-postbox.d.ts" />
/// <reference path="../Models/Asset.ts" />
/// <reference path="../Models/AssetsInfo.ts" />
/// <reference path="../Services/AssetLibraryService.ts" />
var ViewModels;
(function (ViewModels) {
    var AssetLibraryViewModel = (function () {
        function AssetLibraryViewModel(assetLibraryService) {
            var _this = this;
            // TODO: move to a configuration file
            this.pageSize = 4;
            this.assetLibraryService = assetLibraryService;
            this.currentAssets = ko.observableArray(new Array());
            this.selectedAsset = ko.observable(null).syncWith("selectedAsset");
            this.pages = ko.observableArray(new Array());
            this.noAssets = ko.observable(false);
            this.currentPage = 0;
            this.totalPages = 0;

            // Handle events
            this.selectAsset = function (asset) {
                console.log(asset.id);

                // TODO: add error handling
                _this.assetLibraryService.getAsset(asset.id).done(function (asset) {
                    return _this.selectedAsset(asset);
                });
            };

            this.changePage = function (newPage) {
                _this.currentPage = newPage.pageValue();
                _this.loadAssets();
            };
        }
        AssetLibraryViewModel.prototype.loadAssets = function () {
            var _this = this;
            var skip = this.currentPage * this.pageSize;
            var take = this.pageSize;

            // TODO: add error handling
            this.assetLibraryService.getAssets(skip, take).done(function (assetsInfo) {
                assetsInfo.assets.forEach(function (asset) {
                    if (!asset.thumbnailUri) {
                        asset.thumbnailUri = "/Content/Images/default-asset-thumbnail.png";
                    }
                });

                _this.updatePages(assetsInfo.total);

                _this.currentAssets(assetsInfo.assets);
                _this.noAssets(assetsInfo.assets.length <= 0);

                if (assetsInfo.assets.length != 0) {
                    _this.selectAsset(assetsInfo.assets[0]);
                }
            });
        };

        AssetLibraryViewModel.prototype.updatePages = function (totalAssets) {
            this.totalPages = Math.ceil(totalAssets / this.pageSize);

            var pages = new Array();
            for (var i = 0; i < this.totalPages; i++) {
                pages.push(new PageViewModel(i + 1, i, i === this.currentPage));
            }

            this.pages(pages);
        };
        return AssetLibraryViewModel;
    })();
    ViewModels.AssetLibraryViewModel = AssetLibraryViewModel;

    var PageViewModel = (function () {
        function PageViewModel(pageText, pageValue, selected) {
            if (typeof pageText === "undefined") { pageText = 1; }
            if (typeof pageValue === "undefined") { pageValue = 0; }
            if (typeof selected === "undefined") { selected = true; }
            this.pageText = ko.observable(pageText);
            this.pageValue = ko.observable(pageValue);
            this.selected = ko.observable(selected);
        }
        return PageViewModel;
    })();
    ViewModels.PageViewModel = PageViewModel;
})(ViewModels || (ViewModels = {}));
//# sourceMappingURL=AssetLibraryViewModel.js.map
