import _extends from "@babel/runtime/helpers/esm/extends";

var _IconLoading;

// Modules
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { isEmpty } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import Button from "../../atoms/Button"; // import Dropdown from '~/molecules/Dropdown';

import TextArea from "../../molecules/TextArea"; // import TextField from '~/molecules/TextField';
// import FileUploader from '~/molecules/FileUploader';
// import DropdownAsynchronous from '~/molecules/DropdownAsynchronous';
// import TextNumber from '~/molecules/TextNumber';

import loadable from '@loadable/component';
import { IconLoading } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import { MAP_DATA_OTHER_HELPFUL_DETAIL } from "../../utils/constants"; // Styles

import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Dropdown = loadable(() => import("../../molecules/Dropdown")); // const TextArea = loadable(() => import("~/molecules/TextArea"));

const TextField = loadable(() => import("../../molecules/TextField"));
const TextNumber = loadable(() => import("../../molecules/TextNumber"));
const FileUploader = loadable(() => import("../../molecules/FileUploader"));
const DropdownAsynchronous = loadable(() => import("../../molecules/DropdownAsynchronous"));

const ContactUs = props => {
  var _textFieldProps$phone, _textFieldProps$phone2, _textFieldProps$locat, _description$linkHref, _description$target, _errors$lastName, _textFieldProps$email, _errors$email, _handleSortCountryCod, _textFieldProps$count, _textFieldProps$phone3, _errors$phoneNumber, _handleFilterData, _handleFilterData$, _handleFilterData$2, _handleFilterData$2$i, _buttonProps$label;

  const {
    title,
    description,
    textFieldProps,
    buttonProps = {},
    textAreaProps,
    dropdownProps,
    filesProps,
    otherHelpfulDetailProps = MAP_DATA_OTHER_HELPFUL_DETAIL,
    submitResult,
    dataOptionGame = [],
    dataOptionHardware = []
  } = props;
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isDirty
    },
    control,
    watch,
    unregister,
    reset,
    setValue
  } = useForm({
    mode: "onBlur"
  });
  const watchAllFields = watch();
  const textAreaRef = useRef();
  const dropdownRef = useRef();
  const [textAreaOnFocus, setTextAreaOnFocus] = useState(textAreaProps.props.label);
  const [valueKey, setValueKey] = useState('');
  const [resetInput, setResetInput] = useState();
  const [countryNumber, setCountryNumber] = useState((_textFieldProps$phone = textFieldProps == null ? void 0 : (_textFieldProps$phone2 = textFieldProps.phoneNumber) == null ? void 0 : _textFieldProps$phone2.defaultCodeCountry) != null ? _textFieldProps$phone : '+65');
  const [countryDefault, setCountryDefault] = useState((textFieldProps == null ? void 0 : (_textFieldProps$locat = textFieldProps.located) == null ? void 0 : _textFieldProps$locat.countryDefault) || "");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSortCountryCode = countryCode => {
    const countryCodeClone = [...countryCode];

    if (countryCodeClone) {
      return countryCodeClone == null ? void 0 : countryCodeClone.sort((a, b) => {
        if ((a == null ? void 0 : a.label) < (b == null ? void 0 : b.label)) {
          return -1;
        }

        return 1;
      });
    }

    return [];
  };
  /**
  * Run after submit Form
  */


  const onSubmit = async () => {
    setLoadingSubmit(true);

    try {
      const {
        handler
      } = buttonProps;

      if (typeof handler === 'function') {
        const dataForm = watchAllFields;
        dataForm.country_number = countryNumber;
        dataForm.located = countryDefault;
        await handler(undefined, props, dataForm).then(res => {
          if (res.status === '200' || res.status === 200) {
            submitResult(true);
            setLoadingSubmit(false);
          }
        });
      }
    } catch (error) {
      setLoadingSubmit(false);
    }
  };

  useEffect(() => {
    var _otherHelpfulDetailPr, _itemFilter$, _itemFilter$$items;

    const itemFilter = (otherHelpfulDetailProps == null ? void 0 : (_otherHelpfulDetailPr = otherHelpfulDetailProps.items) == null ? void 0 : _otherHelpfulDetailPr.filter(({
      key
    }) => key === valueKey)) || [];
    itemFilter == null ? void 0 : (_itemFilter$ = itemFilter[0]) == null ? void 0 : (_itemFilter$$items = _itemFilter$.items) == null ? void 0 : _itemFilter$$items.map((item, idx) => {
      var _dropdownRef$current$;

      setValue(item.name, null);
      unregister(item.name);
      reset({
        [item.name]: null,
        'located': null
      }, {
        keepValues: true
      });
      dropdownRef == null ? void 0 : (_dropdownRef$current$ = dropdownRef.current[idx]) == null ? void 0 : _dropdownRef$current$.handleResetData();
      return true;
    });
  }, [otherHelpfulDetailProps == null ? void 0 : otherHelpfulDetailProps.items, reset, setValue, unregister, valueKey]);
  useEffect(() => {
    var _textAreaRef$current, _watchAllFields$detai, _dropdownRef$current;

    textAreaRef == null ? void 0 : (_textAreaRef$current = textAreaRef.current) == null ? void 0 : _textAreaRef$current.handleChange((_watchAllFields$detai = watchAllFields == null ? void 0 : watchAllFields.details) != null ? _watchAllFields$detai : '');
    setValueKey(dropdownRef == null ? void 0 : (_dropdownRef$current = dropdownRef.current) == null ? void 0 : _dropdownRef$current.getValueDropDown());
  }, [watchAllFields]);

  const handleFilterData = itemKey => {
    var _otherHelpfulDetailPr2;

    return otherHelpfulDetailProps == null ? void 0 : (_otherHelpfulDetailPr2 = otherHelpfulDetailProps.items) == null ? void 0 : _otherHelpfulDetailPr2.filter(({
      key
    }) => key === itemKey);
  };

  const handleFocusTextArea = () => {
    delete errors[textAreaProps.props.name];
    unregister(textAreaProps.props.name);
    setTextAreaOnFocus(`${textAreaProps.props.focuslabel}`);
  };
  /**
    * Run after submit Form occured errors
    */


  const onError = () => {// do something
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      maxWidth: '831px',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      pointerEvents: "auto"
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h1",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          marginBottom: '16px',
          letterSpacing: {
            xs: '-0.4px',
            md: '-1px'
          }
        },
        children: title
      }), /*#__PURE__*/_jsxs(Typography, {
        variant: "p6",
        color: colors.neutral.neutral2,
        sx: {},
        children: [description.textBefore, " ", ` `, /*#__PURE__*/_jsx(Link, {
          href: (_description$linkHref = description.linkHref) != null ? _description$linkHref : '/',
          target: (_description$target = description.target) != null ? _description$target : '_parent',
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            textDecoration: 'none',
            borderBottom: `1px solid ${colors.primary.bandaiNamcoBlack}`,
            '&:hover': {
              textDecoration: 'none'
            }
          },
          children: description.labelHref
        }), ` `, description.textAfter]
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        "& .MuiOutlinedInput-root": {
          "&:hover > fieldset": {
            borderColor: colors.neutral.neutral2
          }
        },
        '& input': {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px transparent inset !important'
          }
        }
      },
      children: /*#__PURE__*/_jsxs("form", {
        id: "formContactUs",
        style: {
          marginTop: '71px'
        },
        onSubmit: handleSubmit(onSubmit, onError),
        autoComplete: "off",
        children: [/*#__PURE__*/_jsxs(Grid, {
          container: true,
          sx: {
            marginBottom: {
              xs: '81px',
              md: '92px'
            }
          },
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            md: 4,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p1",
              color: colors.primary.bandaiNamcoBlack,
              sx: {
                marginBottom: {
                  xs: '28px'
                }
              },
              children: dropdownProps.label
            })
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            sm: 12,
            md: 8,
            children: /*#__PURE__*/_jsx(Controller, {
              name: "topic",
              control: control,
              render: ({
                field
              }) => /*#__PURE__*/_jsx(Dropdown, _extends({
                ref: dropdownRef
              }, dropdownProps.props, {
                register: register,
                required: true,
                name: "topic",
                onBlur: field.onBlur,
                onChange: e => {
                  field.onChange(e);
                  setResetInput(Math.random());
                },
                error: errors.topic && true,
                isScrollTop: true
              }))
            })
          })]
        }), /*#__PURE__*/_jsxs(Grid, {
          container: true,
          sx: {
            marginBottom: {
              xs: '81px',
              md: '92px'
            },
            marginTop: {
              xs: '81px',
              md: '92px'
            }
          },
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            md: 4,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p1",
              color: colors.primary.bandaiNamcoBlack,
              sx: {
                marginBottom: {
                  xs: '28px'
                }
              },
              children: textFieldProps.label
            })
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            md: 8,
            children: /*#__PURE__*/_jsxs(Grid, {
              container: true,
              columns: {
                xs: 1,
                sm: 4,
                md: 12
              },
              rowGap: "20px",
              children: [/*#__PURE__*/_jsxs(Grid, {
                container: true,
                columns: {
                  xs: 1,
                  sm: 4,
                  md: 12
                },
                columnGap: "16px",
                rowGap: "20px",
                sx: {
                  flexWrap: {
                    md: 'nowrap'
                  }
                },
                children: [/*#__PURE__*/_jsx(Grid, {
                  item: true,
                  xs: 12,
                  md: 6,
                  sx: errors != null && errors.firstName ? {
                    marginBottom: '20px'
                  } : {},
                  children: /*#__PURE__*/_jsx(Controller, {
                    name: "firstName",
                    control: control,
                    render: ({
                      field
                    }) => {
                      var _errors$firstName;

                      return /*#__PURE__*/_jsx(TextField, _extends({
                        InputLabelProps: {
                          required: false
                        }
                      }, textFieldProps.firstName, {
                        error: errors.firstName && true
                      }, register("firstName", {
                        required: `${textFieldProps.firstName.helperText}`
                      }), {
                        onChange: field.onChange,
                        helperText: errors == null ? void 0 : (_errors$firstName = errors.firstName) == null ? void 0 : _errors$firstName.message
                      }));
                    }
                  })
                }), /*#__PURE__*/_jsx(Grid, {
                  item: true,
                  xs: 12,
                  md: 6,
                  sx: errors != null && errors.lastName ? {
                    marginBottom: '20px'
                  } : {},
                  children: /*#__PURE__*/_jsx(TextField, _extends({
                    InputLabelProps: {
                      required: false
                    }
                  }, textFieldProps.lastName, {
                    error: errors.lastName && true
                  }, register("lastName", {
                    required: `${textFieldProps.lastName.helperText}`
                  }), {
                    helperText: errors == null ? void 0 : (_errors$lastName = errors.lastName) == null ? void 0 : _errors$lastName.message
                  }))
                })]
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                xs: 12,
                sx: errors != null && errors.email ? {
                  marginBottom: '20px'
                } : {},
                children: /*#__PURE__*/_jsx(TextField, _extends({
                  InputLabelProps: {
                    required: false
                  }
                }, textFieldProps.email, {
                  error: errors.email && true
                }, register("email", {
                  required: `${textFieldProps.email.emptyField}`,
                  pattern: {
                    // eslint-disable-next-line no-useless-escape
                    value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: (_textFieldProps$email = textFieldProps.email.helperText) != null ? _textFieldProps$email : 'Incorrect format e.g. name@example.com'
                  }
                }), {
                  helperText: errors == null ? void 0 : (_errors$email = errors.email) == null ? void 0 : _errors$email.message
                }))
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                xs: 12,
                sx: errors != null && errors.phoneNumber ? {
                  marginBottom: '20px'
                } : {},
                children: /*#__PURE__*/_jsxs(Box, {
                  sx: {
                    maxWidth: "100%",
                    width: "100%",
                    display: "flex"
                  },
                  children: [/*#__PURE__*/_jsx(Box, {
                    sx: {
                      width: {
                        xs: "130px",
                        md: "140px"
                      },
                      marginRight: {
                        xs: "8px",
                        md: "16px"
                      },
                      "& p": {
                        display: "none"
                      }
                    },
                    children: /*#__PURE__*/_jsx(DropdownAsynchronous, {
                      width: "100%",
                      data: (_handleSortCountryCod = handleSortCountryCode((_textFieldProps$count = textFieldProps == null ? void 0 : textFieldProps.countryCode) != null ? _textFieldProps$count : [])) != null ? _handleSortCountryCod : [],
                      isMin: true,
                      defaultValue: countryNumber,
                      isShowClose: true,
                      isCountryCode: true // register={item.required ? register : () => { }}
                      ,
                      onChange: v => setCountryNumber(v || ""),
                      onChangeCountry: v => setCountryDefault(v || "")
                    })
                  }), /*#__PURE__*/_jsx(Box, {
                    sx: {
                      flex: 1
                    },
                    children: /*#__PURE__*/_jsx(TextNumber, _extends({
                      InputLabelProps: {
                        required: false
                      }
                    }, textFieldProps == null ? void 0 : textFieldProps.phoneNumber, {
                      error: (errors == null ? void 0 : errors.phoneNumber) && true
                    }, register("phoneNumber", {
                      required: `${textFieldProps == null ? void 0 : (_textFieldProps$phone3 = textFieldProps.phoneNumber) == null ? void 0 : _textFieldProps$phone3.emptyField}`
                      /** disabled validate input phone number */
                      // pattern: {
                      //   value: /^[(]?[0-9]{2}[)]?[0-9]{2}?[0-9]{3,5}$/,
                      //   message: textFieldProps.phoneNumber?.helperText
                      // }

                    }), {
                      helperText: errors == null ? void 0 : (_errors$phoneNumber = errors.phoneNumber) == null ? void 0 : _errors$phoneNumber.message
                    }))
                  })]
                })
              }), /*#__PURE__*/_jsx(Grid, {
                item: true,
                xs: 12,
                md: 12,
                sx: errors != null && errors.located ? {
                  marginBottom: '20px'
                } : {},
                children: /*#__PURE__*/_jsx(Controller, {
                  name: "located",
                  control: control,
                  render: ({
                    field
                  }) => {
                    var _textFieldProps$locat2, _textFieldProps$locat3, _textFieldProps$locat4, _textFieldProps$locat5;

                    return /*#__PURE__*/_jsx(DropdownAsynchronous, {
                      title: textFieldProps == null ? void 0 : (_textFieldProps$locat2 = textFieldProps.located) == null ? void 0 : _textFieldProps$locat2.title,
                      defaultValue: countryDefault,
                      width: "100%",
                      data: textFieldProps == null ? void 0 : (_textFieldProps$locat3 = textFieldProps.located) == null ? void 0 : _textFieldProps$locat3.data,
                      required: textFieldProps == null ? void 0 : (_textFieldProps$locat4 = textFieldProps.located) == null ? void 0 : _textFieldProps$locat4.required // resetInput={resetInput}
                      ,
                      helperText: textFieldProps == null ? void 0 : (_textFieldProps$locat5 = textFieldProps.located) == null ? void 0 : _textFieldProps$locat5.helperText,
                      onChange: v => field.onChange(v)
                    });
                  }
                })
              })]
            })
          })]
        }), /*#__PURE__*/_jsxs(Grid, {
          container: true,
          sx: {
            marginBottom: {
              xs: '81px',
              md: '92px'
            },
            marginTop: {
              xs: '81px',
              md: '92px'
            }
          },
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            md: 4,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p1",
              color: colors.primary.bandaiNamcoBlack,
              sx: {
                marginBottom: {
                  xs: '28px'
                }
              },
              children: textAreaProps.label
            })
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            md: 8,
            children: /*#__PURE__*/_jsx(Controller, {
              name: "details",
              control: control,
              render: ({
                field
              }) => /*#__PURE__*/_jsx(TextArea, _extends({
                InputLabelProps: {
                  required: false
                }
              }, textAreaProps.props, {
                onFocus: handleFocusTextArea,
                label: !isEmpty(errors.details) ? textAreaProps.props.label : textAreaOnFocus,
                register: register,
                onChange: e => {
                  field.onChange(e);
                },
                ref: textAreaRef,
                variant: "outlined",
                error: errors.details && true
              }))
            })
          })]
        }), ((_handleFilterData = handleFilterData(valueKey)) == null ? void 0 : (_handleFilterData$ = _handleFilterData[0]) == null ? void 0 : _handleFilterData$.items) && /*#__PURE__*/_jsxs(Grid, {
          container: true,
          sx: {
            marginBottom: {
              xs: '81px',
              md: '92px'
            },
            marginTop: {
              xs: '81px',
              md: '92px'
            }
          },
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            md: 4,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p1",
              color: colors.primary.bandaiNamcoBlack,
              sx: {
                marginBottom: {
                  xs: '28px'
                }
              },
              children: otherHelpfulDetailProps.label
            })
          }), /*#__PURE__*/_jsxs(Grid, {
            item: true,
            xs: 12,
            md: 8,
            rowGap: "12px",
            display: "flex",
            flexDirection: "column",
            children: [(_handleFilterData$2 = handleFilterData(valueKey)[0]) == null ? void 0 : (_handleFilterData$2$i = _handleFilterData$2.items) == null ? void 0 : _handleFilterData$2$i.map((item, i) => {
              if (i === 0) {
                return /*#__PURE__*/_jsx(Grid, {
                  item: true,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  children: /*#__PURE__*/_jsx(Controller, {
                    name: item.name,
                    control: control,
                    render: ({
                      field
                    }) => /*#__PURE__*/_jsx(DropdownAsynchronous, _extends({}, item, field, {
                      title: item.title,
                      width: "100%",
                      data: dataOptionGame,
                      required: item.required,
                      resetInput: resetInput,
                      register: item.required ? register : () => {},
                      onChange: v => field.onChange(v)
                    }), i)
                  })
                }, i);
              }

              if (i === 1) {
                return /*#__PURE__*/_jsx(Grid, {
                  item: true,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  children: /*#__PURE__*/_jsx(Controller, {
                    name: item.name,
                    control: control,
                    render: ({
                      field
                    }) => /*#__PURE__*/_jsx(DropdownAsynchronous, _extends({}, item, field, {
                      title: item.title,
                      width: "100%",
                      data: dataOptionHardware,
                      required: item.required,
                      resetInput: resetInput,
                      register: item.required ? register : () => {},
                      onChange: v => field.onChange(v)
                    }), i)
                  })
                }, i);
              }

              return /*#__PURE__*/_jsx(Grid, {
                item: true,
                xs: 12,
                sm: 12,
                md: 12,
                children: ['accountId', 'orderNumber'].includes(item.name) ? /*#__PURE__*/_jsx(Box, {
                  sx: errors[item.name] ? {
                    marginBottom: '20px'
                  } : {},
                  children: /*#__PURE__*/_jsx(TextField, _extends({
                    InputLabelProps: {
                      required: false
                    }
                  }, item, {
                    label: item == null ? void 0 : item.label,
                    error: errors[item.name] && true
                  }, register(item.name, {
                    required: item.required && `${item.helperText}`
                  }), {
                    helperText: item.helperText
                  }))
                }) : /*#__PURE__*/_jsx(Controller, {
                  name: item.name,
                  control: control,
                  render: ({
                    field
                  }) => {
                    var _ref;

                    return /*#__PURE__*/_jsx(Dropdown, _extends({
                      ref: el => {
                        if (el !== null) {
                          dropdownRef.current[i] = el;
                        }
                      }
                    }, item, {
                      data: item.data,
                      register: item.required ? register : () => {},
                      required: item.required,
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                      error: errors[(_ref = item.name) != null ? _ref : ''] && true
                    }), i);
                  }
                })
              }, i);
            }), /*#__PURE__*/_jsx(Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/_jsx(Controller, {
                name: 'files',
                control: control,
                render: ({
                  field
                }) => /*#__PURE__*/_jsx(FileUploader, _extends({}, handleFilterData(valueKey)[0].filesProps, filesProps, {
                  name: 'files',
                  onChange: field.onChange,
                  register: register,
                  parent: data => {
                    watchAllFields.files = data;
                  }
                }))
              })
            })]
          })]
        }), /*#__PURE__*/_jsx(Grid, {
          container: true,
          sx: {
            marginTop: '73px',
            display: 'flex',
            justifyContent: {
              xs: 'center',
              md: 'flex-end'
            },
            "& button": {
              overflow: "hidden"
            }
          },
          children: /*#__PURE__*/_jsx(Button, _extends({
            type: "submit"
          }, buttonProps, {
            disabled: !isValid || !isDirty || loadingSubmit,
            label: loadingSubmit ? undefined : (_buttonProps$label = buttonProps == null ? void 0 : buttonProps.label) != null ? _buttonProps$label : 'Done',
            children: loadingSubmit && /*#__PURE__*/_jsx(Box, {
              sx: {
                marginTop: "10px"
              },
              children: _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))
            })
          }))
        })]
      })
    })]
  });
};

export default ContactUs;