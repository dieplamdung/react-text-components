import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React, { useState } from 'react'; // Types

import Subscribe from "../../molecules/Subscribe";
import SubscribePopup from "./SubscribePopup"; // define function

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SubscribeNewsLetter = props => {
  const {
    subscribeContent,
    subscribeModal,
    serverReturnErr,
    returnServerCode,
    handleClosePopup
  } = props;
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = value => {
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
      onClose: () => setOpenModal(false),
      onSeeNew: () => setOpenModal(false)
    }))]
  });
};

export default SubscribeNewsLetter;