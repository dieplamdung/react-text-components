"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabIcons;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Typography = _interopRequireDefault(require("../Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
function TabIcons(props) {
  const {
    listTabs,
    onChangeTab = () => {}
  } = props;
  const [currentActivated, setCurrentActivated] = (0, _react.useState)(-1);
  /**
   * Use to return a id (index) to parent component to display data after it's clicked
   * @param id
   * @param label
   */

  const handleClicked = id => {
    setCurrentActivated(currentActivated === id ? -1 : id);
    onChangeTab(currentActivated === id ? -1 : id);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: 'flex',
      flexGrow: 4,
      flexWrap: {
        xs: 'wrap',
        lg: 'nowrap'
      },
      justifyContent: {
        xs: 'space-between',
        lg: 'flex-start'
      },
      gap: {
        xs: '16px',
        md: '24px'
      }
    },
    children: listTabs == null ? void 0 : listTabs.map((tab, index) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      onClick: () => {
        handleClicked(index);
      },
      sx: {
        cursor: 'pointer',
        flex: {
          xs: '1 1 calc(50% - 16px)',
          md: '1 1 calc(50% - 16px)',
          lg: '1 1 167px'
        },
        padding: {
          xs: '16px 16px',
          md: '24px 12px'
        },
        border: '1px solid',
        borderRadius: '10px',
        textAlign: 'center',
        borderColor: index === currentActivated ? _colors.default.secondary.bandaiNamcoGreen : _colors.default.neutral.neutral5
      },
      children: [tab.icon, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p7",
        sx: {
          color: index === currentActivated ? _colors.default.secondary.bandaiNamcoGreen : _colors.default.primary.bandaiNamcoBlack,
          cursor: 'pointer',
          marginTop: '8px',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          KhtmlUserSelect: 'none',
          MozUserSelect: 'none',
          MsUserSelect: 'none',
          userSelect: 'none'
        },
        children: tab.label
      })]
    }, index))
  });
}