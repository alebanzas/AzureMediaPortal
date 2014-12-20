var Models;
(function (Models) {
    var Asset = (function () {
        function Asset(id, name, status, mpegDashUri, hlsUri, hlsv3Uri, smoothStreamingUri, thumbnailUri, highQualityMp4Uri, midQualityMp4Uri, lowQualityMp4Uri) {
            this.id = id;
            this.name = name;
            this.status = status;
            this.mpegDashUri = mpegDashUri;
            this.hlsUri = hlsUri;
            this.hlsv3Uri = hlsv3Uri;
            this.smoothStreamingUri = smoothStreamingUri;
            this.thumbnailUri = thumbnailUri;
            this.highQualityMp4Uri = highQualityMp4Uri;
            this.midQualityMp4Uri = midQualityMp4Uri;
            this.lowQualityMp4Uri = lowQualityMp4Uri;
        }
        return Asset;
    })();
    Models.Asset = Asset;
})(Models || (Models = {}));
//# sourceMappingURL=Asset.js.map
