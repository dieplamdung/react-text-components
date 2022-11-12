import _extends from "@babel/runtime/helpers/esm/extends";
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
  const [listAddressDefault, setListAddressDefault] = useState([]);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  useEffect(() => {
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
          onClick: () => setOpenModalAdd(true),
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
                borderBottom: `1px solid ${colors.primary.bandaiNamcoBlack}`
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
          children: listAddressDefault.map(item => {
            return /*#__PURE__*/_createElement(AddressItem, _extends({}, item, {
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
        children: emptyAddress?.title
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        sx: {
          marginTop: "8px",
          marginBottom: "24px",
          textAlign: "center"
        },
        children: emptyAddress?.description
      }), !!emptyAddress?.titleBtn && /*#__PURE__*/_jsx(Button, {
        variant: "primaryDark",
        onClick: () => setOpenModalAdd(true),
        children: emptyAddress?.titleBtn
      })]
    }), /*#__PURE__*/_jsx(ModalUpdate, {
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

export default /*#__PURE__*/React.memo(AddressesAccount);