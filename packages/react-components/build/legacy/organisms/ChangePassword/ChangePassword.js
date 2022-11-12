import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconEyeOff, _IconEye, _IconCheckSuccess, _IconFailed, _IconEyeOff2, _IconEye2, _IconLoading, _IconCheckList;

import _regeneratorRuntime from "@babel/runtime/regenerator";
// import Modules
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import loadable from '@loadable/component';
import Typography from "../../atoms/Typography";
import { useForm } from "react-hook-form";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";
import { IconCheckList, IconCheckSuccess, IconEye, IconEyeOff, IconFailed, IconLoading } from "../../atoms/Icon";
import { IconButton, InputAdornment } from '@mui/material'; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var TextField = loadable(function () {
  return import("../../molecules/TextField");
});

var ChangePassword = function ChangePassword(props) {
  var _errors$password$mess, _errors$password, _errors$confirmPasswo, _errors$confirmPasswo2;

  var mainImage = props.mainImage,
      mainImageMobile = props.mainImageMobile,
      nextImage = props.nextImage,
      title = props.title,
      passwordField = props.passwordField,
      confirmPasswordField = props.confirmPasswordField,
      sendButton = props.sendButton,
      successful = props.successful;
  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('md');
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
      isDirty = _useForm$formState.isDirty,
      isValid = _useForm$formState.isValid;

  var _useState = useState(['']),
      _useState2 = _slicedToArray(_useState, 2),
      passwordValidator = _useState2[0],
      setPasswordValidator = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focusPassword = _useState4[0],
      setFocusPassword = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      setFocusConfirmPassword = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loadingSubmit = _useState8[0],
      setLoadingSubmit = _useState8[1];

  var _useState9 = useState(true),
      _useState10 = _slicedToArray(_useState9, 2),
      validateNotPassed = _useState10[0],
      setValidateNotPassed = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      password = _useState12[0],
      setPassword = _useState12[1];

  var _React$useState = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      valuesPassword = _React$useState2[0],
      setValuesPassword = _React$useState2[1];

  var _React$useState3 = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      valuesPasswordConfirmPassword = _React$useState4[0],
      setValuesConfirmPassword = _React$useState4[1];

  var handleClickShowPassword = function handleClickShowPassword() {
    setValuesPassword(_extends({}, valuesPassword, {
      showPassword: !valuesPassword.showPassword
    }));
  };

  var handleClickShowConfirmPassword = function handleClickShowConfirmPassword() {
    setValuesConfirmPassword(_extends({}, valuesPasswordConfirmPassword, {
      showPassword: !valuesPasswordConfirmPassword.showPassword
    }));
  };

  useEffect(function () {
    setLoadingSubmit(false);
  }, [successful]);
  useEffect(function () {
    var _handleValidator;

    var handleValidator = function handleValidator(filled) {
      var arr = [{
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
      return arr.map(function (item) {
        var _item$regex;

        return {
          passed: item == null ? void 0 : (_item$regex = item.regex) == null ? void 0 : _item$regex.test(filled),
          message: item.message
        };
      });
    };

    var filter = (_handleValidator = handleValidator(password)) == null ? void 0 : _handleValidator.filter(function (item) {
      return item.passed === false;
    });
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

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _yield$sendButton, handler, dataForm;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoadingSubmit(true);
              _context.prev = 1;
              _context.next = 4;
              return sendButton;

            case 4:
              _yield$sendButton = _context.sent;
              handler = _yield$sendButton.handler;

              if (!(typeof handler === 'function')) {
                _context.next = 10;
                break;
              }

              dataForm = {
                password: getValues('password'),
                confirmPassword: getValues('confirmPassword')
              };
              _context.next = 10;
              return handler(undefined, props, dataForm);

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              setLoadingSubmit(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_jsx(Box, {
    children: /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsxs(Box, {
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
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            flex: '1 1 100%',
            maxWidth: {
              xs: '100%',
              md: '488px'
            },
            height: '100%'
          },
          children: /*#__PURE__*/_jsx(Box, {
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
            children: nextImage || /*#__PURE__*/_jsx("img", {
              src: isMobile ? mainImageMobile : mainImage,
              alt: title
            })
          })
        }), /*#__PURE__*/_jsxs(Box, {
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
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            sx: {
              color: colors.primary.bandaiNamcoBlack,
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
          }), /*#__PURE__*/_jsxs("form", {
            method: "POST",
            onSubmit: handleSubmit(onSubmit),
            style: {
              display: 'flex',
              flexDirection: 'column'
            },
            children: [/*#__PURE__*/_jsxs(Box, {
              sx: {
                marginBottom: {
                  xs: '14px',
                  md: focusPassword ? '14px' : '36px'
                },
                '& .MuiTextField-root': {
                  maxHeight: 'unset'
                }
              },
              children: [/*#__PURE__*/_jsx(TextField, _extends({}, passwordField, {
                onFocus: function onFocus() {
                  return setFocusPassword(true);
                },
                id: "signup-outlined-adornment-password",
                InputLabelProps: {
                  required: false
                },
                error: errors.password && !focusPassword
              }, register("password", {
                required: "".concat(passwordField == null ? void 0 : passwordField.emptyField),
                onBlur: function onBlur(e) {
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
                onChange: function onChange(e) {
                  var _e$target;

                  setPassword(e == null ? void 0 : (_e$target = e.target) == null ? void 0 : _e$target.value);
                }
              }), {
                helperText: (_errors$password$mess = errors == null ? void 0 : (_errors$password = errors.password) == null ? void 0 : _errors$password.message) != null ? _errors$password$mess : '',
                type: valuesPassword != null && valuesPassword.showPassword ? 'text' : 'password',
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
                    children: valuesPassword != null && valuesPassword.showPassword ? _IconEyeOff || (_IconEyeOff = /*#__PURE__*/_jsx(IconEyeOff, {})) : _IconEye || (_IconEye = /*#__PURE__*/_jsx(IconEye, {}))
                  })
                })
              })), passwordValidator && focusPassword && /*#__PURE__*/_jsx(Box, {
                sx: {
                  marginTop: '16px',
                  padding: '0 32px',
                  '& svg': {
                    width: '15px',
                    height: '15px'
                  }
                },
                children: passwordValidator.map(function (item, index) {
                  return /*#__PURE__*/_jsxs(Box, {
                    sx: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7.5px'
                    },
                    children: [item.passed ? _IconCheckSuccess || (_IconCheckSuccess = /*#__PURE__*/_jsx(IconCheckSuccess, {})) : _IconFailed || (_IconFailed = /*#__PURE__*/_jsx(IconFailed, {})), /*#__PURE__*/_jsx(Typography, {
                      variant: isMobile ? "p4" : "p6",
                      color: colors.neutral.neutral2,
                      children: item.message
                    })]
                  }, index);
                })
              })]
            }), /*#__PURE__*/_jsx(Box, {
              sx: {
                marginBottom: {
                  xs: '36px',
                  md: '40px'
                }
              },
              children: /*#__PURE__*/_jsx(TextField, _extends({}, confirmPasswordField, {
                onFocus: function onFocus() {
                  return setFocusConfirmPassword(true);
                },
                id: "signup-outlined-adornment-password",
                InputLabelProps: {
                  required: false
                },
                error: errors.confirmPassword && true
              }, register("confirmPassword", {
                required: confirmPasswordField == null ? void 0 : confirmPasswordField.emptyField,
                onBlur: function onBlur(e) {
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
                onChange: function onChange() {}
              }), {
                helperText: (_errors$confirmPasswo = errors == null ? void 0 : (_errors$confirmPasswo2 = errors.confirmPassword) == null ? void 0 : _errors$confirmPasswo2.message) != null ? _errors$confirmPasswo : '',
                type: valuesPasswordConfirmPassword != null && valuesPasswordConfirmPassword.showPassword ? 'text' : 'password',
                icon: /*#__PURE__*/_jsx(InputAdornment, {
                  position: "end",
                  sx: {
                    '& svg': {
                      color: "".concat(colors.primary.bandaiNamcoBlack, " !important")
                    }
                  },
                  children: /*#__PURE__*/_jsx(IconButton, {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowConfirmPassword,
                    edge: "end",
                    children: valuesPasswordConfirmPassword != null && valuesPasswordConfirmPassword.showPassword ? _IconEyeOff2 || (_IconEyeOff2 = /*#__PURE__*/_jsx(IconEyeOff, {})) : _IconEye2 || (_IconEye2 = /*#__PURE__*/_jsx(IconEye, {}))
                  })
                })
              }))
            }), /*#__PURE__*/_jsx(Box, {
              sx: {
                width: '100%',
                marginTop: '24px',
                marginBottom: '24px'
              },
              children: /*#__PURE__*/_jsx(Button, _extends({}, sendButton, {
                disabled: loadingSubmit || successful || validateNotPassed && !isDirty || !isValid,
                variant: loadingSubmit || successful || validateNotPassed && !isDirty || !isValid ? 'primary' : 'primaryDark',
                type: "submit",
                onClick: function onClick(e) {
                  return successful ? e.preventDefault : '';
                },
                sx: {
                  backgroundColor: successful && "".concat(colors.secondary.bandaiNamcoGreen, " !important") || loadingSubmit && "".concat(colors.primary.bandaiNamcoRed, " !important") || '',
                  userSelect: successful ? 'none' : 'auto',
                  '&:hover': {
                    backgroundColor: successful ? colors.secondary.bandaiNamcoGreen : ''
                  },
                  '& svg': {
                    color: colors.primary.bandaiNamcoWhite,
                    '& path': {
                      stroke: colors.secondary.bandaiNamcoGreen,
                      fill: 'transparent !important'
                    },
                    '& rect': {
                      fill: colors.primary.bandaiNamcoWhite
                    }
                  }
                },
                label: loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))) || successful && (_IconCheckList || (_IconCheckList = /*#__PURE__*/_jsx(IconCheckList, {}))) || (sendButton == null ? void 0 : sendButton.label) || 'Log in'
              }))
            })]
          })]
        })]
      })
    })
  });
};

export default ChangePassword;