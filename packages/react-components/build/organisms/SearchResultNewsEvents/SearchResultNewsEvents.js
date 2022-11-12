import _extends from "@babel/runtime/helpers/esm/extends";
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'; // Types

import Typography from "../../atoms/Typography";
import HorizontalNewsCard from "../../molecules/HorizontalNewsCard";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SearchResultGame = props => {
  const {
    title = '',
    viewMore,
    listThumbnail,
    nextImage,
    numberShow,
    clickViewMore
  } = props;
  const [dataItem, setDataItem] = useState([]);
  useEffect(() => {
    if (numberShow) {
      const dataClone = [...listThumbnail];
      const data = dataClone.splice(0, numberShow);
      setDataItem(data);
    } else {
      setDataItem(listThumbnail);
    }
  }, [numberShow, listThumbnail]);
  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '0',
        paddingRight: '16px',
        maxWidth: {
          xs: 'calc(100vw - 16px)',
          md: '720px',
          lg: '960px',
          xl: '1140px'
        },
        marginBottom: {
          xs: title ? '35px' : '0px',
          md: title ? '67px' : '0px'
        }
      },
      children: [title && /*#__PURE__*/_jsxs(Typography, {
        variant: "h2",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [title, " ", /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          sx: {
            minWidth: '28px',
            height: '28px',
            borderRadius: listThumbnail.length > 99 ? '8px !important' : '100%',
            backgroundColor: colors.neutral.neutral6,
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '6px !important',
            paddingLeft: listThumbnail.length > 99 ? '6px !important' : '0px !important',
            paddingRight: listThumbnail.length > 99 ? '6px !important' : '0px !important'
          },
          children: listThumbnail.length
        })]
      }), !!(listThumbnail != null && listThumbnail.length) && (listThumbnail == null ? void 0 : listThumbnail.length) > 3 && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: /*#__PURE__*/_jsx(Box, {
          children: (viewMore == null ? void 0 : viewMore.title) && /*#__PURE__*/_jsx(Box, {
            onClick: () => clickViewMore == null ? void 0 : clickViewMore(),
            sx: {
              display: 'inline-block'
            },
            children: /*#__PURE__*/_jsx(Box // href='#'
            // target={viewMore?.target}
            , {
              component: 'span',
              sx: {
                cursor: 'pointer',
                borderBottom: `1px solid ${colors.neutral.neutral2}`,
                transition: 'all .4s',
                color: colors.neutral.neutral2,
                textDecoration: 'none',
                lineHeight: '21px',
                display: 'inline-block',
                '&:hover': {
                  '& p': {
                    color: colors.primary.bandaiNamcoBlack
                  },
                  borderBottom: `1px solid ${colors.primary.bandaiNamcoBlack}`
                }
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p5",
                color: colors.neutral.neutral2,
                sx: {
                  transition: 'all .4s'
                },
                children: viewMore == null ? void 0 : viewMore.title
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/_jsx(Box, {
      children: !!dataItem.length && dataItem.map((item, idx) => /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '20px',
            md: '36px'
          },
          '&:first-of-type': {
            marginTop: '0px'
          }
        },
        children: /*#__PURE__*/_jsx(HorizontalNewsCard, _extends({
          nextImage: nextImage
        }, item))
      }, idx))
    })]
  });
};

export default SearchResultGame;