var _IconNitendo, _IconPlaystation, _IconPlaystation2, _IconXbox, _IconSteam, _IconSteam2;

import Box from '@mui/material/Box';
import React, { memo } from 'react';
import Typography from "../../atoms/Typography"; // Styles

import colors from "../../theme/colors"; // Types

import { Link } from '@mui/material';
import { IconNitendo, IconPlaystation, IconXbox, IconSteam } from "../../atoms/Icon";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// Icon PC = icon Steam
export const ConvertPlatformToIcon = title => {
  const icons = {
    Ni: _IconNitendo || (_IconNitendo = /*#__PURE__*/_jsx(IconNitendo, {})),
    PS: _IconPlaystation || (_IconPlaystation = /*#__PURE__*/_jsx(IconPlaystation, {})),
    Pl: _IconPlaystation2 || (_IconPlaystation2 = /*#__PURE__*/_jsx(IconPlaystation, {})),
    XB: _IconXbox || (_IconXbox = /*#__PURE__*/_jsx(IconXbox, {})),
    PC: _IconSteam || (_IconSteam = /*#__PURE__*/_jsx(IconSteam, {})),
    St: _IconSteam2 || (_IconSteam2 = /*#__PURE__*/_jsx(IconSteam, {}))
  };
  return icons[title || ''];
};

const MoreGameListingCard = props => {
  const {
    mainImage = '',
    title = '',
    tags,
    locale = '',
    mainImageNext,
    href
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row"
      },
      alignItems: "center",
      borderRadius: '20px'
    },
    children: [/*#__PURE__*/_jsx(Link, {
      href: href,
      sx: {
        textDecoration: "none",
        width: '100%'
      },
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          width: {
            xs: "100%",
            md: "150px",
            lg: "262px"
          },
          minWidth: {
            xs: "100%",
            md: "150px",
            lg: "262px"
          },
          height: {
            xs: '200px',
            md: "140px",
            lg: '169px'
          },
          borderRadius: '20px',
          overflow: "hidden",
          transform: 'rotate(0)',
          '& span': {
            width: '100% !important',
            height: '100% !important'
          },
          '& img': {
            objectFit: 'cover',
            borderRadius: '20px',
            display: 'block',
            width: '100%',
            height: '100%',
            transition: "all 0.3s",
            "&:hover": {
              transform: "scale(1.2)"
            }
          }
        },
        children: mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        padding: {
          xs: "24px 0 0 0",
          md: "0  0 0 24px"
        },
        width: '100%'
      },
      children: [/*#__PURE__*/_jsx(Link, {
        href: href,
        sx: {
          textDecoration: "none"
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            marginBottom: '8px'
          },
          children: /*#__PURE__*/_jsx(Typography, {
            color: colors.primary.bandaiNamcoBlack,
            variant: "p1",
            sx: {
              maxWidth: {
                xs: "100%",
                md: "277px"
              },
              fontSize: {
                xs: "20px"
              },
              lineHeight: {
                xs: "26px"
              },
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              "-webkit-line-clamp": "2",

              /* number of lines to show */
              lineClamp: "2",
              "-webkit-box-orient": "vertical"
            },
            children: title
          })
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          flexWrap: "wrap",
          marginTop: "8px",
          gap: '12px',
          '& .bgTag': {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.neutral.neutral2}`
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: colors.neutral.neutral2
              }
            },
            '& p': {
              whiteSpace: "nowrap",
              color: colors.neutral.neutral2
            }
          }
        },
        children: !!tags.length && tags.map((tag, index) => {
          return /*#__PURE__*/_jsx(Box, {
            children: ConvertPlatformToIcon(tag)
          }, index);
        })
      }), /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(Typography, {
          color: colors.neutral.neutral2,
          variant: "l2",
          sx: {
            marginTop: "8px"
          },
          children: locale
        })
      })]
    })]
  });
};

export default /*#__PURE__*/memo(MoreGameListingCard);