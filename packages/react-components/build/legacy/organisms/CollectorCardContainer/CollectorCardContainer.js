import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React, { useEffect, useRef } from 'react';
import Typography from "../../atoms/Typography";
import CollectorCard from "../CollectorCard/CollectorCard";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
var CollectorCardContainer = function CollectorCardContainer(_ref) {
  var title = _ref.title,
      dataCollectorCard = _ref.dataCollectorCard,
      id = _ref.id;
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
    sx: {
      display: "flex",
      flexDirection: "column"
    },
    id: id,
    ref: refContainer,
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      sx: {
        marginBottom: {
          xs: "36px",
          md: "80px"
        },
        padding: {
          xs: "0px",
          md: "0px"
        }
      },
      children: title
    }), dataCollectorCard.map(function (collectorCard, index) {
      return /*#__PURE__*/_jsx(Box, {
        sx: {
          marginBottom: {
            xs: "44px",
            md: "80px"
          },
          "&:last-child": {
            marginBottom: "0px"
          }
        },
        children: /*#__PURE__*/_jsx(CollectorCard, _extends({}, collectorCard, {
          isButtonSecond: true
        }))
      }, index);
    })]
  });
};

export default CollectorCardContainer;