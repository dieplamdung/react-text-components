import _extends from "@babel/runtime/helpers/esm/extends";

var _svg;

// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import Button from "../../atoms/Button";
import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const Subscribe = props => {
  const {
    title,
    buttonProps,
    backgroundColor = '#CB2C49',
    handleOpenModal = () => {}
  } = props;

  const handleClickButton = () => {
    handleOpenModal(true);
  };

  const Icon = _svg || (_svg = /*#__PURE__*/_jsxs("svg", {
    width: "81",
    height: "86",
    viewBox: "0 0 81 86",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("path", {
      d: "M43.926 43.2652C43.926 43.2652 10.8798 26.9595 0.66339 20.5581C5.54776 12.5952 12.901 6.44702 21.6041 3.04889C30.3073 -0.349249 39.8838 -0.811242 48.8764 1.73331C57.8691 4.27786 65.7854 9.68962 71.4209 17.145C77.0563 24.6004 80.1023 33.6912 80.0953 43.0341C80.0883 52.377 77.0288 61.4605 71.3822 68.9022C65.7356 76.344 57.8112 81.7366 48.8147 84.2594C39.8183 86.7823 30.2425 86.2972 21.5445 82.878C12.8464 79.4589 5.50234 73.2929 0.629875 65.3183L43.926 43.2652Z",
      fill: "url(#paint0_linear_5041_4014)"
    }), /*#__PURE__*/_jsx("defs", {
      children: /*#__PURE__*/_jsxs("linearGradient", {
        id: "paint0_linear_5041_4014",
        x1: "75.8842",
        y1: "39.953",
        x2: "-3.22465",
        y2: "39.6735",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/_jsx("stop", {
          stopColor: "#FED45E"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "1",
          stopColor: "#FFFF00"
        })]
      })
    })]
  }));

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      backgroundColor
    },
    children: /*#__PURE__*/_jsxs(Container, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: {
          xs: "144px",
          md: "86px"
        },
        padding: '28px 16px',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        position: "relative",
        overflow: "hidden",
        "&::after": {
          display: {
            xs: 'none',
            md: 'flex'
          },
          content: "' '",
          position: "absolute",
          left: "45px",
          height: "100%",
          width: "100%",
          background: "linear-gradient(90deg, #F7B63C 0%, rgba(249, 212, 152, 0) 40.36%)",
          opacity: "0.5"
        }
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          display: {
            xs: "none",
            md: "flex"
          },
          position: "absolute",
          left: "0px",
          top: "0px",
          bottom: "0px",
          zIndex: "1"
        },
        children: Icon
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p1",
        color: colors.neutral.white,
        sx: {
          zIndex: "1"
        },
        children: title ?? ''
      }), /*#__PURE__*/_jsx(Button, _extends({}, buttonProps, {
        label: buttonProps?.label,
        onClick: () => handleClickButton(),
        sx: {
          backgroundColor: colors.neutral.white,
          color: colors.primary.bandaiNamcoRed,
          minWidth: '147px',
          marginTop: {
            xs: '15px',
            sm: '0'
          },
          marginLeft: {
            xs: '0px',
            sm: '28px'
          },
          "&:hover": {
            background: colors.neutral.neutral6,
            color: colors.primary.bandaiNamcoRed
          },
          zIndex: "1"
        }
      }))]
    })
  });
};

export default Subscribe;