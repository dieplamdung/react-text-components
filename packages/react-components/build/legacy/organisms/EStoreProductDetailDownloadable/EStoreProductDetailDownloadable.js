import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { disableScrollBody } from "../../utils/disableScrollBody";
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import ScrollingDLCContainer from "./ScrollingDLCContainer";
import Platform from "../EStoreProductDetail/Option/Platform";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var EStoreProductDetailDownloadable = function EStoreProductDetailDownloadable(_ref) {
  var listItemDLC = _ref.listItemDLC,
      platformList = _ref.platformList,
      titleButtonBuyNowDigital = _ref.titleButtonBuyNowDigital,
      titleModalSelectPlatform = _ref.titleModalSelectPlatform,
      onClickBuy = _ref.onClickBuy;
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('md'));

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showModalPlatform = _useState2[0],
      setShowModalPlatform = _useState2[1];

  var _useState3 = useState({
    titleIcon: "",
    value: "ps4",
    id: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      platformSelect = _useState4[0],
      setPlatformSelect = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      idItemBuy = _useState6[0],
      setIdItemBuy = _useState6[1];

  useEffect(function () {
    disableScrollBody(showModalPlatform);
  }, [showModalPlatform]);

  var handleReturnTitle = function handleReturnTitle() {
    switch (platformSelect == null ? void 0 : platformSelect.value) {
      case "ps4":
      case "ps5":
        return (titleButtonBuyNowDigital == null ? void 0 : titleButtonBuyNowDigital.ps) || "";

      case "stream":
        return (titleButtonBuyNowDigital == null ? void 0 : titleButtonBuyNowDigital.stream) || "";

      case "xbox":
        return (titleButtonBuyNowDigital == null ? void 0 : titleButtonBuyNowDigital.xbox) || "";

      case "nintendo":
        return (titleButtonBuyNowDigital == null ? void 0 : titleButtonBuyNowDigital.nintendo) || "";

      default:
        return "";
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "72px 0px",
        lg: "80px 0px"
      },
      background: "#F9F9F9"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        padding: {
          xs: "0px 16px",
          md: "0px"
        },
        "& button": {
          background: 'transparent'
        }
      },
      children: /*#__PURE__*/_jsx(ScrollingDLCContainer, _extends({}, listItemDLC, {
        onClickBuyItem: function onClickBuyItem(id) {
          setIdItemBuy(id);
          setShowModalPlatform(true);
          setPlatformSelect({
            titleIcon: "",
            value: "ps4",
            id: ""
          });
        }
      }))
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        position: "fixed",
        height: "100vh",
        width: "100%",
        top: "0px",
        right: "0px",
        overflow: "hidden",
        zIndex: showModalPlatform ? 1000 : "-1",
        pointerEvents: "auto"
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: ' rgba(0,0,0,0.5)',
          opacity: showModalPlatform ? '1' : '0',
          transition: 'all 0.3s  z-index 0.01s ',
          zIndex: showModalPlatform ? '1002' : '-1'
        },
        onClick: function onClick() {
          setShowModalPlatform(false);
        }
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          minHeight: {
            xs: showModalPlatform ? "30vh" : "0px",
            md: "100vh"
          },
          width: {
            xs: "100%",
            md: "495px"
          },
          background: "#fff",
          overflow: "hidden",
          right: {
            xs: "0px",
            md: showModalPlatform ? "0px" : "-495px"
          },
          bottom: {
            xs: showModalPlatform ? "0px" : "-100vh",
            md: "0px"
          },
          borderRadius: {
            xs: "16px 16px 0px 0px",
            md: "0px"
          },
          zIndex: "1003",
          opacity: showModalPlatform ? "1" : "0",
          transition: "all 0.3s, opacity 0s"
        },
        children: [isMobile && /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 0px 24px"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              width: "48px"
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                width: "100%",
                height: "4px",
                background: colors.neutral.neutral5,
                borderRadius: "15px"
              }
            })
          })
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "0px 32px 44px",
            marginTop: "4px"
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "h2",
            color: colors.primary.bandaiNamcoBlack,
            children: titleModalSelectPlatform
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              padding: "48px 0px",
              display: "flex",
              width: "100%",
              flexFlow: "wrap",
              gap: "16px"
            },
            children: !!(platformList != null && platformList.length) && platformList.map(function (item, index) {
              return /*#__PURE__*/_jsx(Platform, {
                isSelect: (item == null ? void 0 : item.id) === (platformSelect == null ? void 0 : platformSelect.id),
                titleIcon: item == null ? void 0 : item.titleIcon,
                onClick: function onClick() {
                  setPlatformSelect(item);
                }
              }, index);
            })
          }), /*#__PURE__*/_jsx(Button, {
            variant: "primaryDark",
            onClick: function onClick() {
              onClickBuy == null ? void 0 : onClickBuy({
                idItem: idItemBuy,
                idPlatform: platformSelect == null ? void 0 : platformSelect.id
              });
              setShowModalPlatform(false);
            },
            children: handleReturnTitle()
          })]
        })]
      })]
    })]
  });
};

export default EStoreProductDetailDownloadable;