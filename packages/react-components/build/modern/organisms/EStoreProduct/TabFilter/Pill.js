import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import colors from "../../../theme/colors";
import { useTheme } from '@mui/styles';
import omit from 'lodash/omit'; // Types

import Typography from "../../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Pills = props => {
  const {
    label,
    onClick = () => {},
    active
  } = props;
  const [pillActive, setPillActive] = useState(active);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  omit(props, ['active']);
  useEffect(() => {
    setPillActive(props.active);
  }, [props]);

  const IconMobil = () => {
    return /*#__PURE__*/_jsx(Box, {
      sx: {
        padding: "5.5px 0px",
        lineHeight: "0px",
        display: "flex",
        alignItems: "center"
      },
      children: /*#__PURE__*/_jsx("svg", {
        width: "16",
        height: "10",
        viewBox: "0 0 16 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/_jsx("path", {
          d: "M8.13025 6.84193C8.28865 6.41045 8.58238 6.03681 8.97098 5.77253C9.35957 5.50824 9.82388 5.36632 10.2999 5.36632C10.776 5.36632 11.2403 5.50824 11.6289 5.77253C12.0175 6.03681 12.3112 6.41045 12.4696 6.84193H15.6666V8.31573H12.4696C12.3112 8.74721 12.0175 9.12085 11.6289 9.38513C11.2403 9.64942 10.776 9.79134 10.2999 9.79134C9.82388 9.79134 9.35957 9.64942 8.97098 9.38513C8.58238 9.12085 8.28865 8.74721 8.13025 8.31573H0.333252V6.84193H8.13025ZM3.53025 1.68362C3.68865 1.25214 3.98239 0.878503 4.37098 0.614218C4.75957 0.349932 5.22388 0.208008 5.69992 0.208008C6.17595 0.208008 6.64027 0.349932 7.02886 0.614218C7.41745 0.878503 7.71119 1.25214 7.86959 1.68362H15.6666V3.15742H7.86959C7.71119 3.5889 7.41745 3.96253 7.02886 4.22682C6.64027 4.4911 6.17595 4.63303 5.69992 4.63303C5.22388 4.63303 4.75957 4.4911 4.37098 4.22682C3.98239 3.96253 3.68865 3.5889 3.53025 3.15742H0.333252V1.68362H3.53025ZM5.69992 3.15742C5.90325 3.15742 6.09826 3.07978 6.24203 2.94159C6.38581 2.80339 6.46658 2.61596 6.46658 2.42052C6.46658 2.22508 6.38581 2.03765 6.24203 1.89945C6.09826 1.76125 5.90325 1.68362 5.69992 1.68362C5.49659 1.68362 5.30158 1.76125 5.1578 1.89945C5.01403 2.03765 4.93325 2.22508 4.93325 2.42052C4.93325 2.61596 5.01403 2.80339 5.1578 2.94159C5.30158 3.07978 5.49659 3.15742 5.69992 3.15742ZM10.2999 8.31573C10.5033 8.31573 10.6983 8.23809 10.842 8.0999C10.9858 7.9617 11.0666 7.77427 11.0666 7.57883C11.0666 7.38339 10.9858 7.19596 10.842 7.05776C10.6983 6.91957 10.5033 6.84193 10.2999 6.84193C10.0966 6.84193 9.90158 6.91957 9.7578 7.05776C9.61402 7.19596 9.53325 7.38339 9.53325 7.57883C9.53325 7.77427 9.61402 7.9617 9.7578 8.0999C9.90158 8.23809 10.0966 8.31573 10.2999 8.31573Z",
          fill: pillActive ? colors.secondary.bandaiNamcoBlue : "black"
        })
      })
    });
  };

  const IconDesktop = () => {
    return /*#__PURE__*/_jsx(Box, {
      sx: {
        display: "flex",
        width: "fit-content",
        alignItems: "center"
      },
      children: /*#__PURE__*/_jsx("svg", {
        width: "24",
        height: "16",
        viewBox: "0 0 24 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/_jsx("path", {
          d: "M12.204 10.8835C12.4519 10.2082 12.9117 9.62335 13.5199 9.20968C14.1282 8.79602 14.8549 8.57388 15.6 8.57388C16.3451 8.57388 17.0718 8.79602 17.6801 9.20968C18.2883 9.62335 18.7481 10.2082 18.996 10.8835H24V13.1904H18.996C18.7481 13.8657 18.2883 14.4505 17.6801 14.8642C17.0718 15.2779 16.3451 15.5 15.6 15.5C14.8549 15.5 14.1282 15.2779 13.5199 14.8642C12.9117 14.4505 12.4519 13.8657 12.204 13.1904H0V10.8835H12.204ZM5.004 2.80965C5.25192 2.13429 5.71169 1.54947 6.31992 1.13581C6.92815 0.722142 7.6549 0.5 8.4 0.5C9.1451 0.5 9.87185 0.722142 10.4801 1.13581C11.0883 1.54947 11.5481 2.13429 11.796 2.80965H24V5.11647H11.796C11.5481 5.79183 11.0883 6.37665 10.4801 6.79031C9.87185 7.20398 9.1451 7.42612 8.4 7.42612C7.6549 7.42612 6.92815 7.20398 6.31992 6.79031C5.71169 6.37665 5.25192 5.79183 5.004 5.11647H0V2.80965H5.004ZM8.4 5.11647C8.71826 5.11647 9.02348 4.99495 9.24853 4.77864C9.47357 4.56234 9.6 4.26896 9.6 3.96306C9.6 3.65716 9.47357 3.36378 9.24853 3.14748C9.02348 2.93117 8.71826 2.80965 8.4 2.80965C8.08174 2.80965 7.77652 2.93117 7.55147 3.14748C7.32643 3.36378 7.2 3.65716 7.2 3.96306C7.2 4.26896 7.32643 4.56234 7.55147 4.77864C7.77652 4.99495 8.08174 5.11647 8.4 5.11647ZM15.6 13.1904C15.9183 13.1904 16.2235 13.0688 16.4485 12.8525C16.6736 12.6362 16.8 12.3428 16.8 12.0369C16.8 11.731 16.6736 11.4377 16.4485 11.2214C16.2235 11.005 15.9183 10.8835 15.6 10.8835C15.2817 10.8835 14.9765 11.005 14.7515 11.2214C14.5264 11.4377 14.4 11.731 14.4 12.0369C14.4 12.3428 14.5264 12.6362 14.7515 12.8525C14.9765 13.0688 15.2817 13.1904 15.6 13.1904Z",
          fill: pillActive ? colors.secondary.bandaiNamcoBlue : "#1E1E1E"
        })
      })
    });
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      cursor: "pointer",
      display: "flex"
    },
    onClick: () => onClick?.(),
    children: /*#__PURE__*/_jsx(Box, {
      sx: {
        display: 'inline-block',
        '& .active': {
          color: colors.secondary.bandaiNamcoBlue,
          border: `1px solid ${colors.secondary.bandaiNamcoBlue}`
        }
      },
      children: /*#__PURE__*/_jsxs(Typography, {
        variant: "p7",
        color: colors.primary.bandaiNamcoBlack,
        className: pillActive ? 'active' : 'inactive',
        sx: {
          display: "flex",
          cursor: 'pointer',
          transition: 'all .4s',
          padding: {
            md: '12px 28px',
            xs: '11.5px 15px'
          },
          border: `1px solid ${colors.neutral.neutral5}`,
          borderRadius: '60px',
          whiteSpace: "nowrap",
          '&:hover': {
            color: colors.secondary.bandaiNamcoBlue,
            border: `1px solid ${colors.secondary.bandaiNamcoBlue}`
          }
        },
        children: [isMobile ? /*#__PURE__*/_jsx(IconMobil, {}) : /*#__PURE__*/_jsx(IconDesktop, {}), !isMobile && /*#__PURE__*/_jsx(Typography, {
          variant: "p7",
          color: pillActive ? colors.secondary.bandaiNamcoBlue : colors.primary.bandaiNamcoBlack,
          sx: {
            marginLeft: '6px !important'
          },
          children: label
        })]
      })
    })
  });
};

export default Pills;