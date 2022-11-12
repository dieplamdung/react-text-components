import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import { Box } from '@mui/material';
import React from 'react';
import Button from "../../atoms/Button";
import HtmlRenderer from "../../atoms/HtmlRenderer"; // import Styles
// import Types

import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const JobHire = props => {
  const {
    title,
    mainImageNextProps,
    mainImage,
    description,
    buttonProps
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    children: [title && /*#__PURE__*/_jsx(Typography, {
      variant: 'h3',
      color: colors.primary.dark,
      sx: {
        maxWidth: '740px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "div",
        value: title
      })
    }), mainImage && /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: '24px',
          md: '31px'
        }
      },
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: '926px',
          paddingBottom: '56.15%',
          borderRadius: '10px',
          overflow: "hidden",
          position: 'relative',
          transform: 'rotate(0)',
          marginLeft: 'auto',
          marginRight: 'auto',
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
          children: (mainImageNextProps == null ? void 0 : mainImageNextProps(mainImage, title)) || /*#__PURE__*/_jsx("img", {
            src: mainImage,
            alt: title || ""
          })
        })
      })
    }), description && /*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: '740px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: {
          xs: '31px',
          md: '60px'
        },
        marginBottom: '40px'
      },
      children: /*#__PURE__*/_jsx(Typography, {
        variant: 'p2',
        color: colors.neutral.neutral2,
        sx: {
          fontSize: {
            xs: '16px',
            md: '18px'
          },
          lineHeight: {
            xs: '22px',
            md: '26px'
          }
        },
        children: /*#__PURE__*/_jsx(HtmlRenderer, {
          component: "div",
          value: description
        })
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: '740px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      children: /*#__PURE__*/_jsx(Button, _extends({}, buttonProps))
    })]
  });
};

export default JobHire;