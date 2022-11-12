"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Icon = require("../../atoms/Icon");

var _Dropdown = _interopRequireDefault(require("../../molecules/Dropdown"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconLocation, _IconClose;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const LocationSelectionBanner = ({
  isShowLocation,
  onClose,
  onUpdate,
  defaultLocation,
  title = " Update your location to see content specific to where you are.",
  listLocation,
  handleCloseFunc,
  textButtonUpdate
}) => {
  const [isShow, setIsShow] = (0, _react.useState)(false);
  const [valueLocation, setValueLocation] = (0, _react.useState)(defaultLocation);
  (0, _react.useEffect)(() => {
    setIsShow(() => isShowLocation);
  }, [isShowLocation, isShow]);
  const propsDropDow = {
    disabled: false,
    error: false,
    helperText: 'Helper text',
    variant: "standard",
    defaultValue: valueLocation,
    data: listLocation
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      width: "100%",
      height: {
        xs: "152px",
        lg: "98px"
      },
      display: "flex",
      alignItems: "center",
      background: _colors.default.neutral.neutral7,
      position: "relative",
      zIndex: "10"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      sx: {
        width: "100%",
        height: "100%"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: {
            lg: "center",
            xs: "flex-start"
          },
          justifyContent: "space-between",
          flexDirection: {
            lg: "row",
            xs: "column"
          },
          padding: {
            lg: "0px 0 0px 0",
            xs: "24px 16px 28px 16px"
          },
          position: "relative"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            width: "100%",
            paddingRight: "40px",
            lineHeight: {
              xs: "20px",
              ld: "22px"
            },
            marginRight: {
              md: "0px",
              xs: "2px"
            }
          },
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: {
              lg: "auto",
              xs: "100%"
            },
            display: "flex",
            justifyContent: {
              lg: "flex-end",
              xs: "center"
            },
            marginTop: {
              lg: "0px",
              xs: "20px"
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: "flex",
              alignItems: "center",
              width: "fix-content",
              height: {
                md: "46px",
                xs: "40px"
              },
              marginRight: "12px",
              position: "relative",
              cursor: "pointer"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: "100%",
                height: "100%",
                border: "1px solid",
                borderColor: _colors.default.neutral.neutral5,
                borderRadius: "90px",
                overflow: "hidden",
                zIndex: 2,
                position: "relative",
                "& div": {
                  height: "100%",
                  width: "100%",
                  fontSize: {
                    md: "16px",
                    xs: "14px"
                  },
                  lineHeight: {
                    md: "22px",
                    xs: "20px"
                  },
                  fontWeight: "600",
                  '& .MuiSelect-standard': {
                    padding: {
                      md: '18.5px 32px 18.5px 34px !important',
                      xs: '13.5px 32px 15.5px 34px !important'
                    },
                    color: `${_colors.default.primary.bandaiNamcoBlack} !important`,
                    "&:focus": {
                      background: "none"
                    }
                  },
                  "& svg": {
                    position: "absolute",
                    zIndex: "1",
                    cursor: "pointer",
                    '& path': {
                      fill: `${_colors.default.primary.bandaiNamcoBlack} !important`
                    },
                    right: {
                      xs: "16px"
                    },
                    transform: "translateX(0px)"
                  }
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default, (0, _extends2.default)({}, propsDropDow, {
                onChange: e => setValueLocation(e.target.value),
                isScrollTop: true
              }))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                position: "absolute",
                zIndex: "1",
                marginTop: "5px",
                left: '16px',
                "& svg": {
                  width: "13px",
                  height: "16px"
                }
              },
              children: _IconLocation || (_IconLocation = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLocation, {}))
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            variant: "primary",
            sx: {
              width: {
                md: "136px",
                xs: "118px"
              },
              background: _colors.default.primary.bandaiNamcoBlack,
              color: _colors.default.primary.bandaiNamcoWhite,
              "&:hover": {
                background: "#000000b3"
              }
            },
            onClick: () => onUpdate(valueLocation),
            children: textButtonUpdate
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            position: "absolute",
            right: {
              xl: "-60px",
              lg: "-30px",
              xs: "16px"
            },
            marginTop: {
              xs: "0px",
              lg: "6px"
            },
            cursor: "pointer"
          },
          onClick: () => {
            setIsShow(false);
            onClose == null ? void 0 : onClose(false);
            handleCloseFunc == null ? void 0 : handleCloseFunc();
          },
          children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
            htmlColor: "#C1C1C1"
          }))
        })]
      })
    })
  });
};

var _default = LocationSelectionBanner;
exports.default = _default;