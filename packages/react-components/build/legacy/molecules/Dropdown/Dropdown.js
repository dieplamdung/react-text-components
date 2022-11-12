import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import Modules
import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Chip from '@mui/material/Chip';
import { IconArrowDown, IconClose } from "../../atoms/Icon";
import { useTheme } from '@mui/styles';
import { useMediaQuery } from '@mui/material'; // import Styles

import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Dropdown = /*#__PURE__*/forwardRef(function (props, ref) {
  var title = props.title,
      data = props.data,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? '' : _props$defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$helperText = props.helperText,
      helperText = _props$helperText === void 0 ? 'Helper text' : _props$helperText,
      multiple = props.multiple,
      _props$width = props.width,
      width = _props$width === void 0 ? 270 : _props$width,
      _props$register = props.register,
      register = _props$register === void 0 ? function () {} : _props$register,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      _props$onBlur = props.onBlur,
      onBlur = _props$onBlur === void 0 ? function () {} : _props$onBlur,
      _props$onChange = props.onChange,
      _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$name = props.name,
      name = _props$name === void 0 ? '' : _props$name,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'outlined' : _props$variant,
      _props$handleClickIte = props.handleClickItem,
      handleClickItem = _props$handleClickIte === void 0 ? function () {} : _props$handleClickIte,
      _props$isScrollTop = props.isScrollTop,
      isScrollTop = _props$isScrollTop === void 0 ? false : _props$isScrollTop;

  var _useState = useState(multiple ? [] : defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      valueDropdown = _useState2[0],
      setValueDropdown = _useState2[1];

  var _useState3 = useState(disabled),
      _useState4 = _slicedToArray(_useState3, 2),
      selectDisabled = _useState4[0],
      setSelectDisabled = _useState4[1];

  var _useState5 = useState(error),
      _useState6 = _slicedToArray(_useState5, 2),
      selectError = _useState6[0],
      setSelectError = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      open = _useState8[0],
      setOpen = _useState8[1];

  var refIsOpenSelect = useRef(false); // const refScrollTop = useRef<number>(0);

  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  var refWrapperContent = useRef();
  var refTop = useRef();
  /**
  * Close Select
  */

  var handleClose = function handleClose() {
    setOpen(false);
  };
  /**
   * Open Select
   */


  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  /** *
   * Handle onChange Select
   */


  var handleChange = function handleChange(event) {
    if (multiple) {
      setValueDropdown(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);
    } else {
      setValueDropdown(event.target.value);
    }
  };
  /**
   * Change status
   */


  useEffect(function () {
    setSelectDisabled(disabled);
    setSelectError(error);
  }, [disabled, defaultValue, error]);
  /**
   * Handle click selected item doesn't close menu
   */

  useEffect(function () {
    var handleClickKeepOpenMenuSelect = function handleClickKeepOpenMenuSelect(e) {
      data == null ? void 0 : data.map(function (_item, idx) {
        var els = document.getElementById("itemMenu".concat(idx));

        if (els && els.contains(e.target)) {
          // handleOpen()
          handleClose();
        }

        return true;
      });
    };

    window.addEventListener('click', handleClickKeepOpenMenuSelect);
    return function () {
      return window.removeEventListener("click", handleClickKeepOpenMenuSelect);
    };
  }, [data]);
  /**
   * Handle remove item selected and update again
   */

  var handleRemoveItemSelected = function handleRemoveItemSelected(val) {
    var arrData = _toConsumableArray(valueDropdown);

    var idx = arrData.findIndex(function (item) {
      return item === val;
    });

    if (idx > -1) {
      arrData.splice(idx, 1);
      setValueDropdown(arrData);
    }
  };

  useImperativeHandle(ref, function () {
    return {
      handleResetData: function handleResetData() {
        setValueDropdown('');
      },
      handleSetValueData: function handleSetValueData() {
        setValueDropdown(defaultValue);
      },
      getValueDropDown: function getValueDropDown() {
        return valueDropdown;
      }
    };
  });
  useEffect(function () {
    if (typeof window !== "undefined") {
      if (isScrollTop) {
        var content = refWrapperContent.current;
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

        window.addEventListener("click", function (ev) {
          if (!content.contains(ev.target) && ev) {
            setOpen(false);
          }
        });
      }
    }

    return function () {
      window.removeEventListener("click", function () {});
    };
  }, [open, isMobile, isScrollTop]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      '& .MuiInputBase-colorPrimary': {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent'
        },
        '&:before': {
          display: 'none'
        },
        '&:after': {
          display: 'none'
        }
      },
      '&.MuiFilledInput-root.Mui-focused': {
        backgroundColor: 'transparent'
      },
      "& label": {
        maxWidth: "calc(100% - 80px)"
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: '60px',
        "&.Mui-focused": {
          "& > fieldset": {
            borderColor: colors.neutral.neutral2,
            borderWidth: '0.5px'
          }
        },
        '&.Mui-error': {
          background: 'rgba(255, 88, 88, 0.05)',
          color: colors.otherColor.silver,
          '& fieldset': {
            borderColor: colors.accent.accentRed[2],
            borderWidth: '0.5px' // color: colors.neutral.neutral4,

          }
        }
      },
      '& .MuiOutlinedInput-notchedOutline': {// borderColor: `${color} !important`
      },
      pointerEvents: "auto"
    },
    ref: refWrapperContent,
    children: /*#__PURE__*/_jsxs(FormControl, {
      disabled: selectDisabled,
      variant: variant,
      error: selectError,
      sx: {
        maxWidth: width,
        width: '100%',
        '& .MuiInputLabel-root': {
          transform: 'translate(32px,20px) scale(1)',
          color: colors.otherColor.silver,
          fontSize: '14px',
          lineHeight: '21px',
          fontWeight: 400,
          '&.MuiFormLabel-filled': {
            fontWeight: 600,
            color: colors.neutral.neutral2,
            transform: 'translate(32px,9px) scale(1)',
            display: multiple ? 'none' : 'block',
            '&.Mui-focused': {
              color: colors.neutral.neutral2
            }
          },
          '&.Mui-disabled': {
            WebkitTextFillColor: colors.neutral.neutral5,
            color: colors.neutral.neutral5
          },
          '&.Mui-error': {
            color: colors.otherColor.silver
          }
        },
        '& .MuiSelect-standard': {
          backgroundColor: 'transparent'
        },
        '& .dataFilled': {
          '& >div': {
            padding: multiple && valueDropdown.length > 0 ? '6px 32px 6px 8px' : '30px 32px 7px 32px',
            '&.MuiSelect-standard': {
              padding: multiple && valueDropdown.length > 0 ? '6px 32px 6px 8px' : '18.5px 32px 18.5px 32px'
            }
          }
        },
        '& legend': {
          display: 'none'
        },
        '& fieldset': {
          borderColor: colors.neutral.neutral5,
          top: 0
        },
        '& svg': {
          maxWidth: '10px',
          transform: 'translateX(-32px)'
        },
        '& .MuiFormHelperText-root': {
          marginLeft: ' 32px'
        },
        pointerEvents: "auto"
      },
      onClick: function onClick() {
        return disabled ? setOpen(false) : setOpen(!open);
      },
      children: [title && /*#__PURE__*/_jsx(InputLabel, {
        sx: {
          lineHeight: 'initial',
          '&.MuiInputLabel-root': {
            lineHeight: 'initial',
            '&.Mui-focused': {
              color: colors.otherColor.silver
            }
          }
        },
        children: title
      }), /*#__PURE__*/_jsx(Select, _extends({
        value: valueDropdown,
        label: title,
        open: open // onOpen={() => handleGetScrollTopBody()}
        ,
        multiple: multiple
      }, register(name, {
        required: required
      }), {
        onChange: function onChange(e) {
          handleChange(e);

          _onChange(e);
        },
        onClose: function onClose() {
          onBlur();
          handleClose();
          refIsOpenSelect.current = false;
        },
        className: valueDropdown ? 'dataFilled' : '',
        ref: ref,
        renderValue: multiple ? function (selected) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              gap: '4px',
              height: '48px',
              width: 'calc(100% - 15px)',
              overflow: 'auto',
              borderTopLeftRadius: '60px',
              borderBottomLeftRadius: '60px',
              '& svg.MuiChip-deleteIcon': {
                transform: 'translateX(0px)',
                margin: '0px',
                maxWidth: '14px'
              },
              pointerEvents: "auto"
            },
            children: selected.map(function (value) {
              return /*#__PURE__*/_jsx(Chip, {
                label: value,
                className: "chip",
                deleteIcon: /*#__PURE__*/_jsx(IconClose, {
                  htmlColor: disabled ? colors.neutral.neutral5 : colors.primary.bandaiNamcoBlack
                }),
                onDelete: function onDelete() {
                  handleClose();
                  handleRemoveItemSelected(disabled ? '' : value);
                },
                sx: {
                  justifyContent: 'center',
                  padding: '0 20px',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(0,0,0,0.23)',
                  height: ' 100%',
                  borderRadius: '60px',
                  '& span': {
                    color: colors.primary.bandaiNamcoBlack,
                    height: ' 100%',
                    display: 'flex',
                    alignItems: 'center'
                  },
                  pointerEvents: "auto"
                }
              }, value);
            })
          });
        } : function (p) {
          return p;
        },
        IconComponent: function IconComponent() {
          return /*#__PURE__*/_jsx(IconArrowDown, {
            onClick: function onClick() {
              return handleOpen();
            },
            htmlColor: selectDisabled ? colors.neutral.neutral5 : ''
          });
        },
        children: data && data.map(function (item, idx) {
          return /*#__PURE__*/_jsx(MenuItem, {
            id: "itemMenu".concat(idx),
            value: item.value,
            onClick: function onClick() {
              return handleClickItem == null ? void 0 : handleClickItem(item.value);
            },
            children: item.label
          }, item.label);
        })
      })), error && /*#__PURE__*/_jsx(FormHelperText, {
        children: helperText
      })]
    })
  });
});
export default Dropdown;