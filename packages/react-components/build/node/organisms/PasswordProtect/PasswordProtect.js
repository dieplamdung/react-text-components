"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _TextField = _interopRequireDefault(require("../../molecules/TextField"));

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _g, _g2, _g3, _g4, _g5, _g6, _g7, _g8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PasswordProtect = props => {
  const {
    description,
    formPassword,
    handleCheckPassWord,
    stateError = 'asasa'
  } = props;
  const [error, setError] = (0, _react.useState)(false);
  const [errorText, setErrorText] = (0, _react.useState)("");
  const [isShowLoading, setIsShowLoading] = (0, _react.useState)(false);
  const [valueInput, setValueInput] = (0, _react.useState)("");
  const isFocus = (0, _react.useRef)(false);
  const refContent = (0, _react.useRef)();

  const handleShowLoading = () => {
    setIsShowLoading(true);
    setTimeout(() => {
      setIsShowLoading(false);
    }, 400);
  };

  const handleOnclickCheckPassWord = () => {
    setTimeout(() => {
      handleCheckPassWord == null ? void 0 : handleCheckPassWord(valueInput);
    }, 500);
  };

  (0, _react.useEffect)(() => {
    setError(!!stateError);
    setErrorText(formPassword.textInput.errorText);
  }, [stateError, formPassword]);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const content = refContent.current;
      window.addEventListener("keydown", e => {
        const key = (e == null ? void 0 : e.keyCode) || (e == null ? void 0 : e.which);

        if (!!isFocus.current && key === 13) {
          if (content) {
            const btn = content.querySelector(".btn-submit");

            if (btn) {
              btn.click();
            }
          }
        }
      });
    }

    ;
    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, [isFocus]);

  const IconLoadingSVG = propSvg => {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.SvgIcon, (0, _extends2.default)({}, propSvg, {
      width: "40",
      height: "40",
      viewBox: "0 0 100 100",
      fill: "none",
      sx: {
        width: {
          xs: '40px'
        },
        height: {
          xs: '40px'
        }
      },
      children: [_g || (_g = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(0 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.875s",
            repeatCount: "indefinite"
          })
        })
      })), _g2 || (_g2 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(45 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.75s",
            repeatCount: "indefinite"
          })
        })
      })), _g3 || (_g3 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(90 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.625s",
            repeatCount: "indefinite"
          })
        })
      })), _g4 || (_g4 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(135 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.5s",
            repeatCount: "indefinite"
          })
        })
      })), _g5 || (_g5 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(180 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.375s",
            repeatCount: "indefinite"
          })
        })
      })), _g6 || (_g6 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(225 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.25s",
            repeatCount: "indefinite"
          })
        })
      })), _g7 || (_g7 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(270 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.125s",
            repeatCount: "indefinite"
          })
        })
      })), _g8 || (_g8 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(315 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "0s",
            repeatCount: "indefinite"
          })
        })
      }))]
    }));
  };

  const handelBlurInput = () => {
    if (!valueInput) {
      setError(true);
      setErrorText(formPassword.textInput.isEmpty || "");
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      maxWidth: '740px',
      width: '100%'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p2",
      sx: {
        color: _colors.default.neutral.neutral2,
        "& div": {
          padding: "0px !important"
        },
        "& p": {
          padding: "0px !important"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
        component: "div",
        value: description
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p2",
        sx: {
          color: _colors.default.neutral.neutral2,
          fontSize: {
            xs: '16px',
            md: '18px'
          },
          lineHeight: {
            md: '26px',
            xs: '22px'
          },
          marginTop: {
            xs: '60px',
            md: '64px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
          component: "div",
          value: formPassword.title
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          marginTop: {
            xs: '24px',
            md: '32px'
          },
          maxWidth: '357px',
          width: '100%'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginRight: {
              xs: "0px",
              md: "8px"
            },
            marginBottom: {
              xs: "16px",
              md: "0px"
            },
            marginTop: {
              xs: '24px',
              md: '32px'
            },
            maxWidth: '357px',
            width: '100%',
            "& .style-TextField": {
              "& .MuiInputLabel-root.Mui-error": {
                color: _colors.default.neutral.neutral2
              }
            },
            "& div > div > div > input": {
              padding: "30px 32px 7px 0px !important"
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: _colors.default.neutral.neutral2,
                borderWidth: '1px !important'
              }
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: _colors.default.neutral.neutral1,
                borderWidth: '1px !important'
              }
            },
            '& input': {
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 1000px transparent inset !important'
              }
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
            label: formPassword.textInput.placeholder || "",
            error: !!error,
            type: "password",
            onChange: e => {
              setValueInput(e.target.value);
              setError(false);
            },
            onFocus: () => {
              isFocus.current = true;
            },
            onBlur: () => {
              isFocus.current = false;
              handelBlurInput();
            }
          }), !!error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            sx: {
              fontSize: "12px",
              lineHeight: "18px",
              marginLeft: "32px",
              marginTop: "4px"
            },
            color: _colors.default.primary.bandaiNamcoRed,
            children: errorText
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          width: {
            md: "271px",
            xs: "149px"
          },
          marginLeft: {
            xs: 'auto',
            md: '0px'
          },
          marginRight: 'auto',
          display: "flex",
          marginTop: '32px',
          "& button": {
            width: "100%",
            marginTop: {
              md: "7px",
              xs: "0px"
            }
          }
        },
        ref: refContent,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
          variant: "secondaryBlack",
          onClick: () => {
            handleShowLoading();
            handleOnclickCheckPassWord();
          },
          className: "btn-submit",
          sx: {
            display: "flex",
            justifyContent: "center",
            marginTop: '0px !important'
          },
          children: [!isShowLoading && formPassword.childrenBtn, valueInput && isShowLoading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              marginTop: '5px',
              '& svg': {
                width: '22px'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(IconLoadingSVG, {})
          })]
        })
      })]
    })]
  });
};

var _default = PasswordProtect;
exports.default = _default;