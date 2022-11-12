import _extends from "@babel/runtime/helpers/esm/extends";
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'; // Types

import Typography from "../../atoms/Typography";
import MoreGameListingCard from "../../molecules/MoreGameListingCard";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// import { ISearchResultGame } from './types';
const SearchResultGame = props => {
  const {
    propsGame,
    clickViewMore
  } = props;
  const [dataItem, setDataItem] = useState([]);
  useEffect(() => {
    if (propsGame?.numberShow) {
      const dataClone = [...propsGame.listThumbnail];
      const data = dataClone.splice(0, propsGame?.numberShow);
      setDataItem(data);
    } else {
      setDataItem(propsGame?.listThumbnail);
    }
  }, [propsGame?.numberShow, propsGame?.listThumbnail]);
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
          xs: propsGame?.title ? '35px' : '0px',
          md: propsGame?.title ? '67px' : '0px'
        }
      },
      children: [propsGame.title && /*#__PURE__*/_jsxs(Typography, {
        variant: "h2",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [propsGame.title, /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          sx: {
            minWidth: '28px',
            height: '28px',
            borderRadius: propsGame?.listThumbnail.length > 99 ? '8px !important' : '100%',
            backgroundColor: colors.neutral.neutral6,
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '6px !important',
            paddingLeft: propsGame?.listThumbnail.length > 99 ? '6px !important' : '0px !important',
            paddingRight: propsGame?.listThumbnail.length > 99 ? '6px !important' : '0px !important'
          },
          children: propsGame?.listThumbnail.length
        })]
      }), propsGame?.listThumbnail.length > 4 && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: /*#__PURE__*/_jsx(Box, {
          children: propsGame.viewMore?.title && /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'inline-block'
            },
            onClick: () => clickViewMore?.(),
            children: /*#__PURE__*/_jsx(Box, {
              component: 'span' // href={propsGame.viewMore?.href}
              // target={propsGame.viewMore?.target}
              ,
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
                children: propsGame.viewMore?.title
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/_jsx(Box, {
      children: /*#__PURE__*/_jsx(Grid, {
        container: true,
        rowSpacing: "36px",
        children: !!dataItem?.length && dataItem.map((item, idx) => /*#__PURE__*/_jsx(Grid, {
          item: true,
          xs: 12,
          md: 12,
          lg: 6,
          children: /*#__PURE__*/_jsx(MoreGameListingCard, _extends({}, item), idx)
        }, idx))
      })
    })]
  });
};

export default SearchResultGame;