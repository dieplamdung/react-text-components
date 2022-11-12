"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
const KeyFeature = props => {
  const {
    title,
    descriptionTop,
    descriptionBottom,
    image,
    imagePosition = "right",
    typeBorder = "waves"
  } = props;
  const shapes = {
    waves: "https://images.ctfassets.net/hnoi7ctzfs57/6rUntPc8hd3pAWDnID6sMN/30df11a6739770ba985767ffa7440bb6/Image.svg",
    pyramid: 'https://images.ctfassets.net/hnoi7ctzfs57/6rUntPc8hd3pAWDnID6sMN/30df11a6739770ba985767ffa7440bb6/Image.svg',
    triangle: 'https://images.ctfassets.net/hnoi7ctzfs57/5g7xUwjkFx3ccrM9jmNfj4/c6c5fd6a93635accc0c3899cf4e4b8ae/Image.svg',
    circle: 'https://images.ctfassets.net/hnoi7ctzfs57/7ktutoyaiBTd8Hu9PODVod/8fed65e226b54d9830490b9e013fcd22/Vector.svg',
    square: 'https://images.ctfassets.net/hnoi7ctzfs57/3WKE9GFX1GJpGA53iTwnSC/80518be86143cb8a9cd8d4a150054c91/Vector.svg',
    oval: 'https://images.ctfassets.net/hnoi7ctzfs57/3Y55X9lv37kWzSnlUx7I6v/5b0195143cbe9cd5ed9d1c611e3568c7/Vector__1_.svg',
    trapezium: 'https://images.ctfassets.net/hnoi7ctzfs57/49u6U3f0JpoqR0t4vVdbkb/dee59651d302d0fb0f813496e86769ff/Vector__2_.svg',
    ellipse: 'https://images.ctfassets.net/hnoi7ctzfs57/33f2KccxvSjYJ1Uok0hCcN/e91f5fff23b1ed32010360a42ed006ab/Vector__4_.svg',
    trapezium_vertical: 'https://images.ctfassets.net/hnoi7ctzfs57/3DskpaeNSzVwA169NICcj/c6a0fbc7f75e95879d2ad4744b25612d/Vector.svg',
    half_an_ellipse: 'https://images.ctfassets.net/hnoi7ctzfs57/7av7agcTwvYwtBua9xj5ox/392ca071d651166e9534e9b4ef08a118/Vector__1_.svg',
    half_a_circle: 'https://images.ctfassets.net/hnoi7ctzfs57/236sQ8c9dCyuMltivbKuoP/af7faad33cb2675bd7c791771cb2d0a4/Vector__2_.svg'
  };

  const renderPaddingBottomHeightMobile = () => {
    if (typeBorder === "pyramid") {
      return "105.3%";
    }

    if (typeBorder === "triangle") {
      return "91.79%";
    }

    if (typeBorder === "oval") {
      return {
        xs: "142%",
        md: "106%"
      };
    }

    if (typeBorder === "ellipse") {
      return {
        xs: '142%',
        md: "106%"
      };
    }

    if (typeBorder === "trapezium_vertical") {
      return {
        xs: "140%",
        md: '105%'
      };
    }

    if (typeBorder === "half_an_ellipse") {
      return {
        xs: '109%',
        md: "141.79%"
      };
    }

    if (typeBorder === "half_a_circle") {
      return "55.43%";
    }

    return "100%";
  };

  const renderMaxWidth = () => {
    if (typeBorder === "oval") {
      return "335px";
    }

    if (typeBorder === "ellipse") {
      return "335px";
    }

    if (typeBorder === "trapezium_vertical") {
      return "335px";
    }

    if (typeBorder === "half_an_ellipse") {
      return "335px";
    }

    return "451px";
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        width: {
          xs: "100%",
          xl: "1116px"
        },
        alignItems: "center",
        flexDirection: {
          xs: "column",
          lg: imagePosition === "right" ? "row-reverse" : "row"
        },
        marginBottom: {
          md: "82px",
          lg: "0px"
        },
        '&:last-child': {
          marginBottom: "0px"
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: '100%',
          maxWidth: {
            xs: '100%',
            md: '451px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: {
              xs: "100%",
              md: "100%"
            },
            paddingBottom: renderPaddingBottomHeightMobile(),
            maxWidth: renderMaxWidth(),
            margin: '0 auto',
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            maskImage: typeBorder !== "none" ? `url(${shapes == null ? void 0 : shapes[`${typeBorder}`]})` : 'none',
            maskSize: typeBorder === 'half_an_ellipse' ? 'contain' : "100%",
            maskRepeat: " no-repeat",
            maskPosition: "center"
          }
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          width: '100%',
          display: "flex",
          maxWidth: {
            xs: "720px",
            lg: "451px"
          },
          flexDirection: "column",
          justifyContent: {
            xs: 'flex-start'
          },
          height: "100%",
          marginLeft: {
            xs: "0px",
            lg: imagePosition === "left" ? "118px" : "0px"
          },
          marginRight: {
            md: "0px",
            lg: imagePosition === "left" ? "0px" : "118px"
          },
          paddingTop: {
            xs: "46px",
            lg: "0px"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h5",
          sx: {
            textAlign: "left",
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            color: _colors.default.primary.bandaiNamcoBlack
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: 'div',
            value: title
          })
        }), descriptionTop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          sx: {
            marginTop: "22px",
            letterSpacing: "-0.2px",
            lineHeight: {
              md: "20px",
              lg: "22px"
            },
            color: _colors.default.neutral.neutral2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: 'p',
            value: descriptionTop
          })
        }), descriptionBottom && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          sx: {
            marginTop: "22px",
            letterSpacing: "-0.2px",
            lineHeight: {
              md: "20px",
              lg: "22px"
            },
            color: _colors.default.neutral.neutral2
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: 'p',
            value: descriptionBottom
          })
        })]
      })]
    })
  });
};

var _default = KeyFeature;
exports.default = _default;