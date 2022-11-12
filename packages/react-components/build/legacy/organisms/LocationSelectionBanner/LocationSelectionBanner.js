import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconLocation, _IconClose;

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import Container from "../../atoms/Container";
import { IconClose, IconLocation } from "../../atoms/Icon";
import Dropdown from "../../molecules/Dropdown";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var LocationSelectionBanner = function LocationSelectionBanner(_ref) {
  var isShowLocation = _ref.isShowLocation,
      onClose = _ref.onClose,
      onUpdate = _ref.onUpdate,
      defaultLocation = _ref.defaultLocation,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? " Update your location to see content specific to where you are." : _ref$title,
      listLocation = _ref.listLocation,
      handleCloseFunc = _ref.handleCloseFunc,
      textButtonUpdate = _ref.textButtonUpdate;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShow = _useState2[0],
      setIsShow = _useState2[1];

  var _useState3 = useState(defaultLocation),
      _useState4 = _slicedToArray(_useState3, 2),
      valueLocation = _useState4[0],
      setValueLocation = _useState4[1];

  useEffect(function () {
    setIsShow(function () {
      return isShowLocation;
    });
  }, [isShowLocation, isShow]);
  var propsDropDow = {
    disabled: false,
    error: false,
    helperText: 'Helper text',
    variant: "standard",
    defaultValue: valueLocation,
    data: listLocation
  };
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: "100%",
      height: {
        xs: "152px",
        lg: "98px"
      },
      display: "flex",
      alignItems: "center",
      background: colors.neutral.neutral7,
      position: "relative",
      zIndex: "10"
    },
    children: /*#__PURE__*/_jsx(Container, {
      sx: {
        width: "100%",
        height: "100%"
      },
      children: /*#__PURE__*/_jsxs(Box, {
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
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          color: colors.primary.bandaiNamcoBlack,
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
        }), /*#__PURE__*/_jsxs(Box, {
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
          children: [/*#__PURE__*/_jsxs(Box, {
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
            children: [/*#__PURE__*/_jsx(Box, {
              sx: {
                width: "100%",
                height: "100%",
                border: "1px solid",
                borderColor: colors.neutral.neutral5,
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
                    color: "".concat(colors.primary.bandaiNamcoBlack, " !important"),
                    "&:focus": {
                      background: "none"
                    }
                  },
                  "& svg": {
                    position: "absolute",
                    zIndex: "1",
                    cursor: "pointer",
                    '& path': {
                      fill: "".concat(colors.primary.bandaiNamcoBlack, " !important")
                    },
                    right: {
                      xs: "16px"
                    },
                    transform: "translateX(0px)"
                  }
                }
              },
              children: /*#__PURE__*/_jsx(Dropdown, _extends({}, propsDropDow, {
                onChange: function onChange(e) {
                  return setValueLocation(e.target.value);
                },
                isScrollTop: true
              }))
            }), /*#__PURE__*/_jsx(Box, {
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
              children: _IconLocation || (_IconLocation = /*#__PURE__*/_jsx(IconLocation, {}))
            })]
          }), /*#__PURE__*/_jsx(Button, {
            variant: "primary",
            sx: {
              width: {
                md: "136px",
                xs: "118px"
              },
              background: colors.primary.bandaiNamcoBlack,
              color: colors.primary.bandaiNamcoWhite,
              "&:hover": {
                background: "#000000b3"
              }
            },
            onClick: function onClick() {
              return onUpdate(valueLocation);
            },
            children: textButtonUpdate
          })]
        }), /*#__PURE__*/_jsx(Box, {
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
          onClick: function onClick() {
            setIsShow(false);
            onClose == null ? void 0 : onClose(false);
            handleCloseFunc == null ? void 0 : handleCloseFunc();
          },
          children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {
            htmlColor: "#C1C1C1"
          }))
        })]
      })
    })
  });
};

export default LocationSelectionBanner;