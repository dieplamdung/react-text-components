import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

/* eslint-disable class-methods-use-this */
// import modules
// Types
// Styles
import { DisabledButtonStyle } from "./styles"; // Custom for Primary Button

var ButtonDisabledPrimaryStyle = /*#__PURE__*/function () {
  function ButtonDisabledPrimaryStyle() {
    _classCallCheck(this, ButtonDisabledPrimaryStyle);
  }

  _createClass(ButtonDisabledPrimaryStyle, [{
    key: "getVariant",
    value: function getVariant() {
      return 'primary';
    }
  }, {
    key: "getSxStyle",
    value: function getSxStyle() {
      return {
        backgroundColor: DisabledButtonStyle.bgColor,
        color: DisabledButtonStyle.color,
        ':hover': {
          backgroundColor: DisabledButtonStyle.bgColor,
          color: DisabledButtonStyle.color
        }
      };
    }
  }]);

  return ButtonDisabledPrimaryStyle;
}(); // Custom for Secondary Button


var ButtonDisabledSecondaryStyle = /*#__PURE__*/function () {
  function ButtonDisabledSecondaryStyle() {
    _classCallCheck(this, ButtonDisabledSecondaryStyle);
  }

  _createClass(ButtonDisabledSecondaryStyle, [{
    key: "getVariant",
    value: function getVariant() {
      return 'secondary';
    }
  }, {
    key: "getSxStyle",
    value: function getSxStyle() {
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
  }]);

  return ButtonDisabledSecondaryStyle;
}(); // Custom for Black Button


var ButtonDisabledBlackStyle = /*#__PURE__*/function () {
  function ButtonDisabledBlackStyle() {
    _classCallCheck(this, ButtonDisabledBlackStyle);
  }

  _createClass(ButtonDisabledBlackStyle, [{
    key: "getVariant",
    value: function getVariant() {
      return 'secondaryBlack';
    }
  }, {
    key: "getSxStyle",
    value: function getSxStyle() {
      return {
        backgroundColor: "red",
        color: DisabledButtonStyle.color,
        ':hover': {
          backgroundColor: "blue",
          color: DisabledButtonStyle.color
        }
      };
    }
  }]);

  return ButtonDisabledBlackStyle;
}(); // Custom for Tertiary Button


var ButtonDisabledTertiaryStyle = /*#__PURE__*/function () {
  function ButtonDisabledTertiaryStyle() {
    _classCallCheck(this, ButtonDisabledTertiaryStyle);
  }

  _createClass(ButtonDisabledTertiaryStyle, [{
    key: "getVariant",
    value: function getVariant() {
      return 'tertiary';
    }
  }, {
    key: "getSxStyle",
    value: function getSxStyle() {
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
  }]);

  return ButtonDisabledTertiaryStyle;
}();

var ButtonDisabledEmptyStyle = /*#__PURE__*/function () {
  function ButtonDisabledEmptyStyle() {
    _classCallCheck(this, ButtonDisabledEmptyStyle);
  }

  _createClass(ButtonDisabledEmptyStyle, [{
    key: "getVariant",
    value: function getVariant() {
      return null;
    }
  }, {
    key: "getSxStyle",
    value: function getSxStyle() {
      return {};
    }
  }]);

  return ButtonDisabledEmptyStyle;
}(); // Check props


export var ButtonDisabledVariantStyleFactory = /*#__PURE__*/function () {
  function ButtonDisabledVariantStyleFactory() {
    _classCallCheck(this, ButtonDisabledVariantStyleFactory);
  }

  _createClass(ButtonDisabledVariantStyleFactory, null, [{
    key: "create",
    value: function create(isDisabled, variant) {
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
  }]);

  return ButtonDisabledVariantStyleFactory;
}();