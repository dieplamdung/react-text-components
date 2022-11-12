import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../../atoms/Typography";
import colors from "../../../theme/colors"; // eslint-disable-next-line import/no-cycle

import { WrapperContainer } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function Type(props) {
  var title = props.title,
      typeList = props.typeList,
      onSelectType = props.onSelectType,
      itemSelectType = props.itemSelectType,
      _props$isDisable = props.isDisable,
      isDisable = _props$isDisable === void 0 ? false : _props$isDisable,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? 0 : _props$padding;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      opacity: isDisable ? "0.4" : "1",
      pointerEvents: isDisable ? "none" : "auto"
    },
    children: [WrapperContainer( /*#__PURE__*/_jsx(Typography, {
      color: colors.neutral.neutral2,
      variant: "p6",
      children: title
    })), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        paddingTop: "14px",
        paddingLeft: {
          xs: "".concat(padding + 16, "px"),
          md: "".concat(padding, "px"),
          lg: "0px"
        }
      },
      children: !!(typeList != null && typeList.length) && typeList.map(function (item, index) {
        return /*#__PURE__*/_jsx(Box, {
          sx: {
            padding: "12.5px 32px",
            border: "1px solid",
            borderRadius: "40px",
            borderColor: (itemSelectType == null ? void 0 : itemSelectType.id) === (item == null ? void 0 : item.id) ? colors.secondary.bandaiNamcoBlue : colors.neutral.neutral5,
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": {
              borderColor: colors.secondary.bandaiNamcoBlue,
              "& p": {
                color: colors.secondary.bandaiNamcoBlue
              }
            }
          },
          onClick: function onClick() {
            return onSelectType == null ? void 0 : onSelectType(item);
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p7",
            sx: {
              lineHeight: {
                xs: "18px",
                lg: "19px"
              },
              fontWeight: "600",
              color: (itemSelectType == null ? void 0 : itemSelectType.id) === (item == null ? void 0 : item.id) ? colors.secondary.bandaiNamcoBlue : colors.primary.bandaiNamcoBlack
            },
            children: item == null ? void 0 : item.titleType
          })
        }, index);
      })
    })]
  });
}

export default Type;