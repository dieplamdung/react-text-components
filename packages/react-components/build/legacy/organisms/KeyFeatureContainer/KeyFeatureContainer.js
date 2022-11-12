import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";
import ComplexKeyFeatureCard from "../../molecules/ComplexKeyFeatureCard";
import KeyFeature from "../../molecules/KeyFeature"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var KeyFeatureContainer = function KeyFeatureContainer(_ref) {
  var id = _ref.id,
      title = _ref.title,
      _ref$onlyShowKeyFeatu = _ref.onlyShowKeyFeatureCard,
      onlyShowKeyFeatureCard = _ref$onlyShowKeyFeatu === void 0 ? false : _ref$onlyShowKeyFeatu,
      dataComplexKeyFeatureCard = _ref.dataComplexKeyFeatureCard,
      dataKeyFeatureCard = _ref.dataKeyFeatureCard;
  var refContainer = useRef(); // const refIsShow = useRef<any>();
  // dispatchEvent event send id to sub navigation

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
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //   refIsShow.current = false;
          //   window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return function () {
      window.removeEventListener("".concat(id), function () {});
      window.removeEventListener("scroll", function () {});
    };
  }, [id]);
  return /*#__PURE__*/_jsxs(Box, {
    id: id,
    ref: refContainer,
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        flex: 1,
        display: "flex",
        justifyContent: "center"
      },
      children: /*#__PURE__*/_jsx(Container, {
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "100%",
            display: "flex",
            marginBottom: {
              xs: "72px",
              md: "86px"
            },
            padding: {
              xs: "0px 16px",
              md: "0 50px",
              xl: "0px"
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "h2",
            color: colors.primary.bandaiNamcoBlack,
            children: title
          })
        })
      })
    }), !onlyShowKeyFeatureCard && /*#__PURE__*/_jsx(Box, {
      sx: {
        marginBottom: {
          xs: "82px",
          md: "100px",
          lg: "132px"
        }
      },
      children: /*#__PURE__*/_jsx(ComplexKeyFeatureCard, _extends({}, dataComplexKeyFeatureCard))
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
      },
      children: dataKeyFeatureCard.map(function (card, index) {
        return /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "100%",
            marginBottom: {
              xs: "82px",
              md: "100px",
              lg: "132px"
            },
            '&:last-child': {
              marginBottom: "0px"
            }
          },
          children: /*#__PURE__*/_jsx(KeyFeature, _extends({}, card))
        }, index);
      })
    })]
  });
};

export default KeyFeatureContainer;