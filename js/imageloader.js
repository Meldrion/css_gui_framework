"use strict";

function ImageLoader(imageList) {
    this.imageList = imageList;
}

ImageLoader.prototype.loadAll = function() {

    var cSIL = this.checkSingleIsLoaded;

    this.imageList.forEach(function(image) {
        image.load();
        cSIL(image,cSIL);
    });

};

ImageLoader.prototype.checkSingleIsLoaded = function(image,timeoutFunction) {
    if (!image.isLoaded()) {
        setTimeout(function() {
            timeoutFunction(image,timeoutFunction);
        },8);
    }
};