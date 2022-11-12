import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useRef, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material'; // Types

import Container from "../../atoms/Container";
import Option from "./Option/index";
import Thumbnail from "./Thumbnail/index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const EStoreProductDetail = ({
  listThumbnail,
  options,
  onSelectPlatform,
  onSelectType,
  onSelectEdition,
  onSelectQty,
  buttonPropsAddCart,
  buttonPropsBuyNow,
  buttonPropsBuyNowDigital,
  titleButtonBuyNowDigital
}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [itemSelectPlatform, setItemSelectPlatform] = useState({
    titleIcon: "",
    id: ""
  });
  const [itemSelectType, setItemSelectType] = useState({
    titleIcon: "",
    id: ""
  });
  const [itemSelectEdition, setItemSelectEdition] = useState({
    titleEdition: "",
    valuePrice: "",
    id: ""
  });
  const [qty, setQty] = useState(1);
  const [isSelectTypeDigital, setIsSelectTypeDigital] = useState(false);
  const refWrapper = useRef();
  const [padding, setPadding] = useState(0);
  const refTimeOut = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        const {
          left
        } = wrapper.getBoundingClientRect(); // eslint-disable-next-line no-nested-ternary

        const pd = isMobile ? 16 : isTablet ? 24 : 16;
        setPadding(left + pd);
      }

      ;

      if (isTablet) {
        window.addEventListener("resize", () => {
          if (refTimeOut.current) {
            window.clearTimeout(refTimeOut.current);
          }

          refTimeOut.current = setTimeout(() => {
            if (wrapper) {
              const {
                left
              } = wrapper.getBoundingClientRect(); // eslint-disable-next-line no-nested-ternary

              const pd = isMobile ? 16 : isTablet ? 24 : 16;
              setPadding(left + pd);
            }

            ;
          }, 150);
        });
      } else {
        window.removeEventListener("resize", () => {});
      }
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [isTablet, isMobile]);
  useEffect(() => {
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

  const handleSelectPlatform = platform => {
    setItemSelectPlatform(platform);
    onSelectPlatform == null ? void 0 : onSelectPlatform(platform == null ? void 0 : platform.id);
  };

  const handleSelectType = type => {
    setItemSelectType(type);
    onSelectType == null ? void 0 : onSelectType(type == null ? void 0 : type.id);

    if ((type == null ? void 0 : type.value) === "digital") {
      setIsSelectTypeDigital(true);
    } else {
      setIsSelectTypeDigital(false);
    }
  };

  const handleSelectEdition = edition => {
    onSelectEdition == null ? void 0 : onSelectEdition(edition == null ? void 0 : edition.id);
    setItemSelectEdition(edition);
  };

  const handleSelectQty = v => {
    setQty(v);
    onSelectQty == null ? void 0 : onSelectQty(v);
  };

  const handleReturnTitle = () => {
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