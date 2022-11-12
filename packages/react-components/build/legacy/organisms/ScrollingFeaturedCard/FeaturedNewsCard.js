import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useRef } from 'react';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import omit from 'lodash/omit';
import HtmlRenderer from "../../atoms/HtmlRenderer"; // Types

import Button from "../../atoms/Button";
import { Box, useMediaQuery, Link } from '@mui/material';
import { convertCustomTagForFilter } from "../../utils"; // define function

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function FeaturedNewsCard(props) {
  var _button$, _button$2, _button$3, _button$4, _button$5, _button$6;

  var _props$mainImageNext = props.mainImageNext,
      mainImageNext = _props$mainImageNext === void 0 ? '' : _props$mainImageNext,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      title = props.title,
      tags = props.tags,
      date = props.date,
      _props$linkHref = props.linkHref,
      linkHref = _props$linkHref === void 0 ? '/' : _props$linkHref,
      _props$description = props.description,
      description = _props$description === void 0 ? '' : _props$description,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'horizontal' : _props$variant,
      _props$onScrolling = props.onScrolling,
      onScrolling = _props$onScrolling === void 0 ? false : _props$onScrolling,
      button = props.button,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      _props$isLayoutBlog = props.isLayoutBlog,
      isLayoutBlog = _props$isLayoutBlog === void 0 ? false : _props$isLayoutBlog,
      language = props.language,
      _props$hrefTag = props.hrefTag,
      hrefTag = _props$hrefTag === void 0 ? "/" : _props$hrefTag,
      trailers = props.trailers,
      _props$setOpenTrailer = props.setOpenTrailerPopup,
      setOpenTrailerPopup = _props$setOpenTrailer === void 0 ? function () {} : _props$setOpenTrailer;
  omit(props, ['variant']);
  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('lg');
  });
  var isMobileSmallest = useMediaQuery('(max-width:321px)', {
    noSsr: true
  });
  var isMobileBigger = useMediaQuery('(min-width:322px)', {
    noSsr: true
  }); // const isMobileXS = useMediaQuery((themes: any) => themes.breakpoints.up('xs'));

  var isMobileTablet = useMediaQuery(function (themes) {
    return themes.breakpoints.up('sm');
  }); // const isDesktop = useMediaQuery((themes: any) => themes.breakpoints.up('lg'));

  var refT = useRef("");
  var refTimeOut = useRef(""); // const handleDetectMaxHeight = () => {
  // maxHeight: {
  //   xs: variant === 'vertical' ? '311px' : '200px',
  //   sm: variant === 'vertical' ? '311px' : '200px',
  //   lg: variant === 'vertical' ? '306px' : '488px',
  // },
  //   if (variant === 'vertical') {
  //     if (isMobileSmallest) {
  //       return '251px'
  //     }
  //     if (isMobileBigger) {
  //       return '311px'
  //     }
  //   } else {
  //     if (isDesktop) {
  //       return '488px'
  //     } if (isMobileXS) {
  //       return ' 200px'
  //     }
  //   }
  // }
  // eslint-disable-next-line consistent-return

  var handleWidthHeight = function handleWidthHeight() {
    // width: onScrolling ? {
    //   xs: "311px",
    //   md: "511px"
    // } : "100%",
    if (onScrolling) {
      if (isMobileSmallest) {
        return '251px';
      }

      if (isMobileTablet) {
        return '511px';
      }

      if (isMobileBigger) {
        return '311px';
      }
    } else {
      return '100%';
    }
  };

  useEffect(function () {
    if (typeof window !== "undefined") {
      var T = refT.current;
      T.style.height = "auto";

      if (T) {
        var _T$getBoundingClientR = T.getBoundingClientRect(),
            height = _T$getBoundingClientR.height;

        T.style.height = "".concat(height + (isMobile ? 3 : 5), "px");
      }

      ;
      window.addEventListener("resize", function () {
        T.style.height = "auto";

        if (refTimeOut.current) {
          window.clearTimeout(refTimeOut.current);
        }

        refTimeOut.current = setTimeout(function () {
          refTimeOut.current = undefined;

          var _T$getBoundingClientR2 = T.getBoundingClientRect(),
              height = _T$getBoundingClientR2.height;

          T.style.height = "".concat(height + (isMobile ? 3 : 5), "px");
        }, 100);
      });
    }

    return function () {
      window.removeEventListener("resize", function () {});
    };
  }, [isMobile]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: _extends({
      display: variant === 'vertical' ? 'block' : 'flex',
      alignItems: "center",
      flexDirection: {
        xs: 'column',
        lg: 'row'
      },
      width: onScrolling ? {
        md: "100%",
        lg: "810px",
        xl: "1043px"
      } : "100%",
      mixWidth: onScrolling ? {
        md: "100%",
        lg: "810px",
        xl: "1043px"
      } : "auto",
      overflow: "hidden"
    }, sx),
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        // maxHeight: handleDetectMaxHeight(),
        maxHeight: {
          xs: variant === 'vertical' ? '174px' : '200px',
          sm: variant === 'vertical' ? '306px' : '200px',
          lg: variant === 'vertical' ? '306px' : '488px'
        },
        transform: 'rotate(0)',
        minWidth: handleWidthHeight(),
        // minWidth: onScrolling ? {
        //   xs: "311px",
        //   md: "511px"
        // } : "auto",
        borderRadius: "10px",
        lineHeight: "0px",
        overflow: "hidden",
        "& a": {
          width: "100%",
          height: "100%"
        },
        "& span": {
          width: "100% !important",
          height: "100% !important"
        },
        '& img': {
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          width: '100%',
          height: {
            xs: variant === 'vertical' ? '174px' : '200px',
            sm: variant === 'vertical' ? '306px' : '200px',
            lg: variant === 'vertical' ? '306px' : '488px'
          },
          transform: "scale(1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: linkHref,
        sx: {
          borderRadius: "10px",
          overflow: 'hidden'
        },
        children: mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        minHeight: "130px",
        maxWidth: {
          xs: "311px",
          md: "511px"
        },
        marginLeft: {
          xs: '0',
          lg: variant === 'vertical' ? '0px' : '32px',
          xl: variant === 'vertical' ? '0px' : '48px'
        },
        marginTop: {
          xs: '20px',
          lg: variant === 'vertical' ? '24px' : '0px'
        }
      },
      children: [typeof tags[0].title === 'string' && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "-4px",
          marginBottom: '12px'
        },
        children: tags == null ? void 0 : tags.map(function (tag, idx) {
          var _tag$title, _tag$color;

          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              width: "fit-content",
              marginRight: "4px",
              marginTop: "4px"
            },
            children: /*#__PURE__*/_jsx(Link, {
              href: "".concat(hrefTag, "?tag=").concat(convertCustomTagForFilter((tag == null ? void 0 : tag.title) || "")),
              sx: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/_jsx(Tags, {
                title: tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase(),
                color: (_tag$color = tag.color) != null ? _tag$color : ''
              })
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: variant === 'vertical' ? '547px' : '474px',
          // margin: description ? '0px 0px 12px 0' : '0px',
          margin: '0px 0px 12px 0',
          '& div': {
            height: {
              xs: '52px',
              md: variant === 'vertical' ? '64px' : '169px'
            },
            display: '-webkit-box'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/_jsx(Link, {
          href: linkHref,
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "h6",
            color: colors.primary.dark,
            ref: refT,
            sx: {
              wordBreak: "break-word",
              letterSpacing: '0px',
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: {
                xs: 2,
                md: 3
              }
            },
            children: title
          })
        })
      }), !isLayoutBlog && /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: {
            xs: variant === 'vertical' ? '547px' : 'auto',
            md: variant === 'vertical' ? '474px' : 'auto'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          color: colors.neutral.neutral2,
          sx: {
            WebkitLineClamp: {
              xs: 2
            },
            height: {
              xs: '40px',
              md: '52px'
            },
            wordBreak: "break-word",
            letterSpacing: '0px',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            '& div': {
              WebkitLineClamp: {
                xs: 2 // md: variant === 'vertical' ? 2 : 3,

              },
              height: {
                xs: '40px',
                md: '52px'
              },
              wordBreak: "break-word",
              letterSpacing: '0px',
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical'
            }
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "div",
            value: description
          })
        })
      }), typeof tags[0].title !== 'string' && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: {
            xs: '18px',
            md: '24px'
          },
          gap: '12px',
          '& .bgTag': {
            backgroundColor: 'transparent',
            border: "1px solid ".concat(colors.neutral.neutral2)
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: colors.neutral.neutral2
              }
            },
            '& p': {
              color: colors.neutral.neutral2
            }
          }
        },
        children: tags == null ? void 0 : tags.map(function (tag, index) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              lineHeight: "0px"
            },
            children: tag.title
          }, index);
        })
      }), description && isLayoutBlog && /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: {
            xs: '547px',
            md: '474px'
          },
          marginTop: {
            xs: '12px',
            md: '28px'
          },
          marginBottom: {
            xs: '20px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p8",
          color: colors.neutral.neutral2,
          sx: {
            WebkitLineClamp: 4,
            height: {
              xs: '77px',
              md: '87px'
            },
            wordBreak: "break-word",
            letterSpacing: '0px',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical'
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "div",
            value: description
          })
        })
      }), !!date && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: "24px",
          marginBottom: {
            xs: '48px',
            lg: '0px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "l2",
          color: colors.neutral.neutral2,
          children: date == null ? void 0 : date.toUpperCase()
        })
      }), !!language && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '16px',
            md: '24px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "l2",
          color: colors.neutral.neutral2,
          children: language
        })
      }), button && /*#__PURE__*/_jsxs(Box, {
        className: "button-card",
        sx: {
          display: 'flex',
          width: '100%',
          marginTop: {
            md: '40px',
            xs: '28px'
          },
          gap: {
            xs: '12px',
            md: '16px'
          },
          '& button': {
            width: {
              xs: '50%',
              md: 'fit-content'
            }
          }
        },
        children: [button[0] && /*#__PURE__*/_jsx(Button, _extends({}, button[0], {
          variant: (_button$ = button[0]) == null ? void 0 : _button$.variant,
          target: (_button$2 = button[0]) == null ? void 0 : _button$2.target,
          sx: {
            width: {
              xs: "50%",
              md: "fit-content"
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            sx: {
              wordBreak: "break-word"
            },
            children: (_button$3 = button[0]) == null ? void 0 : _button$3.label
          })
        })), button[1] && !!(trailers != null && trailers.length) && /*#__PURE__*/_jsx(Button, {
          variant: (_button$4 = button[1]) == null ? void 0 : _button$4.variant,
          target: (_button$5 = button[1]) == null ? void 0 : _button$5.target,
          onClick: function onClick() {
            return setOpenTrailerPopup(true);
          },
          sx: {
            width: {
              xs: "50%",
              md: "fit-content"
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            sx: {
              wordBreak: "break-word"
            },
            children: (_button$6 = button[1]) == null ? void 0 : _button$6.label
          })
        })]
      })]
    })]
  });
}

export default /*#__PURE__*/React.memo(FeaturedNewsCard);