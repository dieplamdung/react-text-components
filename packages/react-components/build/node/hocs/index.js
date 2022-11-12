"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withMobileCheck = require("./withMobileCheck");

Object.keys(_withMobileCheck).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _withMobileCheck[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withMobileCheck[key];
    }
  });
});