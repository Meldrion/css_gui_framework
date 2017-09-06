"use strict";

function ImageContainer(path) {
    this.path = path;
    this.imageObj = null;
    this.loaded = false;
}

ImageContainer.prototype.load  = function() {

    var ref = this;

    this.imageObj = new Image();
    this.imageObj.src = this.path;
    this.imageObj.onload = function() {
        ref.loaded = true;
    };
};

ImageContainer.prototype.isLoaded = function() {
    return this.loaded;
};

ImageContainer.prototype.getImage = function() {
    return this.imageObj;
};