import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import Modules
import { Box } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography"; // import Styles

import colors from "../../theme/colors";
import LocaleCardInfo from "./LocaleCardInfo"; // import Types

import Marker from "./Marker";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var LocaleMapMobile = function LocaleMapMobile(props) {
  var _img, _dataEachCountry$, _dataEachCountry$2, _dataEachCountry$3, _dataEachCountry$4;

  var mapMobile = props.mapMobile,
      listInfoMarker = props.listInfoMarker,
      mainImageNextProps = props.mainImageNextProps,
      listTabs = props.listTabs;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataEachCountry = _useState2[0],
      setDataEachCountry = _useState2[1];

  useEffect(function () {
    var data = _toConsumableArray(listInfoMarker);

    var dataSplice = data.splice(0, 2);
    var dataCache = [_toConsumableArray(data), _toConsumableArray(dataSplice)];
    setDataEachCountry(dataCache);
  }, [listInfoMarker]);

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      activeFilter = _useState4[0],
      setActiveFilter = _useState4[1];

  var positionMarker = [{
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
  var mapMobileMemo = useMemo(function () {
    return /*#__PURE__*/_jsxs(Box, {
      sx: {
        '& img': {
          width: '100%',
          display: 'block'
        },
        position: 'relative'
      },
      children: [_img || (_img = /*#__PURE__*/_jsx("img", {
        src: mapMobile,
        alt: "map"
      })), /*#__PURE__*/_jsx(Box, {
        sx: {
          '& svg': {
            cursor: 'pointer',
            '&:hover': {
              '& path': {
                transition: 'all .4s',
                fill: colors.primary.bandaiNamcoRed
              }
            }
          }
        },
        children: listInfoMarker.map(function (item, idx) {
          var _positionMarker$idx, _positionMarker$idx2;

          return /*#__PURE__*/_jsx(Marker, _extends({}, item, {
            mainImageNextProps: mainImageNextProps,
            position: (_positionMarker$idx = positionMarker[idx]) == null ? void 0 : _positionMarker$idx.position,
            sx: (_positionMarker$idx2 = positionMarker[idx]) == null ? void 0 : _positionMarker$idx2.sx,
            continentActive: activeFilter
          }));
        })
      })]
    }) // eslint-disable-next-line react-hooks/exhaustive-deps
    ;
  }, [activeFilter]);
  return /*#__PURE__*/_jsxs(Box, {
    children: [mapMobileMemo, /*#__PURE__*/_jsxs(Container, {
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '48px'
        },
        children: listTabs == null ? void 0 : listTabs.map(function (item, idx) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start",
              marginRight: {
                xs: '28px',
                md: '48'
              }
            },
            onClick: function onClick() {
              setActiveFilter(idx);
            },
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p3",
              color: colors.neutral.neutral4,
              className: idx === activeFilter ? 'active' : '',
              sx: {
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  '&:after': {
                    width: '100%'
                  },
                  '& a': {
                    color: colors.primary.bandaiNamcoRed
                  }
                },
                '&.active': {
                  color: colors.primary.bandaiNamcoRed,
                  '&:after': {
                    width: '100%'
                  },
                  '& a': {
                    color: colors.primary.bandaiNamcoRed
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
                  backgroundColor: colors.primary.bandaiNamcoRed
                }
              },
              children: item.label
            })
          }, idx);
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '28px'
        },
        children: /*#__PURE__*/_jsxs(Box, {
          children: [!!((_dataEachCountry$ = dataEachCountry[0]) != null && _dataEachCountry$.length) && activeFilter === 0 && ((_dataEachCountry$2 = dataEachCountry[0]) == null ? void 0 : _dataEachCountry$2.map(function (item, idx) {
            return /*#__PURE__*/_jsx(Box, {
              sx: {
                marginTop: '60px',
                '&:first-of-type': {
                  marginTop: '0px'
                }
              },
              children: /*#__PURE__*/_jsx(LocaleCardInfo, {
                item: item,
                mainImageNextProps: mainImageNextProps
              })
            }, idx);
          })), !!((_dataEachCountry$3 = dataEachCountry[1]) != null && _dataEachCountry$3.length) && activeFilter === 1 && ((_dataEachCountry$4 = dataEachCountry[1]) == null ? void 0 : _dataEachCountry$4.map(function (item, idx) {
            return /*#__PURE__*/_jsx(Box, {
              sx: {
                marginTop: '60px',
                '&:first-of-type': {
                  marginTop: '0px'
                }
              },
              children: /*#__PURE__*/_jsx(LocaleCardInfo, {
                item: item,
                mainImageNextProps: mainImageNextProps
              })
            }, idx);
          }))]
        })
      })]
    })]
  });
};

export default LocaleMapMobile;