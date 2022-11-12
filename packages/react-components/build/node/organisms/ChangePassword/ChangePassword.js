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

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconEyeOff, _IconEye, _IconCheckSuccess, _IconFailed, _IconEyeOff2, _IconEye2, _IconLoading, _IconCheckList;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TextField = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/TextField"))));

const ChangePassword = props => {
  var _errors$password$mess, _errors$password, _errors$confirmPasswo, _errors$confirmPasswo2;

  const {
    mainImage,
    mainImageMobile,
    nextImage,
    title,
    passwordField,
    confirmPasswordField,
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
      isDirty,
      isValid
    }
  } = (0, _reactHookForm.useForm)({
    mode: "onChange"
  });
  const [passwordValidator, setPasswordValidator] = (0, _react.useState)(['']);
  const [focusPassword, setFocusPassword] = (0, _react.useState)(false);
  const [, setFocusConfirmPassword] = (0, _react.useState)(false);
  const [loadingSubmit, setLoadingSubmit] = (0, _react.useState)(false);
  const [validateNotPassed, setValidateNotPassed] = (0, _react.useState)(true);
  const [password, setPassword] = (0, _react.useState)('');

  const [valuesPassword, setValuesPassword] = _react.default.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const [valuesPasswordConfirmPassword, setValuesConfirmPassword] = _react.default.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValuesPassword((0, _extends2.default)({}, valuesPassword, {
      showPassword: !valuesPassword.showPassword
    }));
  };

  const handleClickShowConfirmPassword = () => {
    setValuesConfirmPassword((0, _extends2.default)({}, valuesPasswordConfirmPassword, {
      showPassword: !valuesPasswordConfirmPassword.showPassword
    }));
  };

  (0, _react.useEffect)(() => {
    setLoadingSubmit(false);
  }, [successful]);
  (0, _react.useEffect)(() => {
    var _handleValidator;

    const handleValidator = filled => {
      const arr = [{
        regex: /(.{8,})/,
        message: 'At least 8 characters'
      }, {
        regex: /(?=.*?[a-z])/,
        message: 'At least 1 lowercase letter'
      }, {
        regex: /(?=.*?[A-Z])/,
        message: 'At least 1 uppercase letter'
      }, {
        regex: /(?=.*[!@#$%^&*])/,
        message: 'At least 1 special character'
      }, {
        regex: /(?=.*[0-9])/,
        message: 'At least 1 number'
      }];
      return arr.map(item => {
        var _item$regex;

        return {
          passed: item == null ? void 0 : (_item$regex = item.regex) == null ? void 0 : _item$regex.test(filled),
          message: item.message
        };
      });
    };

    const filter = (_handleValidator = handleValidator(password)) == null ? void 0 : _handleValidator.filter(item => item.passed === false);
    setPasswordValidator(handleValidator(password));

    if (filter.length) {
      setValidateNotPassed(true);
    } else {
      setValidateNotPassed(false);
    }
  }, [errors, password, setError]);
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
          password: getValues('password'),
          confirmPassword: getValues('confirmPassword')
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
                maxHeight: '374px'
              }
            },
            children: nextImage || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: isMobile ? mainImageMobile : mainImage,
              alt: title
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
              marginBottom: {
                xs: '40px',
                md: '36px'
              }
            },
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
            method: "POST",
            onSubmit: handleSubmit(onSubmit),
            style: {
              display: 'flex',
              flexDirection: 'column'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              sx: {
                marginBottom: {
                  xs: '14px',
                  md: focusPassword ? '14px' : '36px'
                },
                '& .MuiTextField-root': {
                  maxHeight: 'unset'
                }
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({}, passwordField, {
                onFocus: () => setFocusPassword(true),
                id: "signup-outlined-adornment-password",
                InputLabelProps: {
                  required: false
                },
                error: errors.password && !focusPassword
              }, register("password", {
                required: `${passwordField == null ? void 0 : passwordField.emptyField}`,
                onBlur: e => {
                  setFocusPassword(false);

                  if (!e.target.value) {
                    setError('password', {
                      type: 'string',
                      message: passwordField == null ? void 0 : passwordField.emptyField
                    });
                  }

                  if (validateNotPassed) {
                    setError('password', {
                      type: 'string',
                      message: passwordField == null ? void 0 : passwordField.helperText
                    });
                  }
                },
                onChange: e => {
                  var _e$target;

                  setPassword(e == null ? void 0 : (_e$target = e.target) == null ? void 0 : _e$target.value);
                }
              }), {
                helperText: (_errors$password$mess = errors == null ? void 0 : (_errors$password = errors.password) == null ? void 0 : _errors$password.message) != null ? _errors$password$mess : '',
                type: valuesPassword != null && valuesPassword.showPassword ? 'text' : 'password',
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputAdornment, {
                  position: "end",
                  sx: {
                    '& svg': {
                      color: `${_colors.default.primary.bandaiNamcoBlack} !important`
                    }
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowPassword,
                    edge: "end",
                    children: valuesPassword != null && valuesPassword.showPassword ? _IconEyeOff || (_IconEyeOff = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconEyeOff, {})) : _IconEye || (_IconEye = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconEye, {}))
                  })
                })
              })), passwordValidator && focusPassword && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                sx: {
                  marginTop: '16px',
                  padding: '0 32px',
                  '& svg': {
                    width: '15px',
                    height: '15px'
                  }
                },
                children: passwordValidator.map((item, index) => {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7.5px'
                    },
                    children: [item.passed ? _IconCheckSuccess || (_IconCheckSuccess = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconCheckSuccess, {})) : _IconFailed || (_IconFailed = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconFailed, {})), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: isMobile ? "p4" : "p6",
                      color: _colors.default.neutral.neutral2,
                      children: item.message
                    })]
                  }, index);
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                marginBottom: {
                  xs: '36px',
                  md: '40px'
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({}, confirmPasswordField, {
                onFocus: () => setFocusConfirmPassword(true),
                id: "signup-outlined-adornment-password",
                InputLabelProps: {
                  required: false
                },
                error: errors.confirmPassword && true
              }, register("confirmPassword", {
                required: confirmPasswordField == null ? void 0 : confirmPasswordField.emptyField,
                onBlur: e => {
                  setFocusConfirmPassword(false);

                  if (!e.target.value) {
                    setError('confirmPassword', {
                      type: 'string',
                      message: confirmPasswordField == null ? void 0 : confirmPasswordField.emptyField
                    });
                  }

                  if (password !== e.target.value) {
                    setError('confirmPassword', {
                      type: 'string',
                      message: confirmPasswordField == null ? void 0 : confirmPasswordField.helperText
                    });
                  }
                },
                onChange: () => {}
              }), {
                helperText: (_errors$confirmPasswo = errors == null ? void 0 : (_errors$confirmPasswo2 = errors.confirmPassword) == null ? void 0 : _errors$confirmPasswo2.message) != null ? _errors$confirmPasswo : '',
                type: valuesPasswordConfirmPassword != null && valuesPasswordConfirmPassword.showPassword ? 'text' : 'password',
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputAdornment, {
                  position: "end",
                  sx: {
                    '& svg': {
                      color: `${_colors.default.primary.bandaiNamcoBlack} !important`
                    }
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowConfirmPassword,
                    edge: "end",
                    children: valuesPasswordConfirmPassword != null && valuesPasswordConfirmPassword.showPassword ? _IconEyeOff2 || (_IconEyeOff2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconEyeOff, {})) : _IconEye2 || (_IconEye2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconEye, {}))
                  })
                })
              }))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                width: '100%',
                marginTop: '24px',
                marginBottom: '24px'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, sendButton, {
                disabled: loadingSubmit || successful || validateNotPassed && !isDirty || !isValid,
                variant: loadingSubmit || successful || validateNotPassed && !isDirty || !isValid ? 'primary' : 'primaryDark',
                type: "submit",
                onClick: e => successful ? e.preventDefault : '',
                sx: {
                  backgroundColor: successful && `${_colors.default.secondary.bandaiNamcoGreen} !important` || loadingSubmit && `${_colors.default.primary.bandaiNamcoRed} !important` || '',
                  userSelect: successful ? 'none' : 'auto',
                  '&:hover': {
                    backgroundColor: successful ? _colors.default.secondary.bandaiNamcoGreen : ''
                  },
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
                label: loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {}))) || successful && (_IconCheckList || (_IconCheckList = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconCheckList, {}))) || (sendButton == null ? void 0 : sendButton.label) || 'Log in'
              }))
            })]
          })]
        })]
      })
    })
  });
};

var _default = ChangePassword;
exports.default = _default;