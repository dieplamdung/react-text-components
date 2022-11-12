import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import DetailContent from "./DetailContent";
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";

// define function
const DetailAccount = props => {
  const {
    listDetail = [],
    onSubmitData,
    onValidatePass
  } = props;
  const [detailList, setDetailList] = useState([]);
  useEffect(() => {
    setDetailList(listDetail);
  }, [listDetail]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: !!(detailList != null && detailList.length) && detailList.map((item, index) => {
      return /*#__PURE__*/_createElement(DetailContent, _extends({}, item, {
        key: index,
        onSubmitData: onSubmitData,
        onValidatePass: onValidatePass
      }));
    })
  });
};

export default /*#__PURE__*/React.memo(DetailAccount);