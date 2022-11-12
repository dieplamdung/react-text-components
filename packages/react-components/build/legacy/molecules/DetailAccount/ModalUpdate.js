import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconClose, _VisibilityOff, _Visibility, _IconCheckSuccess, _IconFailed, _IconLoading;

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment, Modal, useMediaQuery } from '@mui/material';
import { cloneDeep } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from "../../atoms/Button";
import { IconClose, IconCheckSuccess, IconFailed, IconLoading } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { disableScrollBody } from "../../utils/disableScrollBody";
import TextField from "../TextField"; // eslint-disable-next-line import/no-cycle

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ModalUpdate(props) {
  var _detailContent$detail, _detailContent$detail2, _detailContent$detail3;

  var open = props.open,
      detail = props.detail,
      _props$isPassWord = props.isPassWord,
      isPassWord = _props$isPassWord === void 0 ? false : _props$isPassWord,
      onClose = props.onClose,
      _props$titleButton = props.titleButton,
      titleButton = _props$titleButton === void 0 ? "Save" : _props$titleButton,
      onSave = props.onSave,
      onValidatePass = props.onValidatePass;

  var _useForm = useForm({
    mode: "onBlur"
  }),
      register = _useForm.register,
      errors = _useForm.formState.errors,
      reset = _useForm.reset,
      getValues = _useForm.getValues,
      setError = _useForm.setError;

  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('sm');
  });

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var _useState3 = useState({
    detail: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      detailContent = _useState4[0],
      setDetailContent = _useState4[1];

  var _useState5 = useState(true),
      _useState6 = _slicedToArray(_useState5, 2),
      disableBtn = _useState6[0],
      setDisableBtn = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      passwordValidator = _useState8[0],
      setPasswordValidator = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      passwordFilled = _useState10[0],
      setPasswordFilled = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      errorNewPass = _useState12[0],
      setErrorNewPass = _useState12[1];

  var _useState13 = useState(""),
      _useState14 = _slicedToArray(_useState13, 2),
      errorCallApi = _useState14[0],
      setErrorCallApi = _useState14[1];

  var _useState15 = useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      loading = _useState16[0],
      setLoading = _useState16[1];

  var refTimOut = useRef(); // const VALUE_PASS_CURRENT = detail?.detail.length ? detail.detail?.[0]?.[0]?.value : "";
  // const TITLE_PASS_CURRENT = detailContent.detail.length ? detailContent.detail?.[0]?.[0]?.title : "";

  var TITLE_PASS_NEW = detailContent.detail.length ? (_detailContent$detail = detailContent.detail) == null ? void 0 : (_detailContent$detail2 = _detailContent$detail[0]) == null ? void 0 : (_detailContent$detail3 = _detailContent$detail2[1]) == null ? void 0 : _detailContent$detail3.title : "";
  var refTimeOut = useRef(); // set show modal

  useEffect(function () {
    if (typeof window !== "undefined") {
      setDisableBtn(true);
      setOpenModal(open);
      disableScrollBody(open);
    }

    return function () {
      window.clearTimeout(refTimeOut.current);
    };
  }, [open]); // set state init

  useEffect(function () {
    var newDetail = cloneDeep(detail);
    reset(detail);
    setDetailContent(newDetail || {
      detail: []
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail, open]); // set show - hidden pass

  var handelShowPass = function handelShowPass(indexParent, index) {
    var newDetail = cloneDeep(detailContent.detail);
    newDetail[indexParent][index].showPassword = !newDetail[indexParent][index].showPassword;
    setDetailContent(_extends({}, detailContent, {
      detail: newDetail
    }));
  }; // check validate value and show error


  var handelBlurInput = function handelBlurInput() {
    var valueInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var result = false;
    refTimeOut.current = setTimeout(function () {
      var listKeyError = Object.keys(errors);

      if (listKeyError.length) {
        listKeyError.map(function (item) {
          var _errors$item;

          if (errors != null && (_errors$item = errors[item]) != null && _errors$item.message) {
            result = true;
          }

          return null;
        });
      }

      var listValueInput = Object.values(valueInput);

      if (!(listValueInput != null && listValueInput.length)) {
        setDisableBtn(true);
        return;
      }

      listValueInput.forEach(function (value) {
        if (!value) {
          result = true;
        }

        return null;
      });
      setDisableBtn(result);
    }, 500);
  }; // handle validate password


  var handleCheckValidate = function handleCheckValidate(typeInput, valueI, mesErr, title) {
    if (!typeInput) {
      return "";
    }

    if (typeInput === "confirm_pass") {
      var _getValues;

      var password = (_getValues = getValues()) == null ? void 0 : _getValues[TITLE_PASS_NEW];

      if (password !== valueI) {
        return mesErr || "";
      }
    }

    if (typeInput === "password") {
      if (refTimOut.current) {
        window.clearTimeout(refTimOut.current);
      }

      refTimOut.current = setTimeout(function () {
        refTimOut.current = undefined; // call api validate pass CURRENT

        onValidatePass == null ? void 0 : onValidatePass(valueI).then(function (res) {
          if (res) {
            setError(title || "", {
              message: ""
            });
          } else {
            setError(title || "", {
              message: mesErr || ""
            });
          }
        });
      }, 300);
    }

    return "";
  }; // handel validate new pass


  useEffect(function () {
    if (!passwordFilled) {
      return;
    }

    if (errors != null && errors[TITLE_PASS_NEW]) {
      errors[TITLE_PASS_NEW].message = "";
    }

    var handleValidator = function handleValidator(filled) {
      var errorPass = false;
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
      var validate = arr.map(function (item) {
        var _item$regex, _item$regex2;

        if (!(item != null && (_item$regex = item.regex) != null && _item$regex.test(filled))) {
          errorPass = true;
        }

        return {
          passed: item == null ? void 0 : (_item$regex2 = item.regex) == null ? void 0 : _item$regex2.test(filled),
          message: item.message
        };
      });
      setErrorNewPass(errorPass);
      return validate;
    };

    setPasswordValidator(handleValidator(passwordFilled)); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordFilled]); // handle close modal and reset value

  var handleCloseModal = function handleCloseModal() {
    onClose();
    reset(); // resetField("first_name");
    // reset(props.detail);

    setPasswordValidator([]);
    setPasswordFilled("");
    setErrorNewPass(false);
    setErrorCallApi("");
    setLoading(false);
  };

  var handleSave = function handleSave() {
    setLoading(true);
    onSave(getValues(), function (err) {
      if (!err) {
        handleCloseModal();
        return;
      }

      setErrorCallApi(err || "");
      setLoading(false);
    });
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsx(Modal, {
      open: openModal,
      onClose: function onClose() {
        return loading ? {} : handleCloseModal();
      },
      sx: {
        pointerEvents: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          borderRadius: "20px",
          width: {
            xs: "311px",
            md: "478px"
          },
          minHeight: "200px",
          padding: {
            xs: "56px 32px 40px 32px",
            md: "64px"
          },
          "&:focus": {
            outline: "none"
          },
          position: "relative"
        },
        children: [/*#__PURE__*/_jsxs("form", {
          id: "formContactUs",
          style: {
            display: 'flex',
            flexDirection: "column"
          },
          autoComplete: "off",
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              position: "absolute",
              top: "26px",
              right: {
                xs: "32px",
                md: "26px"
              },
              cursor: loading ? "auto" : "pointer"
            },
            onClick: function onClick() {
              return loading ? {} : handleCloseModal();
            },
            children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "h5",
            color: colors.primary.bandaiNamcoBlack,
            sx: {
              paddingBottom: "16px",
              marginBottom: "8px",
              position: "relative",
              letterSpacing: {
                xs: "-0.4px",
                md: "-0.8px"
              },
              "&:before": {
                content: "' '",
                position: "absolute",
                bottom: "0px",
                left: "0px",
                width: "100%",
                borderBottom: "1px solid #dddddd80"
              }
            },
            children: detailContent == null ? void 0 : detailContent.title
          }), !!detailContent.detail.length && detailContent.detail.map(function (items, index) {
            if (items.length) {
              return /*#__PURE__*/_jsx(Box, {
                children: items.map(function (item, idx) {
                  var _errors$item$title, _errors$item$title2, _item$messageErrorTyp;

                  return /*#__PURE__*/_jsx(Box, {
                    sx: {
                      width: "100%",
                      marginTop: "16px",
                      height: "fit-content",
                      "& .MuiFormControl-root": {
                        maxHeight: "100% !important"
                      }
                    },
                    children: /*#__PURE__*/_jsx(TextField, _extends({
                      InputLabelProps: {
                        required: false
                      },
                      label: item == null ? void 0 : item.title,
                      helperText: errors == null ? void 0 : (_errors$item$title = errors[item == null ? void 0 : item.title]) == null ? void 0 : _errors$item$title.message,
                      emptyField: item == null ? void 0 : item.messageEmpty,
                      iconPosEnd: true,
                      defaultValue: isPassWord ? "" : item == null ? void 0 : item.value,
                      error: ((errors == null ? void 0 : (_errors$item$title2 = errors[item == null ? void 0 : item.title]) == null ? void 0 : _errors$item$title2.message) || (item == null ? void 0 : item.title) === TITLE_PASS_NEW && errorNewPass) && true,
                      type: !(item != null && item.showPassword) ? "text" : "password"
                    }, register(item.title, {
                      pattern: (item == null ? void 0 : item.typeValueInput) === "email" ? {
                        // eslint-disable-next-line no-useless-escape
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: (_item$messageErrorTyp = item == null ? void 0 : item.messageErrorType) != null ? _item$messageErrorTyp : 'Incorrect format e.g. name@example.com'
                      } : undefined,
                      validate: (item == null ? void 0 : item.typeValueInput) === "text" ? undefined : function (value) {
                        return handleCheckValidate(item.typeValueInput, value, item.messageErrorType, item.title);
                      },
                      required: "".concat(item.messageEmpty),
                      onBlur: function onBlur() {
                        handelBlurInput(getValues());
                      },
                      onChange: function onChange(e) {
                        var _e$target;

                        return (item == null ? void 0 : item.typeValueInput) === "new_password" ? setPasswordFilled(e == null ? void 0 : (_e$target = e.target) == null ? void 0 : _e$target.value) : {};
                      }
                    }), {
                      icon: isPassWord ? /*#__PURE__*/_jsx(InputAdornment, {
                        position: "end",
                        sx: {
                          '& svg': {
                            color: "".concat(colors.primary.bandaiNamcoBlack, " !important")
                          }
                        },
                        onClick: function onClick(e) {
                          e == null ? void 0 : e.stopPropagation();
                        },
                        children: /*#__PURE__*/_jsx(IconButton, {
                          "aria-label": "toggle password visibility",
                          onClick: function onClick(e) {
                            e == null ? void 0 : e.stopPropagation();
                            handelShowPass(index, idx);
                          },
                          edge: "end",
                          children: item != null && item.showPassword ? _VisibilityOff || (_VisibilityOff = /*#__PURE__*/_jsx(VisibilityOff, {})) : _Visibility || (_Visibility = /*#__PURE__*/_jsx(Visibility, {}))
                        })
                      }) : null
                    }))
                  }, idx);
                })
              }, index);
            }

            return null;
          })]
        }), !!passwordValidator.length && /*#__PURE__*/_jsx(Box, {
          sx: {
            marginTop: '16px',
            paddingLeft: '32px',
            '& svg': {
              width: '15px',
              height: '15px'
            }
          },
          children: passwordValidator.map(function (item, index) {
            return /*#__PURE__*/_jsxs(Box, {
              sx: {
                display: 'flex',
                gap: '7.5px'
              },
              children: [/*#__PURE__*/_jsx(Box, {
                sx: {
                  marginTop: {
                    xs: "2px",
                    md: "3px"
                  }
                },
                children: item.passed ? _IconCheckSuccess || (_IconCheckSuccess = /*#__PURE__*/_jsx(IconCheckSuccess, {})) : _IconFailed || (_IconFailed = /*#__PURE__*/_jsx(IconFailed, {}))
              }), /*#__PURE__*/_jsx(Typography, {
                variant: isMobile ? "p4" : "p6",
                color: colors.neutral.neutral2,
                children: item.message
              })]
            }, index);
          })
        }), !!errorCallApi && /*#__PURE__*/_jsx(Typography, {
          color: colors.primary.bandaiNamcoRed,
          sx: {
            marginTop: "16px",
            fontSize: "0.75em",
            lineHeight: "1.66em",
            fontWeight: "400",
            marginLeft: "32px"
          },
          children: errorCallApi
        }), /*#__PURE__*/_jsx(Button, {
          sx: {
            marginTop: "16px"
          },
          variant: errorNewPass || disableBtn ? "primary" : "primaryDark",
          disabled: errorNewPass || disableBtn,
          onClick: function onClick() {
            return loading ? {} : handleSave();
          },
          children: loading ? _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {
            htmlColor: "#fff"
          })) : titleButton
        })]
      })
    })
  });
}