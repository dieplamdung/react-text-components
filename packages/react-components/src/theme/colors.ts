const colors = {
  // Bandai colors
  primary: {
    p1: '#072340',
    p2: '#4D91DD',
    dark: '#000000',
    bandaiNamcoRed: '#E60000',
    bandaiNamcoBlack: '#1E1E1E',
    bandaiNamcoWhite: '#FFFFFF',
  },

  secondary: {
    bandaiNamcoBlue: '#0169B2',
    bandaiNamcoGreen: '#00B0B8',
    bandaiNamcoYellow: '#F5B700',
    bandaiNamcoPink: '#DF4662',
  },

  neutral: {
    white: '#FFFFFF',
    neutral1: '#4D4D4D',
    neutral2: '#737373',
    neutral4: '#9F9F9F',
    neutral5: '#DDDDDD',
    neutral6: '#F1F1F1',
    neutral7: '#F6F6F6',
    neutral8: '#F9F9F9',
  },

  accent: {
    accentBlue: '#105789',
    accentYellow: '#E59851',
    accentPink: '#CB2C49',
    accentWhite: {
      1: 'rgba(255, 255 , 255, 0.22)',
      2: 'rgba(255, 255, 255, 0.3)',
    },
    accentRed: {
      1: "#C30000",
      2: "#FF5858",
      3: 'rgba(255, 88, 88, 0.05)',
      4: 'rgba(255, 0, 0, 0.1)',
    },
    accentGreen: {
      1: "#00939A",
      2: "#36D56D",
      3: '#F7FFF9',
    },
  },

  // StashAway colors
  secondaryAvocado: {
    main: '#4671B7',
    shade900: '#6791D1',
    shade800: '#AECBF5',
    shade700: '#D6E5FA',
  },
  secondaryBlue: {
    main: '#70B4D8',
    shade900: '#84C7E8',
    shade800: '#B6DEEE',
    shade700: '#DFEAF1',
  },
  secondaryGreen: {
    main: '#7EC1BF',
    shade900: '#9CD8D7',
    shade800: '#C3E9E8',
    shade700: '#E1F4F3',
    shade600: '#559B99',
  },
  secondaryGray: {
    main: '#5B798B',
    shade900: '#6F8EA2',
    shade800: '#ADBBC4',
    shade700: '#F5F5F5',
    shade600: '#666666',
    shade500: '#DEDEDE',
    shade400: '#E3E3E3',
    shade300: '#CACBCC',
    shade100: '#EBEEF1',
  },
  secondaryOrange: {
    main: '#E4B24A',
    shade900: '#ECC877',
    shade800: '#F2DCA7',
    shade700: '#F2EAD3',
    shade600: '#DDB35C',
    shade500: '#F7CCA9',
  },
  secondaryBrown: {
    main: '#B0736B',
    shade900: '#D0887F',
    shade800: '#E0ADA7',
  },

  blink: {
    shade900: '#E2B1AC',
    shade800: '#EDC4BF',
    shade700: '#EDC2BD',
  },
  otherColor: {
    picasso: '#fff392',
    ablabaster: '#F8F8F8',
    tacao: '#F0AA90',
    iron: '#d1d2d3',
    woodSmoke: '#0a0b0d',
    tan: '#cdb382',
    chathamsBlue: '#114874',
    blackBlue: '#262626',
    mercury: '#e5e5e5',
    porcelain: '#edeff1',
    terracotta: '#E08461',
    twine: '#C1A165',
    pavlova: '#D4BE94',
    concrete: '#F2F2F2',
    silver: '#C1C1C1',
    alabaster: '#fbfbfb',
    quickSilver: '#a5a5a5',
    english: '#121212',
    gray: '#7E7E7E'
  },
};

export type ColorConfig = typeof colors;

export default colors;
