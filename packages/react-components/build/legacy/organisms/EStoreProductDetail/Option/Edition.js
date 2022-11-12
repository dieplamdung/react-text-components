import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Typography from "../../../atoms/Typography";
import colors from "../../../theme/colors"; // eslint-disable-next-line import/no-cycle

import { WrapperContainer } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Edition(props) {
  var title = props.title,
      editionList = props.editionList,
      itemSelectEdition = props.itemSelectEdition,
      onSelectEdition = props.onSelectEdition,
      _props$isDisable = props.isDisable,
      isDisable = _props$isDisable === void 0 ? false : _props$isDisable,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? 0 : _props$padding,
      titleCompare = props.titleCompare;
  var refWrapper = useRef();
  useEffect(function () {
    var timeout = null;

    if (typeof window !== "undefined") {
      var wrapper = refWrapper.current;

      if (wrapper) {
        window.addEventListener("resize", function () {
          timeout = setTimeout(function () {
            wrapper == null ? void 0 : wrapper.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }
    }

    ;
    return function () {
      window.removeEventListener("resize", function () {});
      window.clearTimeout(timeout);
    };
  }, []);

  var handleClickCompare = function handleClickCompare() {
    if (typeof window !== "undefined") {
      var compareContent = document.querySelector(".content-compare-edition");

      if (compareContent) {
        var _compareContent$getBo = compareContent.getBoundingClientRect(),
            top = _compareContent$getBo.top;

        window.scrollTo({
          top: top + window.scrollY,
          behavior: "smooth"
        });
      }
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      opacity: isDisable ? "0.4" : "1",
      pointerEvents: isDisable ? "none" : "auto"
    },
    children: [WrapperContainer( /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        color: colors.neutral.neutral2,
        variant: "p6",
        children: title
      }), !!titleCompare && /*#__PURE__*/_jsx(Typography, {
        color: colors.primary.bandaiNamcoRed,
        variant: "p5",
        sx: {
          width: "fit-content",
          cursor: "pointer",
          position: "relative",
          "&:before": {
            position: "absolute",
            content: "' '",
            width: "100%",
            left: "0px",
            bottom: "0px",
            borderBottom: "1px solid ".concat(colors.primary.bandaiNamcoRed)
          }
        },
        onClick: handleClickCompare,
        children: titleCompare
      })]
    })), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexWrap: {
          xs: "nowrap",
          lg: "wrap"
        },
        height: "fit-content",
        gap: "12px",
        paddingTop: "14px",
        overflow: "scroll",
        scrollbarWidth: "none",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      },
      ref: refWrapper,
      children: [!!(editionList != null && editionList.length) && editionList.map(function (item, index) {
        return /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start",
            minWidth: {
              xs: "fit-content",
              lg: "calc(50% - 6px)"
            },
            maxWidth: {
              xs: "auto",
              lg: "calc(50% - 6px)"
            },
            width: "fit-content"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              transform: {
                xs: "translateX(".concat(padding + 16, "px)"),
                md: "translateX(".concat(padding, "px)")
              },
              width: "100%"
            },
            children: /*#__PURE__*/_jsxs(Box, {
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                padding: "11.5px 24px",
                border: "1px solid",
                borderRadius: "10px",
                borderColor: (itemSelectEdition == null ? void 0 : itemSelectEdition.id) === (item == null ? void 0 : item.id) ? colors.secondary.bandaiNamcoBlue : colors.neutral.neutral5,
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: colors.secondary.bandaiNamcoBlue,
                  "& p": {
                    color: colors.secondary.bandaiNamcoBlue
                  }
                }
              },
              onClick: function onClick() {
                return onSelectEdition == null ? void 0 : onSelectEdition(item);
              },
              children: [/*#__PURE__*/_jsx(Typography, {
                variant: "p5",
                color: (itemSelectEdition == null ? void 0 : itemSelectEdition.id) === (item == null ? void 0 : item.id) ? colors.secondary.bandaiNamcoBlue : colors.primary.bandaiNamcoBlack,
                sx: {
                  lineHeight: {
                    xs: "20px",
                    lg: "22px"
                  },
                  whiteSpace: "nowrap",
                  textAlign: "center"
                },
                children: item == null ? void 0 : item.titleEdition
              }), /*#__PURE__*/_jsx(Typography, {
                variant: "p6",
                color: (itemSelectEdition == null ? void 0 : itemSelectEdition.id) === (item == null ? void 0 : item.id) ? colors.secondary.bandaiNamcoBlue : "#9F9F9F",
                sx: {
                  lineHeight: {
                    xs: "20px",
                    lg: "22px"
                  },
                  color: "#9F9F9F",
                  marginTop: "-1px",
                  whiteSpace: "nowrap",
                  textAlign: "center"
                },
                children: item == null ? void 0 : item.valuePrice
              })]
            })
          })
        }, index);
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: {
            xs: "inline-block",
            lg: "none"
          },
          scrollSnapAlign: "start"
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            transform: {
              xs: "translateX(".concat(padding + 4, "px)"),
              md: "translateX(".concat(padding - 12, "px)")
            }
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              width: {
                xs: "".concat(padding + 16, "px"),
                md: "".concat(padding, "px")
              },
              height: "100%",
              background: "red"
            }
          })
        })
      })]
    })]
  });
}