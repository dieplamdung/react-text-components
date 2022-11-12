"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));

var _Select = _interopRequireDefault(require("@mui/material/Select"));

var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));

var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));

var _FormHelperText = _interopRequireDefault(require("@mui/material/FormHelperText"));

var _Chip = _interopRequireDefault(require("@mui/material/Chip"));

var _Icon = require("../../atoms/Icon");

var _styles = require("@mui/styles");

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
const Dropdown = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
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
  const [valueDropdown, setValueDropdown] = (0, _react.useState)(multiple ? [] : defaultValue);
  const [selectDisabled, setSelectDisabled] = (0, _react.useState)(disabled);
  const [selectError, setSelectError] = (0, _react.useState)(error);
  const [open, setOpen] = (0, _react.useState)(false);
  const refIsOpenSelect = (0, _react.useRef)(false); // const refScrollTop = useRef<number>(0);

  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const refWrapperContent = (0, _react.useRef)();
  const refTop = (0, _react.useRef)();
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


  (0, _react.useEffect)(() => {
    setSelectDisabled(disabled);
    setSelectError(error);
  }, [disabled, defaultValue, error]);
  /**
   * Handle click selected item doesn't close menu
   */

  (0, _react.useEffect)(() => {
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

  (0, _react.useImperativeHandle)(ref, () => ({
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
  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
            borderColor: _colors.default.neutral.neutral2,
            borderWidth: '0.5px'
          }
        },
        '&.Mui-error': {
          background: 'rgba(255, 88, 88, 0.05)',
          color: _colors.default.otherColor.silver,
          '& fieldset': {
            borderColor: _colors.default.accent.accentRed[2],
            borderWidth: '0.5px' // color: colors.neutral.neutral4,

          }
        }
      },
      '& .MuiOutlinedInput-notchedOutline': {// borderColor: `${color} !important`
      },
      pointerEvents: "auto"
    },
    ref: refWrapperContent,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_FormControl.default, {
      disabled: selectDisabled,
      variant: variant,
      error: selectError,
      sx: {
        maxWidth: width,
        width: '100%',
        '& .MuiInputLabel-root': {
          transform: 'translate(32px,20px) scale(1)',
          color: _colors.default.otherColor.silver,
          fontSize: '14px',
          lineHeight: '21px',
          fontWeight: 400,
          '&.MuiFormLabel-filled': {
            fontWeight: 600,
            color: _colors.default.neutral.neutral2,
            transform: 'translate(32px,9px) scale(1)',
            display: multiple ? 'none' : 'block',
            '&.Mui-focused': {
              color: _colors.default.neutral.neutral2
            }
          },
          '&.Mui-disabled': {
            WebkitTextFillColor: _colors.default.neutral.neutral5,
            color: _colors.default.neutral.neutral5
          },
          '&.Mui-error': {
            color: _colors.default.otherColor.silver
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
          borderColor: _colors.default.neutral.neutral5,
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
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputLabel.default, {
        sx: {
          lineHeight: 'initial',
          '&.MuiInputLabel-root': {
            lineHeight: 'initial',
            '&.Mui-focused': {
              color: _colors.default.otherColor.silver
            }
          }
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select.default, (0, _extends2.default)({
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
        renderValue: multiple ? selected => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: selected.map(value => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Chip.default, {
            label: value,
            className: "chip",
            deleteIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
              htmlColor: disabled ? _colors.default.neutral.neutral5 : _colors.default.primary.bandaiNamcoBlack
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
                color: _colors.default.primary.bandaiNamcoBlack,
                height: ' 100%',
                display: 'flex',
                alignItems: 'center'
              },
              pointerEvents: "auto"
            }
          }, value))
        }) : p => p,
        IconComponent: () => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconArrowDown, {
          onClick: () => handleOpen(),
          htmlColor: selectDisabled ? _colors.default.neutral.neutral5 : ''
        }),
        children: data && data.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          id: `itemMenu${idx}`,
          value: item.value,
          onClick: () => handleClickItem == null ? void 0 : handleClickItem(item.value),
          children: item.label
        }, item.label))
      })), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormHelperText.default, {
        children: helperText
      })]
    })
  });
});
var _default = Dropdown;
exports.default = _default;