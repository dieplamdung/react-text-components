import { Box, Button } from '@mui/material';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import ModalConfirmRemove from "./ModalConfirmRemove";
import ModalUpdate from "./ModalUpdate";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function AddressItem(props) {
  const {
    id,
    isDefault,
    titleDefault = "default",
    titleBtnSetDefault = "Set as default",
    firstName = "",
    lastName = "",
    address = "",
    apartment = "",
    town = "",
    phoneNumber = "",
    postalCode,
    company,
    countryNumber,
    titleBtnEdit = "Edit",
    titleBtnRemove = "Remove",
    location = "",
    onRemoveAddress,
    templateAdd = {},
    titleModalUpdate,
    titleBtnSave,
    onUpdateAddress,
    countryName,
    countryCode
  } = props;
  const [openModalRemove, setOpenModalRemove] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [templateModal, setTemplateModal] = useState({}); // set value default for templateAdd;

  useEffect(() => {
    // console.log("newTemplateAdd", templateAdd, firstName);
    const newTemplateAdd = cloneDeep(templateAdd);

    if (newTemplateAdd.firstName) {
      newTemplateAdd.firstName.valueDefault = firstName;
    }

    ;

    if (newTemplateAdd.lastName) {
      newTemplateAdd.lastName.valueDefault = lastName;
    }

    ;

    if (newTemplateAdd.address) {
      newTemplateAdd.address.valueDefault = address;
    }

    ;

    if (newTemplateAdd.apartment) {
      newTemplateAdd.apartment.valueDefault = apartment;
    }

    ;

    if (newTemplateAdd.town) {
      newTemplateAdd.town.valueDefault = town;
    }

    ;

    if (newTemplateAdd.postalCode) {
      newTemplateAdd.postalCode.valueDefault = postalCode;
    }

    ;

    if (newTemplateAdd.company) {
      newTemplateAdd.company.valueDefault = company;
    }

    if (newTemplateAdd.location) {
      newTemplateAdd.location.valueDefault = location;
    }

    ;

    if (newTemplateAdd.phoneNumber) {
      newTemplateAdd.phoneNumber.valueDefault = phoneNumber;
    }

    ;

    if (newTemplateAdd.countryNumber) {
      newTemplateAdd.countryNumber.valueDefault = countryNumber;
    }

    setTemplateModal(newTemplateAdd); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: {
        xs: "100%",
        lg: "calc(50% - 8px)"
      },
      marginTop: {
        xs: "20px",
        md: "18px"
      },
      padding: "24px",
      border: "1px solid",
      borderColor: isDefault ? "#0169B2" : "#DDDDDD",
      borderRadius: "20px"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      children: isDefault ? /*#__PURE__*/_jsx(Box, {
        sx: {
          textTransform: "uppercase",
          height: "24px",
          width: "fit-content",
          padding: "0px 8px",
          borderRadius: "5px",
          fontSize: "10px",
          display: "flex",
          alignItems: "center",
          background: "#00B0B8",
          color: "#fff",
          fontWeight: "700",
          marginBottom: "8px"
        },
        children: titleDefault
      }) : /*#__PURE__*/_jsx(Box, {
        sx: {
          cursor: "pointer",
          marginBottom: "10px"
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p7",
          sx: {
            position: "relative",
            width: "fit-content",
            "&:before": {
              position: "absolute",
              content: "' '",
              width: "100%",
              left: "0px",
              bottom: "0px",
              borderBottom: `1px solid ${colors.primary.bandaiNamcoBlack}`
            }
          },
          children: titleBtnSetDefault
        })
      })
    }), (!!firstName || !!lastName) && /*#__PURE__*/_jsx(Typography, {
      sx: {
        fontSize: "18px",
        lineHeight: "26px",
        letterSpacing: "-0.2px",
        fontWeight: "600",
        marginBottom: "6px"
      },
      color: colors.primary.bandaiNamcoBlack,
      children: `${firstName} ${lastName}`
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px"
      },
      children: [!!address && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: address
      }), !!apartment && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: apartment
      }), !!town && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: town
      }), !!postalCode && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: postalCode
      }), !!location && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: location
      }), !!phoneNumber && /*#__PURE__*/_jsxs(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: [countryNumber ? `${countryNumber}-` : "", phoneNumber]
      }), !!company && /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          maxWidth: "250px",
          wordBreak: "break-word"
        },
        color: colors.primary.bandaiNamcoBlack,
        children: company
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        marginTop: "auto",
        "& button": {
          marginRight: "10px"
        }
      },
      children: [/*#__PURE__*/_jsx(Button, {
        variant: "secondary",
        onClick: () => setOpenModalUpdate(true),
        children: titleBtnEdit
      }), /*#__PURE__*/_jsx(Button, {
        variant: "secondary",
        onClick: () => setOpenModalRemove(true),
        children: titleBtnRemove
      })]
    }), /*#__PURE__*/_jsx(ModalConfirmRemove, {
      open: openModalRemove,
      onClose: () => setOpenModalRemove(false),
      onConfirm: callback => {
        onRemoveAddress(id, callback);
      }
    }), /*#__PURE__*/_jsx(ModalUpdate, {
      open: openModalUpdate,
      onClose: () => setOpenModalUpdate(false),
      onSave: onUpdateAddress,
      title: titleModalUpdate,
      titleBtnSave: titleBtnSave,
      template: templateModal,
      countryCode: countryCode,
      countryName: countryName
    })]
  });
}

export default /*#__PURE__*/React.memo(AddressItem);