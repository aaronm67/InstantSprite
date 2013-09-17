
$(function() {

window.Desprite = desprite;

/**
 * Returns a key value pair, key = image name, value = image url
 * @param  {HtmlImageElement} image
 * @param  {String} css
 * @return {Hash}
 */
function desprite(image, css) {
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    var width = 0;
    var height = 0;
    var ret = [];

    getClasses(css).forEach(function(css) {
        var x = -parseBackgroundX(css);
        var y = -parseBackgroundY(css);
        var thisHeight = parseWidth(css) || height;
        var thisWidth = parseHeight(css) || width;
        var name = getClassName(css);

        if (css.indexOf('background-position') === -1) {
            width = thisWidth;
            height = thisHeight;
            return;
        }

        imgData = context.getImageData(x, y, thisWidth, thisHeight);
        ret.push({
            name: name,
            src: imageDataToBase64(imgData)
        });
    });

    return ret;
}

function imageDataToBase64(imgData) {
    var canvas = document.createElement('canvas');
    canvas.width = imgData.width;
    canvas.height = imgData.height;
    var context = canvas.getContext('2d');
    context.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
}

function getClasses(text) {
    return text.split('\n');
}

function getClassName(text) {
    return $.trim(text.substring(0, text.indexOf('{')));
}

function parseWidth(text) {
    return parseInt(text.replace(/.*width: ?(\d+)px;.*/, "$1"));
}

function parseHeight(text) {
    return parseInt(text.replace(/.*height: ?(\d+)px;.*/, "$1"));
}

function parseBackgroundX(text) {
    var ret = text.replace(/.*background-position: ?([0-9\-]+)(px)? ([0-9\-]+)(px)?;.*/, "$1");
    return parseInt(ret);
}

function parseBackgroundY(text) {
    var ret = text.replace(/.*background-position: ?[0-9\-]+(px)? ([0-9\-]+)(px)?;.*/, "$2");
    return parseInt(ret);
}

});
