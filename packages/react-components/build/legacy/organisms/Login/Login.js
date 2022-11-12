import _extends from "@babel/runtime/helpers/esm/extends";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconEyeOff, _IconEye, _IconLoading;

import _regeneratorRuntime from "@babel/runtime/regenerator";
// import Modules
import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import loadable from '@loadable/component';
import Typography from "../../atoms/Typography";
import { useForm } from "react-hook-form";
import Checkbox from "../../atoms/Checkbox";
import Button from "../../atoms/Button";
import { IconEyeOff, IconLoading, IconEye } from "../../atoms/Icon"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var TextField = loadable(function () {
  return import("../../molecules/TextField");
});

var Login = function Login(props) {
  var _emailField$helperTex, _errors$email, _errors$password, _signupLink$link, _signupLink$link2;

  var mainImage = props.mainImage,
      mainImageMobile = props.mainImageMobile,
      alt = props.alt,
      title = props.title,
      nextImage = props.nextImage,
      loginButton = props.loginButton,
      signupLink = props.signupLink,
      emailField = props.emailField,
      passwordField = props.passwordField,
      rememberLogged = props.rememberLogged,
      warning = props.warning,
      forgotPasswordLink = props.forgotPasswordLink,
      _props$isKeepLogin = props.isKeepLogin,
      isKeepLogin = _props$isKeepLogin === void 0 ? function () {} : _props$isKeepLogin;
  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('sm');
  });

  var _useForm = useForm({
    mode: "onChange"
  }),
      register = _useForm.register,
      getValues = _useForm.getValues,
      handleSubmit = _useForm.handleSubmit,
      setError = _useForm.setError,
      _useForm$formState = _useForm.formState,
      errors = _useForm$formState.errors,
      isValid = _useForm$formState.isValid,
      isDirty = _useForm$formState.isDirty;

  var refForm = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loadingSubmit = _useState2[0],
      setLoadingSubmit = _useState2[1];

  useEffect(function () {
    if (warning) {
      setLoadingSubmit(false);
    }
  }, [warning]);
  /**
      * Run after submit Form
  */

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var handler, dataForm;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoadingSubmit(true);
              _context.prev = 1;
              handler = loginButton.handler;

              if (!(typeof handler === 'function')) {
                _context.next = 7;
                break;
              }

              dataForm = {
                email: getValues('email'),
                password: getValues('password'),
                isKeepLogin: getValues('isKeepLogin')
              };
              _context.next = 7;
              return handler(undefined, props, dataForm).then(function (res) {
                if (res.status === '200' || res.status === 200) {// console.log("Successful")
                } // console.log("Failed")

              });

            case 7:
              _context.next = 11;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var _React$useState = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleClickShowPassword = function handleClickShowPassword() {
    setValues(_extends({}, values, {
      showPassword: !values.showPassword
    }));
  };

  return /*#__PURE__*/_jsxs(Box, {
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
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        flex: '1 1 100%',
        maxWidth: '442px',
        height: '100%'
      },
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          position: 'relative',
          maxWidth: '100%',
          '& img': {
            objectFit: 'cover',
            maxWidth: '100%',
            height: 'auto'
          }
        },
        children: nextImage || /*#__PURE__*/_jsx("img", {
          src: isMobile ? mainImageMobile : mainImage,
          alt: alt
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
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
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
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
      }), warning && /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        sx: {
          borderRadius: '10px',
          color: colors.primary.dark,
          backgroundColor: 'rgba(230, 0, 0, 0.1);',
          padding: {
            xs: '14px 32px',
            md: '14px 18px'
          },
          textAlign: 'left',
          marginBottom: '32px'
        },
        children: warning
      }), /*#__PURE__*/_jsxs("form", {
        method: "POST",
        onSubmit: handleSubmit(onSubmit),
        style: {
          display: 'flex',
          flexDirection: 'column'
        },
        autoComplete: "off",
        children: [/*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          },
          ref: refForm,
          children: [/*#__PURE__*/_jsx(Box, {
            sx: errors != null && errors.email ? {
              marginBottom: '20px'
            } : {},
            children: /*#__PURE__*/_jsx(TextField, _extends({
              id: "outlined-adornment-email",
              InputLabelProps: {
                required: false
              }
            }, emailField, {
              error: errors.email && true
            }, register("email", {
              required: "".concat(emailField.emptyField),
              pattern: {
                // eslint-disable-next-line no-useless-escape
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: (_emailField$helperTex = emailField == null ? void 0 : emailField.helperText) != null ? _emailField$helperTex : ''
              },
              onBlur: function onBlur(e) {
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
          }), /*#__PURE__*/_jsx(Box, {
            sx: errors != null && errors.password ? {
              marginBottom: '20px'
            } : {},
            children: /*#__PURE__*/_jsx(TextField, _extends({}, passwordField, {
              id: "outlined-adornment-password",
              InputLabelProps: {
                required: false
              },
              error: errors.password && true
            }, register("password", {
              required: "".concat(passwordField.emptyField),
              onBlur: function onBlur(e) {
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
              icon: /*#__PURE__*/_jsx(InputAdornment, {
                position: "end",
                sx: {
                  '& svg': {
                    color: "".concat(colors.primary.bandaiNamcoBlack, " !important")
                  }
                },
                children: /*#__PURE__*/_jsx(IconButton, {
                  "aria-label": "toggle password visibility",
                  onClick: handleClickShowPassword,
                  edge: "end",
                  children: values.showPassword ? _IconEyeOff || (_IconEyeOff = /*#__PURE__*/_jsx(IconEyeOff, {})) : _IconEye || (_IconEye = /*#__PURE__*/_jsx(IconEye, {}))
                })
              })
            }))
          })]
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            textAlign: 'right',
            marginTop: '16px',
            marginBottom: '32px'
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p9",
            sx: {
              color: colors.primary.bandaiNamcoBlack,
              '& a': {
                color: colors.primary.bandaiNamcoBlack
              }
            },
            children: (forgotPasswordLink == null ? void 0 : forgotPasswordLink.nextLink) || /*#__PURE__*/_jsx(Link, {
              href: forgotPasswordLink == null ? void 0 : forgotPasswordLink.href,
              sx: {
                display: 'inline-block'
              },
              children: forgotPasswordLink == null ? void 0 : forgotPasswordLink.label
            })
          })
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/_jsx(Box, {
            children: /*#__PURE__*/_jsx(Checkbox, {
              onChange: function onChange(e) {
                return isKeepLogin(e);
              }
            })
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p9",
            color: colors.primary.dark,
            children: rememberLogged
          })]
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            width: '100%',
            marginTop: '24px',
            marginBottom: '24px'
          },
          children: /*#__PURE__*/_jsx(Button, _extends({}, loginButton, {
            disabled: loadingSubmit || !isValid || !isDirty,
            variant: loadingSubmit || !isValid || !isDirty ? 'primary' : 'primaryDark',
            type: "submit",
            sx: {
              backgroundColor: loadingSubmit && "".concat(colors.primary.bandaiNamcoRed, " !important") || '',
              '& svg': {
                color: colors.primary.bandaiNamcoWhite,
                '& path': {
                  stroke: colors.secondary.bandaiNamcoGreen
                },
                '& rect': {
                  fill: colors.primary.bandaiNamcoWhite
                }
              }
            },
            label: loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))) || (loginButton == null ? void 0 : loginButton.label)
          }))
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            width: '100%',
            textAlign: 'center'
          },
          children: /*#__PURE__*/_jsxs(Typography, {
            variant: "p8",
            color: colors.neutral.neutral2,
            sx: {
              display: 'flex',
              justifyContent: 'center',
              '& a': {
                color: colors.primary.bandaiNamcoBlack
              }
            },
            children: [signupLink == null ? void 0 : signupLink.text, "\xA0", (signupLink == null ? void 0 : signupLink.nextLink) || /*#__PURE__*/_jsx(Link, {
              href: signupLink == null ? void 0 : (_signupLink$link = signupLink.link) == null ? void 0 : _signupLink$link.href,
              children: signupLink == null ? void 0 : (_signupLink$link2 = signupLink.link) == null ? void 0 : _signupLink$link2.label
            })]
          })
        })]
      })]
    })]
  });
};

export default Login;