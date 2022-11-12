"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Icon = require("../../atoms/Icon");

var _DropdownQuantity = _interopRequireDefault(require("../DropdownQuantity"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconDelete;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const QuantityCard = props => {
  const {
    mainImageNext,
    mainImage = '',
    title,
    edition,
    originalPrice,
    promoPrice,
    index,
    quantity,
    onClickDelete = () => {},
    onSetQuantity = () => {},
    freegift,
    variant = 'quantity'
  } = props;
  const [position, setPosition] = (0, _react.useState)(index);
  (0, _react.useEffect)(() => {
    setPosition(index);
  }, [index]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: 'flex',
      alignItems: {
        xs: 'flex-start',
        md: 'center'
      },
      width: '100%'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
      children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: mainImage,
        alt: mainImage != null ? mainImage : ''
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default // href={linkHref}
        , {
          sx: {
            flex: 1
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h6",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack,
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              wordBreak: "break-word"
            },
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p7",
              sx: {
                color: _colors.default.neutral.neutral2,
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
        }), variant === 'quantity' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          onClick: () => onClickDelete(position),
          sx: {
            cursor: 'pointer',
            '& svg': {
              width: '14px',
              height: '16px'
            }
          },
          children: _IconDelete || (_IconDelete = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconDelete, {}))
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownQuantity.default, {
            maxQuantity: 5,
            currentQuantity: quantity != null ? quantity : 1,
            onSetQuantity: qty => onSetQuantity(index, qty)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
          children: [promoPrice && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h6",
            color: _colors.default.primary.dark,
            children: `S$${promoPrice.toFixed(2)}`
          }), originalPrice && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "l2",
            color: _colors.default.neutral.neutral2,
            sx: {
              textDecoration: 'line-through'
            },
            children: `S$${originalPrice.toFixed(2)}`
          }), freegift && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h6",
            color: _colors.default.primary.bandaiNamcoBlack,
            sx: {},
            children: freegift
          })]
        })]
      })]
    })]
  });
};

var _default = QuantityCard;
exports.default = _default;