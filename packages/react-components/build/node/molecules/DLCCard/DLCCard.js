"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _ButtonPrice = _interopRequireDefault(require("../../atoms/ButtonPrice"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// define function
const DLCCard = props => {
  const {
    mainImageNext = '',
    mainImage = '',
    title = '',
    linkHref = '/',
    buttonProps,
    priceProps,
    description,
    isButtonSecond,
    onClickBuy
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      backgroundColor: 'transparent',
      borderRadius: '20px',
      maxWidth: {
        xs: '100%',
        md: '357px'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        maxWidth: '100%',
        flex: {
          xs: '0 0 201px',
          md: '309px 368px 117px'
        },
        height: {
          xs: "174px",
          md: "200px"
        },
        borderRadius: '10px',
        overflow: "hidden",
        "&:hover": {
          '& img': {
            transform: "scale(1.2)"
          }
        },
        '& img': {
          objectFit: 'cover',
          display: 'block',
          width: '100%',
          height: "100%",
          transition: "all 0.3s"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: linkHref,
        children: !mainImageNext ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        }) : mainImageNext
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        marginTop: '20px',
        marginBottom: '36px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: linkHref,
        sx: {
          textDecoration: "none",
          color: _colors.default.primary.bandaiNamcoBlack
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h6",
          sx: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",

            /* number of lines to show */
            lineClamp: "2",
            "-webkit-box-orient": "vertical"
          },
          children: title
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p8",
        marginTop: '8px',
        color: _colors.default.neutral.neutral2,
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          "-webkit-line-clamp": "2",

          /* number of lines to show */
          lineClamp: "2",
          "-webkit-box-orient": "vertical"
        },
        children: description
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        minWidth: '117px',
        '& .MuiButton-root': {
          padding: '10px 46px'
        },
        "& > div": {
          display: 'flex' // "& button": {
          //   backgroundColor: colors.primary.bandaiNamcoRed,
          //   color: colors.primary.bandaiNamcoWhite,
          // }

        },
        "& > div > div": {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '12px',
          marginTop: '0px'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonPrice.default, {
        buttonProps: (0, _extends2.default)({}, buttonProps, {
          onClick: () => {
            onClickBuy == null ? void 0 : onClickBuy();
          }
        }),
        priceProps: priceProps,
        isButtonSecond: isButtonSecond
      })
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(DLCCard);

exports.default = _default;