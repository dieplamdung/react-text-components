import _extends from "@babel/runtime/helpers/esm/extends";
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

const FooterModalConfirm = ({
  isOpen = true,
  buttonProps,
  defaultValueLocale = '',
  valueRedirect = '',
  handleCloseModalConfirm = () => {},
  handleRedirectLanguage = () => {},
  handleCloseModalConfirmRedirect = () => {},
  titleFirst,
  titleAfter,
  descriptionFirst,
  descriptionAfter,
  locale
}) => {
  const [openModal, setOpenModal] = useState(isOpen != null ? isOpen : true);
  const [localeSelected, setLocaleSelected] = useState('Japan');
  const [localeStay, setLocaleStay] = useState('Japan');
  useEffect(() => {
    setOpenModal(isOpen);
    let timeOut = 0;

    if (typeof window !== "undefined") {
      timeOut = setTimeout(() => {
        disableScrollBody(isOpen);
      }, 1500);
    }

    return () => {
      window.clearTimeout(timeOut);
    };
  }, [isOpen]);
  useEffect(() => {
    setLocaleStay(defaultValueLocale);
  }, [defaultValueLocale]);
  useEffect(() => {
    setLocaleSelected(valueRedirect);
  }, [valueRedirect]);

  const handleClosePopup = () => {
    setOpenModal(false);
    handleCloseModalConfirm();
  };

  const handleClosePopupRedirect = () => {
    setOpenModal(false);
    handleCloseModalConfirmRedirect();
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
      onClick: () => handleClosePopup == null ? void 0 : handleClosePopup()
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/_jsx(Modal, {
    open: openModal,
    onClose: () => handleClosePopup(),
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
          children: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? `${localeSelected} ${titleFirst}${titleAfter}` : `${titleFirst} ${localeSelected} ${titleAfter}`
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "p8",
          color: colors.neutral.neutral2,
          sx: {
            marginTop: '8px',
            textAlign: 'center'
          },
          children: `${descriptionFirst} ${localeSelected}${descriptionAfter}${locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' ? '.' : ''}`
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            marginTop: '40px'
          },
          children: buttonProps == null ? void 0 : buttonProps.map((button, idx) => /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            },
            children: [idx === 0 && /*#__PURE__*/_jsx(Button, _extends({}, button, {
              label: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? ` ${valueRedirect}${button == null ? void 0 : button.label}` : `${button == null ? void 0 : button.label} ${valueRedirect}`,
              onClick: () => {
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
              onClick: () => handleClosePopup(),
              label: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? `${localeStay}${button == null ? void 0 : button.label}` : `${button == null ? void 0 : button.label} ${localeStay}`,
              sx: {
                minWidth: "255px",
                marginTop: '12px'
              }
            }))]
          }, idx))
        })]
      })
    })
  });
};

export default FooterModalConfirm;