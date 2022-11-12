import _extends from "@babel/runtime/helpers/esm/extends";

var _IconEyeOff, _IconEye, _IconCheckSuccess, _IconFailed, _IconLoading;

// import Modules
import React, { useState, useEffect, useMemo } from 'react';
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
import { IconCheckSuccess, IconClose, IconEyeOff, IconEye, IconFailed, IconLoading } from "../../atoms/Icon";
import { Modal } from '@mui/material';
import Container from "../../atoms/Container"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const TextField = loadable(() => import("../../molecules/TextField"));

const Signup = props => {
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
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('sm'));
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
  } = useForm({
    mode: "onChange"
  });
  const [passwordValidator, setPasswordValidator] = useState(['']);
  const [focusPassword, setFocusPassword] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [validateNotPassed, setValidateNotPassed] = useState(true);
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(openPopupSuccessful);
  useEffect(() => {
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
  }, [clearErrors, errorEmailMessage, errors, password, setError]);
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues(_extends({}, values, {
      showPassword: !values.showPassword
    }));
  };

  const renderIconClose = useMemo(() => {
    return /*#__PURE__*/_jsx(IconClose, {
      htmlColor: colors.otherColor.silver,
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
      onClick: () => onClose?.()
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

  useEffect(() => {
    setLoadingSubmit(false);

    if (openPopupSuccessful) {
      setSuccessful(true);
    }
  }, [openPopupSuccessful]);
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
    children: [/*#__PURE__*/_jsx(Modal, {
      open: openPopupSuccessful,
      children: /*#__PURE__*/_jsx(Box, {
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
        children: /*#__PURE__*/_jsxs(Box, {
          id: "box-modal-sa",
          sx: {
            position: 'relative',
            backgroundColor: colors.neutral.white,
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
          color: colors.secondaryGray.shade600,
          children: [renderIconClose, /*#__PURE__*/_jsx(Box, {
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
            children: /*#__PURE__*/_jsx("img", {
              src: popupSuccessful?.image,
              alt: ""
            })
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            color: colors.primary.bandaiNamcoBlack,
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
            children: popupSuccessful?.title
          }), /*#__PURE__*/_jsx(Typography, {
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
            children: popupSuccessful?.description
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: 'column',
              justifyContent: "center",
              alignItems: "center",
              gap: '12px'
            },
            children: popupSuccessful?.button.map((item, index) => {
              return /*#__PURE__*/_jsx(Button, {
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
    }), /*#__PURE__*/_jsx(Box, {
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
    }), /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsxs(Box, {
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
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            textAlign: {
              xs: 'center',
              md: 'left'
            },
            marginBottom: '32px'
          },
          children: title
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "p4",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            textAlign: {
              xs: 'center',
              md: 'left'
            },
            marginBottom: '32px'
          },
          children: description
        }), /*#__PURE__*/_jsxs("form", {
          method: "POST",
          onSubmit: handleSubmit(onSubmit),
          style: {
            display: 'flex',
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              '& .MuiTextField-root': {
                maxHeight: 'unset !important'
              }
            },
            children: [/*#__PURE__*/_jsx(Box, {
              children: /*#__PURE__*/_jsx(TextField, _extends({
                InputLabelProps: {
                  required: false
                }
              }, firstNameField, {
                error: errors.firstName && true
              }, register("firstName", {
                required: `${firstNameField?.emptyField}`,
                onBlur: e => {
                  if (!e.target.value) {
                    setError('firstName', {
                      type: 'string',
                      message: firstNameField?.emptyField
                    });
                  }
                }
              }), {
                helperText: errors?.firstName?.message
              }))
            }), /*#__PURE__*/_jsx(Box, {
              children: /*#__PURE__*/_jsx(TextField, _extends({
                InputLabelProps: {
                  required: false
                }
              }, lastNameField, {
                error: errors.lastName && true
              }, register("lastName", {
                required: `${lastNameField?.emptyField}`,
                onBlur: e => {
                  if (!e.target.value) {
                    setError('lastName', {
                      type: 'string',
                      message: lastNameField.emptyField
                    });
                  }
                }
              }), {
                helperText: errors?.lastName?.message
              }))
            }), /*#__PURE__*/_jsx(Box, {
              children: /*#__PURE__*/_jsx(TextField, _extends({
                InputLabelProps: {
                  required: false
                }
              }, emailField, {
                error: errors.email && true
              }, register("email", {
                required: `${emailField?.emptyField}`,
                pattern: {
                  // eslint-disable-next-line no-useless-escape
                  value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: emailField?.helperText ?? ''
                },
                onBlur: e => {
                  if (!e.target.value) {
                    setError('email', {
                      type: 'string',
                      message: emailField?.emptyField
                    });
                  }
                }
              }), {
                helperText: errors?.email?.message
              }))
            }), /*#__PURE__*/_jsx(Box, {
              children: /*#__PURE__*/_jsx(TextField, _extends({}, passwordField, {
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
                      message: `${passwordField?.helperText}`
                    });
                    e.preventDefault();
                  }

                  if (!password) {
                    setError('password', {
                      type: 'string',
                      message: `${passwordField?.emptyField}`
                    });
                    e.preventDefault();
                  }
                },
                onChange: e => {
                  setPassword(e.target.value);
                }
              }), {
                helperText: errors?.password?.message,
                type: values.showPassword ? 'text' : 'password',
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
                    children: values.showPassword ? _IconEyeOff || (_IconEyeOff = /*#__PURE__*/_jsx(IconEyeOff, {})) : _IconEye || (_IconEye = /*#__PURE__*/_jsx(IconEye, {}))
                  })
                })
              }))
            })]
          }), passwordValidator && focusPassword && /*#__PURE__*/_jsx(Box, {
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
          }), /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              marginTop: '16px',
              marginBottom: '32px'
            },
            children: [/*#__PURE__*/_jsx(Box, {
              children: /*#__PURE__*/_jsx(Checkbox, {
                onChange: e => onSubcribe(e)
              })
            }), /*#__PURE__*/_jsx(Typography, {
              variant: "p9",
              color: colors.primary.dark,
              children: acceptNewsCheckbox?.label
            })]
          }), /*#__PURE__*/_jsx(Box, {
            children: /*#__PURE__*/_jsxs(Typography, {
              component: "p",
              color: colors.primary.dark,
              sx: {
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: {
                  xs: '20px',
                  md: '19px'
                },
                textAlign: 'left',
                color: colors.neutral.neutral2
              },
              children: [policyAndTerms?.text, "\xA0", /*#__PURE__*/_jsx(Link, {
                href: policyAndTerms?.policy?.href,
                color: colors.primary.bandaiNamcoBlack,
                children: policyAndTerms?.policy?.label
              }), "\xA0and\xA0", /*#__PURE__*/_jsx(Link, {
                href: policyAndTerms?.terms?.href,
                color: colors.primary.bandaiNamcoBlack,
                children: policyAndTerms?.terms?.label
              })]
            })
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              width: '100%',
              marginTop: '24px',
              marginBottom: '24px'
            },
            children: /*#__PURE__*/_jsx(Button, _extends({}, signupButton, {
              disabled: loadingSubmit || successful || !isDirty || !isValid || !!Object.keys(errors).length || validateNotPassed,
              variant: loadingSubmit || successful || !isDirty || !isValid || !!Object.keys(errors).length || validateNotPassed ? 'primary' : 'primaryDark',
              type: "submit",
              sx: {
                backgroundColor: loadingSubmit || successful ? `${colors.primary.bandaiNamcoRed} !important` : '',
                color: successful ? `${colors.primary.bandaiNamcoWhite} !important` : '',
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
              label: loadingSubmit && (_IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))) || signupButton?.label
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
              children: [loginLink?.text, "\xA0", nextLink || /*#__PURE__*/_jsx(Link, {
                href: loginLink?.link?.href,
                children: loginLink?.link?.label
              })]
            })
          })]
        })]
      })
    })]
  });
};

export default Signup;