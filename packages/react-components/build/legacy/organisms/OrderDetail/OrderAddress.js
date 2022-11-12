import { Box } from '@mui/material';
import React from 'react';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function OrderAddress(props) {
  var title = props.title,
      titleShipping = props.titleShipping,
      contentShipping = props.contentShipping,
      titleBilling = props.titleBilling,
      contentBilling = props.contentBilling;
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
        maxWidth: "540px",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row"
        }
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: {
            xs: "100%",
            md: "258px"
          }
        },
        children: [/*#__PURE__*/_jsx(Typography, {
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
            marginBottom: "8px",
            letterSpacing: "-0.2px"
          },
          children: titleShipping
        }), !!contentShipping && /*#__PURE__*/_jsx(Typography, {
          color: colors.neutral.neutral2,
          sx: {
            fontSize: {
              xs: "16px",
              md: "14px"
            },
            lineHeight: {
              xs: "22px",
              md: "20px"
            },
            fontWeight: "400",
            letterSpacing: "-0.2px",
            "& div": {
              wordBreak: "break-word"
            }
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "p",
            value: contentShipping != null ? contentShipping : ""
          })
        })]
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: {
            xs: "100%",
            md: "258px"
          },
          marginTop: {
            xs: "24px",
            md: "0px"
          }
        },
        children: [/*#__PURE__*/_jsx(Typography, {
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
            marginBottom: "8px",
            letterSpacing: "-0.2px"
          },
          children: titleBilling
        }), !!contentBilling && /*#__PURE__*/_jsx(Typography, {
          color: colors.neutral.neutral2,
          sx: {
            fontSize: {
              xs: "16px",
              md: "14px"
            },
            lineHeight: {
              xs: "22px",
              md: "20px"
            },
            fontWeight: "400",
            letterSpacing: "-0.2px",
            "& div": {
              wordBreak: "break-word"
            }
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "p",
            value: contentBilling != null ? contentBilling : ""
          })
        })]
      })]
    })]
  });
}

export default /*#__PURE__*/React.memo(OrderAddress);