"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tabs = _interopRequireDefault(require("../../atoms/Tabs"));

var _lodash = require("lodash");

var _component = _interopRequireDefault(require("@loadable/component"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PopularNewsCard = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/PopularNewsCard"))));
const FeaturedNewsCard = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/FeaturedNewsCard"))));

const ExploreMoreContainer = props => {
  var _tab$popularNewsCard, _tab$viewMore, _tab$viewMore2, _tab$viewMore3, _tab$viewMore4, _tab$popularNewsCard2, _tab$popularNewsCard3, _tab$viewMore5, _tab$viewMore6, _tab$viewMore7, _tab$viewMore8;

  const {
    listTabs = [],
    listThumbnail,
    title,
    blank,
    id
  } = props;
  const [tab, setTab] = (0, _react.useState)((listThumbnail == null ? void 0 : listThumbnail.find(item => item.id === 1)) || {});
  const [currentTab, setCurrentTab] = (0, _react.useState)(1);
  const refContainer = (0, _react.useRef)();
  /**
   * Use to filter data by tabs
   * @param data
   */

  const handleTabs = data => {
    setCurrentTab(data);
    const filter = (listThumbnail == null ? void 0 : listThumbnail.find(item => item.id === data)) || {};
    setTab(filter);
  }; // dispatchEvent event send id to sub navigation


  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const container = refContainer.current;
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
          }
        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  (0, _react.useEffect)(() => {
    setTab((listThumbnail == null ? void 0 : listThumbnail.find(item => item.id === 1)) || {});
  }, [listThumbnail]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    ref: refContainer,
    id: id,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h4",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: {
            xs: 'none',
            lg: (tab == null ? void 0 : (_tab$popularNewsCard = tab.popularNewsCard) == null ? void 0 : _tab$popularNewsCard.length) < 4 ? 'none' : 'flex'
          },
          alignItems: 'center'
        },
        children: (tab == null ? void 0 : (_tab$viewMore = tab.viewMore) == null ? void 0 : _tab$viewMore.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: tab == null ? void 0 : (_tab$viewMore2 = tab.viewMore) == null ? void 0 : _tab$viewMore2.href,
          target: tab == null ? void 0 : (_tab$viewMore3 = tab.viewMore) == null ? void 0 : _tab$viewMore3.target,
          sx: {
            borderBottom: `1px solid ${_colors.default.neutral.neutral2}`,
            transition: 'all .4s',
            color: _colors.default.neutral.neutral2,
            textDecoration: 'none',
            lineHeight: '21px',
            display: 'inline-block',
            '&:hover': {
              '& p': {
                color: _colors.default.primary.bandaiNamcoBlack
              },
              borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            color: _colors.default.neutral.neutral2,
            sx: {
              transition: 'all .4s'
            },
            children: tab == null ? void 0 : (_tab$viewMore4 = tab.viewMore) == null ? void 0 : _tab$viewMore4.title
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        marginTop: {
          xs: '32px',
          lg: "48px"
        },
        display: 'flex',
        flexDirection: 'column'
      },
      children: [!!listTabs.length && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          marginBottom: {
            xs: (0, _lodash.isEmpty)(tab) ? '0px' : '26px',
            md: (0, _lodash.isEmpty)(tab) ? '0px' : '56px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.default, {
          data: handleTabs,
          listTabs: listTabs
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
        container: true,
        sx: {
          paddingLeft: '0px',
          paddingRight: '0px'
        },
        children: [!(0, _lodash.isEmpty)(tab == null ? void 0 : tab.featuredNewsCard) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
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
            children: (tab == null ? void 0 : tab.featuredNewsCard) && /*#__PURE__*/(0, _jsxRuntime.jsx)(FeaturedNewsCard, (0, _extends2.default)({}, tab == null ? void 0 : tab.featuredNewsCard))
          }), !!(tab != null && tab.popularNewsCard.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
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
            children: tab == null ? void 0 : (_tab$popularNewsCard2 = tab.popularNewsCard) == null ? void 0 : _tab$popularNewsCard2.map((item, index) => index <= 2 && /*#__PURE__*/(0, _react.createElement)(PopularNewsCard, (0, _extends2.default)({}, item, {
              key: index
            })))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: '100%',
            display: (0, _lodash.isEmpty)(tab == null ? void 0 : tab.featuredNewsCard) ? 'flex' : 'none',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            marginTop: {
              xs: '158px',
              md: '112px'
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: blank == null ? void 0 : blank.image,
              alt: title != null ? title : ''
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            color: _colors.default.primary.bandaiNamcoBlack,
            sx: {
              margin: {
                xs: '16px 0 4px 0',
                lg: '24px 0 8px 0'
              }
            },
            children: currentTab === 1 ? (blank == null ? void 0 : blank[`title-1`]) || (blank == null ? void 0 : blank[`title-2`]) : (blank == null ? void 0 : blank[`title-2`]) || (blank == null ? void 0 : blank[`title-1`])
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            color: _colors.default.neutral.neutral2,
            children: currentTab === 1 ? (blank == null ? void 0 : blank[`description-1`]) || (blank == null ? void 0 : blank[`description-2`]) : (blank == null ? void 0 : blank[`description-2`]) || (blank == null ? void 0 : blank[`description-1`])
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: {
            xs: (tab == null ? void 0 : (_tab$popularNewsCard3 = tab.popularNewsCard) == null ? void 0 : _tab$popularNewsCard3.length) < 4 ? 'none' : 'block',
            lg: 'none'
          },
          alignItems: 'center'
        },
        children: (tab == null ? void 0 : (_tab$viewMore5 = tab.viewMore) == null ? void 0 : _tab$viewMore5.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: tab == null ? void 0 : (_tab$viewMore6 = tab.viewMore) == null ? void 0 : _tab$viewMore6.href,
          target: tab == null ? void 0 : (_tab$viewMore7 = tab.viewMore) == null ? void 0 : _tab$viewMore7.target,
          sx: {
            borderBottom: `1px solid ${_colors.default.neutral.neutral2}`,
            transition: 'all .4s',
            color: _colors.default.neutral.neutral2,
            textDecoration: 'none',
            lineHeight: '21px',
            display: 'inline-block',
            '&:hover': {
              '& p': {
                color: _colors.default.primary.bandaiNamcoBlack
              },
              borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            color: _colors.default.neutral.neutral2,
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

var _default = ExploreMoreContainer;
exports.default = _default;