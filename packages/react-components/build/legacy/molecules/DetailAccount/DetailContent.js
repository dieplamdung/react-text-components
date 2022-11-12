import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Box } from '@mui/material';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import DetailItem from "./DetailItem"; // eslint-disable-next-line import/no-cycle

import ModalUpdate from "./ModalUpdate";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function DetailContent(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "" : _props$title,
      detail = props.detail,
      _props$titleButtonEdi = props.titleButtonEdit,
      titleButtonEdit = _props$titleButtonEdi === void 0 ? "" : _props$titleButtonEdi,
      _props$titleButtonSav = props.titleButtonSave,
      titleButtonSave = _props$titleButtonSav === void 0 ? "" : _props$titleButtonSav,
      _props$isPassWord = props.isPassWord,
      isPassWord = _props$isPassWord === void 0 ? false : _props$isPassWord,
      onSubmitData = props.onSubmitData,
      onValidatePass = props.onValidatePass;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      detailData = _useState4[0],
      setDetailData = _useState4[1];

  useEffect(function () {
    setDetailData(detail);
  }, [detail]);

  var handleOnSave = function handleOnSave() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callBack = arguments.length > 1 ? arguments[1] : undefined;
    var keyValues = Object.keys(value);
    var newDetail = cloneDeep(detailData);
    var newValueSubmit = {};

    if (keyValues != null && keyValues.length && newDetail != null && newDetail.length) {
      newDetail.map(function (items, index) {
        if (items != null && items.length) {
          items.map(function (item, idx) {
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

  return /*#__PURE__*/_jsxs(Box, {
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
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginTop: {
          xs: "28px",
          md: "0px"
        }
      },
      children: /*#__PURE__*/_jsx(DetailItem, {
        detail: detailData,
        isPassWord: isPassWord
      })
    }), titleButtonEdit && /*#__PURE__*/_jsx(Box, {
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
          borderColor: colors.primary.bandaiNamcoBlack
        }
      },
      onClick: function onClick() {
        return setOpenModal(true);
      },
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "p5",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
          lineHeight: "22px"
        },
        children: titleButtonEdit
      })
    }), /*#__PURE__*/_jsx(ModalUpdate, {
      open: openModal,
      isPassWord: isPassWord,
      detail: _extends({}, props, {
        detail: detailData
      }),
      onClose: function onClose() {
        return setOpenModal(false);
      },
      titleButton: titleButtonSave,
      onSave: handleOnSave,
      onValidatePass: onValidatePass
    })]
  });
}

export default DetailContent;