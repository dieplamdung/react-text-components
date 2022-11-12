import React from 'react';
import { IconNextSlide } from "../../atoms/Icon";
import { Box } from '@mui/material';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function MenuUser(props) {
  var handleOpenMenuUserInfo = props.handleOpenMenuUserInfo,
      avatarUrl = props.avatarUrl,
      name = props.name;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return handleOpenMenuUserInfo();
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          '& img': {
            width: '55px',
            height: '55px',
            borderRadius: '100%',
            overflow: 'hidden',
            objectFit: 'cover'
          }
        },
        children: /*#__PURE__*/_jsx("img", {
          src: avatarUrl != null ? avatarUrl : '',
          alt: ""
        })
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "h5",
        sx: {
          color: colors.primary.dark,
          fontSize: '20px',
          lineHeight: '26px',
          marginLeft: '16px'
        },
        children: name
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        '& svg': {
          height: '10px',
          position: 'absolute',
          right: '0px',
          top: 0,
          bottom: 0,
          margin: 'auto'
        }
      },
      children: /*#__PURE__*/_jsx(IconNextSlide, {
        htmlColor: "transparent",
        sx: {
          height: '10px'
        }
      })
    })]
  });
}

export default MenuUser;