'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _Box = _interopRequireDefault(require('@mui/material/Box'));

var _react = _interopRequireDefault(require('react'));

var _colors = _interopRequireDefault(require('../../theme/colors'));

var _Typography = _interopRequireDefault(require('../../atoms/Typography'));

var _jsxRuntime = require('react/jsx-runtime');

// import modules
// import Link from '@mui/material/Link';
// define function
const Categories = (props) => {
  const { title, mainImage, mainImageNext = '', isShowImageNext = true } = props;
  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_Box.default, {
    className: 'style-Categories',
    sx: {
      width: {
        xs: '130px',
        md: '262px',
      },
      height: {
        xs: '72px',
        md: '160px',
      },
      borderRadius: {
        xs: '8px',
        md: '20px',
      },
      overflow: 'hidden',
      position: 'relative',
      '& img': {
        width: '100%',
      },
      margin: '0 auto',
      verticalAlign: 'middle',
      cursor: 'pointer',
      backgroundImage: `${isShowImageNext ? 'none' : `url(${mainImage})`}`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 0.3s',
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': '-moz-none',
      '-o-user-select': 'none',
      userSelect: 'none',
      pointerEvents: 'none',
      '&:hover': {
        '& img': {
          WebkitTransform: 'scale(1.2)',
          transform: 'scale(1.2)',
        },
      },
    },
    children: [
      /*#__PURE__*/ (0, _jsxRuntime.jsx)(_Typography.default, {
        variant: 'p1',
        color: _colors.default.primary.reactNamcoWhite,
        sx: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: '0px',
          transform: 'translate(-50%,-50%)',
          width: '100%',
          cursor: 'pointer',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingLeft: '5px',
          paddingRight: '5px',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 2,
          wordBreak: 'break-word',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          '-webkit-line-clamp': '2',

          /* number of lines to show */
          lineClamp: '2',
          WebkitBoxOrient: 'vertical',
        },
        children: title,
      }),
      /*#__PURE__*/ (0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          zIndex: '1',
          background: 'rgb(30 30 30 / 40%)',
          '-webkit-touch-callout': 'none',
          '-webkit-user-select': 'none',
          '-khtml-user-select': 'none',
          '-moz-user-select': '-moz-none',
          '-o-user-select': 'none',
          userSelect: 'none',
          pointerEvents: 'none',
        },
      }),
      isShowImageNext &&
        /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            position: 'relative',
            transition: 'all .4s',
            pointerEvents: 'none',
            '& img': {
              WebkitTransform: 'scale(1)',
              transform: 'scale(1)',
              transition: '.3s ease-in-out',
              '-webkit-touch-callout': 'none',
              '-webkit-user-select': 'none',
              '-khtml-user-select': 'none',
              '-moz-user-select': '-moz-none',
              '-o-user-select': 'none',
              userSelect: 'none',
              pointerEvents: 'none',
              zIndex: '1',
            },
          },
          children: [
            mainImage &&
              /*#__PURE__*/ (0, _jsxRuntime.jsx)('img', {
                src: mainImage,
                alt: title,
              }),
            mainImageNext && mainImageNext,
          ],
        }),
    ],
  });
};

var _default = Categories;
exports.default = _default;
