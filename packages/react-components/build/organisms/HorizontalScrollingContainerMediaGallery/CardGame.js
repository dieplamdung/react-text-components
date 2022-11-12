// import Modules
import { Box, Link } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography"; // import Styles

import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const CardGame = ({
  nextImage,
  title,
  image,
  href,
  isHomePage,
  index = 0
}) => {
  const handleActiveLink = e => {
    var _e$target, _e$target$firstChild;

    (_e$target = e.target) == null ? void 0 : (_e$target$firstChild = _e$target.firstChild) == null ? void 0 : _e$target$firstChild.click();
  };

  const isEven = index % 2 === 0;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: {
        xs: isHomePage ? "171px" : `${isEven ? "171px" : "100px"}`,
        md: isHomePage ? "358px" : `${isEven ? "358px" : "209px"}`
      },
      height: {
        xs: "100px",
        md: "209px"
      },
      borderRadius: {
        xs: "10px",
        lg: "20px"
      },
      background: "#00000033",
      position: "relative",
      overflow: "hidden",
      transform: 'rotate(0)',
      "&:hover": {
        "& img": {
          transform: "scale(1.2)"
        }
      },
      "& span": {
        height: "100% !important",
        width: "100% !important"
      },
      "& img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        transition: "all 0.3s"
      }
    },
    children: [href && /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: "1",
        background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 37.8%)',
        opacity: 0.5
      },
      onClick: handleActiveLink,
      children: /*#__PURE__*/_jsx(Link, {
        href: href,
        sx: {
          opacity: "0"
        }
      })
    }), nextImage || /*#__PURE__*/_jsx("img", {
      src: image,
      alt: title || ""
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "p1",
      color: colors.primary.bandaiNamcoWhite,
      sx: {
        position: "absolute",
        left: {
          xs: "8px",
          lg: "26px"
        },
        bottom: {
          xs: "12px",
          lg: "22px"
        },
        zIndex: 2,
        maxWidth: "80%",
        WebkitLineClamp: 1,
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        wordBreak: "break-word",
        fontSize: {
          xs: '12px',
          lg: '20px'
        },
        lineHeight: {
          xs: '18px',
          lg: '26px'
        }
      },
      children: title
    })]
  });
};

export default CardGame;