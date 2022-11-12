import _extends from "@babel/runtime/helpers/esm/extends";

var _p, _p2, _p3, _p4;

// import Modules
import Box from '@mui/material/Box';
import React from 'react';
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/Image";
import HtmlRenderer from "../../atoms/HtmlRenderer";
import { IconBandaiNamco } from "../../atoms/Icon"; // import View port

import { TabletDown } from "../../utils/viewport"; // import Styles

import colors from "../../theme/colors";
import { Link, useMediaQuery, useTheme } from '@mui/material';
// import Type
import SocialShare from "../../molecules/SocialShare";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var SupportInfo = function SupportInfo(props) {
  var _button$variant;

  var title = props.title,
      button = props.button,
      mainImageUrlMobile = props.mainImageUrlMobile,
      mainImageUrl = props.mainImageUrl,
      suggestionCard = props.suggestionCard,
      footer = props.footer;
  var theme = useTheme();
  var isMobileDown = useMediaQuery(TabletDown(theme));
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      backgroundColor: colors.otherColor.ablabaster,
      maxWidth: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '0 auto'
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: '132px',
        position: 'relative'
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          textAlign: 'left',
          maxWidth: '70%',
          padding: {
            xs: '38px 0 38px 32px',
            lg: '32px 0 30px 32px'
          }
        },
        children: [/*#__PURE__*/_jsx(IconBandaiNamco, {
          sx: {
            width: '97px',
            height: '27px'
          }
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "h5",
          color: colors.primary.bandaiNamcoBlack,
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "div",
            value: title
          })
        })]
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: {
            xs: '225px'
          },
          position: 'absolute',
          right: 0,
          '& img': {
            objectFit: 'fill',
            width: '100%',
            height: '100%'
          }
        },
        children: /*#__PURE__*/_jsx(Image, {
          src: isMobileDown ? mainImageUrlMobile : mainImageUrl
        })
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        backgroundColor: colors.primary.bandaiNamcoWhite,
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 32px 40px',
        '& p': {
          fontWeight: '400',
          color: colors.primary.bandaiNamcoBlack,
          letterSpacing: {
            md: '-0.2px'
          },
          fontSize: {
            xs: '14px',
            md: '16px'
          },
          lineHeight: {
            xs: '20px',
            md: '22px'
          }
        }
      },
      children: [_p || (_p = /*#__PURE__*/_jsx("p", {
        children: "Hi [Customer],"
      })), _p2 || (_p2 = /*#__PURE__*/_jsx("p", {
        children: "You\u2019re all set to log into your account with your new password."
      })), _p3 || (_p3 = /*#__PURE__*/_jsx("p", {
        children: "You\u2019re all set to log into your account with your new password."
      })), _p4 || (_p4 = /*#__PURE__*/_jsx("p", {
        children: "If you didn\u2019t make this change, contact our support team at support@bandainamcoent.asia."
      })), /*#__PURE__*/_jsx(Button, {
        externalLink: button == null ? void 0 : button.externalLink,
        target: button == null ? void 0 : button.target,
        variant: (_button$variant = button == null ? void 0 : button.variant) != null ? _button$variant : 'primaryDark',
        sx: {
          width: {
            xs: '120px',
            md: '140px'
          },
          marginTop: {
            xs: '36px',
            md: '40px'
          }
        },
        children: button == null ? void 0 : button.label
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        gap: '20px',
        margin: '0 auto',
        backgroundColor: colors.neutral.neutral8,
        padding: '72px 32px',
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        },
        flexDirection: {
          xs: "column",
          md: "row"
        },
        alignItems: "center",
        justifyContent: "center",
        textAlign: {
          xs: 'center',
          md: 'left'
        }
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          flex: '1 1 50%',
          width: {
            xs: "100%",
            md: "261px"
          },
          height: '146px'
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            overflow: 'hidden',
            margin: '0 auto',
            marginRight: {
              xs: 'unset',
              lg: '54px'
            },
            width: {
              xs: '311px',
              md: '261px'
            },
            '& a': {
              width: '100%'
            },
            borderRadius: '20px',
            '& img': {
              userSelect: "none",
              "-webkit-user-select": "none",
              objectFit: 'cover',
              borderRadius: '20px',
              display: 'block',
              aspectRatio: '16/9',
              width: '100%',
              height: '100%',
              transform: "scale(1)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)"
              }
            }
          },
          children: /*#__PURE__*/_jsx(Link, {
            href: suggestionCard.linkHref,
            sx: {
              overflow: 'hidden',
              lineHeight: '0'
            },
            children: suggestionCard.nextImage || /*#__PURE__*/_jsx("img", {
              src: suggestionCard.mainImage,
              alt: title != null ? title : ''
            })
          })
        })
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          flex: '1 1 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: "100%",
          maxWidth: {
            xs: '100%',
            md: '457px',
            lg: '493px'
          },
          marginTop: {
            xs: '20px',
            lg: 'unset'
          }
        },
        children: [title && /*#__PURE__*/_jsx(Typography, {
          variant: "h5",
          sx: {
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            fontWeight: '700',
            color: {
              xs: colors.primary.bandaiNamcoBlack,
              md: colors.primary.dark
            },
            letterSpacing: {
              xs: '-0.4px',
              md: '-0.2px'
            },
            fontSize: {
              xs: '22px',
              md: '18px'
            },
            lineHeight: {
              xs: '28px',
              md: '24px'
            }
          },
          children: suggestionCard == null ? void 0 : suggestionCard.title
        }), (suggestionCard == null ? void 0 : suggestionCard.description) && /*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          sx: {
            margin: '6px 0 28px 0',
            color: colors.neutral.neutral2,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px'
          },
          children: suggestionCard == null ? void 0 : suggestionCard.description
        }), /*#__PURE__*/_jsx(Box, {
          children: /*#__PURE__*/_jsx(Button, _extends({}, suggestionCard == null ? void 0 : suggestionCard.buttonPropsLearnMore, {
            sx: {
              width: {
                xs: '138px !important',
                md: '149px !important'
              }
            }
          }))
        })]
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        backgroundColor: colors.primary.bandaiNamcoBlack,
        height: 'auto',
        width: '100%',
        padding: '56px 32px',
        '& a': {
          marginRight: '20px'
        },
        '& svg path': {
          fill: colors.primary.bandaiNamcoWhite
        }
      },
      children: [/*#__PURE__*/_jsx(SocialShare, _extends({}, footer == null ? void 0 : footer.socialShare)), /*#__PURE__*/_jsx(Box, {
        sx: {
          width: '100%',
          height: '1px',
          background: '#c1c1c1',
          opacity: '0.5',
          margin: '40px 0px'
        }
      }), /*#__PURE__*/_jsxs("p", {
        style: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          alignItems: 'center',
          color: '#9f9f9f',
          margin: 0
        },
        children: ["Shop now at", /*#__PURE__*/_jsx("a", {
          style: {
            color: '#9f9f9f'
          },
          href: "https://bandainamcoent.asia/store/",
          children: "store.bandainamcoent.asia"
        })]
      }), /*#__PURE__*/_jsxs("p", {
        style: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          alignItems: 'center',
          color: '#9f9f9f',
          marginTop: '8px',
          marginBottom: '8px'
        },
        children: ["Discover games at", /*#__PURE__*/_jsx("a", {
          style: {
            color: '#9f9f9f'
          },
          href: "https://bandainamcoent.asia",
          children: "bandainamcoent.asia"
        })]
      }), /*#__PURE__*/_jsx("p", {
        style: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          alignItems: 'center',
          color: '#9f9f9f',
          margin: 0
        },
        children: "\xA9 2022 Bandai Namco Entertainment Asia Pte. Ltd. All rights reserved."
      })]
    })]
  });
};

export default SupportInfo;