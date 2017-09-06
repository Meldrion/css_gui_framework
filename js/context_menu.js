ContextMenu = function(contextMenuElements) {

    const MAX = 999999999999;
    const NAME = "contextMenu_";

    var elements = "";
    var randomId = NAME + this.randomNumberFromRange(0,MAX);
    const KEY_CODE_ESCAPE = 27;

    var counter = 0;
    var liElements = [];

    contextMenuElements.forEach(function (element) {

        if (element.name === "[splitter]") {
            elements += "<li class=\"splitter\"><hr/></li>";
        } else {
            counter++;
            var uniqueID = randomId + "_" + counter;
            elements += "<li id=" + uniqueID + "><a href=\"#\">" + element.name + "</a></li>";
            liElements.push({name: uniqueID , action: element.action});
        }

    });

    var html = "" +
        "<div class=\"popupmenu\" id=" + randomId + ">" +
        "    <ul>" +
        elements +
        "    </ul>" +
        "</div>";

    $("body").append(html);

    // Bind the Methods
    liElements.forEach(function(element) {
        $("#" + element.name).on("click",element.action);
    });

    $(document).mousemove(function (event) {
    });

    $(document).click(function (event) {
        $("#" + randomId).css({"display": "none"});
        return false;
    });

    $(document).contextmenu(function (event) {
        $("#" + randomId).css({
            "display": "inline",
            "position": "absolute",
            "top": event.pageY,
            "left": event.pageX
        });
        return false;
    });

    $(document).keydown(function (event) {
        if (event.keyCode === KEY_CODE_ESCAPE) {
            $("#" + randomId).css({"display": "none"});
        }
    });
};

ContextMenu.prototype.randomNumberFromRange = function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
};
