// import Modules
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button"; // import CardGameList from '~/organisms/HorizontalScrollingContainerMediaGallery/CardGameList';
// import Styles

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
// import Types
import loadable from '@loadable/component';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const CardGameList = loadable(() => import("./CardGameList"));

const HorizontalScrollingContainerMediaGallery = ({
  title,
  titleSeeAll,
  hrefSeeAll,
  listGame = [],
  id,
  isHomePage = false
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const refComponent = useRef();
  const [listValueGame, setListValueGame] = useState([]);
  /**
  * @param listImage list image need to cut
  * @param size number of arrays of results
  * @returns array image
  */

  const chunkListImage = (list, size) => {
    const results = [];

    while (list.length) {
      results.push(list.splice(0, size));
    }

    return results;
  };
  /**
   * function handle change dataListImage
   * function call function chunkListImage to slice dataListImage into arrays
   */


  const handleChangeListImage = useCallback(() => {
    const lenListGame = listGame.length;
    const loop = Math.round(18 / lenListGame);
    const newDataListImage = [...listGame];

    if (loop > 1) {
      for (let i = 0; i < loop - 1; i += 1) {
        newDataListImage.push(...listGame);
      }
    }

    if (isMobile) {
      const length = Math.round(newDataListImage.length / 3);
      setListValueGame(chunkListImage(newDataListImage, length));
      return;
    }

    const length = Math.ceil(newDataListImage.length / 2);
    setListValueGame(chunkListImage(newDataListImage, length));
  }, [listGame, isMobile]);
  useEffect(() => {
    handleChangeListImage();
  }, [isMobile, handleChangeListImage]); // dispatchEvent event send id to sub navigation

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = refComponent.current;
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
  return /*#__PURE__*/_jsxs(Box, {
    ref: refComponent,
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      overflowX: "hidden"
    },
    id: id,
    children: [!!title && /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "h2",
        sx: {
          textAlign: "center",
          marginBottom: {
            xs: "42px",
            lg: "74px"
          }
        },
        children: title
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginBottom: {
          xs: "8px",
          lg: "24px"
        }
      },
      children: /*#__PURE__*/_jsx(CardGameList, {
        className: "next",
        listGame: listValueGame[0],
        isHomePage: isHomePage
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        margin: {
          xs: "0px -86px",
          lg: "0px -179px"
        }
      },
      children: /*#__PURE__*/_jsx(CardGameList, {
        isNext: false,
        className: "prev",
        listGame: listValueGame[1],
        isHomePage: isHomePage,
        secondLine: true
      })
    }), isMobile && /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: "8px",
          lg: "24px"
        }
      },
      children: /*#__PURE__*/_jsx(CardGameList, {
        className: "mobile",
        listGame: listValueGame[2],
        isHomePage: isHomePage
      })
    }), titleSeeAll && hrefSeeAll && /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          justifyContent: "center",
          marginTop: {
            xs: "42px",
            lg: "54px"
          }
        },
        children: /*#__PURE__*/_jsx(Button, {
          variant: "primaryDark",
          externalLink: hrefSeeAll,
          children: titleSeeAll
        })
      })
    })]
  });
};

export default HorizontalScrollingContainerMediaGallery;