"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _lodash = require("lodash");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _DetailItem = _interopRequireDefault(require("./DetailItem"));

var _ModalUpdate = _interopRequireDefault(require("./ModalUpdate"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line import/no-cycle
function DetailContent(props) {
  const {
    title = "",
    detail,
    titleButtonEdit = "",
    titleButtonSave = "",
    isPassWord = false,
    onSubmitData,
    onValidatePass
  } = props;
  const [openModal, setOpenModal] = (0, _react.useState)(false);
  const [detailData, setDetailData] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    setDetailData(detail);
  }, [detail]);

  const handleOnSave = (value = {}, callBack) => {
    const keyValues = Object.keys(value);
    const newDetail = (0, _lodash.cloneDeep)(detailData);
    const newValueSubmit = {};

    if (keyValues != null && keyValues.length && newDetail != null && newDetail.length) {
      newDetail.map((items, index) => {
        if (items != null && items.length) {
          items.map((item, idx) => {
            newDetail[index][idx].value = value[item.title];

            if (newDetail[index][idx]) {
              newValueSubmit[newDetail[index][idx].typeQuery || ""] = value[item.title];
            }

            return null;
          });
        }

        return null;
      });
    }

    setDetailData(newDetail);
    onSubmitData == null ? void 0 : onSubmitData(newValueSubmit, isPassWord ? "password" : "", callBack);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row"
      },
      marginBottom: {
        xs: "56px",
        md: "72px",
        lg: "132px"
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginTop: {
          xs: "28px",
          md: "0px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DetailItem.default, {
        detail: detailData,
        isPassWord: isPassWord
      })
    }), titleButtonEdit && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        minWidth: "82px",
        width: "fit-content",
        height: "46px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        borderRadius: "60px",
        borderColor: "#DDDDDD",
        padding: "0px 28px",
        marginTop: {
          xs: "20px",
          md: "0px"
        },
        cursor: "pointer",
        transition: "all 0.2s",
        "&:hover": {
          borderColor: _colors.default.primary.bandaiNamcoBlack
        }
      },
      onClick: () => setOpenModal(true),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p5",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack,
          lineHeight: "22px"
        },
        children: titleButtonEdit
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalUpdate.default, {
      open: openModal,
      isPassWord: isPassWord,
      detail: (0, _extends2.default)({}, props, {
        detail: detailData
      }),
      onClose: () => setOpenModal(false),
      titleButton: titleButtonSave,
      onSave: handleOnSave,
      onValidatePass: onValidatePass
    })]
  });
}

var _default = DetailContent;
exports.default = _default;