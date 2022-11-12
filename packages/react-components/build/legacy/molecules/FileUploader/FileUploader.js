import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/styles';
import { IconAttachment, IconClose, IconAdd } from "../../atoms/Icon";
import Typography from "../../atoms/Typography"; // Types

import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var FileUploader = function FileUploader(props) {
  var _ref;

  var onlyFilesText = props.onlyFilesText,
      _props$selectFilesTex = props.selectFilesText,
      selectFilesText = _props$selectFilesTex === void 0 ? "textlink" : _props$selectFilesTex,
      dropFilesText = props.dropFilesText,
      uploadAttachmentText = props.uploadAttachmentText,
      _props$onChange = props.onChange,
      _onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$parent = props.parent,
      parent = _props$parent === void 0 ? function () {} : _props$parent,
      _props$register = props.register,
      register = _props$register === void 0 ? function () {} : _props$register,
      _props$name = props.name,
      name = _props$name === void 0 ? '' : _props$name,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      _props$maxSize = props.maxSize,
      maxSize = _props$maxSize === void 0 ? 10 : _props$maxSize,
      errorText = props.errorText,
      wrongFormat = props.wrongFormat,
      limitFiles = props.limitFiles;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var maxSizeConvert = maxSize * 1000000;
  var maxFiles = 5;
  var wrapperRef = useRef(null);
  var inputRef = useRef(null);
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('md'));
  var TEXT_ERROR = {
    maxSize: errorText != null ? errorText : "Keep your file within ".concat(maxSize, " MB"),
    wrongFormat: wrongFormat != null ? wrongFormat : "Upload a PDF, PNG or JPG file",
    limitFiles: limitFiles != null ? limitFiles : 'Upload up to 5 files'
  };

  /**
   *
   * @param fileList list file select handle check
   * @returns has file with size larger than maxSize and wrong type
   */
  var checkSizeAndTypeForFile = function checkSizeAndTypeForFile(fileList) {
    var length = fileList.length;
    var result = {
      isNotError: true,
      message: ""
    };

    for (var i = 0; i < length; i += 1) {
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


  var handleFileSelected = function handleFileSelected(event) {
    if (files.length < 5) {
      var items = _toConsumableArray(files);

      for (var i = 0; i < event.target.files.length; i += 1) {
        items.push(event.target.files[i] || event.dataTransfer.items);
      }

      var checkFile = checkSizeAndTypeForFile(items);

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

    var length = ((_ev$dataTransfer$item = ev.dataTransfer.items) == null ? void 0 : _ev$dataTransfer$item.length) || 0; // Prevent default behavior (Prevent file from being opened)

    ev.preventDefault(); // Show error message if length of dataTransfer more than 5

    if (ev.dataTransfer.items && length > 5) {
      setError(TEXT_ERROR.limitFiles);
      return;
    }

    if (files.length < 5) {
      var items = []; // Use DataTransferItemList interface to access the file(s)

      for (var i = 0; i < length; i += 1) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          items.push(file); // Merge the list of existing files and the files being imported.

          var newListFile = [].concat(_toConsumableArray(files), items);
          var checkFile = checkSizeAndTypeForFile(newListFile);

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


  useEffect(function () {
    if (wrapperRef.current) {
      if (!error) {
        wrapperRef.current.style.borderColor = colors.neutral.neutral1;
      } else {
        wrapperRef.current.style.borderColor = colors.accent.accentRed[2];
      }
    }
  }, [error]); // reset color border when component mount

  useEffect(function () {
    if (wrapperRef.current) {
      wrapperRef.current.style.borderColor = colors.neutral.neutral5;
    }
  }, []);
  useEffect(function () {
    parent(files);
  }, [files, parent]);
  /**
   * Run after clicking the close icon on each item
   */

  var handleAfterCloseFile = function handleAfterCloseFile(id) {
    files.splice(id, 1);
    setFiles(_toConsumableArray(files));

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
        border: "1px solid",
        borderColor: colors.neutral.neutral5,
        borderRadius: '24px',
        padding: '20px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: "".concat(error ? colors.accent.accentRed[3] : "none"),
        '& hover': {
          borderColor: colors.neutral.neutral5
        }
      },
      onDragOver: dragOverHandler,
      onDrop: function onDrop(e) {
        dropHandler(e);

        _onChange(e);
      },
      onMouseEnter: handelMouseEnter,
      onMouseLeave: handelMouseLeave,
      children: [/*#__PURE__*/_jsxs(Box, {
        onDragStart: function onDragStart(e) {
          return handleFileSelected(e);
        },
        sx: (_ref = {
          width: '100%',
          borderRadius: '60px',
          display: 'flex',
          flexDirection: 'column'
        }, _defineProperty(_ref, "svg", {
          paddingRight: '10px'
        }), _defineProperty(_ref, "#files", {
          opacity: 0,
          position: 'absolute',
          zIndex: -1,
          alignItems: 'baseline'
        }), _ref),
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
          onDragStart: function onDragStart(e) {
            return handleFileSelected(e);
          },
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
            required: required
          }), {
            type: "file",
            id: "files",
            name: "files",
            accept: "image/png, image/jpeg, .pdf",
            multiple: true,
            onChange: function onChange(e) {
              handleFileSelected(e);

              _onChange(e);
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
        children: files.map(function (file, id) {
          var _ref2;

          return /*#__PURE__*/_jsxs(Box, {
            sx: (_ref2 = {
              display: 'flex',
              flexDirection: 'row',
              border: '1px solid #dddd',
              borderRadius: '12px',
              padding: '13px 22px',
              alignItems: 'center',
              maxWidth: '100%'
            }, _defineProperty(_ref2, "& label", {
              fontWeight: "600",
              fontSize: "12px",
              lineHeight: "18px",
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              WebkitLineClamp: 1,
              marginRight: '20px',
              marginLeft: '5px',
              whiteSpace: "nowrap"
            }), _defineProperty(_ref2, "& svg", {
              width: '13.3px',
              height: '14.3px'
            }), _ref2),
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
              onClick: function onClick() {
                return handleAfterCloseFile(id);
              }
            })]
          }, file.name + id);
        })
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