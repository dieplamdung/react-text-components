"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../../atoms/Icon");

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _PopupShare = _interopRequireDefault(require("../../organisms/PopupShare"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconShareInline;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  const [isOpen, setIsOpen] = (0, _react.useState)(false);

  const handleClickSocialShare = e => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      cursor: 'pointer',
      display: "flex",
      flexDirection: "column",
      backgroundColor: _colors.default.primary.bandaiNamcoWhite,
      height: "100%",
      borderRadius: '20px',
      position: 'relative',
      minWidth: {
        xs: '311px',
        md: '357px'
      },
      width: "100%"
    },
    children: [socialShare && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        position: "absolute",
        right: "12px",
        top: "12px",
        zIndex: "3"
      },
      onClick: handleClickSocialShare,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
        children: _IconShareInline || (_IconShareInline = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconShareInline, {}))
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      href: href,
      target: target,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
        children: [mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        }), memberCard && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          sx: {
            position: 'absolute',
            right: 20,
            top: 20,
            padding: '4px 8px 6px 8px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '5px',
            color: _colors.default.primary.bandaiNamcoWhite
          },
          variant: "l1",
          children: memberCard.toUpperCase()
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
      children: [!!tags.length && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
            border: `1px solid ${_colors.default.neutral.neutral2}`
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: _colors.default.neutral.neutral2
              }
            },
            '& p': {
              color: _colors.default.neutral.neutral2
            }
          }
        },
        children: tags == null ? void 0 : tags.map((tag, idx) => {
          var _tag$title, _tag$color;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              display: 'flex',
              width: "fit-content",
              marginRight: "4px",
              marginBottom: "5px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
              title: typeof (tag == null ? void 0 : tag.title) === "string" ? tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase() : tag == null ? void 0 : tag.title,
              color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
            })
          }, idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: href,
        target: target,
        sx: {
          textDecoration: "none"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack,
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
      }), !!description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: _colors.default.neutral.neutral2,
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      onClick: e => {
        e == null ? void 0 : e.stopPropagation();
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopupShare.default, {
        tags: tags,
        title: title,
        isOpen: isOpen,
        onClose: () => setIsOpen(false),
        socialShareProps: socialShareProps
      })
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(DigitalDownloadCard);

exports.default = _default;