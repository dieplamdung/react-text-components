"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _TabIcons = _interopRequireDefault(require("../../atoms/TabIcons"));

var _Accordion = _interopRequireDefault(require("../../atoms/Accordion"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
const SupportFAQ = props => {
  var _listAccordionDefault, _listAccordion$select, _listAccordion$select2, _listAccordionDefault4, _listAccordionDefault5;

  const {
    title,
    secondaryTitle,
    listAccordion,
    listTabIcons,
    listLink,
    listAccordionDefault
  } = props;
  const [thread, setThread] = (0, _react.useState)(listAccordionDefault == null ? void 0 : (_listAccordionDefault = listAccordionDefault[0]) == null ? void 0 : _listAccordionDefault.key);
  const [selectedId, setSelectedId] = (0, _react.useState)(-1);
  /**
   * Use to collect title data by default when the data changes
   */

  (0, _react.useEffect)(() => {
    var _listAccordionDefault2;

    setThread(listAccordionDefault == null ? void 0 : (_listAccordionDefault2 = listAccordionDefault[0]) == null ? void 0 : _listAccordionDefault2.key);
  }, [listAccordionDefault]);
  /**
     * Use to handling data switch tabs
     */

  const handleTabs = id => {
    var _listAccordionDefault3;

    // refAccordion.current?.handleResetCollapse?.()
    setSelectedId(id);
    setThread(id === -1 ? listAccordionDefault == null ? void 0 : (_listAccordionDefault3 = listAccordionDefault[0]) == null ? void 0 : _listAccordionDefault3.key : '');
  };

  const UseCallbackAccordion = (0, _react.useCallback)(propsAccordion => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, (0, _extends2.default)({}, propsAccordion)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      overflow: 'hidden',
      width: {
        xs: '100%',
        lg: '744px'
      },
      margin: '0 auto'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h1",
        sx: {
          marginBottom: '32px'
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: '100%'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabIcons.default, {
          listTabs: listTabIcons,
          onChangeTab: handleTabs
        })
      }), thread && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: 'h5',
        sx: {
          marginBottom: '32px',
          marginTop: '60px',
          userSelect: 'none'
        },
        children: thread
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          margin: {
            xs: '52px 0',
            md: '60px 0'
          },
          '& > div': {
            marginBottom: '24px'
          }
        },
        children: listAccordion != null && listAccordion[selectedId] ? listAccordion == null ? void 0 : (_listAccordion$select = listAccordion[selectedId]) == null ? void 0 : (_listAccordion$select2 = _listAccordion$select.accordionItems) == null ? void 0 : _listAccordion$select2.map((item, idx) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(UseCallbackAccordion, (0, _extends2.default)({}, item), idx);
        }) : listAccordionDefault == null ? void 0 : (_listAccordionDefault4 = listAccordionDefault[0]) == null ? void 0 : (_listAccordionDefault5 = _listAccordionDefault4.accordionItems) == null ? void 0 : _listAccordionDefault5.map((item, idx) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion.default, (0, _extends2.default)({}, item), idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h6",
          sx: {
            userSelect: 'none',
            marginBottom: {
              xs: '24px',
              md: '20px'
            }
          },
          children: secondaryTitle
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            gap: {
              xs: '21px',
              md: '28px'
            },
            '& p': {
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              display: 'inline-block'
            }
          },
          children: listLink == null ? void 0 : listLink.map(item => {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
              href: item == null ? void 0 : item.href,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p5",
                sx: {
                  color: _colors.default.neutral.neutral2,
                  userSelect: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    color: _colors.default.neutral.neutral1
                  }
                },
                children: item == null ? void 0 : item.label
              })
            });
          })
        })]
      })]
    })
  });
};

var _default = SupportFAQ;
exports.default = _default;