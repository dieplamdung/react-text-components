import _extends from "@babel/runtime/helpers/esm/extends";
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

const EStoreProductDetailDownloadable = ({
  listItemDLC,
  platformList,
  titleButtonBuyNowDigital,
  titleModalSelectPlatform,
  onClickBuy
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showModalPlatform, setShowModalPlatform] = useState(false);
  const [platformSelect, setPlatformSelect] = useState({
    titleIcon: "",
    value: "ps4",
    id: ""
  });
  const [idItemBuy, setIdItemBuy] = useState("");
  useEffect(() => {
    disableScrollBody(showModalPlatform);
  }, [showModalPlatform]);

  const handleReturnTitle = () => {
    switch (platformSelect?.value) {
      case "ps4":
      case "ps5":
        return titleButtonBuyNowDigital?.ps || "";

      case "stream":
        return titleButtonBuyNowDigital?.stream || "";

      case "xbox":
        return titleButtonBuyNowDigital?.xbox || "";

      case "nintendo":
        return titleButtonBuyNowDigital?.nintendo || "";

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
        onClickBuyItem: id => {
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
        onClick: () => {
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
            children: !!platformList?.length && platformList.map((item, index) => {
              return /*#__PURE__*/_jsx(Platform, {
                isSelect: item?.id === platformSelect?.id,
                titleIcon: item?.titleIcon,
                onClick: () => {
                  setPlatformSelect(item);
                }
              }, index);
            })
          }), /*#__PURE__*/_jsx(Button, {
            variant: "primaryDark",
            onClick: () => {
              onClickBuy?.({
                idItem: idItemBuy,
                idPlatform: platformSelect?.id
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