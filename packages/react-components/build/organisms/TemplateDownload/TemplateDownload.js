import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable no-return-assign */
// Modules
import { Box, Link, useTheme, useMediaQuery } from '@mui/material';
import React, { useRef } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import Button from "../../atoms/Button";
import Slider from 'react-slick';
import { TabletDown } from "../../utils/viewport";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import Container from "../../atoms/Container"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ArrowSlide = ({
  children,
  sx,
  disabled = false,
  funcClick,
  index
}) => {
  return /*#__PURE__*/_jsx(Box, {
    onClick: () => funcClick(index),
    sx: _extends({
      width: '62px',
      height: '62px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: disabled ? colors.otherColor.alabaster : colors.neutral.neutral7,
      borderRadius: '100%',
      pointerEvents: disabled ? 'none' : 'auto',
      cursor: !disabled ? 'pointer' : 'none'
    }, sx, {
      '&:hover': {
        '& path': {
          stroke: colors.primary.bandaiNamcoRed
        }
      },
      '& svg': {
        height: '10px',
        pointerEvents: 'none',
        '& path': {
          stroke: disabled ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoBlack
        }
      }
    }),
    children: children
  });
};

const TemplateDownload = props => {
  const {
    isHorizontalImage,
    titleButton = '',
    title = '',
    listThumbnail,
    hideButton = false
  } = props;
  const thisSlider = useRef([]);
  const thisDownLoadButton = useRef([]);

  const next = idx => {
    var _thisSlider$current$i;

    (_thisSlider$current$i = thisSlider.current[idx]) == null ? void 0 : _thisSlider$current$i.slickNext();
  };

  const previous = idx => {
    var _thisSlider$current$i2;

    (_thisSlider$current$i2 = thisSlider.current[idx]) == null ? void 0 : _thisSlider$current$i2.slickPrev();
  };

  const theme = useTheme();
  const isTabletDown = useMediaQuery(TabletDown(theme));
  const isDesktopCustom = useMediaQuery('(max-width:1470px)', {
    noSsr: true
  });
  const isDesktopCustomSmall = useMediaQuery('(max-width:1281px)', {
    noSsr: true
  });

  const handleAfterChange = (indexItem, indexSlider) => {
    var _listThumbnail$indexS;

    const valLink = (_listThumbnail$indexS = listThumbnail[indexSlider][indexItem].linkHref) != null ? _listThumbnail$indexS : '/';
    thisDownLoadButton.current[indexSlider].setAttribute("href", valLink);
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: isHorizontalImage ? 1 : 3,
    speed: 400,
    centerPadding: isHorizontalImage ? "500px" : "300px",
    centerMode: true,
    cssEase: 'linear',
    swipeToSlide: true,
    responsive: [{
      breakpoint: 1441,
      settings: {
        slidesToScroll: 1,
        slidesToShow: isHorizontalImage ? 1 : 3,
        centerMode: true,
        centerPadding: isHorizontalImage ? "300px" : "100px"
      }
    }, {
      breakpoint: 1281,
      settings: {
        slidesToScroll: 1,
        slidesToShow: isHorizontalImage ? 1 : 3,
        centerMode: true,
        centerPadding: isHorizontalImage ? "150px" : "60px"
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: isHorizontalImage ? "20px" : "60px"
      }
    }]
  };
  return /*#__PURE__*/_jsxs(Box, {
    children: [title && /*#__PURE__*/_jsx(Container, {
      sx: {
        display: "flex",
        justifyContent: "center"
      },
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "h6",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          marginBottom: {
            xs: '31px',
            md: '54px'
          },
          maxWidth: '740px',
          width: "100%"
        },
        children: title
      })
    }), !!(listThumbnail != null && listThumbnail.length) && /*#__PURE__*/_jsx(Box, {
      children: listThumbnail.map((rows, idx) => {
        var _listThumbnail$idx$0$;

        return /*#__PURE__*/_jsxs(Box, {
          sx: {
            marginTop: hideButton ? '22px' : '60px',
            '&:first-child': {
              marginTop: '0px'
            }
          },
          children: [rows.length <= 3 && /*#__PURE__*/_jsx(Container, {
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: rows.length <= 3 ? 'flex' : 'block',
                justifyContent: 'center',
                gap: {
                  xs: '0px',
                  md: '22px'
                },
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '920px',
                flexWrap: {
                  xs: 'wrap',
                  md: 'nowrap'
                }
              },
              children: rows.map(item => /*#__PURE__*/_jsxs(Box, {
                sx: {
                  width: {
                    xs: '100%',
                    // eslint-disable-next-line no-nested-ternary
                    md: rows.length === 1 ? '100%' : rows.length === 2 ? 'calc(50% - 11px)' : 'calc(33.3333% - 14px)'
                  },
                  marginTop: {
                    xs: hideButton ? '22px' : '60px',
                    md: '0px'
                  },
                  '&:first-of-type': {
                    marginTop: {
                      xs: '0px'
                    }
                  }
                },
                children: [/*#__PURE__*/_jsx(Box, {
                  sx: {
                    flex: "1",
                    maxWidth: {
                      // eslint-disable-next-line no-nested-ternary
                      md: rows.length === 1 ? '920px' : rows.length === 2 ? '457px' : '294px',
                      xs: '100%'
                    },
                    display: "flex"
                  },
                  children: /*#__PURE__*/_jsx(Box, {
                    sx: {
                      width: '100%',
                      paddingBottom: {
                        xs: isHorizontalImage ? '66.8%' : '175.2%',
                        // eslint-disable-next-line no-nested-ternary
                        md: isHorizontalImage ? rows.length === 1 ? '56.1%' : rows.length === 2 ? '73%' : '72.7%' : rows.length === 1 ? '56.1%' : rows.length === 2 ? '177.7%' : '177.5%'
                      },
                      borderRadius: '10px',
                      overflow: "hidden",
                      maxHeight: '307px',
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
                    children: item.mainImageNext || /*#__PURE__*/_jsx("img", {
                      src: item.mainImage,
                      alt: title != null ? title : ''
                    })
                  })
                }), !hideButton && /*#__PURE__*/_jsx(Box, {
                  sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: '932px',
                    marginTop: {
                      xs: '28px',
                      md: '40px'
                    }
                  },
                  children: /*#__PURE__*/_jsx(Link, {
                    href: item.linkHref,
                    download: true,
                    sx: {
                      textDecoration: 'none',
                      cursor: 'pointer'
                    },
                    target: "_blank",
                    children: /*#__PURE__*/_jsx(Button, _extends({}, item.buttonProps, {
                      label: titleButton,
                      sx: {
                        width: '148px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        backgroundColor: colors.primary.bandaiNamcoBlack,
                        color: colors.primary.bandaiNamcoWhite,
                        '&:hover': {
                          backgroundColor: colors.primary.bandaiNamcoRed
                        }
                      }
                    }))
                  })
                })]
              }, item.title))
            })
          }), rows.length >= 5 && /*#__PURE__*/_jsx(Box, {
            sx: {
              position: 'relative',
              '& .slick-current': {
                '& .MuiBox-root': {
                  '&:after': {
                    content: "''",
                    opacity: '0'
                  }
                }
              }
            },
            children: /*#__PURE__*/_jsxs(Box, {
              children: [/*#__PURE__*/_jsxs(Box, {
                sx: {
                  "&:hover": {
                    "& .wrapper-arrow-content": {
                      opacity: "1"
                    }
                  },
                  '& .slick-slider': {
                    lineHeight: '0'
                  }
                },
                children: [/*#__PURE__*/_jsx(Slider, _extends({}, settings, {
                  afterChange: indexSlider => !hideButton && handleAfterChange(indexSlider, idx),
                  ref: el => thisSlider.current[idx] = el,
                  children: rows.map((item, index) => {
                    var _item$title;

                    return /*#__PURE__*/_jsx(Box, {
                      onClick: () => {
                        var _thisSlider$current$i3;

                        return (_thisSlider$current$i3 = thisSlider.current[idx]) == null ? void 0 : _thisSlider$current$i3.slickGoTo(index);
                      },
                      sx: {
                        maxWidth: {
                          md: isHorizontalImage ? '926px' : '449px',
                          xs: isHorizontalImage ? '100%' : '100%'
                        },
                        width: '100%',
                        display: 'flex',
                        flex: "1",
                        paddingRight: '11px',
                        paddingLeft: '11px',
                        cursor: 'pointer'
                      },
                      children: /*#__PURE__*/_jsx(Box, {
                        sx: {
                          width: '100%',
                          paddingBottom: {
                            xs: isHorizontalImage ? '66.8%' : '135%',
                            // eslint-disable-next-line no-nested-ternary
                            md: isHorizontalImage ? '56.1%' : isDesktopCustomSmall ? '177.7%' : '134.2%'
                          },
                          userSelect: 'none',
                          outline: 'none',
                          borderRadius: '10px',
                          overflow: "hidden",
                          position: 'relative',
                          transform: 'rotate(0)',
                          "& span": {
                            width: '100% !important',
                            height: '100% !important'
                          },
                          '&:after': {
                            content: "''",
                            backgroundColor: 'rgb(244 244 244 / 60%)',
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0,
                            height: '100%',
                            margin: 'auto',
                            borderRadius: '8px',
                            visibility: 'visible',
                            opacity: '1',
                            transition: 'opacity 0.3s, visibility 0.3s'
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
                          alt: (_item$title = item.title) != null ? _item$title : ''
                        }) : item.mainImageNext
                      })
                    }, index);
                  })
                })), !isTabletDown && /*#__PURE__*/_jsxs(Box, {
                  sx: {
                    height: "0",
                    width: "100%",
                    opacity: "0",
                    transition: "all 0.3s"
                  },
                  className: "wrapper-arrow-content",
                  children: [/*#__PURE__*/_jsx(ArrowSlide, {
                    funcClick: previous,
                    index: idx,
                    sx: {
                      position: 'absolute',
                      top: '-90px',
                      bottom: '0px',
                      display: 'flex',
                      alignItem: 'center',
                      margin: 'auto',
                      // eslint-disable-next-line no-nested-ternary
                      left: isHorizontalImage ? isDesktopCustom ? '217px' : '420px' : isDesktopCustom ? "120px" : '320px'
                    },
                    children: /*#__PURE__*/_jsx(IconPrevSlide, {
                      htmlColor: "transparent",
                      sx: {
                        height: '10px'
                      }
                    })
                  }), /*#__PURE__*/_jsx(ArrowSlide, {
                    funcClick: next,
                    index: idx,
                    sx: {
                      position: 'absolute',
                      top: '-90px',
                      bottom: '0px',
                      display: 'flex',
                      alignItem: 'center',
                      margin: 'auto',
                      // eslint-disable-next-line no-nested-ternary
                      right: isHorizontalImage ? isDesktopCustom ? '217px' : '420px' : isDesktopCustom ? "120px" : '320px'
                    },
                    children: /*#__PURE__*/_jsx(IconNextSlide, {
                      htmlColor: "transparent",
                      sx: {
                        height: '10px'
                      }
                    })
                  })]
                })]
              }), !hideButton && /*#__PURE__*/_jsx(Box, {
                sx: {
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: {
                    xs: '28px',
                    md: '40px'
                  }
                },
                children: /*#__PURE__*/_jsx(Link, {
                  href: (_listThumbnail$idx$0$ = listThumbnail[idx][0].linkHref) != null ? _listThumbnail$idx$0$ : '/',
                  ref: el => thisDownLoadButton.current[idx] = el,
                  download: true,
                  sx: {
                    textDecoration: 'none !important',
                    cursor: 'pointer'
                  },
                  target: "_blank",
                  children: /*#__PURE__*/_jsx(Button, {
                    label: titleButton,
                    sx: {
                      width: '148px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      backgroundColor: colors.primary.bandaiNamcoBlack,
                      color: colors.primary.bandaiNamcoWhite,
                      '&:hover': {
                        backgroundColor: colors.primary.bandaiNamcoRed
                      }
                    }
                  })
                })
              })]
            })
          })]
        }, `rows${idx}`);
      })
    })]
  });
};

export default TemplateDownload;