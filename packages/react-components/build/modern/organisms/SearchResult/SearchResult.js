import _extends from "@babel/runtime/helpers/esm/extends";
import { Box } from '@mui/material';
import React, { useRef } from 'react';
import Container from "../../atoms/Container"; // Types

import { IconClose } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import SearchResultFilterPill from "../../molecules/SearchResultFilterPill";
import TextField from "../../molecules/TextField";
import colors from "../../theme/colors";
import SearchResultBlog from "../SearchResultBlog";
import SearchResultGame from "../SearchResultGame/SearchResultGame";
import SearchResultNewsEvents from "../SearchResultNewsEvents"; // import SearchResultBlog from './SearchResultBlog';
// import SearchResultFilterPill from './SearchResultFilterPill';
// import SearchResultGame from './SearchResultGame';
// import SearchResultNewsEvents from '';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SearchResult = props => {
  const {
    propsInput,
    listTabs,
    onClose = () => {},
    textResult,
    propsGame,
    propsBlog,
    propsNewEvent
  } = props;
  const refTextField = useRef(null);

  const handleOnChangeSearch = e => {
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsxs(Container, {
      children: [/*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(TextField, {
          ref: refTextField,
          label: propsInput?.placeholder || "",
          width: "100%",
          iconPosEnd: true,
          icon: /*#__PURE__*/_jsx(IconClose, {
            htmlColor: "#C1C1C1",
            sx: {
              cursor: "pointer"
            },
            onClick: () => onClose?.()
          }),
          onChange: handleOnChangeSearch
        })
      }), /*#__PURE__*/_jsx(SearchResultFilterPill, {
        listTabs: listTabs
      }), textResult && /*#__PURE__*/_jsx(Typography, {
        variant: 'p3',
        color: colors.neutral.neutral2,
        sx: {
          marginTop: {
            xs: '32px',
            md: '40px'
          }
        },
        children: textResult
      }), propsGame && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '60px',
            md: '120px'
          }
        },
        children: /*#__PURE__*/_jsx(SearchResultGame, {
          propsGame: propsGame
        })
      })]
    }), propsBlog && /*#__PURE__*/_jsx(Box, {
      sx: {
        margin: {
          xs: '72px 0',
          md: '132px 0'
        }
      },
      children: /*#__PURE__*/_jsx(SearchResultBlog, _extends({}, propsBlog))
    }), propsNewEvent && /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          margin: {
            xs: '72px 0',
            md: '132px 0'
          }
        },
        children: /*#__PURE__*/_jsx(SearchResultNewsEvents, _extends({}, propsNewEvent))
      })
    })]
  });
};

export default SearchResult;