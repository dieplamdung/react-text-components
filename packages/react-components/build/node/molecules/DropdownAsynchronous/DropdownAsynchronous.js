"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _TextField = _interopRequireDefault(require("@mui/material/TextField"));

var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));

var _CircularProgress2 = _interopRequireDefault(require("@mui/material/CircularProgress"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Icon = require("../../atoms/Icon");

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

var _CircularProgress, _IconArrowDown, _IconArrowDown2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// define function
const DropdownAsynchronous = ({
  title,
  width = 470,
  data,
  required = false,
  resetInput,
  register = () => {},
  name = "",
  onBlur = () => {},
  onChange = () => {},
  helperText = "",
  isMin = false,
  isShowClose = false,
  defaultValue = undefined,
  isCountryCode = false,
  onChangeCountry = () => {},
  countryDefault = "",
  inModal = false
}) => {
  const theme = (0, _material.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const [open, setOpen] = (0, _react.useState)(false);
  const [options, setOptions] = (0, _react.useState)([]);
  const [valueSelect, setValueSelect] = (0, _react.useState)("");
  const [countrySelect, setCountrySelect] = (0, _react.useState)("");
  const [loading, setLoading] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)(false);
  const timeout = (0, _react.useRef)();
  const refInput = (0, _react.useRef)();
  const refValueSelect = (0, _react.useRef)(defaultValue);
  const refCountryDefault = (0, _react.useRef)(countryDefault);
  const refWrapperContent = (0, _react.useRef)();
  const refTop = (0, _react.useRef)(0);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined" && !inModal) {
      const topScroll = window.scrollY;

      if (!open) {
        document.body.classList.remove("disable-scroll");
        window.scrollTo({
          top: refTop.current
        });
      } else {
        const wrapper = refWrapperContent.current;
        let positionYop = 0;

        if (wrapper) {
          const {
            top
          } = wrapper.getBoundingClientRect();
          positionYop = top - 94;
        }

        document.body.classList.add("disable-scroll");
        document.body.style.top = `-${topScroll + (isMobile ? positionYop : 0)}px`;
        refTop.current = topScroll + (isMobile ? positionYop : 0);
      }
    }
  }, [open, isMobile, inModal]);
  (0, _react.useEffect)(() => {
    if (!open) {
      setOptions([]);
    } else {
      setOptions(data);
    }
  }, [open, data]);
  (0, _react.useEffect)(() => {
    setLoading(false);
    setError(false);
    setValueSelect(defaultValue);
  }, [data, defaultValue]);
  /**
   *
   */

  (0, _react.useLayoutEffect)(() => {
    setError(false);

    if (typeof window !== "undefined") {
      const close = refInput.current.getElementsByClassName("MuiAutocomplete-clearIndicator")[0];

      if (close) {
        close.click();
        setOpen(false);
        const input = refInput.current.getElementsByTagName("input")[0];

        if (input) {
          input.blur();
        }
      }
    }
  }, [resetInput]);

  const handleBlur = () => {
    if (!valueSelect && required) {
      setError(true);
    } else {
      setError(false);
    }

    ;

    if (isMin) {
      if (!valueSelect) {
        setValueSelect(refValueSelect.current);
        onChange == null ? void 0 : onChange(refValueSelect.current);
        onChangeCountry == null ? void 0 : onChangeCountry(refCountryDefault == null ? void 0 : refCountryDefault.current);
        return;
      }

      refValueSelect.current = valueSelect;
      refCountryDefault.current = countrySelect == null ? void 0 : countrySelect.country;
    }
  };

  const handelOnChange = () => {
    if (!loading) {
      setLoading(true);
    }

    if (timeout.current) {
      window.clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      timeout.current = undefined;
      setLoading(false);
    }, 300);
  };

  const filterOptions = (ops, state) => {
    const newOptions = [];
    ops.forEach(option => {
      var _option$label, _state$inputValue, _option$country, _state$inputValue2;

      if (option != null && (_option$label = option.label) != null && _option$label.toLowerCase().includes(state == null ? void 0 : (_state$inputValue = state.inputValue) == null ? void 0 : _state$inputValue.toLowerCase()) || isCountryCode && option != null && (_option$country = option.country) != null && _option$country.toLowerCase().includes(state == null ? void 0 : (_state$inputValue2 = state.inputValue) == null ? void 0 : _state$inputValue2.toLowerCase())) {
        newOptions.push(option);
      }
    });
    return newOptions;
  };

  const PopperMy = props => {
    return isCountryCode ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        position: "fixed !important",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100vh",
        zIndex: '3'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Popper, (0, _extends2.default)({}, props, {
        style: {
          maxWidth: "fit-content",
          minWidth: "290px",
          pointerEvents: "auto"
        },
        placement: "bottom-start",
        keepMounted: true
      })), " "]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        position: "fixed !important",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100vh",
        zIndex: '3'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Popper, (0, _extends2.default)({}, props, {
        sx: {
          pointerEvents: "auto"
        },
        popperOptions: {
          positionFixed: true
        },
        modifiers: {
          offset: {
            enabled: true,
            offset: '0, 30'
          }
        }
      }))
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: "flex",
      width,
      flexDirection: "column",
      pointerEvents: "auto"
    },
    ref: refWrapperContent,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        maxWidth: width,
        height: "60px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        pointerEvents: "auto"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Autocomplete.default, (0, _extends2.default)({
        open: open,
        onOpen: () => {
          setOpen(true);
          document.body.style.overflow = "hidden";
        },
        onClose: () => {
          setOpen(false);
          onBlur == null ? void 0 : onBlur();
          document.body.style.overflow = "auto";
        }
      }, register(name, {
        required
      }), {
        value: valueSelect,
        options: options,
        loading: loading,
        onBlur: handleBlur,
        filterOptions: filterOptions,
        onChange: (event, value) => {
          setValueSelect((value == null ? void 0 : value.label) || "");
          onChange == null ? void 0 : onChange((value == null ? void 0 : value.label) || "");
          setCountrySelect(value);
          onChangeCountry == null ? void 0 : onChangeCountry(value == null ? void 0 : value.country);
        },
        renderInput: params => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            sx: {
              position: "absolute",
              top: "0",
              left: "0",
              transform: open || valueSelect ? "translate(32px,9px)" : "translate(32px,20px)",
              fontWeight: valueSelect ? "600" : "400",
              color: error ? _colors.default.otherColor.silver : `${valueSelect ? _colors.default.neutral.neutral2 : _colors.default.otherColor.silver} `,
              fontSize: "14px",
              transition: "all 0.2s",
              pointerEvents: "none"
            },
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, (0, _extends2.default)({}, params, {
            onFocus: () => {
              setOpen(true);
              document.body.style.overflow = "hidden";
            },
            onChange: handelOnChange,
            InputProps: (0, _extends2.default)({}, params.InputProps, {
              endAdornment: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
                children: [loading ? _CircularProgress || (_CircularProgress = /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress2.default, {
                  color: "inherit",
                  size: 20
                })) : null, !isShowClose && !!valueSelect && params.InputProps.endAdornment]
              })
            }),
            ref: refInput,
            sx: {
              height: "100%",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                height: "100%",
                width: "100%",
                borderRadius: "60px",
                paddingTop: "0px !important",
                paddingLeft: "0px !important",
                paddingRight: isMin ? "30px !important" : "52px !important",
                cursor: "pointer",
                "&.Mui-focused": {
                  "& > fieldset": {
                    borderColor: _colors.default.neutral.neutral2,
                    borderWidth: '0.5px'
                  }
                },
                "& fieldset": {
                  borderColor: `${error && _colors.default.accent.accentRed[2]} !important`,
                  background: `${error ? "rgba(255, 88, 88, 0.05)" : "none"}`,
                  "& hover": {
                    borderColor: `${_colors.default.accent.accentRed[2]} !important`
                  }
                },
                "& input": {
                  padding: isMin ? "19px 18px 18px 32px !important" : "30px 4px 6px 32px !important",
                  cursor: "pointer"
                },
                "& .MuiAutocomplete-popupIndicator": {
                  display: "none"
                },
                "& .MuiAutocomplete-endAdornment": {
                  right: isMin ? "30px" : "44px",
                  display: loading ? "none" : "block",
                  background: "#fff"
                }
              }
            }
          }))]
        }),
        disablePortal: true,
        PopperComponent: PopperMy,
        renderOption: (prs, option) => /*#__PURE__*/(0, _jsxRuntime.jsx)("li", (0, _extends2.default)({}, prs, {
          style: {
            background: isCountryCode ? `${JSON.stringify(countrySelect) === JSON.stringify(option) ? "rgb(221 221 221 / 80%)" : ""}` : `${(option == null ? void 0 : option.label) === valueSelect ? "rgb(221 221 221 / 80%)" : ""}`,
            pointerEvents: "auto"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              fontSize: {
                xs: "14px",
                md: "16px"
              },
              pointerEvents: "auto"
            },
            children: [isCountryCode && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: {
                WebkitLineClamp: 1,
                wordBreak: "break-word",
                display: '-webkit-box',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                paddingRight: "12px"
              },
              children: option == null ? void 0 : option.country
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              style: {
                fontWeight: 400,
                whiteSpace: "nowrap"
              },
              children: option == null ? void 0 : option.value
            })]
          })
        })),
        sx: {
          maxWidth: width,
          height: "60px",
          width: "100%",
          pointerEvents: "auto",
          "&.Mui-focused": {
            '& p': {
              fontWeight: '600',
              color: _colors.default.neutral.neutral2
            }
          },
          "& p": {
            maxWidth: "calc(100% - 80px)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: 'ellipsis'
          }
        }
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          position: "absolute",
          right: "31px",
          pointerEvents: "none"
        },
        className: "icon-dropdown",
        children: isShowClose ? !loading && (_IconArrowDown || (_IconArrowDown = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconArrowDown, {}))) : _IconArrowDown2 || (_IconArrowDown2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconArrowDown, {}))
      })]
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      sx: {
        marginLeft: ' 32px',
        fontSize: "0.75rem",
        lineHeight: "1.66em",
        marginTop: "3px",
        color: "#e53935",
        textAlign: "left"
      },
      children: helperText || ""
    })]
  });
};

var _default = DropdownAsynchronous;
exports.default = _default;