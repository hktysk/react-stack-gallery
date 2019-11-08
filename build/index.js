import React, { useEffect } from 'react';
import placeItems from './placeItems';
var Gallery = function (props) {
    function formatLayout() {
        placeItems(props.screen || window.innerWidth, props.lines || 2, props.marginPerc || 0.04);
        console.log('aiuo');
    }
    useEffect(function () {
        /*
          Even if onLoad event has not fired yet,
          execute formatLayout() after loading the page.
          because If no image element in 'props.children',
          onLoad Event will not fire
        */
        window.addEventListener('resize', formatLayout);
    });
    return (React.createElement("div", { style: { position: 'relative' }, onLoad: formatLayout }, React.Children.map(props.children, function (x, k) { return (React.createElement("div", { className: "like-pinterst-gallery-cards", key: k }, x)); })));
};
export default Gallery;
