import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconFreeGifts;

// import Modules
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Box, Link, useMediaQuery } from '@mui/material';
import Typography from "../../atoms/Typography";
import Container from "../../atoms/Container";
import QuantityCard from "../../molecules/QuantityCard";
import SummaryCard from "./SummaryCard"; // import Styles

import colors from "../../theme/colors"; // import Types

import Button from "../../atoms/Button";
import { IconClose, IconFreeGifts } from "../../atoms/Icon";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";

/**
 * Use to calculate total order amount
 * @param data
 * @returns
 */
var calculateTotal = function calculateTotal(data) {
  return data == null ? void 0 : data.reduce(function (prev, item) {
    var _item$originalPrice, _item$quantity;

    return prev + ((_item$originalPrice = item == null ? void 0 : item.originalPrice) != null ? _item$originalPrice : 0) * ((_item$quantity = item == null ? void 0 : item.quantity) != null ? _item$quantity : 1);
  }, 0);
};
/**
 * Use to calculate the total discount amount of the order
 * @param data
 * @returns
 */


var calculateDiscount = function calculateDiscount(data) {
  return data == null ? void 0 : data.reduce(function (prev, item) {
    var _item$originalPrice2, _item$quantity2, _item$promoPrice, _item$quantity3;

    return prev + (((_item$originalPrice2 = item == null ? void 0 : item.originalPrice) != null ? _item$originalPrice2 : 0) * ((_item$quantity2 = item == null ? void 0 : item.quantity) != null ? _item$quantity2 : 1) - ((_item$promoPrice = item == null ? void 0 : item.promoPrice) != null ? _item$promoPrice : 0) * ((_item$quantity3 = item == null ? void 0 : item.quantity) != null ? _item$quantity3 : 1));
  }, 0);
};

