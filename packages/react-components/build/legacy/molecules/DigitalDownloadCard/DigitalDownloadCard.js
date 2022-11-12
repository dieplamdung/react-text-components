import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

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
var DigitalDownloadCard = function DigitalDownloadCard(props) {
  var _props$socialSharePro = props.socialShareProps,
      socialShareProps = _props$socialSharePro === void 0 ? {} : _props$socialSharePro,
      href = props.href,
      mainImageNext = props.mainImageNext,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      description = props.description,
      _props$memberCard = props.memberCard,
      memberCard = _props$memberCard === void 0 ? '' : _props$memberCard,
      _props$tags = props.tags,
      tags = _props$tags === void 0 ? [] : _props$tags,
      _props$socialShare = props.socialShare,
      socialShare = _props$socialShare === void 0 ? false : _props$socialShare,
      _props$target = props.target,
      target = _props$target === void 0 ? "_parent" : _props$target;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleClickSocialShare = function handleClickSocialShare(e) {
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
          alt: title != null ? title : ''
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
            border: "1px solid ".concat(colors.neutral.neutral2)
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
        children: tags == null ? void 0 : tags.map(function (tag, idx) {
          var _tag$title, _tag$color;

          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              width: "fit-content",
              marginRight: "4px",
              marginBottom: "5px"
            },
            children: /*#__PURE__*/_jsx(Tags, {
              title: typeof (tag == null ? void 0 : tag.title) === "string" ? tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase() : tag == null ? void 0 : tag.title,
              color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
            })
          }, idx);
        })
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
      onClick: function onClick(e) {
        e == null ? void 0 : e.stopPropagation();
      },
      children: /*#__PURE__*/_jsx(PopupShare, {
        tags: tags,
        title: title,
        isOpen: isOpen,
        onClose: function onClose() {
          return setIsOpen(false);
        },
        socialShareProps: socialShareProps
      })
    })]
  });
};

export default /*#__PURE__*/React.memo(DigitalDownloadCard);