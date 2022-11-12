"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _DetailContent = _interopRequireDefault(require("./DetailContent"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// define function
const DetailAccount = props => {
  const {
    listDetail = [],
    onSubmitData,
    onValidatePass
  } = props;
  const [detailList, setDetailList] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    setDetailList(listDetail);
  }, [listDetail]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: !!(detailList != null && detailList.length) && detailList.map((item, index) => {
      return /*#__PURE__*/(0, _react.createElement)(_DetailContent.default, (0, _extends2.default)({}, item, {
        key: index,
        onSubmitData: onSubmitData,
        onValidatePass: onValidatePass
      }));
    })
  });
};

var _default = /*#__PURE__*/_react.default.memo(DetailAccount);

exports.default = _default;