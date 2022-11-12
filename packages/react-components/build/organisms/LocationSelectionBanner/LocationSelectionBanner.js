import _extends from "@babel/runtime/helpers/esm/extends";

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
  const [isShow, setIsShow] = useState(false);
  const [valueLocation, setValueLocation] = useState(defaultLocation);
  useEffect(() => {
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
                    color: `${colors.primary.bandaiNamcoBlack} !important`,
                    "&:focus": {
                      background: "none"
                    }
                  },
                  "& svg": {
                    position: "absolute",
                    zIndex: "1",
                    cursor: "pointer",
                    '& path': {
                      fill: `${colors.primary.bandaiNamcoBlack} !important`
                    },
                    right: {
                      xs: "16px"
                    },
                    transform: "translateX(0px)"
                  }
                }
              },
              children: /*#__PURE__*/_jsx(Dropdown, _extends({}, propsDropDow, {
                onChange: e => setValueLocation(e.target.value),
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
            onClick: () => onUpdate(valueLocation),
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
          onClick: () => {
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