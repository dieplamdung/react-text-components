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

const KeyFeatureContainer = ({
  id,
  title,
  onlyShowKeyFeatureCard = false,
  dataComplexKeyFeatureCard,
  dataKeyFeatureCard
}) => {
  const refContainer = useRef(); // const refIsShow = useRef<any>();
  // dispatchEvent event send id to sub navigation

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = refContainer.current; // const height = window.innerHeight;

      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            // refIsShow.current = true;
            window?.dispatchEvent(new Event(`${id}`));
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //   refIsShow.current = false;
          //   window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
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
      children: dataKeyFeatureCard.map((card, index) => {
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