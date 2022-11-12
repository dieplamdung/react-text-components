import _extends from "@babel/runtime/helpers/esm/extends";

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

  const {
    open,
    detail,
    isPassWord = false,
    onClose,
    titleButton = "Save",
    onSave,
    onValidatePass
  } = props;
  const {
    register,
    formState: {
      errors
    },
    reset,
    getValues,
    setError
  } = useForm({
    mode: "onBlur"
  });
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('sm'));
  const [openModal, setOpenModal] = useState(false);
  const [detailContent, setDetailContent] = useState({
    detail: []
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const [passwordValidator, setPasswordValidator] = useState([]);
  const [passwordFilled, setPasswordFilled] = useState('');
  const [errorNewPass, setErrorNewPass] = useState(false);
  const [errorCallApi, setErrorCallApi] = useState("");
  const [loading, setLoading] = useState(false);
  const refTimOut = useRef(); // const VALUE_PASS_CURRENT = detail?.detail.length ? detail.detail?.[0]?.[0]?.value : "";
  // const TITLE_PASS_CURRENT = detailContent.detail.length ? detailContent.detail?.[0]?.[0]?.title : "";

  const TITLE_PASS_NEW = detailContent.detail.length ? (_detailContent$detail = detailContent.detail) == null ? void 0 : (_detailContent$detail2 = _detailContent$detail[0]) == null ? void 0 : (_detailContent$detail3 = _detailContent$detail2[1]) == null ? void 0 : _detailContent$detail3.title : "";
  const refTimeOut = useRef(); // set show modal

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDisableBtn(true);
      setOpenModal(open);
      disableScrollBody(open);
    }

    return () => {
      window.clearTimeout(refTimeOut.current);
    };
  }, [open]); // set state init

  useEffect(() => {
    const newDetail = cloneDeep(detail);
    reset(detail);
    setDetailContent(newDetail || {
      detail: []
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail, open]); // set show - hidden pass

  const handelShowPass = (indexParent, index) => {
    const newDetail = cloneDeep(detailContent.detail);
    newDetail[indexParent][index].showPassword = !newDetail[indexParent][index].showPassword;
    setDetailContent(_extends({}, detailContent, {
      detail: newDetail
    }));
  }; // check validate value and show error


  const handelBlurInput = (valueInput = {}) => {
    let result = false;
    refTimeOut.current = setTimeout(() => {
      const listKeyError = Object.keys(errors);

      if (listKeyError.length) {
        listKeyError.map(item => {
          var _errors$item;

          if (errors != null && (_errors$item = errors[item]) != null && _errors$item.message) {
            result = true;
          }

          return null;
        });
      }

      const listValueInput = Object.values(valueInput);

      if (!(listValueInput != null && listValueInput.length)) {
        setDisableBtn(true);
        return;
      }

      listValueInput.forEach(value => {
        if (!value) {
          result = true;
        }

        return null;
      });
      setDisableBtn(result);
    }, 500);
  }; // handle validate password


  const handleCheckValidate = (typeInput, valueI, mesErr, title) => {
    if (!typeInput) {
      return "";
    }

    if (typeInput === "confirm_pass") {
      var _getValues;

      const password = (_getValues = getValues()) == null ? void 0 : _getValues[TITLE_PASS_NEW];

      if (password !== valueI) {
        return mesErr || "";
      }
    }

    if (typeInput === "password") {
      if (refTimOut.current) {
        window.clearTimeout(refTimOut.current);
      }

      refTimOut.current = setTimeout(() => {
        refTimOut.current = undefined; // call api validate pass CURRENT

        onValidatePass == null ? void 0 : onValidatePass(valueI).then(res => {
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


  useEffect(() => {
    if (!passwordFilled) {
      return;
    }

    if (errors != null && errors[TITLE_PASS_NEW]) {
      errors[TITLE_PASS_NEW].message = "";
    }

    const handleValidator = filled => {
      let errorPass = false;
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
      const validate = arr.map(item => {
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

  const handleCloseModal = () => {
    onClose();
    reset(); // resetField("first_name");
    // reset(props.detail);

    setPasswordValidator([]);
    setPasswordFilled("");
    setErrorNewPass(false);
    setErrorCallApi("");
    setLoading(false);
  };

  const handleSave = () => {
    setLoading(true);
    onSave(getValues(), err => {
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
      onClose: () => loading ? {} : handleCloseModal(),
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
            onClick: () => loading ? {} : handleCloseModal(),
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
          }), !!detailContent.detail.length && detailContent.detail.map((items, index) => {
            if (items.length) {
              return /*#__PURE__*/_jsx(Box, {
                children: items.map((item, idx) => {
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
                      validate: (item == null ? void 0 : item.typeValueInput) === "text" ? undefined : value => {
                        return handleCheckValidate(item.typeValueInput, value, item.messageErrorType, item.title);
                      },
                      required: `${item.messageEmpty}`,
                      onBlur: () => {
                        handelBlurInput(getValues());
                      },
                      onChange: e => {
                        var _e$target;

                        return (item == null ? void 0 : item.typeValueInput) === "new_password" ? setPasswordFilled(e == null ? void 0 : (_e$target = e.target) == null ? void 0 : _e$target.value) : {};
                      }
                    }), {
                      icon: isPassWord ? /*#__PURE__*/_jsx(InputAdornment, {
                        position: "end",
                        sx: {
                          '& svg': {
                            color: `${colors.primary.bandaiNamcoBlack} !important`
                          }
                        },
                        onClick: e => {
                          e == null ? void 0 : e.stopPropagation();
                        },
                        children: /*#__PURE__*/_jsx(IconButton, {
                          "aria-label": "toggle password visibility",
                          onClick: e => {
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
          children: passwordValidator.map((item, index) => {
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
          onClick: () => loading ? {} : handleSave(),
          children: loading ? _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {
            htmlColor: "#fff"
          })) : titleButton
        })]
      })
    })
  });
}