import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import modules
import Box from '@mui/material/Box';
import React, { useState } from 'react'; // Types

import Subscribe from "../../molecules/Subscribe";
import SubscribePopup from "./SubscribePopup"; // define function

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var SubscribeNewsLetter = function SubscribeNewsLetter(props) {
  var subscribeContent = props.subscribeContent,
      subscribeModal = props.subscribeModal,
      serverReturnErr = props.serverReturnErr,
      returnServerCode = props.returnServerCode,
      handleClosePopup = props.handleClosePopup;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var handleOpenModal = function handleOpenModal(value) {
    setOpenModal(value);
  };

  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsx(Subscribe, _extends({}, subscribeContent, {
      handleOpenModal: handleOpenModal
    })), /*#__PURE__*/_jsx(SubscribePopup, _extends({
      handleClosePopup: handleClosePopup,
      serverReturnErr: serverReturnErr,
      serverReturn: returnServerCode
    }, subscribeModal, {
      isOpen: openModal,
      onClose: function onClose() {
        return setOpenModal(false);
      },
      onSeeNew: function onSeeNew() {
        return setOpenModal(false);
      }
    }))]
  });
};

export default SubscribeNewsLetter;