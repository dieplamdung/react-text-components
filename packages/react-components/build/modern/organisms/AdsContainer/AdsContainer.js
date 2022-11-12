import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '../../atoms/Typography';
import colors from '../../theme/colors'; // Types

import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';

const AdsContainer = ({ img, alt, title, description, href, id }) => {
  const refContainer = useRef(); // const refIsShow = useRef<any>();
  // dispatchEvent event send id to sub navigation

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = refContainer.current; // const height = window.innerHeight;

      window.addEventListener('scroll', () => {
        if (container) {
          const { bottom, top } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            // refIsShow.current = true;
            window?.dispatchEvent(new Event(`${id}`));
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //     refIsShow.current = false;
          //     window.removeEventListener(`${id}`, () => { })
          // }
        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  return /*#__PURE__*/ _jsx(Box, {
    sx: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    id: id,
    ref: refContainer,
    children: /*#__PURE__*/ _jsxs(Box, {
      sx: {
        maxWidth: {
          xs: '100%',
          md: '736px',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '20px',
        '& a': {
          width: '100%',
          height: {
            xs: '204px',
            md: '414px',
          },
          '& img': {
            width: '100%',
            height: '100%',
            borderRadius: {
              xs: '10px',
              md: '20px',
            },
            objectFit: 'cover',
          },
        },
      },
      children: [
        /*#__PURE__*/ _jsx(Link, {
          href: href,
          sx: {
            textDecoration: 'none',
          },
          children: /*#__PURE__*/ _jsx('img', {
            src: img || '',
            alt: alt || '',
          }),
        }),
        /*#__PURE__*/ _jsx(Typography, {
          variant: 'h5',
          sx: {
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'block',
            textOverflow: 'ellipsis',
            letterSpacing: {
              xs: '-0.4px',
              md: '-0.8px',
            },
            color: colors.primary.reactNamcoBlack,
            marginTop: {
              xs: '20px',
              md: '32px',
            },
          },
          children: title,
        }),
        /*#__PURE__*/ _jsx(Typography, {
          variant: 'p4',
          sx: {
            textAlign: 'center',
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'block',
            textOverflow: 'ellipsis',
            color: '#7E7E7E',
            marginTop: '4px',
          },
          children: description,
        }),
      ],
    }),
  });
};

export default AdsContainer;
