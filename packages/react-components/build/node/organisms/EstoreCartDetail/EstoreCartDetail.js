"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _QuantityCard = _interopRequireDefault(require("../../molecules/QuantityCard"));

var _SummaryCard = _interopRequireDefault(require("./SummaryCard"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _jsxRuntime = require("react/jsx-runtime");

var _IconFreeGifts;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Use to calculate total order amount
 * @param data
 * @returns
 */
const calculateTotal = data => {
  return data == null ? void 0 : data.reduce((prev, item) => {
    var _item$originalPrice, _item$quantity;

    return prev + ((_item$originalPrice = item == null ? void 0 : item.originalPrice) != null ? _item$originalPrice : 0) * ((_item$quantity = item == null ? void 0 : item.quantity) != null ? _item$quantity : 1);
  }, 0);
};
/**
 * Use to calculate the total discount amount of the order
 * @param data
 * @returns
 */


const calculateDiscount = data => {
  return data == null ? void 0 : data.reduce((prev, item) => {
    var _item$originalPrice2, _item$quantity2, _item$promoPrice, _item$quantity3;

    return prev + (((_item$originalPrice2 = item == null ? void 0 : item.originalPrice) != null ? _item$originalPrice2 : 0) * ((_item$quantity2 = item == null ? void 0 : item.quantity) != null ? _item$quantity2 : 1) - ((_item$promoPrice = item == null ? void 0 : item.promoPrice) != null ? _item$promoPrice : 0) * ((_item$quantity3 = item == null ? void 0 : item.quantity) != null ? _item$quantity3 : 1));
  }, 0);
};

const EstoreCartDetail = props => {
  var _freeGifts$listCards, _emptyCard$button;

  const {
    title,
    counterItemText,
    quantityCard,
    summaryCard,
    emptyCard,
    undoNotice,
    freeGifts
  } = props;
  const [cards, setCards] = (0, _react.useState)(quantityCard);
  const prevCards = (0, _react.useRef)(cards);
  const [total, setTotal] = (0, _react.useState)(calculateTotal(quantityCard));
  const [openUndo, setOpenUndo] = (0, _react.useState)(false);
  const [undoActive, setUndoActive] = (0, _react.useState)(false); // const [currentItemDeleted, setCurrentItemDeleted] = useState<number>()

  const [discount, setDiscount] = (0, _react.useState)(calculateDiscount(quantityCard));
  const isMobile = (0, _material.useMediaQuery)(themes => themes.breakpoints.down('md')); // Update cards

  (0, _react.useMemo)(() => {
    setCards(quantityCard);
  }, [quantityCard]);

  const filterCards = position => {
    const filter = cards == null ? void 0 : cards.filter((_item, index) => index !== position);
    setCards(filter);
    setTotal(calculateTotal(filter));
    setDiscount(calculateDiscount(filter));
  };

  let loadTimeOut;

  const handleDeleted = position => {
    prevCards.current = cards;
    setOpenUndo(true);
    filterCards(position);
    loadTimeOut = setTimeout(() => setOpenUndo(false), 5000);
  };

  (0, _react.useEffect)(() => {
    if (undoActive) {
      clearTimeout(loadTimeOut);
      setCards(prevCards.current);
      setOpenUndo(false);
    } // eslint-disable-next-line

  }, [undoActive]);
  (0, _react.useEffect)(() => {
    // clearTimeout(loadTimeOut)
    if (openUndo) {
      // clearTimeout(loadTimeOut)
      setUndoActive(false);
    }
  }, [openUndo]); // After setting dropdown quantity => update total & discount

  const onSetQuantity = (index, quantity) => {
    const found = cards.find((_item, idx) => idx === index);

    if (found) {
      cards[index].quantity = quantity;
      setTotal(calculateTotal(cards));
      setDiscount(calculateDiscount(cards));
    }
  };

  const renderUndo = () => {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          gap: '12px'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack,
            marginBottom: {
              xs: '8px',
              lg: '52px'
            }
          },
          children: undoNotice == null ? void 0 : undoNotice.describe
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: "/",
          component: "button",
          variant: "body2",
          onClick: () => setUndoActive(true),
          sx: {
            '&,&:hover': {
              textDecorationColor: _colors.default.neutral.neutral1,
              textUnderlineOffset: '5px'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            sx: {
              color: _colors.default.neutral.neutral1,
              marginBottom: {
                xs: '8px',
                lg: '52px'
              }
            },
            children: undoNotice == null ? void 0 : undoNotice.undoLink
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
        onClick: () => setOpenUndo(false),
        sx: {
          cursor: 'pointer',
          width: '16px',
          height: '16px'
        }
      })]
    });
  };

  const renderFreegifts = () => {
    var _freeGifts$linkTo, _freeGifts$linkTo2;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          gap: '12px'
        },
        children: [_IconFreeGifts || (_IconFreeGifts = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconFreeGifts, {})), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack,
            marginBottom: {
              xs: '8px',
              lg: '52px'
            }
          },
          children: freeGifts == null ? void 0 : freeGifts.describe
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: freeGifts == null ? void 0 : (_freeGifts$linkTo = freeGifts.linkTo) == null ? void 0 : _freeGifts$linkTo.href,
        onClick: () => setUndoActive(true),
        sx: {
          '&,&:hover': {
            textDecorationColor: _colors.default.neutral.neutral1,
            textUnderlineOffset: '5px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          sx: {
            color: _colors.default.neutral.neutral1,
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

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h1",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack,
          marginBottom: {
            xs: '8px',
            lg: '52px'
          }
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: {
            xs: 'flex',
            lg: 'none'
          },
          gap: '21px',
          marginBottom: '52px'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p4",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack,
            paddingRight: '21px',
            borderRight: '1px solid black'
          },
          children: `${quantityCard == null ? void 0 : quantityCard.length} ${counterItemText}`
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h6",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack
          },
          children: `S$${total.toFixed(2)}`
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        marginBottom: '44px',
        marginTop: '40px',
        '& .undo-replacer': {
          borderRadius: '0px'
        }
      },
      children: [isMobile && renderUndo(), isMobile && renderFreegifts()]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: cards != null && cards.length ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              gap: '70px',
              width: '100%'
            },
            children: [!isMobile && renderUndo(), !isMobile && renderFreegifts(), cards == null ? void 0 : cards.map((item, index) => {
              return /*#__PURE__*/(0, _react.createElement)(_QuantityCard.default, (0, _extends2.default)({}, item, {
                key: item == null ? void 0 : item.title,
                index: index,
                onClickDelete: handleDeleted,
                onSetQuantity: onSetQuantity
              }));
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                gap: '70px',
                width: '100%'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "h6",
                sx: {
                  color: _colors.default.primary.bandaiNamcoBlack
                },
                children: freeGifts == null ? void 0 : freeGifts.title
              }), freeGifts == null ? void 0 : (_freeGifts$listCards = freeGifts.listCards) == null ? void 0 : _freeGifts$listCards.map((item, index) => {
                return /*#__PURE__*/(0, _react.createElement)(_QuantityCard.default, (0, _extends2.default)({}, item, {
                  key: item == null ? void 0 : item.title,
                  index: index,
                  variant: "freegifts"
                }));
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                position: 'sticky',
                top: 0,
                bottom: 0
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SummaryCard.default, (0, _extends2.default)({
                total: total,
                discount: discount,
                quantity: cards == null ? void 0 : cards.length
              }, summaryCard))
            })
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            textAlign: 'center',
            marginTop: {
              xs: '64px',
              md: '112px'
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack,
              marginBottom: {
                xs: '4px',
                md: '8px'
              }
            },
            children: emptyCard == null ? void 0 : emptyCard.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack,
              marginBottom: {
                xs: '20px',
                md: '48px'
              }
            },
            children: emptyCard == null ? void 0 : emptyCard.description
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
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

var _default = EstoreCartDetail;
exports.default = _default;