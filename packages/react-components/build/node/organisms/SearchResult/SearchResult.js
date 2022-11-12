"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _SearchResultFilterPill = _interopRequireDefault(require("../../molecules/SearchResultFilterPill"));

var _TextField = _interopRequireDefault(require("../../molecules/TextField"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _SearchResultBlog = _interopRequireDefault(require("../SearchResultBlog"));

var _SearchResultGame = _interopRequireDefault(require("../SearchResultGame/SearchResultGame"));

var _SearchResultNewsEvents = _interopRequireDefault(require("../SearchResultNewsEvents"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Types
const SearchResult = props => {
  const {
    propsInput,
    listTabs,
    onClose = () => {},
    textResult,
    propsGame,
    propsBlog,
    propsNewEvent
  } = props;
  const refTextField = (0, _react.useRef)(null);

  const handleOnChangeSearch = e => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, {
          ref: refTextField,
          label: (propsInput == null ? void 0 : propsInput.placeholder) || "",
          width: "100%",
          iconPosEnd: true,
          icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
            htmlColor: "#C1C1C1",
            sx: {
              cursor: "pointer"
            },
            onClick: () => onClose == null ? void 0 : onClose()
          }),
          onChange: handleOnChangeSearch
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchResultFilterPill.default, {
        listTabs: listTabs
      }), textResult && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: 'p3',
        color: _colors.default.neutral.neutral2,
        sx: {
          marginTop: {
            xs: '32px',
            md: '40px'
          }
        },
        children: textResult
      }), propsGame && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: {
            xs: '60px',
            md: '120px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchResultGame.default, {
          propsGame: propsGame
        })
      })]
    }), propsBlog && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        margin: {
          xs: '72px 0',
          md: '132px 0'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchResultBlog.default, (0, _extends2.default)({}, propsBlog))
    }), propsNewEvent && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          margin: {
            xs: '72px 0',
            md: '132px 0'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchResultNewsEvents.default, (0, _extends2.default)({}, propsNewEvent))
      })
    })]
  });
};

var _default = SearchResult;
exports.default = _default;