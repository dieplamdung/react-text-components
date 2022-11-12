import breakpoints from "./breakpoints";
export const font = 'Hellix,Helvetica';
const typography = {
  fontFamily: font,
  // Tyopgraphy Heading
  h1: {
    fontSize: 52,
    lineHeight: '60px',
    letterSpacing: '-1px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '38px',
      letterSpacing: '-0.4px'
    }
  },
  h2: {
    fontSize: 46,
    lineHeight: '54px',
    letterSpacing: '-1px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 26,
      lineHeight: '32px',
      letterSpacing: '-0.4px'
    }
  },
  h2_exploremore: {
    fontSize: 46,
    lineHeight: '54px',
    letterSpacing: '-1px',
    fontWeight: 600,
    WebkitLineClamp: 3,
    wordBreak: "break-word",
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    [breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '26px',
      letterSpacing: '-0.4px',
      WebkitLineClamp: 2
    }
  },
  h3: {
    fontSize: 40,
    lineHeight: '48px',
    letterSpacing: '0.8px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '30px',
      letterSpacing: '-0.4px'
    }
  },
  h4: {
    fontSize: 36,
    lineHeight: '44px',
    letterSpacing: '-0.8px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 22,
      lineHeight: '28px',
      letterSpacing: '-0.4px'
    }
  },
  h5: {
    fontSize: 32,
    lineHeight: '40px',
    letterSpacing: '-0.8px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '26px',
      letterSpacing: '-0.4px'
    }
  },
  h6: {
    fontSize: 24,
    lineHeight: '30px',
    letterSpacing: '-0.6px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: '-0.2px'
    }
  },
  h6_exploremore: {
    fontSize: 24,
    lineHeight: '30px',
    letterSpacing: '-0.6px',
    fontWeight: 600,
    WebkitLineClamp: 2,
    wordBreak: "break-word",
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    [breakpoints.down('md')]: {
      fontSize: 18,
      lineHeight: '24px',
      letterSpacing: '-0.2px'
    }
  },
  // Typography Paragraph
  p1: {
    fontSize: 20,
    lineHeight: '26px',
    letterSpacing: '-0.2px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 18,
      letterSpacing: '-0.4px'
    }
  },
  p2: {
    fontSize: 20,
    lineHeight: '26px',
    letterSpacing: '-0.2px',
    fontWeight: 400,
    [breakpoints.down('md')]: {
      fontSize: 18,
      letterSpacing: '-0.2px'
    }
  },
  p3: {
    fontSize: 18,
    lineHeight: '28px',
    letterSpacing: '-0.2px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '22px',
      letterSpacing: '-0.2px'
    }
  },
  p4: {
    fontSize: 18,
    lineHeight: '28px',
    letterSpacing: '-0.2px',
    fontWeight: 400,
    [breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '22px',
      letterSpacing: '-0.2px'
    }
  },
  p5: {
    fontSize: 16,
    lineHeight: '26px',
    letterSpacing: '-0.2px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '0px'
    }
  },
  p6: {
    fontSize: 16,
    lineHeight: '26px',
    letterSpacing: '-0.2px',
    fontWeight: 400,
    [breakpoints.down('md')]: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '0px'
    }
  },
  p7: {
    fontSize: 14,
    lineHeight: '21px',
    letterSpacing: '0px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      fontSize: 12,
      lineHeight: '18px'
    }
  },
  p8: {
    fontSize: 14,
    lineHeight: '21px',
    letterSpacing: '0px',
    fontWeight: 400,
    [breakpoints.down('md')]: {
      fontSize: 12,
      lineHeight: '19px',
      letterSpacing: '0px'
    }
  },
  p9: {
    fontSize: 10,
    lineHeight: '14px',
    letterSpacing: '0.2px',
    fontWeight: 400
  },
  // Label Tyopgraphy
  l1: {
    fontSize: 10,
    lineHeight: '14px',
    letterSpacing: '0.2px',
    fontWeight: 700,
    [breakpoints.down('md')]: {
      lineHeight: '12px',
      letterSpacing: '0.2px'
    }
  },
  l2: {
    fontSize: 10,
    lineHeight: '14px',
    letterSpacing: '0.2px',
    fontWeight: 600,
    [breakpoints.down('md')]: {
      lineHeight: '12px',
      letterSpacing: '0.2px'
    }
  }
};
const variantMappingTypography = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p1: 'p',
  p2: 'p',
  p3: 'p',
  p4: 'p',
  p5: 'p',
  p6: 'p',
  p7: 'p',
  p8: 'p',
  p9: 'p',
  l1: 'p',
  l2: 'p'
};
export default typography;
export { variantMappingTypography };