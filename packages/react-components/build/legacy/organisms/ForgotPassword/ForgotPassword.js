import _extends from "@babel/runtime/helpers/esm/extends";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconCheckList, _IconLoading;

import _regeneratorRuntime from "@babel/runtime/regenerator";
// import Modules
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import loadable from '@loadable/component';
import Typography from "../../atoms/Typography";
import { useForm } from "react-hook-form";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";
import { IconCheckList, IconLoading } from "../../atoms/Icon"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var TextField = loadable(function () {
  return import("../../molecules/TextField");
});

var ForgotPassword = function ForgotPassword(props) {
  var _emailField$helperTex, _errors$email;

  var mainImage = props.mainImage,
      mainImageMobile = props.mainImageMobile,
      nextImage = props.nextImage,
      alt = props.alt,
      title = props.title,
      description = props.description,
      emailField = props.emailField,
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
      isValid = _useForm$formState.isValid,
      isDirty = _useForm$formState.isDirty;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loadingSubmit = _useState2[0],
      setLoadingSubmit = _useState2[1];
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
                email: getValues('email')
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
                maxHeight: '374px' // height: 'auto',

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
              marginBottom: '16px'
            },
            children: title
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p4",
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
            children: description
          }), /*#__PURE__*/_jsxs("form", {
            method: "POST",
            onSubmit: handleSubmit(onSubmit),
            style: {
              display: 'flex',
              flexDirection: 'column'
            },
            children: [/*#__PURE__*/_jsx(Box, {
              sx: errors != null && errors.email ? {
                marginBottom: '20px'
              } : {},
              children: /*#__PURE__*/_jsx(TextField, _extends({
                InputLabelProps: {
                  required: false
                }
              }, emailField, {
                error: errors.email && true
              }, register("email", {
                required: "".concat(emailField == null ? void 0 : emailField.emptyField),
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: (_emailField$helperTex = emailField == null ? void 0 : emailField.helperText) != null ? _emailField$helperTex : 'sd'
                },
                onBlur: function onBlur(e) {
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
            }), /*#__PURE__*/_jsx(Box, {
              sx: {
                width: '100%',
                marginTop: '24px',
                marginBottom: '24px'
              },
              children: /*#__PURE__*/_jsx(Button, _extends({}, sendButton, {
                disabled: loadingSubmit || !isValid || !isDirty,
                variant: loadingSubmit || !isValid || !isDirty ? 'primary' : 'primaryDark',
                type: "submit",
                sx: {
                  backgroundColor: successful && "".concat(colors.secondary.bandaiNamcoGreen, " !important") || loadingSubmit && "".concat(colors.primary.bandaiNamcoRed, " !important") || '',
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
                label: successful && (_IconCheckList || (_IconCheckList = /*#__PURE__*/_jsx(IconCheckList, {}))) || loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))) || (sendButton == null ? void 0 : sendButton.label) || ''
              }))
            })]
          })]
        })]
      })
    })
  });
};

export default ForgotPassword;