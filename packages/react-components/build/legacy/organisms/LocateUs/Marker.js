import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconMarker, _svg;

// import Modules
import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useRef, useState } from 'react'; // import Styles

import classNames from 'classnames/bind';
import { IconMarker } from "../../atoms/Icon"; // import Types

import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
// import Types
import { MobileDown } from "../../utils/viewport";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var cx = classNames;

var Marker = function Marker(props) {
  var sx = props.sx,
      mainImageNextProps = props.mainImageNextProps,
      image = props.image,
      title = props.title,
      address = props.address,
      infoLink = props.infoLink,
      position = props.position,
      continentActive = props.continentActive,
      continent = props.continent;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      clickedOn = _useState2[0],
      setClickedOn = _useState2[1];

  var theme = useTheme();
  var isMobileDown = useMediaQuery(MobileDown(theme));
  var wrapperRef = useRef(null);
  var useStyles = makeStyles(function () {
    return {
      animatedItem: {
        transformOrigin: "bottom",
        animationName: "$bounce",
        animationFillMode: "both",
        animationDuration: '1s'
      },
      "@keyframes bounce": {
        "0%": {
          opacity: 0,
          transform: "translateY(-300px)"
        },
        "60%": {
          opacity: 1,
          transform: "scaleY(0.6) translateY(30px)"
        },
        "100%": {
          transform: "scaleY(1) translateY(0)"
        }
      }
    };
  });
  var classes = useStyles();

  var handleClickShowInfo = function handleClickShowInfo() {
    setClickedOn(!clickedOn);
  };

  var useOutsideAlerter = function useOutsideAlerter(ref) {
    useEffect(function () {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setClickedOn(false);
        }
      } // Bind the event listener


      document.addEventListener("mousedown", handleClickOutside);
      return function () {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);
  return /*#__PURE__*/_jsx(Box, {
    children: /*#__PURE__*/_jsxs(Box, {
      sx: _extends({}, sx, {
        '&:hover': {
          '& div + div': {
            visibility: 'visible',
            opacity: '1'
          }
        }
      }),
      children: [/*#__PURE__*/_jsx(Box, {
        className: "".concat(cx(classes.animatedItem), " ").concat(clickedOn ? 'active' : '', " ").concat(continentActive === 0 && continent === 'asia' ? 'activeMarker' : '', " ").concat(continentActive === 1 && continent === 'other' ? 'activeMarker' : ''),
        onClick: function onClick() {
          return handleClickShowInfo();
        },
        ref: wrapperRef,
        sx: {
          '&.active': {
            '& svg': {
              '& path': {
                fill: colors.primary.bandaiNamcoRed
              }
            }
          },
          '&.activeMarker': {
            '& svg': {
              '& path': {
                fill: colors.primary.bandaiNamcoRed
              }
            }
          },
          pointerEvents: {
            xs: 'none',
            md: 'auto'
          },
          userSelect: {
            xs: 'none',
            md: 'auto'
          },
          '& svg': {
            transform: 'scale(1.5)'
          }
        },
        children: _IconMarker || (_IconMarker = /*#__PURE__*/_jsx(IconMarker, {}))
      }), !isMobileDown && /*#__PURE__*/_jsxs(Box, {
        className: clickedOn ? 'active' : '',
        sx: {
          position: 'absolute',
          zIndex: '1',
          width: '269px',
          bottom: 'calc(100% + 30px)',
          right: position === 'left' ? 'unset' : 'calc(100% - 51px)',
          left: position === 'left' ? 'calc(100% - 58px)' : 'unset',
          visibility: 'hidden',
          opacity: '0',
          transition: 'opacity 0.3s ease 0s, top 0.3s ease 0s, z-index 0s ease 0s',
          '&.active': {
            visibility: 'visible',
            opacity: '1'
          },
          '&:before': {
            content: "''",
            height: '30px',
            width: '100%',
            display: 'block',
            top: '100%',
            position: 'absolute'
          },
          '&:after': {
            content: "''",
            width: 0,
            position: 'absolute',
            right: position === 'right' ? '24px' : 'unset',
            left: position === 'left' ? '24px' : 'unset',
            top: 'calc(100% - 5px)',
            height: 0,
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderTop: '20px solid #fff'
          }
        },
        children: [/*#__PURE__*/_jsx(Box, {
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              maxWidth: {
                xs: '100%',
                md: '269px'
              },
              paddingBottom: {
                xs: '64%',
                md: '57.6%'
              },
              boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.07)',
              borderRadius: '20px 20px 0 0 ',
              overflow: "hidden",
              position: 'relative',
              transform: 'rotate(0)',
              '& img': {
                position: "absolute",
                objectFit: 'cover',
                borderRadius: '20px 20px 0 0',
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
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                "& span": {
                  width: '100% !important',
                  height: '100% !important'
                }
              },
              children: (mainImageNextProps == null ? void 0 : mainImageNextProps(image, title)) || /*#__PURE__*/_jsx("img", {
                src: image,
                alt: title || ""
              })
            })
          })
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            width: '269px',
            backgroundColor: colors.primary.bandaiNamcoWhite,
            borderRadius: '0px 0px 16px 16px',
            padding: '22px 16px 26px 16px',
            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.07)'
          },
          children: [title && /*#__PURE__*/_jsx(Typography, {
            variant: "p3",
            sx: {
              color: colors.primary.bandaiNamcoBlack
            },
            children: title
          }), address && /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            sx: {
              color: colors.otherColor.gray,
              marginBottom: '16px'
            },
            children: address
          }), !!infoLink.length && infoLink.map(function (item, idx) {
            var _item$href;

            return /*#__PURE__*/_jsx(Box, {
              sx: {
                marginTop: '5px',
                '&:first-of-type': {
                  marginTop: '0px'
                }
              },
              children: /*#__PURE__*/_jsx(Link, {
                href: (_item$href = item == null ? void 0 : item.href) != null ? _item$href : '/',
                target: "_blank",
                sx: {
                  textDecoration: 'none',
                  display: 'inline-block',
                  '&:hover': {
                    '&  svg': {
                      transition: 'all .4s',
                      transform: 'translateX(3px)',
                      '& path': {
                        fill: colors.primary.bandaiNamcoRed
                      }
                    }
                  }
                },
                children: /*#__PURE__*/_jsxs(Typography, {
                  variant: "p6",
                  sx: {
                    color: colors.primary.bandaiNamcoBlack,
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '19px',
                    alignItems: 'center',
                    display: 'flex',
                    "&:hover": {
                      color: colors.primary.bandaiNamcoRed
                    }
                  },
                  children: [item.title, /*#__PURE__*/_jsx(Box, {
                    sx: {
                      display: 'inline-block',
                      marginLeft: '4px',
                      marginTop: '2px',
                      transform: 'translateY(1px)'
                    },
                    children: _svg || (_svg = /*#__PURE__*/_jsx("svg", {
                      width: "16",
                      height: "17",
                      viewBox: "0 0 16 17",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/_jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.625 9.31127L6.69286 4.56918C6.42009 4.25746 5.94627 4.22587 5.63454 4.49863C5.32282 4.77139 5.29123 5.24521 5.56399 5.55694L8.63185 9.31127L5.57263 13.0646C5.29987 13.3764 5.33146 13.8502 5.64319 14.123C5.95491 14.3957 6.42873 14.3641 6.7015 14.0524L10.625 9.31127Z",
                        fill: "#1E1E1E"
                      })
                    }))
                  })]
                })
              }, idx)
            });
          })]
        })]
      })]
    })
  });
};

export default Marker;