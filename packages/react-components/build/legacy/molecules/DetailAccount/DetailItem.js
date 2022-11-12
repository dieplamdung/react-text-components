import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function DetailItem(props) {
  var _props$detail = props.detail,
      detail = _props$detail === void 0 ? [] : _props$detail,
      _props$isPassWord = props.isPassWord,
      isPassWord = _props$isPassWord === void 0 ? false : _props$isPassWord;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      detailContent = _useState2[0],
      setDetailContent = _useState2[1];

  useEffect(function () {
    setDetailContent(detail);
  }, [detail]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: !!detailContent.length && detailContent.map(function (itemList, index) {
      return /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          marginBottom: {
            xs: "20px",
            md: "46px"
          },
          "&:last-child": {
            marginBottom: "0px"
          }
        },
        children: !!itemList.length && itemList.map(function (item, idx) {
          if (isPassWord && idx === 0) {
            return /*#__PURE__*/_jsxs(Box, {
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                paddingRight: {
                  xs: "0px",
                  md: "20px"
                },
                marginBottom: {
                  xs: "20px",
                  md: "0px"
                },
                "&:last-child": {
                  marginBottom: "0px"
                }
              },
              children: [/*#__PURE__*/_jsx(Typography, {
                color: colors.neutral.neutral2,
                variant: "p7",
                sx: {
                  lineHeight: "19px",
                  fontWeight: "600"
                },
                children: item == null ? void 0 : item.title
              }), !!(item != null && item.title) && /*#__PURE__*/_jsx(Typography, {
                color: colors.primary.bandaiNamcoBlack,
                variant: "p7",
                sx: {
                  height: "19px",
                  fontWeight: "600",
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  WebkitBoxOrient: 'vertical',
                  "& div": {
                    width: "4px",
                    height: '4px',
                    borderRadius: "2px",
                    marginRight: '2px',
                    background: colors.primary.bandaiNamcoBlack
                  }
                },
                children: Array(12).fill(null).map(function (_, idxx) {
                  return /*#__PURE__*/_jsx(Box, {}, idxx);
                })
              })]
            }, idx);
          }

          if (!isPassWord) {
            return /*#__PURE__*/_jsxs(Box, {
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                paddingRight: {
                  xs: "0px",
                  md: "20px"
                },
                marginBottom: {
                  xs: "20px",
                  md: "0px"
                },
                "&:last-child": {
                  marginBottom: "0px"
                }
              },
              children: [/*#__PURE__*/_jsx(Typography, {
                color: colors.neutral.neutral2,
                variant: "p7",
                sx: {
                  lineHeight: "19px",
                  fontWeight: "600"
                },
                children: item == null ? void 0 : item.title
              }), /*#__PURE__*/_jsx(Typography, {
                color: colors.primary.bandaiNamcoBlack,
                variant: "p7",
                sx: {
                  lineHeight: "19px",
                  fontWeight: "400",
                  marginTop: "2px",
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: "1"
                  /* number of lines to show */
                  ,
                  lineClamp: "1",
                  WebkitBoxOrient: 'vertical'
                },
                children: item == null ? void 0 : item.value
              })]
            }, idx);
          }

          return null;
        })
      }, index);
    })
  });
}

export default DetailItem;