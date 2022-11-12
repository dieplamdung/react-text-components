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
  const {
    mainImageNext = '',
    mainImage = '',
    title,
    tags,
    date,
    linkHref = '/',
    description = '',
    variant = 'horizontal',
    onScrolling = false,
    button,
    sx = {},
    isLayoutBlog = false,
    language,
    hrefTag = "/",
    trailers,
    setOpenTrailerPopup = () => {}
  } = props;
  omit(props, ['variant']);
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('lg'));
  const isMobileSmallest = useMediaQuery('(max-width:321px)', {
    noSsr: true
  });
  const isMobileBigger = useMediaQuery('(min-width:322px)', {
    noSsr: true
  }); // const isMobileXS = useMediaQuery((themes: any) => themes.breakpoints.up('xs'));

  const isMobileTablet = useMediaQuery(themes => themes.breakpoints.up('sm')); // const isDesktop = useMediaQuery((themes: any) => themes.breakpoints.up('lg'));

  const refT = useRef("");
  const refTimeOut = useRef(""); // const handleDetectMaxHeight = () => {
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

  const handleWidthHeight = () => {
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const T = refT.current;
      T.style.height = `auto`;

      if (T) {
        const {
          height
        } = T.getBoundingClientRect();
        T.style.height = `${height + (isMobile ? 3 : 5)}px`;
      }

      ;
      window.addEventListener("resize", () => {
        T.style.height = `auto`;

        if (refTimeOut.current) {
          window.clearTimeout(refTimeOut.current);
        }

        refTimeOut.current = setTimeout(() => {
          refTimeOut.current = undefined;
          const {
            height
          } = T.getBoundingClientRect();
          T.style.height = `${height + (isMobile ? 3 : 5)}px`;
        }, 100);
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
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
          alt: title ?? ''
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
        children: tags?.map((tag, idx) => /*#__PURE__*/_jsx(Box, {
          sx: {
            display: 'flex',
            width: "fit-content",
            marginRight: "4px",
            marginTop: "4px"
          },
          children: /*#__PURE__*/_jsx(Link, {
            href: `${hrefTag}?tag=${convertCustomTagForFilter(tag?.title || "")}`,
            sx: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/_jsx(Tags, {
              title: tag?.title?.toUpperCase(),
              color: tag.color ?? ''
            })
          })
        }, tag.title + idx))
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
            border: `1px solid ${colors.neutral.neutral2}`
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
        children: tags?.map((tag, index) => {
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
          children: date?.toUpperCase()
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
          variant: button[0]?.variant,
          target: button[0]?.target,
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
            children: button[0]?.label
          })
        })), button[1] && !!trailers?.length && /*#__PURE__*/_jsx(Button, {
          variant: button[1]?.variant,
          target: button[1]?.target,
          onClick: () => setOpenTrailerPopup(true),
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
            children: button[1]?.label
          })
        })]
      })]
    })]
  });
}

export default /*#__PURE__*/React.memo(FeaturedNewsCard);