"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _ButtonPrice = _interopRequireDefault(require("../../atoms/ButtonPrice"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _utils = require("../../utils");

var _CEOMessage = _interopRequireDefault(require("./CEOMessage"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// define function
const GameSuggestionsCard = props => {
  const {
    mainImageNext,
    mainImage = '',
    title = '',
    linkHref = '/',
    buttonProps,
    tags,
    priceProps = {
      label: 'From',
      currency: 'SGD',
      amount: 0
    },
    description,
    onlyButton = false,
    isBlogLayout = false,
    buttonPropsLearnMore,
    id,
    isMessageLayout = false,
    author
  } = props;
  const [openModal, setOpenModal] = (0, _react.useState)(false);
  const refContainer = (0, _react.useRef)(); // const refIsShow = useRef<any>();
  // dispatchEvent event send id to sub navigation

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const container = refContainer.current; // const height = window.innerHeight;

      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            // refIsShow.current = true;
            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event(`${id}`));
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //   refIsShow.current = false;
          //   window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]); // handle open Modal

  const handleOpenModal = e => {
    setOpenModal(e);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    id: id,
    ref: refContainer,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        display: 'flex',
        flexWrap: {
          xs: 'wrap',
          lg: 'nowrap'
        },
        flexDirection: {
          xs: "column",
          lg: "row"
        },
        alignItems: "center",
        justifyContent: "center"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          width: {
            xs: "100%",
            md: "auto"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            transform: 'rotate(0)',
            overflow: 'hidden',
            maxHeight: '257px',
            maxWidth: {
              xs: '100%',
              md: '457px'
            },
            width: "100%",
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
              width: '100%',
              height: {
                xs: '177px',
                md: '257px'
              },
              transform: "scale(1)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)"
              }
            }
          },
          children: !isMessageLayout ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
            href: linkHref,
            sx: {
              overflow: 'hidden',
              lineHeight: '0'
            },
            children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: mainImage,
              alt: title != null ? title : ''
            })
          }) : mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: mainImage,
            alt: title != null ? title : ''
          })
        }), isMessageLayout && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            marginTop: '16px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            sx: {
              color: _colors.default.neutral.neutral2
            },
            children: author == null ? void 0 : author.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p8",
            sx: {
              color: _colors.default.neutral.neutral2,
              marginTop: '4px'
            },
            children: author == null ? void 0 : author.position
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          flex: "1",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: "100%",
          paddingLeft: {
            xs: 'unset',
            lg: '54px'
          },
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h5",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden'
          },
          children: title
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          sx: {
            margin: {
              xs: '6px 0 28px 0',
              md: '12px 0 36px 0'
            },
            color: _colors.default.neutral.neutral2,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden'
          },
          children: description
        }), !!(tags != null && tags.length) && !isMessageLayout && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            display: 'flex',
            flexWrap: "wrap",
            margin: '26px 0 0  0',
            gap: '12px',
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
                whiteSpace: "nowrap",
                color: _colors.default.neutral.neutral2
              }
            }
          },
          children: tags == null ? void 0 : tags.map((tag, index) => typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/(0, _react.createElement)(_Tags.default, (0, _extends2.default)({}, tag, {
            key: index
          })) : tag.title)
        }), isBlogLayout && !isMessageLayout && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            marginTop: '16px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "l1",
            color: _colors.default.neutral.neutral2,
            sx: {
              fontSize: {
                xs: '12px',
                md: '14px'
              },
              lineHeight: '19px',
              fontWeight: 400
            },
            children: priceProps == null ? void 0 : priceProps.label
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
            variant: "p7",
            color: _colors.default.primary.bandaiNamcoBlack,
            children: [priceProps == null ? void 0 : priceProps.currency, " ", !priceProps.noFormat ? (0, _utils.formatCurrency)((priceProps == null ? void 0 : priceProps.amount) || 0, 2) : priceProps == null ? void 0 : priceProps.amount]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            minWidth: '117px',
            width: "100%",
            display: "flex",
            marginTop: isMessageLayout ? '0px' : '26px',
            justifyContent: "flex-start",
            '& a': {
              width: "120px"
            },
            "& .style-ButtonPrice": {
              display: "flex"
            },
            "& > div > div": {
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '0px',
              marginTop: '0px'
            }
          },
          className: "wrapper-btn-cart",
          children: !isMessageLayout ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            children: [onlyButton ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonProps)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                '& .style-ButtonPrice': {
                  display: 'flex',
                  alignItems: 'center',
                  '&  div': {
                    marginLeft: '12px',
                    marginTop: '0px',
                    flexDirection: 'column'
                  }
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonPrice.default, {
                buttonProps: buttonProps,
                priceProps: priceProps
              })
            }), isBlogLayout && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsLearnMore, {
              sx: {
                width: {
                  xs: '138px !important',
                  md: '149px !important'
                },
                marginLeft: '12px'
              }
            }))]
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonProps, {
            onClick: () => handleOpenModal(true)
          }))
        })]
      })]
    }), isMessageLayout && /*#__PURE__*/(0, _jsxRuntime.jsx)(_CEOMessage.default, (0, _extends2.default)({
      isOpen: openModal,
      onClose: handleOpenModal
    }, author, {
      name: author == null ? void 0 : author.name,
      position: author == null ? void 0 : author.position
    }))]
  });
};

var _default = GameSuggestionsCard;
exports.default = _default;