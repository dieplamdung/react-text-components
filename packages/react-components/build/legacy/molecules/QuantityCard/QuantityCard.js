import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconDelete;

// import Modules
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography"; // import { Link } from '@mui/material'

import { IconDelete } from "../../atoms/Icon";
import DropdownQuantity from "../DropdownQuantity"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var QuantityCard = function QuantityCard(props) {
  var mainImageNext = props.mainImageNext,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      title = props.title,
      edition = props.edition,
      originalPrice = props.originalPrice,
      promoPrice = props.promoPrice,
      index = props.index,
      quantity = props.quantity,
      _props$onClickDelete = props.onClickDelete,
      onClickDelete = _props$onClickDelete === void 0 ? function () {} : _props$onClickDelete,
      _props$onSetQuantity = props.onSetQuantity,
      _onSetQuantity = _props$onSetQuantity === void 0 ? function () {} : _props$onSetQuantity,
      freegift = props.freegift,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'quantity' : _props$variant;

  var _useState = useState(index),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  useEffect(function () {
    setPosition(index);
  }, [index]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: 'flex',
      alignItems: {
        xs: 'flex-start',
        md: 'center'
      },
      width: '100%'
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        flex: {
          xs: '0 0 90px',
          md: '0 0 168px'
        },
        height: {
          xs: '90px',
          md: '168px'
        },
        borderRadius: '10px',
        overflow: "hidden",
        transform: 'rotate(0)',
        "& a": {
          height: "100% !important"
        },
        "& span": {
          height: "100% !important"
        },
        '& img': {
          objectFit: 'fill',
          display: 'block',
          width: '100%',
          height: '100%',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: "scale(1.2)"
          }
        }
      },
      children: mainImageNext || /*#__PURE__*/_jsx("img", {
        src: mainImage,
        alt: mainImage != null ? mainImage : ''
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: '100%',
        marginLeft: {
          xs: '16px',
          md: '22px'
        },
        alignItems: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: {
          xs: 'flex-start',
          md: 'center'
        }
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
          alignItems: 'flex-start',
          // marginTop: {
          // xs: '8px',
          // md: '12px'
          // },
          marginBottom: {
            xs: '10px',
            md: '20px'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: [/*#__PURE__*/_jsxs(Box // href={linkHref}
        , {
          sx: {
            flex: 1
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "h6",
            sx: {
              color: colors.primary.bandaiNamcoBlack,
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              wordBreak: "break-word"
            },
            children: title
          }), /*#__PURE__*/_jsx(Box, {
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p7",
              sx: {
                color: colors.neutral.neutral2,
                marginTop: {
                  xs: '8px',
                  md: '10px'
                },
                marginBottom: {
                  xs: '12px',
                  md: '32px'
                },
                display: '-webkit-box',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                wordBreak: "break-word"
              },
              children: edition
            })
          })]
        }), variant === 'quantity' && /*#__PURE__*/_jsx(Box, {
          onClick: function onClick() {
            return onClickDelete(position);
          },
          sx: {
            cursor: 'pointer',
            '& svg': {
              width: '14px',
              height: '16px'
            }
          },
          children: _IconDelete || (_IconDelete = /*#__PURE__*/_jsx(IconDelete, {}))
        })]
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            flex: 1,
            '& .MuiFormControl-root': {
              width: {
                xs: '94px',
                md: '123px'
              },
              height: {
                xs: '41px',
                md: '47px'
              },
              '& .MuiSelect-select': {
                padding: '10.5px 20px 14.5px !important'
              }
            }
          },
          children: /*#__PURE__*/_jsx(DropdownQuantity, {
            maxQuantity: 5,
            currentQuantity: quantity != null ? quantity : 1,
            onSetQuantity: function onSetQuantity(qty) {
              return _onSetQuantity(index, qty);
            }
          })
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            alignItems: {
              md: 'center'
            },
            gap: {
              xs: '2px',
              md: '12px'
            },
            flexDirection: {
              xs: 'column',
              md: 'row'
            }
          },
          children: [promoPrice && /*#__PURE__*/_jsx(Typography, {
            variant: "h6",
            color: colors.primary.dark,
            children: "S$".concat(promoPrice.toFixed(2))
          }), originalPrice && /*#__PURE__*/_jsx(Typography, {
            variant: "l2",
            color: colors.neutral.neutral2,
            sx: {
              textDecoration: 'line-through'
            },
            children: "S$".concat(originalPrice.toFixed(2))
          }), freegift && /*#__PURE__*/_jsx(Typography, {
            variant: "h6",
            color: colors.primary.bandaiNamcoBlack,
            sx: {},
            children: freegift
          })]
        })]
      })]
    })]
  });
};

export default QuantityCard;