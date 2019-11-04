var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState, useEffect } from 'react';
import placeItems from './placeItems';
var Gallery = function (props) {
    var _a = useState({
        opacity: 0
    }), parentStyle = _a[0], setParentStyle = _a[1];
    function formatLayout() {
        placeItems(props.screen || window.innerWidth, props.lines || 2, props.marginPerc || 0.04);
        setParentStyle({
            opacity: 1
        });
    }
    useEffect(function () { return window.addEventListener('resize', formatLayout); }, []);
    return (React.createElement("div", { style: __assign({ position: 'relative', transition: '.2s' }, parentStyle), onLoad: formatLayout }, React.Children.map(props.children, function (x, k) { return (React.createElement("div", { className: "like-pinterst-gallery-cards", key: k }, x)); })));
};
export default Gallery;
