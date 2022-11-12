import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconClose, _IconLoading;

import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Button from "../../atoms/Button";
import { IconClose, IconLoading } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function ModalConfirmRemove(props) {
  var open = props.open,
      _onClose = props.onClose,
      onConfirm = props.onConfirm,
      _props$titleRemove = props.titleRemove,
      titleRemove = _props$titleRemove === void 0 ? "Are you sure you want to remove this address?" : _props$titleRemove,
      _props$titleBtnRemove = props.titleBtnRemove,
      titleBtnRemove = _props$titleBtnRemove === void 0 ? "Remove" : _props$titleBtnRemove,
      _props$titleBtnCancel = props.titleBtnCancel,
      titleBtnCancel = _props$titleBtnCancel === void 0 ? "Cancel" : _props$titleBtnCancel;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      serError = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  useEffect(function () {
    serError("");

    if (typeof window !== "undefined") {
      disableScrollBody(open);
    }
  }, [open]);

  var handleConfirmDelete = function handleConfirmDelete() {
    setLoading(true);
    onConfirm(function (v) {
      setLoading(false);

      if (v != null && v.success) {
        serError("");

        _onClose();
      }

      ;

      if (v != null && v.message) {
        serError((v == null ? void 0 : v.message) || "");
      }
    });
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsx(Modal, {
      open: open,
      onClose: function onClose() {
        return loading ? {} : _onClose();
      },
      sx: {
        pointerEvents: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          background: "#fff",
          borderRadius: "20px",
          width: {
            xs: "311px",
            md: "402px"
          },
          minHeight: "200px",
          padding: {
            xs: "64px 28px 36px 28px",
            md: "56px 52px 60px 52px"
          },
          "&:focus": {
            outline: "none"
          },
          position: "relative",
          "& button": {
            width: "100%",
            marginTop: "12px"
          }
        },
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            position: "absolute",
            top: "26px",
            right: {
              xs: "28px",
              md: "52px"
            },
            cursor: loading ? "auto" : "pointer"
          },
          onClick: function onClick() {
            return loading ? {} : _onClose();
          },
          children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "h6",
          sx: {
            textAlign: "center",
            maxWidth: {
              xs: "255px",
              md: "298px"
            },
            marginBottom: {
              xs: "32px",
              md: "40px"
            }
          },
          children: titleRemove
        }), !!error && !loading && /*#__PURE__*/_jsx(Typography, {
          sx: {
            fontSize: "0.75rem",
            fontWeight: "400",
            color: colors.primary.bandaiNamcoRed,
            textAlign: "center"
          },
          children: error
        }), /*#__PURE__*/_jsxs(Button, {
          variant: "secondaryBlack",
          onClick: function onClick() {
            return loading ? {} : handleConfirmDelete();
          },
          children: ["  ", loading ? _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {
            htmlColor: "#fff"
          })) : titleBtnRemove]
        }), /*#__PURE__*/_jsxs(Button, {
          variant: "secondary",
          onClick: function onClick() {
            return loading ? {} : _onClose();
          },
          children: [" ", titleBtnCancel]
        })]
      })
    })
  });
}

export default ModalConfirmRemove;