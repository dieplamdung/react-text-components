import _extends from "@babel/runtime/helpers/esm/extends";

var _PlayArrowIcon;

// imports Modules
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Box, Modal, Stack, Typography } from '@mui/material';
import Button from "../../atoms/Button";
import PlatformPill from "../../atoms/PlatformPill";
import Container from "../../atoms/Container";
import Slider from 'react-slick';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import loadable from "@loadable/component"; // imports Styles

import colors from "../../theme/colors";
import breakpoints from "../../theme/breakpoints";
import useMediaQuery from '@mui/material/useMediaQuery'; // imports Types

import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// import VideoPopupSlider from '~/organisms/VideoPopupSlider';
const VideoPopupSlider = loadable(() => import("../VideoPopupSlider"));

const GameDetailMasthead = props => {
  var _VideoPopupSlider;

  const {
    mastheadTitle,
    mastheadBgAsset,
    mastheadBgEmbed,
    videoType = 'youtube',
    mastheadDesc,
    platforms,
    ipPublisher,
    price,
    fromPricing,
    currency,
    ctaButtonText,
    trailers: trailersRaw,
    externalLink,
    locale,
    mainImageNext,
    videoDirectly = false
  } = props;
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('lg'));
  const [selectedTrailer, setSelectedTrailer] = useState(0);
  const trailerThumbnailRef = /*#__PURE__*/React.createRef();
  const desktopTrailerSliderRef = /*#__PURE__*/React.createRef();
  const [openPopup, setOpenPopup] = useState(false);
  const trailerRef = useRef();
  const [heightMasthead, setHeightMasthead] = useState(`100vh`);
  /**
   * Use to hide trailer according to screen height
   */

  useEffect(() => {
    const height = window.innerHeight;

    if (height <= 710) {
      setHeightMasthead('130vh'); // trailerRef.current.style.display = "none"
    } else {
      setHeightMasthead(`100vh`); // trailerRef.current.style.display = "block"
    }

    function handleResize() {
      const heightInner = window.innerHeight;

      if (heightInner <= 710) {
        setHeightMasthead('130vh'); // trailerRef.current.style.display = "none"
      } else {
        setHeightMasthead(`100vh`); // trailerRef.current.style.display = "block"
      }
    }

    window.addEventListener("resize", handleResize); // Call handler right away so state ges updated with initial window size

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = trailerThumbnailRef.current;
      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            window?.dispatchEvent(new Event("masthead"));
          }
        }
      });
    }

    return () => {
      window.removeEventListener(`scroll`, () => {});
      window.removeEventListener(`null`, () => {});
    };
  }, [trailerThumbnailRef]);
  /**
   * Use to disable scroll body
   */

  useEffect(() => {
    if (typeof window !== "undefined") {
      disableScrollBody(openPopup);
    }
  }, [openPopup]); // Filter trailers with no provided trailer url
  // const trailerItems = trailersRaw.filter((trailer) => trailer.trailerUrl && trailer.videoType === 'youtube');

  const trailerItems = trailersRaw.filter(trailer => trailer.trailerUrl);
  /**
   * Use to transform data for pop-ups
   */

  const remapTrailerItems = useMemo(() => {
    return trailerItems?.map(item => {
      return {
        trailerUrl: item?.trailerUrl ?? '',
        trailerTitle: item?.trailerTitle ?? '',
        nextImage: item?.nextImage,
        trailerImg: item?.thumbnailImg,
        trailerImgAlt: item?.thumbnailImgAlt ?? '',
        trailerDescription: '',
        hrefShare: '/',
        videoType: item?.videoType
      };
    });
  }, [trailerItems]); // To debounce accidental launch of overlay when dragging/swiping slider

  let dragging = false;
  const settings = {
    className: 'slider desktop-slider',
    dots: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    speed: 500,
    slidesToShow: trailerItems.length >= 4 ? 4 : trailerItems.length,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [{
      breakpoint: breakpoints.values.xl,
      settings: {
        slidesToShow: trailerItems.length >= 3 ? 3 : trailerItems.length
      }
    }],
    beforeChange: () => {
      dragging = true;
    },
    afterChange: () => {
      dragging = false;
    }
  };
  const mobileTrailerSettings = {
    className: 'slider mobile-slider',
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    beforeChange: () => {
      dragging = true;
    },
    afterChange: () => {
      dragging = false;
    }
  };
  /**
   * Use to collect data to close/open pop-ups
   * @param result
   */

  const handleOpenPopup = result => {
    setOpenPopup(result);
  };

  const ctaButtonHandler = () => {// To be implemented
    // Check if redirect to either game page or cart
  }; // Render mobile styling block if screen size is at 'lg'


  if (isMobile) {
    return /*#__PURE__*/_jsxs(Stack, {
      ref: trailerThumbnailRef,
      direction: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      minHeight: trailerItems?.length ? "100vh !important" : "fit-content",
      height: "auto !important",
      sx: {
        pointerEvents: "auto"
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          width: '100%',
          height: '453px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          "& span": {
            width: "100% !important",
            height: "100% !important"
          },
          '& img': {
            width: '100%',
            display: 'block',
            objectFit: 'cover',
            height: "100%"
          }
        },
        children: mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mastheadBgAsset,
          alt: mastheadTitle
        })
      }), /*#__PURE__*/_jsxs(Container, {
        sx: {
          width: '100%',
          paddingTop: '52px',
          paddingBottom: '72px',
          backgroundColor: colors.primary.bandaiNamcoWhite,
          borderRadius: '20px 20px 0 0',
          marginTop: '-50px',
          zIndex: 1
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "h1",
          sx: {
            color: colors.primary.bandaiNamcoBlack
          },
          children: mastheadTitle
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "p7",
          sx: {
            marginTop: '8px',
            color: colors.neutral.neutral2,
            fontWeight: 600
          },
          children: ipPublisher
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "p3",
          sx: {
            maxWidth: "100%",
            marginTop: '20px',
            color: colors.neutral.neutral2,
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": {
              xs: '5',
              md: "3"
            },
            lineClamp: {
              xs: '5',
              md: "3"
            },
            "-webkit-box-orient": "vertical"
          },
          children: mastheadDesc
        }), platforms.length > 0 && /*#__PURE__*/_jsx(Box, {
          className: "platforms-wrapper",
          sx: {
            display: 'flex',
            gap: '12px',
            margin: '20px 0 16px 0',
            '& svg': {
              width: '16px',
              height: '16px',
              '& path': {
                fill: '#999999'
              }
            }
          },
          children: platforms.map((platform, i) => typeof platform === 'string' ? /*#__PURE__*/_jsx(PlatformPill, {
            platform: platform
          }, i) : /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'inline-block'
            },
            children: platform
          }, i))
        }), /*#__PURE__*/_jsxs(Stack, {
          direction: "row",
          alignItems: "flex-end",
          sx: {
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "l2",
            sx: {
              textAlign: 'left',
              color: colors.neutral.neutral2
            },
            children: fromPricing
          }), /*#__PURE__*/_jsxs(Typography, {
            variant: "p3",
            sx: {
              textAlign: 'left',
              color: colors.primary.bandaiNamcoBlack
            },
            children: [currency, " ", price]
          })]
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: 'flex',
            justifyContent: 'center'
          },
          children: locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' ? /*#__PURE__*/_jsx(Button, {
            externalLink: externalLink,
            onClick: () => {
              ctaButtonHandler();
            },
            variant: "primaryDark",
            sx: {
              marginTop: '32px',
              padding: '8px 46.5px 12px',
              width: {
                xs: '100%',
                sm: '311px'
              }
            },
            children: ctaButtonText
          }) : /*#__PURE__*/_jsx(Button, {
            onClick: () => {
              setOpenPopup(open => !open);
              setSelectedTrailer(0);
            },
            variant: "primaryDark",
            sx: {
              marginTop: '32px',
              padding: '8px 46.5px 12px',
              width: {
                xs: '100%',
                sm: '311px'
              }
            },
            children: ctaButtonText
          })
        })]
      }), !!trailerItems.length && /*#__PURE__*/_jsx(Box, {
        sx: {
          width: '100%',
          '& .slick-dots': {
            height: '14px',
            position: 'relative',
            marginTop: '16px',
            bottom: 0,
            display: 'flex !important',
            justifyContent: 'center',
            '& li': {
              margin: '0 8px',
              '&.slick-active button': {
                '&:before': {
                  color: colors.primary.bandaiNamcoRed
                }
              },
              '& button:before': {
                color: colors.neutral.neutral5,
                fontFamily: 'slick',
                fontSize: '8px',
                lineHeight: '20px'
              }
            }
          },
          '& .slick-track': {
            display: 'flex',
            justifyContent: trailerItems && trailerItems?.length === 1 ? 'center' : 'flex-start'
          },
          '& .slick-slide': {
            padding: '0 10px'
          },
          '& .slider.mobile-slider': {
            marginBottom: '40px',
            '& .slick-dots': {
              '& li': {
                margin: '0 !important',
                '&:hover': {
                  '& button:before': {
                    color: `${colors.primary.bandaiNamcoRed} !important`
                  }
                }
              },
              '& li.slick-active': {
                '& button:before': {
                  color: `${colors.primary.bandaiNamcoRed} !important`
                }
              }
            }
          }
        },
        children: /*#__PURE__*/_jsx(Slider, _extends({}, mobileTrailerSettings, {
          children: trailerItems?.map((trailerInfo, i) => {
            return /*#__PURE__*/_jsxs(Box, {
              sx: {
                position: 'relative',
                minWidth: '201px !important',
                borderRadius: '10px',
                aspectRatio: '16/9',
                '&:hover': {
                  cursor: 'pointer'
                }
              },
              onClick: e => {
                if (dragging) {
                  e.preventDefault();
                  return;
                }

                setOpenPopup(open => !open);
                setSelectedTrailer(i);
              },
              children: [/*#__PURE__*/_jsx(Box, {
                sx: {
                  width: '100%',
                  '& img': {
                    objectFit: 'cover',
                    borderRadius: '10px',
                    display: 'block',
                    width: '100%',
                    height: '100%'
                  }
                },
                children: trailerInfo?.nextImage || /*#__PURE__*/_jsx("img", {
                  src: trailerInfo?.thumbnailImg,
                  alt: trailerInfo?.thumbnailImgAlt || ''
                })
              }), /*#__PURE__*/_jsx(Box, {
                sx: {
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '10px',
                  backgroundColor: colors.accent.accentWhite[1],
                  display: 'flex',
                  width: 'fit-content',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%'
                },
                children: /*#__PURE__*/_jsx(PlayArrowIcon, {
                  htmlColor: "#FFFFFF",
                  sx: {
                    height: '20px',
                    width: '20px'
                  }
                })
              })]
            }, i);
          })
        }))
      }), /*#__PURE__*/_jsx(Modal, {
        open: openPopup,
        sx: {
          pointerEvents: 'auto'
        },
        children: _VideoPopupSlider || (_VideoPopupSlider = /*#__PURE__*/_jsx(VideoPopupSlider, {
          handleOpenPopup: handleOpenPopup,
          trailerItems: remapTrailerItems,
          initialItem: selectedTrailer
        }))
      })]
    });
  }

  const handleRenderIframe = (typeVideo, mastheadBgID) => {
    switch (typeVideo) {
      case 'youtube':
        return `https://www.youtube.com/embed/${mastheadBgID}?autoplay=1&loop=1&playlist=${mastheadBgID}&mute=1&hd=1&controls=0&rel=0&fs=0&enablejsapi=1&origin=https%3A%2F%2Fbandainamcoent.asia&widgetid=1`;

      case 'bilibili':
        return `//player.bilibili.com/player.html?aid=${mastheadBgID}&bvid=${mastheadBgID}&cid=839966468&page=1`;

      case 'vimeo':
        return `https://player.vimeo.com/video/${mastheadBgID}`;

      default:
        return `https://www.youtube.com/embed/${mastheadBgID}?autoplay=1&loop=1&playlist=${mastheadBgID}&mute=1&hd=1&controls=0&rel=0&fs=0&enablejsapi=1&origin=https%3A%2F%2Fbandainamcoent.asia&widgetid=1`;
    }
  };

  return /*#__PURE__*/_jsxs(Stack, {
    className: "mastheadWrapper",
    ref: trailerThumbnailRef,
    direction: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    sx: {
      position: 'relative',
      minHeight: `${heightMasthead}`,
      paddingBottom: '52px',
      overflow: 'hidden',
      // backgroundImage: mastheadBgAsset ? `url(${mastheadBgAsset})` : '',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    children: [(!mastheadBgEmbed && mastheadBgAsset || !mastheadBgEmbed && mainImageNext) && /*#__PURE__*/_jsx(Box, {
      sx: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        '& span': {
          width: '100% !important',
          height: '100% !important'
        },
        '& img': {
          width: '100%',
          display: 'block',
          objectFit: 'cover',
          height: '100%'
        }
      },
      children: mainImageNext || /*#__PURE__*/_jsx("img", {
        src: mastheadBgAsset,
        alt: mastheadTitle
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        background: '#111111',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: '50%',
        zIndex: 2
      }
    }), /*#__PURE__*/_jsxs(Container, {
      sx: {
        marginTop: 'auto',
        position: 'relative',
        zIndex: 10
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h1",
        sx: {
          color: colors.primary.bandaiNamcoWhite
        },
        children: mastheadTitle
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p7",
        sx: {
          lineHeight: '19px',
          marginTop: '4px',
          color: colors.primary.bandaiNamcoWhite
        },
        children: ipPublisher
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        sx: {
          maxWidth: '571px',
          marginTop: '20px',
          lineHeight: '24px',
          color: colors.primary.bandaiNamcoWhite,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          "-webkit-line-clamp": "3",

          /* number of lines to show */
          lineClamp: "3",
          "-webkit-box-orient": "vertical"
        },
        children: mastheadDesc
      }), platforms.length > 0 && /*#__PURE__*/_jsx(Box, {
        className: "platforms-wrapper",
        sx: {
          display: 'flex',
          gap: '12px',
          margin: '32px 0',
          '& path': {
            fill: 'white'
          }
        },
        children: platforms.map((platform, i) => typeof platform === 'string' ? /*#__PURE__*/_jsx(PlatformPill, {
          platform: platform
        }, i) : /*#__PURE__*/_jsx(Box, {
          children: platform
        }, i))
      }), /*#__PURE__*/_jsxs(Stack, {
        direction: locale === 'hk-tc' || locale === 'hk-sc' || locale === 'tw-tc' || locale === 'tw-sc' || locale === 'ko-kr' ? 'column' : 'row',
        alignItems: locale === 'hk-tc' || locale === 'hk-sc' || locale === 'tw-tc' || locale === 'tw-sc' || locale === 'ko-kr' ? 'flex-start' : 'center',
        children: [locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' && ctaButtonText && /*#__PURE__*/_jsx(Button, {
          onClick: () => {
            ctaButtonHandler();
          },
          externalLink: externalLink,
          variant: "primaryDark",
          sx: {
            minWidth: '120px',
            borderRadius: '60px',
            padding: '10px 46.5px 14px',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 600
          },
          children: ctaButtonText
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            marginLeft: '12px'
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            sx: {
              textAlign: 'left',
              fontsize: '14px',
              lineHeight: '20px',
              color: 'white'
            },
            children: fromPricing
          }), /*#__PURE__*/_jsxs(Typography, {
            sx: {
              textAlign: 'left',
              fontsize: '14px',
              lineHeight: '20px',
              color: 'white',
              fontWeight: 600
            },
            children: [currency, price]
          })]
        }), (locale === 'hk-tc' || locale === 'hk-sc' || locale === 'tw-tc' || locale === 'tw-sc' || locale === 'ko-kr') && /*#__PURE__*/_jsx(Box, {
          sx: {
            marginTop: '32px'
          },
          children: /*#__PURE__*/_jsx(Button, {
            onClick: () => {
              setOpenPopup(open => !open);
              setSelectedTrailer(0);
            },
            variant: "primaryDark",
            sx: {
              minWidth: '120px',
              borderRadius: '60px',
              padding: '10px 46.5px 14px',
              fontSize: '16px',
              lineHeight: '22px',
              fontWeight: 600
            },
            children: ctaButtonText
          })
        })]
      }), /*#__PURE__*/_jsx(Box, {
        ref: trailerRef,
        sx: {
          width: '100%',
          marginTop: '109px',
          '& .slick-slider': {
            marginRight: '-500px',
            marginLeft: '-500px',
            '& .slick-track': {
              marginLeft: '500px'
            }
          }
        },
        children: /*#__PURE__*/_jsx(Slider, _extends({}, settings, {
          ref: desktopTrailerSliderRef,
          children: trailerItems?.map((trailerInfo, i) => {
            return /*#__PURE__*/_jsxs(Box, {
              sx: {
                position: 'relative',
                maxWidth: '262px',
                marginRight: '24px',
                borderRadius: '10px',
                '&:hover': {
                  cursor: 'pointer'
                }
              },
              onClick: e => {
                if (dragging) {
                  e.preventDefault();
                  return;
                }

                setOpenPopup(open => !open);
                setSelectedTrailer(i);
              },
              children: [/*#__PURE__*/_jsx(Box, {
                sx: {
                  width: '262px',
                  height: '150px',
                  '& img': {
                    objectFit: 'cover',
                    borderRadius: '10px',
                    display: 'block',
                    width: '100%',
                    height: '100%'
                  }
                },
                children: trailerInfo?.nextImage || /*#__PURE__*/_jsx("img", {
                  src: trailerInfo?.thumbnailImg,
                  alt: trailerInfo?.thumbnailImgAlt || ''
                })
              }), /*#__PURE__*/_jsx(Box, {
                sx: {
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.22)',
                  display: 'flex',
                  width: 'fit-content',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%'
                },
                children: _PlayArrowIcon || (_PlayArrowIcon = /*#__PURE__*/_jsx(PlayArrowIcon, {
                  htmlColor: "#FFFFFF"
                }))
              })]
            }, i);
          })
        }))
      })]
    }), mastheadBgEmbed && /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: 'auto',
        zIndex: 1,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: {
          xs: "none",
          lg: "flex"
        },
        "& iframe, video": {
          objectFit: 'cover',
          width: {
            xs: "130%"
          },
          height: {
            xs: "120%"
          },
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }
      },
      children: videoDirectly ? /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx("video", {
          autoPlay: true,
          muted: true,
          loop: true,
          children: /*#__PURE__*/_jsx("source", {
            src: mastheadBgEmbed ?? '',
            type: "video/mp4"
          })
        })
      }) : /*#__PURE__*/_jsx("iframe", {
        id: "ytplayer",
        frameBorder: "0",
        allowFullScreen: true,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        title: mastheadTitle || "",
        width: "100%",
        loading: "lazy",
        height: "100%",
        src: handleRenderIframe(videoType, mastheadBgEmbed)
      })
    }), /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      sx: {
        pointerEvents: 'auto'
      },
      children: /*#__PURE__*/_jsx(VideoPopupSlider, {
        handleOpenPopup: handleOpenPopup,
        trailerItems: remapTrailerItems,
        initialItem: selectedTrailer
      })
    })]
  });
};

export default GameDetailMasthead;