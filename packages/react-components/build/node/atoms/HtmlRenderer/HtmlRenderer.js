"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["component", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const HtmlRenderer = props => {
  var _every, _ref;

  const {
    component,
    value
  } = props,
        rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const isElement = /*#__PURE__*/(0, _react.isValidElement)(value) || (value == null ? void 0 : (_every = (_ref = value).every) == null ? void 0 : _every.call(_ref, item => /*#__PURE__*/(0, _react.isValidElement)(item)));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, (0, _extends2.default)({
    component: component
  }, rest, {
    children: isElement ? value : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      dangerouslySetInnerHTML: {
        __html: value
      }
    })
  }));
};

var _default = HtmlRenderer;
exports.default = _default;