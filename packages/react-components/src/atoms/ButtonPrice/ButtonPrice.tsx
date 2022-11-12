// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Button from '~/atoms/Button/Button';
import colors from '~/theme/colors';
import { formatCurrency } from '~/utils';
import Typography from '../Typography';

// Types
import { IButtonPrice } from './types';

// define function
const ButtonPrice = (props: IButtonPrice) => {
  const { buttonProps, priceProps, isButtonSecond = false } = props
  return (
    <Box
      sx={{
        display: {
          xs: 'flex',
          md: priceProps?.variant === 'horizontal' ? 'flex' : 'block'
        },
        alignItems: 'center'
      }}
      className="style-ButtonPrice"
    >
      <Button
        {...buttonProps}
        sx={{
          backgroundColor: isButtonSecond ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoRed,
          color: isButtonSecond ? colors.primary.bandaiNamcoBlack : colors.primary.bandaiNamcoWhite,
          padding: {
            xs: '8px 48px 12px',
            md: '10px 46.5px 14px',
          },
          '&:hover': {
            backgroundColor: isButtonSecond ? colors.primary.bandaiNamcoWhite : colors.accent.accentRed[1],
            color: isButtonSecond ? colors.accent.accentRed[1] : colors.primary.bandaiNamcoWhite,
          }
        }}
      >
        {buttonProps.label}
      </Button>
      <Box
        sx={{
          display: {
            xs: 'block',
            md: 'flex',
          },
          flexDirection: priceProps?.variant === 'horizontal' ? 'column' : 'row',
          marginTop: {
            xs: '0px',
            md: priceProps?.variant === 'horizontal' ? '0' : '12px'
          },
          marginLeft: {
            xs: '12px',
            md: priceProps?.variant === 'horizontal' ? '12px' : '0'
          }
        }}
      >
        <Typography variant='l1' color={colors.neutral.neutral2}
          sx={{
            fontSize: {
              xs: '12px',
              md: '14px'
            },
            lineHeight: '19px',
            fontWeight: 400,
            marginRight: '4px'
          }}
        >
          {priceProps?.label}
        </Typography>
        <Typography variant='p7' color={colors.primary.bandaiNamcoBlack}>
          {priceProps?.currency}{!priceProps.noFormat ? formatCurrency(Number(priceProps?.amount) || 0, 2) : priceProps?.amount}
        </Typography>
      </Box>

    </Box>
  );
};

export default ButtonPrice;
