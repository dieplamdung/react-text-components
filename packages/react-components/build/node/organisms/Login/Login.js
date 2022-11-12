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

var _InputAdornment = _interopRequireDefault(require("@mui/material/InputAdornment"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _component = _interopRequireDefault(require("@loadable/component"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _reactHookForm = require("react-hook-form");

var _Checkbox = _interopRequireDefault(require("../../atoms/Checkbox"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconEyeOff, _IconEye, _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TextField = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/TextField"))));

const Login = props => {
  var _emailField$helperTex, _errors$email, _errors$password, _signupLink$link, _signupLink$link2;

  const {
    mainImage,
    mainImageMobile,
    alt,
    title,
    nextImage,
    loginButton,
    signupLink,
    emailField,
    passwordField,
    rememberLogged,
    warning,
    forgotPasswordLink,
    isKeepLogin = () => {}
  } = props;
  const isMobile = (0, _useMediaQuery.default)(themes => themes.breakpoints.down('sm'));
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
  const refForm = (0, _react.useRef)();
  const [loadingSubmit, setLoadingSubmit] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (warning) {
      setLoadingSubmit(false);
    }
  }, [warning]);
  /**
      * Run after submit Form
  */

  const onSubmit = async () => {
    setLoadingSubmit(true);

    try {
      const {
        handler
      } = loginButton;

      if (typeof handler === 'function') {
        const dataForm = {
          email: getValues('email'),
          password: getValues('password'),
          isKeepLogin: getValues('isKeepLogin')
        };
        await handler(undefined, props, dataForm).then(res => {
          if (res.status === '200' || res.status === 200) {// console.log("Successful")
          } // console.log("Failed")

        });
      }
    } catch (error) {// console.log('Error! An error occurred. Please try again later', error);
    }
  };

  const [values, setValues] = _react.default.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues((0, _extends2.default)({}, values, {
      showPassword: !values.showPassword
    }));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: 'flex',
      gap: {
        md: '30px',
        xl: '164px'
      },
      flexDirection: {
        xs: 'column',
        sm: 'row'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        flex: '1 1 100%',
        maxWidth: '442px',
        height: '100%'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          position: 'relative',
          maxWidth: '100%',
          '& img': {
            objectFit: 'cover',
            maxWidth: '100%',
            height: 'auto'
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
        margin: '0 20px',
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
            md: 'left'
          },
          marginBottom: {
            xs: '16px',
            lg: '32px'
          }
        },
        children: title
      }), warning && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        sx: {
          borderRadius: '10px',
          color: _colors.default.primary.dark,
          backgroundColor: 'rgba(230, 0, 0, 0.1);',
          padding: {
            xs: '14px 32px',
            md: '14px 18px'
          },
          textAlign: 'left',
          marginBottom: '32px'
        },
        children: warning
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        method: "POST",
        onSubmit: handleSubmit(onSubmit),
        style: {
          display: 'flex',
          flexDirection: 'column'
        },
        autoComplete: "off",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          },
          ref: refForm,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: errors != null && errors.email ? {
              marginBottom: '20px'
            } : {},
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({
              id: "outlined-adornment-email",
              InputLabelProps: {
                required: false
              }
            }, emailField, {
              error: errors.email && true
            }, register("email", {
              required: `${emailField.emptyField}`,
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: (_emailField$helperTex = emailField == null ? void 0 : emailField.helperText) != null ? _emailField$helperTex : ''
              },
              onBlur: e => {
                if (!e.target.value) {
                  setError('email', {
                    type: 'string',
                    message: emailField.emptyField
                  });
                }
              }
            }), {
              helperText: errors == null ? void 0 : (_errors$email = errors.email) == null ? void 0 : _errors$email.message
            }))
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: errors != null && errors.password ? {
              marginBottom: '20px'
            } : {},
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({}, passwordField, {
              id: "outlined-adornment-password",
              InputLabelProps: {
                required: false
              },
              error: errors.password && true
            }, register("password", {
              required: `${passwordField.emptyField}`,
              onBlur: e => {
                if (!e.target.value) {
                  setError('password', {
                    type: 'string',
                    message: passwordField.emptyField
                  });
                }
              }
            }), {
              helperText: errors == null ? void 0 : (_errors$password = errors.password) == null ? void 0 : _errors$password.message,
              type: values.showPassword ? 'text' : 'password',
              icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputAdornment.default, {
                position: "end",
                sx: {
                  '& svg': {
                    color: `${_colors.default.primary.bandaiNamcoBlack} !important`
                  }
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
                  "aria-label": "toggle password visibility",
                  onClick: handleClickShowPassword,
                  edge: "end",
                  children: values.showPassword ? _IconEyeOff || (_IconEyeOff = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconEyeOff, {})) : _IconEye || (_IconEye = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconEye, {}))
                })
              })
            }))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            textAlign: 'right',
            marginTop: '16px',
            marginBottom: '32px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p9",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack,
              '& a': {
                color: _colors.default.primary.bandaiNamcoBlack
              }
            },
            children: (forgotPasswordLink == null ? void 0 : forgotPasswordLink.nextLink) || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
              href: forgotPasswordLink == null ? void 0 : forgotPasswordLink.href,
              sx: {
                display: 'inline-block'
              },
              children: forgotPasswordLink == null ? void 0 : forgotPasswordLink.label
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
              onChange: e => isKeepLogin(e)
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p9",
            color: _colors.default.primary.dark,
            children: rememberLogged
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            width: '100%',
            marginTop: '24px',
            marginBottom: '24px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, loginButton, {
            disabled: loadingSubmit || !isValid || !isDirty,
            variant: loadingSubmit || !isValid || !isDirty ? 'primary' : 'primaryDark',
            type: "submit",
            sx: {
              backgroundColor: loadingSubmit && `${_colors.default.primary.bandaiNamcoRed} !important` || '',
              '& svg': {
                color: _colors.default.primary.bandaiNamcoWhite,
                '& path': {
                  stroke: _colors.default.secondary.bandaiNamcoGreen
                },
                '& rect': {
                  fill: _colors.default.primary.bandaiNamcoWhite
                }
              }
            },
            label: loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {}))) || (loginButton == null ? void 0 : loginButton.label)
          }))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            width: '100%',
            textAlign: 'center'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
            variant: "p8",
            color: _colors.default.neutral.neutral2,
            sx: {
              display: 'flex',
              justifyContent: 'center',
              '& a': {
                color: _colors.default.primary.bandaiNamcoBlack
              }
            },
            children: [signupLink == null ? void 0 : signupLink.text, "\xA0", (signupLink == null ? void 0 : signupLink.nextLink) || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
              href: signupLink == null ? void 0 : (_signupLink$link = signupLink.link) == null ? void 0 : _signupLink$link.href,
              children: signupLink == null ? void 0 : (_signupLink$link2 = signupLink.link) == null ? void 0 : _signupLink$link2.label
            })]
          })
        })]
      })]
    })]
  });
};

var _default = Login;
exports.default = _default;