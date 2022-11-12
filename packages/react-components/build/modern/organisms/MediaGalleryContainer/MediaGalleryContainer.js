import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import { Box, Grid, Modal, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import Typography from "../../atoms/Typography";
import Tabs from "../../atoms/Tabs";
import { XMasonry, XBlock } from "react-xmasonry/dist"; // import Styles

import colors from "../../theme/colors";
import loadable from '@loadable/component';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// import ImagePopupSlider from '~/organisms/ImagePopupSlider'
// import VideoPopupSlider from '~/organisms/VideoPopupSlider'
const VideoPopupSlider = loadable(() => import("../VideoPopupSlider"));
const ImagePopupSlider = loadable(() => import("../ImagePopupSlider"));
const GalleryCard = loadable(() => import("../../molecules/GalleryCard"));
const MediaGalleryCard = loadable(() => import("../../molecules/MediaGalleryCard"));

const MediaGalleryContainer = props => {
  const {
    listTabs,
    listThumbnail,
    title,
    seeMoreLabel = 'See more',
    seeLessLabel = 'See less',
    id
  } = props;
  const [tab, setTab] = useState(listThumbnail?.[0] || []);
  const [itemSlider, setItemSlider] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const popupRef = useRef();
  const refContainer = useRef();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataMobileShowing, setDataMobileShowing] = useState(listThumbnail?.[0]?.mediaGalleryCard?.slice(0, 3));
  const [clickedViewMore, setClickedViewMore] = useState(false); // dispatchEvent event send id to sub navigation

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = refContainer.current;
      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            window?.dispatchEvent(new Event(`${id}`));
          }
        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  /**
   * Handling data switch tabs
   */

  const handleTabs = data => {
    const filter = listThumbnail?.find(item => item?.id === data);
    setTab(filter);
    setDataMobileShowing(filter?.mediaGalleryCard?.slice(0, 3));
    setClickedViewMore(false);
  };
  /**
   * Use to map data for ImagePopupSlider
   */


  const screenshotItems = useMemo(() => {
    return tab.mediaGalleryCard.map(item => {
      return {
        mainImage: item?.img ?? '',
        alt: item.alt,
        title: item?.description ?? '',
        description: '',
        mainImageNext: item?.nextImage
      };
    });
  }, [tab.mediaGalleryCard]);
  /**
   * Use to map data for VideoPopupSlider
   */

  const trailerItems = useMemo(() => {
    return tab.mediaGalleryCard.map(item => {
      return {
        trailerUrl: item?.videoUrl ?? '',
        trailerTitle: item?.description ?? '',
        trailerImg: item?.img ?? '',
        trailerImgAlt: item?.alt ?? '',
        nextImage: item?.nextImage,
        videoType: item?.tags?.title ?? ""
      };
    });
  }, [tab.mediaGalleryCard]);
  return /*#__PURE__*/_jsxs(Box, {
    id: id,
    ref: refContainer,
    children: [title && /*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      color: colors.primary.bandaiNamcoBlack,
      sx: {
        marginBottom: {
          xs: '36px',
          md: '54px'
        }
      },
      children: title
    }), /*#__PURE__*/_jsxs(Grid, {
      container: true,
      gap: {
        xs: '34px',
        md: '56px'
      },
      children: [/*#__PURE__*/_jsx(Grid, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/_jsx(Tabs, {
          data: handleTabs,
          listTabs: listTabs
        })
      }), /*#__PURE__*/_jsxs(Grid, {
        item: true,
        xs: 12,
        sx: {
          '& .button--secondary': {
            border: 'none',
            background: 'none'
          }
        },
        children: [tab?.id === 1 && /*#__PURE__*/_jsx(Box, {
          sx: {
            display: {
              xs: 'block',
              lg: 'flex'
            },
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            flexWrap: 'wrap',
            gap: '41px 22px',
            '& button': {
              border: 'none',
              background: 'none'
            }
          },
          children: isMobile ? dataMobileShowing?.map((item, index) => /*#__PURE__*/_jsx(Box, {
            sx: {
              cursor: 'pointer',
              overflow: 'hidden',
              maxWidth: '100%',
              height: 'unset',
              marginBottom: '36px'
            },
            onClick: () => {
              popupRef?.current?.handleOpen();
              setItemSlider(index);
              setOpenPopup(open => !open);
            },
            children: /*#__PURE__*/_jsx(MediaGalleryCard, _extends({}, item))
          }, index)) : tab?.mediaGalleryCard?.map((item, index) => /*#__PURE__*/_jsx(Box, {
            sx: {
              cursor: 'pointer',
              maxWidth: '49%',
              overflow: 'hidden',
              flex: '1 1 400px'
            },
            onClick: () => {
              popupRef?.current?.handleOpen();
              setItemSlider(index);
              setOpenPopup(open => !open);
            },
            children: /*#__PURE__*/_jsx(MediaGalleryCard, _extends({}, item))
          }, index))
        }), tab?.id === 2 && /*#__PURE__*/_jsx(Box, {
          sx: {
            gap: '20px',
            '& .card': {
              margin: '11px'
            },
            margin: "0px -11px"
          },
          children: /*#__PURE__*/_jsx(XMasonry, {
            maxColumns: 2,
            targetBlockWidth: 500,
            children: !isMobile ? tab?.mediaGalleryCard?.map((item, index) => /*#__PURE__*/_jsx(XBlock, {
              width: item?.width,
              children: /*#__PURE__*/_jsx(Box, {
                sx: {
                  cursor: 'pointer',
                  '& .card': {
                    aspectRatio: 'unset'
                  }
                },
                onClick: () => {
                  popupRef?.current?.handleOpen();
                  setItemSlider(index);
                  setOpenPopup(open => !open);
                },
                children: /*#__PURE__*/_jsx(GalleryCard, _extends({}, item))
              })
            }, index)) : dataMobileShowing?.map((item, index) => /*#__PURE__*/_jsx(XBlock, {
              width: item?.width,
              children: /*#__PURE__*/_jsx(Box, {
                sx: {
                  cursor: 'pointer'
                },
                onClick: () => {
                  popupRef?.current?.handleOpen();
                  setItemSlider(index);
                  setOpenPopup(open => !open);
                },
                children: /*#__PURE__*/_jsx(GalleryCard, _extends({}, item))
              })
            }, index))
          })
        })]
      })]
    }), isMobile && /*#__PURE__*/_jsx(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          marginTop: '56px',
          cursor: 'pointer'
        },
        children: [!!dataMobileShowing?.length && dataMobileShowing?.length < tab?.mediaGalleryCard?.length && /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          onClick: () => {
            setDataMobileShowing(tab?.mediaGalleryCard);
            setClickedViewMore(true);
          },
          sx: {
            color: colors.primary.bandaiNamcoRed
          },
          children: seeMoreLabel
        }), clickedViewMore && /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          onClick: () => {
            setDataMobileShowing(tab?.mediaGalleryCard.slice(0, 3));
            setClickedViewMore(false);
          },
          sx: {
            color: colors.primary.bandaiNamcoRed
          },
          children: seeLessLabel
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            backgroundColor: colors.primary.bandaiNamcoRed,
            width: '100%',
            height: '1px',
            transition: 'all .4s'
          }
        })]
      })
    }), tab?.id === 1 && /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(VideoPopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        trailerItems: tab?.id === 1 ? trailerItems : [],
        initialItem: itemSlider ?? 0
      })
    }), tab?.id === 2 && /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(ImagePopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        screenshotItems: tab?.id === 2 ? screenshotItems : [],
        initialItem: itemSlider ?? 0
      })
    })]
  });
};

export default MediaGalleryContainer;