import React, { useState, useEffect } from 'react';
import placeItems from './placeItems';
var Gallery = function (props) {
    var _a = useState({
        transition: '.2s',
        opacity: 0
    }), parentStyle = _a[0], setParentStyle = _a[1];
    function formatLayout() {
        placeItems(props.screen || window.innerWidth, props.lines || 2, props.marginPerc || 0.04);
        setParentStyle({
            transition: '.2s',
            opacity: 1
        });
    }
    useEffect(function () { return window.addEventListener('resize', formatLayout); }, []);
    return (React.createElement("div", { style: parentStyle, onLoad: formatLayout }, React.Children.map(props.children, function (x, k) { return (React.createElement("div", { className: "like-pinterst-gallery-cards", key: k }, x)); })));
};
export default Gallery;
