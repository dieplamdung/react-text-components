/* eslint-disable class-methods-use-this */
// import modules
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Types

import { ButtonDisabledVariantStyle } from './types';

// Styles
import { DisabledButtonStyle } from './styles';

// Custom for Primary Button
class ButtonDisabledPrimaryStyle implements ButtonDisabledVariantStyle {
  getVariant(): MuiButtonProps['variant'] {
    return 'primary';
  }

  getSxStyle() {
    return {
      backgroundColor: DisabledButtonStyle.bgColor,
      color: DisabledButtonStyle.color,
      ':hover': {
        backgroundColor: DisabledButtonStyle.bgColor,
        color: DisabledButtonStyle.color,
      },
    };
  }
}

// Custom for Secondary Button
class ButtonDisabledSecondaryStyle implements ButtonDisabledVariantStyle {
  getVariant(): MuiButtonProps['variant'] {
    return 'secondary';
  }

  getSxStyle() {
    return {
      borderColor: DisabledButtonStyle.bgColor,
      color: DisabledButtonStyle.color,
      ':hover': {
        borderColor: DisabledButtonStyle.bgColor,
        color: DisabledButtonStyle.color,
        background: 'none',
      },
    };
  }
}

// Custom for Black Button
class ButtonDisabledBlackStyle implements ButtonDisabledVariantStyle {
  getVariant(): MuiButtonProps['variant'] {
    return 'secondaryBlack';
  }

  getSxStyle() {
    return {
      backgroundColor: "red",
      color: DisabledButtonStyle.color,
      ':hover': {
        backgroundColor: "blue",
        color: DisabledButtonStyle.color,
      },
    };
  }
}

// Custom for Tertiary Button
class ButtonDisabledTertiaryStyle implements ButtonDisabledVariantStyle {
  getVariant(): MuiButtonProps['variant'] {
    return 'tertiary';
  }

  getSxStyle() {
    return {
      background: 'none',
      borderColor: DisabledButtonStyle.bgColor,
      color: DisabledButtonStyle.color,
      ':hover': {
        background: 'none',
        borderColor: DisabledButtonStyle.bgColor,
        color: DisabledButtonStyle.color,
      },
    };
  }
}

class ButtonDisabledEmptyStyle implements ButtonDisabledVariantStyle {
  getVariant() {
    return null;
  }

  getSxStyle() {
    return {};
  }
}

// Check props
export class ButtonDisabledVariantStyleFactory {
  static create(
    isDisabled: boolean | undefined,
    variant: MuiButtonProps['variant'],
  ): ButtonDisabledVariantStyle {
    if (!isDisabled) {
      return new ButtonDisabledEmptyStyle();
    }

    switch (variant) {
      case 'primary':
        return new ButtonDisabledPrimaryStyle();
      case 'primaryDark':
        return new ButtonDisabledPrimaryStyle();
      case 'secondary':
        return new ButtonDisabledSecondaryStyle();
      case 'secondaryDark':
        return new ButtonDisabledSecondaryStyle();
      case 'secondaryBlack':
        return new ButtonDisabledBlackStyle();
      case 'tertiary':
        return new ButtonDisabledTertiaryStyle();

      default:
        return new ButtonDisabledPrimaryStyle();
    }
  }
}
