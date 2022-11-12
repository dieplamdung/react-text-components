// import modules
import { Box, Grid, Link } from '@mui/material';
import React from 'react';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // import styles
// import types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var SearchByCategory = function SearchByCategory(props) {
  var _propsTending$listIte, _propsTending$listIte2;

  var title = props.title,
      listThumbnail = props.listThumbnail,
      propsTending = props.propsTending;
  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      color: colors.primary.bandaiNamcoBlack,
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "div",
        value: title
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: '24px',
          md: '40px'
        }
      },
      children: /*#__PURE__*/_jsx(Grid, {
        container: true,
        columnSpacing: "24px",
        rowSpacing: "24px",
        children: !!(listThumbnail != null && listThumbnail.length) && (listThumbnail == null ? void 0 : listThumbnail.map(function (item, idx) {
          var _item$href, _item$title;

          return /*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 6,
            md: 6,
            lg: 3,
            children: /*#__PURE__*/_jsx(Link, {
              href: (_item$href = item == null ? void 0 : item.href) != null ? _item$href : '/',
              sx: {
                textDecoration: "none",
                position: 'relative',
                overflow: 'hidden',
                "&:hover": {
                  '&  img': {
                    transform: "scale(1.2)"
                  }
                }
              },
              children: /*#__PURE__*/_jsxs(Box, {
                sx: {
                  minWidth: {
                    xs: "100%"
                  },
                  height: {
                    xs: '122px',
                    md: '156px'
                  },
                  borderRadius: '20px',
                  overflow: "hidden",
                  transform: 'rotate(0)',
                  '& img': {
                    objectFit: 'cover',
                    borderRadius: '20px',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    transition: "all 0.3s"
                  }
                },
                children: [!(item != null && item.mainImageNext) ? /*#__PURE__*/_jsx("img", {
                  src: item == null ? void 0 : item.mainImage,
                  alt: (_item$title = item == null ? void 0 : item.title) != null ? _item$title : ''
                }) : item == null ? void 0 : item.mainImageNext, /*#__PURE__*/_jsxs(Box, {
                  children: [/*#__PURE__*/_jsx(Box, {
                    sx: {
                      backgroundColor: 'rgba(5, 13, 16, 0.25)',
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      borderRadius: '20px',
                      overflow: "hidden",
                      zIndex: 1
                    }
                  }), /*#__PURE__*/_jsx(Box, {
                    sx: {
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'cnter'
                    },
                    children: /*#__PURE__*/_jsxs(Box, {
                      sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      },
                      children: [/*#__PURE__*/_jsx(Box, {
                        sx: {
                          width: '54px',
                          '& img': {
                            width: '100%',
                            display: 'block',
                            borderRadius: '0px',
                            transform: "scale(1) !important"
                          }
                        },
                        children: /*#__PURE__*/_jsx("img", {
                          src: item.icon,
                          alt: item.title
                        })
                      }), /*#__PURE__*/_jsx(Typography, {
                        variant: "p1",
                        color: colors.neutral.white,
                        children: /*#__PURE__*/_jsx(HtmlRenderer, {
                          component: "div",
                          value: item == null ? void 0 : item.title
                        })
                      })]
                    })
                  })]
                })]
              })
            })
          }, idx);
        }))
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        marginTop: {
          xs: '60px',
          md: '80px'
        }
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        color: colors.primary.bandaiNamcoBlack,
        children: /*#__PURE__*/_jsx(HtmlRenderer, {
          component: "div",
          value: propsTending == null ? void 0 : propsTending.title
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
        },
        children: !!(propsTending != null && (_propsTending$listIte = propsTending.listItems) != null && _propsTending$listIte.length) && (propsTending == null ? void 0 : (_propsTending$listIte2 = propsTending.listItems) == null ? void 0 : _propsTending$listIte2.map(function (item, idx) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              marginRight: {
                xs: '28px'
              },
              marginBottom: '20px'
            },
            children: /*#__PURE__*/_jsx(Link, {
              href: "".concat(propsTending == null ? void 0 : propsTending.locale).concat(item.href),
              sx: {
                textDecoration: 'none !important',
                position: 'relative',
                display: 'inline-block',
                '&:hover': {
                  '& p': {
                    color: colors.primary.bandaiNamcoBlack
                  },
                  '&:after': {
                    backgroundColor: colors.primary.bandaiNamcoBlack
                  }
                },
                '&:after': {
                  content: "''",
                  height: '1px',
                  width: '100%',
                  position: 'absolute',
                  bottom: {
                    xs: '-2px',
                    sm: '1px'
                  },
                  backgroundColor: colors.neutral.neutral2
                }
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p5",
                color: colors.neutral.neutral2,
                sx: {
                  transition: 'all .4s'
                },
                children: /*#__PURE__*/_jsx(HtmlRenderer, {
                  component: "div",
                  value: item.title
                })
              })
            })
          }, idx);
        }))
      })]
    })]
  });
};

export default SearchByCategory;