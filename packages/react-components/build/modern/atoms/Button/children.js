/* eslint-disable class-methods-use-this */
// import modules
// Types
// Styles
import { DisabledButtonStyle } from "./styles"; // Custom for Primary Button

class ButtonDisabledPrimaryStyle {
  getVariant() {
    return 'primary';
  }

  getSxStyle() {
    return {
      backgroundColor: DisabledButtonStyle.bgColor,
      color: DisabledButtonStyle.color,
      ':hover': {
        backgroundColor: DisabledButtonStyle.bgColor,
        color: DisabledButtonStyle.color
      }
    };
  }

} // Custom for Secondary Button


class ButtonDisabledSecondaryStyle {
  getVariant() {
    return 'secondary';
  }

  getSxStyle() {
    return {
      borderColor: DisabledButtonStyle.bgColor,
      color: DisabledButtonStyle.color,
      ':hover': {
        borderColor: DisabledButtonStyle.bgColor,
        color: DisabledButtonStyle.color,
        background: 'none'
      }
    };
  }

} // Custom for Black Button


class ButtonDisabledBlackStyle {
  getVariant() {
    return 'secondaryBlack';
  }

  getSxStyle() {
    return {
      backgroundColor: "red",
      color: DisabledButtonStyle.color,
      ':hover': {
        backgroundColor: "blue",
        color: DisabledButtonStyle.color
      }
    };
  }

} // Custom for Tertiary Button


class ButtonDisabledTertiaryStyle {
  getVariant() {
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
        color: DisabledButtonStyle.color
      }
    };
  }

}

class ButtonDisabledEmptyStyle {
  getVariant() {
    return null;
  }

  getSxStyle() {
    return {};
  }

} // Check props


export class ButtonDisabledVariantStyleFactory {
  static create(isDisabled, variant) {
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