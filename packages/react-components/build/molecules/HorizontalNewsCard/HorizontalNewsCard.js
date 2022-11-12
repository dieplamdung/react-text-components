// import modules
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags"; // Types

import { convertCustomTagForFilter } from "../../utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const HorizontalNewsCard = props => {
  const {
    mainImage = '',
    title,
    tags = [],
    date,
    linkHref = '/',
    nextImage,
    hrefTag = ""
  } = props;
  const IMG_ERROR = "https://images.ctfassets.net/hnoi7ctzfs57/1Flq5y1eK7lSIaYUx3FmQE/5a8f5b56e795dddbdfb4c2dff2bf47ad/placeholder.webp";
  const [urlImage, setUrlImage] = useState("");
  useEffect(() => {
    setUrlImage(mainImage);
  }, [mainImage]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: 'flex'
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        width: {
          xs: '110px',
          md: '357px'
        },
        transform: 'rotate(0)',
        flex: {
          xs: '0 0 110px',
          md: '0 0 357px'
        },
        height: {
          xs: '100px',
          md: '250px'
        },
        borderRadius: '10px',
        overflow: "hidden",
        '& img': {
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          width: '100%',
          height: '100%',
          transform: "scale(1)",
          transition: "all 0.5s",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: linkHref,
        sx: {
          width: "100%",
          height: "100%",
          "& span": {
            width: "100% !important",
            height: "100% !important"
          }
        },
        children: typeof nextImage === 'function' ? nextImage(urlImage, 357, 250) : /*#__PURE__*/_jsx("img", {
          src: urlImage,
          alt: title != null ? title : '',
          onError: () => setUrlImage(IMG_ERROR)
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: {
          xs: '12px',
          md: '48px'
        }
      },
      children: [!!(tags != null && tags.length) && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          width: "100%",
          flexWrap: "wrap"
        },
        children: tags == null ? void 0 : tags.map((tag, idx) => {
          var _tag$color;

          return /*#__PURE__*/_jsx(Box, {
            sx: {
              marginRight: '4px'
            },
            children: /*#__PURE__*/_jsx(Link, {
              href: `${hrefTag}?tag=${convertCustomTagForFilter(tag.title)}`,
              sx: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/_jsx(Tags, {
                title: tag.title,
                color: (_tag$color = tag.color) != null ? _tag$color : colors.secondary.bandaiNamcoYellow
              })
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: '557px',
          marginTop: {
            xs: '8px',
            md: '16px'
          },
          '& div': {
            WebkitLineClamp: {
              xs: 2,
              md: 3
            },
            lineHeight: {
              xs: "20px",
              md: "30px"
            },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            height: {
              xs: '40px',
              md: '91px'
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
            color: colors.primary.bandaiNamcoBlack,
            sx: {
              wordBreak: "break-word"
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: title
            })
          })
        })
      }), !!date && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '12px',
            md: '35px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p9",
          color: colors.neutral.neutral2,
          sx: {
            fontWeight: "600"
          },
          children: date.toUpperCase()
        })
      })]
    })]
  });
};

export default /*#__PURE__*/React.memo(HorizontalNewsCard);