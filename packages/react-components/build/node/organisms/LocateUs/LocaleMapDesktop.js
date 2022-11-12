"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Marker = _interopRequireDefault(require("./Marker"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
// import Types
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        '& img': {
          width: '100%',
          display: 'block'
        },
        position: 'relative'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: mapDesktop,
        alt: "map"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          '& svg': {
            cursor: 'pointer',
            '&:hover': {
              '& path': {
                transition: 'all .4s',
                fill: _colors.default.primary.bandaiNamcoRed
              }
            }
          }
        },
        children: listInfoMarker.map((item, idx) => {
          var _positionMarker$idx, _positionMarker$idx2;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Marker.default, (0, _extends2.default)({}, item, {
            mainImageNextProps: mainImageNextProps,
            position: (_positionMarker$idx = positionMarker[idx]) == null ? void 0 : _positionMarker$idx.position,
            sx: (_positionMarker$idx2 = positionMarker[idx]) == null ? void 0 : _positionMarker$idx2.sx
          }));
        })
      })]
    })
  });
};

var _default = LocaleMapDesktop;
exports.default = _default;