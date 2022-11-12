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

var _material = require("@mui/material");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconEyeOff, _IconEye, _IconCheckSuccess, _IconFailed, _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TextField = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/TextField"))));

const Signup = props => {
  var _errors$firstName, _errors$lastName, _emailField$helperTex, _errors$email, _errors$password, _policyAndTerms$polic, _policyAndTerms$polic2, _policyAndTerms$terms, _policyAndTerms$terms2, _loginLink$link, _loginLink$link2;

  const {
    mainImage,
    mainImageMobile,
    nextImage,
    alt,
    title,
    description,
    firstNameField,
    lastNameField,
    emailField,
    passwordField,
    acceptNewsCheckbox,
    policyAndTerms,
    signupButton,
    loginLink,
    nextLink,
    openPopupSuccessful = false,
    onClose,
    popupSuccessful,
    onSubcribe = () => {},
    errorEmailMessage
  } = props;
  const isMobile = (0, _useMediaQuery.default)(themes => themes.breakpoints.down('sm'));
  const {
    register,
    resetField,
    getValues,
    handleSubmit,
    setError,
    clearErrors,
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
  const [loadingSubmit, setLoadingSubmit] = (0, _react.useState)(false);
  const [validateNotPassed, setValidateNotPassed] = (0, _react.useState)(true);
  const [password, setPassword] = (0, _react.useState)('');
  const [successful, setSuccessful] = (0, _react.useState)(openPopupSuccessful);
  (0, _react.useEffect)(() => {
    if (errorEmailMessage) {
      resetField('password');
      setError('email', {
        type: 'string',
        message: errorEmailMessage
      });
      setError('password', {
        type: 'string',
        message: passwordField.emptyField
      });
      setLoadingSubmit(false);
      setPassword('');
    }
  }, [errorEmailMessage, passwordField.emptyField, resetField, setError]);
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
  }, [clearErrors, errorEmailMessage, errors, password, setError]);

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

  const renderIconClose = (0, _react.useMemo)(() => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
      htmlColor: _colors.default.otherColor.silver,
      id: "icon-close",
      sx: {
        position: 'absolute',
        top: {
          xs: "30px",
          md: "'34px'"
        },
        right: {
          xs: "30px",
          md: "'34px'"
        },
        cursor: 'pointer'
      },
      onClick: () => onClose == null ? void 0 : onClose()
    });
  }, [onClose]);
  /**
      * Run after submit Form
  */

  const onSubmit = async () => {
    setLoadingSubmit(true);

    try {
      const {
        handler
      } = signupButton;

      if (typeof handler === 'function') {
        const dataForm = {
          firstName: getValues('firstName'),
          lastName: getValues('lastName'),
          email: getValues('email'),
          password: getValues('password')
        };
        await handler(undefined, props, dataForm).then(res => {
          if (res.status === '200' || res.status === 200) {// console.log("Successful")
          } // console.log("Failed")

        });
      }
    } catch (error) {// setLoadingSubmit(false);
    }
  };

  (0, _react.useEffect)(() => {
    setLoadingSubmit(false);

    if (openPopupSuccessful) {
      setSuccessful(true);
    }
  }, [openPopupSuccessful]);
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: openPopupSuccessful,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: {
            md: "520px",
            xs: "100%"
          },
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          id: "box-modal-sa",
          sx: {
            position: 'relative',
            backgroundColor: _colors.default.neutral.white,
            borderRadius: '20px',
            minHeight: {
              xs: "324px",
              md: "365px"
            },
            maxHeight: '90%',
            maxWidth: {
              xs: "311px",
              md: "100%"
            },
            width: '100%',
            display: "flex",
            flexDirection: "column",
            padding: {
              xs: "56px 28px 52px",
              md: "64px 27.5px 60px"
            },
            overflow: 'auto',
            '& .MuiTypography-root': {
              paddingLeft: '0px',
              paddingRight: '0px'
            }
          },
          color: _colors.default.secondaryGray.shade600,
          children: [renderIconClose, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              textAlign: 'center',
              marginBottom: {
                xs: '16px',
                md: '40px'
              },
              '& img': {
                width: {
                  xs: '99px',
                  md: '165px'
                },
                height: {
                  xs: '88px',
                  md: '146px'
                }
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: popupSuccessful == null ? void 0 : popupSuccessful.image,
              alt: ""
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            color: _colors.default.primary.bandaiNamcoBlack,
            sx: {
              textAlign: "center",
              letterSpacing: {
                xs: "-0.4px",
                md: "-0.8px"
              },
              marginBottom: {
                xs: "16px",
                md: "8px"
              }
            },
            children: popupSuccessful == null ? void 0 : popupSuccessful.title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p8",
            sx: {
              fontSize: "14px",
              lineHeight: {
                xs: "20px",
                md: "19px"
              },
              textAlign: "center",
              marginBottom: {
                xs: "32px",
                md: "40px"
              }
            },
            children: popupSuccessful == null ? void 0 : popupSuccessful.description
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: 'column',
              justifyContent: "center",
              alignItems: "center",
              gap: '12px'
            },
            children: popupSuccessful == null ? void 0 : popupSuccessful.button.map((item, index) => {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                variant: index === 0 ? 'primaryDark' : 'secondary',
                externalLink: item.externalLink,
                target: item.target,
                sx: {
                  width: "204px",
                  fontSize: {
                    xs: "14px",
                    md: "16px"
                  }
                },
                children: item.label
              });
            })
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          flex: '1 1 100%',
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
            marginBottom: '32px'
          },
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p4",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack,
            textAlign: {
              xs: 'center',
              md: 'left'
            },
            marginBottom: '32px'
          },
          children: description
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          method: "POST",
          onSubmit: handleSubmit(onSubmit),
          style: {
            display: 'flex',
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              '& .MuiTextField-root': {
                maxHeight: 'unset !important'
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({
                InputLabelProps: {
                  required: false
                }
              }, firstNameField, {
                error: errors.firstName && true
              }, register("firstName", {
                required: `${firstNameField == null ? void 0 : firstNameField.emptyField}`,
                onBlur: e => {
                  if (!e.target.value) {
                    setError('firstName', {
                      type: 'string',
                      message: firstNameField == null ? void 0 : firstNameField.emptyField
                    });
                  }
                }
              }), {
                helperText: errors == null ? void 0 : (_errors$firstName = errors.firstName) == null ? void 0 : _errors$firstName.message
              }))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({
                InputLabelProps: {
                  required: false
                }
              }, lastNameField, {
                error: errors.lastName && true
              }, register("lastName", {
                required: `${lastNameField == null ? void 0 : lastNameField.emptyField}`,
                onBlur: e => {
                  if (!e.target.value) {
                    setError('lastName', {
                      type: 'string',
                      message: lastNameField.emptyField
                    });
                  }
                }
              }), {
                helperText: errors == null ? void 0 : (_errors$lastName = errors.lastName) == null ? void 0 : _errors$lastName.message
              }))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
                  message: (_emailField$helperTex = emailField == null ? void 0 : emailField.helperText) != null ? _emailField$helperTex : ''
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
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(TextField, (0, _extends2.default)({}, passwordField, {
                onFocus: () => setFocusPassword(true),
                error: errors.password && !focusPassword,
                id: "signup-outlined-adornment-password",
                InputLabelProps: {
                  required: false
                }
              }, register("password", {
                required: false,
                onBlur: e => {
                  setFocusPassword(false);

                  if (validateNotPassed) {
                    setError('password', {
                      type: 'string',
                      message: `${passwordField == null ? void 0 : passwordField.helperText}`
                    });
                    e.preventDefault();
                  }

                  if (!password) {
                    setError('password', {
                      type: 'string',
                      message: `${passwordField == null ? void 0 : passwordField.emptyField}`
                    });
                    e.preventDefault();
                  }
                },
                onChange: e => {
                  setPassword(e.target.value);
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
          }), passwordValidator && focusPassword && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              marginTop: '16px',
              marginBottom: '32px'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
                onChange: e => onSubcribe(e)
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p9",
              color: _colors.default.primary.dark,
              children: acceptNewsCheckbox == null ? void 0 : acceptNewsCheckbox.label
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
              component: "p",
              color: _colors.default.primary.dark,
              sx: {
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: {
                  xs: '20px',
                  md: '19px'
                },
                textAlign: 'left',
                color: _colors.default.neutral.neutral2
              },
              children: [policyAndTerms == null ? void 0 : policyAndTerms.text, "\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
                href: policyAndTerms == null ? void 0 : (_policyAndTerms$polic = policyAndTerms.policy) == null ? void 0 : _policyAndTerms$polic.href,
                color: _colors.default.primary.bandaiNamcoBlack,
                children: policyAndTerms == null ? void 0 : (_policyAndTerms$polic2 = policyAndTerms.policy) == null ? void 0 : _policyAndTerms$polic2.label
              }), "\xA0and\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
                href: policyAndTerms == null ? void 0 : (_policyAndTerms$terms = policyAndTerms.terms) == null ? void 0 : _policyAndTerms$terms.href,
                color: _colors.default.primary.bandaiNamcoBlack,
                children: policyAndTerms == null ? void 0 : (_policyAndTerms$terms2 = policyAndTerms.terms) == null ? void 0 : _policyAndTerms$terms2.label
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              width: '100%',
              marginTop: '24px',
              marginBottom: '24px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, signupButton, {
              disabled: loadingSubmit || successful || !isDirty || !isValid || !!Object.keys(errors).length || validateNotPassed,
              variant: loadingSubmit || successful || !isDirty || !isValid || !!Object.keys(errors).length || validateNotPassed ? 'primary' : 'primaryDark',
              type: "submit",
              sx: {
                backgroundColor: loadingSubmit || successful ? `${_colors.default.primary.bandaiNamcoRed} !important` : '',
                color: successful ? `${_colors.default.primary.bandaiNamcoWhite} !important` : '',
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
              label: loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {}))) || (signupButton == null ? void 0 : signupButton.label)
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
              children: [loginLink == null ? void 0 : loginLink.text, "\xA0", nextLink || /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
                href: loginLink == null ? void 0 : (_loginLink$link = loginLink.link) == null ? void 0 : _loginLink$link.href,
                children: loginLink == null ? void 0 : (_loginLink$link2 = loginLink.link) == null ? void 0 : _loginLink$link2.label
              })]
            })
          })]
        })]
      })
    })]
  });
};

var _default = Signup;
exports.default = _default;