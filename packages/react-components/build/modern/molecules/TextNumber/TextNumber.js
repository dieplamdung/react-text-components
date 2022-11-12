import _extends from "@babel/runtime/helpers/esm/extends";
import React, { forwardRef, useEffect, useState } from 'react';
import MuiTextNumber from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import omit from 'lodash/omit';
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
const TextNumber = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    icon,
    iconPosEnd,
    error = false,
    disabled = false,
    success,
    width,
    onChange = () => {},
    InputLabelProps,
    defaultValue
  } = props;
  const iconStyle = {
    fontSize: 12,
    marginLeft: '0px',
    marginRight: '0px',
    background: colors.primary.bandaiNamcoWhite
  };
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      maxWidth: '100%',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: colors.neutral.neutral5
        },
        '&.Mui-focused fieldset': {
          borderColor: colors.neutral.neutral2,
          borderWidth: '0.5px'
        },
        "&.Mui-error": {
          "& > fieldset": {
            borderColor: colors.primary.bandaiNamcoRed,
            borderWidth: '0.5px'
          },
          '&:hover fieldset': {
            borderColor: colors.primary.bandaiNamcoRed,
            borderWidth: '0.5px'
          },
          '&.Mui-focused fieldset': {
            borderColor: colors.primary.bandaiNamcoRed,
            borderWidth: '0.5px'
          }
        }
      },
      '& .CustomMuiInputBase-iconPosEnd': {
        flexDirection: 'row-reverse',
        paddingRight: ' 26px',
        paddingLeft: '0px',
        '& svg': {
          fontSize: '18px'
        }
      },
      '& .MuiFormHelperText-root': {
        marginLeft: ' 32px',
        color: colors.accent.accentRed[2]
      },
      '& .MuiInputLabel-root': {
        transform: 'translate(32px,21px) scale(1)',
        color: colors.otherColor.silver,
        lineHeight: 'initial',
        '&.Mui-focused': {
          transform: 'translate(32px,9px) scale(1)',
          fontWeight: '600',
          color: colors.neutral.neutral2,
          fontSize: '14px'
        },
        '&.Mui-disabled': {
          color: colors.neutral.neutral5
        }
      },
      '& .MuiFormLabel-filled': {
        transform: 'translate(32px,9px) scale(1)',
        fontSize: '14px',
        fontWeight: '600',
        color: colors.neutral.neutral2
      },
      '& legend': {
        display: 'none'
      }
    },
    children: /*#__PURE__*/_jsx(MuiTextNumber, _extends({
      InputLabelProps: InputLabelProps,
      onChange: onChange,
      error: error,
      type: "number",
      inputRef: ref,
      autoComplete: "off" // value={value}
      ,
      defaultValue: value,
      InputProps: {
        className: `${success && 'Mui-success'} ${iconPosEnd && 'CustomMuiInputBase-iconPosEnd'}`,
        startAdornment: /*#__PURE__*/_jsx(InputAdornment, {
          position: iconPosEnd ? 'end' : 'start',
          children: !disabled && !error && icon && success && /*#__PURE__*/React.cloneElement(icon, {
            sx: _extends({}, iconStyle, disabled ? {
              color: colors.neutral.neutral6
            } : {}, icon.props?.sx || {})
          })
        })
      },
      sx: {
        width: '100%',
        maxWidth: width,
        maxHeight: '60px',
        [`& fieldset`]: {
          borderRadius: '60px',
          height: '60px',
          top: '0px',
          border: `1px solid ${colors.neutral.neutral5}`,
          [`& legend`]: {
            display: 'none'
          }
        },
        [`& label`]: {
          fontSize: '14px',
          [`&.Mui-focused`]: {
            display: 'block',
            color: colors.neutral.neutral2
          }
        },
        [`.MuiOutlinedInput-root`]: {
          color: colors.neutral.neutral5,
          '&.Mui-success': {
            '& fieldset': {
              background: colors.accent.accentGreen[3],
              border: `1px solid ${colors.accent.accentGreen[2]}`
            }
          },
          '&.Mui-error': {
            '& fieldset': {
              background: 'rgba(255, 88, 88, 0.05)'
            }
          },
          '&.Mui-disabled': {
            '& input': {
              WebkitTextFillColor: colors.neutral.neutral5
            }
          },
          '&.Mui-focused': {
            '& input': {
              padding: '28px 2px 7px 23px',
              "&::-webkit-outer-spin-button": {
                "WebkitAppearance": "none",
                margin: "0px"
              },
              "&::-webkit-inner-spin-button": {
                "WebkitAppearance": "none",
                margin: "0px"
              }
            },
            '& input[type=number]': {
              "MozAppearance": "textfield"
            }
          },
          [`&.Mui-success + p`]: {
            display: 'block',
            color: colors.accent.accentGreen[2],
            marginLeft: '32px'
          },
          [`.MuiInputAdornment-root`]: {
            [`svg`]: {
              color: 'transparent',
              zIndex: 1
            }
          },
          [`& input`]: {
            visibility: 'visible',
            color: colors.primary.bandaiNamcoBlack,
            transform: 'translate(10px, 0px)',
            padding: '28px 2px 7px 23px',
            zIndex: 1,
            position: 'relative',
            "&::-webkit-outer-spin-button": {
              "WebkitAppearance": "none",
              margin: "0px"
            },
            "&::-webkit-inner-spin-button": {
              "WebkitAppearance": "none",
              margin: "0px"
            }
          }
        },
        [`.MuiFormHelperText-root`]: {
          display: 'none',
          [`&.Mui-error`]: {
            display: 'block'
          }
        }
      }
    }, omit(props, ['icon', 'iconPosEnd', 'sx', 'success', 'onChange', 'parent'])))
  });
});
export default TextNumber;