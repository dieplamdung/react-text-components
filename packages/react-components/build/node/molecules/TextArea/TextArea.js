"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _FormHelperText = _interopRequireDefault(require("@mui/material/FormHelperText"));

var _styles = require("@mui/styles");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Types
const TextArea = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    error = false,
    placeholder = 'placeholder',
    sx: styleFromProps = {},
    dataName = () => {},
    limitText,
    width = 271,
    label = '',
    helperText,
    disabled = false,
    onChange = () => {},
    register = () => {},
    name = '',
    required = false,
    onFocus = () => {}
  } = props;
  const [count, setCount] = (0, _react.useState)(0);
  const [dataTextArea, setDataTextArea] = (0, _react.useState)('');
  const [labelText, setLabelText] = (0, _react.useState)(placeholder);
  const [errorTextField, setErrorTextField] = (0, _react.useState)(error);
  const [selectDisabled, setSelectDisabled] = (0, _react.useState)(disabled);
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  /**
   * Handle change
   */

  const handleChange = event => {
    setCount(event.target.value.length);
    dataName(event);
    setDataTextArea(event.target.value);
  };

  const handleChangeTextLabelFocus = () => {
    setLabelText(label);
  };

  const handleChangeTextLabelBlur = () => {
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


  const handleChangeColorNumberCount = () => {
    if (disabled) {
      return _colors.default.neutral.neutral5;
    }

    if (error) {
      return _colors.default.otherColor.silver;
    }

    if (count > 0) {
      return _colors.default.primary.bandaiNamcoBlack;
    }

    return _colors.default.otherColor.silver;
  };
  /**
  * Change status
  */


  (0, _react.useEffect)(() => {
    setErrorTextField(error);
    setSelectDisabled(disabled);
  }, [error, disabled]);
  (0, _react.useImperativeHandle)(ref, () => ({
    handleChange(data) {
      setCount(data.length);
      setDataTextArea(data);
    }

  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      maxWidth: width,
      '& .MuiFormHelperText-root': {
        marginLeft: ' 32px',
        color: _colors.default.accent.accentRed[2]
      },
      '& .MuiInputLabel-root': {
        transform: 'translate(32px,16px) scale(1)',
        fontSize: '14px',
        color: _colors.default.otherColor.silver,
        '&.Mui-error': {
          color: _colors.default.otherColor.silver
        },
        '&.Mui-focused': {
          transform: 'translate(32px,10px) scale(1)',
          fontWeight: '600',
          color: _colors.default.neutral.neutral2,
          fontSize: '12px'
        },
        '&.Mui-disabled': {
          color: _colors.default.neutral.neutral5
        }
      },
      '& .MuiFormLabel-filled': {
        transform: 'translate(32px,10px) scale(1)',
        fontSize: '12px',
        fontWeight: '600',
        color: _colors.default.neutral.neutral2
      },
      '& legend': {
        display: 'none'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        position: 'relative'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, (0, _extends2.default)({
        onChange: e => {
          handleChange(e);
          onChange(e);
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
        onFocus: e => {
          handleChangeTextLabelFocus();
          onFocus(e);
        },
        onBlur: () => handleChangeTextLabelBlur()
      }, register(name, {
        required
      }), {
        multiline: true,
        sx: (0, _extends2.default)({}, styleFromProps, {
          width: '100%',
          maxWidth: width,
          [`& fieldset`]: {
            borderRadius: 1,
            borderColor: _colors.default.neutral.neutral5
          },
          "& label": {
            maxWidth: "calc(100% - 60px)"
          },
          '& textarea': {
            fontSize: {
              xs: "16px",
              md: '14px'
            },
            color: _colors.default.primary.bandaiNamcoBlack
          },
          '.MuiOutlinedInput-root': {
            '&.Mui-disabled': {
              '& textarea': {
                WebkitTextFillColor: _colors.default.neutral.neutral5
              }
            },
            '&.Mui-error': {
              "& > fieldset": {
                color: _colors.default.otherColor.silver,
                backgroundColor: 'rgba(255, 88, 88, 0.05)'
              },
              '&:hover fieldset': {
                borderColor: _colors.default.primary.bandaiNamcoRed,
                borderWidth: '0.5px'
              },
              '&.Mui-focused fieldset': {
                borderColor: _colors.default.primary.bandaiNamcoRed,
                borderWidth: '0.5px'
              }
            },
            "&.Mui-focused": {
              "& > fieldset": {
                borderColor: _colors.default.neutral.neutral2,
                borderWidth: '0.5px'
              }
            },
            maxHeight: '100%',
            height: {
              xs: '160px',
              md: '250px'
            },
            padding: '20px 32px 34px'
          }
        })
      }, (0, _omit.default)(props, ['icon', 'iconPosEnd', 'sx', 'success', 'register', 'dataName', 'limitText', 'helperText']))), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          position: 'absolute',
          right: '32px',
          bottom: '18px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
          variant: "p8",
          color: _colors.default.otherColor.silver,
          sx: {
            fontSize: '12px',
            color: handleChangeColorNumberCount()
          },
          children: [error ? '0' : count, "/", limitText]
        })
      })]
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
      children: helperText
    })]
  });
});
var _default = TextArea;
exports.default = _default;