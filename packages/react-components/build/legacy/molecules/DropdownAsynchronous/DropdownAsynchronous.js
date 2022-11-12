import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _CircularProgress, _IconArrowDown, _IconArrowDown2;

// import modules
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box'; // import colors

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import { IconArrowDown } from "../../atoms/Icon";
import { Popper, useMediaQuery, useTheme } from '@mui/material';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
var DropdownAsynchronous = function DropdownAsynchronous(_ref) {
  var title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 470 : _ref$width,
      data = _ref.data,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      resetInput = _ref.resetInput,
      _ref$register = _ref.register,
      register = _ref$register === void 0 ? function () {} : _ref$register,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "" : _ref$name,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
      _ref$onChange = _ref.onChange,
      _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$helperText = _ref.helperText,
      helperText = _ref$helperText === void 0 ? "" : _ref$helperText,
      _ref$isMin = _ref.isMin,
      isMin = _ref$isMin === void 0 ? false : _ref$isMin,
      _ref$isShowClose = _ref.isShowClose,
      isShowClose = _ref$isShowClose === void 0 ? false : _ref$isShowClose,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? undefined : _ref$defaultValue,
      _ref$isCountryCode = _ref.isCountryCode,
      isCountryCode = _ref$isCountryCode === void 0 ? false : _ref$isCountryCode,
      _ref$onChangeCountry = _ref.onChangeCountry,
      onChangeCountry = _ref$onChangeCountry === void 0 ? function () {} : _ref$onChangeCountry,
      _ref$countryDefault = _ref.countryDefault,
      countryDefault = _ref$countryDefault === void 0 ? "" : _ref$countryDefault,
      _ref$inModal = _ref.inModal,
      inModal = _ref$inModal === void 0 ? false : _ref$inModal;

  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      options = _useState4[0],
      setOptions = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      valueSelect = _useState6[0],
      setValueSelect = _useState6[1];

  var _useState7 = useState(""),
      _useState8 = _slicedToArray(_useState7, 2),
      countrySelect = _useState8[0],
      setCountrySelect = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  var timeout = useRef();
  var refInput = useRef();
  var refValueSelect = useRef(defaultValue);
  var refCountryDefault = useRef(countryDefault);
  var refWrapperContent = useRef();
  var refTop = useRef(0);
  useEffect(function () {
    if (typeof window !== "undefined" && !inModal) {
      var topScroll = window.scrollY;

      if (!open) {
        document.body.classList.remove("disable-scroll");
        window.scrollTo({
          top: refTop.current
        });
      } else {
        var wrapper = refWrapperContent.current;
        var positionYop = 0;

        if (wrapper) {
          var _wrapper$getBoundingC = wrapper.getBoundingClientRect(),
              top = _wrapper$getBoundingC.top;

          positionYop = top - 94;
        }

        document.body.classList.add("disable-scroll");
        document.body.style.top = "-".concat(topScroll + (isMobile ? positionYop : 0), "px");
        refTop.current = topScroll + (isMobile ? positionYop : 0);
      }
    }
  }, [open, isMobile, inModal]);
  useEffect(function () {
    if (!open) {
      setOptions([]);
    } else {
      setOptions(data);
    }
  }, [open, data]);
  useEffect(function () {
    setLoading(false);
    setError(false);
    setValueSelect(defaultValue);
  }, [data, defaultValue]);
  /**
   *
   */

  useLayoutEffect(function () {
    setError(false);

    if (typeof window !== "undefined") {
      var close = refInput.current.getElementsByClassName("MuiAutocomplete-clearIndicator")[0];

      if (close) {
        close.click();
        setOpen(false);
        var input = refInput.current.getElementsByTagName("input")[0];

        if (input) {
          input.blur();
        }
      }
    }
  }, [resetInput]);

  var handleBlur = function handleBlur() {
    if (!valueSelect && required) {
      setError(true);
    } else {
      setError(false);
    }

    ;

    if (isMin) {
      if (!valueSelect) {
        setValueSelect(refValueSelect.current);
        _onChange == null ? void 0 : _onChange(refValueSelect.current);
        onChangeCountry == null ? void 0 : onChangeCountry(refCountryDefault == null ? void 0 : refCountryDefault.current);
        return;
      }

      refValueSelect.current = valueSelect;
      refCountryDefault.current = countrySelect == null ? void 0 : countrySelect.country;
    }
  };

  var handelOnChange = function handelOnChange() {
    if (!loading) {
      setLoading(true);
    }

    if (timeout.current) {
      window.clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(function () {
      timeout.current = undefined;
      setLoading(false);
    }, 300);
  };

  var filterOptions = function filterOptions(ops, state) {
    var newOptions = [];
    ops.forEach(function (option) {
      var _option$label, _state$inputValue, _option$country, _state$inputValue2;

      if (option != null && (_option$label = option.label) != null && _option$label.toLowerCase().includes(state == null ? void 0 : (_state$inputValue = state.inputValue) == null ? void 0 : _state$inputValue.toLowerCase()) || isCountryCode && option != null && (_option$country = option.country) != null && _option$country.toLowerCase().includes(state == null ? void 0 : (_state$inputValue2 = state.inputValue) == null ? void 0 : _state$inputValue2.toLowerCase())) {
        newOptions.push(option);
      }
    });
    return newOptions;
  };

  var PopperMy = function PopperMy(props) {
    return isCountryCode ? /*#__PURE__*/_jsxs(Box, {
      sx: {
        position: "fixed !important",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100vh",
        zIndex: '3'
      },
      children: [/*#__PURE__*/_jsx(Popper, _extends({}, props, {
        style: {
          maxWidth: "fit-content",
          minWidth: "290px",
          pointerEvents: "auto"
        },
        placement: "bottom-start",
        keepMounted: true
      })), " "]
    }) : /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "fixed !important",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100vh",
        zIndex: '3'
      },
      children: /*#__PURE__*/_jsx(Popper, _extends({}, props, {
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

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      width: width,
      flexDirection: "column",
      pointerEvents: "auto"
    },
    ref: refWrapperContent,
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        maxWidth: width,
        height: "60px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        pointerEvents: "auto"
      },
      children: [/*#__PURE__*/_jsx(Autocomplete, _extends({
        open: open,
        onOpen: function onOpen() {
          setOpen(true);
          document.body.style.overflow = "hidden";
        },
        onClose: function onClose() {
          setOpen(false);
          onBlur == null ? void 0 : onBlur();
          document.body.style.overflow = "auto";
        }
      }, register(name, {
        required: required
      }), {
        value: valueSelect,
        options: options,
        loading: loading,
        onBlur: handleBlur,
        filterOptions: filterOptions,
        onChange: function onChange(event, value) {
          setValueSelect((value == null ? void 0 : value.label) || "");
          _onChange == null ? void 0 : _onChange((value == null ? void 0 : value.label) || "");
          setCountrySelect(value);
          onChangeCountry == null ? void 0 : onChangeCountry(value == null ? void 0 : value.country);
        },
        renderInput: function renderInput(params) {
          return /*#__PURE__*/_jsxs(React.Fragment, {
            children: [/*#__PURE__*/_jsx(Typography, {
              sx: {
                position: "absolute",
                top: "0",
                left: "0",
                transform: open || valueSelect ? "translate(32px,9px)" : "translate(32px,20px)",
                fontWeight: valueSelect ? "600" : "400",
                color: error ? colors.otherColor.silver : "".concat(valueSelect ? colors.neutral.neutral2 : colors.otherColor.silver, " "),
                fontSize: "14px",
                transition: "all 0.2s",
                pointerEvents: "none"
              },
              children: title
            }), /*#__PURE__*/_jsx(TextField, _extends({}, params, {
              onFocus: function onFocus() {
                setOpen(true);
                document.body.style.overflow = "hidden";
              },
              onChange: handelOnChange,
              InputProps: _extends({}, params.InputProps, {
                endAdornment: /*#__PURE__*/_jsxs(React.Fragment, {
                  children: [loading ? _CircularProgress || (_CircularProgress = /*#__PURE__*/_jsx(CircularProgress, {
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
                      borderColor: colors.neutral.neutral2,
                      borderWidth: '0.5px'
                    }
                  },
                  "& fieldset": {
                    borderColor: "".concat(error && colors.accent.accentRed[2], " !important"),
                    background: "".concat(error ? "rgba(255, 88, 88, 0.05)" : "none"),
                    "& hover": {
                      borderColor: "".concat(colors.accent.accentRed[2], " !important")
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
          });
        },
        disablePortal: true,
        PopperComponent: PopperMy,
        renderOption: function renderOption(prs, option) {
          return /*#__PURE__*/_jsx("li", _extends({}, prs, {
            style: {
              background: isCountryCode ? "".concat(JSON.stringify(countrySelect) === JSON.stringify(option) ? "rgb(221 221 221 / 80%)" : "") : "".concat((option == null ? void 0 : option.label) === valueSelect ? "rgb(221 221 221 / 80%)" : ""),
              pointerEvents: "auto"
            },
            children: /*#__PURE__*/_jsxs(Box, {
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
              children: [isCountryCode && /*#__PURE__*/_jsx("span", {
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
              }), /*#__PURE__*/_jsx("span", {
                style: {
                  fontWeight: 400,
                  whiteSpace: "nowrap"
                },
                children: option == null ? void 0 : option.value
              })]
            })
          }));
        },
        sx: {
          maxWidth: width,
          height: "60px",
          width: "100%",
          pointerEvents: "auto",
          "&.Mui-focused": {
            '& p': {
              fontWeight: '600',
              color: colors.neutral.neutral2
            }
          },
          "& p": {
            maxWidth: "calc(100% - 80px)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: 'ellipsis'
          }
        }
      })), /*#__PURE__*/_jsx(Box, {
        sx: {
          position: "absolute",
          right: "31px",
          pointerEvents: "none"
        },
        className: "icon-dropdown",
        children: isShowClose ? !loading && (_IconArrowDown || (_IconArrowDown = /*#__PURE__*/_jsx(IconArrowDown, {}))) : _IconArrowDown2 || (_IconArrowDown2 = /*#__PURE__*/_jsx(IconArrowDown, {}))
      })]
    }), error && /*#__PURE__*/_jsx(Typography, {
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

export default DropdownAsynchronous;