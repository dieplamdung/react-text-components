"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _lodash = require("lodash");

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../atoms/Button"));

var _Icon = require("../../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../../atoms/Typography"));

var _FilterSelectionListing = _interopRequireDefault(require("../../../molecules/FilterSelectionListing"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _disableScrollBody = require("../../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ContentFilter(props) {
  var _buttonPropsClear$lab;

  const theme = (0, _material.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  const {
    sortByText,
    sortBy,
    filterByText,
    dataFilter = [],
    showMoreText,
    showLessText,
    buttonPropsDone,
    buttonPropsClear,
    isShowFilter,
    onFilter,
    onClose,
    onActivePill
  } = props;
  const [backDrop, setBackDrop] = (0, _react.useState)(false);
  const [valueSort, setValueSort] = (0, _react.useState)([]);
  const [valueFilter, setValueFilter] = (0, _react.useState)([]);
  const [lengthFilter, setLengthFilter] = (0, _react.useState)(0);
  const [showMoreSort, setShowMoreSort] = (0, _react.useState)(false);
  const refValueFilter = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    setBackDrop(isShowFilter);
    (0, _disableScrollBody.disableScrollBody)(isShowFilter);
    refValueFilter.current = (0, _lodash.cloneDeep)(valueFilter); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowFilter]);
  (0, _react.useEffect)(() => {
    setValueSort(sortBy); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(sortBy)]);
  (0, _react.useEffect)(() => {
    setValueFilter(dataFilter); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dataFilter)]);

  const handleResetSort = () => {
    const newValueSort = valueSort.map((sort, index) => {
      if (index === 0) {
        sort.isChecked = true;
        return (0, _extends2.default)({}, sort);
      }

      sort.isChecked = false;
      return (0, _extends2.default)({}, sort);
    });
    setValueSort(newValueSort);
  };

  const handleCountSelectedFilterAll = listFilter => {
    const newValueFilter = [...listFilter];
    let totalCount = 0;
    newValueFilter.map((filterItem, index) => {
      let count = 0;
      filterItem == null ? void 0 : filterItem.dataFilter.map(filter => {
        if (filter.isChecked) {
          count += 1;
          totalCount += 1;
        }

        return filter;
      });
      newValueFilter[index].countSelect = count;
      return filterItem;
    });
    setValueFilter(newValueFilter);
    setLengthFilter(totalCount);
    onActivePill(!!totalCount);
  };

  const handleResetFilter = () => {
    setValueSort([...sortBy]);
    const newValueFilter = [...valueFilter];
    newValueFilter.map(filterItem => {
      filterItem == null ? void 0 : filterItem.dataFilter.map(filter => {
        filter.isChecked = false;
        return null;
      });
      return null;
    });
    handleCountSelectedFilterAll(newValueFilter);
    handleResetSort();
  };

  const handleCountFilter = (value, index) => {
    const newValueFilter = [...valueFilter];
    newValueFilter[index].dataFilter = value;
    handleCountSelectedFilterAll(newValueFilter);
  };

  const handleShowMore = (value, index) => {
    const newValueFilter = [...valueFilter];
    newValueFilter[index].showMore = value;
    setValueFilter(newValueFilter);
  };

  const handleGetListParamFilter = listFilter => {
    const result = {};
    listFilter.map(filterItem => {
      const filter = [];
      filterItem == null ? void 0 : filterItem.dataFilter.map(item => {
        if (item.isChecked) {
          filter.push(item.name);
        }

        return null;
      });

      if (filter.length) {
        result[filterItem.value || filterItem.title] = filter;
      }

      return null;
    });
    return result;
  };

  const handleConfirmFilter = () => {
    var _valueSort$find;

    onClose == null ? void 0 : onClose();
    const paramFilter = handleGetListParamFilter(valueFilter);
    const paramSort = (_valueSort$find = valueSort.find(sort => sort.isChecked === true)) == null ? void 0 : _valueSort$find.name; // call api

    onFilter == null ? void 0 : onFilter(paramFilter, paramSort);
  };

  const handleCloseFilter = () => {
    onClose();
    const hadEqual = (0, _lodash.isEqual)(valueFilter, refValueFilter.current);

    if (!hadEqual) {
      handleCountSelectedFilterAll(refValueFilter.current);
    }

    ;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      position: "fixed",
      height: "100vh",
      width: "100%",
      top: "0px",
      right: "0px",
      overflow: "hidden",
      zIndex: backDrop ? 1000 : "-1",
      transition: "all 0.3s",
      pointerEvents: "auto"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: ' rgba(0,0,0,0.5)',
        opacity: backDrop ? '1' : '0',
        transition: 'all 0.3s  z-index 0.01s ',
        zIndex: backDrop ? '1002' : '-1'
      },
      onClick: () => {
        handleCloseFilter();
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        height: {
          xs: backDrop ? "90vh" : "0px",
          md: "100vh"
        },
        width: {
          xs: "100%",
          md: "495px"
        },
        background: "#fff",
        overflow: "hidden",
        right: {
          xs: "0px",
          md: backDrop ? "0px" : "-495px"
        },
        bottom: {
          xs: backDrop ? "0px" : "-100vh",
          md: "0px"
        },
        borderRadius: {
          xs: "16px 16px 0px 0px",
          md: "0px"
        },
        zIndex: "1003",
        transition: {
          xs: "all 0.5s",
          md: "all 0.3s"
        }
      },
      children: [!isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          position: "absolute",
          top: "14px",
          right: "24px",
          cursor: "pointer",
          '& svg': {
            '& path': {
              stroke: '#C1C1C1'
            }
          }
        },
        onClick: () => handleCloseFilter(),
        children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
      }), isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "100%",
          height: "44px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "48px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              width: "100%",
              height: "4px",
              background: _colors.default.neutral.neutral5,
              borderRadius: "15px"
            }
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: isMobile ? "44px" : "38px",
          left: "0px",
          right: "0px",
          bottom: "110px",
          width: "100%",
          padding: isMobile ? '0px 32px 0px 32px' : '0px 56px 0px 56px',
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: "100%",
            paddingBottom: {
              xs: "14px",
              md: "32px"
            },
            marginBottom: {
              xs: "18px",
              md: "32px"
            },
            borderBottom: "1px solid",
            borderColor: {
              xs: _colors.default.primary.bandaiNamcoWhite,
              md: "rgb(77 77 77 / 50%)"
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p8",
            sx: {
              marginBottom: {
                xs: "20px",
                md: "24px"
              },
              fontSize: {
                xs: "12px",
                md: "18px"
              },
              color: _colors.default.neutral.neutral2,
              fontWeight: "600",
              letterSpacing: "-0.2px"
            },
            children: sortByText
          }), !!(valueSort != null && valueSort.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterSelectionListing.default, {
            dataDefault: valueSort,
            hadShowMore: true,
            showMore: showMoreSort,
            onChange: setValueSort,
            types: "radio"
          }), (valueSort == null ? void 0 : valueSort.length) > 4 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            sx: {
              width: "fit-content",
              marginTop: {
                xs: "20px",
                md: "32px"
              },
              color: _colors.default.neutral.neutral2,
              fontSize: {
                xs: "14px",
                md: "16px"
              },
              lineHeight: {
                xs: "20px",
                md: "22px"
              },
              cursor: "pointer",
              position: "relative",
              "&::before": {
                content: "''",
                position: "absolute",
                left: "0px",
                bottom: "0px",
                width: "100%",
                borderBottom: `1px solid ${_colors.default.neutral.neutral2}`
              }
            },
            onClick: () => setShowMoreSort(!showMoreSort),
            children: !showMoreSort ? showMoreText : showLessText
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p8",
          sx: {
            marginBottom: {
              xs: "20px",
              md: "24px"
            },
            fontSize: {
              xs: "12px",
              md: "18px"
            },
            color: _colors.default.neutral.neutral2,
            fontWeight: "600",
            letterSpacing: "-0.2px"
          },
          children: filterByText
        }), !!(valueFilter != null && valueFilter.length) && (valueFilter == null ? void 0 : valueFilter.map((filter, index) => {
          var _filter$dataFilter;

          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              width: "100%",
              paddingBottom: {
                xs: "14px",
                md: "32px"
              },
              marginBottom: {
                xs: "18px",
                md: "32px"
              },
              borderBottom: "1px solid",
              borderColor: {
                xs: _colors.default.primary.bandaiNamcoWhite,
                md: "rgb(77 77 77 / 50%)"
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
              variant: "h4",
              sx: {
                marginBottom: {
                  xs: "20px",
                  md: "24px"
                },
                fontSize: {
                  xs: '20px',
                  md: '22px'
                },
                lineHeight: {
                  xs: '26px',
                  md: '28px'
                },
                color: _colors.default.primary.dark,
                letterSpacing: "-0.4px"
              },
              children: [filter.title, " ", filter.countSelect > 0 && `(${filter.countSelect})`]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterSelectionListing.default, {
              dataDefault: filter == null ? void 0 : filter.dataFilter,
              onChange: e => handleCountFilter(e, index),
              hadShowMore: true,
              showMore: filter.showMore
            }), ((_filter$dataFilter = filter.dataFilter) == null ? void 0 : _filter$dataFilter.length) > 4 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p5",
              sx: {
                width: "fit-content",
                marginTop: {
                  xs: "20px",
                  md: "32px"
                },
                color: _colors.default.neutral.neutral2,
                fontSize: {
                  xs: "14px",
                  md: "16px"
                },
                lineHeight: {
                  xs: "20px",
                  md: "22px"
                },
                cursor: "pointer",
                position: "relative",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  left: "0px",
                  bottom: "0px",
                  width: "100%",
                  borderBottom: `1px solid ${_colors.default.neutral.neutral2}`
                }
              },
              onClick: () => handleShowMore(!filter.showMore, index),
              children: !filter.showMore ? showMoreText : showLessText
            })]
          }, index);
        }))]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          height: {
            xs: "110px",
            md: "104px"
          },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: {
            xs: "center",
            md: "flex-start"
          },
          padding: {
            xs: "0px 32px 0px 32px",
            md: "24px 56px 0px 56px"
          },
          marginTop: "auto",
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.05)"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsClear, {
          disabled: !lengthFilter,
          onClick: () => {
            handleResetFilter(); // handleCallApiGetData(dataSideChecked, 'clear') 
          },
          label: `${(_buttonPropsClear$lab = buttonPropsClear == null ? void 0 : buttonPropsClear.label) != null ? _buttonPropsClear$lab : 'Clear'} ${lengthFilter > 0 ? `(${lengthFilter})` : ""}`,
          sx: {
            width: {
              xs: "calc(50% - 4px)",
              md: "calc(50% - 18px)"
            }
          }
        })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsDone, {
          onClick: () => {
            handleConfirmFilter();
          },
          sx: {
            width: {
              xs: "calc(50% - 4px)",
              md: "calc(50% - 18px)"
            }
          }
        }))]
      })]
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(ContentFilter);

exports.default = _default;