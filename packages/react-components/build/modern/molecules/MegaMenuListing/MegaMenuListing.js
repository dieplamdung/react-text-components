var _svg;

// import modules
import Box from '@mui/material/Box';
import React, { useMemo, useState } from 'react'; // import Link from '@mui/material/Link';

import colors from "../../theme/colors";
import Typography from "../../atoms/Typography"; // Types

import { Link } from '@mui/material';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const MegaMenuListing = ({
  title,
  header,
  imgUrl,
  listSub,
  hadArrow = true,
  isShow = false,
  isSmall = false,
  slug
}) => {
  const [isShowList, setIsShowList] = useState(false);

  const Icon = _svg || (_svg = /*#__PURE__*/_jsx("svg", {
    width: "6",
    height: "11",
    viewBox: "0 0 6 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/_jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.625 5.37377L1.69286 0.631683C1.42009 0.319955 0.946272 0.288367 0.634545 0.561129C0.322817 0.83389 0.291229 1.30771 0.563991 1.61944L3.63185 5.37377L0.572631 9.12714C0.299869 9.43887 0.331458 9.91269 0.643185 10.1855C0.954912 10.4582 1.42873 10.4266 1.7015 10.1149L5.625 5.37377Z",
      fill: "#1E1E1E"
    })
  }));

  const heightSubList = useMemo(() => {
    const result = {
      xs: 0,
      md: 0
    };

    if (!listSub || !listSub.length) {
      result.xs = "auto";
      result.md = "auto";
      return result;
    }

    listSub.map(item => {
      if (isSmall) {
        result.xs += 28;
        result.md += 25;
      } else {
        result.xs += 44;
        result.md += 50;
      }

      return item;
    });
    result.xs += "px";
    result.md += "px";
    return result;
  }, [isSmall, listSub]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column"
    },
    children: [title && /*#__PURE__*/_jsx(Typography, {
      sx: {
        color: "#9F9B9B",
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: "350",
        textAlign: "left",
        letterSpacing: "-0.5px",
        marginBottom: "10px"
      },
      children: title
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        overflowX: "hidden",
        position: "relative"
      },
      onClick: () => setIsShowList(!isShowList),
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          flex: 1,
          display: "flex",
          alignItems: "center",
          "& img": {
            width: "55px",
            height: "55px",
            marginRight: "16px",
            objectFit: "cover",
            borderRadius: "50%"
          }
        },
        children: [!!imgUrl && /*#__PURE__*/_jsx("img", {
          src: imgUrl,
          alt: ""
        }), !!listSub && !!listSub?.length ? /*#__PURE__*/_jsx(Typography, {
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: "600"
          },
          children: header
        }) : /*#__PURE__*/_jsx(Link, {
          color: colors.primary.bandaiNamcoBlack,
          href: slug,
          sx: {
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: "600",
            textDecoration: "none",
            width: "100%"
          },
          children: header
        })]
      }), (!!listSub && !!listSub?.length || hadArrow) && /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "15px",
          height: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: isShowList ? "rotate(-90deg)" : "rotate(0deg)",
          transition: "all 0.2s"
        },
        children: Icon
      })]
    }), !!listSub && !!listSub?.length && /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: isShow || isShowList ? "2px" : "0px",
        height: {
          xs: isShow || isShowList ? `${heightSubList.xs}` : "0px",
          md: isShow || isShowList ? `${heightSubList.md}` : "0px"
        },
        overflow: "hidden",
        transition: "all 0.3s"
      },
      children: listSub.map((item, index) => {
        return /*#__PURE__*/_jsx(Link, {
          href: item.value,
          variant: "p4",
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            marginTop: isSmall ? "6px" : "22px",
            textDecoration: "none",
            lineHeight: isSmall ? "19px" : "22px"
          },
          children: item.title
        }, index);
      })
    })]
  });
};

export default MegaMenuListing;