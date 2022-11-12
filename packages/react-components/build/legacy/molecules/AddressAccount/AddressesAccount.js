import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import modules
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Button from "../../atoms/Button";
import { IconAdd } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import AddressItem from "./AddressItem";
import ModalUpdate from "./ModalUpdate";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";

// define function
var AddressesAccount = function AddressesAccount(props) {
  var title = props.title,
      emptyAddress = props.emptyAddress,
      _props$listAddress = props.listAddress,
      listAddress = _props$listAddress === void 0 ? [] : _props$listAddress,
      titleBtnAddAddress = props.titleBtnAddAddress,
      onRemoveAddress = props.onRemoveAddress,
      templateAdd = props.templateAdd,
      titleModalAdd = props.titleModalAdd,
      titleModalUpdate = props.titleModalUpdate,
      titleBtnSave = props.titleBtnSave,
      _onUpdateAddress = props.onUpdateAddress,
      onAddAddress = props.onAddAddress,
      countryName = props.countryName,
      countryCode = props.countryCode;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      listAddressDefault = _useState2[0],
      setListAddressDefault = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openModalAdd = _useState4[0],
      setOpenModalAdd = _useState4[1];

  useEffect(function () {
    setListAddressDefault(listAddress);
  }, [listAddress]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row"
        }
      },
      children: [title && /*#__PURE__*/_jsx(Typography, {
        color: colors.primary.bandaiNamcoBlack,
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
      }), !!listAddressDefault.length && /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flex: "1",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/_jsxs(Box, {
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
          onClick: function onClick() {
            return setOpenModalAdd(true);
          },
          children: [/*#__PURE__*/_jsx(IconAdd, {
            htmlColor: colors.primary.bandaiNamcoBlack
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p7",
            sx: {
              position: "relative",
              "&:before": {
                position: "absolute",
                content: "' '",
                bottom: "0px",
                left: "0px",
                width: "100%",
                borderBottom: "1px solid ".concat(colors.primary.bandaiNamcoBlack)
              }
            },
            children: titleBtnAddAddress
          })]
        }), /*#__PURE__*/_jsx(Box, {
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
          children: listAddressDefault.map(function (item) {
            return /*#__PURE__*/_createElement(AddressItem, _extends({}, item, {
              key: item.id,
              onRemoveAddress: onRemoveAddress,
              templateAdd: templateAdd,
              titleModalUpdate: titleModalUpdate,
              titleBtnSave: titleBtnSave,
              onUpdateAddress: function onUpdateAddress(v, call) {
                return _onUpdateAddress(item.id, v, call);
              },
              countryName: countryName,
              countryCode: countryCode
            }));
          })
        })]
      })]
    }), !listAddressDefault.length && /*#__PURE__*/_jsxs(Box, {
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
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        sx: {
          textAlign: "center"
        },
        children: emptyAddress == null ? void 0 : emptyAddress.title
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        sx: {
          marginTop: "8px",
          marginBottom: "24px",
          textAlign: "center"
        },
        children: emptyAddress == null ? void 0 : emptyAddress.description
      }), !!(emptyAddress != null && emptyAddress.titleBtn) && /*#__PURE__*/_jsx(Button, {
        variant: "primaryDark",
        onClick: function onClick() {
          return setOpenModalAdd(true);
        },
        children: emptyAddress == null ? void 0 : emptyAddress.titleBtn
      })]
    }), /*#__PURE__*/_jsx(ModalUpdate, {
      open: openModalAdd,
      onClose: function onClose() {
        return setOpenModalAdd(false);
      },
      onSave: onAddAddress,
      title: titleModalAdd,
      titleBtnSave: titleBtnSave,
      template: templateAdd,
      countryName: countryName,
      countryCode: countryCode
    })]
  });
};

export default /*#__PURE__*/React.memo(AddressesAccount);