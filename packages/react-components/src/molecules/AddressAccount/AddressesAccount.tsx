// import modules
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import Button from '~/atoms/Button';
import { IconAdd } from '~/atoms/Icon';
import Typography from '~/atoms/Typography';
import colors from '~/theme/colors';
import AddressItem from './AddressItem';
import ModalUpdate from './ModalUpdate';

import { TAddressItem, IAddressesAccount } from './types';

// define function
const AddressesAccount = (props: IAddressesAccount) => {
  const {
    title,
    emptyAddress,
    listAddress = [], titleBtnAddAddress,
    onRemoveAddress,
    templateAdd,
    titleModalAdd,
    titleModalUpdate,
    titleBtnSave,
    onUpdateAddress,
    onAddAddress,
    countryName,
    countryCode
  } = props;
  const [listAddressDefault, setListAddressDefault] = useState<TAddressItem[]>([]);
  const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);

  useEffect(() => {
    setListAddressDefault(listAddress);
  }, [listAddress]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
        }}
      >
        {title && <Typography
          color={colors.primary.bandaiNamcoBlack}
          variant='p1'
          sx={{
            marginRight: {
              xs: "0px",
              md: "50px",
              lg: "146px"

            },
            minWidth: "150px"
          }}
        >
          {title}
        </Typography>}
        {!!listAddressDefault.length && <Box
          sx={{
            display: "flex",
            flex: "1",
            flexDirection: "column"
          }}
        >
          {/* icon add */}
          <Box
            sx={{
              display: "flex",
              width: "fit-content",
              alignItems: "center",
              cursor: "pointer",
              marginTop: {
                xs: "24px",
                md: "0px"
              },
              "& svg": {
                width: "15px",
                height: "15px",
                marginRight: "6px",
                marginTop: "1px"
              }
            }}
            onClick={() => setOpenModalAdd(true)}
          >
            <IconAdd htmlColor={colors.primary.bandaiNamcoBlack} />
            <Typography
              variant='p7'
              sx={{
                position: "relative",

                "&:before": {
                  position: "absolute",
                  content: "' '",
                  bottom: "0px",
                  left: "0px",
                  width: "100%",
                  borderBottom: `1px solid ${colors.primary.bandaiNamcoBlack}`
                }
              }}
            >
              {titleBtnAddAddress}
            </Typography>
          </Box>

          {/* list address */}
          <Box
            sx={{
              display: "flex",
              flex: "1",
              flexWrap: "wrap",
              flexDirection: {
                xs: "column",
                md: "row"
              },
              justifyContent: "space-between"
            }}
          >
            {listAddressDefault.map((item) => {
              return (
                <AddressItem
                  {...item}
                  key={item.id}
                  onRemoveAddress={onRemoveAddress}
                  templateAdd={templateAdd}
                  titleModalUpdate={titleModalUpdate}
                  titleBtnSave={titleBtnSave}
                  onUpdateAddress={(v, call) => onUpdateAddress(item.id, v, call)}
                  countryName={countryName}
                  countryCode={countryCode}
                />
              )
            })}
          </Box>
        </Box>
        }
      </Box>
      {!listAddressDefault.length &&
        <Box
          sx={{
            width: "100%",
            paddingTop: {
              xs: "48px",
              md: "64px"
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: "center"
            }}
          >
            {emptyAddress?.title}
          </Typography>
          <Typography
            variant='p6'
            sx={{
              marginTop: "8px",
              marginBottom: "24px",
              textAlign: "center"
            }}
          >
            {emptyAddress?.description}
          </Typography>
          {!!emptyAddress?.titleBtn && <Button
            variant="primaryDark"
            onClick={() => setOpenModalAdd(true)}
          >
            {emptyAddress?.titleBtn}
          </Button>}
        </Box>
      }
      <ModalUpdate
        open={openModalAdd}
        onClose={() => setOpenModalAdd(false)}
        onSave={onAddAddress}
        title={titleModalAdd}
        titleBtnSave={titleBtnSave}
        template={templateAdd}
        countryName={countryName}
        countryCode={countryCode}
      />
    </Box>

  );
};

export default React.memo(AddressesAccount);