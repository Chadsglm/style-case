module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vL9u");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VUBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "v7hto9-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => __jsx(ErrorStyles, {
      key: i
    }, __jsx("p", {
      "data-test": "graphql-error"
    }, __jsx("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', ''))));
  }

  return __jsx(ErrorStyles, null, __jsx("p", {
    "data-test": "graphql-error"
  }, __jsx("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),

/***/ "VliS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query {
    me {
      id
      email
      name
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

const User = props => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props, {
  query: CURRENT_USER_QUERY
}), payload => props.children(payload));

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "km3s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MGkW");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mzXK");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("VUBQ");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VliS");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "state", {
      name: '',
      password: '',
      email: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "saveToState", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });
  }

  render() {
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: SIGNIN_MUTATION,
      variables: this.state,
      refetchQueries: [{
        query: _User__WEBPACK_IMPORTED_MODULE_6__[/* CURRENT_USER_QUERY */ "a"]
      }]
    }, (signup, {
      error,
      loading
    }) => __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      method: "post",
      onSubmit: async e => {
        e.preventDefault();
        await signup();
        this.setState({
          name: '',
          email: '',
          password: ''
        });
      }
    }, __jsx("fieldset", {
      disabled: loading,
      "aria-busy": loading
    }, __jsx("h2", null, "Sign into your account"), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      error: error
    }), __jsx("label", {
      htmlFor: "email"
    }, "Email", __jsx("input", {
      type: "email",
      name: "email",
      placeholder: "email",
      value: this.state.email,
      onChange: this.saveToState
    })), __jsx("label", {
      htmlFor: "password"
    }, "Password", __jsx("input", {
      type: "password",
      name: "password",
      placeholder: "password",
      value: this.state.password,
      onChange: this.saveToState
    })), __jsx("button", {
      type: "submit"
    }, "Sign In!"))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Signin);

/***/ }),

/***/ "mzXK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "qom5za-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:", ";}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient(to right,#ff3019 0%,#e2b04a 50%,#ff3019 100%);}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], props => props.theme.red, loading);
/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vL9u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__("mzXK");

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__("VUBQ");

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__("VliS");

// CONCATENATED MODULE: ./components/Signup.js

var __jsx = external_react_default.a.createElement;






const SIGNUP_MUTATION = external_graphql_tag_default.a`
  mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup_Signup extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      name: '',
      password: '',
      email: ''
    });

    Object(defineProperty["a" /* default */])(this, "saveToState", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });
  }

  render() {
    return __jsx(external_react_apollo_["Mutation"], {
      mutation: SIGNUP_MUTATION,
      variables: this.state,
      refetchQueries: [{
        query: User["a" /* CURRENT_USER_QUERY */]
      }]
    }, (signup, {
      error,
      loading
    }) => __jsx(Form["a" /* default */], {
      method: "post",
      onSubmit: async event => {
        event.preventDefault();
        await signup();
        this.setState({
          name: '',
          email: '',
          password: ''
        });
      }
    }, __jsx("fieldset", {
      disabled: loading,
      "aria-busy": loading
    }, __jsx("h2", null, "Sign Up for An Account"), __jsx(ErrorMessage["a" /* default */], {
      error: error
    }), __jsx("label", {
      htmlFor: "email"
    }, "Email", __jsx("input", {
      type: "email",
      name: "email",
      placeholder: "email",
      value: this.state.email,
      onChange: this.saveToState
    })), __jsx("label", {
      htmlFor: "name"
    }, "Name", __jsx("input", {
      type: "text",
      name: "name",
      placeholder: "name",
      value: this.state.name,
      onChange: this.saveToState
    })), __jsx("label", {
      htmlFor: "password"
    }, "Password", __jsx("input", {
      type: "password",
      name: "password",
      placeholder: "password",
      value: this.state.password,
      onChange: this.saveToState
    })), __jsx("button", {
      type: "submit"
    }, "Sign Up!"))));
  }

}

/* harmony default export */ var components_Signup = (Signup_Signup);
// EXTERNAL MODULE: ./components/Signin.js
var components_Signin = __webpack_require__("km3s");

// CONCATENATED MODULE: ./components/RequestReset.js

var RequestReset_jsx = external_react_default.a.createElement;





const REQUEST_RESET_MUTATION = external_graphql_tag_default.a`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset_Signin extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Object(defineProperty["a" /* default */])(this, "state", {
      email: ''
    });

    Object(defineProperty["a" /* default */])(this, "saveToState", event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    });
  }

  render() {
    return RequestReset_jsx(external_react_apollo_["Mutation"], {
      mutation: REQUEST_RESET_MUTATION,
      variables: this.state
    }, (reset, {
      error,
      loading,
      called
    }) => RequestReset_jsx(Form["a" /* default */], {
      method: "post",
      onSubmit: async event => {
        event.preventDefault();
        await reset();
        this.setState({
          email: ''
        });
      }
    }, RequestReset_jsx("fieldset", {
      disabled: loading,
      "aria-busy": loading
    }, RequestReset_jsx("h2", null, "Request a password reset"), RequestReset_jsx(ErrorMessage["a" /* default */], {
      error: error
    }), !error && !loading && called && RequestReset_jsx("p", null, "Success! Check your email for a reset link!"), RequestReset_jsx("label", {
      htmlFor: "email"
    }, "Email", RequestReset_jsx("input", {
      type: "email",
      name: "email",
      placeholder: "email",
      value: this.state.email,
      onChange: this.saveToState
    })), RequestReset_jsx("button", {
      type: "submit"
    }, "Request Reset!"))));
  }

}

/* harmony default export */ var RequestReset = (RequestReset_Signin);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./pages/signup.js

var signup_jsx = external_react_default.a.createElement;




const Columns = external_styled_components_default.a.div.withConfig({
  displayName: "signup__Columns",
  componentId: "sc-1n5vxop-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:20px;"]);

const SignupPage = props => signup_jsx(Columns, null, signup_jsx(components_Signup, null), signup_jsx(components_Signin["a" /* default */], null), signup_jsx(RequestReset, null));

/* harmony default export */ var pages_signup = __webpack_exports__["default"] = (SignupPage);

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ });