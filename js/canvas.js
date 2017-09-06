function Canvas(id,width,height) {

    Canvas.prototype.id = id;
    Canvas.prototype.width = width;
    Canvas.prototype.height = height;
    Canvas.prototype.canvas = null;
    Canvas.prototype.context = null;

    Canvas.prototype.html =
        "<canvas id=\"" + id + "\" width=\"" + width + "\" height=\" "  + height +  "\"></canvas>"
    $("body").append(this.html);

    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');

    this.context.beginPath();
    this.context.rect(0, 0,this.width , this.height);
    this.context.fillStyle = '#000';
    this.context.fill();
}

Canvas.prototype.getCanvas = function() {
    return this.canvas;
};

Canvas.prototype.getContext = function() {
    return this.context;
};