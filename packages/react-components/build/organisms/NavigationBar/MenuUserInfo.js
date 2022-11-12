var _IconClose;

import { Box } from '@mui/material';
import React from 'react';
import { IconClose, IconPrevSlide } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// React.forwardRef((props: ContainerProps, ref: any) 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuUserInfo = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    handleCloseMenuUserInfo,
    handleCloseAllMenu,
    account,
    details,
    orders,
    address,
    logout,
    isRelative = false,
    isShow = false
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      backgroundColor: colors.primary.bandaiNamcoWhite,
      position: "fixed",
      top: "0px",
      bottom: "0px",
      width: '92.2%',
      marginRight: "32px",
      minHeight: '100vh',
      paddingLeft: '32px',
      paddingRight: '32px',
      overflow: 'auto',
      zIndex: '9999',
      transition: '.4s ease-in-out',
      left: isShow ? "0px" : `calc(-100vw)`
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '32px 0 49px 0',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/_jsx(IconPrevSlide, {
        htmlColor: "transparent",
        sx: {
          width: '15px'
        },
        onClick: () => handleCloseMenuUserInfo()
      }), /*#__PURE__*/_jsx(Box, {
        onClick: () => handleCloseAllMenu(),
        children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h1",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
          fontSize: '32px',
          lineHeight: ' 38px'
        },
        children: account
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "h3",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
          fontSize: '24px',
          marginTop: '34px',
          lineHeight: ' 30px'
        },
        children: details != null ? details : 'Details'
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "h3",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
          fontSize: '24px',
          marginTop: '34px',
          lineHeight: ' 30px'
        },
        children: orders != null ? orders : 'Orders'
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "h3",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
          fontSize: '24px',
          marginTop: '34px',
          lineHeight: ' 30px'
        },
        children: address != null ? address : 'Address'
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        position: 'absolute',
        bottom: '29px',
        width: 'calc(100% - 64px)',
        marginTop: isRelative ? '200px' : '0',
        left: '32px',
        right: '32px',
        borderTop: `1px solid ${colors.neutral.neutral5}`,
        paddingTop: '24px'
      },
      children: /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            cursor: 'pointer'
          },
          children: logout != null ? logout : 'Logout'
        })
      })
    })]
  });
});
export default MenuUserInfo;