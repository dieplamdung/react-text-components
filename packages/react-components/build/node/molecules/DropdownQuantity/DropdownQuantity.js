"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconArrowDown;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DropdownQuantity = props => {
  const {
    maxQuantity = 5,
    currentQuantity,
    onSetQuantity = () => {},
    label = "Qty"
  } = props;
  const [expand, setExpand] = (0, _react.useState)(false);
  const [current, setCurrent] = (0, _react.useState)(currentQuantity);
  const ref = (0, _react.useRef)(null);

  const handleClick = event => {
    if (expand && ref.current && event.target) {
      setExpand(false);
    }
  };

  (0, _react.useEffect)(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expand]);

  const renderItems = () => {
    const td = [];

    for (let i = 1; i <= maxQuantity; i += 1) {
      td.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        onClick: () => {
          setCurrent(i);
          setExpand(false);
          onSetQuantity(i);
        },
        sx: {
          padding: '11px 16px',
          '&:hover': {
            background: 'rgba(221, 221, 221, 0.8)'
          }
        },
        children: i
      }, i));
    }

    return td;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    ref: ref,
    onClick: () => setExpand(!expand),
    sx: {
      display: 'flex',
      userSelect: 'none',
      alignItems: 'center',
      position: 'relative',
      border: `1px solid ${_colors.default.neutral.neutral5}`,
      borderRadius: '30px',
      cursor: 'pointer',
      padding: {
        xs: '8.5px 12px 12.5px',
        md: '10.5px 20px 14px'
      },
      width: {
        xs: '91px',
        md: '123px'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p5",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p5",
      sx: {
        marginLeft: {
          xs: '13px',
          md: '25px'
        },
        marginRight: {
          xs: '9px',
          md: '8px'
        }
      },
      children: current
    }), _IconArrowDown || (_IconArrowDown = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconArrowDown, {})), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        display: expand ? 'block' : 'none',
        overflow: 'hidden',
        borderRadius: '12px',
        top: '55.5px',
        position: 'absolute',
        zIndex: 1,
        background: 'rgba(237, 237, 237, 1)',
        width: {
          xs: '100%',
          md: '140px'
        },
        left: '0'
      },
      children: renderItems()
    })]
  });
};

var _default = DropdownQuantity;
exports.default = _default;