import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React, { useEffect, useRef, useState } from 'react';
import Link from '@mui/material/Link';
import ButtonPrice from "../../atoms/ButtonPrice";
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import Tags from "../../atoms/Tags";
import { formatCurrency } from "../../utils";
import CEOMessage from "./CEOMessage"; // define function

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";

const GameSuggestionsCard = props => {
  const {
    mainImageNext,
    mainImage = '',
    title = '',
    linkHref = '/',
    buttonProps,
    tags,
    priceProps = {
      label: 'From',
      currency: 'SGD',
      amount: 0
    },
    description,
    onlyButton = false,
    isBlogLayout = false,
    buttonPropsLearnMore,
    id,
    isMessageLayout = false,
    author
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const refContainer = useRef(); // const refIsShow = useRef<any>();
  // dispatchEvent event send id to sub navigation

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = refContainer.current; // const height = window.innerHeight;

      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            // refIsShow.current = true;
            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event(`${id}`));
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //   refIsShow.current = false;
          //   window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]); // handle open Modal

  const handleOpenModal = e => {
    setOpenModal(e);
  };

  return /*#__PURE__*/_jsxs(Box, {
    id: id,
    ref: refContainer,
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        flexWrap: {
          xs: 'wrap',
          lg: 'nowrap'
        },
        flexDirection: {
          xs: "column",
          lg: "row"
        },
        alignItems: "center",
        justifyContent: "center"
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          width: {
            xs: "100%",
            md: "auto"
          }
        },
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            transform: 'rotate(0)',
            overflow: 'hidden',
            maxHeight: '257px',
            maxWidth: {
              xs: '100%',
              md: '457px'
            },
            width: "100%",
            '& a': {
              width: '100%'
            },
            borderRadius: '20px',
            '& img': {
              userSelect: "none",
              "-webkit-user-select": "none",
              objectFit: 'cover',
              borderRadius: '20px',
              display: 'block',
              width: '100%',
              height: {
                xs: '177px',
                md: '257px'
              },
              transform: "scale(1)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)"
              }
            }
          },
          children: !isMessageLayout ? /*#__PURE__*/_jsx(Link, {
            href: linkHref,
            sx: {
              overflow: 'hidden',
              lineHeight: '0'
            },
            children: mainImageNext || /*#__PURE__*/_jsx("img", {
              src: mainImage,
              alt: title != null ? title : ''
            })
          }) : mainImageNext || /*#__PURE__*/_jsx("img", {
            src: mainImage,
            alt: title != null ? title : ''
          })
        }), isMessageLayout && /*#__PURE__*/_jsxs(Box, {
          sx: {
            marginTop: '16px'
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            sx: {
              color: colors.neutral.neutral2
            },
            children: author == null ? void 0 : author.name
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p8",
            sx: {
              color: colors.neutral.neutral2,
              marginTop: '4px'
            },
            children: author == null ? void 0 : author.position
          })]
        })]
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          flex: "1",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: "100%",
          paddingLeft: {
            xs: 'unset',
            lg: '54px'
          },
          maxWidth: {
            xs: '100%',
            md: '457px',
            lg: '493px'
          },
          marginTop: {
            xs: '20px',
            lg: 'unset'
          }
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "h5",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden'
          },
          children: title
        }), description && /*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          sx: {
            margin: {
              xs: '6px 0 28px 0',
              md: '12px 0 36px 0'
            },
            color: colors.neutral.neutral2,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden'
          },
          children: description
        }), !!(tags != null && tags.length) && !isMessageLayout && /*#__PURE__*/_jsx(Box, {
          sx: {
            display: 'flex',
            flexWrap: "wrap",
            margin: '26px 0 0  0',
            gap: '12px',
            '& .bgTag': {
              backgroundColor: 'transparent',
              border: `1px solid ${colors.neutral.neutral2}`
            },
            '& > div > div': {
              '&:hover': {
                backgroundColor: 'transparent',
                '& p': {
                  color: colors.neutral.neutral2
                }
              },
              '& p': {
                whiteSpace: "nowrap",
                color: colors.neutral.neutral2
              }
            }
          },
          children: tags == null ? void 0 : tags.map((tag, index) => typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/_createElement(Tags, _extends({}, tag, {
            key: index
          })) : tag.title)
        }), isBlogLayout && !isMessageLayout && /*#__PURE__*/_jsxs(Box, {
          sx: {
            marginTop: '16px'
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "l1",
            color: colors.neutral.neutral2,
            sx: {
              fontSize: {
                xs: '12px',
                md: '14px'
              },
              lineHeight: '19px',
              fontWeight: 400
            },
            children: priceProps == null ? void 0 : priceProps.label
          }), /*#__PURE__*/_jsxs(Typography, {
            variant: "p7",
            color: colors.primary.bandaiNamcoBlack,
            children: [priceProps == null ? void 0 : priceProps.currency, " ", !priceProps.noFormat ? formatCurrency((priceProps == null ? void 0 : priceProps.amount) || 0, 2) : priceProps == null ? void 0 : priceProps.amount]
          })]
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            minWidth: '117px',
            width: "100%",
            display: "flex",
            marginTop: isMessageLayout ? '0px' : '26px',
            justifyContent: "flex-start",
            '& a': {
              width: "120px"
            },
            "& .style-ButtonPrice": {
              display: "flex"
            },
            "& > div > div": {
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '0px',
              marginTop: '0px'
            }
          },
          className: "wrapper-btn-cart",
          children: !isMessageLayout ? /*#__PURE__*/_jsxs(Box, {
            children: [onlyButton ? /*#__PURE__*/_jsx(Button, _extends({}, buttonProps)) : /*#__PURE__*/_jsx(Box, {
              sx: {
                '& .style-ButtonPrice': {
                  display: 'flex',
                  alignItems: 'center',
                  '&  div': {
                    marginLeft: '12px',
                    marginTop: '0px',
                    flexDirection: 'column'
                  }
                }
              },
              children: /*#__PURE__*/_jsx(ButtonPrice, {
                buttonProps: buttonProps,
                priceProps: priceProps
              })
            }), isBlogLayout && /*#__PURE__*/_jsx(Button, _extends({}, buttonPropsLearnMore, {
              sx: {
                width: {
                  xs: '138px !important',
                  md: '149px !important'
                },
                marginLeft: '12px'
              }
            }))]
          }) : /*#__PURE__*/_jsx(Button, _extends({}, buttonProps, {
            onClick: () => handleOpenModal(true)
          }))
        })]
      })]
    }), isMessageLayout && /*#__PURE__*/_jsx(CEOMessage, _extends({
      isOpen: openModal,
      onClose: handleOpenModal
    }, author, {
      name: author == null ? void 0 : author.name,
      position: author == null ? void 0 : author.position
    }))]
  });
};

export default GameSuggestionsCard;