import _extends from "@babel/runtime/helpers/esm/extends";

var _IconClose;

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { cloneDeep, isEqual } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import Button from "../../../atoms/Button";
import { IconClose } from "../../../atoms/Icon";
import Typography from "../../../atoms/Typography";
import FilterSelectionListing from "../../../molecules/FilterSelectionListing";
import colors from "../../../theme/colors";
import { disableScrollBody } from "../../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function ContentFilter(props) {
  var _buttonPropsClear$lab;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
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
  const [backDrop, setBackDrop] = useState(false);
  const [valueSort, setValueSort] = useState([]);
  const [valueFilter, setValueFilter] = useState([]);
  const [lengthFilter, setLengthFilter] = useState(0);
  const [showMoreSort, setShowMoreSort] = useState(false);
  const refValueFilter = useRef();
  useEffect(() => {
    setBackDrop(isShowFilter);
    disableScrollBody(isShowFilter);
    refValueFilter.current = cloneDeep(valueFilter); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShowFilter]);
  useEffect(() => {
    setValueSort(sortBy); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(sortBy)]);
  useEffect(() => {
    setValueFilter(dataFilter); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dataFilter)]);

  const handleResetSort = () => {
    const newValueSort = valueSort.map((sort, index) => {
      if (index === 0) {
        sort.isChecked = true;
        return _extends({}, sort);
      }

      sort.isChecked = false;
      return _extends({}, sort);
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
    const hadEqual = isEqual(valueFilter, refValueFilter.current);

    if (!hadEqual) {
      handleCountSelectedFilterAll(refValueFilter.current);
    }

    ;
  };

  return /*#__PURE__*/_jsxs(Box, {
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
    children: [/*#__PURE__*/_jsx(Box, {
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
    }), /*#__PURE__*/_jsxs(Box, {
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
      children: [!isMobile && /*#__PURE__*/_jsx(Box, {
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
        children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
      }), isMobile && /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          height: "44px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "48px"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              width: "100%",
              height: "4px",
              background: colors.neutral.neutral5,
              borderRadius: "15px"
            }
          })
        })
      }), /*#__PURE__*/_jsxs(Box, {
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
        children: [/*#__PURE__*/_jsxs(Box, {
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
              xs: colors.primary.bandaiNamcoWhite,
              md: "rgb(77 77 77 / 50%)"
            }
          },
          children: [/*#__PURE__*/_jsx(Typography, {
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
              color: colors.neutral.neutral2,
              fontWeight: "600",
              letterSpacing: "-0.2px"
            },
            children: sortByText
          }), !!(valueSort != null && valueSort.length) && /*#__PURE__*/_jsx(FilterSelectionListing, {
            dataDefault: valueSort,
            hadShowMore: true,
            showMore: showMoreSort,
            onChange: setValueSort,
            types: "radio"
          }), (valueSort == null ? void 0 : valueSort.length) > 4 && /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            sx: {
              width: "fit-content",
              marginTop: {
                xs: "20px",
                md: "32px"
              },
              color: colors.neutral.neutral2,
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
                borderBottom: `1px solid ${colors.neutral.neutral2}`
              }
            },
            onClick: () => setShowMoreSort(!showMoreSort),
            children: !showMoreSort ? showMoreText : showLessText
          })]
        }), /*#__PURE__*/_jsx(Typography, {
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
            color: colors.neutral.neutral2,
            fontWeight: "600",
            letterSpacing: "-0.2px"
          },
          children: filterByText
        }), !!(valueFilter != null && valueFilter.length) && (valueFilter == null ? void 0 : valueFilter.map((filter, index) => {
          var _filter$dataFilter;

          return /*#__PURE__*/_jsxs(Box, {
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
                xs: colors.primary.bandaiNamcoWhite,
                md: "rgb(77 77 77 / 50%)"
              }
            },
            children: [/*#__PURE__*/_jsxs(Typography, {
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
                color: colors.primary.dark,
                letterSpacing: "-0.4px"
              },
              children: [filter.title, " ", filter.countSelect > 0 && `(${filter.countSelect})`]
            }), /*#__PURE__*/_jsx(FilterSelectionListing, {
              dataDefault: filter == null ? void 0 : filter.dataFilter,
              onChange: e => handleCountFilter(e, index),
              hadShowMore: true,
              showMore: filter.showMore
            }), ((_filter$dataFilter = filter.dataFilter) == null ? void 0 : _filter$dataFilter.length) > 4 && /*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              sx: {
                width: "fit-content",
                marginTop: {
                  xs: "20px",
                  md: "32px"
                },
                color: colors.neutral.neutral2,
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
                  borderBottom: `1px solid ${colors.neutral.neutral2}`
                }
              },
              onClick: () => handleShowMore(!filter.showMore, index),
              children: !filter.showMore ? showMoreText : showLessText
            })]
          }, index);
        }))]
      }), /*#__PURE__*/_jsxs(Box, {
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
        children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonPropsClear, {
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
        })), /*#__PURE__*/_jsx(Button, _extends({}, buttonPropsDone, {
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

export default /*#__PURE__*/React.memo(ContentFilter);