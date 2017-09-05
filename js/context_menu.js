ContextMenu = function(contextMenuElements) {

    const MAX = 999999999999;
    const NAME = "contextMenu_";
    var elements = "";
    var randomId = this.randomNumberFromRange(0,MAX);
    const KEY_CODE_ESCAPE = 27;

    contextMenuElements.forEach(function (element) {
        if (element === "[splitter]") {
            elements += "<li class=\"splitter\"><hr/></li>";
        } else {
            elements += "<li><a href=\"#\">" + element + "</a></li>";
        }
    });

    var html = "" +
        "<div class=\"popupmenu\" id=" + NAME + randomId + ">" +
        "    <ul>" +
        elements +
        "    </ul>" +
        "</div>";

    $("body").append(html);

    $(document).mousemove(function (event) {
    });

    $(document).click(function (event) {
        $("#" + NAME + randomId).css({"display": "none"});
        return false;
    });

    $(document).contextmenu(function (event) {
        $("#" + NAME + randomId).css({
            "display": "inline",
            "position": "absolute",
            "top": event.pageY,
            "left": event.pageX
        });
        return false;
    });

    $(document).keydown(function (event) {
        if (event.keyCode === KEY_CODE_ESCAPE) {
            $("#" + NAME + randomId).css({"display": "none"});
        }
    });
};

ContextMenu.prototype.randomNumberFromRange = function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};
