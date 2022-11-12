"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStringEmptyOrBlank = void 0;

const isStringEmpty = str => {
  return !str || str.length === 0;
};

const isStringBlank = str => {
  return !str || str.trim().length === 0;
};

const isStringEmptyOrBlank = str => {
  return isStringEmpty(str) || isStringBlank(str);
};

exports.isStringEmptyOrBlank = isStringEmptyOrBlank;