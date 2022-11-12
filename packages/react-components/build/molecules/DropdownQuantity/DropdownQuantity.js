var _IconArrowDown;

// import Modules
import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import { IconArrowDown } from "../../atoms/Icon";
import Typography from "../../atoms/Typography"; // import Styles

import colors from "../../theme/colors"; // import { CustomThemeType } from '~/theme';
// import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const DropdownQuantity = props => {
  const {
    maxQuantity = 5,
    currentQuantity,
    onSetQuantity = () => {},
    label = "Qty"
  } = props;
  const [expand, setExpand] = useState(false);
  const [current, setCurrent] = useState(currentQuantity);
  const ref = useRef(null);

  const handleClick = event => {
    if (expand && ref.current && event.target) {
      setExpand(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expand]);

  const renderItems = () => {
    const td = [];

    for (let i = 1; i <= maxQuantity; i += 1) {
      td.push( /*#__PURE__*/_jsx(Box, {
        onClick: () => {
          setCurrent(i);
          setExpand(false);
          onSetQuantity(i);
        },
        sx: {
          padding: '11px 16px',
          '&:hover': {
            background: 'rgba(221, 221, 221, 0.8)'
          }
        },
        children: i
      }, i));
    }

    return td;
  };

  return /*#__PURE__*/_jsxs(Box, {
    ref: ref,
    onClick: () => setExpand(!expand),
    sx: {
      display: 'flex',
      userSelect: 'none',
      alignItems: 'center',
      position: 'relative',
      border: `1px solid ${colors.neutral.neutral5}`,
      borderRadius: '30px',
      cursor: 'pointer',
      padding: {
        xs: '8.5px 12px 12.5px',
        md: '10.5px 20px 14px'
      },
      width: {
        xs: '91px',
        md: '123px'
      }
    },
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "p5",
      children: label
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "p5",
      sx: {
        marginLeft: {
          xs: '13px',
          md: '25px'
        },
        marginRight: {
          xs: '9px',
          md: '8px'
        }
      },
      children: current
    }), _IconArrowDown || (_IconArrowDown = /*#__PURE__*/_jsx(IconArrowDown, {})), /*#__PURE__*/_jsx(Box, {
      sx: {
        display: expand ? 'block' : 'none',
        overflow: 'hidden',
        borderRadius: '12px',
        top: '55.5px',
        position: 'absolute',
        zIndex: 1,
        background: 'rgba(237, 237, 237, 1)',
        width: {
          xs: '100%',
          md: '140px'
        },
        left: '0'
      },
      children: renderItems()
    })]
  });
};

export default DropdownQuantity;