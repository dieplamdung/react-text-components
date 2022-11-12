'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _colors = _interopRequireDefault(require('../../theme/colors'));

var _material = require('@mui/material');

var _Typography = _interopRequireDefault(require('../Typography'));

var _jsxRuntime = require('react/jsx-runtime');

var _svg;

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

const RadioButton = ({ isChecked = false, onChange, title }) => {
  const [isCheck, setIsCheck] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    setIsCheck(isChecked);
  }, [isChecked]);

  const Icon =
    _svg ||
    (_svg = /*#__PURE__*/ (0, _jsxRuntime.jsx)('svg', {
      width: '14',
      height: '10',
      viewBox: '0 0 14 10',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: /*#__PURE__*/ (0, _jsxRuntime.jsx)('path', {
        d: 'M1 5L5 9L13 1',
        stroke: '#0169B2',
        strokeWidth: '2',
        strokeMiterlimit: '10',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }));

  return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    children: [
      title &&
        /*#__PURE__*/ (0, _jsxRuntime.jsx)(_Typography.default, {
          variant: 'p1',
          color: _colors.default.otherColor.english,
          onClick: () => {
            setIsCheck(!isCheck);
            onChange(!isCheck);
          },
          sx: {
            width: '100%',
            cursor: 'pointer',
            fontSize: {
              md: '20px',
              xs: '16px',
            },
            lineHeight: {
              md: '26px',
              xs: '22px',
            },
            fontWeight: 600,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'block',
            textOverflow: 'ellipsis',
            marginRight: '4px',
          },
          children: title,
        }),
      /*#__PURE__*/ (0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          width: 24,
          height: 24,
          minWidth: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          background: isCheck ? 'rgba(1, 105, 178, 0.1)' : _colors.default.neutral.neutral6,
          borderRadius: '39px',
          border: '1px solid',
          borderColor: isCheck
            ? _colors.default.secondary.reactNamcoBlue
            : _colors.default.neutral.neutral6,
          transform: 'all 0.3s',
          cursor: 'pointer',
        },
        onClick: () => {
          setIsCheck(!isCheck);
          onChange(!isCheck);
        },
        children: isCheck && Icon,
      }),
    ],
  });
};

var _default = RadioButton;
exports.default = _default;
