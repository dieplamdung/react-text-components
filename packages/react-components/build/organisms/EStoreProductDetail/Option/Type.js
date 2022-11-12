import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../../atoms/Typography";
import colors from "../../../theme/colors"; // eslint-disable-next-line import/no-cycle

import { WrapperContainer } from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function Type(props) {
  const {
    title,
    typeList,
    onSelectType,
    itemSelectType,
    isDisable = false,
    padding = 0
  } = props;
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
          xs: `${padding + 16}px`,
          md: `${padding}px`,
          lg: "0px"
        }
      },
      children: !!(typeList != null && typeList.length) && typeList.map((item, index) => {
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
          onClick: () => onSelectType == null ? void 0 : onSelectType(item),
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