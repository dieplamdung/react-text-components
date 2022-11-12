import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["component", "value"];
import React, { isValidElement } from 'react';
import Box from '@mui/material/Box';
import { jsx as _jsx } from "react/jsx-runtime";

const HtmlRenderer = props => {
  var _every, _ref;

  const {
    component,
    value
  } = props,
        rest = _objectWithoutPropertiesLoose(props, _excluded);

  const isElement = /*#__PURE__*/isValidElement(value) || (value == null ? void 0 : (_every = (_ref = value).every) == null ? void 0 : _every.call(_ref, item => /*#__PURE__*/isValidElement(item)));
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