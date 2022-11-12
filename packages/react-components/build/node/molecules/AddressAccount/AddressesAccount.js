"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _AddressItem = _interopRequireDefault(require("./AddressItem"));

var _ModalUpdate = _interopRequireDefault(require("./ModalUpdate"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// define function
const AddressesAccount = props => {
  const {
    title,
    emptyAddress,
    listAddress = [],
    titleBtnAddAddress,
    onRemoveAddress,
    templateAdd,
    titleModalAdd,
    titleModalUpdate,
    titleBtnSave,
    onUpdateAddress,
    onAddAddress,
    countryName,
    countryCode
  } = props;
  const [listAddressDefault, setListAddressDefault] = (0, _react.useState)([]);
  const [openModalAdd, setOpenModalAdd] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    setListAddressDefault(listAddress);
  }, [listAddress]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row"
        }
      },
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: _colors.default.primary.bandaiNamcoBlack,
        variant: "p1",
        sx: {
          marginRight: {
            xs: "0px",
            md: "50px",
            lg: "146px"
          },
          minWidth: "150px"
        },
        children: title
      }), !!listAddressDefault.length && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: "flex",
          flex: "1",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            display: "flex",
            width: "fit-content",
            alignItems: "center",
            cursor: "pointer",
            marginTop: {
              xs: "24px",
              md: "0px"
            },
            "& svg": {
              width: "15px",
              height: "15px",
              marginRight: "6px",
              marginTop: "1px"
            }
          },
          onClick: () => setOpenModalAdd(true),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconAdd, {
            htmlColor: _colors.default.primary.bandaiNamcoBlack
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p7",
            sx: {
              position: "relative",
              "&:before": {
                position: "absolute",
                content: "' '",
                bottom: "0px",
                left: "0px",
                width: "100%",
                borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
              }
            },
            children: titleBtnAddAddress
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            display: "flex",
            flex: "1",
            flexWrap: "wrap",
            flexDirection: {
              xs: "column",
              md: "row"
            },
            justifyContent: "space-between"
          },
          children: listAddressDefault.map(item => {
            return /*#__PURE__*/(0, _react.createElement)(_AddressItem.default, (0, _extends2.default)({}, item, {
              key: item.id,
              onRemoveAddress: onRemoveAddress,
              templateAdd: templateAdd,
              titleModalUpdate: titleModalUpdate,
              titleBtnSave: titleBtnSave,
              onUpdateAddress: (v, call) => onUpdateAddress(item.id, v, call),
              countryName: countryName,
              countryCode: countryCode
            }));
          })
        })]
      })]
    }), !listAddressDefault.length && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        width: "100%",
        paddingTop: {
          xs: "48px",
          md: "64px"
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h4",
        sx: {
          textAlign: "center"
        },
        children: emptyAddress == null ? void 0 : emptyAddress.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        sx: {
          marginTop: "8px",
          marginBottom: "24px",
          textAlign: "center"
        },
        children: emptyAddress == null ? void 0 : emptyAddress.description
      }), !!(emptyAddress != null && emptyAddress.titleBtn) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "primaryDark",
        onClick: () => setOpenModalAdd(true),
        children: emptyAddress == null ? void 0 : emptyAddress.titleBtn
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalUpdate.default, {
      open: openModalAdd,
      onClose: () => setOpenModalAdd(false),
      onSave: onAddAddress,
      title: titleModalAdd,
      titleBtnSave: titleBtnSave,
      template: templateAdd,
      countryName: countryName,
      countryCode: countryCode
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(AddressesAccount);

exports.default = _default;