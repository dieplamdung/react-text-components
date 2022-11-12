"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _bind = _interopRequireDefault(require("classnames/bind"));

var _Icon = require("../../atoms/Icon");

var _viewport = require("../../utils/viewport");

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _styles = require("@mui/styles");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// React and components
// Styles
// Types
const cx = _bind.default;

const GameDetailCharacter = props => {
  const {
    characterDetailList,
    title,
    id
  } = props;
  const theme = (0, _material.useTheme)();
  const isDesktop = (0, _material.useMediaQuery)((0, _viewport.Desktop)(theme));
  const isSmallDesktopDown = (0, _material.useMediaQuery)((0, _viewport.SmallDesktopDown)(theme));
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const [currCharacterSliderIndex, setCurrCharacterSliderIndex] = (0, _react.useState)(0); // const [paddingLeft, setPaddingLeft] = useState<number>(0);
  // const [slidesToShow, setSlidesToShow] = useState<number>(4);

  const [speed, setSpeed] = (0, _react.useState)(400);
  const thisSlider = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  const refTimeOut = (0, _react.useRef)();
  const refContainerWrapper = (0, _react.useRef)(); // const refIsShow = useRef<any>();
  // dispatchEvent  send id to sub navigation

  let firstClientX;
  let firstClientY;
  let clientX;
  let clientY;

  const touchStart = e => {
    firstClientX = e.touches[0].clientX;
    firstClientY = e.touches[0].clientY;
  }; // eslint-disable-next-line consistent-return


  const preventTouch = e => {
    const minValue = 5; // threshold

    clientX = e.touches[0].clientX - firstClientX; // eslint-disable-next-line @typescript-eslint/no-unused-vars

    clientY = e.touches[0].clientY - firstClientY; // Vertical scrolling does not work when you start swiping horizontally.

    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  };

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const container = refContainerWrapper.current; // const height = window.innerHeight;

      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container == null ? void 0 : container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            // refIsShow.current = true;
            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event(`${id}`));
            window.addEventListener('touchstart', touchStart);
            window.addEventListener('touchmove', preventTouch, {
              passive: false
            });
          } else {
            window.removeEventListener('touchstart', touchStart);
            window.removeEventListener('touchmove', preventTouch);
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
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  (0, _react.useEffect)(() => {
    refTimeOut.current = setTimeout(() => {
      var _thisSlider$current, _thisSlider$current$i;

      setCurrCharacterSliderIndex(0); // (thisSlider.current as any)?.slickGoTo?.(0);

      (_thisSlider$current = thisSlider.current) == null ? void 0 : (_thisSlider$current$i = _thisSlider$current.innerSlider) == null ? void 0 : _thisSlider$current$i.onWindowResized();
    }, 1000); // check padding left slider;

    if (typeof window !== "undefined") {
      var _refWrapperContent$cu, _refWrapperContent$cu2;

      const slickList = (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : (_refWrapperContent$cu2 = _refWrapperContent$cu.querySelector) == null ? void 0 : _refWrapperContent$cu2.call(_refWrapperContent$cu, ".slick-list");

      if (slickList) {
        var _refContainer$current;

        const left = (_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft;
        slickList.style.paddingLeft = `${left}px`;
      }

      window.addEventListener("resize", () => {
        if (slickList) {
          var _refContainer$current2;

          const left = (_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft;
          slickList.style.paddingLeft = `${left}px`;
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
      window.clearTimeout(refTimeOut.current);
    };
  }, [isTabletDown, isMobileDown, isSmallDesktopDown, isDesktop]);
  const useStyles = (0, _styles.makeStyles)(() => ({
    gameCharacterSliderWrapper: {
      '& .slick-track': {
        display: 'flex',
        gap: '22px',
        alignItems: 'center'
      },
      '& .slick-list': {
        '& .slick-slide': {
          "& div": {
            display: "flex",
            width: "fit-content",
            "&:focus-visible": {
              outline: "none"
            } // [theme.breakpoints.down('xl')]: {
            //   maxHeight: '450px',
            // },
            // [theme.breakpoints.down('lg')]: {
            //   maxHeight: '350px',
            //   paddingRight: 0,
            // },
            // [theme.breakpoints.down('md')]: {
            //   maxHeight: '300px',
            //   paddingRight: 0,
            // },
            // [theme.breakpoints.down('sm')]: {
            //   maxHeight: '250px',
            //   paddingRight: 0,
            // },

          },
          transition: 'all 300ms ease-out',
          '&.slick-active~.slick-slide.slick-active': {
            opacity: 0.3,
            transform: "scale(1)"
          },
          '&:not(.slick-active)': {
            opacity: 0.3,
            transform: "scaleY(0.85) scaleX(0.9)"
          }
        }
      }
    }
  })); // isTabletDown ? "100%" : "135%"

  const classes = useStyles();
  (0, _react.useEffect)(() => {
    if (isMobileDown) {
      setSpeed(200);
    } else {
      setSpeed(400);
    }
  }, [isMobileDown]);

  const handleAfterChange = index => {
    setCurrCharacterSliderIndex(index);
  };

  const next = () => {
    thisSlider.current.slickNext();
  };

  const previous = () => {
    thisSlider.current.slickPrev();
  };

  const settings = {
    className: "left",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    cssEase: 'linear',
    speed,
    afterChange: handleAfterChange
  };

  const ArrowSlide = ({
    children,
    sx,
    disabled = false,
    funcClick
  }) => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      onClick: () => funcClick(),
      sx: (0, _extends2.default)({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? _colors.default.otherColor.alabaster : _colors.default.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: disabled ? 'none' : 'auto',
        cursor: !disabled ? 'pointer' : 'none'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: _colors.default.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoBlack
          }
        }
      }),
      children: children
    });
  }; // const handleClickSlider = (index: number) => {
  //   if (index === 0 && characterDetailList.length - 1 === currCharacterSliderIndex) {
  //     (thisSlider.current as any).slickNext();
  //     return
  //   }
  //   if (index === characterDetailList.length - 1 && currCharacterSliderIndex === 0) {
  //     (thisSlider.current as any).slickPrev();
  //     return
  //   }
  //   (thisSlider.current as any).slickGoTo(index);
  // }


  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Stack, {
    sx: {
      height: '100%',
      width: '100%',
      overflow: "hidden"
    },
    id: id,
    ref: refContainerWrapper,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      className: "featured-card-carousel",
      sx: {
        display: "inline-block",
        height: '100%',
        '& a': {
          outline: 'none'
        }
      },
      ref: refWrapperContent,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          ref: refContainer,
          children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            color: _colors.default.primary.bandaiNamcoBlack,
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
              variant: "p5",
              children: [currCharacterSliderIndex + 1, " ", ` of `, characterDetailList.length]
            }), !isTabletDown && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                display: 'flex',
                alignItems: 'center',
                marginLeft: '48px',
                gap: '16px'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
                funcClick: previous,
                disabled: currCharacterSliderIndex === 0,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPrevSlide, {
                  htmlColor: "transparent",
                  sx: {
                    height: '10px'
                  }
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
                funcClick: next,
                disabled: currCharacterSliderIndex === characterDetailList.length - 1,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
                  htmlColor: "transparent",
                  sx: {
                    height: '10px'
                  }
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        className: cx(classes.gameCharacterSliderWrapper),
        sx: {
          marginTop: {
            xs: "24px",
            md: "40px"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick.default, (0, _extends2.default)({}, settings, {
          ref: thisSlider,
          children: characterDetailList.map((character, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              height: "100%",
              maxHeight: {
                xs: "250px",
                md: "300px",
                lg: "350px",
                xl: "450px"
              },
              maxWidth: {
                xs: "50vw",
                md: "250px",
                lg: "280px",
                xl: "356px"
              },
              display: "flex",
              "& img": {
                // objectFit: 'cover',
                display: 'block',
                borderRadius: '8px',
                width: "100%",
                height: "auto",
                maxHeight: {
                  xs: "250px",
                  md: "300px",
                  lg: "350px",
                  xl: "450px"
                }
              }
            },
            children: (character == null ? void 0 : character.mainImageNext) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: character.thumbnailImg,
              alt: character.thumbnailAlt || ''
            })
          }, index) // <Box
          //   key={index}
          //   sx={{
          //     userSelect: 'none',
          //     width: '100%',
          //     height: "100%",
          //     cursor: "pointer",
          //     '& img': {
          //       objectFit: 'cover',
          //       borderRadius: '8px',
          //       display: 'block',
          //       height: '100%',
          //       maxWidth: '356px',
          //       maxHeight: '478px',
          //       transform: index === currCharacterSliderIndex ? "scale(1)" : "scaleY(0.85) scaleX(0.9)",
          //       transition: "all 0.3s",
          //     },
          //   }}
          // >
          // </Box>
          )
        }))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            marginTop: '20px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
            container: true,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
              item: true,
              xs: 12,
              lg: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "h5",
                color: _colors.default.primary.bandaiNamcoBlack,
                children: characterDetailList[currCharacterSliderIndex].name
              }), characterDetailList[currCharacterSliderIndex].power && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p6",
                color: _colors.default.neutral.neutral2,
                sx: {
                  marginTop: {
                    xs: "8px",
                    lg: "24px"
                  },
                  "& div": {
                    padding: "0px",
                    margin: "0px"
                  },
                  "& p": {
                    padding: "0px",
                    margin: "0px"
                  },
                  "& span": {
                    padding: "0px",
                    margin: "0px"
                  }
                },
                children: characterDetailList[currCharacterSliderIndex].power
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p6",
                color: _colors.default.neutral.neutral2,
                sx: {
                  marginTop: "0px",
                  "& div": {
                    padding: "0px",
                    margin: "0px"
                  },
                  "& p": {
                    padding: "0px",
                    margin: "0px"
                  },
                  "& span": {
                    padding: "0px",
                    margin: "0px"
                  }
                },
                children: characterDetailList[currCharacterSliderIndex].serviceRecord
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
              item: true,
              md: 12,
              lg: 7,
              sx: {
                marginTop: {
                  lg: "2px",
                  xs: '40px'
                }
              },
              children: [characterDetailList[currCharacterSliderIndex].quote && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
                variant: "p6",
                color: _colors.default.neutral.neutral2,
                sx: {
                  "& div": {
                    padding: "0px",
                    margin: "0px"
                  },
                  "& p": {
                    padding: "0px",
                    margin: "0px"
                  },
                  "& span": {
                    padding: "0px",
                    margin: "0px"
                  }
                },
                children: ["\u201C", characterDetailList[currCharacterSliderIndex].quote, "\u201D"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p6",
                color: _colors.default.neutral.neutral2,
                sx: {
                  display: '-webkit-box',
                  '-webkit-line-clamp': 2,
                  '-webkit-box-orient': 'vertical',
                  "& div": {
                    padding: "0px",
                    margin: "0px"
                  },
                  "& p": {
                    padding: "0px",
                    margin: "0px"
                  },
                  "& span": {
                    padding: "0px",
                    margin: "0px"
                  }
                },
                children: characterDetailList[currCharacterSliderIndex].history
              })]
            })]
          })
        })
      })]
    })
  });
};

var _default = GameDetailCharacter;
exports.default = _default;