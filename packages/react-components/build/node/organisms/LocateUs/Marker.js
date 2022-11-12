"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _react = _interopRequireWildcard(require("react"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _jsxRuntime = require("react/jsx-runtime");

var _IconMarker, _svg;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const cx = _bind.default;

const Marker = props => {
  const {
    sx,
    mainImageNextProps,
    image,
    title,
    address,
    infoLink,
    position,
    continentActive,
    continent
  } = props;
  const [clickedOn, setClickedOn] = (0, _react.useState)(false);
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const wrapperRef = (0, _react.useRef)(null);
  const useStyles = (0, _styles.makeStyles)(() => ({
    animatedItem: {
      transformOrigin: "bottom",
      animationName: "$bounce",
      animationFillMode: "both",
      animationDuration: '1s'
    },
    "@keyframes bounce": {
      "0%": {
        opacity: 0,
        transform: "translateY(-300px)"
      },
      "60%": {
        opacity: 1,
        transform: "scaleY(0.6) translateY(30px)"
      },
      "100%": {
        transform: "scaleY(1) translateY(0)"
      }
    }
  }));
  const classes = useStyles();

  const handleClickShowInfo = () => {
    setClickedOn(!clickedOn);
  };

  const useOutsideAlerter = ref => {
    (0, _react.useEffect)(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setClickedOn(false);
        }
      } // Bind the event listener


      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: (0, _extends2.default)({}, sx, {
        '&:hover': {
          '& div + div': {
            visibility: 'visible',
            opacity: '1'
          }
        }
      }),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        className: `${cx(classes.animatedItem)} ${clickedOn ? 'active' : ''} ${continentActive === 0 && continent === 'asia' ? 'activeMarker' : ''} ${continentActive === 1 && continent === 'other' ? 'activeMarker' : ''}`,
        onClick: () => handleClickShowInfo(),
        ref: wrapperRef,
        sx: {
          '&.active': {
            '& svg': {
              '& path': {
                fill: _colors.default.primary.bandaiNamcoRed
              }
            }
          },
          '&.activeMarker': {
            '& svg': {
              '& path': {
                fill: _colors.default.primary.bandaiNamcoRed
              }
            }
          },
          pointerEvents: {
            xs: 'none',
            md: 'auto'
          },
          userSelect: {
            xs: 'none',
            md: 'auto'
          },
          '& svg': {
            transform: 'scale(1.5)'
          }
        },
        children: _IconMarker || (_IconMarker = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconMarker, {}))
      }), !isMobileDown && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        className: clickedOn ? 'active' : '',
        sx: {
          position: 'absolute',
          zIndex: '1',
          width: '269px',
          bottom: 'calc(100% + 30px)',
          right: position === 'left' ? 'unset' : 'calc(100% - 51px)',
          left: position === 'left' ? 'calc(100% - 58px)' : 'unset',
          visibility: 'hidden',
          opacity: '0',
          transition: 'opacity 0.3s ease 0s, top 0.3s ease 0s, z-index 0s ease 0s',
          '&.active': {
            visibility: 'visible',
            opacity: '1'
          },
          '&:before': {
            content: "''",
            height: '30px',
            width: '100%',
            display: 'block',
            top: '100%',
            position: 'absolute'
          },
          '&:after': {
            content: "''",
            width: 0,
            position: 'absolute',
            right: position === 'right' ? '24px' : 'unset',
            left: position === 'left' ? '24px' : 'unset',
            top: 'calc(100% - 5px)',
            height: 0,
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderTop: '20px solid #fff'
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              maxWidth: {
                xs: '100%',
                md: '269px'
              },
              paddingBottom: {
                xs: '64%',
                md: '57.6%'
              },
              boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.07)',
              borderRadius: '20px 20px 0 0 ',
              overflow: "hidden",
              position: 'relative',
              transform: 'rotate(0)',
              '& img': {
                position: "absolute",
                objectFit: 'cover',
                borderRadius: '20px 20px 0 0',
                display: 'block',
                width: '100%',
                height: '100%',
                transform: "scale(1)",
                transition: "all 0.5s",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                "&:hover": {
                  transform: "scale(1.2)"
                }
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                "& span": {
                  width: '100% !important',
                  height: '100% !important'
                }
              },
              children: (mainImageNextProps == null ? void 0 : mainImageNextProps(image, title)) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: image,
                alt: title || ""
              })
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: '269px',
            backgroundColor: _colors.default.primary.bandaiNamcoWhite,
            borderRadius: '0px 0px 16px 16px',
            padding: '22px 16px 26px 16px',
            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.07)'
          },
          children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p3",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack
            },
            children: title
          }), address && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            sx: {
              color: _colors.default.otherColor.gray,
              marginBottom: '16px'
            },
            children: address
          }), !!infoLink.length && infoLink.map((item, idx) => {
            var _item$href;

            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                marginTop: '5px',
                '&:first-of-type': {
                  marginTop: '0px'
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                href: (_item$href = item == null ? void 0 : item.href) != null ? _item$href : '/',
                target: "_blank",
                sx: {
                  textDecoration: 'none',
                  display: 'inline-block',
                  '&:hover': {
                    '&  svg': {
                      transition: 'all .4s',
                      transform: 'translateX(3px)',
                      '& path': {
                        fill: _colors.default.primary.bandaiNamcoRed
                      }
                    }
                  }
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
                  variant: "p6",
                  sx: {
                    color: _colors.default.primary.bandaiNamcoBlack,
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '19px',
                    alignItems: 'center',
                    display: 'flex',
                    "&:hover": {
                      color: _colors.default.primary.bandaiNamcoRed
                    }
                  },
                  children: [item.title, /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                    sx: {
                      display: 'inline-block',
                      marginLeft: '4px',
                      marginTop: '2px',
                      transform: 'translateY(1px)'
                    },
                    children: _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                      width: "16",
                      height: "17",
                      viewBox: "0 0 16 17",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.625 9.31127L6.69286 4.56918C6.42009 4.25746 5.94627 4.22587 5.63454 4.49863C5.32282 4.77139 5.29123 5.24521 5.56399 5.55694L8.63185 9.31127L5.57263 13.0646C5.29987 13.3764 5.33146 13.8502 5.64319 14.123C5.95491 14.3957 6.42873 14.3641 6.7015 14.0524L10.625 9.31127Z",
                        fill: "#1E1E1E"
                      })
                    }))
                  })]
                })
              }, idx)
            });
          })]
        })]
      })]
    })
  });
};

var _default = Marker;
exports.default = _default;