export default function placeItems(screen, lines, marginPerc) {
    var items = Array.from(document.getElementsByClassName('like-pinterst-gallery-cards'));
    var margin = {
        one: Math.floor(screen * marginPerc),
        half: Math.floor(screen * marginPerc / 2),
        quater: Math.floor(screen * marginPerc / 4),
    };
    var card = {
        width: {
            includeMargin: (screen - margin.one) / lines,
            notIncludeMargin: (screen - margin.one) / lines - margin.half,
        }
    };
    /*
      Create an array (row) to store the height,
      place the item on the row with the lowest height
    */
    var linesHeight = new Array(lines).fill(0);
    items.forEach(function (v) {
        var min = Math.min.apply(Math, linesHeight);
        var minIndex = linesHeight.findIndex(function (x) { return x === min; });
        var position = {
            y: linesHeight[minIndex],
            x: card.width.includeMargin * minIndex + margin.half
        };
        v.style.cssText = "\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: " + card.width.notIncludeMargin + "px;\n      transform: translate(" + position.x + "px, " + position.y + "px);\n      overflow: hidden;\n    ";
        linesHeight[minIndex] += v.clientHeight + margin.half;
    });
}
