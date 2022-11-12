"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

var _svg;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// define function
const MegaMenuListing = ({
  title,
  header,
  imgUrl,
  listSub,
  hadArrow = true,
  isShow = false,
  isSmall = false,
  slug
}) => {
  const [isShowList, setIsShowList] = (0, _react.useState)(false);

  const Icon = _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    width: "6",
    height: "11",
    viewBox: "0 0 6 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.625 5.37377L1.69286 0.631683C1.42009 0.319955 0.946272 0.288367 0.634545 0.561129C0.322817 0.83389 0.291229 1.30771 0.563991 1.61944L3.63185 5.37377L0.572631 9.12714C0.299869 9.43887 0.331458 9.91269 0.643185 10.1855C0.954912 10.4582 1.42873 10.4266 1.7015 10.1149L5.625 5.37377Z",
      fill: "#1E1E1E"
    })
  }));

  const heightSubList = (0, _react.useMemo)(() => {
    const result = {
      xs: 0,
      md: 0
    };

    if (!listSub || !listSub.length) {
      result.xs = "auto";
      result.md = "auto";
      return result;
    }

    listSub.map(item => {
      if (isSmall) {
        result.xs += 28;
        result.md += 25;
      } else {
        result.xs += 44;
        result.md += 50;
      }

      return item;
    });
    result.xs += "px";
    result.md += "px";
    return result;
  }, [isSmall, listSub]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: "flex",
      flexDirection: "column"
    },
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      sx: {
        color: "#9F9B9B",
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: "350",
        textAlign: "left",
        letterSpacing: "-0.5px",
        marginBottom: "10px"
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        overflowX: "hidden",
        position: "relative"
      },
      onClick: () => setIsShowList(!isShowList),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          flex: 1,
          display: "flex",
          alignItems: "center",
          "& img": {
            width: "55px",
            height: "55px",
            marginRight: "16px",
            objectFit: "cover",
            borderRadius: "50%"
          }
        },
        children: [!!imgUrl && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: imgUrl,
          alt: ""
        }), !!listSub && !!(listSub != null && listSub.length) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: "600"
          },
          children: header
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          color: _colors.default.primary.bandaiNamcoBlack,
          href: slug,
          sx: {
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: "600",
            textDecoration: "none",
            width: "100%"
          },
          children: header
        })]
      }), (!!listSub && !!(listSub != null && listSub.length) || hadArrow) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          width: "15px",
          height: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: isShowList ? "rotate(-90deg)" : "rotate(0deg)",
          transition: "all 0.2s"
        },
        children: Icon
      })]
    }), !!listSub && !!(listSub != null && listSub.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: isShow || isShowList ? "2px" : "0px",
        height: {
          xs: isShow || isShowList ? `${heightSubList.xs}` : "0px",
          md: isShow || isShowList ? `${heightSubList.md}` : "0px"
        },
        overflow: "hidden",
        transition: "all 0.3s"
      },
      children: listSub.map((item, index) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: item.value,
          variant: "p4",
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            marginTop: isSmall ? "6px" : "22px",
            textDecoration: "none",
            lineHeight: isSmall ? "19px" : "22px"
          },
          children: item.title
        }, index);
      })
    })]
  });
};

var _default = MegaMenuListing;
exports.default = _default;