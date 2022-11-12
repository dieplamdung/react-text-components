import _extends from "@babel/runtime/helpers/esm/extends";

var _IconEyeOff, _IconEye, _IconCheckSuccess, _IconFailed, _IconEyeOff2, _IconEye2, _IconLoading, _IconCheckList;

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
const TextField = loadable(() => import("../../molecules/TextField"));

const ChangePassword = props => {
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
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('md'));
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
  } = useForm({
    mode: "onChange"
  });
  const [passwordValidator, setPasswordValidator] = useState(['']);
  const [focusPassword, setFocusPassword] = useState(false);
  const [, setFocusConfirmPassword] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [validateNotPassed, setValidateNotPassed] = useState(true);
  const [password, setPassword] = useState('');
  const [valuesPassword, setValuesPassword] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });
  const [valuesPasswordConfirmPassword, setValuesConfirmPassword] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValuesPassword(_extends({}, valuesPassword, {
      showPassword: !valuesPassword.showPassword
    }));
  };

  const handleClickShowConfirmPassword = () => {
    setValuesConfirmPassword(_extends({}, valuesPasswordConfirmPassword, {
      showPassword: !valuesPasswordConfirmPassword.showPassword
    }));
  };

  useEffect(() => {
    setLoadingSubmit(false);
  }, [successful]);
  useEffect(() => {
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
        return {
          passed: item?.regex?.test(filled),
          message: item.message
        };
      });
    };

    const filter = handleValidator(password)?.filter(item => item.passed === false);
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
                onFocus: () => setFocusPassword(true),
                id: "signup-outlined-adornment-password",
                InputLabelProps: {
                  required: false
                },
                error: errors.password && !focusPassword
              }, register("password", {
                required: `${passwordField?.emptyField}`,
                onBlur: e => {
                  setFocusPassword(false);

                  if (!e.target.value) {
                    setError('password', {
                      type: 'string',
                      message: passwordField?.emptyField
                    });
                  }

                  if (validateNotPassed) {
                    setError('password', {
                      type: 'string',
                      message: passwordField?.helperText
                    });
                  }
                },
                onChange: e => {
                  setPassword(e?.target?.value);
                }
              }), {
                helperText: errors?.password?.message ?? '',
                type: valuesPassword?.showPassword ? 'text' : 'password',
                icon: /*#__PURE__*/_jsx(InputAdornment, {
                  position: "end",
                  sx: {
                    '& svg': {
                      color: `${colors.primary.bandaiNamcoBlack} !important`
                    }
                  },
                  children: /*#__PURE__*/_jsx(IconButton, {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowPassword,
                    edge: "end",
                    children: valuesPassword?.showPassword ? _IconEyeOff || (_IconEyeOff = /*#__PURE__*/_jsx(IconEyeOff, {})) : _IconEye || (_IconEye = /*#__PURE__*/_jsx(IconEye, {}))
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
                children: passwordValidator.map((item, index) => {
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
                onFocus: () => setFocusConfirmPassword(true),
                id: "signup-outlined-adornment-password",
                InputLabelProps: {
                  required: false
                },
                error: errors.confirmPassword && true
              }, register("confirmPassword", {
                required: confirmPasswordField?.emptyField,
                onBlur: e => {
                  setFocusConfirmPassword(false);

                  if (!e.target.value) {
                    setError('confirmPassword', {
                      type: 'string',
                      message: confirmPasswordField?.emptyField
                    });
                  }

                  if (password !== e.target.value) {
                    setError('confirmPassword', {
                      type: 'string',
                      message: confirmPasswordField?.helperText
                    });
                  }
                },
                onChange: () => {}
              }), {
                helperText: errors?.confirmPassword?.message ?? '',
                type: valuesPasswordConfirmPassword?.showPassword ? 'text' : 'password',
                icon: /*#__PURE__*/_jsx(InputAdornment, {
                  position: "end",
                  sx: {
                    '& svg': {
                      color: `${colors.primary.bandaiNamcoBlack} !important`
                    }
                  },
                  children: /*#__PURE__*/_jsx(IconButton, {
                    "aria-label": "toggle password visibility",
                    onClick: handleClickShowConfirmPassword,
                    edge: "end",
                    children: valuesPasswordConfirmPassword?.showPassword ? _IconEyeOff2 || (_IconEyeOff2 = /*#__PURE__*/_jsx(IconEyeOff, {})) : _IconEye2 || (_IconEye2 = /*#__PURE__*/_jsx(IconEye, {}))
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
                onClick: e => successful ? e.preventDefault : '',
                sx: {
                  backgroundColor: successful && `${colors.secondary.bandaiNamcoGreen} !important` || loadingSubmit && `${colors.primary.bandaiNamcoRed} !important` || '',
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
                label: loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))) || successful && (_IconCheckList || (_IconCheckList = /*#__PURE__*/_jsx(IconCheckList, {}))) || sendButton?.label || 'Log in'
              }))
            })]
          })]
        })]
      })
    })
  });
};

export default ChangePassword;