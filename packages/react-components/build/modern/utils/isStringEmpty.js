const isStringEmpty = str => {
  return !str || str.length === 0;
};

const isStringBlank = str => {
  return !str || str.trim().length === 0;
};

export const isStringEmptyOrBlank = str => {
  return isStringEmpty(str) || isStringBlank(str);
};