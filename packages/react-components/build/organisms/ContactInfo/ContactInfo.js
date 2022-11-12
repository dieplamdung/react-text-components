var _IconNextSlide;

// import modules
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useMediaQuery, useTheme, Link } from '@mui/material'; // custom theme

// import view port
import { TabletDown } from "../../utils/viewport"; // import colors

import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/Image";
import { IconNextSlide } from "../../atoms/Icon";
import HtmlRenderer from "../../atoms/HtmlRenderer";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ContactInfo = props => {
  const {
    title,
    subtitle,
    directionLinkProps,
    emailTitle,
    emailValue,
    phoneTitle,
    phoneValue,
    mainImageUrl,
    mainImageUrlMobile,
    isKorea = false
  } = props;
  const theme = useTheme();
  const isMobileDown = useMediaQuery(TabletDown(theme));
  return /*#__PURE__*/_jsx(Box, {
    children: /*#__PURE__*/_jsx(Box, {
      sx: {
        backgroundColor: colors.otherColor.ablabaster,
        borderRadius: '20px'
      },
      children: /*#__PURE__*/_jsxs(Grid, {
        container: true,
        sx: {
          '& a': {
            textDecoration: 'none'
          },
          '&:hover': {
            '& a': {
              textDecoration: 'none'
            }
          }
        },
        children: [/*#__PURE__*/_jsxs(Grid, {
          item: true,
          lg: 6,
          sx: {
            padding: {
              xl: '64px 0px 74px 95px',
              xs: '40px 24px 24px 24px'
            }
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "h3",
            color: colors.primary.bandaiNamcoBlack,
            sx: {
              marginBottom: '11px',
              fontSize: isKorea ? "30px" : '42px'
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: title
            })
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            color: colors.neutral.neutral2,
            sx: {
              marginBottom: '14px'
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: subtitle
            })
          }), /*#__PURE__*/_jsx(Link, {
            href: directionLinkProps == null ? void 0 : directionLinkProps.externalLink,
            target: (directionLinkProps == null ? void 0 : directionLinkProps.target) || '_blank',
            sx: {
              display: 'inline-block'
            },
            children: /*#__PURE__*/_jsxs(Typography, {
              variant: "p7",
              color: colors.primary.bandaiNamcoBlack,
              sx: {
                display: 'flex',
                alignItems: 'center',
                '& svg': {
                  height: '10px',
                  marginTop: '2px',
                  marginLeft: '10px'
                }
              },
              children: [directionLinkProps == null ? void 0 : directionLinkProps.label, _IconNextSlide || (_IconNextSlide = /*#__PURE__*/_jsx(IconNextSlide, {
                htmlColor: "transparent"
              }))]
            })
          }), /*#__PURE__*/_jsxs(Box, {
            children: [/*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              color: colors.primary.bandaiNamcoBlack,
              sx: {
                marginBottom: '4px',
                marginTop: {
                  xs: '32px',
                  md: '36px'
                }
              },
              children: emailTitle
            }), /*#__PURE__*/_jsx(Link, {
              href: `mailto:${emailValue}`,
              sx: {
                display: 'inline-block',
                lineHeight: "0px"
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p8",
                color: colors.neutral.neutral2,
                children: emailValue
              })
            })]
          }), /*#__PURE__*/_jsxs(Box, {
            sx: {
              marginTop: {
                xs: '32px',
                md: '36px'
              },
              marginBottom: '0px'
            },
            children: [/*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              color: colors.primary.bandaiNamcoBlack,
              sx: {
                marginBottom: '4px'
              },
              children: phoneTitle
            }), /*#__PURE__*/_jsx(Link, {
              href: `tel:${phoneValue}`,
              sx: {
                display: 'inline-block'
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p8",
                color: colors.neutral.neutral2,
                sx: {
                  marginBottom: '14px'
                },
                children: phoneValue
              })
            })]
          })]
        }), /*#__PURE__*/_jsx(Grid, {
          item: true,
          lg: 6,
          sx: {
            position: 'relative',
            paddingTop: {
              xs: '46px',
              lg: '0px'
            }
          },
          children: /*#__PURE__*/_jsx(Image, {
            src: isMobileDown ? mainImageUrlMobile : mainImageUrl,
            sx: {
              borderTopRightRadius: {
                xl: '20px',
                lg: '20px',
                xs: '0px'
              },
              position: {
                xs: 'relative'
              },
              borderBottomRightRadius: '20px',
              borderBottomLeftRadius: {
                xl: '0px',
                lg: '0px',
                xs: '20px'
              }
            }
          })
        })]
      })
    })
  });
};

export default ContactInfo;