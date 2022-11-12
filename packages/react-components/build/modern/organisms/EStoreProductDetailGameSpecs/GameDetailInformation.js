// Modules
import { Box } from '@mui/material';
import React from 'react';
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const GameDetailInformation = props => {
  const {
    listProps
  } = props;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      padding: {
        xs: "0px 16px",
        md: "0px 20px"
      }
    },
    children: /*#__PURE__*/_jsx(Box, {
      sx: {
        backgroundColor: colors.neutral.neutral7,
        borderRadius: "20px"
      },
      children: /*#__PURE__*/_jsx(Container, {
        sx: {
          padding: {
            xs: "22px 24px",
            md: "50px 24px",
            lg: "100px 24px"
          },
          display: "flex",
          justifyContent: "center"
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            maxWidth: "920px"
          },
          children: /*#__PURE__*/_jsxs(Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row"
              },
              justifyContent: "space-between"
            },
            children: [/*#__PURE__*/_jsx(Box, {
              sx: {
                width: {
                  xs: "100%",
                  md: "50%"
                },
                maxWidth: "357px",
                marginRight: {
                  xs: "0px",
                  md: "50px"
                }
              },
              children: listProps.map((item, index) => {
                if (index < 3) {
                  return /*#__PURE__*/_jsxs(Box, {
                    sx: {
                      position: "relative",
                      paddingBottom: {
                        xs: "16px",
                        md: "28px"
                      },
                      paddingTop: "16px",
                      "&:after": {
                        position: "absolute",
                        content: '" "',
                        left: "0",
                        bottom: "0",
                        borderBottom: "1px solid #DDDDDD",
                        opacity: "100%",
                        width: "100%"
                      }
                    },
                    children: [/*#__PURE__*/_jsx(Typography, {
                      variant: "p3",
                      children: item.title
                    }), /*#__PURE__*/_jsx(Typography, {
                      variant: "p6",
                      sx: {
                        color: colors.neutral.neutral2
                      },
                      children: item.detail
                    })]
                  }, index);
                }

                return null;
              })
            }), /*#__PURE__*/_jsx(Box, {
              sx: {
                width: {
                  xs: "100%",
                  md: "50%"
                },
                maxWidth: "357px"
              },
              children: listProps.map((item, index) => {
                if (index > 2) {
                  return /*#__PURE__*/_jsxs(Box, {
                    sx: {
                      position: "relative",
                      paddingBottom: {
                        xs: "16px",
                        md: "28px"
                      },
                      paddingTop: "16px",
                      "&:after": {
                        position: "absolute",
                        content: '" "',
                        left: "0",
                        bottom: "0",
                        borderBottom: "1px solid #DDDDDD",
                        opacity: "100%",
                        width: "100%"
                      },
                      "&:last-child": {
                        "&:after": {
                          display: {
                            xs: "none",
                            md: "flex"
                          }
                        }
                      }
                    },
                    children: [/*#__PURE__*/_jsx(Typography, {
                      variant: "p3",
                      children: item.title
                    }), /*#__PURE__*/_jsx(Typography, {
                      variant: "p6",
                      sx: {
                        color: colors.neutral.neutral2
                      },
                      children: item.detail
                    })]
                  }, index);
                }

                return null;
              })
            })]
          })
        })
      })
    })
  });
};

export default GameDetailInformation;