var EstoreCartDetail = function EstoreCartDetail(props) {
  var _freeGifts$listCards, _emptyCard$button;

  var title = props.title,
      counterItemText = props.counterItemText,
      quantityCard = props.quantityCard,
      summaryCard = props.summaryCard,
      emptyCard = props.emptyCard,
      undoNotice = props.undoNotice,
      freeGifts = props.freeGifts;

  var _useState = useState(quantityCard),
      _useState2 = _slicedToArray(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  var prevCards = useRef(cards);

  var _useState3 = useState(calculateTotal(quantityCard)),
      _useState4 = _slicedToArray(_useState3, 2),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openUndo = _useState6[0],
      setOpenUndo = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      undoActive = _useState8[0],
      setUndoActive = _useState8[1]; // const [currentItemDeleted, setCurrentItemDeleted] = useState<number>()


  var _useState9 = useState(calculateDiscount(quantityCard)),
      _useState10 = _slicedToArray(_useState9, 2),
      discount = _useState10[0],
      setDiscount = _useState10[1];

  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('md');
  }); // Update cards

  useMemo(function () {
    setCards(quantityCard);
  }, [quantityCard]);

  var filterCards = function filterCards(position) {
    var filter = cards == null ? void 0 : cards.filter(function (_item, index) {
      return index !== position;
    });
    setCards(filter);
    setTotal(calculateTotal(filter));
    setDiscount(calculateDiscount(filter));
  };

  var loadTimeOut;

  var handleDeleted = function handleDeleted(position) {
    prevCards.current = cards;
    setOpenUndo(true);
    filterCards(position);
    loadTimeOut = setTimeout(function () {
      return setOpenUndo(false);
    }, 5000);
  };

  useEffect(function () {
    if (undoActive) {
      clearTimeout(loadTimeOut);
      setCards(prevCards.current);
      setOpenUndo(false);
    } // eslint-disable-next-line

  }, [undoActive]);
  useEffect(function () {
    // clearTimeout(loadTimeOut)
    if (openUndo) {
      // clearTimeout(loadTimeOut)
      setUndoActive(false);
    }
  }, [openUndo]); // After setting dropdown quantity => update total & discount

  var onSetQuantity = function onSetQuantity(index, quantity) {
    var found = cards.find(function (_item, idx) {
      return idx === index;
    });

    if (found) {
      cards[index].quantity = quantity;
      setTotal(calculateTotal(cards));
      setDiscount(calculateDiscount(cards));
    }
  };

  var renderUndo = function renderUndo() {
    return /*#__PURE__*/_jsxs(Box, {
      className: "undo-replacer",
      sx: {
        background: '#E600001A',
        width: '100%',
        borderRadius: '10px',
        padding: '14px 32px',
        display: openUndo ? 'flex' : 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: {
          xs: '48px',
          md: '50px'
        },
        '& p': {
          margin: '0px'
        }
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          gap: '12px'
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            marginBottom: {
              xs: '8px',
              lg: '52px'
            }
          },
          children: undoNotice == null ? void 0 : undoNotice.describe
        }), /*#__PURE__*/_jsx(Link, {
          href: "/",
          component: "button",
          variant: "body2",
          onClick: function onClick() {
            return setUndoActive(true);
          },
          sx: {
            '&,&:hover': {
              textDecorationColor: colors.neutral.neutral1,
              textUnderlineOffset: '5px'
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            sx: {
              color: colors.neutral.neutral1,
              marginBottom: {
                xs: '8px',
                lg: '52px'
              }
            },
            children: undoNotice == null ? void 0 : undoNotice.undoLink
          })
        })]
      }), /*#__PURE__*/_jsx(IconClose, {
        onClick: function onClick() {
          return setOpenUndo(false);
        },
        sx: {
          cursor: 'pointer',
          width: '16px',
          height: '16px'
        }
      })]
    });
  };

  var renderFreegifts = function renderFreegifts() {
    var _freeGifts$linkTo, _freeGifts$linkTo2;

    return /*#__PURE__*/_jsxs(Box, {
      className: "free-gifts",
      sx: {
        background: '#00B0B81A',
        width: '100%',
        borderRadius: '10px',
        padding: '14px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: {
          xs: '48px',
          md: '50px'
        },
        '& p': {
          margin: '0px'
        }
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          gap: '12px'
        },
        children: [_IconFreeGifts || (_IconFreeGifts = /*#__PURE__*/_jsx(IconFreeGifts, {})), /*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            marginBottom: {
              xs: '8px',
              lg: '52px'
            }
          },
          children: freeGifts == null ? void 0 : freeGifts.describe
        })]
      }), /*#__PURE__*/_jsx(Link, {
        href: freeGifts == null ? void 0 : (_freeGifts$linkTo = freeGifts.linkTo) == null ? void 0 : _freeGifts$linkTo.href,
        onClick: function onClick() {
          return setUndoActive(true);
        },
        sx: {
          '&,&:hover': {
            textDecorationColor: colors.neutral.neutral1,
            textUnderlineOffset: '5px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          sx: {
            color: colors.neutral.neutral1,
            marginBottom: {
              xs: '8px',
              lg: '52px'
            }
          },
          children: freeGifts == null ? void 0 : (_freeGifts$linkTo2 = freeGifts.linkTo) == null ? void 0 : _freeGifts$linkTo2.label
        })
      })]
    });
  };

  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsxs(Container, {
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h1",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
          marginBottom: {
            xs: '8px',
            lg: '52px'
          }
        },
        children: title
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: {
            xs: 'flex',
            lg: 'none'
          },
          gap: '21px',
          marginBottom: '52px'
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "p4",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            paddingRight: '21px',
            borderRight: '1px solid black'
          },
          children: "".concat(quantityCard == null ? void 0 : quantityCard.length, " ").concat(counterItemText)
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "h6",
          sx: {
            color: colors.primary.bandaiNamcoBlack
          },
          children: "S$".concat(total.toFixed(2))
        })]
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        marginBottom: '44px',
        marginTop: '40px',
        '& .undo-replacer': {
          borderRadius: '0px'
        }
      },
      children: [isMobile && renderUndo(), isMobile && renderFreegifts()]
    }), /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
        children: cards != null && cards.length ? /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            gap: {
              xs: '56px' // lg: '70px'

            },
            flexDirection: {
              xs: 'column',
              lg: 'row'
            }
          },
          children: [/*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              gap: '70px',
              width: '100%'
            },
            children: [!isMobile && renderUndo(), !isMobile && renderFreegifts(), cards == null ? void 0 : cards.map(function (item, index) {
              return /*#__PURE__*/_createElement(QuantityCard, _extends({}, item, {
                key: item == null ? void 0 : item.title,
                index: index,
                onClickDelete: handleDeleted,
                onSetQuantity: onSetQuantity
              }));
            }), /*#__PURE__*/_jsxs(Box, {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                gap: '70px',
                width: '100%'
              },
              children: [/*#__PURE__*/_jsx(Typography, {
                variant: "h6",
                sx: {
                  color: colors.primary.bandaiNamcoBlack
                },
                children: freeGifts == null ? void 0 : freeGifts.title
              }), freeGifts == null ? void 0 : (_freeGifts$listCards = freeGifts.listCards) == null ? void 0 : _freeGifts$listCards.map(function (item, index) {
                return /*#__PURE__*/_createElement(QuantityCard, _extends({}, item, {
                  key: item == null ? void 0 : item.title,
                  index: index,
                  variant: "freegifts"
                }));
              })]
            })]
          }), /*#__PURE__*/_jsx(Box, {
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                position: 'sticky',
                top: 0,
                bottom: 0
              },
              children: /*#__PURE__*/_jsx(SummaryCard, _extends({
                total: total,
                discount: discount,
                quantity: cards == null ? void 0 : cards.length
              }, summaryCard))
            })
          })]
        }) : /*#__PURE__*/_jsxs(Box, {
          sx: {
            textAlign: 'center',
            marginTop: {
              xs: '64px',
              md: '112px'
            }
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            sx: {
              color: colors.primary.bandaiNamcoBlack,
              marginBottom: {
                xs: '4px',
                md: '8px'
              }
            },
            children: emptyCard == null ? void 0 : emptyCard.title
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            sx: {
              color: colors.primary.bandaiNamcoBlack,
              marginBottom: {
                xs: '20px',
                md: '48px'
              }
            },
            children: emptyCard == null ? void 0 : emptyCard.description
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              width: '148px',
              margin: '0 auto',
              display: {
                md: 'block'
              },
              marginTop: {
                md: '52px'
              }
            },
            children: /*#__PURE__*/_jsx(Button, {
              fullWidth: true,
              variant: "primaryDark",
              label: emptyCard == null ? void 0 : (_emptyCard$button = emptyCard.button) == null ? void 0 : _emptyCard$button.label,
              target: "_parent",
              externalLink: "/"
            })
          })]
        })
      })
    })]
  });
};

export default EstoreCartDetail;