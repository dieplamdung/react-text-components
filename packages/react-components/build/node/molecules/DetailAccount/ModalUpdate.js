"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalUpdate;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Visibility2 = _interopRequireDefault(require("@mui/icons-material/Visibility"));

var _VisibilityOff2 = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));

var _material = require("@mui/material");

var _lodash = require("lodash");

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _TextField = _interopRequireDefault(require("../TextField"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose, _VisibilityOff, _Visibility, _IconCheckSuccess, _IconFailed, _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ModalUpdate(props) {
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
  } = (0, _reactHookForm.useForm)({
    mode: "onBlur"
  });
  const isMobile = (0, _material.useMediaQuery)(themes => themes.breakpoints.down('sm'));
  const [openModal, setOpenModal] = (0, _react.useState)(false);
  const [detailContent, setDetailContent] = (0, _react.useState)({
    detail: []
  });
  const [disableBtn, setDisableBtn] = (0, _react.useState)(true);
  const [passwordValidator, setPasswordValidator] = (0, _react.useState)([]);
  const [passwordFilled, setPasswordFilled] = (0, _react.useState)('');
  const [errorNewPass, setErrorNewPass] = (0, _react.useState)(false);
  const [errorCallApi, setErrorCallApi] = (0, _react.useState)("");
  const [loading, setLoading] = (0, _react.useState)(false);
  const refTimOut = (0, _react.useRef)(); // const VALUE_PASS_CURRENT = detail?.detail.length ? detail.detail?.[0]?.[0]?.value : "";
  // const TITLE_PASS_CURRENT = detailContent.detail.length ? detailContent.detail?.[0]?.[0]?.title : "";

  const TITLE_PASS_NEW = detailContent.detail.length ? (_detailContent$detail = detailContent.detail) == null ? void 0 : (_detailContent$detail2 = _detailContent$detail[0]) == null ? void 0 : (_detailContent$detail3 = _detailContent$detail2[1]) == null ? void 0 : _detailContent$detail3.title : "";
  const refTimeOut = (0, _react.useRef)(); // set show modal

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      setDisableBtn(true);
      setOpenModal(open);
      (0, _disableScrollBody.disableScrollBody)(open);
    }

    return () => {
      window.clearTimeout(refTimeOut.current);
    };
  }, [open]); // set state init

  (0, _react.useEffect)(() => {
    const newDetail = (0, _lodash.cloneDeep)(detail);
    reset(detail);
    setDetailContent(newDetail || {
      detail: []
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail, open]); // set show - hidden pass

  const handelShowPass = (indexParent, index) => {
    const newDetail = (0, _lodash.cloneDeep)(detailContent.detail);
    newDetail[indexParent][index].showPassword = !newDetail[indexParent][index].showPassword;
    setDetailContent((0, _extends2.default)({}, detailContent, {
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


  (0, _react.useEffect)(() => {
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

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: openModal,
      onClose: () => loading ? {} : handleCloseModal(),
      sx: {
        pointerEvents: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          id: "formContactUs",
          style: {
            display: 'flex',
            flexDirection: "column"
          },
          autoComplete: "off",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
            children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h5",
            color: _colors.default.primary.bandaiNamcoBlack,
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
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                children: items.map((item, idx) => {
                  var _errors$item$title, _errors$item$title2, _item$messageErrorTyp;

                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                    sx: {
                      width: "100%",
                      marginTop: "16px",
                      height: "fit-content",
                      "& .MuiFormControl-root": {
                        maxHeight: "100% !important"
                      }
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, (0, _extends2.default)({
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
                      icon: isPassWord ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.InputAdornment, {
                        position: "end",
                        sx: {
                          '& svg': {
                            color: `${_colors.default.primary.bandaiNamcoBlack} !important`
                          }
                        },
                        onClick: e => {
                          e == null ? void 0 : e.stopPropagation();
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
                          "aria-label": "toggle password visibility",
                          onClick: e => {
                            e == null ? void 0 : e.stopPropagation();
                            handelShowPass(index, idx);
                          },
                          edge: "end",
                          children: item != null && item.showPassword ? _VisibilityOff || (_VisibilityOff = /*#__PURE__*/(0, _jsxRuntime.jsx)(_VisibilityOff2.default, {})) : _Visibility || (_Visibility = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Visibility2.default, {}))
                        })
                      }) : null
                    }))
                  }, idx);
                })
              }, index);
            }

            return null;
          })]
        }), !!passwordValidator.length && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            marginTop: '16px',
            paddingLeft: '32px',
            '& svg': {
              width: '15px',
              height: '15px'
            }
          },
          children: passwordValidator.map((item, index) => {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                display: 'flex',
                gap: '7.5px'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  marginTop: {
                    xs: "2px",
                    md: "3px"
                  }
                },
                children: item.passed ? _IconCheckSuccess || (_IconCheckSuccess = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconCheckSuccess, {})) : _IconFailed || (_IconFailed = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconFailed, {}))
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: isMobile ? "p4" : "p6",
                color: _colors.default.neutral.neutral2,
                children: item.message
              })]
            }, index);
          })
        }), !!errorCallApi && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.primary.bandaiNamcoRed,
          sx: {
            marginTop: "16px",
            fontSize: "0.75em",
            lineHeight: "1.66em",
            fontWeight: "400",
            marginLeft: "32px"
          },
          children: errorCallApi
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          sx: {
            marginTop: "16px"
          },
          variant: errorNewPass || disableBtn ? "primary" : "primaryDark",
          disabled: errorNewPass || disableBtn,
          onClick: () => loading ? {} : handleSave(),
          children: loading ? _IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {
            htmlColor: "#fff"
          })) : titleButton
        })]
      })
    })
  });
}