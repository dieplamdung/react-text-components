import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
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
var CardGameList = loadable(function () {
  return import("./CardGameList");
});

var HorizontalScrollingContainerMediaGallery = function HorizontalScrollingContainerMediaGallery(_ref) {
  var title = _ref.title,
      titleSeeAll = _ref.titleSeeAll,
      hrefSeeAll = _ref.hrefSeeAll,
      _ref$listGame = _ref.listGame,
      listGame = _ref$listGame === void 0 ? [] : _ref$listGame,
      id = _ref.id,
      _ref$isHomePage = _ref.isHomePage,
      isHomePage = _ref$isHomePage === void 0 ? false : _ref$isHomePage;
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  var refComponent = useRef();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      listValueGame = _useState2[0],
      setListValueGame = _useState2[1];
  /**
  * @param listImage list image need to cut
  * @param size number of arrays of results
  * @returns array image
  */


  var chunkListImage = function chunkListImage(list, size) {
    var results = [];

    while (list.length) {
      results.push(list.splice(0, size));
    }

    return results;
  };
  /**
   * function handle change dataListImage
   * function call function chunkListImage to slice dataListImage into arrays
   */


  var handleChangeListImage = useCallback(function () {
    var lenListGame = listGame.length;
    var loop = Math.round(18 / lenListGame);

    var newDataListImage = _toConsumableArray(listGame);

    if (loop > 1) {
      for (var i = 0; i < loop - 1; i += 1) {
        newDataListImage.push.apply(newDataListImage, _toConsumableArray(listGame));
      }
    }

    if (isMobile) {
      var _length = Math.round(newDataListImage.length / 3);

      setListValueGame(chunkListImage(newDataListImage, _length));
      return;
    }

    var length = Math.ceil(newDataListImage.length / 2);
    setListValueGame(chunkListImage(newDataListImage, length));
  }, [listGame, isMobile]);
  useEffect(function () {
    handleChangeListImage();
  }, [isMobile, handleChangeListImage]); // dispatchEvent event send id to sub navigation

  useEffect(function () {
    if (typeof window !== "undefined") {
      var container = refComponent.current;
      window.addEventListener("scroll", function () {
        if (container) {
          var _container$getBoundin = container.getBoundingClientRect(),
              bottom = _container$getBoundin.bottom,
              top = _container$getBoundin.top;

          var newBottom = Math.floor(bottom);
          var newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event("".concat(id)));
          }
        }
      });
    }

    return function () {
      window.removeEventListener("".concat(id), function () {});
      window.removeEventListener("scroll", function () {});
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