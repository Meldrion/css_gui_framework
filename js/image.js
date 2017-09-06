function Image(path) {
    Image.prototype.path = path;
    Image.prototype.imageObject = null;
    Image.prototype.loaded = false;
}

Image.prototype.load  = function() {

    this.imageObj = new Image();
    this.imageObj.onload = function() {
        this.loaded = true;
    };

    this.imageObj.src = Image.prototype.path;
};

Image.prototype.isLoaded = function() {
    return this.loaded;
};