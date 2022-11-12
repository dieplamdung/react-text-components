var _svg;

// import Modules
import { Box, Link } from '@mui/material';
import React from 'react'; // import Types

import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const LocaleCardInfo = props => {
  const {
    item,
    mainImageNextProps
  } = props;

  const IconNext = _svg || (_svg = /*#__PURE__*/_jsx("svg", {
    width: "5.5",
    height: "10",
    viewBox: "0 0 6 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.625 5.37377L1.69286 0.631683C1.42009 0.319955 0.946272 0.288367 0.634545 0.561129C0.322817 0.83389 0.291229 1.30771 0.563991 1.61944L3.63185 5.37377L0.572631 9.12714C0.299869 9.43887 0.331458 9.91269 0.643185 10.1855C0.954912 10.4582 1.42873 10.4266 1.7015 10.1149L5.625 5.37377Z",
      fill: "#1E1E1E"
    })
  }));

  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsx(Box, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: {
            xs: '100%',
            md: '269px'
          },
          paddingBottom: {
            xs: '64%',
            md: '57.6%'
          },
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.07)',
          borderRadius: '10px',
          overflow: "hidden",
          position: 'relative',
          transform: 'rotate(0)',
          '& img': {
            position: "absolute",
            objectFit: 'cover',
            borderRadius: '20px 20px 0 0',
            display: 'block',
            width: '100%',
            height: '100%',
            transform: "scale(1)",
            transition: "all 0.5s",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            "&:hover": {
              transform: "scale(1.2)"
            }
          }
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            "& span": {
              width: '100% !important',
              height: '100% !important'
            }
          },
          children: (mainImageNextProps == null ? void 0 : mainImageNextProps(item == null ? void 0 : item.image, item == null ? void 0 : item.title)) || /*#__PURE__*/_jsx("img", {
            src: item == null ? void 0 : item.image,
            alt: (item == null ? void 0 : item.title) || ""
          })
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: '100%',
        backgroundColor: colors.primary.bandaiNamcoWhite,
        borderRadius: '10px',
        padding: '22px 16px 26px 16px'
      },
      children: [(item == null ? void 0 : item.title) && /*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        sx: {
          color: colors.primary.bandaiNamcoBlack
        },
        children: item == null ? void 0 : item.title
      }), (item == null ? void 0 : item.address) && /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        sx: {
          color: colors.otherColor.gray,
          marginBottom: '16px',
          marginTop: '16px'
        },
        children: item == null ? void 0 : item.address
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: !!(item != null && item.infoLink.length) && (item == null ? void 0 : item.infoLink.map((itemLink, idx) => {
          var _itemLink$href;

          return /*#__PURE__*/_jsx(Link, {
            href: (_itemLink$href = itemLink == null ? void 0 : itemLink.href) != null ? _itemLink$href : '/',
            target: "_blank",
            sx: {
              textDecoration: 'none',
              display: 'inline-block'
            },
            children: /*#__PURE__*/_jsxs(Typography, {
              variant: "p7",
              sx: {
                color: colors.primary.bandaiNamcoBlack,
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '19px',
                alignItems: 'center',
                display: 'flex'
              },
              children: [itemLink.title, /*#__PURE__*/_jsx(Box, {
                sx: {
                  display: 'inline-block',
                  marginLeft: '9px',
                  transform: 'translateY(2px)'
                },
                children: IconNext
              })]
            })
          }, idx);
        }))
      })]
    })]
  });
};

export default /*#__PURE__*/React.memo(LocaleCardInfo);