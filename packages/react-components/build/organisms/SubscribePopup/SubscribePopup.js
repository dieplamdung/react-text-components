import _extends from "@babel/runtime/helpers/esm/extends";

var _g, _g2, _g3, _g4, _g5, _g6, _g7, _g8;

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState, useMemo, useEffect, useLayoutEffect } from 'react';
import colors from "../../theme/colors";
import { IconClose } from "../../atoms/Icon";
import { useTheme } from '@mui/styles';
import { SvgIcon, useMediaQuery } from '@mui/material';
import Typography from "../../atoms/Typography";
import TextField from "../../molecules/TextField";
import Button from "../../atoms/Button";
import HtmlRenderer from "../../atoms/HtmlRenderer";
import _ from 'lodash';
import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const SubscribePopup = ({
  isOpen,
  onClose,
  imageLink,
  contentText,
  textInput,
  childrenBtn,
  onSubscribe,
  errorText,
  hrefNextPage,
  onSeeNew,
  contentModalSmall,
  stepForm = 0,
  serverReturn,
  serverReturnErr,
  handleClosePopup
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [stepContent, setStepContent] = useState(0);
  const [error, setError] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [serverReturnState, setServerReturnState] = useState(0);
  const IMG = {
    xs: (imageLink == null ? void 0 : imageLink.xs) || "https://i.ibb.co/kDmB61g/Image.png",
    md: (imageLink == null ? void 0 : imageLink.md) || "https://i.ibb.co/tCpRLxb/Image.png"
  };
  const ERROR_TEXT = "Incorrect format e.g. name@example.com";
  useEffect(() => {
    if (!isOpen) {
      setStepContent(0);
      setError("");
      setValueInput("");
    }
  }, [isOpen]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      disableScrollBody(isOpen);
    }
  }, [isOpen]);
  useEffect(() => {
    setStepContent(stepForm);
  }, [stepForm]);
  useLayoutEffect(() => {
    setIsShowLoading(false);

    if (!valueInput) {
      setError("");
      return;
    } // eslint-disable-next-line no-useless-escape


    const REGIX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

    if (REGIX.test(valueInput)) {
      setError("");
    } else {
      setError(errorText || ERROR_TEXT);
    }
  }, [valueInput, errorText]);

  const IconLoadingSVG = props => {
    return /*#__PURE__*/_jsxs(SvgIcon, _extends({}, props, {
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

  const handleShowLoading = value => {
    setIsShowLoading(value);
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
      onClick: () => {
        onClose == null ? void 0 : onClose();
        handleClosePopup == null ? void 0 : handleClosePopup();
      }
    });
  }, [onClose, handleClosePopup]);

  const handleChangeWithDebounce = _.debounce(async e => {
    if (e.target.value) {
      setValueInput(e.target.value);
    }
  }, 500);

  useEffect(() => {
    setServerReturnState(serverReturn);

    if (serverReturn > 0) {
      setIsShowLoading(false);
      setError('err');
    } else {
      setError("");
    }
  }, [serverReturn]);
  return /*#__PURE__*/_jsx(Modal, {
    open: isOpen,
    onClose: () => onClose == null ? void 0 : onClose(),
    disableAutoFocus: true,
    sx: {
      pointerEvents: "auto",
      outline: 'none'
    },
    children: stepContent === 0 ? /*#__PURE__*/_jsx(Box, {
      sx: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: {
          lg: "930px",
          md: "730px",
          xs: "311px"
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
          // height: {
          //   xs: "auto",
          //   md: "420px",
          //   lg: "454px",
          // },
          overflow: 'auto',
          width: '100%',
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          '& .MuiTypography-root': {
            paddingLeft: '0px',
            paddingRight: '0px'
          }
        },
        color: colors.secondaryGray.shade600,
        children: [renderIconClose, /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex",
            maxWidth: '350px',
            marginBottom: "0px",
            paddingBottom: {
              md: '60px',
              xs: '0px'
            },
            "& img": {
              width: "100%",
              display: 'block'
            }
          },
          children: /*#__PURE__*/_jsx("img", {
            src: isMobile ? IMG.xs : IMG.md,
            alt: "img"
          })
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            padding: {
              lg: "83px 98px 0px 50px",
              md: "40px 48px 0px 20px",
              xs: "32px 16px"
            }
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            color: colors.primary.bandaiNamcoBlack,
            sx: {
              fontSize: {
                xs: "26px",
                md: "36px"
              },
              lineHeight: {
                xs: "26px",
                md: "44px"
              },
              fontWeight: "600",
              letterSpacing: {
                md: "-0.4px",
                lg: "-0.2px"
              },
              marginBottom: {
                xs: "8px",
                md: "12px"
              }
            },
            children: contentText == null ? void 0 : contentText.title
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p8",
            color: colors.neutral.neutral2,
            sx: {
              fontSize: {
                xs: "14px",
                md: "14px"
              },
              lineHeight: {
                xs: "20px",
                md: "19px"
              },
              letterSpacing: {
                md: "-0.3px",
                xs: "0px"
              },
              marginBottom: {
                md: "32px",
                xs: "24px"
              }
            },
            children: contentText == null ? void 0 : contentText.label
          }), /*#__PURE__*/_jsxs(Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column"
              },
              marginBottom: {
                xs: "24px",
                md: "52px"
              }
            },
            children: [/*#__PURE__*/_jsxs(Box, {
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
                "& div > div > div > input": {
                  padding: "28px 32px 7px 0px !important"
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: colors.neutral.neutral1,
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
                label: (textInput == null ? void 0 : textInput.placeholder) || "",
                disabled: isShowLoading,
                error: !!error,
                onChange: handleChangeWithDebounce
              }), !!error && /*#__PURE__*/_jsx(Typography, {
                sx: {
                  fontSize: "12px",
                  lineHeight: "18px",
                  marginLeft: "32px",
                  marginTop: "4px"
                },
                color: colors.primary.bandaiNamcoRed,
                children: serverReturnState > 0 ? serverReturnErr[`${serverReturnState}`] : errorText
              })]
            }), /*#__PURE__*/_jsx(Box, {
              sx: {
                width: {
                  md: "127px",
                  xs: "100%"
                },
                display: "flex",
                "& button": {
                  width: "100%",
                  background: colors.primary.bandaiNamcoRed,
                  color: colors.primary.bandaiNamcoWhite,
                  marginTop: {
                    md: "7px",
                    xs: "0px"
                  }
                }
              },
              children: /*#__PURE__*/_jsxs(Button, {
                variant: "primary",
                disabled: !valueInput || !!error || isShowLoading,
                onClick: () => {
                  onSubscribe == null ? void 0 : onSubscribe(valueInput);
                  handleShowLoading(true);
                },
                sx: {
                  display: "flex",
                  justifyContent: "center"
                },
                children: [!isShowLoading && childrenBtn, valueInput && !error && isShowLoading && /*#__PURE__*/_jsx(Box, {
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
          }), /*#__PURE__*/_jsx(Typography, {
            sx: {
              width: {
                md: "359px",
                xs: "100%"
              },
              fontSize: "14px",
              lineHeight: {
                xs: "20px",
                md: "19px"
              },
              color: colors.neutral.neutral2,
              textAlign: {
                md: "left",
                xs: "center"
              },
              "& a": {
                color: colors.primary.bandaiNamcoBlack,
                textDecoration: "none",
                position: "relative",
                whiteSpace: "nowrap",
                '&:hover': {
                  textDecoration: 'none'
                },
                "&::after": {
                  content: "''",
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  width: "100%",
                  height: "1px",
                  backgroundColor: colors.primary.bandaiNamcoBlack
                }
              },
              "& p": {
                margin: "0px"
              }
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: contentText == null ? void 0 : contentText.description
            })
          })]
        })]
      })
    }) : /*#__PURE__*/_jsx(Box, {
      sx: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: {
          md: "520px",
          xs: "100%"
        },
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
            textAlign: "center",
            letterSpacing: {
              xs: "-0.4px",
              md: "-0.8px"
            },
            marginBottom: {
              xs: "16px",
              md: "8px"
            }
          },
          children: (contentModalSmall == null ? void 0 : contentModalSmall.title) || "Thanks for subscribing!"
        }), /*#__PURE__*/_jsx(Typography, {
          sx: {
            fontSize: "14px",
            lineHeight: {
              xs: "20px",
              md: "19px"
            },
            textAlign: "center",
            marginBottom: {
              xs: "32px",
              md: "40px"
            }
          },
          children: (contentModalSmall == null ? void 0 : contentModalSmall.label) || "Look forward to exciting deals and news soon."
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "center"
          },
          children: hrefNextPage ? /*#__PURE__*/_jsx(Button, {
            variant: "primary",
            sx: {
              background: colors.primary.bandaiNamcoRed,
              color: colors.primary.bandaiNamcoWhite,
              width: "204px",
              fontSize: {
                xs: "14px",
                md: "16px"
              }
            },
            externalLink: hrefNextPage || undefined,
            children: (contentModalSmall == null ? void 0 : contentModalSmall.labelBtn) || 'See news and events'
          }) : /*#__PURE__*/_jsx(Button, {
            variant: "primary",
            sx: {
              background: colors.primary.bandaiNamcoBlack,
              color: colors.primary.bandaiNamcoWhite,
              width: "204px",
              fontSize: {
                xs: "14px",
                md: "16px"
              }
            },
            onClick: () => onSeeNew == null ? void 0 : onSeeNew(),
            children: (contentModalSmall == null ? void 0 : contentModalSmall.labelBtn) || 'See news and events'
          })
        })]
      })
    })
  });
};

export default SubscribePopup;