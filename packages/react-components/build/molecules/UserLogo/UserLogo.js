// import modules
import Box from '@mui/material/Box';
import React from 'react';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";

// define function
const UserLogo = props => {
  const {
    // nextLogo,
    // hrefImg,
    userName // alt

  } = props;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: {
        xs: "40px 0px 48px 12px",
        md: "50px 0px 62px 44px",
        lg: "100px 0px 112px 94px"
      }
    },
    children: /*#__PURE__*/_jsx(Typography, {
      variant: "h1",
      color: colors.primary.bandaiNamcoBlack // sx={{
      //   marginLeft: {
      //     xs: "16px",
      //     md: "32px"
      //   }
      // }}
      ,
      children: userName || ""
    })
  });
};

export default /*#__PURE__*/React.memo(UserLogo);