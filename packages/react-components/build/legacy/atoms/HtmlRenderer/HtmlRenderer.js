import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["component", "value"];
import React, { isValidElement } from 'react';
import Box from '@mui/material/Box';
import { jsx as _jsx } from "react/jsx-runtime";

var HtmlRenderer = function HtmlRenderer(props) {
  var _every, _ref;

  var component = props.component,
      value = props.value,
      rest = _objectWithoutProperties(props, _excluded);

  var isElement = /*#__PURE__*/isValidElement(value) || (value == null ? void 0 : (_every = (_ref = value).every) == null ? void 0 : _every.call(_ref, function (item) {
    return /*#__PURE__*/isValidElement(item);
  }));
  return /*#__PURE__*/_jsx(Box, _extends({
    component: component
  }, rest, {
    children: isElement ? value : /*#__PURE__*/_jsx(Box, {
      dangerouslySetInnerHTML: {
        __html: value
      }
    })
  }));
};

export default HtmlRenderer;