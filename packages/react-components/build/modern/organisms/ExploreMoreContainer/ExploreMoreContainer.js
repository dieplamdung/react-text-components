import _extends from "@babel/runtime/helpers/esm/extends";
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
const PopularNewsCard = loadable(() => import("../../molecules/PopularNewsCard"));
const FeaturedNewsCard = loadable(() => import("../../molecules/FeaturedNewsCard"));

const ExploreMoreContainer = props => {
  const {
    listTabs = [],
    listThumbnail,
    title,
    blank,
    id
  } = props;
  const [tab, setTab] = useState(listThumbnail?.find(item => item.id === 1) || {});
  const [currentTab, setCurrentTab] = useState(1);
  const refContainer = useRef();
  /**
   * Use to filter data by tabs
   * @param data
   */

  const handleTabs = data => {
    setCurrentTab(data);
    const filter = listThumbnail?.find(item => item.id === data) || {};
    setTab(filter);
  }; // dispatchEvent event send id to sub navigation


  useEffect(() => {
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
            // refIsShow.current = true;
            window?.dispatchEvent(new Event(`${id}`));
          }
        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  useEffect(() => {
    setTab(listThumbnail?.find(item => item.id === 1) || {});
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
            lg: tab?.popularNewsCard?.length < 4 ? 'none' : 'flex'
          },
          alignItems: 'center'
        },
        children: tab?.viewMore?.title && /*#__PURE__*/_jsx(Link, {
          href: tab?.viewMore?.href,
          target: tab?.viewMore?.target,
          sx: {
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
            children: tab?.viewMore?.title
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
        children: [!isEmpty(tab?.featuredNewsCard) && /*#__PURE__*/_jsxs(Box, {
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
            children: tab?.featuredNewsCard && /*#__PURE__*/_jsx(FeaturedNewsCard, _extends({}, tab?.featuredNewsCard))
          }), !!tab?.popularNewsCard.length && /*#__PURE__*/_jsx(Grid, {
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
            children: tab?.popularNewsCard?.map((item, index) => index <= 2 && /*#__PURE__*/_createElement(PopularNewsCard, _extends({}, item, {
              key: index
            })))
          })]
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            width: '100%',
            display: isEmpty(tab?.featuredNewsCard) ? 'flex' : 'none',
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
              src: blank?.image,
              alt: title ?? ''
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
            children: currentTab === 1 ? blank?.[`title-1`] || blank?.[`title-2`] : blank?.[`title-2`] || blank?.[`title-1`]
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            color: colors.neutral.neutral2,
            children: currentTab === 1 ? blank?.[`description-1`] || blank?.[`description-2`] : blank?.[`description-2`] || blank?.[`description-1`]
          })]
        })]
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: {
            xs: tab?.popularNewsCard?.length < 4 ? 'none' : 'block',
            lg: 'none'
          },
          alignItems: 'center'
        },
        children: tab?.viewMore?.title && /*#__PURE__*/_jsx(Link, {
          href: tab?.viewMore?.href,
          target: tab?.viewMore?.target,
          sx: {
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
            children: tab?.viewMore?.title
          })
        })
      })]
    })]
  });
};

export default ExploreMoreContainer;