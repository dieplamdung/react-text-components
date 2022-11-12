import _extends from "@babel/runtime/helpers/esm/extends";

var _IconClose;

import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useEffect } from 'react';
import { IconClose } from "../../atoms/Icon";
import Tags from "../../atoms/Tags";
import Typography from "../../atoms/Typography";
import SocialShare from "../../molecules/SocialShare";
import colors from "../../theme/colors";
import { disableScrollBody } from "../../utils/disableScrollBody"; // import { useScrollBlock } from '~/utils/useScrollBlock';
// import { MobileDown } from '~/utils/viewport';
// import { CustomThemeType } from '~/theme';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const PopupShare = ({
  isOpen,
  tags = [],
  onClose,
  title,
  socialShareProps
}) => {
  // const theme = useTheme() as CustomThemeType;
  // const isMobileDown = useMediaQuery(MobileDown(theme));
  // const [blockScroll, allowScroll] = useScrollBlock();
  // const [heightStateScroll, setHeightStateScroll] = useState(0)
  useEffect(() => {
    // let heightScroll = 0
    // if (isMobileDown) {
    // if (isOpen) {
    // heightScroll = window.pageYOffset;
    // setHeightStateScroll(window.pageYOffset)
    // document.body.classList.add('disable-scroll');
    // document.body.style.top = `-${heightScroll}px`;
    // blockScroll()
    // } else {
    // allowScroll()
    // document.body.classList.remove('disable-scroll');
    // document.body.style.top = ``;
    // window.scrollTo(0, heightStateScroll);
    // }
    // } else if (isOpen) {
    //     blockScroll()
    // } else {
    //     allowScroll()
    // }
    if (typeof window !== "undefined") {
      disableScrollBody(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/_jsx(Modal, {
    open: isOpen,
    onClose: () => onClose == null ? void 0 : onClose(),
    disableAutoFocus: true,
    disableEnforceFocus: true,
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsx(Box, {
      sx: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: {
          md: "547px",
          xs: "100%"
        },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      children: /*#__PURE__*/_jsxs(Box, {
        id: "box-modal-sa",
        sx: {
          position: 'relative',
          backgroundColor: colors.neutral.white,
          borderRadius: '20px',
          minHeight: {
            xs: "324px",
            md: "365px"
          },
          maxHeight: '90%',
          maxWidth: {
            xs: "311px",
            md: "100%"
          },
          width: '100%',
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "30px 30px 72px 30px",
            md: "32px 32px 64px 32px"
          },
          overflow: 'auto'
        },
        color: colors.secondaryGray.shade600,
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "16px",
            "& svg": {
              cursor: "pointer",
              userSelect: "all"
            }
          },
          onClick: () => onClose == null ? void 0 : onClose(),
          children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
        }), /*#__PURE__*/_jsxs(Box, {
          children: [!!(tags != null && tags.length) && /*#__PURE__*/_jsx(Box, {
            sx: {
              marginBottom: "16px"
            },
            children: tags.map((tag, idx) => {
              var _tag$title, _tag$color;

              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  display: 'inline-block',
                  marginRight: '4px'
                },
                children: /*#__PURE__*/_jsx(Tags, {
                  title: typeof (tag == null ? void 0 : tag.title) === 'string' ? tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase() : tag == null ? void 0 : tag.title,
                  color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
                })
              }, idx);
            })
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "h6",
            color: colors.primary.bandaiNamcoBlack,
            sx: {
              marginTop: {
                xs: '16px',
                md: '24px',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                overflow: 'hidden'
              }
            },
            children: title
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p7",
            color: colors.otherColor.silver,
            sx: {
              marginTop: {
                xs: '16px',
                md: '40px'
              }
            },
            children: socialShareProps == null ? void 0 : socialShareProps.title
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: '16px'
            },
            children: /*#__PURE__*/_jsx(SocialShare, _extends({}, socialShareProps == null ? void 0 : socialShareProps.socialShareProps, {
              positionShowCopy: "right"
            }))
          })]
        })]
      })
    })
  });
};

export default PopupShare;