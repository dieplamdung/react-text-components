import _extends from "@babel/runtime/helpers/esm/extends";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [valueSelect, setValueSelect] = useState("");
  const [countrySelect, setCountrySelect] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const timeout = useRef();
  const refInput = useRef();
  const refValueSelect = useRef(defaultValue);
  const refCountryDefault = useRef(countryDefault);
  const refWrapperContent = useRef();
  const refTop = useRef(0);
  useEffect(() => {
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
  useEffect(() => {
    if (!open) {
      setOptions([]);
    } else {
      setOptions(data);
    }
  }, [open, data]);
  useEffect(() => {
    setLoading(false);
    setError(false);
    setValueSelect(defaultValue);
  }, [data, defaultValue]);
  /**
   *
   */

  useLayoutEffect(() => {
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
      width,
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
        renderInput: params => /*#__PURE__*/_jsxs(React.Fragment, {
          children: [/*#__PURE__*/_jsx(Typography, {
            sx: {
              position: "absolute",
              top: "0",
              left: "0",
              transform: open || valueSelect ? "translate(32px,9px)" : "translate(32px,20px)",
              fontWeight: valueSelect ? "600" : "400",
              color: error ? colors.otherColor.silver : `${valueSelect ? colors.neutral.neutral2 : colors.otherColor.silver} `,
              fontSize: "14px",
              transition: "all 0.2s",
              pointerEvents: "none"
            },
            children: title
          }), /*#__PURE__*/_jsx(TextField, _extends({}, params, {
            onFocus: () => {
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
                  borderColor: `${error && colors.accent.accentRed[2]} !important`,
                  background: `${error ? "rgba(255, 88, 88, 0.05)" : "none"}`,
                  "& hover": {
                    borderColor: `${colors.accent.accentRed[2]} !important`
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
        renderOption: (prs, option) => /*#__PURE__*/_jsx("li", _extends({}, prs, {
          style: {
            background: isCountryCode ? `${JSON.stringify(countrySelect) === JSON.stringify(option) ? "rgb(221 221 221 / 80%)" : ""}` : `${(option == null ? void 0 : option.label) === valueSelect ? "rgb(221 221 221 / 80%)" : ""}`,
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
        })),
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