import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// Modules
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'; // Styles

import Container from "../../atoms/Container"; // Types

import { jsx as _jsx } from "react/jsx-runtime";

var BlogBlockImage = function BlogBlockImage(props) {
  var listThumbnail = props.listThumbnail;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataListSplice = _useState2[0],
      setDataListSplice = _useState2[1];

  useEffect(function () {
    var data = _toConsumableArray(listThumbnail);

    var dataCache = [];

    while (data.length) {
      var dataSpliceTwo = data.splice(0, 2);
      dataCache.push(dataSpliceTwo);
      var dataSpliceThree = data.splice(0, 3);
      dataCache.push(dataSpliceThree);
      var dataSpliceOne = data.splice(0, 1);
      dataCache.push(dataSpliceOne);
      setDataListSplice(dataCache);
    }
  }, [listThumbnail]);
  return /*#__PURE__*/_jsx(Box, {
    children: !!dataListSplice.length && dataListSplice.map(function (rows, idx) {
      return /*#__PURE__*/_jsx(Container, {
        sx: {
          display: rows.length ? 'flex' : 'none',
          justifyContent: 'space-between',
          gap: {
            xs: '0px',
            md: '24px'
          },
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '920px',
          flexWrap: {
            xs: 'wrap',
            md: 'nowrap'
          }
        },
        children: rows == null ? void 0 : rows.map(function (item, index) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              marginBottom: '24px',
              width: {
                xs: '100%',
                // eslint-disable-next-line no-nested-ternary
                md: rows.length === 1 ? '100%' : rows.length === 2 ? 'calc(50% - 11px)' : 'calc(33.3333% - 14px)'
              }
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                flex: "1",
                maxWidth: {
                  // md: rows.length === 1 ? '928px' : rows.length === 2 ? '100%' : '100%',
                  xs: '100%'
                },
                display: "flex"
              },
              children: /*#__PURE__*/_jsx(Box, {
                sx: {
                  width: '100%',
                  paddingBottom: {
                    xs: '66.8%',
                    // eslint-disable-next-line no-nested-ternary
                    md: rows.length === 1 ? '56.1%' : rows.length === 2 ? '73%' : '72.7%'
                  },
                  borderRadius: '10px',
                  overflow: "hidden",
                  position: 'relative',
                  transform: 'rotate(0)',
                  "& span": {
                    width: '100% !important',
                    height: '100% !important'
                  },
                  '& img': {
                    position: "absolute",
                    objectFit: 'cover',
                    borderRadius: '10px',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    transform: "scale(1)",
                    transition: "all 0.5s",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    "&:hover": {
                      transform: "scale(1.2)"
                    }
                  }
                },
                children: !item.mainImageNext ? /*#__PURE__*/_jsx("img", {
                  src: item.mainImage,
                  alt: ''
                }) : item.mainImageNext
              })
            })
          }, "rows".concat(index));
        })
      }, idx);
    })
  });
};

export default BlogBlockImage;