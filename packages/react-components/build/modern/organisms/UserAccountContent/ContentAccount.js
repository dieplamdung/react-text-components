import _extends from "@babel/runtime/helpers/esm/extends";
import { Box } from '@mui/material';
import React from 'react';
import AddressAccount from "../../molecules/AddressAccount";
import DetailAccount from "../../molecules/DetailAccount";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function ContentAccount(props) {
  const {
    contentAccount,
    contentAddresses
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%"
      },
      children: /*#__PURE__*/_jsx(DetailAccount, _extends({}, contentAccount))
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%"
      },
      children: /*#__PURE__*/_jsx(AddressAccount, _extends({}, contentAddresses))
    })]
  });
}

export default ContentAccount;