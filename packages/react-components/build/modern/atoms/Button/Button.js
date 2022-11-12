import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["disabled", "children", "externalLink", "label"];

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
const Button = props => {
  const {
    disabled,
    children,
    externalLink,
    label
  } = props,
        rest = _objectWithoutPropertiesLoose(props, _excluded);

  const {
    variant
  } = rest;
  const cls = ButtonDisabledVariantStyleFactory.create(disabled, variant);
  return /*#__PURE__*/_jsx(MuiButton, _extends({
    sx: _extends({}, cls.getSxStyle()),
    disabled: disabled
  }, rest, {
    href: externalLink || '',
    children: label ?? children
  }));
};

export default Button;