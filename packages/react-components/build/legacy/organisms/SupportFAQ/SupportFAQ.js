import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
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

var SupportFAQ = function SupportFAQ(props) {
  var _listAccordionDefault, _listAccordion$select, _listAccordion$select2, _listAccordionDefault4, _listAccordionDefault5;

  var title = props.title,
      secondaryTitle = props.secondaryTitle,
      listAccordion = props.listAccordion,
      listTabIcons = props.listTabIcons,
      listLink = props.listLink,
      listAccordionDefault = props.listAccordionDefault;

  var _useState = useState(listAccordionDefault == null ? void 0 : (_listAccordionDefault = listAccordionDefault[0]) == null ? void 0 : _listAccordionDefault.key),
      _useState2 = _slicedToArray(_useState, 2),
      thread = _useState2[0],
      setThread = _useState2[1];

  var _useState3 = useState(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedId = _useState4[0],
      setSelectedId = _useState4[1];
  /**
   * Use to collect title data by default when the data changes
   */


  useEffect(function () {
    var _listAccordionDefault2;

    setThread(listAccordionDefault == null ? void 0 : (_listAccordionDefault2 = listAccordionDefault[0]) == null ? void 0 : _listAccordionDefault2.key);
  }, [listAccordionDefault]);
  /**
     * Use to handling data switch tabs
     */

  var handleTabs = function handleTabs(id) {
    var _listAccordionDefault3;

    // refAccordion.current?.handleResetCollapse?.()
    setSelectedId(id);
    setThread(id === -1 ? listAccordionDefault == null ? void 0 : (_listAccordionDefault3 = listAccordionDefault[0]) == null ? void 0 : _listAccordionDefault3.key : '');
  };

  var UseCallbackAccordion = useCallback(function (propsAccordion) {
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
        children: listAccordion != null && listAccordion[selectedId] ? listAccordion == null ? void 0 : (_listAccordion$select = listAccordion[selectedId]) == null ? void 0 : (_listAccordion$select2 = _listAccordion$select.accordionItems) == null ? void 0 : _listAccordion$select2.map(function (item, idx) {
          return /*#__PURE__*/_jsx(UseCallbackAccordion, _extends({}, item), idx);
        }) : listAccordionDefault == null ? void 0 : (_listAccordionDefault4 = listAccordionDefault[0]) == null ? void 0 : (_listAccordionDefault5 = _listAccordionDefault4.accordionItems) == null ? void 0 : _listAccordionDefault5.map(function (item, idx) {
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
          children: listLink == null ? void 0 : listLink.map(function (item) {
            return /*#__PURE__*/_jsx(Link, {
              href: item == null ? void 0 : item.href,
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
                children: item == null ? void 0 : item.label
              })
            });
          })
        })]
      })]
    })
  });
};

export default SupportFAQ;