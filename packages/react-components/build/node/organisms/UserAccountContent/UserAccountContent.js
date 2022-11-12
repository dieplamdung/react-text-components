"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _TabAccount = _interopRequireDefault(require("../../molecules/TabAccount"));

var _UserLogo = _interopRequireDefault(require("../../molecules/UserLogo"));

var _ContentAccount = _interopRequireDefault(require("./ContentAccount"));

var _ContentOrderList = _interopRequireDefault(require("./ContentOrderList"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Types
const UserAccountContent = props => {
  const {
    titleList,
    defaultTab = 0,
    isRender = false,
    onChangeTag
  } = props;
  const [titleSelect, setSelectTitle] = (0, _react.useState)("");
  const [stateDate, setStateData] = (0, _react.useState)(props);
  (0, _react.useEffect)(() => {
    setStateData(props);
  }, [props]);
  (0, _react.useEffect)(() => {
    var _titleList$defaultTab;

    setSelectTitle((titleList == null ? void 0 : (_titleList$defaultTab = titleList[defaultTab]) == null ? void 0 : _titleList$defaultTab.value) || "");
  }, [defaultTab, titleList]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_UserLogo.default, (0, _extends2.default)({}, stateDate.dataLogo))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        background: "#fff",
        borderRadius: "20px",
        padding: {
          xs: "40px 24px",
          md: "60px 40px",
          lg: "80px",
          xl: "80px 96px"
        },
        display: "flex",
        flexDirection: "column",
        width: "100%"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          paddingBottom: {
            xs: "48px",
            md: "112px"
          },
          width: "100%",
          pointerEvents: isRender ? "auto" : "none"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabAccount.default, {
          titleList: stateDate.titleList,
          titleSelect: titleSelect,
          onChangeTab: v => {
            setSelectTitle(v);
            onChangeTag == null ? void 0 : onChangeTag();
          }
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: titleSelect === "account" ? "flex" : "none",
          width: "100%"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ContentAccount.default, {
          contentAccount: stateDate.contentAccount,
          contentAddresses: stateDate.contentAddresses
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: titleSelect === "orders" ? "flex" : "none",
          width: "100%"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ContentOrderList.default, (0, _extends2.default)({}, stateDate.oderListContent))
      })]
    })]
  });
};

var _default = UserAccountContent;
exports.default = _default;