import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import Container from "../../atoms/Container";
import EditionHeaderItem from "./EditionHeaderItem";
import EditionContentItem from "./EditionContentItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";

const EStoreProductDetailCompareEditions = ({
  editionHeaderList = [],
  onClickBuyEdition,
  labelButton,
  listEditionContentItem,
  titleCompareEdition
}) => {
  return /*#__PURE__*/_jsxs(Box, {
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
    children: [/*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
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
        children: /*#__PURE__*/_jsx(Box, {
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
    }), /*#__PURE__*/_jsxs(Accordion, {
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
      children: [/*#__PURE__*/_jsx(Container, {
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            padding: {
              xs: "0px 16px",
              md: "0px"
            }
          },
          children: /*#__PURE__*/_jsx(AccordionSummary, {
            expandIcon: /*#__PURE__*/_jsx(ExpandMoreIcon, {
              sx: {
                fill: colors.primary.bandaiNamcoBlack
              }
            }),
            "aria-controls": "panel1a-content",
            id: "panel1a-header",
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "h5",
              children: titleCompareEdition
            })
          })
        })
      }), /*#__PURE__*/_jsx(Container, {
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
        children: /*#__PURE__*/_jsx(AccordionDetails, {
          sx: {
            padding: "0px",
            width: "100%"
          },
          children: /*#__PURE__*/_jsxs(Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: "column"
            },
            children: [/*#__PURE__*/_jsxs(Box, {
              sx: {
                display: "flex",
                width: "100%",
                gap: "16px",
                marginBottom: "10px"
              },
              children: [/*#__PURE__*/_jsx(Box, {
                sx: {
                  flex: 1,
                  minWidth: "140px"
                }
              }), !!(editionHeaderList != null && editionHeaderList.length) && editionHeaderList.map((item, index) => {
                return /*#__PURE__*/_createElement(EditionHeaderItem, _extends({}, item, {
                  labelButton: labelButton,
                  key: index,
                  onClickBuy: onClickBuyEdition
                }));
              })]
            }), !!(listEditionContentItem != null && listEditionContentItem.length) && listEditionContentItem.map((item, index) => {
              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  background: index % 2 === 0 ? colors.neutral.neutral8 : colors.primary.bandaiNamcoWhite
                },
                children: /*#__PURE__*/_jsx(EditionContentItem, _extends({}, item))
              }, index);
            })]
          })
        })
      }), /*#__PURE__*/_jsx(Box, {
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
        children: /*#__PURE__*/_jsx(Box, {
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
          children: /*#__PURE__*/_jsx(AccordionDetails, {
            sx: {
              padding: "0px",
              width: "100%"
            },
            children: /*#__PURE__*/_jsxs(Box, {
              sx: {
                width: "100%",
                display: "flex",
                flexDirection: "column"
              },
              children: [/*#__PURE__*/_jsxs(Box, {
                sx: {
                  display: "flex",
                  width: "100%",
                  gap: "16px",
                  marginBottom: "10px"
                },
                children: [/*#__PURE__*/_jsx(Box, {
                  sx: {
                    flex: 1,
                    minWidth: {
                      xs: "140px",
                      md: "250px"
                    }
                  }
                }), !!(editionHeaderList != null && editionHeaderList.length) && editionHeaderList.map((item, index) => {
                  return /*#__PURE__*/_createElement(EditionHeaderItem, _extends({}, item, {
                    labelButton: labelButton,
                    key: index,
                    onClickBuy: onClickBuyEdition
                  }));
                })]
              }), !!(listEditionContentItem != null && listEditionContentItem.length) && listEditionContentItem.map((item, index) => {
                return /*#__PURE__*/_jsx(Box, {
                  sx: {
                    width: "100%",
                    background: index % 2 === 0 ? colors.neutral.neutral8 : colors.primary.bandaiNamcoWhite
                  },
                  children: /*#__PURE__*/_jsx(EditionContentItem, _extends({}, item))
                }, index);
              })]
            })
          })
        })
      })]
    })]
  });
};

export default EStoreProductDetailCompareEditions;