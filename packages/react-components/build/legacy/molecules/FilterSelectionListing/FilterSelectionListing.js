import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { Box } from '@mui/material'; // Component

import Checkbox from "../../atoms/Checkbox";
import RadioButton from "../../atoms/RadioButton"; // import Typography from '../../atoms/Typography';
// Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// Color
// import colors from '../../theme/colors';
var FilterSelectionListing = /*#__PURE__*/forwardRef(function (props, ref) {
  var dataDefault = props.dataDefault,
      onChange = props.onChange,
      _props$types = props.types,
      types = _props$types === void 0 ? "checkbox" : _props$types,
      _props$hadShowMore = props.hadShowMore,
      hadShowMore = _props$hadShowMore === void 0 ? false : _props$hadShowMore,
      _props$showMore = props.showMore,
      showMore = _props$showMore === void 0 ? false : _props$showMore,
      _props$toggleDisplayL = props.toggleDisplayListSub,
      toggleDisplayListSub = _props$toggleDisplayL === void 0 ? true : _props$toggleDisplayL;

  var _useState = useState(dataDefault),
      _useState2 = _slicedToArray(_useState, 2),
      listing = _useState2[0],
      setListing = _useState2[1];

  var filterRef = useRef(null);
  /**
  * function handle set value sub listing.
  * @param value value of returned check box 
  * @param index index Listing's position is clicked
  */

  var handleClickListTing = function handleClickListTing(value, index) {
    if (types === "checkbox") {
      var _newListing$index$lis;

      var _newListing = _toConsumableArray(listing);

      _newListing[index].isChecked = value;

      if (((_newListing$index$lis = _newListing[index].listSub) == null ? void 0 : _newListing$index$lis.length) > 0) {
        var _newListing$index, _newListing$index$lis2;

        _newListing[index].listSub = (_newListing$index = _newListing[index]) == null ? void 0 : (_newListing$index$lis2 = _newListing$index.listSub) == null ? void 0 : _newListing$index$lis2.map(function (itemListSub) {
          return _extends({}, itemListSub, {
            isChecked: value
          });
        });
      }

      onChange(_newListing);
      setListing(_newListing);
      return;
    }

    var newListing = listing.filter(function (list, idx) {
      if (idx === index) {
        list.isChecked = value;
        return list;
      }

      list.isChecked = false;
      return list;
    });
    setListing(newListing);
    onChange(newListing);
  };

  useEffect(function () {
    return setListing(dataDefault);
  }, [dataDefault]);
  useImperativeHandle(ref, function () {
    return {
      handleResetCheckBox: function handleResetCheckBox() {
        var dataDefaultClone = _toConsumableArray(dataDefault);

        dataDefaultClone == null ? void 0 : dataDefaultClone.map(function (item, idx) {
          dataDefaultClone[idx].isChecked = false;

          if (dataDefaultClone[idx].listSub.length > 0) {
            dataDefaultClone[idx].listSub = dataDefaultClone[idx].listSub.map(function (itemListSub) {
              return _extends({}, itemListSub, {
                isChecked: false
              });
            });
          }

          return true;
        });
        setListing(dataDefaultClone);
      },
      handleSetStyle: function handleSetStyle(height) {
        if (filterRef.current) {
          filterRef.current.style.maxHeight = "".concat(height, "px");
        }
      }
    };
  });
  /**
   * function handle set value sub listing activated when types === checkbox.
   * @param value value of returned check box 
   * @param idxSub index of subListing click
   * @param index index Listing's location has sub listing click
   */

  var handleClickListingSub = function handleClickListingSub(value, indexSub, index) {
    var newListing = _toConsumableArray(listing);

    newListing[index].listSub[indexSub].isChecked = value;
    var lengthSub = newListing[index].listSub.length;
    var count = 0;
    newListing[index].listSub.map(function (item) {
      if (item.isChecked) {
        count += 1;

        if (count !== lengthSub) {
          newListing[index].isChecked = false;
        } else {
          newListing[index].isChecked = true;
        }
      }

      return true;
    });
    setListing(newListing);
    onChange(newListing);
  };
  /**
   * 
   * @param data dataDefault value filter
   * @returns height
   */


  var handelCountHightFilter = function handelCountHightFilter(data) {
    var result = {
      xs: 0,
      md: 0
    };
    data.map(function (item) {
      var _item$listSub;

      result.xs += 44;
      result.md += 46;

      if (Array.isArray(item.listSub) && (_item$listSub = item.listSub) != null && _item$listSub.length) {
        item.listSub.map(function (sub) {
          result.xs += 36;
          result.md += 36;
          return sub;
        });
      }

      return result;
    });
    return result;
  };

  var heightFilter = handelCountHightFilter(dataDefault);

  var handleReturnShowListSub = function handleReturnShowListSub(list) {
    if (!toggleDisplayListSub || list.isChecked) {
      var _list$listSub;

      return "".concat(36 * ((_list$listSub = list.listSub) == null ? void 0 : _list$listSub.length) + 10, "px");
    }

    return "0px";
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: "100%",
      overflow: 'hidden',
      height: {
        xs: hadShowMore ? "".concat((hadShowMore && !showMore ? 44 * 4 : heightFilter.xs) - 20, "px") : "auto",
        md: hadShowMore ? "".concat((hadShowMore && !showMore ? 46 * 4 : heightFilter.md) - 20, "px") : "auto"
      },
      transition: "all 0.3s",
      '& div:last-child': {
        marginBottom: "0px"
      }
    },
    ref: filterRef,
    children: listing == null ? void 0 : listing.map(function (list, index) {
      var _list$listSub2, _list$listSub3;

      return /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px"
        },
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: types === "checkbox" ? /*#__PURE__*/_jsx(Checkbox, {
            title: list.title,
            isChecked: list.isChecked,
            onChange: function onChange(v) {
              return handleClickListTing(v, index);
            }
          }) : /*#__PURE__*/_jsx(RadioButton, {
            title: list.title,
            isChecked: list.isChecked,
            onChange: function onChange(v) {
              return handleClickListTing(v, index);
            }
          })
        }), types === "checkbox" && !!((_list$listSub2 = list.listSub) != null && _list$listSub2.length) && /*#__PURE__*/_jsx(Box, {
          sx: {
            visibility: !toggleDisplayListSub || list.isChecked ? "visible" : "hidden",
            display: "flex",
            flexDirection: "column",
            marginLeft: "12px",
            padding: !toggleDisplayListSub || list.isChecked ? "5px 0px" : "0px",
            height: handleReturnShowListSub(list),
            transition: "all 0.3s",
            overflow: "hidden"
          },
          children: list == null ? void 0 : (_list$listSub3 = list.listSub) == null ? void 0 : _list$listSub3.map(function (listingSub, indSub) {
            return /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "12px"
              },
              children: /*#__PURE__*/_jsx(Checkbox, {
                isSub: true,
                title: listingSub.title,
                isChecked: listingSub.isChecked,
                onChange: function onChange(v) {
                  return handleClickListingSub(v, indSub, index);
                }
              })
            }, indSub);
          })
        })]
      }, index);
    })
  });
});
export default FilterSelectionListing;