webpackHotUpdate("static/development/pages/orders.js",{

/***/ "./components/OrderList.js":
/*!*********************************!*\
  !*** ./components/OrderList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");






var _jsxFileName = "/Users/cihadsaglam/wesbos/style-case/frontend/components/OrderList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  query USER_ORDERS_QUERY {\n    orders(orderBy: createdAt_DESC) {\n      id\n      total\n      createdAt\n      items {\n        id\n        title\n        price\n        description\n        quantity\n        image\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var USER_ORDERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_11___default()(_templateObject());
var orderul = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].ul.withConfig({
  displayName: "OrderList__orderul",
  componentId: "sc-7em6xg-0"
})(["display:grid;grid-gap:4rem;grid-template-columns:repeat(auto-fit,minmax(40%,1fr));"]);

var OrderList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(OrderList, _React$Component);

  function OrderList() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OrderList);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(OrderList).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(OrderList, [{
    key: "render",
    value: function render() {
      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
        query: USER_ORDERS_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, function (_ref) {
        var orders = _ref.data.orders,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "loading...");
        if (error) return __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
          erorr: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        });
        console.log(orders);
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, __jsx("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, "You have ", orders.length, " orders"), __jsx("orderul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, orders.map(function (order) {
          return __jsx(_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_14__["default"], {
            key: order.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: {
              pathname: '/order',
              query: {
                id: order.id
              }
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, __jsx("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, __jsx("div", {
            className: "order-meta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, order.items.reduce(function (a, b) {
            return a + b.quantity;
          }, 0), " Items"), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, order.items.length, " Products"), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, order.createdAt), __jsx("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_13__["default"])(order.total))), __jsx("div", {
            className: "images",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, order.items.map(function (item) {
            return __jsx("img", {
              key: item.id,
              src: item.image,
              alt: item.title,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            });
          })))));
        })));
      });
    }
  }]);

  return OrderList;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OrderList);

/***/ })

})
//# sourceMappingURL=orders.js.17e59fc2ca4593406452.hot-update.js.map