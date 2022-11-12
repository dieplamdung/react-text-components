import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "children", "externalLink", "label"];

/** *
 * BUTTON
 *  >> types
 *  >> children
 *    >> text
 */
// import modules
import React from 'react';
import MuiButton from '@mui/material/Button'; // import children

import { ButtonDisabledVariantStyleFactory } from "./children"; // types

import { jsx as _jsx } from "react/jsx-runtime";

/**
 * @param props this props extend from MuiButtonProps and addition variants
 * @returns Button component with children as text
 */
// Render UI
var Button = function Button(props) {
  var disabled = props.disabled,
      children = props.children,
      externalLink = props.externalLink,
      label = props.label,
      rest = _objectWithoutProperties(props, _excluded);

  var variant = rest.variant;
  var cls = ButtonDisabledVariantStyleFactory.create(disabled, variant);
  return /*#__PURE__*/_jsx(MuiButton, _extends({
    sx: _extends({}, cls.getSxStyle()),
    disabled: disabled
  }, rest, {
    href: externalLink || '',
    children: label != null ? label : children
  }));
};

export default Button;