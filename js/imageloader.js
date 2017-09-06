function ImageLoader(imageList) {
    ImageLoader.prototype.imageList = imageList;
}

ImageLoader.prototype.loadAll = function() {
    ImageLoader.prototype.imageList.forEach(function(image) {
        image.load();
        this.checkSingleIsLoaded(image);
    });
};

ImageLoader.prototype.checkSingleIsLoaded = function(image) {
    if (!image.isLoaded()) {
        setTimeout(this.checkSingleIsLoaded(image),8);
    }
};