import React, { useEffect } from 'react';
import ResizeObserver from 'react-resize-observer';
import placeItems from './placeItems';
var Gallery = function (props) {
    function formatLayout() {
        var _a;
        placeItems(props.screen || window.innerWidth, props.lines || 2, (_a = props.marginPerc, (_a !== null && _a !== void 0 ? _a : 0.04)));
    }
    useEffect(formatLayout, []);
    return (React.createElement("div", { style: { position: 'relative' } },
        React.createElement(ResizeObserver, { onResize: formatLayout }),
        React.Children.map(props.children, function (x, k) { return (React.createElement("div", { className: "like-pinterst-gallery-cards", onLoad: formatLayout, key: k }, x)); })));
};
export default Gallery;
