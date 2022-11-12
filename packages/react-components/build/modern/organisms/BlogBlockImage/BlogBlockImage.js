// Modules
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'; // Styles

import Container from "../../atoms/Container"; // Types

import { jsx as _jsx } from "react/jsx-runtime";

const BlogBlockImage = props => {
  const {
    listThumbnail
  } = props;
  const [dataListSplice, setDataListSplice] = useState([]);
  useEffect(() => {
    const data = [...listThumbnail];
    const dataCache = [];

    while (data.length) {
      const dataSpliceTwo = data.splice(0, 2);
      dataCache.push(dataSpliceTwo);
      const dataSpliceThree = data.splice(0, 3);
      dataCache.push(dataSpliceThree);
      const dataSpliceOne = data.splice(0, 1);
      dataCache.push(dataSpliceOne);
      setDataListSplice(dataCache);
    }
  }, [listThumbnail]);
  return /*#__PURE__*/_jsx(Box, {
    children: !!dataListSplice.length && dataListSplice.map((rows, idx) => /*#__PURE__*/_jsx(Container, {
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
      children: rows?.map((item, index) => /*#__PURE__*/_jsx(Box, {
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
      }, `rows${index}`))
    }, idx))
  });
};

export default BlogBlockImage;