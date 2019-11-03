"use strict";
exports.__esModule = true;
var react_1 = require("react");
var placeItems_1 = require("./placeItems");
var Gallery = function (props) {
    var _a = react_1.useState({
        transition: '.2s',
        opacity: 0
    }), parentStyle = _a[0], setParentStyle = _a[1];
    function formatLayout() {
        placeItems_1["default"](props.screen || window.innerWidth, props.lines || 2, props.marginPerc || 0.04);
        setParentStyle({
            transition: '.2s',
            opacity: 1
        });
    }
    react_1.useEffect(function () { return window.addEventListener('resize', formatLayout); }, []);
    return (react_1["default"].createElement("div", { style: parentStyle, onLoad: formatLayout }, react_1["default"].Children.map(props.children, function (x, k) { return (react_1["default"].createElement("div", { className: "like-pinterst-gallery-cards", key: k }, x)); })));
};
exports["default"] = Gallery;
