webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  }; // if its a whole, Euro amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('de-DE', options);
  return formatter.format(amount / 100);
});

/***/ })

})
//# sourceMappingURL=index.js.0103297af9edc2c6fc01.hot-update.js.map