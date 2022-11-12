"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { ITextField } from './types';
const TextField = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  var _icon$props;

  const {
    icon,
    iconPosEnd,
    error = false,
    disabled = false,
    success,
    width,
    onChange = () => {},
    InputLabelProps,
    type = 'text',
    onFocus,
    onBlur,
    defaultValue
  } = props;
  const iconStyle = {
    fontSize: 12,
    marginLeft: '0px',
    marginRight: '0px',
    background: _colors.default.primary.bandaiNamcoWhite
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    sx: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: _colors.default.neutral.neutral5,
          borderWidth: '0.5px'
        },
        '&.Mui-focused fieldset': {
          borderColor: _colors.default.neutral.neutral2,
          borderWidth: '0.5px'
        },
        "&.Mui-error": {
          color: _colors.default.neutral.neutral4,
          "& > fieldset": {
            borderColor: _colors.default.primary.bandaiNamcoRed,
            borderWidth: '0.5px'
          },
          '&:hover fieldset': {
            borderColor: _colors.default.primary.bandaiNamcoRed,
            borderWidth: '0.5px'
          },
          '&.Mui-focused fieldset': {
            borderColor: _colors.default.primary.bandaiNamcoRed,
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
        color: _colors.default.accent.accentRed[2]
      },
      '& .MuiInputLabel-root': {
        transform: 'translate(32px,21px) scale(1)',
        color: _colors.default.otherColor.silver,
        lineHeight: 'initial',
        '&.Mui-error': {
          color: _colors.default.otherColor.silver
        },
        '&.Mui-focused': {
          transform: 'translate(32px,9px) scale(1)',
          fontWeight: '600',
          color: _colors.default.neutral.neutral2,
          fontSize: '14px'
        },
        '&.Mui-disabled': {
          color: _colors.default.neutral.neutral5
        }
      },
      '& .MuiFormLabel-filled': {
        transform: 'translate(32px,9px) scale(1)',
        fontSize: '14px',
        fontWeight: '600',
        color: _colors.default.neutral.neutral2
      },
      '& legend': {
        display: 'none'
      }
    },
    className: "style-TextField",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, (0, _extends2.default)({
      InputLabelProps: InputLabelProps,
      onChange: e => onChange(e),
      error: error,
      inputRef: ref,
      defaultValue: defaultValue != null ? defaultValue : '',
      type: type,
      autoComplete: "off",
      InputProps: {
        className: `${success && 'Mui-success'} ${iconPosEnd && 'CustomMuiInputBase-iconPosEnd'}`,
        startAdornment: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_InputAdornment.default, {
          position: iconPosEnd ? 'end' : 'start',
          onFocus: e => onFocus == null ? void 0 : onFocus(e),
          onBlur: e => onBlur == null ? void 0 : onBlur(e),
          children: [!disabled && !error && icon && success && /*#__PURE__*/_react.default.cloneElement(icon, {
            sx: (0, _extends2.default)({}, iconStyle, disabled ? {
              color: _colors.default.neutral.neutral6
            } : {}, ((_icon$props = icon.props) == null ? void 0 : _icon$props.sx) || {})
          }), icon && /*#__PURE__*/_react.default.cloneElement(icon, {})]
        })
      },
      sx: {
        width: '100%',
        maxWidth: width,
        maxHeight: '60px',
        [`& fieldset`]: {
          borderRadius: '60px',
          height: '60px',
          top: '0px',
          border: `1px solid ${_colors.default.neutral.neutral5}`,
          [`& legend`]: {
            display: 'none'
          }
        },
        [`& label`]: {
          maxWidth: "calc(100% - 60px)",
          fontSize: '14px',
          [`&.Mui-focused`]: {
            display: 'block',
            color: _colors.default.neutral.neutral2
          }
        },
        [`.MuiOutlinedInput-root`]: {
          color: _colors.default.neutral.neutral5,
          '&.Mui-success': {
            '& fieldset': {
              background: _colors.default.accent.accentGreen[3],
              border: `1px solid ${_colors.default.accent.accentGreen[2]}`
            }
          },
          '&.Mui-error': {
            '& fieldset': {
              background: 'rgba(255, 88, 88, 0.05)'
            }
          },
          '&.Mui-disabled': {
            '& input': {
              WebkitTextFillColor: _colors.default.neutral.neutral5
            }
          },
          '&.Mui-focused': {
            '& input': {
              padding: '28px 32px 7px 23px'
            }
          },
          [`&.Mui-success + p`]: {
            display: 'block',
            color: _colors.default.accent.accentGreen[2],
            marginLeft: '32px'
          },
          [`.MuiInputAdornment-root`]: {
            [`svg`]: {
              color: 'transparent',
              zIndex: 1
            }
          },
          [`& input`]: {
            visibility: 'visible',
            color: _colors.default.primary.bandaiNamcoBlack,
            transform: 'translate(10px, 0px)',
            padding: '28px 32px 7px 23px',
            zIndex: 1,
            position: 'relative'
          }
        },
        [`.MuiFormHelperText-root`]: {
          display: 'none',
          [`&.Mui-error`]: {
            display: 'block'
          }
        }
      }
    }, (0, _omit.default)(props, ['icon', 'iconPosEnd', 'sx', 'success', 'onChange', 'parent'])))
  });
});
var _default = TextField;
exports.default = _default;