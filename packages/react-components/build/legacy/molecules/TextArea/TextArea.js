import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import MuiTextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { useTheme } from '@mui/styles';
import omit from 'lodash/omit'; // Types

import { useMediaQuery } from '@mui/material';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var TextArea = /*#__PURE__*/forwardRef(function (props, ref) {
  var _extends2;

  var _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'placeholder' : _props$placeholder,
      _props$sx = props.sx,
      styleFromProps = _props$sx === void 0 ? {} : _props$sx,
      _props$dataName = props.dataName,
      dataName = _props$dataName === void 0 ? function () {} : _props$dataName,
      limitText = props.limitText,
      _props$width = props.width,
      width = _props$width === void 0 ? 271 : _props$width,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      helperText = props.helperText,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$onChange = props.onChange,
      _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$register = props.register,
      register = _props$register === void 0 ? function () {} : _props$register,
      _props$name = props.name,
      name = _props$name === void 0 ? '' : _props$name,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      _props$onFocus = props.onFocus,
      _onFocus = _props$onFocus === void 0 ? function () {} : _props$onFocus;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      dataTextArea = _useState4[0],
      setDataTextArea = _useState4[1];

  var _useState5 = useState(placeholder),
      _useState6 = _slicedToArray(_useState5, 2),
      labelText = _useState6[0],
      setLabelText = _useState6[1];

  var _useState7 = useState(error),
      _useState8 = _slicedToArray(_useState7, 2),
      errorTextField = _useState8[0],
      setErrorTextField = _useState8[1];

  var _useState9 = useState(disabled),
      _useState10 = _slicedToArray(_useState9, 2),
      selectDisabled = _useState10[0],
      setSelectDisabled = _useState10[1];

  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('md'));
  /**
   * Handle change
   */

  var handleChange = function handleChange(event) {
    setCount(event.target.value.length);
    dataName(event);
    setDataTextArea(event.target.value);
  };

  var handleChangeTextLabelFocus = function handleChangeTextLabelFocus() {
    setLabelText(label);
  };

  var handleChangeTextLabelBlur = function handleChangeTextLabelBlur() {
    if (dataTextArea) {
      setLabelText(label);
    } else {
      setLabelText(label);
    }
  };
  /**
   *
   * Set color msg err
   */


  var handleChangeColorNumberCount = function handleChangeColorNumberCount() {
    if (disabled) {
      return colors.neutral.neutral5;
    }

    if (error) {
      return colors.otherColor.silver;
    }

    if (count > 0) {
      return colors.primary.bandaiNamcoBlack;
    }

    return colors.otherColor.silver;
  };
  /**
  * Change status
  */


  useEffect(function () {
    setErrorTextField(error);
    setSelectDisabled(disabled);
  }, [error, disabled]);
  useImperativeHandle(ref, function () {
    return {
      handleChange: function handleChange(data) {
        setCount(data.length);
        setDataTextArea(data);
      }
    };
  });
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      maxWidth: width,
      '& .MuiFormHelperText-root': {
        marginLeft: ' 32px',
        color: colors.accent.accentRed[2]
      },
      '& .MuiInputLabel-root': {
        transform: 'translate(32px,16px) scale(1)',
        fontSize: '14px',
        color: colors.otherColor.silver,
        '&.Mui-error': {
          color: colors.otherColor.silver
        },
        '&.Mui-focused': {
          transform: 'translate(32px,10px) scale(1)',
          fontWeight: '600',
          color: colors.neutral.neutral2,
          fontSize: '12px'
        },
        '&.Mui-disabled': {
          color: colors.neutral.neutral5
        }
      },
      '& .MuiFormLabel-filled': {
        transform: 'translate(32px,10px) scale(1)',
        fontSize: '12px',
        fontWeight: '600',
        color: colors.neutral.neutral2
      },
      '& legend': {
        display: 'none'
      }
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        position: 'relative'
      },
      children: [/*#__PURE__*/_jsx(MuiTextField, _extends({
        onChange: function onChange(e) {
          handleChange(e);

          _onChange(e);
        },
        label: labelText,
        error: errorTextField,
        inputProps: {
          maxLength: limitText,
          classes: {
            notchedOutline: {
              borderColor: 'red !important',
              borderWidth: '1px'
            }
          }
        },
        disabled: selectDisabled,
        ref: ref,
        rows: !isMobile ? 8 : 4,
        onFocus: function onFocus(e) {
          handleChangeTextLabelFocus();

          _onFocus(e);
        },
        onBlur: function onBlur() {
          return handleChangeTextLabelBlur();
        }
      }, register(name, {
        required: required
      }), {
        multiline: true,
        sx: _extends({}, styleFromProps, (_extends2 = {
          width: '100%',
          maxWidth: width
        }, _defineProperty(_extends2, "& fieldset", {
          borderRadius: 1,
          borderColor: colors.neutral.neutral5
        }), _defineProperty(_extends2, "& label", {
          maxWidth: "calc(100% - 60px)"
        }), _defineProperty(_extends2, '& textarea', {
          fontSize: {
            xs: "16px",
            md: '14px'
          },
          color: colors.primary.bandaiNamcoBlack
        }), _defineProperty(_extends2, '.MuiOutlinedInput-root', {
          '&.Mui-disabled': {
            '& textarea': {
              WebkitTextFillColor: colors.neutral.neutral5
            }
          },
          '&.Mui-error': {
            "& > fieldset": {
              color: colors.otherColor.silver,
              backgroundColor: 'rgba(255, 88, 88, 0.05)'
            },
            '&:hover fieldset': {
              borderColor: colors.primary.bandaiNamcoRed,
              borderWidth: '0.5px'
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary.bandaiNamcoRed,
              borderWidth: '0.5px'
            }
          },
          "&.Mui-focused": {
            "& > fieldset": {
              borderColor: colors.neutral.neutral2,
              borderWidth: '0.5px'
            }
          },
          maxHeight: '100%',
          height: {
            xs: '160px',
            md: '250px'
          },
          padding: '20px 32px 34px'
        }), _extends2))
      }, omit(props, ['icon', 'iconPosEnd', 'sx', 'success', 'register', 'dataName', 'limitText', 'helperText']))), /*#__PURE__*/_jsx(Box, {
        sx: {
          position: 'absolute',
          right: '32px',
          bottom: '18px'
        },
        children: /*#__PURE__*/_jsxs(Typography, {
          variant: "p8",
          color: colors.otherColor.silver,
          sx: {
            fontSize: '12px',
            color: handleChangeColorNumberCount()
          },
          children: [error ? '0' : count, "/", limitText]
        })
      })]
    }), error && /*#__PURE__*/_jsx(FormHelperText, {
      children: helperText
    })]
  });
});
export default TextArea;