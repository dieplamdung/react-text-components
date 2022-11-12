import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import modules
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import DetailContent from "./DetailContent";
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";

// define function
var DetailAccount = function DetailAccount(props) {
  var _props$listDetail = props.listDetail,
      listDetail = _props$listDetail === void 0 ? [] : _props$listDetail,
      onSubmitData = props.onSubmitData,
      onValidatePass = props.onValidatePass;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      detailList = _useState2[0],
      setDetailList = _useState2[1];

  useEffect(function () {
    setDetailList(listDetail);
  }, [listDetail]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: !!(detailList != null && detailList.length) && detailList.map(function (item, index) {
      return /*#__PURE__*/_createElement(DetailContent, _extends({}, item, {
        key: index,
        onSubmitData: onSubmitData,
        onValidatePass: onValidatePass
      }));
    })
  });
};

export default /*#__PURE__*/React.memo(DetailAccount);