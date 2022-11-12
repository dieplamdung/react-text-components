import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { forwardRef } from 'react';
import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import omit from 'lodash/omit';
import colors from "../../theme/colors"; // import { ITextField } from './types';

import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var TextField = /*#__PURE__*/forwardRef(function (props, ref) {
  var _icon$props, _MuiOutlinedInputRo, _ref;

  var icon = props.icon,
      iconPosEnd = props.iconPosEnd,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      success = props.success,
      width = props.width,
      _props$onChange = props.onChange,
      _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      InputLabelProps = props.InputLabelProps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _onFocus = props.onFocus,
      _onBlur = props.onBlur,
      defaultValue = props.defaultValue;

  var iconStyle = {
    fontSize: 12,
    marginLeft: '0px',
    marginRight: '0px',
    background: colors.primary.bandaiNamcoWhite
  };
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: colors.neutral.neutral5,
          borderWidth: '0.5px'
        },
        '&.Mui-focused fieldset': {
          borderColor: colors.neutral.neutral2,
          borderWidth: '0.5px'
        },
        "&.Mui-error": {
          color: colors.neutral.neutral4,
          "& > fieldset": {
            borderColor: colors.primary.bandaiNamcoRed,
            borderWidth: '0.5px'
          },
          '&:hover fieldset': {
            borderColor: colors.primary.bandaiNamcoRed,
            borderWidth: '0.5px'
          },
          '&.Mui-focused fieldset': {
            borderColor: colors.primary.bandaiNamcoRed,
            borderWidth: '0.5px'
          }
        }
      },
      maxWidth: '100%',
      '& .CustomMuiInputBase-iconPosEnd': {
        flexDirection: 'row-reverse',
        paddingRight: ' 26px',
        paddingLeft: '0px',
        '& svg': {
          fontSize: '18px'
        }
      },
      '& .MuiFormHelperText-root': {
        marginLeft: ' 32px',
        color: colors.accent.accentRed[2]
      },
      '& .MuiInputLabel-root': {
        transform: 'translate(32px,21px) scale(1)',
        color: colors.otherColor.silver,
        lineHeight: 'initial',
        '&.Mui-error': {
          color: colors.otherColor.silver
        },
        '&.Mui-focused': {
          transform: 'translate(32px,9px) scale(1)',
          fontWeight: '600',
          color: colors.neutral.neutral2,
          fontSize: '14px'
        },
        '&.Mui-disabled': {
          color: colors.neutral.neutral5
        }
      },
      '& .MuiFormLabel-filled': {
        transform: 'translate(32px,9px) scale(1)',
        fontSize: '14px',
        fontWeight: '600',
        color: colors.neutral.neutral2
      },
      '& legend': {
        display: 'none'
      }
    },
    className: "style-TextField",
    children: /*#__PURE__*/_jsx(MuiTextField, _extends({
      InputLabelProps: InputLabelProps,
      onChange: function onChange(e) {
        return _onChange(e);
      },
      error: error,
      inputRef: ref,
      defaultValue: defaultValue != null ? defaultValue : '',
      type: type,
      autoComplete: "off",
      InputProps: {
        className: "".concat(success && 'Mui-success', " ").concat(iconPosEnd && 'CustomMuiInputBase-iconPosEnd'),
        startAdornment: /*#__PURE__*/_jsxs(InputAdornment, {
          position: iconPosEnd ? 'end' : 'start',
          onFocus: function onFocus(e) {
            return _onFocus == null ? void 0 : _onFocus(e);
          },
          onBlur: function onBlur(e) {
            return _onBlur == null ? void 0 : _onBlur(e);
          },
          children: [!disabled && !error && icon && success && /*#__PURE__*/React.cloneElement(icon, {
            sx: _extends({}, iconStyle, disabled ? {
              color: colors.neutral.neutral6
            } : {}, ((_icon$props = icon.props) == null ? void 0 : _icon$props.sx) || {})
          }), icon && /*#__PURE__*/React.cloneElement(icon, {})]
        })
      },
      sx: (_ref = {
        width: '100%',
        maxWidth: width,
        maxHeight: '60px'
      }, _defineProperty(_ref, "& fieldset", _defineProperty({
        borderRadius: '60px',
        height: '60px',
        top: '0px',
        border: "1px solid ".concat(colors.neutral.neutral5)
      }, "& legend", {
        display: 'none'
      })), _defineProperty(_ref, "& label", _defineProperty({
        maxWidth: "calc(100% - 60px)",
        fontSize: '14px'
      }, "&.Mui-focused", {
        display: 'block',
        color: colors.neutral.neutral2
      })), _defineProperty(_ref, ".MuiOutlinedInput-root", (_MuiOutlinedInputRo = {
        color: colors.neutral.neutral5,
        '&.Mui-success': {
          '& fieldset': {
            background: colors.accent.accentGreen[3],
            border: "1px solid ".concat(colors.accent.accentGreen[2])
          }
        },
        '&.Mui-error': {
          '& fieldset': {
            background: 'rgba(255, 88, 88, 0.05)'
          }
        },
        '&.Mui-disabled': {
          '& input': {
            WebkitTextFillColor: colors.neutral.neutral5
          }
        },
        '&.Mui-focused': {
          '& input': {
            padding: '28px 32px 7px 23px'
          }
        }
      }, _defineProperty(_MuiOutlinedInputRo, "&.Mui-success + p", {
        display: 'block',
        color: colors.accent.accentGreen[2],
        marginLeft: '32px'
      }), _defineProperty(_MuiOutlinedInputRo, ".MuiInputAdornment-root", _defineProperty({}, "svg", {
        color: 'transparent',
        zIndex: 1
      })), _defineProperty(_MuiOutlinedInputRo, "& input", {
        visibility: 'visible',
        color: colors.primary.bandaiNamcoBlack,
        transform: 'translate(10px, 0px)',
        padding: '28px 32px 7px 23px',
        zIndex: 1,
        position: 'relative'
      }), _MuiOutlinedInputRo)), _defineProperty(_ref, ".MuiFormHelperText-root", _defineProperty({
        display: 'none'
      }, "&.Mui-error", {
        display: 'block'
      })), _ref)
    }, omit(props, ['icon', 'iconPosEnd', 'sx', 'success', 'onChange', 'parent'])))
  });
});
export default TextField;