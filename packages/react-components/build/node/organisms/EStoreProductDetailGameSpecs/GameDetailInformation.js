"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// Modules
const GameDetailInformation = props => {
  const {
    listProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      padding: {
        xs: "0px 16px",
        md: "0px 20px"
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        backgroundColor: _colors.default.neutral.neutral7,
        borderRadius: "20px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        sx: {
          padding: {
            xs: "22px 24px",
            md: "50px 24px",
            lg: "100px 24px"
          },
          display: "flex",
          justifyContent: "center"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            maxWidth: "920px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row"
              },
              justifyContent: "space-between"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p3",
                      children: item.title
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p6",
                      sx: {
                        color: _colors.default.neutral.neutral2
                      },
                      children: item.detail
                    })]
                  }, index);
                }

                return null;
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: {
                  xs: "100%",
                  md: "50%"
                },
                maxWidth: "357px"
              },
              children: listProps.map((item, index) => {
                if (index > 2) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p3",
                      children: item.title
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p6",
                      sx: {
                        color: _colors.default.neutral.neutral2
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

var _default = GameDetailInformation;
exports.default = _default;