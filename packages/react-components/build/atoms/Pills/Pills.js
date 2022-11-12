import _extends from "@babel/runtime/helpers/esm/extends";

var _path, _path2, _Box;

import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import colors from "../../theme/colors";
import { useTheme } from '@mui/styles';
import omit from 'lodash/omit';
import Typography from "../Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Pills = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    label,
    triggerClick = () => {},
    active,
    iconMobile = false,
    numberFilter = 0
  } = props;
  const [pillActive, setPillActive] = useState(active);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  omit(props, ['active']);

  const IConFilter = prop => {
    return /*#__PURE__*/_jsx("svg", _extends({
      width: "16",
      height: "10",
      viewBox: "0 0 16 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, prop, {
      children: _path || (_path = /*#__PURE__*/_jsx("path", {
        d: "M8.13031 6.84193C8.28871 6.41045 8.58245 6.03681 8.97104 5.77253C9.35963 5.50824 9.82395 5.36632 10.3 5.36632C10.776 5.36632 11.2403 5.50824 11.6289 5.77253C12.0175 6.03681 12.3113 6.41045 12.4696 6.84193H15.6666V8.31573H12.4696C12.3113 8.74721 12.0175 9.12085 11.6289 9.38513C11.2403 9.64942 10.776 9.79134 10.3 9.79134C9.82395 9.79134 9.35963 9.64942 8.97104 9.38513C8.58245 9.12085 8.28871 8.74721 8.13031 8.31573H0.333313V6.84193H8.13031ZM3.53031 1.68362C3.68871 1.25214 3.98245 0.878503 4.37104 0.614218C4.75963 0.349932 5.22395 0.208008 5.69998 0.208008C6.17601 0.208008 6.64033 0.349932 7.02892 0.614218C7.41751 0.878503 7.71125 1.25214 7.86965 1.68362H15.6666V3.15742H7.86965C7.71125 3.5889 7.41751 3.96253 7.02892 4.22682C6.64033 4.4911 6.17601 4.63303 5.69998 4.63303C5.22395 4.63303 4.75963 4.4911 4.37104 4.22682C3.98245 3.96253 3.68871 3.5889 3.53031 3.15742H0.333313V1.68362H3.53031ZM5.69998 3.15742C5.90331 3.15742 6.09832 3.07978 6.24209 2.94159C6.38587 2.80339 6.46665 2.61596 6.46665 2.42052C6.46665 2.22508 6.38587 2.03765 6.24209 1.89945C6.09832 1.76125 5.90331 1.68362 5.69998 1.68362C5.49665 1.68362 5.30164 1.76125 5.15786 1.89945C5.01409 2.03765 4.93331 2.22508 4.93331 2.42052C4.93331 2.61596 5.01409 2.80339 5.15786 2.94159C5.30164 3.07978 5.49665 3.15742 5.69998 3.15742ZM10.3 8.31573C10.5033 8.31573 10.6983 8.23809 10.8421 8.0999C10.9859 7.9617 11.0666 7.77427 11.0666 7.57883C11.0666 7.38339 10.9859 7.19596 10.8421 7.05776C10.6983 6.91957 10.5033 6.84193 10.3 6.84193C10.0966 6.84193 9.90164 6.91957 9.75786 7.05776C9.61409 7.19596 9.53331 7.38339 9.53331 7.57883C9.53331 7.77427 9.61409 7.9617 9.75786 8.0999C9.90164 8.23809 10.0966 8.31573 10.3 8.31573Z",
        fill: "black"
      }))
    }));
  };

  useEffect(() => {
    setPillActive(props.active);
  }, [props]);
  useImperativeHandle(ref, () => ({
    handleResetActive() {
      setPillActive(false);
    },

    handleSetActivePill() {
      setPillActive(true);
    }

  }));

  const IConFilterActive = prop => {
    return /*#__PURE__*/_jsx("svg", _extends({
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, prop, {
      children: _path2 || (_path2 = /*#__PURE__*/_jsx("path", {
        d: "M8.3125 9.625C8.42188 9.625 8.53125 9.67969 8.61328 9.76172C8.69531 9.84375 8.75 9.95312 8.75 10.0625V10.9375C8.75 11.0742 8.69531 11.1836 8.61328 11.2656C8.53125 11.3477 8.42188 11.375 8.3125 11.375H7.65625V13.5625C7.65625 13.6992 7.60156 13.8086 7.51953 13.8906C7.4375 13.9727 7.32812 14 7.21875 14H6.78125C6.64453 14 6.53516 13.9727 6.45312 13.8906C6.37109 13.8086 6.34375 13.6992 6.34375 13.5625V11.375H5.6875C5.55078 11.375 5.44141 11.3477 5.35938 11.2656C5.27734 11.1836 5.25 11.0742 5.25 10.9375V10.0625C5.25 9.95312 5.27734 9.84375 5.35938 9.76172C5.44141 9.67969 5.55078 9.625 5.6875 9.625H6.34375V0.4375C6.34375 0.328125 6.37109 0.21875 6.45312 0.136719C6.53516 0.0546875 6.64453 0 6.78125 0H7.21875C7.32812 0 7.4375 0.0546875 7.51953 0.136719C7.60156 0.21875 7.65625 0.328125 7.65625 0.4375V9.625H8.3125ZM3.9375 2.625C4.04688 2.625 4.15625 2.67969 4.23828 2.76172C4.32031 2.84375 4.375 2.95312 4.375 3.0625V3.9375C4.375 4.07422 4.32031 4.18359 4.23828 4.26562C4.15625 4.34766 4.04688 4.375 3.9375 4.375H3.28125V13.5625C3.28125 13.6992 3.22656 13.8086 3.14453 13.8906C3.0625 13.9727 2.95312 14 2.84375 14H2.40625C2.26953 14 2.16016 13.9727 2.07812 13.8906C1.99609 13.8086 1.96875 13.6992 1.96875 13.5625V4.375H1.3125C1.17578 4.375 1.06641 4.34766 0.984375 4.26562C0.902344 4.18359 0.875 4.07422 0.875 3.9375V3.0625C0.875 2.95312 0.902344 2.84375 0.984375 2.76172C1.06641 2.67969 1.17578 2.625 1.3125 2.625H1.96875V0.4375C1.96875 0.328125 1.99609 0.21875 2.07812 0.136719C2.16016 0.0546875 2.26953 0 2.40625 0H2.84375C2.95312 0 3.0625 0.0546875 3.14453 0.136719C3.22656 0.21875 3.28125 0.328125 3.28125 0.4375V2.625H3.9375ZM12.6875 6.125C12.7969 6.125 12.9062 6.17969 12.9883 6.26172C13.0703 6.34375 13.125 6.45312 13.125 6.5625V7.4375C13.125 7.57422 13.0703 7.68359 12.9883 7.76562C12.9062 7.84766 12.7969 7.875 12.6875 7.875H12.0312V13.5625C12.0312 13.6992 11.9766 13.8086 11.8945 13.8906C11.8125 13.9727 11.7031 14 11.5938 14H11.1562C11.0195 14 10.9102 13.9727 10.8281 13.8906C10.7461 13.8086 10.7188 13.6992 10.7188 13.5625V7.875H10.0625C9.92578 7.875 9.81641 7.84766 9.73438 7.76562C9.65234 7.68359 9.625 7.57422 9.625 7.4375V6.5625C9.625 6.45312 9.65234 6.34375 9.73438 6.26172C9.81641 6.17969 9.92578 6.125 10.0625 6.125H10.7188V0.4375C10.7188 0.328125 10.7461 0.21875 10.8281 0.136719C10.9102 0.0546875 11.0195 0 11.1562 0H11.5938C11.7031 0 11.8125 0.0546875 11.8945 0.136719C11.9766 0.21875 12.0312 0.328125 12.0312 0.4375V6.125H12.6875Z",
        fill: "#0169B2"
      }))
    }));
  };

  return /*#__PURE__*/_jsx(Box, {
    children: /*#__PURE__*/_jsxs(Box, {
      ref: ref,
      children: [!iconMobile && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'inline-block',
          '& .active': {
            color: colors.secondary.bandaiNamcoBlue,
            border: `1px solid ${colors.secondary.bandaiNamcoBlue}`
          }
        },
        onClick: () => {
          triggerClick(label);
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p7",
          color: colors.primary.bandaiNamcoBlack,
          className: pillActive ? 'active' : 'inactive',
          sx: {
            cursor: 'pointer',
            transition: 'all .4s',
            padding: {
              md: '12px 32px',
              xs: '11.5px 32px'
            },
            border: `1px solid ${colors.neutral.neutral5}`,
            borderRadius: '60px',
            whiteSpace: "nowrap",
            '&:hover': {
              color: colors.secondary.bandaiNamcoBlue,
              border: `1px solid ${colors.secondary.bandaiNamcoBlue}`
            }
          },
          children: label
        })
      }), iconMobile && numberFilter === 0 && /*#__PURE__*/_jsx(Box, {
        className: pillActive ? 'active' : 'inactive',
        onClick: () => {
          setPillActive(!pillActive);
        },
        sx: {
          width: isMobile ? '46px' : '77px',
          height: '46px',
          border: `1px solid ${colors.neutral.neutral5}`,
          borderRadius: isMobile ? '100%' : '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all .4s',
          '&:hover': {
            border: `1px solid ${colors.secondary.bandaiNamcoBlue}`
          },
          '&.active': {
            color: colors.secondary.bandaiNamcoBlue,
            border: `1px solid ${colors.secondary.bandaiNamcoBlue}`
          }
        },
        children: /*#__PURE__*/_jsx(IConFilter, {})
      }), iconMobile && numberFilter > 0 && /*#__PURE__*/_jsxs(Box, {
        sx: {
          borderRadius: '60px',
          padding: '11.5px 24px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(1, 105, 178, 0.1)',
          border: `1px solid ${colors.secondary.bandaiNamcoBlue}`,
          '&:hover': {
            border: `1px solid ${colors.secondary.bandaiNamcoBlue}`
          },
          '&.active': {
            color: colors.secondary.bandaiNamcoBlue,
            border: `1px solid ${colors.secondary.bandaiNamcoBlue}`
          }
        },
        children: [/*#__PURE__*/_jsx(IConFilterActive, {}), /*#__PURE__*/_jsx(Typography, {
          variant: "p7",
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            paddingLeft: '6px',
            color: colors.secondary.bandaiNamcoBlue
          },
          children: numberFilter
        })]
      }), _Box || (_Box = /*#__PURE__*/_jsx(Box, {}))]
    })
  });
});
export default Pills;