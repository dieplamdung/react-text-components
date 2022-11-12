import _extends from "@babel/runtime/helpers/esm/extends";
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

const LocaleMapMobile = props => {
  var _img;

  const {
    mapMobile,
    listInfoMarker,
    mainImageNextProps,
    listTabs
  } = props;
  const [dataEachCountry, setDataEachCountry] = useState([]);
  useEffect(() => {
    const data = [...listInfoMarker];
    const dataSplice = data.splice(0, 2);
    const dataCache = [[...data], [...dataSplice]];
    setDataEachCountry(dataCache);
  }, [listInfoMarker]);
  const [activeFilter, setActiveFilter] = useState(0);
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
  const mapMobileMemo = useMemo(() => /*#__PURE__*/_jsxs(Box, {
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
      children: listInfoMarker.map((item, idx) => /*#__PURE__*/_jsx(Marker, _extends({}, item, {
        mainImageNextProps: mainImageNextProps,
        position: positionMarker[idx]?.position,
        sx: positionMarker[idx]?.sx,
        continentActive: activeFilter
      })))
    })]
  }) // eslint-disable-next-line react-hooks/exhaustive-deps
  , [activeFilter]);
  return /*#__PURE__*/_jsxs(Box, {
    children: [mapMobileMemo, /*#__PURE__*/_jsxs(Container, {
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '48px'
        },
        children: listTabs?.map((item, idx) => /*#__PURE__*/_jsx(Box, {
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
        }, idx))
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '28px'
        },
        children: /*#__PURE__*/_jsxs(Box, {
          children: [!!dataEachCountry[0]?.length && activeFilter === 0 && dataEachCountry[0]?.map((item, idx) => /*#__PURE__*/_jsx(Box, {
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
          }, idx)), !!dataEachCountry[1]?.length && activeFilter === 1 && dataEachCountry[1]?.map((item, idx) => /*#__PURE__*/_jsx(Box, {
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
          }, idx))]
        })
      })]
    })]
  });
};

export default LocaleMapMobile;