import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material'; // Types

import Container from "../../atoms/Container";
import TabAccount from "../../molecules/TabAccount";
import UserLogo from "../../molecules/UserLogo";
import ContentAccount from "./ContentAccount";
import ContentOrderList from "./ContentOrderList";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const UserAccountContent = props => {
  const {
    titleList,
    defaultTab = 0,
    isRender = false,
    onChangeTag
  } = props;
  const [titleSelect, setSelectTitle] = useState("");
  const [stateDate, setStateData] = useState(props);
  useEffect(() => {
    setStateData(props);
  }, [props]);
  useEffect(() => {
    setSelectTitle(titleList?.[defaultTab]?.value || "");
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
          onChangeTab: v => {
            setSelectTitle(v);
            onChangeTag?.();
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