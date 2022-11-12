"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CardGameList = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("./CardGameList"))));

const HorizontalScrollingContainerMediaGallery = ({
  title,
  titleSeeAll,
  hrefSeeAll,
  listGame = [],
  id,
  isHomePage = false
}) => {
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const refComponent = (0, _react.useRef)();
  const [listValueGame, setListValueGame] = (0, _react.useState)([]);
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


  const handleChangeListImage = (0, _react.useCallback)(() => {
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
  (0, _react.useEffect)(() => {
    handleChangeListImage();
  }, [isMobile, handleChangeListImage]); // dispatchEvent event send id to sub navigation

  (0, _react.useEffect)(() => {
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
            var _window;

            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event(`${id}`));
          }
        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    ref: refComponent,
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      overflowX: "hidden"
    },
    id: id,
    children: [!!title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        marginBottom: {
          xs: "8px",
          lg: "24px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CardGameList, {
        className: "next",
        listGame: listValueGame[0],
        isHomePage: isHomePage
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        margin: {
          xs: "0px -86px",
          lg: "0px -179px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CardGameList, {
        isNext: false,
        className: "prev",
        listGame: listValueGame[1],
        isHomePage: isHomePage,
        secondLine: true
      })
    }), isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        marginTop: {
          xs: "8px",
          lg: "24px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CardGameList, {
        className: "mobile",
        listGame: listValueGame[2],
        isHomePage: isHomePage
      })
    }), titleSeeAll && hrefSeeAll && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: "flex",
          justifyContent: "center",
          marginTop: {
            xs: "42px",
            lg: "54px"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          variant: "primaryDark",
          externalLink: hrefSeeAll,
          children: titleSeeAll
        })
      })
    })]
  });
};

var _default = HorizontalScrollingContainerMediaGallery;
exports.default = _default;