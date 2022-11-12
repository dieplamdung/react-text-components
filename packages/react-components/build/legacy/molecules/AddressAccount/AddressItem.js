import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Box, Button } from '@mui/material';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import ModalConfirmRemove from "./ModalConfirmRemove";
import ModalUpdate from "./ModalUpdate";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function AddressItem(props) {
  var id = props.id,
      isDefault = props.isDefault,
      _props$titleDefault = props.titleDefault,
      titleDefault = _props$titleDefault === void 0 ? "default" : _props$titleDefault,
      _props$titleBtnSetDef = props.titleBtnSetDefault,
      titleBtnSetDefault = _props$titleBtnSetDef === void 0 ? "Set as default" : _props$titleBtnSetDef,
      _props$firstName = props.firstName,
      firstName = _props$firstName === void 0 ? "" : _props$firstName,
      _props$lastName = props.lastName,
      lastName = _props$lastName === void 0 ? "" : _props$lastName,
      _props$address = props.address,
      address = _props$address === void 0 ? "" : _props$address,
      _props$apartment = props.apartment,
      apartment = _props$apartment === void 0 ? "" : _props$apartment,
      _props$town = props.town,
      town = _props$town === void 0 ? "" : _props$town,
      _props$phoneNumber = props.phoneNumber,
      phoneNumber = _props$phoneNumber === void 0 ? "" : _props$phoneNumber,
      postalCode = props.postalCode,
      company = props.company,
      countryNumber = props.countryNumber,
      _props$titleBtnEdit = props.titleBtnEdit,
      titleBtnEdit = _props$titleBtnEdit === void 0 ? "Edit" : _props$titleBtnEdit,
      _props$titleBtnRemove = props.titleBtnRemove,
      titleBtnRemove = _props$titleBtnRemove === void 0 ? "Remove" : _props$titleBtnRemove,
      _props$location = props.location,
      location = _props$location === void 0 ? "" : _props$location,
      onRemoveAddress = props.onRemoveAddress,
      _props$templateAdd = props.templateAdd,
      templateAdd = _props$templateAdd === void 0 ? {} : _props$templateAdd,
      titleModalUpdate = props.titleModalUpdate,
      titleBtnSave = props.titleBtnSave,
      onUpdateAddress = props.onUpdateAddress,
      countryName = props.countryName,
      countryCode = props.countryCode;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModalRemove = _useState2[0],
      setOpenModalRemove = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openModalUpdate = _useState4[0],
      setOpenModalUpdate = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      templateModal = _useState6[0],
      setTemplateModal = _useState6[1]; // set value default for templateAdd;


  useEffect(function () {
    // console.log("newTemplateAdd", templateAdd, firstName);
    var newTemplateAdd = cloneDeep(templateAdd);

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
  return /*#__PURE__*/_jsxs(Box, {
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
    children: [/*#__PURE__*/_jsx(Box, {
      children: isDefault ? /*#__PURE__*/_jsx(Box, {
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
      }) : /*#__PURE__*/_jsx(Box, {
        sx: {
          cursor: "pointer",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/_jsx(Typography, {
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
              borderBottom: "1px solid ".concat(colors.primary.bandaiNamcoBlack)
            }
          },
          children: titleBtnSetDefault
        })
      })
    }), (!!firstName || !!lastName) && /*#__PURE__*/_jsx(Typography, {
      sx: {
        fontSize: "18px",
        lineHeight: "26px",
        letterSpacing: "-0.2px",
        fontWeight: "600",
        marginBottom: "6px"
      },
      color: colors.primary.bandaiNamcoBlack,
      children: "".concat(firstName, " ").concat(lastName)
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px"
      },
      children: [!!address && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: address
      }), !!apartment && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: apartment
      }), !!town && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: town
      }), !!postalCode && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: postalCode
      }), !!location && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: location
      }), !!phoneNumber && /*#__PURE__*/_jsxs(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: [countryNumber ? "".concat(countryNumber, "-") : "", phoneNumber]
      }), !!company && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: company
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        marginTop: "auto",
        "& button": {
          marginRight: "10px"
        }
      },
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "secondary",
        onClick: function onClick() {
          return setOpenModalUpdate(true);
        },
        children: titleBtnEdit
      }), /*#__PURE__*/_jsx(Button, {
        variant: "secondary",
        onClick: function onClick() {
          return setOpenModalRemove(true);
        },
        children: titleBtnRemove
      })]
    }), /*#__PURE__*/_jsx(ModalConfirmRemove, {
      open: openModalRemove,
      onClose: function onClose() {
        return setOpenModalRemove(false);
      },
      onConfirm: function onConfirm(callback) {
        onRemoveAddress(id, callback);
      }
    }), /*#__PURE__*/_jsx(ModalUpdate, {
      open: openModalUpdate,
      onClose: function onClose() {
        return setOpenModalUpdate(false);
      },
      onSave: onUpdateAddress,
      title: titleModalUpdate,
      titleBtnSave: titleBtnSave,
      template: templateModal,
      countryCode: countryCode,
      countryName: countryName
    })]
  });
}

export default /*#__PURE__*/React.memo(AddressItem);