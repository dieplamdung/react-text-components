"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _children = require("./children");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["disabled", "children", "externalLink", "label"];

/**
 * @param props this props extend from MuiButtonProps and addition variants
 * @returns Button component with children as text
 */
// Render UI
const Button = props => {
  const {
    disabled,
    children,
    externalLink,
    label
  } = props,
        rest = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    variant
  } = rest;

  const cls = _children.ButtonDisabledVariantStyleFactory.create(disabled, variant);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({
    sx: (0, _extends2.default)({}, cls.getSxStyle()),
    disabled: disabled
  }, rest, {
    href: externalLink || '',
    children: label != null ? label : children
  }));
};

var _default = Button;
exports.default = _default;