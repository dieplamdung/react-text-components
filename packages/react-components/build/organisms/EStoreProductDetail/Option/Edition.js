import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Typography from "../../../atoms/Typography";
import colors from "../../../theme/colors"; // eslint-disable-next-line import/no-cycle

import { WrapperContainer } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Edition(props) {
  const {
    title,
    editionList,
    itemSelectEdition,
    onSelectEdition,
    isDisable = false,
    padding = 0,
    titleCompare
  } = props;
  const refWrapper = useRef();
  useEffect(() => {
    let timeout = null;

    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        window.addEventListener("resize", () => {
          timeout = setTimeout(() => {
            wrapper == null ? void 0 : wrapper.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }
    }

    ;
    return () => {
      window.removeEventListener("resize", () => {});
      window.clearTimeout(timeout);
    };
  }, []);

  const handleClickCompare = () => {
    if (typeof window !== "undefined") {
      const compareContent = document.querySelector(".content-compare-edition");

      if (compareContent) {
        const {
          top
        } = compareContent.getBoundingClientRect();
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
            borderBottom: `1px solid ${colors.primary.bandaiNamcoRed}`
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
      children: [!!(editionList != null && editionList.length) && editionList.map((item, index) => {
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
                xs: `translateX(${padding + 16}px)`,
                md: `translateX(${padding}px)`
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
              onClick: () => onSelectEdition == null ? void 0 : onSelectEdition(item),
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
              xs: `translateX(${padding + 4}px)`,
              md: `translateX(${padding - 12}px)`
            }
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              width: {
                xs: `${padding + 16}px`,
                md: `${padding}px`
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