import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import React, { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from "../../atoms/Typography";
import TabIcons from "../../atoms/TabIcons";
import Accordion from "../../atoms/Accordion"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SupportFAQ = props => {
  const {
    title,
    secondaryTitle,
    listAccordion,
    listTabIcons,
    listLink,
    listAccordionDefault
  } = props;
  const [thread, setThread] = useState(listAccordionDefault?.[0]?.key);
  const [selectedId, setSelectedId] = useState(-1);
  /**
   * Use to collect title data by default when the data changes
   */

  useEffect(() => {
    setThread(listAccordionDefault?.[0]?.key);
  }, [listAccordionDefault]);
  /**
     * Use to handling data switch tabs
     */

  const handleTabs = id => {
    // refAccordion.current?.handleResetCollapse?.()
    setSelectedId(id);
    setThread(id === -1 ? listAccordionDefault?.[0]?.key : '');
  };

  const UseCallbackAccordion = useCallback(propsAccordion => {
    return /*#__PURE__*/_jsx(Accordion, _extends({}, propsAccordion)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      overflow: 'hidden',
      width: {
        xs: '100%',
        lg: '744px'
      },
      margin: '0 auto'
    },
    children: /*#__PURE__*/_jsxs(Box, {
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h1",
        sx: {
          marginBottom: '32px'
        },
        children: title
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          width: '100%'
        },
        children: /*#__PURE__*/_jsx(TabIcons, {
          listTabs: listTabIcons,
          onChangeTab: handleTabs
        })
      }), thread && /*#__PURE__*/_jsx(Typography, {
        variant: 'h5',
        sx: {
          marginBottom: '32px',
          marginTop: '60px',
          userSelect: 'none'
        },
        children: thread
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          margin: {
            xs: '52px 0',
            md: '60px 0'
          },
          '& > div': {
            marginBottom: '24px'
          }
        },
        children: listAccordion?.[selectedId] ? listAccordion?.[selectedId]?.accordionItems?.map((item, idx) => {
          return /*#__PURE__*/_jsx(UseCallbackAccordion, _extends({}, item), idx);
        }) : listAccordionDefault?.[0]?.accordionItems?.map((item, idx) => {
          return /*#__PURE__*/_jsx(Accordion, _extends({}, item), idx);
        })
      }), /*#__PURE__*/_jsxs(Box, {
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "h6",
          sx: {
            userSelect: 'none',
            marginBottom: {
              xs: '24px',
              md: '20px'
            }
          },
          children: secondaryTitle
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            gap: {
              xs: '21px',
              md: '28px'
            },
            '& p': {
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              display: 'inline-block'
            }
          },
          children: listLink?.map(item => {
            return /*#__PURE__*/_jsx(Link, {
              href: item?.href,
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p5",
                sx: {
                  color: colors.neutral.neutral2,
                  userSelect: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    color: colors.neutral.neutral1
                  }
                },
                children: item?.label
              })
            });
          })
        })]
      })]
    })
  });
};

export default SupportFAQ;