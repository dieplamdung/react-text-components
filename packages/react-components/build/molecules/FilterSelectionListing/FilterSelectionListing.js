import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { Box } from '@mui/material'; // Component

import Checkbox from "../../atoms/Checkbox";
import RadioButton from "../../atoms/RadioButton"; // import Typography from '../../atoms/Typography';
// Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// Color
// import colors from '../../theme/colors';
const FilterSelectionListing = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    dataDefault,
    onChange,
    types = "checkbox",
    hadShowMore = false,
    showMore = false,
    toggleDisplayListSub = true
  } = props;
  const [listing, setListing] = useState(dataDefault);
  const filterRef = useRef(null);
  /**
  * function handle set value sub listing.
  * @param value value of returned check box 
  * @param index index Listing's position is clicked
  */

  const handleClickListTing = (value, index) => {
    if (types === "checkbox") {
      var _newListing$index$lis;

      const newListing = [...listing];
      newListing[index].isChecked = value;

      if (((_newListing$index$lis = newListing[index].listSub) == null ? void 0 : _newListing$index$lis.length) > 0) {
        var _newListing$index, _newListing$index$lis2;

        newListing[index].listSub = (_newListing$index = newListing[index]) == null ? void 0 : (_newListing$index$lis2 = _newListing$index.listSub) == null ? void 0 : _newListing$index$lis2.map(itemListSub => _extends({}, itemListSub, {
          isChecked: value
        }));
      }

      onChange(newListing);
      setListing(newListing);
      return;
    }

    const newListing = listing.filter((list, idx) => {
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

  useEffect(() => setListing(dataDefault), [dataDefault]);
  useImperativeHandle(ref, () => ({
    handleResetCheckBox() {
      const dataDefaultClone = [...dataDefault];
      dataDefaultClone == null ? void 0 : dataDefaultClone.map((item, idx) => {
        dataDefaultClone[idx].isChecked = false;

        if (dataDefaultClone[idx].listSub.length > 0) {
          dataDefaultClone[idx].listSub = dataDefaultClone[idx].listSub.map(itemListSub => _extends({}, itemListSub, {
            isChecked: false
          }));
        }

        return true;
      });
      setListing(dataDefaultClone);
    },

    handleSetStyle(height) {
      if (filterRef.current) {
        filterRef.current.style.maxHeight = `${height}px`;
      }
    }

  }));
  /**
   * function handle set value sub listing activated when types === checkbox.
   * @param value value of returned check box 
   * @param idxSub index of subListing click
   * @param index index Listing's location has sub listing click
   */

  const handleClickListingSub = (value, indexSub, index) => {
    const newListing = [...listing];
    newListing[index].listSub[indexSub].isChecked = value;
    const lengthSub = newListing[index].listSub.length;
    let count = 0;
    newListing[index].listSub.map(item => {
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


  const handelCountHightFilter = data => {
    const result = {
      xs: 0,
      md: 0
    };
    data.map(item => {
      var _item$listSub;

      result.xs += 44;
      result.md += 46;

      if (Array.isArray(item.listSub) && (_item$listSub = item.listSub) != null && _item$listSub.length) {
        item.listSub.map(sub => {
          result.xs += 36;
          result.md += 36;
          return sub;
        });
      }

      return result;
    });
    return result;
  };

  const heightFilter = handelCountHightFilter(dataDefault);

  const handleReturnShowListSub = list => {
    if (!toggleDisplayListSub || list.isChecked) {
      var _list$listSub;

      return `${36 * ((_list$listSub = list.listSub) == null ? void 0 : _list$listSub.length) + 10}px`;
    }

    return "0px";
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: "100%",
      overflow: 'hidden',
      height: {
        xs: hadShowMore ? `${(hadShowMore && !showMore ? 44 * 4 : heightFilter.xs) - 20}px` : "auto",
        md: hadShowMore ? `${(hadShowMore && !showMore ? 46 * 4 : heightFilter.md) - 20}px` : "auto"
      },
      transition: "all 0.3s",
      '& div:last-child': {
        marginBottom: "0px"
      }
    },
    ref: filterRef,
    children: listing == null ? void 0 : listing.map((list, index) => {
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
            onChange: v => handleClickListTing(v, index)
          }) : /*#__PURE__*/_jsx(RadioButton, {
            title: list.title,
            isChecked: list.isChecked,
            onChange: v => handleClickListTing(v, index)
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
          children: list == null ? void 0 : (_list$listSub3 = list.listSub) == null ? void 0 : _list$listSub3.map((listingSub, indSub) => {
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
                onChange: v => handleClickListingSub(v, indSub, index)
              })
            }, indSub);
          })
        })]
      }, index);
    })
  });
});
export default FilterSelectionListing;