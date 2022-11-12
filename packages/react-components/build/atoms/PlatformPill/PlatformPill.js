import React from 'react';
import { Chip } from '@mui/material'; // Types

import useMediaQuery from '@mui/material/useMediaQuery';
import { isStringEmptyOrBlank } from "../../utils/isStringEmpty";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
export default function PlatformPill(props) {
  const {
    platform
  } = props;
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('lg'));

  if (isStringEmptyOrBlank(platform)) {
    // if platform is an empty string or whitespace, return null
    return null;
  }

  return /*#__PURE__*/_jsx(Chip, {
    label: platform,
    variant: "outlined",
    sx: {
      minWidth: isMobile ? '0' : '40px',
      height: '100%',
      padding: '3px 0',
      color: isMobile ? colors.neutral.neutral2 : colors.primary.bandaiNamcoWhite,
      borderColor: isMobile ? colors.neutral.neutral5 : colors.accent.accentWhite[2],
      borderRadius: '5px',
      span: {
        paddingLeft: '6px',
        paddingRight: '6px',
        fontSize: '10px',
        lineHeight: isMobile ? '12px' : '14px',
        fontWeight: 700
      }
    }
  });
}