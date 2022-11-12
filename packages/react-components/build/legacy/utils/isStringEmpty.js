var isStringEmpty = function isStringEmpty(str) {
  return !str || str.length === 0;
};

var isStringBlank = function isStringBlank(str) {
  return !str || str.trim().length === 0;
};

export var isStringEmptyOrBlank = function isStringEmptyOrBlank(str) {
  return isStringEmpty(str) || isStringBlank(str);
};