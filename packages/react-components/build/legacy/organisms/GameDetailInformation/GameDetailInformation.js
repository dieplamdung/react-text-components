// Modules
import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var GameDetailInformation = function GameDetailInformation(props) {
  var listProps = props.listProps,
      title = props.title,
      id = props.id;
  var refContainer = useRef(); // const refIsShow = useRef<any>();
  // dispatchEvent event send id to sub navigation

  useEffect(function () {
    if (typeof window !== "undefined") {
      var container = refContainer.current; // const height = window.innerHeight;

      window.addEventListener("scroll", function () {
        if (container) {
          var _container$getBoundin = container.getBoundingClientRect(),
              bottom = _container$getBoundin.bottom,
              top = _container$getBoundin.top;

          var newBottom = Math.floor(bottom);
          var newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            // refIsShow.current = true;
            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event("".concat(id)));
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //   refIsShow.current = false;
          //   window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return function () {
      window.removeEventListener("".concat(id), function () {});
      window.removeEventListener("scroll", function () {});
    };
  }, [id]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      padding: {
        xs: "0px 16px",
        md: "0px 20px"
      }
    },
    id: id,
    ref: refContainer,
    children: /*#__PURE__*/_jsx(Box, {
      sx: {
        backgroundColor: colors.neutral.neutral7,
        borderRadius: "20px",
        padding: {
          xs: "0px 8px",
          lg: "0px"
        }
      },
      children: /*#__PURE__*/_jsx(Container, {
        sx: {
          paddingTop: {
            xs: "22px",
            md: "100px"
          },
          paddingBottom: {
            xs: "22px",
            md: "100px"
          }
        },
        children: /*#__PURE__*/_jsxs(Box, {
          children: [title && /*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            sx: {
              marginBottom: '40px'
            },
            children: title
          }), /*#__PURE__*/_jsxs(Box, {
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
              children: listProps.map(function (item, index) {
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
              children: listProps.map(function (item, index) {
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
          })]
        })
      })
    })
  });
};

export default GameDetailInformation;