import _extends from "@babel/runtime/helpers/esm/extends";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import MuiTextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { useTheme } from '@mui/styles';
import omit from 'lodash/omit'; // Types

import { useMediaQuery } from '@mui/material';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const TextArea = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    error = false,
    placeholder = 'placeholder',
    sx: styleFromProps = {},
    dataName = () => {},
    limitText,
    width = 271,
    label = '',
    helperText,
    disabled = false,
    onChange = () => {},
    register = () => {},
    name = '',
    required = false,
    onFocus = () => {}
  } = props;
  const [count, setCount] = useState(0);
  const [dataTextArea, setDataTextArea] = useState('');
  const [labelText, setLabelText] = useState(placeholder);
  const [errorTextField, setErrorTextField] = useState(error);
  const [selectDisabled, setSelectDisabled] = useState(disabled);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  /**
   * Handle change
   */

  const handleChange = event => {
    setCount(event.target.value.length);
    dataName(event);
    setDataTextArea(event.target.value);
  };

  const handleChangeTextLabelFocus = () => {
    setLabelText(label);
  };

  const handleChangeTextLabelBlur = () => {
    if (dataTextArea) {
      setLabelText(label);
    } else {
      setLabelText(label);
    }
  };
  /**
   *
   * Set color msg err
   */


  const handleChangeColorNumberCount = () => {
    if (disabled) {
      return colors.neutral.neutral5;
    }

    if (error) {
      return colors.otherColor.silver;
    }

    if (count > 0) {
      return colors.primary.bandaiNamcoBlack;
    }

    return colors.otherColor.silver;
  };
  /**
  * Change status
  */


  useEffect(() => {
    setErrorTextField(error);
    setSelectDisabled(disabled);
  }, [error, disabled]);
  useImperativeHandle(ref, () => ({
    handleChange(data) {
      setCount(data.length);
      setDataTextArea(data);
    }

  }));
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      maxWidth: width,
      '& .MuiFormHelperText-root': {
        marginLeft: ' 32px',
        color: colors.accent.accentRed[2]
      },
      '& .MuiInputLabel-root': {
        transform: 'translate(32px,16px) scale(1)',
        fontSize: '14px',
        color: colors.otherColor.silver,
        '&.Mui-error': {
          color: colors.otherColor.silver
        },
        '&.Mui-focused': {
          transform: 'translate(32px,10px) scale(1)',
          fontWeight: '600',
          color: colors.neutral.neutral2,
          fontSize: '12px'
        },
        '&.Mui-disabled': {
          color: colors.neutral.neutral5
        }
      },
      '& .MuiFormLabel-filled': {
        transform: 'translate(32px,10px) scale(1)',
        fontSize: '12px',
        fontWeight: '600',
        color: colors.neutral.neutral2
      },
      '& legend': {
        display: 'none'
      }
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        position: 'relative'
      },
      children: [/*#__PURE__*/_jsx(MuiTextField, _extends({
        onChange: e => {
          handleChange(e);
          onChange(e);
        },
        label: labelText,
        error: errorTextField,
        inputProps: {
          maxLength: limitText,
          classes: {
            notchedOutline: {
              borderColor: 'red !important',
              borderWidth: '1px'
            }
          }
        },
        disabled: selectDisabled,
        ref: ref,
        rows: !isMobile ? 8 : 4,
        onFocus: e => {
          handleChangeTextLabelFocus();
          onFocus(e);
        },
        onBlur: () => handleChangeTextLabelBlur()
      }, register(name, {
        required
      }), {
        multiline: true,
        sx: _extends({}, styleFromProps, {
          width: '100%',
          maxWidth: width,
          [`& fieldset`]: {
            borderRadius: 1,
            borderColor: colors.neutral.neutral5
          },
          "& label": {
            maxWidth: "calc(100% - 60px)"
          },
          '& textarea': {
            fontSize: {
              xs: "16px",
              md: '14px'
            },
            color: colors.primary.bandaiNamcoBlack
          },
          '.MuiOutlinedInput-root': {
            '&.Mui-disabled': {
              '& textarea': {
                WebkitTextFillColor: colors.neutral.neutral5
              }
            },
            '&.Mui-error': {
              "& > fieldset": {
                color: colors.otherColor.silver,
                backgroundColor: 'rgba(255, 88, 88, 0.05)'
              },
              '&:hover fieldset': {
                borderColor: colors.primary.bandaiNamcoRed,
                borderWidth: '0.5px'
              },
              '&.Mui-focused fieldset': {
                borderColor: colors.primary.bandaiNamcoRed,
                borderWidth: '0.5px'
              }
            },
            "&.Mui-focused": {
              "& > fieldset": {
                borderColor: colors.neutral.neutral2,
                borderWidth: '0.5px'
              }
            },
            maxHeight: '100%',
            height: {
              xs: '160px',
              md: '250px'
            },
            padding: '20px 32px 34px'
          }
        })
      }, omit(props, ['icon', 'iconPosEnd', 'sx', 'success', 'register', 'dataName', 'limitText', 'helperText']))), /*#__PURE__*/_jsx(Box, {
        sx: {
          position: 'absolute',
          right: '32px',
          bottom: '18px'
        },
        children: /*#__PURE__*/_jsxs(Typography, {
          variant: "p8",
          color: colors.otherColor.silver,
          sx: {
            fontSize: '12px',
            color: handleChangeColorNumberCount()
          },
          children: [error ? '0' : count, "/", limitText]
        })
      })]
    }), error && /*#__PURE__*/_jsx(FormHelperText, {
      children: helperText
    })]
  });
});
export default TextArea;