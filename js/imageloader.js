"use strict";

function ImageLoader(imageList) {
    this.imageList = imageList;
}

ImageLoader.prototype.loadAll = function(doneFunction) {

    this.imageList.forEach(function(image) {
        image.load();
    });

    var counter = 0;
    var ref = this;
    var intervalID = setInterval(function(){

        if (counter >= ref.imageList.length) {
            clearInterval(intervalID);
            doneFunction();
        } else {
            if (ref.imageList[counter].isLoaded()) {
                counter++;
            }
        }

        console.log(counter);
    }, 100);
};