var xhttp = new XMLHttpRequest();

xhttp.open("GET", "trails.json", true);
xhttp.send();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var trailJson = this.responseText;
        console.log(" this.responseText", typeof JSON.parse(this.responseText))
        var parsed = JSON.parse(trailJson);
        console.log("parsed", parsed.length)
        var newArray = parsed.map(function (el, index) {
            return (console.log(el.tag, index),
                $('.tag' + (index + 1)).html(el.tag),
                $('.title' + (index + 1)).html(el.title),
                $('.day' + (index + 1)).html(el.days),
                $('.route' + (index + 1)).html(el.route));
        });
    }
};
