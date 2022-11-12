"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonDisabledVariantStyleFactory = void 0;

var _styles = require("./styles");

/* eslint-disable class-methods-use-this */
// import modules
// Types
// Styles
// Custom for Primary Button
class ButtonDisabledPrimaryStyle {
  getVariant() {
    return 'primary';
  }

  getSxStyle() {
    return {
      backgroundColor: _styles.DisabledButtonStyle.bgColor,
      color: _styles.DisabledButtonStyle.color,
      ':hover': {
        backgroundColor: _styles.DisabledButtonStyle.bgColor,
        color: _styles.DisabledButtonStyle.color
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
      borderColor: _styles.DisabledButtonStyle.bgColor,
      color: _styles.DisabledButtonStyle.color,
      ':hover': {
        borderColor: _styles.DisabledButtonStyle.bgColor,
        color: _styles.DisabledButtonStyle.color,
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
      color: _styles.DisabledButtonStyle.color,
      ':hover': {
        backgroundColor: "blue",
        color: _styles.DisabledButtonStyle.color
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
      borderColor: _styles.DisabledButtonStyle.bgColor,
      color: _styles.DisabledButtonStyle.color,
      ':hover': {
        background: 'none',
        borderColor: _styles.DisabledButtonStyle.bgColor,
        color: _styles.DisabledButtonStyle.color
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


class ButtonDisabledVariantStyleFactory {
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

exports.ButtonDisabledVariantStyleFactory = ButtonDisabledVariantStyleFactory;