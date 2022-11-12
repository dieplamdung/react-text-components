import _extends from "@babel/runtime/helpers/esm/extends";

var _IconClose, _IconLoading;

import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from "../../atoms/Button";
import { IconClose, IconLoading } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { disableScrollBody } from "../../utils/disableScrollBody";
import DropdownAsynchronous from "../DropdownAsynchronous";
import TextField from "../TextField";
import TextNumber from "../TextNumber";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ModalUpdate(props) {
  var _template$firstName2, _errors, _template$firstName3, _template$firstName4, _template$firstName5, _errors2, _template$firstName6, _template$firstName7, _template$firstName8, _template$lastName2, _errors3, _template$lastName3, _template$lastName4, _template$lastName5, _errors4, _template$lastName6, _template$lastName7, _template$lastName8, _template$address2, _errors5, _template$address3, _template$address4, _template$address5, _errors6, _template$address6, _template$address7, _template$address8, _template$apartment2, _errors7, _template$apartment3, _template$apartment4, _template$apartment5, _errors8, _template$apartment6, _template$apartment7, _template$apartment8, _template$town2, _errors9, _template$town3, _template$town4, _template$town5, _errors10, _template$town6, _template$town7, _template$town8, _template$postalCode2, _errors11, _template$postalCode3, _template$postalCode4, _errors12, _template$postalCode5, _template$postalCode6, _template$postalCode7, _template$location$ti, _template$location5, _template$phoneNumber2, _errors13, _template$phoneNumber3, _template$phoneNumber4, _errors14, _template$phoneNumber5, _template$phoneNumber6, _template$phoneNumber7, _template$company2, _errors15, _template$company3, _template$company4, _template$company5, _errors16, _template$company6, _template$company7, _template$company8;

  const {
    open,
    onClose,
    onSave,
    title,
    titleBtnSave,
    template = {},
    countryCode,
    countryName
  } = props;
  const {
    register,
    formState: {
      errors,
      isValid
    },
    control,
    reset,
    getValues,
    setValue
  } = useForm({
    mode: "onBlur"
  });
  const [openModal, setOpenModal] = useState(false);
  const [countryNumber, setCountryNumber] = useState('');
  const [countryDefault, setCountryDefault] = useState("");
  const [errorApi, setErrorApi] = useState("");
  const [loading, setLoading] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [countryListCode, setCountryListCode] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      disableScrollBody(open);
    }
  }, [open]);
  useEffect(() => {
    setCountryListCode(countryCode);
  }, [countryCode]);
  useEffect(() => {
    setCountryList(countryName);
  }, [countryName]);
  useEffect(() => {
    setOpenModal(open);
    setLoading(false);
    setErrorApi("");
  }, [open]); // handle close modal and reset value

  const handleCloseModal = () => {
    onClose();
    reset();
  }; // set value default for location


  useEffect(() => {
    var _template$location;

    setValue((template == null ? void 0 : (_template$location = template.location) == null ? void 0 : _template$location.title) || "", countryDefault); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryDefault]);
  useEffect(() => {
    var _template$location2, _template$countryNumb;

    setCountryDefault((template == null ? void 0 : (_template$location2 = template.location) == null ? void 0 : _template$location2.valueDefault) || "");
    setCountryNumber((template == null ? void 0 : (_template$countryNumb = template.countryNumber) == null ? void 0 : _template$countryNumb.valueDefault) || "");
  }, [template]);

  const handleSave = () => {
    var _template$firstName, _template$lastName, _template$address, _template$apartment, _template$location3, _template$town, _template$postalCode, _template$location4, _template$phoneNumber, _template$company;

    setLoading(true);
    const value = getValues();
    const newValue = {
      first_name: value[((_template$firstName = template.firstName) == null ? void 0 : _template$firstName.title) || ""],
      last_name: value[((_template$lastName = template.lastName) == null ? void 0 : _template$lastName.title) || ""],
      address1: value[((_template$address = template.address) == null ? void 0 : _template$address.title) || ""],
      address2: value[((_template$apartment = template.apartment) == null ? void 0 : _template$apartment.title) || ""],
      // apartment: value[template.apartment?.title || ""],
      state_or_province: value[((_template$location3 = template.location) == null ? void 0 : _template$location3.title) || ""],
      city: value[((_template$town = template.town) == null ? void 0 : _template$town.title) || ""],
      postal_code: value[((_template$postalCode = template.postalCode) == null ? void 0 : _template$postalCode.title) || ""],
      country: value[((_template$location4 = template.location) == null ? void 0 : _template$location4.title) || ""],
      phone: `${countryNumber} ${value[((_template$phoneNumber = template.phoneNumber) == null ? void 0 : _template$phoneNumber.title) || ""]}`,
      company: value[((_template$company = template.company) == null ? void 0 : _template$company.title) || ""]
    };
    onSave(newValue, v => {
      setLoading(false);

      if (v != null && v.success) {
        setErrorApi("");
        handleCloseModal();
      } else {
        setErrorApi(v == null ? void 0 : v.message);
      }
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
            xs: "333px",
            md: "490px"
          },
          minHeight: "200px",
          padding: {
            xs: "56px 32px 40px 32px",
            md: "64px"
          },
          "&:focus": {
            outline: "none"
          },
          position: "relative",
          "& .MuiFormControl-root": {
            maxHeight: "100% !important"
          }
        },
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
        }), title && /*#__PURE__*/_jsx(Typography, {
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
          children: title
        }), /*#__PURE__*/_jsxs("form", {
          id: "formContactUs",
          style: {
            display: 'flex',
            flexDirection: "column",
            maxHeight: "50vh",
            overflowY: "scroll"
          },
          autoComplete: "off",
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "24px"
            },
            children: /*#__PURE__*/_jsx(TextField, _extends({
              InputLabelProps: {
                required: false
              },
              label: template == null ? void 0 : (_template$firstName2 = template.firstName) == null ? void 0 : _template$firstName2.title,
              helperText: errors == null ? void 0 : (_errors = errors[(template == null ? void 0 : (_template$firstName3 = template.firstName) == null ? void 0 : _template$firstName3.title) || ""]) == null ? void 0 : _errors.message,
              emptyField: template == null ? void 0 : (_template$firstName4 = template.firstName) == null ? void 0 : _template$firstName4.messageEmpty,
              iconPosEnd: true,
              defaultValue: template == null ? void 0 : (_template$firstName5 = template.firstName) == null ? void 0 : _template$firstName5.valueDefault,
              error: (errors == null ? void 0 : (_errors2 = errors[(template == null ? void 0 : (_template$firstName6 = template.firstName) == null ? void 0 : _template$firstName6.title) || ""]) == null ? void 0 : _errors2.message) && true,
              type: "text"
            }, register((template == null ? void 0 : (_template$firstName7 = template.firstName) == null ? void 0 : _template$firstName7.title) || "", {
              required: `${template == null ? void 0 : (_template$firstName8 = template.firstName) == null ? void 0 : _template$firstName8.messageEmpty}` // onBlur: () => {handelBlurInput(getValues())},

            })))
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "20px"
            },
            children: /*#__PURE__*/_jsx(TextField, _extends({
              InputLabelProps: {
                required: false
              },
              label: template == null ? void 0 : (_template$lastName2 = template.lastName) == null ? void 0 : _template$lastName2.title,
              helperText: errors == null ? void 0 : (_errors3 = errors[(template == null ? void 0 : (_template$lastName3 = template.lastName) == null ? void 0 : _template$lastName3.title) || ""]) == null ? void 0 : _errors3.message,
              emptyField: template == null ? void 0 : (_template$lastName4 = template.lastName) == null ? void 0 : _template$lastName4.messageEmpty,
              iconPosEnd: true,
              defaultValue: template == null ? void 0 : (_template$lastName5 = template.lastName) == null ? void 0 : _template$lastName5.valueDefault,
              error: (errors == null ? void 0 : (_errors4 = errors[(template == null ? void 0 : (_template$lastName6 = template.lastName) == null ? void 0 : _template$lastName6.title) || ""]) == null ? void 0 : _errors4.message) && true,
              type: "text"
            }, register((template == null ? void 0 : (_template$lastName7 = template.lastName) == null ? void 0 : _template$lastName7.title) || "", {
              required: `${template == null ? void 0 : (_template$lastName8 = template.lastName) == null ? void 0 : _template$lastName8.messageEmpty}` // onBlur: () => {handelBlurInput(getValues())},

            })))
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "20px"
            },
            children: /*#__PURE__*/_jsx(TextField, _extends({
              InputLabelProps: {
                required: false
              },
              label: template == null ? void 0 : (_template$address2 = template.address) == null ? void 0 : _template$address2.title,
              helperText: errors == null ? void 0 : (_errors5 = errors[(template == null ? void 0 : (_template$address3 = template.address) == null ? void 0 : _template$address3.title) || ""]) == null ? void 0 : _errors5.message,
              emptyField: template == null ? void 0 : (_template$address4 = template.address) == null ? void 0 : _template$address4.messageEmpty,
              iconPosEnd: true,
              defaultValue: template == null ? void 0 : (_template$address5 = template.address) == null ? void 0 : _template$address5.valueDefault,
              error: (errors == null ? void 0 : (_errors6 = errors[(template == null ? void 0 : (_template$address6 = template.address) == null ? void 0 : _template$address6.title) || ""]) == null ? void 0 : _errors6.message) && true,
              type: "text"
            }, register((template == null ? void 0 : (_template$address7 = template.address) == null ? void 0 : _template$address7.title) || "", {
              required: `${template == null ? void 0 : (_template$address8 = template.address) == null ? void 0 : _template$address8.messageEmpty}` // onBlur: () => {handelBlurInput(getValues())},

            })))
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "20px"
            },
            children: /*#__PURE__*/_jsx(TextField, _extends({
              InputLabelProps: {
                required: false
              },
              label: template == null ? void 0 : (_template$apartment2 = template.apartment) == null ? void 0 : _template$apartment2.title,
              helperText: errors == null ? void 0 : (_errors7 = errors[(template == null ? void 0 : (_template$apartment3 = template.apartment) == null ? void 0 : _template$apartment3.title) || ""]) == null ? void 0 : _errors7.message,
              emptyField: template == null ? void 0 : (_template$apartment4 = template.apartment) == null ? void 0 : _template$apartment4.messageEmpty,
              iconPosEnd: true,
              defaultValue: template == null ? void 0 : (_template$apartment5 = template.apartment) == null ? void 0 : _template$apartment5.valueDefault,
              error: (errors == null ? void 0 : (_errors8 = errors[(template == null ? void 0 : (_template$apartment6 = template.apartment) == null ? void 0 : _template$apartment6.title) || ""]) == null ? void 0 : _errors8.message) && true,
              type: "text"
            }, register((template == null ? void 0 : (_template$apartment7 = template.apartment) == null ? void 0 : _template$apartment7.title) || "", {
              required: template == null ? void 0 : (_template$apartment8 = template.apartment) == null ? void 0 : _template$apartment8.messageEmpty // onBlur: () => {handelBlurInput(getValues())},

            })))
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "20px"
            },
            children: /*#__PURE__*/_jsx(TextField, _extends({
              InputLabelProps: {
                required: false
              },
              label: template == null ? void 0 : (_template$town2 = template.town) == null ? void 0 : _template$town2.title,
              helperText: errors == null ? void 0 : (_errors9 = errors[(template == null ? void 0 : (_template$town3 = template.town) == null ? void 0 : _template$town3.title) || ""]) == null ? void 0 : _errors9.message,
              emptyField: template == null ? void 0 : (_template$town4 = template.town) == null ? void 0 : _template$town4.messageEmpty,
              iconPosEnd: true,
              defaultValue: template == null ? void 0 : (_template$town5 = template.town) == null ? void 0 : _template$town5.valueDefault,
              error: (errors == null ? void 0 : (_errors10 = errors[(template == null ? void 0 : (_template$town6 = template.town) == null ? void 0 : _template$town6.title) || ""]) == null ? void 0 : _errors10.message) && true,
              type: "text"
            }, register((template == null ? void 0 : (_template$town7 = template.town) == null ? void 0 : _template$town7.title) || "", {
              required: template == null ? void 0 : (_template$town8 = template.town) == null ? void 0 : _template$town8.messageEmpty // onBlur: () => {handelBlurInput(getValues())},

            })))
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "20px"
            },
            children: /*#__PURE__*/_jsx(TextNumber, _extends({
              InputLabelProps: {
                required: false
              },
              label: (template == null ? void 0 : (_template$postalCode2 = template.postalCode) == null ? void 0 : _template$postalCode2.title) || "",
              helperText: errors == null ? void 0 : (_errors11 = errors[(template == null ? void 0 : (_template$postalCode3 = template.postalCode) == null ? void 0 : _template$postalCode3.title) || ""]) == null ? void 0 : _errors11.message,
              defaultValue: template == null ? void 0 : (_template$postalCode4 = template.postalCode) == null ? void 0 : _template$postalCode4.valueDefault,
              iconPosEnd: true,
              error: (errors == null ? void 0 : (_errors12 = errors[(template == null ? void 0 : (_template$postalCode5 = template.postalCode) == null ? void 0 : _template$postalCode5.title) || ""]) == null ? void 0 : _errors12.message) && true
            }, register((template == null ? void 0 : (_template$postalCode6 = template.postalCode) == null ? void 0 : _template$postalCode6.title) || "", {
              required: template == null ? void 0 : (_template$postalCode7 = template.postalCode) == null ? void 0 : _template$postalCode7.messageEmpty // onBlur: () => {handelBlurInput(getValues())},

            })))
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "20px"
            },
            children: /*#__PURE__*/_jsx(Controller, {
              name: (_template$location$ti = template == null ? void 0 : (_template$location5 = template.location) == null ? void 0 : _template$location5.title) != null ? _template$location$ti : "located",
              render: () => {
                var _template$location6, _template$location7, _template$location8;

                return /*#__PURE__*/_jsx(DropdownAsynchronous, {
                  title: template == null ? void 0 : (_template$location6 = template.location) == null ? void 0 : _template$location6.title,
                  defaultValue: template == null ? void 0 : (_template$location7 = template.location) == null ? void 0 : _template$location7.valueDefault,
                  width: "100%",
                  data: countryList,
                  required: true,
                  helperText: template == null ? void 0 : (_template$location8 = template.location) == null ? void 0 : _template$location8.messageEmpty,
                  onChange: v => setCountryDefault(v),
                  inModal: true
                });
              },
              control: control
            })
          }), /*#__PURE__*/_jsxs(Box, {
            sx: {
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between"
            },
            children: [/*#__PURE__*/_jsx(Box, {
              className: "DropdownAsynchronous",
              sx: {
                display: "flex",
                // background: "red",
                position: "relative",
                minWidth: {
                  xs: "90px",
                  md: "118px"
                },
                "& .MuiFormControl-root": {
                  "& .MuiOutlinedInput-root": {
                    paddingRight: {
                      xs: "11px !important",
                      md: "31px !important"
                    },
                    "& input": {
                      padding: {
                        xs: "19px 0px 18px 16px !important",
                        md: "19px 0px 18px 32px !important"
                      }
                    },
                    cursor: "pointer"
                  }
                },
                "& .icon-dropdown": {
                  right: {
                    xs: "14px",
                    md: "26px"
                  },
                  background: "#fff"
                },
                marginRight: {
                  xs: "8px",
                  md: "16px"
                }
              },
              children: /*#__PURE__*/_jsx(DropdownAsynchronous, {
                width: "100%",
                data: countryListCode,
                isMin: true,
                defaultValue: countryNumber,
                isShowClose: true,
                isCountryCode: true,
                onChange: v => setCountryNumber(v || ""),
                inModal: true // onChangeCountry={(v?: string) => setCountryDefault(v || "")}

              })
            }), /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                width: "100%"
              },
              children: /*#__PURE__*/_jsx(TextNumber, _extends({
                InputLabelProps: {
                  required: false
                },
                label: (template == null ? void 0 : (_template$phoneNumber2 = template.phoneNumber) == null ? void 0 : _template$phoneNumber2.title) || "",
                helperText: errors == null ? void 0 : (_errors13 = errors[(template == null ? void 0 : (_template$phoneNumber3 = template.phoneNumber) == null ? void 0 : _template$phoneNumber3.title) || ""]) == null ? void 0 : _errors13.message,
                defaultValue: template == null ? void 0 : (_template$phoneNumber4 = template.phoneNumber) == null ? void 0 : _template$phoneNumber4.valueDefault,
                iconPosEnd: true,
                error: (errors == null ? void 0 : (_errors14 = errors[(template == null ? void 0 : (_template$phoneNumber5 = template.phoneNumber) == null ? void 0 : _template$phoneNumber5.title) || ""]) == null ? void 0 : _errors14.message) && true
              }, register((template == null ? void 0 : (_template$phoneNumber6 = template.phoneNumber) == null ? void 0 : _template$phoneNumber6.title) || "", {
                required: template == null ? void 0 : (_template$phoneNumber7 = template.phoneNumber) == null ? void 0 : _template$phoneNumber7.messageEmpty // onBlur: () => {handelBlurInput(getValues())},

              })))
            })]
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "20px",
              marginBottom: "10px"
            },
            children: /*#__PURE__*/_jsx(TextField, _extends({
              InputLabelProps: {
                required: false
              },
              label: template == null ? void 0 : (_template$company2 = template.company) == null ? void 0 : _template$company2.title,
              helperText: errors == null ? void 0 : (_errors15 = errors[(template == null ? void 0 : (_template$company3 = template.company) == null ? void 0 : _template$company3.title) || ""]) == null ? void 0 : _errors15.message,
              emptyField: template == null ? void 0 : (_template$company4 = template.company) == null ? void 0 : _template$company4.messageEmpty,
              iconPosEnd: true,
              defaultValue: template == null ? void 0 : (_template$company5 = template.company) == null ? void 0 : _template$company5.valueDefault,
              error: (errors == null ? void 0 : (_errors16 = errors[(template == null ? void 0 : (_template$company6 = template.company) == null ? void 0 : _template$company6.title) || ""]) == null ? void 0 : _errors16.message) && true,
              type: "text"
            }, register((template == null ? void 0 : (_template$company7 = template.company) == null ? void 0 : _template$company7.title) || "", {
              required: template == null ? void 0 : (_template$company8 = template.company) == null ? void 0 : _template$company8.messageEmpty
            })))
          })]
        }), !!errorApi && /*#__PURE__*/_jsx(Typography, {
          sx: {
            marginTop: "10px",
            fontSize: "0.75rem",
            fontWeight: "400",
            color: colors.primary.bandaiNamcoRed,
            paddingLeft: "32px"
          },
          children: errorApi
        }), /*#__PURE__*/_jsx(Button, {
          sx: {
            marginTop: {
              xs: "10px",
              md: "38px"
            }
          },
          variant: !countryDefault || !isValid ? "primary" : "primaryDark",
          disabled: !countryDefault || !isValid,
          onClick: () => loading ? {} : handleSave(),
          children: loading ? _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {
            htmlColor: "#fff"
          })) : titleBtnSave
        })]
      })
    })
  });
}