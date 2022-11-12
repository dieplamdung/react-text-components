// import Modules
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import Typography from "../../atoms/Typography"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const PlayVideo = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    idVideo,
    title,
    className,
    disable,
    // nextImage,
    index,
    // handleItemOnClick,
    selectedTrailer,
    typeVideo = "youtube",
    // imageSecond = "",
    indexBeforeChange
  } = props;
  const refVideo = useRef(); // const [autoPlay, setAutoPlay] = useState<boolean>(false);
  // const [usePlayVideo, setPlayVideo] = useState<boolean>(false)
  // const matches = useMediaQuery('(max-width:1024px)', { noSsr: true });

  const matchesSmallMobile = useMediaQuery('(max-width:321px)', {
    noSsr: true
  });
  const matchesMinWidthSmallMobile = useMediaQuery('(min-width:321px)', {
    noSsr: true
  });
  const matchesMinWidthSmallTable = useMediaQuery('(min-width:991px)', {
    noSsr: true
  }); // const imageVideo = `https://img.youtube.com/vi/${idVideo}/hqdefault.jpg`;

  const refTimOut = useRef();
  const newTypeVideo = typeVideo?.toLowerCase();
  /**
   * Use to handle stop video on Desktop
   */
  // useEffect(() => {
  //   if (disable) {
  //     setAutoPlay(false)
  //   }
  // }, [disable])

  useImperativeHandle(ref, () => ({
    handleResetVideoOnchange() {}

  })); // eslint-disable-next-line consistent-return

  const handleUpdateWidthIframe = () => {
    if (matchesSmallMobile) {
      return '272px';
    }

    if (matchesMinWidthSmallMobile) {
      return '362px';
    }

    if (matchesMinWidthSmallTable) {
      return '962px';
    }
  };

  useEffect(() => {
    if (refTimOut.current) {
      window.clearTimeout(refTimOut.current);
    }

    refTimOut.current = setTimeout(() => {
      refTimOut.current = undefined;

      if (index !== indexBeforeChange) {
        return;
      }

      const wrapperContent = document.querySelector(`.${className}`);

      if (wrapperContent && newTypeVideo === "youtube") {
        const iframes = wrapperContent.querySelectorAll('iframe');

        if (iframes?.length) {
          Array.prototype.forEach.call(iframes, iframe => {
            iframe.contentWindow.postMessage(JSON.stringify({
              event: 'command',
              func: 'stopVideo'
            }), '*');
            iframe.contentWindow.postMessage('{"method":"pause"}', "*");
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
          });
        }

        return;
      }

      ;

      if (wrapperContent) {
        const videos = wrapperContent.querySelectorAll('iframe, video');
        Array.prototype.forEach.call(videos, video => {
          if (video.tagName.toLowerCase() === 'video') {
            video.pause();
          } else {
            const src = video.src;
            video.src = src;
          }
        });
      }
    }, 300); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTrailer, indexBeforeChange]);

  const renderIframeVideo = (classVD, idVideoVd, titleVD) => {
    switch (newTypeVideo) {
      case "vimeo":
        return /*#__PURE__*/_jsx("iframe", {
          title: title || "",
          loading: "lazy",
          src: `https://player.vimeo.com/video/${idVideoVd}?h=3a3669479e&color=ffffff&title=0&byline=0&portrait=0`,
          frameBorder: "0",
          allow: "autoplay; fullscreen; picture-in-picture",
          allowFullScreen: true
        });

      case "bilibili":
        return /*#__PURE__*/_jsx("iframe", {
          allowFullScreen: true,
          className: classVD,
          loading: "lazy",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          src: `//player.bilibili.com/player.html?aid=${idVideoVd}&bvid=${idVideoVd}&cid=839966468&page=1`,
          scrolling: "no",
          frameBorder: "no",
          title: title || ""
        });

      default:
        return /*#__PURE__*/_jsx("iframe", {
          id: "ytplayer",
          className: classVD,
          loading: "lazy",
          width: "100%",
          height: "100%",
          src: `https://www.youtube.com/embed/${idVideoVd}?autoplay=0&enablejsapi=1&start=1`,
          title: titleVD,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        });
    }
  }; // const renderIconVideo = () => {
  //   const newTypeVideo = typeVideo.toLowerCase();
  //   switch (newTypeVideo) {
  //     case "vimeo":
  //     case "bilibili":
  //       return (
  //         <svg width="54" height="54" viewBox="0 0 54 54"
  //           xmlns="http://www.w3.org/2000/svg">
  //           <defs>
  //             <path id="pid-7-svgo-a" d="M0 0h54v54H0z" />
  //             <path d="M35.469 5.41a2.699 2.699 0 012.85 2.077 1.895 1.895 0 01-.185 1.362c-.05.09-.108.171-.166.254l-.174.247-.351.493c-.472.654-.955 1.3-1.454 1.934l-.01.013a162.636 162.636 0 014.04.231l1.11.083.554.045.277.023.139.011.07.006.077.008a7.779 7.779 0 012.483.658 7.873 7.873 0 013.703 3.467c.408.76.688 1.589.826 2.44.02.105.031.212.046.319l.01.08.01.076.014.139.057.555.107 1.111c.068.741.129 1.483.182 2.226.213 2.97.314 5.96.244 8.947a112.38 112.38 0 01-.57 8.919c-.007.086-.022.2-.035.306-.012.108-.03.215-.049.321l-.027.16-.034.159c-.023.106-.045.212-.074.316a7.94 7.94 0 01-1.842 3.394 7.9 7.9 0 01-4.483 2.446c-.107.017-.214.035-.321.049l-.322.036-.554.048-1.11.09c-.74.058-1.48.108-2.219.155-1.48.092-2.96.165-4.44.22-5.921.218-11.844.148-17.762-.204-.74-.044-1.479-.095-2.218-.149l-1.11-.087-.554-.046-.277-.024-.139-.012-.147-.014a7.807 7.807 0 01-2.497-.67 7.9 7.9 0 01-3.71-3.494 7.918 7.918 0 01-.821-2.449c-.017-.106-.035-.213-.045-.32l-.018-.161-.009-.08-.006-.07-.048-.555-.089-1.112a128.68 128.68 0 01-.148-2.227c-.173-2.97-.242-5.951-.174-8.932.066-2.978.25-5.948.532-8.908a7.864 7.864 0 012.051-4.614 7.82 7.82 0 014.436-2.405c.106-.016.21-.034.317-.047l.317-.034.554-.047 1.109-.088a154.233 154.233 0 014.487-.273l-.028-.035a59.498 59.498 0 01-1.454-1.934l-.351-.493-.174-.247c-.058-.083-.117-.165-.166-.254a1.896 1.896 0 01-.184-1.363 2.699 2.699 0 012.85-2.077 1.89 1.89 0 011.237.595c.07.075.13.156.19.237l.181.242.36.486c.476.651.94 1.31 1.39 1.981a45.03 45.03 0 011.678 2.683 231.804 231.804 0 017.029-.007c.122-.212.246-.422.37-.63.418-.695.854-1.375 1.303-2.046.45-.67.914-1.33 1.39-1.981l.36-.486.181-.242c.06-.081.12-.162.19-.237a1.89 1.89 0 011.238-.595zM20.366 22.632a2 2 0 00-.196.655 60.682 60.682 0 00-.416 7.208c0 2.174.106 4.347.318 6.52l.115 1.087a2 2 0 002.912 1.547 131.76 131.76 0 006.459-3.597 119.102 119.102 0 004.685-2.937l1.133-.757a2 2 0 00.029-3.292 91.839 91.839 0 00-5.847-3.78 99.132 99.132 0 00-5.407-2.994l-1.103-.558a2 2 0 00-2.682.898z" id="pid-7-svgo-d" /><filter x="-19.6%" y="-20.7%" width="139.2%" height="141.3%" filterUnits="objectBoundingBox" id="pid-7-svgo-c"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1" /><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1" /><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
  //               <feOffset in="SourceAlpha" result="shadowOffsetOuter2" />
  //               <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter2" result="shadowBlurOuter2" />
  //               <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2" />
  //               <feMerge><feMergeNode in="shadowMatrixOuter1" />
  //                 <feMergeNode in="shadowMatrixOuter2" /></feMerge>
  //             </filter></defs>
  //           <g fill="none" fillRule="evenodd" opacity=".812">
  //             <mask id="pid-7-svgo-b" fill="#fff">
  //               <use xlinkHref="#pid-7-svgo-a" />
  //             </mask>
  //             <g mask="url(#pid-7-svgo-b)">
  //               <use fill="#000" filter="url(#pid-7-svgo-c)" xlinkHref="#pid-7-svgo-d" />
  //               <use fill="#FFF" xlinkHref="#pid-7-svgo-d" />
  //             </g>
  //           </g>
  //         </svg>
  //       );
  //     default:
  //       return (
  //         <svg
  //           version='1.1'
  //           viewBox='0 0 68 48'
  //           width='68px'
  //         >
  //           <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00' />
  //           <path d='M 45,24 27,14 27,34' fill='#fff' />
  //         </svg>
  //       )
  //   }
  // }
  // const renderHrefImg = () => {
  //   const newTypeVideo = typeVideo.toLowerCase();
  //   switch (newTypeVideo) {
  //     case "vimeo":
  //     case "bilibili":
  //       return imageSecond;
  //     default:
  //       return imageVideo;
  //   }
  // }
  // const videoMemo = useMemo(() => (
  //   <Box>
  //     {
  //       // !usePlayVideo ? (
  //       //   <Box
  //       //     onClick={() => { setPlayVideo(true); handleItemOnClick?.(index) }}
  //       //     sx={{
  //       //       objectFit: 'cover',
  //       //       borderRadius: '20px',
  //       //       position: "absolute",
  //       //       top: "0px",
  //       //       left: "0px",
  //       //       right: "0px",
  //       //       bottom: "0px",
  //       //       width: "100%",
  //       //       height: "100%",
  //       //       cursor: "pointer",
  //       //       overflow: 'hidden',
  //       //       '& img': {
  //       //         width: '100%',
  //       //         height: '100%',
  //       //         objectFit: 'cover',
  //       //         borderRadius: '20px',
  //       //         overflow: 'hidden',
  //       //       }
  //       //     }}
  //       //   >
  //       //     {nextImage ?? <img src={renderHrefImg()} alt="" loading="lazy" />}
  //       //     <Box
  //       //       sx={{
  //       //         position: "absolute",
  //       //         top: "0px",
  //       //         left: "0px",
  //       //         right: "0px",
  //       //         bottom: "0px",
  //       //         width: "100%",
  //       //         height: "100%",
  //       //         display: 'flex',
  //       //         alignItems: 'center',
  //       //         justifyContent: 'center'
  //       //       }}
  //       //     >
  //       //       {renderIconVideo()}
  //       //     </Box>
  //       //   </Box>
  //       // ) : (
  //       renderIframeVideo(className || "", idVideo || "", title)
  //       // )
  //     }
  //   </Box>
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // ), [usePlayVideo])


  const videoMemoIframe = useMemo(() => /*#__PURE__*/_jsx(Box, {
    children: renderIframeVideo(className || "", idVideo || "", title)
  }) // eslint-disable-next-line react-hooks/exhaustive-deps
  , [selectedTrailer, index]);
  return /*#__PURE__*/_jsxs(Box, {
    className: className,
    sx: {
      width: "100%",
      height: "100%",
      display: 'flex',
      gap: '24px',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: disable ? -1 : 10
    },
    children: [/*#__PURE__*/_jsx(Box, {
      ref: refVideo,
      sx: {
        flex: '1 1 100%',
        minWidth: handleUpdateWidthIframe(),
        position: "relative",
        paddingTop: "56.25%",
        borderRadius: {
          xs: "10px",
          md: "20px"
        },
        "& iframe": {
          borderRadius: '20px',
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
          width: "100%",
          height: "100%"
        },
        '& span': {
          width: '100% !important',
          height: '100% !important'
        },
        "&::before": {
          content: "''",
          display: index === selectedTrailer ? "none" : "flex",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0px",
          left: "0px",
          backgroundImage: newTypeVideo === "youtube" ? "none" : `url(https://images.ctfassets.net/hnoi7ctzfs57/2baWXvQhjtLbC6jYnfchqy/260d28f41255c860668623c4072b463d/New_Project.webp?h=550)`,
          backgroundOrigin: "content-box",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          opacity: "1",
          zIndex: 2
        }
      },
      children: // !matches ? videoMemo : 
      videoMemoIframe
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "p6",
      color: colors.primary.bandaiNamcoWhite,
      sx: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '40ch'
      },
      children: title
    })]
  });
});
export default /*#__PURE__*/React.memo(PlayVideo);