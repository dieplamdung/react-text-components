import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import Modules
import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from "../../atoms/Button";
import { IconClose } from "../../atoms/Icon";
import Typography from "../../atoms/Typography"; // import Styles

import colors from "../../theme/colors";
import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var FooterModalConfirm = function FooterModalConfirm(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? true : _ref$isOpen,
      buttonProps = _ref.buttonProps,
      _ref$defaultValueLoca = _ref.defaultValueLocale,
      defaultValueLocale = _ref$defaultValueLoca === void 0 ? '' : _ref$defaultValueLoca,
      _ref$valueRedirect = _ref.valueRedirect,
      valueRedirect = _ref$valueRedirect === void 0 ? '' : _ref$valueRedirect,
      _ref$handleCloseModal = _ref.handleCloseModalConfirm,
      handleCloseModalConfirm = _ref$handleCloseModal === void 0 ? function () {} : _ref$handleCloseModal,
      _ref$handleRedirectLa = _ref.handleRedirectLanguage,
      handleRedirectLanguage = _ref$handleRedirectLa === void 0 ? function () {} : _ref$handleRedirectLa,
      _ref$handleCloseModal2 = _ref.handleCloseModalConfirmRedirect,
      handleCloseModalConfirmRedirect = _ref$handleCloseModal2 === void 0 ? function () {} : _ref$handleCloseModal2,
      titleFirst = _ref.titleFirst,
      titleAfter = _ref.titleAfter,
      descriptionFirst = _ref.descriptionFirst,
      descriptionAfter = _ref.descriptionAfter,
      locale = _ref.locale;

  var _useState = useState(isOpen != null ? isOpen : true),
      _useState2 = _slicedToArray(_useState, 2),
      openModal = _useState2[0],
      setOpenModal = _useState2[1];

  var _useState3 = useState('Japan'),
      _useState4 = _slicedToArray(_useState3, 2),
      localeSelected = _useState4[0],
      setLocaleSelected = _useState4[1];

  var _useState5 = useState('Japan'),
      _useState6 = _slicedToArray(_useState5, 2),
      localeStay = _useState6[0],
      setLocaleStay = _useState6[1];

  useEffect(function () {
    setOpenModal(isOpen);
    var timeOut = 0;

    if (typeof window !== "undefined") {
      timeOut = setTimeout(function () {
        disableScrollBody(isOpen);
      }, 1500);
    }

    return function () {
      window.clearTimeout(timeOut);
    };
  }, [isOpen]);
  useEffect(function () {
    setLocaleStay(defaultValueLocale);
  }, [defaultValueLocale]);
  useEffect(function () {
    setLocaleSelected(valueRedirect);
  }, [valueRedirect]);

  var handleClosePopup = function handleClosePopup() {
    setOpenModal(false);
    handleCloseModalConfirm();
  };

  var handleClosePopupRedirect = function handleClosePopupRedirect() {
    setOpenModal(false);
    handleCloseModalConfirmRedirect();
  };

  var renderIconClose = useMemo(function () {
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
      onClick: function onClick() {
        return handleClosePopup == null ? void 0 : handleClosePopup();
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_jsx(Modal, {
    open: openModal,
    onClose: function onClose() {
      return handleClosePopup();
    },
    disableAutoFocus: true,
    sx: {
      pointerEvents: "auto",
      outline: 'none'
    },
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
        outline: 'none',
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
            xs: "68px 28px",
            md: "108px 52px 100px 52px"
          },
          overflow: 'auto',
          '& .MuiTypography-root': {
            paddingLeft: '0px',
            paddingRight: '0px'
          }
        },
        color: colors.secondaryGray.shade600,
        children: [renderIconClose, /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            textAlign: 'center'
          },
          children: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? "".concat(localeSelected, " ").concat(titleFirst).concat(titleAfter) : "".concat(titleFirst, " ").concat(localeSelected, " ").concat(titleAfter)
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "p8",
          color: colors.neutral.neutral2,
          sx: {
            marginTop: '8px',
            textAlign: 'center'
          },
          children: "".concat(descriptionFirst, " ").concat(localeSelected).concat(descriptionAfter).concat(locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' ? '.' : '')
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            marginTop: '40px'
          },
          children: buttonProps == null ? void 0 : buttonProps.map(function (button, idx) {
            return /*#__PURE__*/_jsxs(Box, {
              sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              },
              children: [idx === 0 && /*#__PURE__*/_jsx(Button, _extends({}, button, {
                label: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? " ".concat(valueRedirect).concat(button == null ? void 0 : button.label) : "".concat(button == null ? void 0 : button.label, " ").concat(valueRedirect),
                onClick: function onClick() {
                  handleRedirectLanguage == null ? void 0 : handleRedirectLanguage(valueRedirect);
                  handleClosePopupRedirect();
                },
                sx: {
                  minWidth: "255px",
                  background: colors.primary.bandaiNamcoBlack,
                  color: colors.primary.bandaiNamcoWhite,
                  "&:hover": {
                    background: "#000000b3"
                  }
                }
              })), idx === 1 && /*#__PURE__*/_jsx(Button, _extends({}, button, {
                onClick: function onClick() {
                  return handleClosePopup();
                },
                label: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? "".concat(localeStay).concat(button == null ? void 0 : button.label) : "".concat(button == null ? void 0 : button.label, " ").concat(localeStay),
                sx: {
                  minWidth: "255px",
                  marginTop: '12px'
                }
              }))]
            }, idx);
          })
        })]
      })
    })
  });
};

export default FooterModalConfirm;