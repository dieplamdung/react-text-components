const isStringEmpty = (str: string) => {
  return !str || str.length === 0;
};

const isStringBlank = (str: string) => {
  return !str || str.trim().length === 0;
};

export const isStringEmptyOrBlank = (str: string) => {
  return isStringEmpty(str) || isStringBlank(str);
};
