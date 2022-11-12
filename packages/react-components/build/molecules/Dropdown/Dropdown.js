import _extends from "@babel/runtime/helpers/esm/extends";
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
const Dropdown = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    title,
    data,
    defaultValue = '',
    disabled = false,
    error = false,
    helperText = 'Helper text',
    multiple,
    width = 270,
    register = () => {},
    required = false,
    onBlur = () => {},
    onChange = () => {},
    name = '',
    variant = 'outlined',
    handleClickItem = () => {},
    isScrollTop = false
  } = props;
  const [valueDropdown, setValueDropdown] = useState(multiple ? [] : defaultValue);
  const [selectDisabled, setSelectDisabled] = useState(disabled);
  const [selectError, setSelectError] = useState(error);
  const [open, setOpen] = useState(false);
  const refIsOpenSelect = useRef(false); // const refScrollTop = useRef<number>(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const refWrapperContent = useRef();
  const refTop = useRef();
  /**
  * Close Select
  */

  const handleClose = () => {
    setOpen(false);
  };
  /**
   * Open Select
   */


  const handleOpen = () => {
    setOpen(true);
  };
  /** *
   * Handle onChange Select
   */


  const handleChange = event => {
    if (multiple) {
      setValueDropdown(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);
    } else {
      setValueDropdown(event.target.value);
    }
  };
  /**
   * Change status
   */


  useEffect(() => {
    setSelectDisabled(disabled);
    setSelectError(error);
  }, [disabled, defaultValue, error]);
  /**
   * Handle click selected item doesn't close menu
   */

  useEffect(() => {
    const handleClickKeepOpenMenuSelect = e => {
      data == null ? void 0 : data.map((_item, idx) => {
        const els = document.getElementById(`itemMenu${idx}`);

        if (els && els.contains(e.target)) {
          // handleOpen()
          handleClose();
        }

        return true;
      });
    };

    window.addEventListener('click', handleClickKeepOpenMenuSelect);
    return () => window.removeEventListener("click", handleClickKeepOpenMenuSelect);
  }, [data]);
  /**
   * Handle remove item selected and update again
   */

  const handleRemoveItemSelected = val => {
    const arrData = [...valueDropdown];
    const idx = arrData.findIndex(item => item === val);

    if (idx > -1) {
      arrData.splice(idx, 1);
      setValueDropdown(arrData);
    }
  };

  useImperativeHandle(ref, () => ({
    handleResetData() {
      setValueDropdown('');
    },

    handleSetValueData() {
      setValueDropdown(defaultValue);
    },

    getValueDropDown() {
      return valueDropdown;
    }

  }));
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isScrollTop) {
        const content = refWrapperContent.current;
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

        window.addEventListener("click", ev => {
          if (!content.contains(ev.target) && ev) {
            setOpen(false);
          }
        });
      }
    }

    return () => {
      window.removeEventListener("click", () => {});
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
      onClick: () => disabled ? setOpen(false) : setOpen(!open),
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
        required
      }), {
        onChange: e => {
          handleChange(e);
          onChange(e);
        },
        onClose: () => {
          onBlur();
          handleClose();
          refIsOpenSelect.current = false;
        },
        className: valueDropdown ? 'dataFilled' : '',
        ref: ref,
        renderValue: multiple ? selected => /*#__PURE__*/_jsx(Box, {
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
          children: selected.map(value => /*#__PURE__*/_jsx(Chip, {
            label: value,
            className: "chip",
            deleteIcon: /*#__PURE__*/_jsx(IconClose, {
              htmlColor: disabled ? colors.neutral.neutral5 : colors.primary.bandaiNamcoBlack
            }),
            onDelete: () => {
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
          }, value))
        }) : p => p,
        IconComponent: () => /*#__PURE__*/_jsx(IconArrowDown, {
          onClick: () => handleOpen(),
          htmlColor: selectDisabled ? colors.neutral.neutral5 : ''
        }),
        children: data && data.map((item, idx) => /*#__PURE__*/_jsx(MenuItem, {
          id: `itemMenu${idx}`,
          value: item.value,
          onClick: () => handleClickItem == null ? void 0 : handleClickItem(item.value),
          children: item.label
        }, item.label))
      })), error && /*#__PURE__*/_jsx(FormHelperText, {
        children: helperText
      })]
    })
  });
});
export default Dropdown;