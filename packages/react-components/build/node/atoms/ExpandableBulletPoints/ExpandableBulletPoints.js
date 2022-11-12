"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExpandableBulletPoints;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _HtmlRenderer = _interopRequireDefault(require("../HtmlRenderer"));

var _jsxRuntime = require("react/jsx-runtime");

var _ExpandMoreIcon;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import BulletPoint from '../BulletPoint';
function ExpandableBulletPoints(props) {
  var _label$, _label$2, _label$3;

  const {
    color = _colors.default.primary.bandaiNamcoBlack,
    label = '',
    bulletPointProps
  } = props;
  const theme = (0, _material.useTheme)();
  const isMobileMin = (0, _material.useMediaQuery)((0, _viewport.SmallMobileDown)(theme));
  const [isShowContent, setIsShowContent] = (0, _react.useState)(isMobileMin);
  (0, _react.useEffect)(() => {
    setIsShowContent(isMobileMin);
  }, [isMobileMin]);

  const handleCheckCollapse = () => {
    if (isMobileMin) {
      setIsShowContent(!isShowContent);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: 'inline-block' // marginBottom: "8px"

    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Accordion, {
      expanded: !!label && (label == null ? void 0 : (_label$ = label[0]) == null ? void 0 : _label$.type) === "h4" ? !isShowContent : true,
      sx: {
        boxShadow: 'none',
        minHeight: 'unset',
        backgroundColor: 'transparent',
        '& .MuiAccordionSummary-root': {
          minHeight: 'unset',
          margin: '0px',
          padding: '0px'
        },
        '& .MuiAccordionSummary-content': {
          margin: '0px'
        },
        '& .Mui-expanded': {
          minHeight: 'unset !important',
          '& .MuiAccordionSummary-content': {
            minHeight: 'unset',
            margin: '0px',
            "& p": {
              padding: "0px",
              margin: "0px"
            }
          }
        },
        "& *": {
          cursor: !!label && (label == null ? void 0 : (_label$2 = label[0]) == null ? void 0 : _label$2.type) === "h4" ? "pointer" : "auto"
        }
      },
      className: "111111111111111",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionSummary, {
        expandIcon: isMobileMin && !!label && (label == null ? void 0 : (_label$3 = label[0]) == null ? void 0 : _label$3.type) === "h4" ? _ExpandMoreIcon || (_ExpandMoreIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore.default, {})) : null,
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        onClick: handleCheckCollapse,
        children: label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            color,
            marginBottom: "16px",
            "& h4": {
              margin: "0px !important",
              padding: "0px !important",
              fontWeight: "600",
              fontSize: {
                xs: "16px",
                md: "18px"
              },
              lineHeight: {
                xs: "22px",
                md: "24px"
              },
              letterSpacing: "-0.2px"
            }
          },
          children: label
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionDetails, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          padding: '0' // margin: "16px 0px 0px 0px",
          // "&::last-child": {
          //   background: "red"
          // }

        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: 'p6',
          color: _colors.default.neutral.neutral2,
          sx: {
            "& p": {
              width: "100%",
              padding: "0px",
              margin: "0px",
              maxWidth: "100% !important"
            },
            "& div": {
              width: "100%",
              padding: "0px",
              margin: "0px",
              maxWidth: "100% !important"
            },
            "& ul": {
              "& li": {
                width: "100%",
                padding: "0px",
                margin: "0px",
                maxWidth: "100%"
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "p",
            value: bulletPointProps
          })
        })
      })]
    })
  });
}