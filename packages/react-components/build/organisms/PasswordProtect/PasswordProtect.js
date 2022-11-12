import _extends from "@babel/runtime/helpers/esm/extends";

var _g, _g2, _g3, _g4, _g5, _g6, _g7, _g8;

// import modules
import Box from '@mui/material/Box';
import React, { useEffect, useRef, useState } from 'react';
import Button from "../../atoms/Button";
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Typography from "../../atoms/Typography";
import TextField from "../../molecules/TextField";
import { SvgIcon } from '@mui/material'; // import colors

import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const PasswordProtect = props => {
  const {
    description,
    formPassword,
    handleCheckPassWord,
    stateError = 'asasa'
  } = props;
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const isFocus = useRef(false);
  const refContent = useRef();

  const handleShowLoading = () => {
    setIsShowLoading(true);
    setTimeout(() => {
      setIsShowLoading(false);
    }, 400);
  };

  const handleOnclickCheckPassWord = () => {
    setTimeout(() => {
      handleCheckPassWord == null ? void 0 : handleCheckPassWord(valueInput);
    }, 500);
  };

  useEffect(() => {
    setError(!!stateError);
    setErrorText(formPassword.textInput.errorText);
  }, [stateError, formPassword]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const content = refContent.current;
      window.addEventListener("keydown", e => {
        const key = (e == null ? void 0 : e.keyCode) || (e == null ? void 0 : e.which);

        if (!!isFocus.current && key === 13) {
          if (content) {
            const btn = content.querySelector(".btn-submit");

            if (btn) {
              btn.click();
            }
          }
        }
      });
    }

    ;
    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, [isFocus]);

  const IconLoadingSVG = propSvg => {
    return /*#__PURE__*/_jsxs(SvgIcon, _extends({}, propSvg, {
      width: "40",
      height: "40",
      viewBox: "0 0 100 100",
      fill: "none",
      sx: {
        width: {
          xs: '40px'
        },
        height: {
          xs: '40px'
        }
      },
      children: [_g || (_g = /*#__PURE__*/_jsx("g", {
        transform: "rotate(0 50 50)",
        children: /*#__PURE__*/_jsx("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/_jsx("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.875s",
            repeatCount: "indefinite"
          })
        })
      })), _g2 || (_g2 = /*#__PURE__*/_jsx("g", {
        transform: "rotate(45 50 50)",
        children: /*#__PURE__*/_jsx("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/_jsx("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.75s",
            repeatCount: "indefinite"
          })
        })
      })), _g3 || (_g3 = /*#__PURE__*/_jsx("g", {
        transform: "rotate(90 50 50)",
        children: /*#__PURE__*/_jsx("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/_jsx("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.625s",
            repeatCount: "indefinite"
          })
        })
      })), _g4 || (_g4 = /*#__PURE__*/_jsx("g", {
        transform: "rotate(135 50 50)",
        children: /*#__PURE__*/_jsx("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/_jsx("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.5s",
            repeatCount: "indefinite"
          })
        })
      })), _g5 || (_g5 = /*#__PURE__*/_jsx("g", {
        transform: "rotate(180 50 50)",
        children: /*#__PURE__*/_jsx("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/_jsx("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.375s",
            repeatCount: "indefinite"
          })
        })
      })), _g6 || (_g6 = /*#__PURE__*/_jsx("g", {
        transform: "rotate(225 50 50)",
        children: /*#__PURE__*/_jsx("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/_jsx("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.25s",
            repeatCount: "indefinite"
          })
        })
      })), _g7 || (_g7 = /*#__PURE__*/_jsx("g", {
        transform: "rotate(270 50 50)",
        children: /*#__PURE__*/_jsx("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/_jsx("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.125s",
            repeatCount: "indefinite"
          })
        })
      })), _g8 || (_g8 = /*#__PURE__*/_jsx("g", {
        transform: "rotate(315 50 50)",
        children: /*#__PURE__*/_jsx("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/_jsx("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "0s",
            repeatCount: "indefinite"
          })
        })
      }))]
    }));
  };

  const handelBlurInput = () => {
    if (!valueInput) {
      setError(true);
      setErrorText(formPassword.textInput.isEmpty || "");
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      maxWidth: '740px',
      width: '100%'
    },
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "p2",
      sx: {
        color: colors.neutral.neutral2,
        "& div": {
          padding: "0px !important"
        },
        "& p": {
          padding: "0px !important"
        }
      },
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "div",
        value: description
      })
    }), /*#__PURE__*/_jsxs(Box, {
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "p2",
        sx: {
          color: colors.neutral.neutral2,
          fontSize: {
            xs: '16px',
            md: '18px'
          },
          lineHeight: {
            md: '26px',
            xs: '22px'
          },
          marginTop: {
            xs: '60px',
            md: '64px'
          }
        },
        children: /*#__PURE__*/_jsx(HtmlRenderer, {
          component: "div",
          value: formPassword.title
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '24px',
            md: '32px'
          },
          maxWidth: '357px',
          width: '100%'
        },
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginRight: {
              xs: "0px",
              md: "8px"
            },
            marginBottom: {
              xs: "16px",
              md: "0px"
            },
            marginTop: {
              xs: '24px',
              md: '32px'
            },
            maxWidth: '357px',
            width: '100%',
            "& .style-TextField": {
              "& .MuiInputLabel-root.Mui-error": {
                color: colors.neutral.neutral2
              }
            },
            "& div > div > div > input": {
              padding: "30px 32px 7px 0px !important"
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: colors.neutral.neutral2,
                borderWidth: '1px !important'
              }
            },
            "& .MuiOutlinedInput-root:hover": {
              "& > fieldset": {
                borderColor: colors.neutral.neutral1,
                borderWidth: '1px !important'
              }
            },
            '& input': {
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 1000px transparent inset !important'
              }
            }
          },
          children: [/*#__PURE__*/_jsx(TextField, {
            label: formPassword.textInput.placeholder || "",
            error: !!error,
            type: "password",
            onChange: e => {
              setValueInput(e.target.value);
              setError(false);
            },
            onFocus: () => {
              isFocus.current = true;
            },
            onBlur: () => {
              isFocus.current = false;
              handelBlurInput();
            }
          }), !!error && /*#__PURE__*/_jsx(Typography, {
            sx: {
              fontSize: "12px",
              lineHeight: "18px",
              marginLeft: "32px",
              marginTop: "4px"
            },
            color: colors.primary.bandaiNamcoRed,
            children: errorText
          })]
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          width: {
            md: "271px",
            xs: "149px"
          },
          marginLeft: {
            xs: 'auto',
            md: '0px'
          },
          marginRight: 'auto',
          display: "flex",
          marginTop: '32px',
          "& button": {
            width: "100%",
            marginTop: {
              md: "7px",
              xs: "0px"
            }
          }
        },
        ref: refContent,
        children: /*#__PURE__*/_jsxs(Button, {
          variant: "secondaryBlack",
          onClick: () => {
            handleShowLoading();
            handleOnclickCheckPassWord();
          },
          className: "btn-submit",
          sx: {
            display: "flex",
            justifyContent: "center",
            marginTop: '0px !important'
          },
          children: [!isShowLoading && formPassword.childrenBtn, valueInput && isShowLoading && /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              marginTop: '5px',
              '& svg': {
                width: '22px'
              }
            },
            children: /*#__PURE__*/_jsx(IconLoadingSVG, {})
          })]
        })
      })]
    })]
  });
};

export default PasswordProtect;