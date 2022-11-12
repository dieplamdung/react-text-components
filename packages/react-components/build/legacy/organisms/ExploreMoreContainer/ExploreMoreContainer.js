import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import Modules
import { Box, Link, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import Tabs from "../../atoms/Tabs";
import { isEmpty } from 'lodash';
import loadable from '@loadable/component'; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
var PopularNewsCard = loadable(function () {
  return import("../../molecules/PopularNewsCard");
});
var FeaturedNewsCard = loadable(function () {
  return import("../../molecules/FeaturedNewsCard");
});

var ExploreMoreContainer = function ExploreMoreContainer(props) {
  var _tab$popularNewsCard, _tab$viewMore, _tab$viewMore2, _tab$viewMore3, _tab$viewMore4, _tab$popularNewsCard2, _tab$popularNewsCard3, _tab$viewMore5, _tab$viewMore6, _tab$viewMore7, _tab$viewMore8;

  var _props$listTabs = props.listTabs,
      listTabs = _props$listTabs === void 0 ? [] : _props$listTabs,
      listThumbnail = props.listThumbnail,
      title = props.title,
      blank = props.blank,
      id = props.id;

  var _useState = useState((listThumbnail == null ? void 0 : listThumbnail.find(function (item) {
    return item.id === 1;
  })) || {}),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = useState(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTab = _useState4[0],
      setCurrentTab = _useState4[1];

  var refContainer = useRef();
  /**
   * Use to filter data by tabs
   * @param data
   */

  var handleTabs = function handleTabs(data) {
    setCurrentTab(data);
    var filter = (listThumbnail == null ? void 0 : listThumbnail.find(function (item) {
      return item.id === data;
    })) || {};
    setTab(filter);
  }; // dispatchEvent event send id to sub navigation


  useEffect(function () {
    if (typeof window !== "undefined") {
      var container = refContainer.current;
      window.addEventListener("scroll", function () {
        if (container) {
          var _container$getBoundin = container.getBoundingClientRect(),
              bottom = _container$getBoundin.bottom,
              top = _container$getBoundin.top;

          var newBottom = Math.floor(bottom);
          var newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            // refIsShow.current = true;
            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event("".concat(id)));
          }
        }
      });
    }

    return function () {
      window.removeEventListener("".concat(id), function () {});
      window.removeEventListener("scroll", function () {});
    };
  }, [id]);
  useEffect(function () {
    setTab((listThumbnail == null ? void 0 : listThumbnail.find(function (item) {
      return item.id === 1;
    })) || {});
  }, [listThumbnail]);
  return /*#__PURE__*/_jsxs(Box, {
    ref: refContainer,
    id: id,
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
        }
      },
      children: [title && /*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        color: colors.primary.bandaiNamcoBlack,
        children: title
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: {
            xs: 'none',
            lg: (tab == null ? void 0 : (_tab$popularNewsCard = tab.popularNewsCard) == null ? void 0 : _tab$popularNewsCard.length) < 4 ? 'none' : 'flex'
          },
          alignItems: 'center'
        },
        children: (tab == null ? void 0 : (_tab$viewMore = tab.viewMore) == null ? void 0 : _tab$viewMore.title) && /*#__PURE__*/_jsx(Link, {
          href: tab == null ? void 0 : (_tab$viewMore2 = tab.viewMore) == null ? void 0 : _tab$viewMore2.href,
          target: tab == null ? void 0 : (_tab$viewMore3 = tab.viewMore) == null ? void 0 : _tab$viewMore3.target,
          sx: {
            borderBottom: "1px solid ".concat(colors.neutral.neutral2),
            transition: 'all .4s',
            color: colors.neutral.neutral2,
            textDecoration: 'none',
            lineHeight: '21px',
            display: 'inline-block',
            '&:hover': {
              '& p': {
                color: colors.primary.bandaiNamcoBlack
              },
              borderBottom: "1px solid ".concat(colors.primary.bandaiNamcoBlack)
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            color: colors.neutral.neutral2,
            sx: {
              transition: 'all .4s'
            },
            children: tab == null ? void 0 : (_tab$viewMore4 = tab.viewMore) == null ? void 0 : _tab$viewMore4.title
          })
        })
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        marginTop: {
          xs: '32px',
          lg: "48px"
        },
        display: 'flex',
        flexDirection: 'column'
      },
      children: [!!listTabs.length && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          marginBottom: {
            xs: isEmpty(tab) ? '0px' : '26px',
            md: isEmpty(tab) ? '0px' : '56px'
          }
        },
        children: /*#__PURE__*/_jsx(Tabs, {
          data: handleTabs,
          listTabs: listTabs
        })
      }), /*#__PURE__*/_jsxs(Grid, {
        container: true,
        sx: {
          paddingLeft: '0px',
          paddingRight: '0px'
        },
        children: [!isEmpty(tab == null ? void 0 : tab.featuredNewsCard) && /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            flexDirection: {
              xs: 'column',
              lg: 'row'
            },
            flexWrap: 'nowrap',
            gap: {
              xs: '0px',
              lg: '22px'
            },
            width: '100%'
          },
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            lg: 6,
            sx: {
              maxWidth: {
                xs: "100%",
                lg: "50%"
              },
              "& div": {
                maxWidth: "100%",
                "& div:": {
                  "& div": {
                    '& img': {
                      height: {
                        xs: "200px",
                        md: "306px"
                      }
                    }
                  }
                }
              }
            },
            children: (tab == null ? void 0 : tab.featuredNewsCard) && /*#__PURE__*/_jsx(FeaturedNewsCard, _extends({}, tab == null ? void 0 : tab.featuredNewsCard))
          }), !!(tab != null && tab.popularNewsCard.length) && /*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            lg: 6,
            sx: {
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              width: '100%',
              marginBottom: '40px'
            },
            children: tab == null ? void 0 : (_tab$popularNewsCard2 = tab.popularNewsCard) == null ? void 0 : _tab$popularNewsCard2.map(function (item, index) {
              return index <= 2 && /*#__PURE__*/_createElement(PopularNewsCard, _extends({}, item, {
                key: index
              }));
            })
          })]
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            width: '100%',
            display: isEmpty(tab == null ? void 0 : tab.featuredNewsCard) ? 'flex' : 'none',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            marginTop: {
              xs: '158px',
              md: '112px'
            }
          },
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              alignItems: 'center',
              width: {
                xs: '84px',
                md: '176px'
              },
              height: {
                xs: '84px',
                md: '176px'
              },
              '& img': {
                objectFit: 'cover',
                borderRadius: '10px',
                display: 'block',
                width: '100%',
                height: '100%'
              }
            },
            children: /*#__PURE__*/_jsx("img", {
              src: blank == null ? void 0 : blank.image,
              alt: title != null ? title : ''
            })
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            color: colors.primary.bandaiNamcoBlack,
            sx: {
              margin: {
                xs: '16px 0 4px 0',
                lg: '24px 0 8px 0'
              }
            },
            children: currentTab === 1 ? (blank == null ? void 0 : blank["title-1"]) || (blank == null ? void 0 : blank["title-2"]) : (blank == null ? void 0 : blank["title-2"]) || (blank == null ? void 0 : blank["title-1"])
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            color: colors.neutral.neutral2,
            children: currentTab === 1 ? (blank == null ? void 0 : blank["description-1"]) || (blank == null ? void 0 : blank["description-2"]) : (blank == null ? void 0 : blank["description-2"]) || (blank == null ? void 0 : blank["description-1"])
          })]
        })]
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: {
            xs: (tab == null ? void 0 : (_tab$popularNewsCard3 = tab.popularNewsCard) == null ? void 0 : _tab$popularNewsCard3.length) < 4 ? 'none' : 'block',
            lg: 'none'
          },
          alignItems: 'center'
        },
        children: (tab == null ? void 0 : (_tab$viewMore5 = tab.viewMore) == null ? void 0 : _tab$viewMore5.title) && /*#__PURE__*/_jsx(Link, {
          href: tab == null ? void 0 : (_tab$viewMore6 = tab.viewMore) == null ? void 0 : _tab$viewMore6.href,
          target: tab == null ? void 0 : (_tab$viewMore7 = tab.viewMore) == null ? void 0 : _tab$viewMore7.target,
          sx: {
            borderBottom: "1px solid ".concat(colors.neutral.neutral2),
            transition: 'all .4s',
            color: colors.neutral.neutral2,
            textDecoration: 'none',
            lineHeight: '21px',
            display: 'inline-block',
            '&:hover': {
              '& p': {
                color: colors.primary.bandaiNamcoBlack
              },
              borderBottom: "1px solid ".concat(colors.primary.bandaiNamcoBlack)
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            color: colors.neutral.neutral2,
            sx: {
              transition: 'all .4s'
            },
            children: tab == null ? void 0 : (_tab$viewMore8 = tab.viewMore) == null ? void 0 : _tab$viewMore8.title
          })
        })
      })]
    })]
  });
};

export default ExploreMoreContainer;