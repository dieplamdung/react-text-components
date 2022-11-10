import { Box, Button } from '@mui/material';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react'
import Typography from '~/atoms/Typography';
import colors from '~/theme/colors';
import ModalConfirmRemove from './ModalConfirmRemove';
import ModalUpdate from './ModalUpdate';
import { TAddressItem, TemplateAddAddress } from './types';

type PropsAddressItem = TAddressItem & {
  onRemoveAddress: (id: any, callback?: (v?: any) => void) => void,
  onUpdateAddress: (value: any, callback?: (v: any) => void) => void,
  countryCode: {
    label: string, value: string, country: string
  }[],
  countryName: {
    label: string, value: string,
  }[],
}

function AddressItem(props: PropsAddressItem) {
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
  const [openModalRemove, setOpenModalRemove] = useState<boolean>(false);
  const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);
  const [templateModal, setTemplateModal] = useState<TemplateAddAddress>({});

  // set value default for templateAdd;
  useEffect(() => {
    // console.log("newTemplateAdd", templateAdd, firstName);
    const newTemplateAdd = cloneDeep(templateAdd);

    if (newTemplateAdd.firstName) {
      newTemplateAdd.firstName.valueDefault = firstName;
    };

    if (newTemplateAdd.lastName) {
      newTemplateAdd.lastName.valueDefault = lastName;
    };

    if (newTemplateAdd.address) {
      newTemplateAdd.address.valueDefault = address;
    };

    if (newTemplateAdd.apartment) {
      newTemplateAdd.apartment.valueDefault = apartment;
    };

    if (newTemplateAdd.town) {
      newTemplateAdd.town.valueDefault = town;
    };

    if (newTemplateAdd.postalCode) {
      newTemplateAdd.postalCode.valueDefault = postalCode;
    };
    if (newTemplateAdd.company) {
      newTemplateAdd.company.valueDefault = company;
    }
    if (newTemplateAdd.location) {
      newTemplateAdd.location.valueDefault = location;
    };

    if (newTemplateAdd.phoneNumber) {
      newTemplateAdd.phoneNumber.valueDefault = phoneNumber;
    };
    if (newTemplateAdd.countryNumber) {
      newTemplateAdd.countryNumber.valueDefault = countryNumber;
    }
    setTemplateModal(newTemplateAdd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "100%",
          lg: "calc(50% - 8px)",
        },
        marginTop: {
          xs: "20px",
          md: "18px"
        },
        padding: "24px",
        border: "1px solid",
        borderColor: isDefault ? "#0169B2" : "#DDDDDD",
        borderRadius: "20px"
      }}
    >
      {/* tab or btn setDefault */}
      <Box>
        {isDefault ?
          <Box
            sx={{
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
            }}
          >
            {titleDefault}
          </Box> :
          <Box
            sx={{
              cursor: "pointer",
              marginBottom: "10px"
            }}
          >
            <Typography
              variant='p7'
              sx={{
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
              }}
            >
              {titleBtnSetDefault}
            </Typography>
          </Box>
        }
      </Box>
      {/* name */}
      {(!!firstName || !!lastName) && <Typography
        sx={{
          fontSize: "18px",
          lineHeight: "26px",
          letterSpacing: "-0.2px",
          fontWeight: "600",
          marginBottom: "6px"
        }}
        color={colors.primary.bandaiNamcoBlack}
      >
        {`${firstName} ${lastName}`}
      </Typography>}

      {/* content address */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px"
        }}
      >
        {/* address */}
        {!!address && <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            maxWidth: "250px",
            wordBreak: "break-word",
          }}
          color={colors.primary.bandaiNamcoBlack}
        >
          {address}
        </Typography>}
        {/* apartment */}
        {!!apartment && <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            maxWidth: "250px",
            wordBreak: "break-word",
          }}
          color={colors.primary.bandaiNamcoBlack}
        >
          {apartment}
        </Typography>}
        {!!town && <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            maxWidth: "250px",
            wordBreak: "break-word",
          }}
          color={colors.primary.bandaiNamcoBlack}
        >
          {town}
        </Typography>}

        {!!postalCode && <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            maxWidth: "250px",
            wordBreak: "break-word",
          }}
          color={colors.primary.bandaiNamcoBlack}
        >
          {postalCode}
        </Typography>}

        {!!location && <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            maxWidth: "250px",
            wordBreak: "break-word",
          }}
          color={colors.primary.bandaiNamcoBlack}
        >
          {location}
        </Typography>}
        {!!phoneNumber && <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            maxWidth: "250px",
            wordBreak: "break-word",
          }}
          color={colors.primary.bandaiNamcoBlack}
        >
          {countryNumber ? `${countryNumber}-` : ""}{phoneNumber}
        </Typography>}
        {!!company && <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            maxWidth: "250px",
            wordBreak: "break-word",
          }}
          color={colors.primary.bandaiNamcoBlack}
        >
          {company}
        </Typography>}
      </Box>

      {/* button */}
      <Box
        sx={{
          display: "flex",
          marginTop: "auto",
          "& button": {
            marginRight: "10px"
          }
        }}
      >
        <Button
          variant='secondary'
          onClick={() => setOpenModalUpdate(true)}
        >
          {titleBtnEdit}
        </Button>
        <Button
          variant='secondary'
          onClick={() => setOpenModalRemove(true)}
        >
          {titleBtnRemove}
        </Button>
      </Box>

      {/* modal remove */}
      <ModalConfirmRemove
        open={openModalRemove}
        onClose={() => setOpenModalRemove(false)}
        onConfirm={(callback) => { onRemoveAddress(id, callback) }} />

      {/* modal update */}
      <ModalUpdate
        open={openModalUpdate}
        onClose={() => setOpenModalUpdate(false)}
        onSave={onUpdateAddress}
        title={titleModalUpdate}
        titleBtnSave={titleBtnSave}
        template={templateModal}
        countryCode={countryCode}
        countryName={countryName}
      />
    </Box>
  )
}
export default React.memo(AddressItem);