import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/styles';
import { IconAttachment, IconClose, IconAdd } from "../../atoms/Icon";
import Typography from "../../atoms/Typography"; // Types

import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const FileUploader = props => {
  const {
    onlyFilesText,
    selectFilesText = "textlink",
    dropFilesText,
    uploadAttachmentText,
    onChange = () => {},
    parent = () => {},
    register = () => {},
    name = '',
    required = false,
    maxSize = 10,
    errorText,
    wrongFormat,
    limitFiles
  } = props;
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const maxSizeConvert = maxSize * 1000000;
  const maxFiles = 5;
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const TEXT_ERROR = {
    maxSize: errorText != null ? errorText : `Keep your file within ${maxSize} MB`,
    wrongFormat: wrongFormat != null ? wrongFormat : "Upload a PDF, PNG or JPG file",
    limitFiles: limitFiles != null ? limitFiles : 'Upload up to 5 files'
  };

  /**
   *
   * @param fileList list file select handle check
   * @returns has file with size larger than maxSize and wrong type
   */
  const checkSizeAndTypeForFile = fileList => {
    const length = fileList.length;
    const result = {
      isNotError: true,
      message: ""
    };

    for (let i = 0; i < length; i += 1) {
      if (fileList[i].type !== "image/png" && fileList[i].type !== "image/jpeg" && fileList[i].type !== "application/pdf") {
        result.isNotError = false;
        result.message = TEXT_ERROR.wrongFormat;
        break;
      }

      if (fileList[i].size >= maxSizeConvert) {
        result.isNotError = false;
        result.message = TEXT_ERROR.maxSize;
        break;
      }
    }

    if (fileList.length > 5) {
      result.isNotError = false;
      result.message = TEXT_ERROR.limitFiles;
    }

    return result;
  };
  /**
   * Run when files selected
   */


  const handleFileSelected = event => {
    if (files.length < 5) {
      const items = [...files];

      for (let i = 0; i < event.target.files.length; i += 1) {
        items.push(event.target.files[i] || event.dataTransfer.items);
      }

      const checkFile = checkSizeAndTypeForFile(items);

      if (checkFile.isNotError) {
        setFiles(items.length <= maxFiles ? items : items.splice(0, 5));
        setError("");
      } else {
        setError(checkFile.message);
      }
    } // reset value input upload file


    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  function dropHandler(ev) {
    var _ev$dataTransfer$item;

    const length = ((_ev$dataTransfer$item = ev.dataTransfer.items) == null ? void 0 : _ev$dataTransfer$item.length) || 0; // Prevent default behavior (Prevent file from being opened)

    ev.preventDefault(); // Show error message if length of dataTransfer more than 5

    if (ev.dataTransfer.items && length > 5) {
      setError(TEXT_ERROR.limitFiles);
      return;
    }

    if (files.length < 5) {
      const items = []; // Use DataTransferItemList interface to access the file(s)

      for (let i = 0; i < length; i += 1) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i].getAsFile();
          items.push(file); // Merge the list of existing files and the files being imported.

          const newListFile = [...files, ...items];
          const checkFile = checkSizeAndTypeForFile(newListFile);

          if (checkFile.isNotError) {
            setFiles(newListFile.length <= maxFiles ? newListFile : newListFile.splice(0, 5));
            setError("");
          } else {
            setError(checkFile.message);
          }
        }
      }
    }
  }
  /**
   *
   * @param color color border when error null
   * function set border color for Box wrapper
   */


  function handleChangeColorBorder(color) {
    if (wrapperRef.current) {
      if (!error) {
        wrapperRef.current.style.borderColor = color;
        wrapperRef.current.style.borderWidth = '1px';
      } else {
        wrapperRef.current.style.borderColor = colors.accent.accentRed[2];
      }

      if (files.length >= 5) {
        wrapperRef.current.style.borderColor = colors.otherColor.silver;
      }
    }
  }
  /**
   * @param ev event MouseEnter for react
   * function handle change color when mouse drag file inter Box wrapper
   */


  function dragOverHandler(ev) {
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    handleChangeColorBorder(colors.neutral.neutral4);
  }
  /**
   * @param ev event MouseEnter for react
   * function handle change color when mouse inter Box wrapper
   */


  function handelMouseEnter(ev) {
    ev.preventDefault();
    handleChangeColorBorder(colors.neutral.neutral1);
  }
  /**
  * @param ev event MouseEnter for react
  * function handle change color when mouse Leave Box wrapper
  */


  function handelMouseLeave(ev) {
    ev.preventDefault();
    handleChangeColorBorder(colors.neutral.neutral5);
  } // handle change color border Box wrapper when state error change


  useEffect(() => {
    if (wrapperRef.current) {
      if (!error) {
        wrapperRef.current.style.borderColor = colors.neutral.neutral1;
      } else {
        wrapperRef.current.style.borderColor = colors.accent.accentRed[2];
      }
    }
  }, [error]); // reset color border when component mount

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.borderColor = colors.neutral.neutral5;
    }
  }, []);
  useEffect(() => {
    parent(files);
  }, [files, parent]);
  /**
   * Run after clicking the close icon on each item
   */

  const handleAfterCloseFile = id => {
    files.splice(id, 1);
    setFiles([...files]);

    if (!files.length) {
      handleChangeColorBorder(colors.neutral.neutral5);
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      ref: wrapperRef,
      sx: {
        minHeight: '93px',
        maxWidth: '100%',
        border: `1px solid`,
        borderColor: colors.neutral.neutral5,
        borderRadius: '24px',
        padding: '20px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: `${error ? colors.accent.accentRed[3] : "none"}`,
        '& hover': {
          borderColor: colors.neutral.neutral5
        }
      },
      onDragOver: dragOverHandler,
      onDrop: e => {
        dropHandler(e);
        onChange(e);
      },
      onMouseEnter: handelMouseEnter,
      onMouseLeave: handelMouseLeave,
      children: [/*#__PURE__*/_jsxs(Box, {
        onDragStart: e => handleFileSelected(e),
        sx: {
          width: '100%',
          borderRadius: '60px',
          display: 'flex',
          flexDirection: 'column',
          [`svg`]: {
            paddingRight: '10px'
          },
          [`#files`]: {
            opacity: 0,
            position: 'absolute',
            zIndex: -1,
            alignItems: 'baseline'
          }
        },
        children: [/*#__PURE__*/_jsxs("label", {
          htmlFor: "files",
          style: {
            display: 'flex',
            paddingRight: '10px',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/_jsx(IconAdd, {
            htmlColor: colors.primary.bandaiNamcoBlack,
            sx: {
              width: "1.18em",
              height: "1.18em",
              marginRight: "5px"
            }
          }), /*#__PURE__*/_jsx("span", {
            style: {
              color: colors.otherColor.silver,
              fontSize: '14px',
              lineHeight: '19px',
              fontWeight: 400
            },
            children: uploadAttachmentText
          })]
        }), /*#__PURE__*/_jsxs(Box, {
          onDragStart: e => handleFileSelected(e),
          sx: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            '& .selectFiles': {
              marginTop: isMobile ? '10.5px' : '',
              marginBottom: isMobile ? '17px' : '',
              color: colors.otherColor.silver,
              fontSize: '14px',
              lineHeight: '19px',
              fontWeight: 400,
              marginLeft: {
                xs: "0px",
                md: "33.3px"
              },
              marginRight: {
                xs: "0px",
                md: "5px"
              }
            }
          },
          children: [/*#__PURE__*/_jsx("label", {
            className: "selectFiles",
            htmlFor: "files",
            children: /*#__PURE__*/_jsxs(Typography, {
              variant: "p8",
              sx: {
                alignItems: 'baseline',
                display: "inline-block",
                paddingRight: '30px',
                whiteSpace: "nowrap",
                '& span': {
                  textDecoration: 'underline',
                  cursor: "pointer",
                  color: files.length >= 5 ? '#C1C1C1' : colors.primary.bandaiNamcoBlack,
                  paddingRight: '3px'
                }
              },
              children: [/*#__PURE__*/_jsx("span", {
                children: selectFilesText
              }), !isMobile && dropFilesText]
            })
          }), /*#__PURE__*/_jsx("span", {
            style: {
              color: colors.otherColor.silver,
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: 400,
              maxWidth: "260px"
            },
            children: onlyFilesText
          }), /*#__PURE__*/_jsx("input", _extends({
            disabled: files.length >= 5
          }, register(name, {
            required
          }), {
            type: "file",
            id: "files",
            name: "files",
            accept: "image/png, image/jpeg, .pdf",
            multiple: true,
            onChange: e => {
              handleFileSelected(e);
              onChange(e);
            },
            ref: inputRef
          }))]
        })]
      }), files.length > 0 && /*#__PURE__*/_jsx(Box, {
        sx: isMobile ? {
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '8px',
          padding: "0px"
        } : {
          marginTop: '16px',
          padding: "0px 33.3px",
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'flex-start'
        },
        children: files.map((file, id) => /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            flexDirection: 'row',
            border: '1px solid #dddd',
            borderRadius: '12px',
            padding: '13px 22px',
            alignItems: 'center',
            maxWidth: '100%',
            [`& label`]: {
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "18px",
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              WebkitLineClamp: 1,
              marginRight: '20px',
              marginLeft: '5px',
              whiteSpace: "nowrap"
            },
            "& svg": {
              width: '13.3px',
              height: '14.3px'
            }
          },
          children: [/*#__PURE__*/_jsx(IconAttachment, {
            htmlColor: colors.primary.bandaiNamcoBlack
          }), /*#__PURE__*/_jsx("label", {
            children: file.name
          }), /*#__PURE__*/_jsx(IconClose, {
            htmlColor: colors.primary.bandaiNamcoBlack,
            sx: {
              transform: "translateY(1px)",
              cursor: "pointer"
            },
            onClick: () => handleAfterCloseFile(id)
          })]
        }, file.name + id))
      })]
    }), !!error && /*#__PURE__*/_jsx(Typography, {
      variant: "p8",
      sx: {
        color: colors.accent.accentRed[2],
        fontWeight: "400",
        fontSize: "0.75rem",
        lineHeight: "1.66em",
        textAlign: "left",
        margin: "3px 14px 0px",
        marginLeft: "32px"
      },
      children: error
    })]
  });
};

export default FileUploader;