// import modules
import { Box, Link } from '@mui/material';
import React from 'react';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Tags from "../../atoms/Tags";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const BlogFeatureCard = props => {
  const {
    mainImageNext = '',
    description,
    mainImage = '',
    title,
    tags,
    date,
    linkHref = '/',
    hrefTag
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row'
      }
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: '601px',
        width: '100%'
      },
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: {
            xs: '100%',
            md: '601px'
          },
          minWidth: "110px",
          paddingBottom: '59.99%',
          borderRadius: '10px',
          overflow: "hidden",
          position: 'relative',
          width: '100%',
          transform: 'rotate(0)',
          '& img': {
            position: "absolute",
            objectFit: 'cover',
            borderRadius: '10px',
            display: 'block',
            width: '100%',
            height: '100%',
            transform: "scale(1)",
            transition: "all 0.5s",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            "&:hover": {
              transform: "scale(1.2)"
            }
          }
        },
        children: /*#__PURE__*/_jsx(Link, {
          href: linkHref,
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            "& span": {
              width: '100% !important',
              height: '100% !important'
            }
          },
          children: mainImageNext || /*#__PURE__*/_jsx("img", {
            src: mainImage,
            alt: title ?? ''
          })
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: {
          xs: '0px',
          md: '48px'
        },
        marginTop: {
          xs: '20px',
          md: '0px'
        }
      },
      children: [!!tags && !!tags.length && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          width: "100%",
          flexWrap: "wrap"
        },
        children: tags?.map((tag, idx) => /*#__PURE__*/_jsx(Box, {
          sx: {
            marginRight: '4px'
          },
          children: tag.title && /*#__PURE__*/_jsx(Link, {
            href: `${hrefTag}?tag=${tag?.title || ""}`,
            sx: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/_jsx(Tags, {
              title: tag?.title?.toUpperCase(),
              color: tag.color ?? colors.secondary.bandaiNamcoYellow
            })
          })
        }, tag.title + idx))
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: '557px',
          marginTop: {
            xs: '12px',
            md: '20px'
          },
          '& div': {
            WebkitLineClamp: {
              xs: 2
            },
            lineHeight: {
              md: '40px',
              xs: '26px'
            },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/_jsx(Link, {
          href: linkHref,
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "h5",
            color: colors.primary.dark,
            sx: {
              wordBreak: "break-word",
              lineHeight: {
                md: '40px',
                xs: '26px'
              }
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: title
            })
          })
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: '557px',
          marginTop: {
            xs: '18px',
            md: '28px'
          },
          '& div': {
            WebkitLineClamp: {
              xs: 2,
              md: 3
            },
            lineHeight: {
              xs: "20px",
              md: "26px"
            },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/_jsx(Link, {
          href: linkHref,
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            color: colors.neutral.neutral2,
            sx: {
              wordBreak: "break-word",
              lineHeight: {
                md: '26px',
                xs: '20px'
              }
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: description
            })
          })
        })
      }), !!date && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '24px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p9",
          color: colors.neutral.neutral2,
          children: date.toUpperCase()
        })
      })]
    })]
  });
};

export default /*#__PURE__*/React.memo(BlogFeatureCard);