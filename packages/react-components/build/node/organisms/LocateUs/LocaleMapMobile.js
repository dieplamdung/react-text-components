"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _LocaleCardInfo = _interopRequireDefault(require("./LocaleCardInfo"));

var _Marker = _interopRequireDefault(require("./Marker"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
// import Types
const LocaleMapMobile = props => {
  var _img, _dataEachCountry$, _dataEachCountry$2, _dataEachCountry$3, _dataEachCountry$4;

  const {
    mapMobile,
    listInfoMarker,
    mainImageNextProps,
    listTabs
  } = props;
  const [dataEachCountry, setDataEachCountry] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const data = [...listInfoMarker];
    const dataSplice = data.splice(0, 2);
    const dataCache = [[...data], [...dataSplice]];
    setDataEachCountry(dataCache);
  }, [listInfoMarker]);
  const [activeFilter, setActiveFilter] = (0, _react.useState)(0);
  const positionMarker = [{
    position: "left",
    sx: {
      position: 'absolute',
      top: '16.3%',
      left: '13.2%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '11.5%',
      left: '50.1%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '20.6%',
      right: '7.1%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '30.9%',
      right: '16%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '37.2%',
      right: '3.7%'
    }
  }, {
    position: 'right',
    sx: {
      position: 'absolute',
      top: '52.4%',
      right: '12.7%'
    }
  }];
  const mapMobileMemo = (0, _react.useMemo)(() => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      '& img': {
        width: '100%',
        display: 'block'
      },
      position: 'relative'
    },
    children: [_img || (_img = /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: mapMobile,
      alt: "map"
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        '& svg': {
          cursor: 'pointer',
          '&:hover': {
            '& path': {
              transition: 'all .4s',
              fill: _colors.default.primary.bandaiNamcoRed
            }
          }
        }
      },
      children: listInfoMarker.map((item, idx) => {
        var _positionMarker$idx, _positionMarker$idx2;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Marker.default, (0, _extends2.default)({}, item, {
          mainImageNextProps: mainImageNextProps,
          position: (_positionMarker$idx = positionMarker[idx]) == null ? void 0 : _positionMarker$idx.position,
          sx: (_positionMarker$idx2 = positionMarker[idx]) == null ? void 0 : _positionMarker$idx2.sx,
          continentActive: activeFilter
        }));
      })
    })]
  }) // eslint-disable-next-line react-hooks/exhaustive-deps
  , [activeFilter]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [mapMobileMemo, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: '48px'
        },
        children: listTabs == null ? void 0 : listTabs.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start",
            marginRight: {
              xs: '28px',
              md: '48'
            }
          },
          onClick: () => {
            setActiveFilter(idx);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p3",
            color: _colors.default.neutral.neutral4,
            className: idx === activeFilter ? 'active' : '',
            sx: {
              position: 'relative',
              cursor: 'pointer',
              '&:hover': {
                '&:after': {
                  width: '100%'
                },
                '& a': {
                  color: _colors.default.primary.bandaiNamcoRed
                }
              },
              '&.active': {
                color: _colors.default.primary.bandaiNamcoRed,
                '&:after': {
                  width: '100%'
                },
                '& a': {
                  color: _colors.default.primary.bandaiNamcoRed
                }
              },
              whiteSpace: 'nowrap',
              '&:after': {
                content: "''",
                width: '0%',
                position: 'absolute',
                bottom: 0,
                height: '2px',
                left: 0,
                transition: 'all .4s',
                backgroundColor: _colors.default.primary.bandaiNamcoRed
              }
            },
            children: item.label
          })
        }, idx))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: '28px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          children: [!!((_dataEachCountry$ = dataEachCountry[0]) != null && _dataEachCountry$.length) && activeFilter === 0 && ((_dataEachCountry$2 = dataEachCountry[0]) == null ? void 0 : _dataEachCountry$2.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              marginTop: '60px',
              '&:first-of-type': {
                marginTop: '0px'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocaleCardInfo.default, {
              item: item,
              mainImageNextProps: mainImageNextProps
            })
          }, idx))), !!((_dataEachCountry$3 = dataEachCountry[1]) != null && _dataEachCountry$3.length) && activeFilter === 1 && ((_dataEachCountry$4 = dataEachCountry[1]) == null ? void 0 : _dataEachCountry$4.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              marginTop: '60px',
              '&:first-of-type': {
                marginTop: '0px'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocaleCardInfo.default, {
              item: item,
              mainImageNextProps: mainImageNextProps
            })
          }, idx)))]
        })
      })]
    })]
  });
};

var _default = LocaleMapMobile;
exports.default = _default;