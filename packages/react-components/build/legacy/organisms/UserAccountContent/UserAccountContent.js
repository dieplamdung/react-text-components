import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material'; // Types

import Container from "../../atoms/Container";
import TabAccount from "../../molecules/TabAccount";
import UserLogo from "../../molecules/UserLogo";
import ContentAccount from "./ContentAccount";
import ContentOrderList from "./ContentOrderList";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var UserAccountContent = function UserAccountContent(props) {
  var titleList = props.titleList,
      _props$defaultTab = props.defaultTab,
      defaultTab = _props$defaultTab === void 0 ? 0 : _props$defaultTab,
      _props$isRender = props.isRender,
      isRender = _props$isRender === void 0 ? false : _props$isRender,
      onChangeTag = props.onChangeTag;

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      titleSelect = _useState2[0],
      setSelectTitle = _useState2[1];

  var _useState3 = useState(props),
      _useState4 = _slicedToArray(_useState3, 2),
      stateDate = _useState4[0],
      setStateData = _useState4[1];

  useEffect(function () {
    setStateData(props);
  }, [props]);
  useEffect(function () {
    var _titleList$defaultTab;

    setSelectTitle((titleList == null ? void 0 : (_titleList$defaultTab = titleList[defaultTab]) == null ? void 0 : _titleList$defaultTab.value) || "");
  }, [defaultTab, titleList]);
  return /*#__PURE__*/_jsxs(Container, {
    children: [/*#__PURE__*/_jsx(Box, {
      children: /*#__PURE__*/_jsx(UserLogo, _extends({}, stateDate.dataLogo))
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        background: "#fff",
        borderRadius: "20px",
        padding: {
          xs: "40px 24px",
          md: "60px 40px",
          lg: "80px",
          xl: "80px 96px"
        },
        display: "flex",
        flexDirection: "column",
        width: "100%"
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          paddingBottom: {
            xs: "48px",
            md: "112px"
          },
          width: "100%",
          pointerEvents: isRender ? "auto" : "none"
        },
        children: /*#__PURE__*/_jsx(TabAccount, {
          titleList: stateDate.titleList,
          titleSelect: titleSelect,
          onChangeTab: function onChangeTab(v) {
            setSelectTitle(v);
            onChangeTag == null ? void 0 : onChangeTag();
          }
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: titleSelect === "account" ? "flex" : "none",
          width: "100%"
        },
        children: /*#__PURE__*/_jsx(ContentAccount, {
          contentAccount: stateDate.contentAccount,
          contentAddresses: stateDate.contentAddresses
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: titleSelect === "orders" ? "flex" : "none",
          width: "100%"
        },
        children: /*#__PURE__*/_jsx(ContentOrderList, _extends({}, stateDate.oderListContent))
      })]
    })]
  });
};

export default UserAccountContent;