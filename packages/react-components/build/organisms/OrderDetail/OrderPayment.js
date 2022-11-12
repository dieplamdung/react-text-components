var _IconVisa, _IconVisa2;

import { Box } from '@mui/material';
import React from 'react';
import { IconVisa } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function OrderPayment(props) {
  const {
    title,
    titlePayment,
    value,
    titleIcon
  } = props;

  const renderIcon = () => {
    switch (titleIcon) {
      case "visa":
        return _IconVisa || (_IconVisa = /*#__PURE__*/_jsx(IconVisa, {}));

      default:
        return _IconVisa2 || (_IconVisa2 = /*#__PURE__*/_jsx(IconVisa, {}));
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: {
        xs: "32px 0px",
        md: "48px 0px"
      },
      position: "relative",
      "&:before": {
        content: "' '",
        position: "absolute",
        width: "100%",
        bottom: "0px",
        left: "0px",
        borderBottom: "1px solid #DDDDDD",
        opacity: "0.5"
      }
    },
    children: [/*#__PURE__*/_jsx(Typography, {
      color: colors.primary.bandaiNamcoBlack,
      sx: {
        fontSize: {
          xs: "20px",
          md: "26px"
        },
        lineHeight: {
          xs: "26px",
          md: "32px"
        },
        fontWeight: "700",
        marginBottom: {
          xs: "24px",
          md: "28px"
        }
      },
      children: title
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%"
        },
        children: /*#__PURE__*/_jsx(Typography, {
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            fontSize: {
              xs: "16px",
              md: "18px"
            },
            lineHeight: {
              xs: "22px",
              md: "24px"
            },
            fontWeight: "700",
            letterSpacing: "-0.2px"
          },
          children: titlePayment
        })
      }), renderIcon(), /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "22px",
          whiteSpace: "nowrap",
          marginLeft: "4px"
        },
        children: value
      })]
    })]
  });
}

export default /*#__PURE__*/React.memo(OrderPayment);