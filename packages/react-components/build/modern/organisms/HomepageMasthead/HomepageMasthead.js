import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import React, { useState, useMemo, useEffect } from 'react';
import { Box, Modal } from '@mui/material';
import Container from "../../atoms/Container";
import Tags from "../../atoms/Tags";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
// import Styles
import colors from "../../theme/colors"; // import Types

import { disableScrollBody } from "../../utils/disableScrollBody";
import loadable from '@loadable/component';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const VideoPopupSlider = loadable(() => import("../VideoPopupSlider"));

const HomepageMasthead = ({
  listTags,
  title,
  description,
  price = {
    title: "From",
    value: ""
  },
  idVideo,
  backgroundImage,
  titleButtonWatch = "Watch trailer",
  titleButtonBuy = "Buy",
  hrefButtonBuy = undefined,
  listTrailer = [],
  locale,
  videoType = 'youtube',
  videoDirectly = false
}) => {
  const [showTrailer, setShowTrailer] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      disableScrollBody(showTrailer);
    }
  }, [showTrailer]);
  /**
    * Use to format data for pop-ups
    */

  const remapTrailerItems = useMemo(() => {
    const data = listTrailer?.filter(item => item?.trailerUrl);
    return data?.map(item => {
      return {
        trailerUrl: item?.trailerUrl ?? '',
        trailerTitle: item?.trailerTitle ?? '',
        trailerImg: item?.trailerImg,
        trailerImgAlt: item?.trailerImgAlt ?? '',
        trailerDescription: '',
        hrefShare: '/',
        nextImage: item?.nextImage ?? ''
      };
    });
  }, [listTrailer]);

  const handleRenderIframe = (typeVideo, mastheadBgID) => {
    switch (typeVideo) {
      case 'youtube':
        return `https://www.youtube.com/embed/${mastheadBgID}?autoplay=1&loop=1&playlist=${mastheadBgID}&mute=1&hd=1&controls=0&rel=0&fs=0&enablejsapi=1&origin=https%3A%2F%2Fbandainamcoent.asia&widgetid=1`;

      case 'bilibili':
        return `//player.bilibili.com/player.html?aid=${mastheadBgID}&bvid=${mastheadBgID}&danmaku=0&autoplay=1`;

      case 'vimeo':
        return `https://player.vimeo.com/video/${mastheadBgID}`;

      default:
        return `https://www.youtube.com/embed/${mastheadBgID}?autoplay=1&loop=1&playlist=${mastheadBgID}&mute=1&hd=1&controls=0&rel=0&fs=0&enablejsapi=1&origin=https%3A%2F%2Fbandainamcoent.asia&widgetid=1`;
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      maxHeight: {
        xs: "calc(100vh - 80px)",
        lg: "calc(100vh - 96px)"
      },
      pointerEvents: "auto"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        background: '#111111',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: '25%',
        zIndex: 2
      }
    }), /*#__PURE__*/_jsx(Container, {
      sx: {
        position: "relative",
        zIndex: 3,
        height: "100%",
        width: "100%"
      },
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          height: "100%",
          paddingBottom: {
            xs: "36px",
            md: "160px"
          },
          display: "flex"
        },
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            marginTop: "auto",
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "h1",
            sx: {
              color: colors.primary.bandaiNamcoWhite,
              marginBottom: {
                xs: "12px",
                lg: "20px"
              }
            },
            children: title
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p4",
            sx: {
              color: colors.primary.bandaiNamcoWhite,
              marginBottom: {
                xs: "12px",
                lg: "32px"
              }
            },
            children: description
          }), !!listTags?.length && /*#__PURE__*/_jsx(Box, {
            sx: {
              maxWidth: {
                xs: "100%",
                lg: "571px"
              },
              display: "flex",
              flexWrap: "wrap",
              gap: '12px',
              marginBottom: {
                xs: "12px",
                lg: "32px"
              },
              '& path': {
                fill: colors.primary.bandaiNamcoWhite
              }
            },
            children: listTags.map((tag, i) => {
              return typeof tag?.title === 'string' ? /*#__PURE__*/_jsx(Box, {
                sx: {
                  marginBottom: "5px"
                },
                children: /*#__PURE__*/_jsx(Tags, _extends({}, tag, {
                  showBackground: false
                }))
              }, i) : /*#__PURE__*/_jsx(Box, {
                component: "span",
                children: tag?.title
              }, i);
            })
          }), /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              flexDirection: {
                xs: "row",
                lg: "column"
              },
              marginBottom: {
                xs: "12px",
                lg: "32px"
              }
            },
            children: [/*#__PURE__*/_jsx(Typography, {
              color: colors.primary.bandaiNamcoWhite,
              variant: "p8",
              sx: {
                marginRight: {
                  xs: "4px",
                  lg: "0px"
                },
                fontSize: {
                  xs: "10px",
                  lg: "14px"
                },
                lineHeight: {
                  xs: "12px",
                  lg: "19px"
                }
              },
              children: price?.title
            }), /*#__PURE__*/_jsx(Typography, {
              color: colors.primary.bandaiNamcoWhite,
              variant: "p7",
              sx: {
                fontSize: {
                  xs: "16px",
                  lg: "14px"
                },
                lineHeight: {
                  xs: "22px",
                  lg: "19px"
                }
              },
              children: price?.value?.replace(/' '/g, '')
            })]
          }), /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: "flex",
              justifyContent: "flex-start"
            },
            children: [locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' && /*#__PURE__*/_jsx(Button, {
              variant: "primaryDark",
              sx: {
                width: {
                  xs: "86px",
                  md: "92px"
                },
                marginRight: {
                  xs: "12px",
                  md: "16px"
                }
              },
              externalLink: hrefButtonBuy,
              children: titleButtonBuy
            }), titleButtonWatch && /*#__PURE__*/_jsxs(Button, {
              variant: locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' ? 'secondaryDark' : 'primaryDark',
              sx: {
                width: {
                  xs: "145px",
                  md: "148px"
                },
                marginRight: {
                  xs: "12px",
                  md: "16px"
                }
              },
              onClick: () => setShowTrailer(true),
              children: [" ", titleButtonWatch, " "]
            })]
          })]
        })
      })
    }), idVideo && !showTrailer && /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "1",
        display: {
          xs: "none",
          lg: "flex"
        }
      },
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          bottom: "0px",
          right: "0px",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          "& iframe, video": {
            objectFit: 'cover',
            width: {
              xs: "130%",
              xl: '100vw'
            },
            height: {
              xs: "120%",
              xl: '56.25vw'
            },
            minHeight: {
              xs: "auto",
              xl: '100vh'
            },
            minWidth: {
              xs: "auto",
              xl: '177.77vh'
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
              src: idVideo ?? '',
              type: "video/mp4"
            })
          })
        }) : /*#__PURE__*/_jsx("iframe", {
          id: "ytplayer",
          frameBorder: "0",
          loading: "lazy",
          allowFullScreen: true,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          title: typeof title === "string" ? title : idVideo,
          width: "100%",
          height: "100%" // src={`https://www.youtube.com/embed/${idVideo}?autoplay=1&loop=1&playlist=${idVideo}&mute=1&hd=1&controls=0&rel=0&fs=0&enablejsapi=1&origin=https%3A%2F%2Fbandainamcoent.asia&widgetid=1`} 
          ,
          src: handleRenderIframe(videoType, idVideo)
        })
      })
    }), /*#__PURE__*/_jsx(Modal, {
      open: showTrailer,
      sx: {
        pointerEvents: 'auto'
      },
      children: /*#__PURE__*/_jsx(VideoPopupSlider, {
        initialItem: 0,
        handleOpenPopup: () => {
          setShowTrailer(false);
        },
        trailerItems: remapTrailerItems
      })
    })]
  });
};

export default HomepageMasthead;