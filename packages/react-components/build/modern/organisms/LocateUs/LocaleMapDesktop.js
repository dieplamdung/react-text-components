import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import { Box } from '@mui/material';
import React from 'react'; // import Styles

import colors from "../../theme/colors"; // import Types

import Marker from "./Marker";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const LocaleMapDesktop = props => {
  const {
    mapDesktop,
    listInfoMarker,
    mainImageNextProps
  } = props;
  const positionMarker = [{
    position: "left",
    sx: {
      position: 'absolute',
      top: '28%',
      left: '14%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '22.5%',
      left: '46.6%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '36.6%',
      right: '15.8%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '43%',
      right: '17.3%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '38.7%',
      right: '11.7%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '60.2%',
      right: '16.6%'
    }
  }];
  return /*#__PURE__*/_jsx(Box, {
    children: /*#__PURE__*/_jsxs(Box, {
      sx: {
        '& img': {
          width: '100%',
          display: 'block'
        },
        position: 'relative'
      },
      children: [/*#__PURE__*/_jsx("img", {
        src: mapDesktop,
        alt: "map"
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          '& svg': {
            cursor: 'pointer',
            '&:hover': {
              '& path': {
                transition: 'all .4s',
                fill: colors.primary.bandaiNamcoRed
              }
            }
          }
        },
        children: listInfoMarker.map((item, idx) => /*#__PURE__*/_jsx(Marker, _extends({}, item, {
          mainImageNextProps: mainImageNextProps,
          position: positionMarker[idx]?.position,
          sx: positionMarker[idx]?.sx
        })))
      })]
    })
  });
};

export default LocaleMapDesktop;