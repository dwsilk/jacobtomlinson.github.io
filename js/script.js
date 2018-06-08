$.fn.random = function() {
    return this.eq(Math.floor(Math.random() * this.length));
}

var classes = [".name", ".personal-interest", ".professional-interest"]
var interval = 2000;

setInterval(function(){
    var classToChange = classes[Math.floor(Math.random() * classes.length)];
    $(classToChange + ".active").removeClass("active");
    $(classToChange).random().addClass("active");
}, interval);

