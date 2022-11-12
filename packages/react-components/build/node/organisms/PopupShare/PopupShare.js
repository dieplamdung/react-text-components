"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _Modal = _interopRequireDefault(require("@mui/material/Modal"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../../atoms/Icon");

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _SocialShare = _interopRequireDefault(require("../../molecules/SocialShare"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  (0, _react.useEffect)(() => {
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
      (0, _disableScrollBody.disableScrollBody)(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
    open: isOpen,
    onClose: () => onClose == null ? void 0 : onClose(),
    disableAutoFocus: true,
    disableEnforceFocus: true,
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        id: "box-modal-sa",
        sx: {
          position: 'relative',
          backgroundColor: _colors.default.neutral.white,
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
        color: _colors.default.secondaryGray.shade600,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
          children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          children: [!!(tags != null && tags.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              marginBottom: "16px"
            },
            children: tags.map((tag, idx) => {
              var _tag$title, _tag$color;

              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  display: 'inline-block',
                  marginRight: '4px'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
                  title: typeof (tag == null ? void 0 : tag.title) === 'string' ? tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase() : tag == null ? void 0 : tag.title,
                  color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
                })
              }, idx);
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h6",
            color: _colors.default.primary.bandaiNamcoBlack,
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p7",
            color: _colors.default.otherColor.silver,
            sx: {
              marginTop: {
                xs: '16px',
                md: '40px'
              }
            },
            children: socialShareProps == null ? void 0 : socialShareProps.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              marginTop: '16px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialShare.default, (0, _extends2.default)({}, socialShareProps == null ? void 0 : socialShareProps.socialShareProps, {
              positionShowCopy: "right"
            }))
          })]
        })]
      })
    })
  });
};

var _default = PopupShare;
exports.default = _default;