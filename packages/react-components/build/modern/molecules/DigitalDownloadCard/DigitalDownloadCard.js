var _IconShareInline;

// import modules
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { IconShareInline } from "../../atoms/Icon";
import Tags from "../../atoms/Tags";
import Typography from "../../atoms/Typography";
import PopupShare from "../../organisms/PopupShare";
import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const DigitalDownloadCard = props => {
  const {
    socialShareProps = {},
    href,
    mainImageNext,
    mainImage = '',
    title = '',
    description,
    memberCard = '',
    tags = [],
    socialShare = false,
    target = "_parent"
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClickSocialShare = e => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      cursor: 'pointer',
      display: "flex",
      flexDirection: "column",
      backgroundColor: colors.primary.bandaiNamcoWhite,
      height: "100%",
      borderRadius: '20px',
      position: 'relative',
      minWidth: {
        xs: '311px',
        md: '357px'
      },
      width: "100%"
    },
    children: [socialShare && /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "absolute",
        right: "12px",
        top: "12px",
        zIndex: "3"
      },
      onClick: handleClickSocialShare,
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
          },
          "& svg": {
            width: "14px",
            height: "16px"
          }
        },
        children: _IconShareInline || (_IconShareInline = /*#__PURE__*/_jsx(IconShareInline, {}))
      })
    }), /*#__PURE__*/_jsx(Link, {
      href: href,
      target: target,
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          maxWidth: '100%',
          height: "200px",
          borderRadius: '20px 20px 0 0',
          backgroundColor: "#eee",
          overflow: "hidden",
          transform: 'rotate(0)',
          "&:hover": {
            '& img': {
              transform: "scale(1.2)"
            }
          },
          '& img': {
            objectFit: 'cover',
            display: 'block',
            width: '100%',
            height: '100%',
            transition: "all 0.3s"
          }
        },
        children: [mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title ?? ''
        }), memberCard && /*#__PURE__*/_jsx(Typography, {
          sx: {
            position: 'absolute',
            right: 20,
            top: 20,
            padding: '4px 8px 6px 8px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '5px',
            color: colors.primary.bandaiNamcoWhite
          },
          variant: "l1",
          children: memberCard.toUpperCase()
        })]
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        flex: "1",
        padding: {
          md: '28px  32px 40px',
          xs: '24px 28px 32px'
        },
        flexDirection: 'column',
        border: "1px solid",
        borderTop: '0px',
        borderColor: "transparent #F1F1F1 #F1F1F1 #F1F1F1",
        borderRadius: '0px 0px 20px 20px ',
        display: 'flex',
        gap: '4px'
      },
      children: [!!tags.length && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: {
            xs: "4px",
            md: "10px"
          },
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
              color: colors.neutral.neutral2
            }
          }
        },
        children: tags?.map((tag, idx) => /*#__PURE__*/_jsx(Box, {
          sx: {
            display: 'flex',
            width: "fit-content",
            marginRight: "4px",
            marginBottom: "5px"
          },
          children: /*#__PURE__*/_jsx(Tags, {
            title: typeof tag?.title === "string" ? tag?.title?.toUpperCase() : tag?.title,
            color: tag?.color ?? ''
          })
        }, idx))
      }), /*#__PURE__*/_jsx(Link, {
        href: href,
        target: target,
        sx: {
          textDecoration: "none"
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            lineHeight: {
              xs: '20px',
              md: '22px'
            },
            WebkitLineClamp: 2,
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical'
          },
          children: title
        })
      }), !!description && /*#__PURE__*/_jsx(Typography, {
        color: colors.neutral.neutral2,
        variant: "p8",
        sx: {
          WebkitLineClamp: 3,
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical'
        },
        children: description
      })]
    }), /*#__PURE__*/_jsx(Box, {
      onClick: e => {
        e?.stopPropagation();
      },
      children: /*#__PURE__*/_jsx(PopupShare, {
        tags: tags,
        title: title,
        isOpen: isOpen,
        onClose: () => setIsOpen(false),
        socialShareProps: socialShareProps
      })
    })]
  });
};

export default /*#__PURE__*/React.memo(DigitalDownloadCard);