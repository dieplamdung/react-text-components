import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material'; // Types

import Container from "../../atoms/Container";
import Option from "./Option/index";
import Thumbnail from "./Thumbnail/index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var EStoreProductDetail = function EStoreProductDetail(_ref) {
  var listThumbnail = _ref.listThumbnail,
      options = _ref.options,
      onSelectPlatform = _ref.onSelectPlatform,
      onSelectType = _ref.onSelectType,
      onSelectEdition = _ref.onSelectEdition,
      onSelectQty = _ref.onSelectQty,
      buttonPropsAddCart = _ref.buttonPropsAddCart,
      buttonPropsBuyNow = _ref.buttonPropsBuyNow,
      buttonPropsBuyNowDigital = _ref.buttonPropsBuyNowDigital,
      titleButtonBuyNowDigital = _ref.titleButtonBuyNowDigital;
  var theme = useTheme();
  var isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  var isMobile = useMediaQuery(theme.breakpoints.down('md'));

  var _useState = useState({
    titleIcon: "",
    id: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      itemSelectPlatform = _useState2[0],
      setItemSelectPlatform = _useState2[1];

  var _useState3 = useState({
    titleIcon: "",
    id: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      itemSelectType = _useState4[0],
      setItemSelectType = _useState4[1];

  var _useState5 = useState({
    titleEdition: "",
    valuePrice: "",
    id: ""
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      itemSelectEdition = _useState6[0],
      setItemSelectEdition = _useState6[1];

  var _useState7 = useState(1),
      _useState8 = _slicedToArray(_useState7, 2),
      qty = _useState8[0],
      setQty = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isSelectTypeDigital = _useState10[0],
      setIsSelectTypeDigital = _useState10[1];

  var refWrapper = useRef();

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      padding = _useState12[0],
      setPadding = _useState12[1];

  var refTimeOut = useRef();
  useEffect(function () {
    if (typeof window !== "undefined") {
      var wrapper = refWrapper.current;

      if (wrapper) {
        var _wrapper$getBoundingC = wrapper.getBoundingClientRect(),
            left = _wrapper$getBoundingC.left; // eslint-disable-next-line no-nested-ternary


        var pd = isMobile ? 16 : isTablet ? 24 : 16;
        setPadding(left + pd);
      }

      ;

      if (isTablet) {
        window.addEventListener("resize", function () {
          if (refTimeOut.current) {
            window.clearTimeout(refTimeOut.current);
          }

          refTimeOut.current = setTimeout(function () {
            if (wrapper) {
              var _wrapper$getBoundingC2 = wrapper.getBoundingClientRect(),
                  _left = _wrapper$getBoundingC2.left; // eslint-disable-next-line no-nested-ternary


              var _pd = isMobile ? 16 : isTablet ? 24 : 16;

              setPadding(_left + _pd);
            }

            ;
          }, 150);
        });
      } else {
        window.removeEventListener("resize", function () {});
      }
    }

    return function () {
      window.removeEventListener("resize", function () {});
    };
  }, [isTablet, isMobile]);
  useEffect(function () {
    var _options$itemPlatform, _options$itemSelectEd, _options$itemTypeSele;

    if (options != null && (_options$itemPlatform = options.itemPlatformSelect) != null && _options$itemPlatform.id) {
      setItemSelectPlatform(options == null ? void 0 : options.itemPlatformSelect);
    }

    if (options != null && (_options$itemSelectEd = options.itemSelectEdition) != null && _options$itemSelectEd.id) {
      setItemSelectEdition(options == null ? void 0 : options.itemSelectEdition);
    }

    if (options != null && (_options$itemTypeSele = options.itemTypeSelect) != null && _options$itemTypeSele.id) {
      setItemSelectType(options == null ? void 0 : options.itemTypeSelect);
    }

    setIsSelectTypeDigital((options == null ? void 0 : options.isSelectTypeDigital) || false);
    setQty((options == null ? void 0 : options.quantity) || 1);
  }, [options]);

  var handleSelectPlatform = function handleSelectPlatform(platform) {
    setItemSelectPlatform(platform);
    onSelectPlatform == null ? void 0 : onSelectPlatform(platform == null ? void 0 : platform.id);
  };

  var handleSelectType = function handleSelectType(type) {
    setItemSelectType(type);
    onSelectType == null ? void 0 : onSelectType(type == null ? void 0 : type.id);

    if ((type == null ? void 0 : type.value) === "digital") {
      setIsSelectTypeDigital(true);
    } else {
      setIsSelectTypeDigital(false);
    }
  };

  var handleSelectEdition = function handleSelectEdition(edition) {
    onSelectEdition == null ? void 0 : onSelectEdition(edition == null ? void 0 : edition.id);
    setItemSelectEdition(edition);
  };

  var handleSelectQty = function handleSelectQty(v) {
    setQty(v);
    onSelectQty == null ? void 0 : onSelectQty(v);
  };

  var handleReturnTitle = function handleReturnTitle() {
    switch (itemSelectPlatform == null ? void 0 : itemSelectPlatform.value) {
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
      paddingBottom: "112px"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        position: "relative"
      },
      children: /*#__PURE__*/_jsx(Container, {
        sx: {
          paddingTop: "82px"
        },
        ref: refWrapper,
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row"
            }
          },
          children: [/*#__PURE__*/_jsx(Thumbnail, {
            listItem: listThumbnail,
            padding: padding
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              display: {
                xs: "none",
                lg: "flex"
              }
            },
            children: /*#__PURE__*/_jsx(Option, _extends({}, options, {
              itemPlatformSelect: itemSelectPlatform,
              itemTypeSelect: itemSelectType,
              itemSelectEdition: itemSelectEdition,
              quantity: qty,
              onSelectPlatform: handleSelectPlatform,
              onSelectType: handleSelectType,
              onSelectEdition: handleSelectEdition,
              onSelectQty: handleSelectQty,
              buttonPropsAddCart: buttonPropsAddCart,
              buttonPropsBuyNow: buttonPropsBuyNow,
              isSelectTypeDigital: isSelectTypeDigital,
              buttonPropsBuyNowDigital: _extends({}, buttonPropsBuyNowDigital, {
                label: handleReturnTitle()
              })
            }))
          })]
        })
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        display: {
          xs: "flex",
          lg: "none"
        }
      },
      children: /*#__PURE__*/_jsx(Option, _extends({}, options, {
        padding: padding,
        itemPlatformSelect: itemSelectPlatform,
        itemTypeSelect: itemSelectType,
        itemSelectEdition: itemSelectEdition,
        quantity: qty,
        onSelectPlatform: handleSelectPlatform,
        onSelectType: handleSelectType,
        onSelectEdition: handleSelectEdition,
        onSelectQty: handleSelectQty,
        buttonPropsAddCart: buttonPropsAddCart,
        buttonPropsBuyNow: buttonPropsBuyNow,
        isSelectTypeDigital: isSelectTypeDigital,
        buttonPropsBuyNowDigital: _extends({}, buttonPropsBuyNowDigital, {
          label: handleReturnTitle()
        })
      }))
    })]
  });
};

export default EStoreProductDetail;