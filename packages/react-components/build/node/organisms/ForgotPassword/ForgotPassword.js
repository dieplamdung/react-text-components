"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));

var _component = _interopRequireDefault(require("@loadable/component"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _reactHookForm = require("react-hook-form");

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Icon = require("../../atoms/Icon");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconCheckList, _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TextField = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/TextField"))));

const ForgotPassword = props => {
  var _emailField$helperTex, _errors$email;

  const {
    mainImage,
    mainImageMobile,
    nextImage,
    alt,
    title,
    description,
    emailField,
    sendButton,
    successful
  } = props;
  const isMobile = (0, _useMediaQuery.default)(themes => themes.breakpoints.down('md'));
  const {
    register,
    getValues,
    handleSubmit,
    setError,
    formState: {
      errors,
      isValid,
      isDirty
    }
  } = (0, _reactHookForm.useForm)({
    mode: "onChange"
  });
  const [loadingSubmit, setLoadingSubmit] = (0, _react.useState)(false);
  /**
      * Run after submit Form
  */

  const onSubmit = async () => {
    setLoadingSubmit(true);

    try {
      const {
        handler
      } = await sendButton;

      if (typeof handler === 'function') {
        const dataForm = {
          email: getValues('email')
        };
        await handler(undefined, props, dataForm);
      }
    } catch (error) {
      setLoadingSubmit(false);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: 'flex',
          justifyContent: 'center',
          padding: {
            xs: '72px 0',
            md: '116px 0 100px 0'
          },
          flexDirection: {
            xs: 'column',
            sm: 'row'
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            flex: '1 1 100%',
            maxWidth: {
              xs: '100%',
              md: '488px'
            },
            height: '100%'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              position: 'relative',
              maxWidth: '100%',
              textAlign: 'center',
              paddingTop: {
                md: '77%'
              },
              '& img': {
                objectFit: 'cover',
                margin: '0 auto',
                position: {
                  xs: 'unset',
                  md: 'absolute'
                },
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                maxWidth: '288px',
                maxHeight: '374px' // height: 'auto',

              }
            },
            children: nextImage || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: isMobile ? mainImageMobile : mainImage,
              alt: alt
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            flex: '1 1 100%',
            marginRight: {
              // xs: '20px',
              lg: 'unset'
            },
            paddingTop: {
              xs: '16px',
              md: '80px'
            },
            maxWidth: {
              xs: '100%',
              sm: '410px'
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack,
              textAlign: {
                xs: 'center',
                sm: 'left'
              },
              marginBottom: '16px'
            },
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p4",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack,
              textAlign: {
                xs: 'center',
                sm: 'left'
              },
              marginBottom: {
                xs: '40px',
                md: '36px'
              }
            },
            children: description
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
            method: "POST",
            onSubmit: handleSubmit(onSubmit),
            style: {
              display: 'flex',
              flexDirection: 'column'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: errors != null && errors.email ? {
                marginBottom: '20px'
              } : {},
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({
                InputLabelProps: {
                  required: false
                }
              }, emailField, {
                error: errors.email && true
              }, register("email", {
                required: `${emailField == null ? void 0 : emailField.emptyField}`,
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: (_emailField$helperTex = emailField == null ? void 0 : emailField.helperText) != null ? _emailField$helperTex : 'sd'
                },
                onBlur: e => {
                  if (!e.target.value) {
                    setError('email', {
                      type: 'string',
                      message: emailField == null ? void 0 : emailField.emptyField
                    });
                  }
                }
              }), {
                helperText: errors == null ? void 0 : (_errors$email = errors.email) == null ? void 0 : _errors$email.message
              }))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                width: '100%',
                marginTop: '24px',
                marginBottom: '24px'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, sendButton, {
                disabled: loadingSubmit || !isValid || !isDirty,
                variant: loadingSubmit || !isValid || !isDirty ? 'primary' : 'primaryDark',
                type: "submit",
                sx: {
                  backgroundColor: successful && `${_colors.default.secondary.bandaiNamcoGreen} !important` || loadingSubmit && `${_colors.default.primary.bandaiNamcoRed} !important` || '',
                  '& svg': {
                    color: _colors.default.primary.bandaiNamcoWhite,
                    '& path': {
                      stroke: _colors.default.secondary.bandaiNamcoGreen,
                      fill: 'transparent !important'
                    },
                    '& rect': {
                      fill: _colors.default.primary.bandaiNamcoWhite
                    }
                  }
                },
                label: successful && (_IconCheckList || (_IconCheckList = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconCheckList, {}))) || loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {}))) || (sendButton == null ? void 0 : sendButton.label) || ''
              }))
            })]
          })]
        })]
      })
    })
  });
};

var _default = ForgotPassword;
exports.default = _default;