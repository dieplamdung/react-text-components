import _extends from "@babel/runtime/helpers/esm/extends";
import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Button from "../../../atoms/Button";
import Container from "../../../atoms/Container";
import Typography from "../../../atoms/Typography";
import DropdownQuantity from "../../../molecules/DropdownQuantity";
import colors from "../../../theme/colors";
import Tabs from "../../EStoreProduct/ProductItem/Tabs"; // eslint-disable-next-line import/no-cycle

import Edition from "./Edition";
import FreeGift from "./FreeGift";
import Platform from "./Platform"; // eslint-disable-next-line import/no-cycle

import Type from "./Type";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export const WrapperContainer = child => {
  return /*#__PURE__*/_jsx(Container, {
    sx: {
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "0px 32px",
        md: "0px 24px",
        lg: "0px !important"
      }
    },
    children: child
  });
};
export default function Option(props) {
  var _platform$platformLis;

  const {
    tabList,
    title,
    platform,
    itemPlatformSelect,
    itemTypeSelect,
    itemSelectEdition,
    typeOption,
    typeEdition,
    onSelectPlatform,
    onSelectType,
    onSelectEdition,
    buttonPropsAddCart,
    buttonPropsBuyNow,
    maxQuantity,
    quantity,
    onSelectQty,
    labelQty,
    price,
    buttonPropsBuyNowDigital,
    isSelectTypeDigital,
    padding = 0,
    freeGift
  } = props;
  const refWrapper = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        window.addEventListener("resize", () => {
          wrapper == null ? void 0 : wrapper.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        });
      }
    }

    ;
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      marginLeft: {
        xs: "0px",
        lg: "56px"
      },
      marginTop: {
        xs: "40px",
        lg: "0px"
      },
      width: "100%"
    },
    children: [WrapperContainer( /*#__PURE__*/_jsxs(React.Fragment, {
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          marginBottom: "4px"
        },
        children: /*#__PURE__*/_jsx(Tabs, {
          tabList: tabList || []
        })
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        sx: {
          WebkitLineClamp: 2,
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical'
        },
        children: title
      })]
    })), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        paddingTop: {
          xs: "48px",
          lg: "64"
        }
      },
      children: [WrapperContainer( /*#__PURE__*/_jsx(Typography, {
        color: colors.neutral.neutral2,
        variant: "p6",
        sx: {
          marginBottom: "14px"
        },
        children: platform == null ? void 0 : platform.title
      })), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexWrap: {
            xs: "nowrap",
            lg: "wrap"
          },
          gap: "14px",
          overflow: "auto",
          overflowX: {
            xs: "scroll",
            ld: "auto"
          },
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapper,
        children: [!!(platform != null && (_platform$platformLis = platform.platformList) != null && _platform$platformLis.length) && (platform == null ? void 0 : platform.platformList.map((item, index) => {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                transform: {
                  xs: `translateX(${padding + 16}px)`,
                  md: `translateX(${padding}px)`
                }
              },
              children: /*#__PURE__*/_jsx(Platform, {
                isSelect: (itemPlatformSelect == null ? void 0 : itemPlatformSelect.id) === (item == null ? void 0 : item.id),
                titleIcon: item == null ? void 0 : item.titleIcon,
                onClick: () => onSelectPlatform == null ? void 0 : onSelectPlatform(item)
              })
            })
          }, index);
        })), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              transform: {
                xs: `translateX(${padding + 16}px)`,
                md: `translateX(${padding}px)`
              }
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "inline-block",
                width: `${padding}px`,
                height: "100%",
                background: "red"
              }
            })
          })
        })]
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        paddingTop: "44px"
      },
      children: /*#__PURE__*/_jsx(Type, _extends({}, typeOption, {
        padding: padding,
        isDisable: !(itemPlatformSelect != null && itemPlatformSelect.id),
        itemSelectType: itemTypeSelect,
        onSelectType: onSelectType
      }))
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        paddingTop: "44px"
      },
      children: /*#__PURE__*/_jsx(Edition, _extends({}, typeEdition, {
        padding: padding,
        isDisable: !(itemPlatformSelect != null && itemPlatformSelect.id),
        itemSelectEdition: itemSelectEdition,
        onSelectEdition: onSelectEdition
      }))
    }), WrapperContainer( /*#__PURE__*/_jsx(FreeGift, _extends({}, freeGift))), WrapperContainer( /*#__PURE__*/_jsxs(React.Fragment, {
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "44px"
        },
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            opacity: !(itemPlatformSelect != null && itemPlatformSelect.id) ? "0.4" : "1",
            pointerEvents: !(itemPlatformSelect != null && itemPlatformSelect.id) ? "none" : "auto"
          },
          children: /*#__PURE__*/_jsx(DropdownQuantity, {
            maxQuantity: maxQuantity || 5,
            currentQuantity: quantity != null ? quantity : 1,
            label: labelQty,
            onSetQuantity: qty => onSelectQty == null ? void 0 : onSelectQty(qty)
          })
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "h6",
          color: colors.primary.bandaiNamcoBlack,
          children: price
        })]
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: "44px"
        },
        children: !isSelectTypeDigital ? /*#__PURE__*/_jsxs(Box, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "& button": {
              width: {
                xs: "calc(50% - 8px)",
                lg: "calc(50% - 12px)"
              }
            }
          },
          children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonPropsAddCart, {
            disabled: !(itemPlatformSelect != null && itemPlatformSelect.id)
          })), /*#__PURE__*/_jsx(Button, _extends({}, buttonPropsBuyNow, {
            variant: !(itemPlatformSelect != null && itemPlatformSelect.id) ? "primary" : buttonPropsBuyNow == null ? void 0 : buttonPropsBuyNow.variant,
            disabled: !(itemPlatformSelect != null && itemPlatformSelect.id)
          }))]
        }) : /*#__PURE__*/_jsx(Button, _extends({}, buttonPropsBuyNowDigital))
      })]
    }))]
  });
}