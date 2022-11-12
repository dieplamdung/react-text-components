import { Box, Link } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import useMediaQuery from '@mui/material/useMediaQuery';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ExploreCard = function ExploreCard(_ref) {
  var title = _ref.title,
      image = _ref.image,
      alt = _ref.alt,
      href = _ref.href,
      nextImage = _ref.nextImage;
  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('lg');
  });
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        paddingBottom: "129%",
        borderRadius: {
          xs: "15px",
          md: "17px"
        },
        position: "relative",
        overflow: "hidden",
        "& a": {
          width: "100% !important",
          height: "100% !important",
          textDecoration: "none"
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: href,
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            backgroundImage: isMobile ? "url(".concat(image, ")") : "none",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "all 0.5s",
            cursor: "pointer",
            transform: 'rotate(0)',
            borderRadius: {
              xs: "15px",
              md: "17px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {
                transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "all 0.5s",
              pointerEvents: "none",
              userSelect: "none",
              borderRadius: {
                xs: "15px",
                md: "17px"
              }
            }
          },
          children: !isMobile && (nextImage || /*#__PURE__*/_jsx("img", {
            src: image,
            alt: alt || ""
          }))
        })
      })
    }), /*#__PURE__*/_jsx(Link, {
      href: href,
      sx: {
        textDecoration: "none",
        paddingTop: "12px"
      },
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "p5",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          height: {
            xs: "40px",
            md: "52px"
          },
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          wordBreak: "break-word"
        },
        children: title
      })
    })]
  });
};

export default /*#__PURE__*/React.memo(ExploreCard);