// Modules
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useRef } from 'react';
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography"; // Styles

import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var GameShortDescription = function GameShortDescription(props) {
  var title = props.title,
      description = props.description,
      mainImage = props.mainImage,
      nextImage = props.nextImage,
      id = props.id;
  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('lg');
  });
  var refT = useRef("");
  var refTimeOut = useRef("");
  var refContainer = useRef();
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
  }, [isMobile]); // dispatchEvent event send id to sub navigation

  useEffect(function () {
    if (typeof window !== "undefined") {
      var container = refContainer.current; // const height = window.innerHeight;

      window.addEventListener("scroll", function () {
        if (container) {
          var _container$getBoundin = container.getBoundingClientRect(),
              bottom = _container$getBoundin.bottom,
              top = _container$getBoundin.top;

          var newBottom = Math.floor(bottom);
          var newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            // refIsShow.current = true;
            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event("".concat(id)));
          }
        }
      });
    }

    return function () {
      window.removeEventListener("".concat(id), function () {});
      window.removeEventListener("scroll", function () {});
    };
  }, [id]);
  return /*#__PURE__*/_jsx(Box, {
    id: id,
    ref: refContainer,
    children: /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          flexDirection: "column",
          width: "100%"
        },
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            padding: {
              xs: "0px 16px",
              md: "0px"
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "h2",
            ref: refT,
            sx: {
              padding: {
                xs: "0px",
                lg: "0px 76px",
                xl: "0px 177px"
              },
              width: "100%",
              color: colors.primary.bandaiNamcoBlack,
              letterSpacing: {
                md: "-1px",
                xs: '-0.4px'
              },
              wordBreak: 'break-word'
            },
            children: title
          })
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            maxWidth: '100%',
            width: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            margin: {
              xs: '36px 0',
              lg: '80px 0'
            },
            paddingBottom: "56.2%",
            borderRadius: {
              xs: '10px',
              md: "20px"
            },
            overflow: "hidden",
            "& span": {
              position: "absolute !important",
              top: "0px",
              left: "0px",
              width: "100% !important",
              height: "100% !important"
            },
            '& img': {
              position: "absolute",
              top: "0px",
              left: "0px",
              objectFit: 'cover',
              display: 'block',
              width: '100%',
              height: '100%',
              marginLeft: {
                xs: '0',
                lg: '0px'
              }
            }
          },
          children: nextImage || /*#__PURE__*/_jsx("img", {
            src: mainImage,
            alt: title != null ? title : ''
          })
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            gridColumn: '2/3',
            gridRow: '-2/-1',
            padding: {
              xs: '0px 16px',
              md: "0px",
              lg: '0 95px 0 474px'
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            sx: {
              color: colors.neutral.neutral2,
              paddingBottom: !isMobile ? '32.5px' : 'unset',
              wordBreak: 'break-word'
            },
            children: description
          })
        })]
      })
    })
  });
};

export default GameShortDescription;