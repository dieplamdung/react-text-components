"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tabs;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Tabs(props) {
  var _listTabs$0$id, _listTabs$;

  const {
    listTabs,
    data = () => {}
  } = props;
  const [active, setActive] = (0, _react.useState)((_listTabs$0$id = listTabs == null ? void 0 : (_listTabs$ = listTabs[0]) == null ? void 0 : _listTabs$.id) != null ? _listTabs$0$id : 1);

  const handleClick = id => {
    setActive(id);
    data(id);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: 'flex',
      gap: {
        xs: '28px',
        md: '48px'
      }
    },
    children: listTabs == null ? void 0 : listTabs.map((tab, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        "&:hover": {
          "& p": {
            color: _colors.default.primary.bandaiNamcoRed,
            "&::after": {
              width: "100%"
            }
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p3",
        onClick: () => handleClick((tab == null ? void 0 : tab.id) || index),
        sx: {
          color: tab.id === active ? _colors.default.primary.bandaiNamcoRed : _colors.default.neutral.neutral4,
          cursor: 'pointer',
          position: "relative",
          "&::after": {
            content: "' '",
            position: "absolute",
            backgroundColor: _colors.default.primary.bandaiNamcoRed,
            left: "0px",
            bottom: "0px",
            width: (tab == null ? void 0 : tab.id) === active ? "100%" : '0px',
            height: '1px',
            transition: 'all .3s'
          }
        },
        children: tab.label
      })
    }, index))
  });
}