"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _lodash = require("lodash");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _ModalConfirmRemove = _interopRequireDefault(require("./ModalConfirmRemove"));

var _ModalUpdate = _interopRequireDefault(require("./ModalUpdate"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AddressItem(props) {
  const {
    id,
    isDefault,
    titleDefault = "default",
    titleBtnSetDefault = "Set as default",
    firstName = "",
    lastName = "",
    address = "",
    apartment = "",
    town = "",
    phoneNumber = "",
    postalCode,
    company,
    countryNumber,
    titleBtnEdit = "Edit",
    titleBtnRemove = "Remove",
    location = "",
    onRemoveAddress,
    templateAdd = {},
    titleModalUpdate,
    titleBtnSave,
    onUpdateAddress,
    countryName,
    countryCode
  } = props;
  const [openModalRemove, setOpenModalRemove] = (0, _react.useState)(false);
  const [openModalUpdate, setOpenModalUpdate] = (0, _react.useState)(false);
  const [templateModal, setTemplateModal] = (0, _react.useState)({}); // set value default for templateAdd;

  (0, _react.useEffect)(() => {
    // console.log("newTemplateAdd", templateAdd, firstName);
    const newTemplateAdd = (0, _lodash.cloneDeep)(templateAdd);

    if (newTemplateAdd.firstName) {
      newTemplateAdd.firstName.valueDefault = firstName;
    }

    ;

    if (newTemplateAdd.lastName) {
      newTemplateAdd.lastName.valueDefault = lastName;
    }

    ;

    if (newTemplateAdd.address) {
      newTemplateAdd.address.valueDefault = address;
    }

    ;

    if (newTemplateAdd.apartment) {
      newTemplateAdd.apartment.valueDefault = apartment;
    }

    ;

    if (newTemplateAdd.town) {
      newTemplateAdd.town.valueDefault = town;
    }

    ;

    if (newTemplateAdd.postalCode) {
      newTemplateAdd.postalCode.valueDefault = postalCode;
    }

    ;

    if (newTemplateAdd.company) {
      newTemplateAdd.company.valueDefault = company;
    }

    if (newTemplateAdd.location) {
      newTemplateAdd.location.valueDefault = location;
    }

    ;

    if (newTemplateAdd.phoneNumber) {
      newTemplateAdd.phoneNumber.valueDefault = phoneNumber;
    }

    ;

    if (newTemplateAdd.countryNumber) {
      newTemplateAdd.countryNumber.valueDefault = countryNumber;
    }

    setTemplateModal(newTemplateAdd); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: {
        xs: "100%",
        lg: "calc(50% - 8px)"
      },
      marginTop: {
        xs: "20px",
        md: "18px"
      },
      padding: "24px",
      border: "1px solid",
      borderColor: isDefault ? "#0169B2" : "#DDDDDD",
      borderRadius: "20px"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: isDefault ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          textTransform: "uppercase",
          height: "24px",
          width: "fit-content",
          padding: "0px 8px",
          borderRadius: "5px",
          fontSize: "10px",
          display: "flex",
          alignItems: "center",
          background: "#00B0B8",
          color: "#fff",
          fontWeight: "700",
          marginBottom: "8px"
        },
        children: titleDefault
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          cursor: "pointer",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p7",
          sx: {
            position: "relative",
            width: "fit-content",
            "&:before": {
              position: "absolute",
              content: "' '",
              width: "100%",
              left: "0px",
              bottom: "0px",
              borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
            }
          },
          children: titleBtnSetDefault
        })
      })
    }), (!!firstName || !!lastName) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      sx: {
        fontSize: "18px",
        lineHeight: "26px",
        letterSpacing: "-0.2px",
        fontWeight: "600",
        marginBottom: "6px"
      },
      color: _colors.default.primary.bandaiNamcoBlack,
      children: `${firstName} ${lastName}`
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px"
      },
      children: [!!address && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: _colors.default.primary.bandaiNamcoBlack,
        children: address
      }), !!apartment && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: _colors.default.primary.bandaiNamcoBlack,
        children: apartment
      }), !!town && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: _colors.default.primary.bandaiNamcoBlack,
        children: town
      }), !!postalCode && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: _colors.default.primary.bandaiNamcoBlack,
        children: postalCode
      }), !!location && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: _colors.default.primary.bandaiNamcoBlack,
        children: location
      }), !!phoneNumber && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: _colors.default.primary.bandaiNamcoBlack,
        children: [countryNumber ? `${countryNumber}-` : "", phoneNumber]
      }), !!company && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: _colors.default.primary.bandaiNamcoBlack,
        children: company
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        marginTop: "auto",
        "& button": {
          marginRight: "10px"
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
        variant: "secondary",
        onClick: () => setOpenModalUpdate(true),
        children: titleBtnEdit
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
        variant: "secondary",
        onClick: () => setOpenModalRemove(true),
        children: titleBtnRemove
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalConfirmRemove.default, {
      open: openModalRemove,
      onClose: () => setOpenModalRemove(false),
      onConfirm: callback => {
        onRemoveAddress(id, callback);
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalUpdate.default, {
      open: openModalUpdate,
      onClose: () => setOpenModalUpdate(false),
      onSave: onUpdateAddress,
      title: titleModalUpdate,
      titleBtnSave: titleBtnSave,
      template: templateModal,
      countryCode: countryCode,
      countryName: countryName
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(AddressItem);

exports.default = _default;