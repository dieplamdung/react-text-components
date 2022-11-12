import _extends from "@babel/runtime/helpers/esm/extends";
// React and components
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Styles

import classNames from 'classnames/bind';
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import { Desktop, MobileDown, SmallDesktopDown, TabletDown } from "../../utils/viewport"; // Types

import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Container from "../../atoms/Container"; // import breakpoints from '~/theme/breakpoints';
// import breakpoints from '~/theme/breakpoints';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const cx = classNames;

const GameDetailCharacter = props => {
  const {
    characterDetailList,
    title,
    id
  } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(Desktop(theme));
  const isSmallDesktopDown = useMediaQuery(SmallDesktopDown(theme));
  const isTabletDown = useMediaQuery(TabletDown(theme));
  const isMobileDown = useMediaQuery(MobileDown(theme));
  const [currCharacterSliderIndex, setCurrCharacterSliderIndex] = useState(0); // const [paddingLeft, setPaddingLeft] = useState<number>(0);
  // const [slidesToShow, setSlidesToShow] = useState<number>(4);

  const [speed, setSpeed] = useState(400);
  const thisSlider = useRef();
  const refContainer = useRef();
  const refWrapperContent = useRef();
  const refTimeOut = useRef();
  const refContainerWrapper = useRef(); // const refIsShow = useRef<any>();
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = refContainerWrapper.current; // const height = window.innerHeight;

      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container?.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            // refIsShow.current = true;
            window?.dispatchEvent(new Event(`${id}`));
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
  useEffect(() => {
    refTimeOut.current = setTimeout(() => {
      setCurrCharacterSliderIndex(0); // (thisSlider.current as any)?.slickGoTo?.(0);

      thisSlider.current?.innerSlider?.onWindowResized();
    }, 1000); // check padding left slider;

    if (typeof window !== "undefined") {
      const slickList = refWrapperContent.current?.querySelector?.(".slick-list");

      if (slickList) {
        const left = refContainer.current?.offsetLeft;
        slickList.style.paddingLeft = `${left}px`;
      }

      window.addEventListener("resize", () => {
        if (slickList) {
          const left = refContainer.current?.offsetLeft;
          slickList.style.paddingLeft = `${left}px`;
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
      window.clearTimeout(refTimeOut.current);
    };
  }, [isTabletDown, isMobileDown, isSmallDesktopDown, isDesktop]);
  const useStyles = makeStyles(() => ({
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
  useEffect(() => {
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
    return /*#__PURE__*/_jsx(Box, {
      onClick: () => funcClick(),
      sx: _extends({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? colors.otherColor.alabaster : colors.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: disabled ? 'none' : 'auto',
        cursor: !disabled ? 'pointer' : 'none'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: colors.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoBlack
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


  return /*#__PURE__*/_jsx(Stack, {
    sx: {
      height: '100%',
      width: '100%',
      overflow: "hidden"
    },
    id: id,
    ref: refContainerWrapper,
    children: /*#__PURE__*/_jsxs(Box, {
      className: "featured-card-carousel",
      sx: {
        display: "inline-block",
        height: '100%',
        '& a': {
          outline: 'none'
        }
      },
      ref: refWrapperContent,
      children: [/*#__PURE__*/_jsx(Container, {
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          ref: refContainer,
          children: [title && /*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            color: colors.primary.bandaiNamcoBlack,
            children: title
          }), /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/_jsxs(Typography, {
              variant: "p5",
              children: [currCharacterSliderIndex + 1, " ", ` of `, characterDetailList.length]
            }), !isTabletDown && /*#__PURE__*/_jsxs(Box, {
              sx: {
                display: 'flex',
                alignItems: 'center',
                marginLeft: '48px',
                gap: '16px'
              },
              children: [/*#__PURE__*/_jsx(ArrowSlide, {
                funcClick: previous,
                disabled: currCharacterSliderIndex === 0,
                children: /*#__PURE__*/_jsx(IconPrevSlide, {
                  htmlColor: "transparent",
                  sx: {
                    height: '10px'
                  }
                })
              }), /*#__PURE__*/_jsx(ArrowSlide, {
                funcClick: next,
                disabled: currCharacterSliderIndex === characterDetailList.length - 1,
                children: /*#__PURE__*/_jsx(IconNextSlide, {
                  htmlColor: "transparent",
                  sx: {
                    height: '10px'
                  }
                })
              })]
            })]
          })]
        })
      }), /*#__PURE__*/_jsx(Box, {
        className: cx(classes.gameCharacterSliderWrapper),
        sx: {
          marginTop: {
            xs: "24px",
            md: "40px"
          }
        },
        children: /*#__PURE__*/_jsx(Slider, _extends({}, settings, {
          ref: thisSlider,
          children: characterDetailList.map((character, index) => /*#__PURE__*/_jsx(Box, {
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
            children: character?.mainImageNext || /*#__PURE__*/_jsx("img", {
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
      }), /*#__PURE__*/_jsx(Container, {
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            marginTop: '20px'
          },
          children: /*#__PURE__*/_jsxs(Grid, {
            container: true,
            children: [/*#__PURE__*/_jsxs(Grid, {
              item: true,
              xs: 12,
              lg: 5,
              children: [/*#__PURE__*/_jsx(Typography, {
                variant: "h5",
                color: colors.primary.bandaiNamcoBlack,
                children: characterDetailList[currCharacterSliderIndex].name
              }), characterDetailList[currCharacterSliderIndex].power && /*#__PURE__*/_jsx(Typography, {
                variant: "p6",
                color: colors.neutral.neutral2,
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
              }), /*#__PURE__*/_jsx(Typography, {
                variant: "p6",
                color: colors.neutral.neutral2,
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
            }), /*#__PURE__*/_jsxs(Grid, {
              item: true,
              md: 12,
              lg: 7,
              sx: {
                marginTop: {
                  lg: "2px",
                  xs: '40px'
                }
              },
              children: [characterDetailList[currCharacterSliderIndex].quote && /*#__PURE__*/_jsxs(Typography, {
                variant: "p6",
                color: colors.neutral.neutral2,
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
              }), /*#__PURE__*/_jsx(Typography, {
                variant: "p6",
                color: colors.neutral.neutral2,
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

export default GameDetailCharacter;