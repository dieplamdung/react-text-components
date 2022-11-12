"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _EditionHeaderItem = _interopRequireDefault(require("./EditionHeaderItem"));

var _EditionContentItem = _interopRequireDefault(require("./EditionContentItem"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const EStoreProductDetailCompareEditions = ({
  editionHeaderList = [],
  onClickBuyEdition,
  labelButton,
  listEditionContentItem,
  titleCompareEdition
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: {
        xs: "24px",
        md: "34px"
      }
    },
    className: "content-compare-edition",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          padding: {
            xs: "0px 16px",
            md: "0px"
          },
          marginBottom: {
            xs: "24px",
            md: "34px"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "100%",
            position: "relative",
            "&::before": {
              position: "absolute",
              content: "' '",
              width: "100%",
              left: "0px",
              top: "0px",
              borderBottom: "1px solid #C1C1C1",
              opacity: "0.5"
            }
          }
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Accordion, {
      sx: {
        boxShadow: 'none',
        minHeight: 'unset',
        margin: "0px !important",
        backgroundColor: 'transparent',
        "&:before": {
          display: "none"
        },
        '& .MuiAccordionSummary-root': {
          minHeight: 'unset',
          margin: '0px',
          padding: '0px'
        },
        '& .MuiAccordionSummary-content': {
          margin: '0px'
        },
        '& .Mui-expanded': {
          minHeight: 'unset !important',
          '& .MuiAccordionSummary-content': {
            minHeight: 'unset',
            margin: '0px'
          }
        }
      },
      defaultExpanded: false,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            padding: {
              xs: "0px 16px",
              md: "0px"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionSummary, {
            expandIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore.default, {
              sx: {
                fill: _colors.default.primary.bandaiNamcoBlack
              }
            }),
            "aria-controls": "panel1a-content",
            id: "panel1a-header",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "h5",
              children: titleCompareEdition
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        sx: {
          display: {
            xs: "none",
            lg: "flex"
          },
          paddingTop: {
            xs: "40px",
            md: "74px"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionDetails, {
          sx: {
            padding: "0px",
            width: "100%"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: "column"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                display: "flex",
                width: "100%",
                gap: "16px",
                marginBottom: "10px"
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  flex: 1,
                  minWidth: "140px"
                }
              }), !!(editionHeaderList != null && editionHeaderList.length) && editionHeaderList.map((item, index) => {
                return /*#__PURE__*/(0, _react.createElement)(_EditionHeaderItem.default, (0, _extends2.default)({}, item, {
                  labelButton: labelButton,
                  key: index,
                  onClickBuy: onClickBuyEdition
                }));
              })]
            }), !!(listEditionContentItem != null && listEditionContentItem.length) && listEditionContentItem.map((item, index) => {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  background: index % 2 === 0 ? _colors.default.neutral.neutral8 : _colors.default.primary.bandaiNamcoWhite
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditionContentItem.default, (0, _extends2.default)({}, item))
              }, index);
            })]
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: {
            xs: "flex",
            lg: "none"
          },
          paddingTop: {
            xs: "40px",
            md: "74px"
          },
          width: "100%",
          overflow: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "flex",
            padding: {
              xs: "0px 32px",
              md: "0px 48px",
              lg: "0px"
            },
            minWidth: {
              xs: "852px",
              md: "982px"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionDetails, {
            sx: {
              padding: "0px",
              width: "100%"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                width: "100%",
                display: "flex",
                flexDirection: "column"
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                sx: {
                  display: "flex",
                  width: "100%",
                  gap: "16px",
                  marginBottom: "10px"
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  sx: {
                    flex: 1,
                    minWidth: {
                      xs: "140px",
                      md: "250px"
                    }
                  }
                }), !!(editionHeaderList != null && editionHeaderList.length) && editionHeaderList.map((item, index) => {
                  return /*#__PURE__*/(0, _react.createElement)(_EditionHeaderItem.default, (0, _extends2.default)({}, item, {
                    labelButton: labelButton,
                    key: index,
                    onClickBuy: onClickBuyEdition
                  }));
                })]
              }), !!(listEditionContentItem != null && listEditionContentItem.length) && listEditionContentItem.map((item, index) => {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  sx: {
                    width: "100%",
                    background: index % 2 === 0 ? _colors.default.neutral.neutral8 : _colors.default.primary.bandaiNamcoWhite
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditionContentItem.default, (0, _extends2.default)({}, item))
                }, index);
              })]
            })
          })
        })
      })]
    })]
  });
};

var _default = EStoreProductDetailCompareEditions;
exports.default = _default;