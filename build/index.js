"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactResizeObserver = _interopRequireDefault(require("react-resize-observer"));

var _placeItems = _interopRequireDefault(require("./placeItems"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Gallery = function (props) {
  var _a = (0, _react.useState)(0),
      parentHeight = _a[0],
      setParentHeight = _a[1];

  function formatLayout() {
    var _a;

    var maxHeight = (0, _placeItems.default)(props.screen || window.innerWidth, props.lines || 2, (_a = props.marginPerc, _a !== null && _a !== void 0 ? _a : 0.04), props.square || false);
    setParentHeight(maxHeight);
  }

  (0, _react.useEffect)(formatLayout, []);
  return _react.default.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: parentHeight + "px"
    }
  }, _react.default.createElement(_reactResizeObserver.default, {
    onResize: formatLayout
  }), _react.default.Children.map(props.children, function (x, k) {
    return _react.default.createElement("div", {
      className: "like-pinterst-gallery-cards",
      onLoad: formatLayout,
      key: k
    }, x);
  }));
};

var _default = Gallery;
exports.default = _default;