module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Alert/Geral.js":
/*!***********************************!*\
  !*** ./components/Alert/Geral.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Alert\\Geral.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class AlertGeral extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!this.props.aviso) return null;
    return __jsx("div", {
      className: "alert alert-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, this.props.aviso.message));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AlertGeral);

/***/ }),

/***/ "./components/Campos/Pesquisa.js":
/*!***************************************!*\
  !*** ./components/Campos/Pesquisa.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Campos\\Pesquisa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Pesquisa extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      termo: ""
    });
  }

  submitPesquisa() {
    const {
      termo
    } = this.state;
    this.props.fetchTermo(termo);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: "/pesquisa",
      query: {
        termo
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "flex-3 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("input", {
      name: "pesquisa",
      value: this.state.termo,
      onChange: e => this.setState({
        termo: e.target.value
      }),
      placeholder: "Digite aqui a sua pesquisa ...",
      className: "input-pesquisa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }), __jsx("button", {
      onClick: () => this.submitPesquisa(),
      className: "button-pesquisa",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "fa fa-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, " ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(Pesquisa));

/***/ }),

/***/ "./components/Cards/Carrinho.js":
/*!**************************************!*\
  !*** ./components/Cards/Carrinho.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Cards\\Carrinho.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CardCarrinho extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      cartQtd: 0
    });
  }

  componentDidMount() {
    this.setState({
      cartQtd: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCountItemsCart"])()
    });
  }

  render() {
    return __jsx("div", {
      className: "itens-cabecalho flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/area-cliente",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, "Minha Conta"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/carrinho",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "item-cabecalho cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-shopping-bag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, this.state.cartQtd || 0))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CardCarrinho);

/***/ }),

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Head.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const defaultDescricao = '';
const defaultOGURL = '';
const defaultOGImage = "/static/logo.png";

const Head = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, " ", props.title || "", " "), __jsx("meta", {
  name: "description",
  content: props.description || defaultDescricao,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/static/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:url",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:title",
  content: props.title || "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:descri\xE7\xE3o",
  content: props.description || defaultDescricao,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:site",
  content: props.url || defaultOGURL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:card",
  content: "summary_large_image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "twitter:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image",
  content: props.ogImage || defaultOGImage,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image:width",
  content: "600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), __jsx("meta", {
  property: "og:image:height",
  content: "600",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet" //            href="/static/font-awesome.min.css" 
  ,
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  integryte: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
  crossOrigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "/static/style.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }
}), props.pagSeguro ? __jsx("script", {
  type: "text/javascript",
  src: "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }
}) : null, props.children);

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/Inputs/FormRadio.js":
/*!****************************************!*\
  !*** ./components/Inputs/FormRadio.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormRadio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Inputs\\FormRadio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FormRadio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      name,
      cheked,
      label,
      onChange
    } = this.props;
    return __jsx("div", {
      className: "form-input form-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("input", {
      type: "radio",
      checked: cheked,
      name: name,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, " \xA0 ", label, " "));
  }

}

/***/ }),

/***/ "./components/Inputs/FormSimples.js":
/*!******************************************!*\
  !*** ./components/Inputs/FormSimples.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSimples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Inputs\\FormSimples.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class FormSimples extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      value,
      name,
      placeholder,
      type,
      label,
      onChange,
      erro
    } = this.props;
    return __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, label && __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 27
      }
    }, " ", label, " "), __jsx("input", {
      type: type,
      value: value,
      name: name,
      placeholder: placeholder,
      onChange: onChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), erro && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, " ", erro, " "));
  }

}

/***/ }),

/***/ "./components/Item/DadosDaLoja.js":
/*!****************************************!*\
  !*** ./components/Item/DadosDaLoja.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Item\\DadosDaLoja.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DadosDaLoja extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (!this.props.loja) return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 39
      }
    }, " ");
    const {
      nome,
      cnpj,
      email,
      endereco,
      telefones
    } = this.props.loja;
    return __jsx("div", {
      className: "flex-1 dados-da-loja",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, " Entre em Contato "), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    })), __jsx("p", {
      className: "loja-nome",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, " Nome: ", nome, " "), __jsx("p", {
      className: "loja-cnpj",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, " CNPJ: ", cnpj, " "), __jsx("p", {
      className: "loja-email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, " E-mail: ", __jsx("a", {
      href: `mailto:${email}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 54
      }
    }, " ", email, " "), " "), __jsx("p", {
      className: "loja-telefones",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, " Telefones: "), telefones.map(index => __jsx("p", {
      className: "loja-telefone",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, "\xA0 \xA0", __jsx("a", {
      href: `phone:${telefones}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 29
      }
    }, " ", telefones, " "))), __jsx("p", {
      className: "loja-endereco",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, " ", endereco.local, ", ", endereco.numero, " - ", endereco.bairro, " "), __jsx("p", {
      className: "loja-cidade",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, " ", endereco.cidade, " / ", endereco.estado, " - ", endereco.CEP, " "));
  }

}

const mapStateToProps = state => ({
  loja: state.loja.loja
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(DadosDaLoja));

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Head */ "./components/Head.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Style */ "./components/Style.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children,
  title,
  description,
  url,
  image,
  pagSeguro
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: title,
  description: description,
  url: url,
  ogImage: image,
  pagSeguro: pagSeguro,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx(_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("div", {
  className: "body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}, children), __jsx("footer", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "flex flex-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, __jsx("small", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, "\xA9 Loja IT - Curso Criando um Ecommerce do Zero"))));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Listas/Categorias.js":
/*!*****************************************!*\
  !*** ./components/Listas/Categorias.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Listas\\Categorias.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Categorias extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      categorias
    } = this.props;
    return __jsx("div", {
      className: "categorias flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, categorias.map(categoria => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/categoria/${categoria.nome}?id=${categoria._id}`,
      key: categoria._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "categoria-item flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 33
      }
    }, categoria.nome)))));
  }

}

const mapStateToProps = state => ({
  categorias: state.categoria.categorias
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Categorias));

/***/ }),

/***/ "./components/Listas/Paginas.js":
/*!**************************************!*\
  !*** ./components/Listas/Paginas.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Listas\\Paginas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Paginas = () => __jsx("div", {
  className: "flex-1 flex vertical institucional",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, "P\xE1ginas"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
})), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
}, "P\xE1gina Inicial")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/carrinho",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Ver Sacola")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/area-cliente/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 13
  }
}, "Minha Conta")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/sobre",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
}, "Sobre a Loja")));

/* harmony default export */ __webpack_exports__["default"] = (Paginas);

/***/ }),

/***/ "./components/Listas/RedesSociais.js":
/*!*******************************************!*\
  !*** ./components/Listas/RedesSociais.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Listas\\RedesSociais.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const REDES_SOCIAIS = [{
  nome: "facebook",
  url: "#"
}, {
  nome: "instagram",
  url: "#"
}, {
  nome: "twitter",
  url: "#"
}, {
  nome: "whatsapp",
  url: "#"
}];

const RedesSociais = () => __jsx("div", {
  className: "flex-1 flex vertical",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}, "Redes Sociais"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "flex-1 flex redes-sociais wrap",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, REDES_SOCIAIS.map((item, idx) => __jsx("div", {
  className: "flex-1 flex",
  key: idx,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: item.url,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 25
  }
}, __jsx("i", {
  className: `fa fa-${item.nome} fa-lg`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 29
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (RedesSociais);

/***/ }),

/***/ "./components/Logo/Cabecalho.js":
/*!**************************************!*\
  !*** ./components/Logo/Cabecalho.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\components\\Logo\\Cabecalho.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LogoCabecalho = () => __jsx("div", {
  className: "flex-2 flex flex-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("img", {
  src: "/static/logo.png",
  className: "logo",
  width: "90%",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (LogoCabecalho);

/***/ }),

/***/ "./components/Style.js":
/*!*****************************!*\
  !*** ./components/Style.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2991086144",
  __self: undefined
}, "body{margin:0;padding:0;}body,*{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;}.container,.container-big{width:calc(100% - 20px);padding:0 10px;max-width:1200px;margin:0 auto;}.container-big{max-width:1440 px;}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flex-1{-webkit-flex:1;-ms-flex:1;flex:1;}.flex-2{-webkit-flex:2;-ms-flex:2;flex:2;}.flex-3{-webkit-flex:3;-ms-flex:3;flex:3;}.flex-4{-webkit-flex:4;-ms-flex:4;flex:4;}.flex-5{-webkit-flex:5;-ms-flex:5;flex:5;}.flex-6{-webkit-flex:6;-ms-flex:6;flex:6;}.wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrap-1{-webkit-flex-basis:calc(100% - 50px);-ms-flex-preferred-size:calc(100% - 50px);flex-basis:calc(100% - 50px);max-width:calc(100% - 50px);}.wrap-2{flax-basic:calc(50% - 50px);max-width:calc(50% - 50px);}.wrap-3{-webkit-flex-basis:calc(32% - 50px);-ms-flex-preferred-size:calc(32% - 50px);flex-basis:calc(32% - 50px);max-width:calc(32% - 50px);}.wrap-4{-webkit-flex-basis:calc(25% - 50px);-ms-flex-preferred-size:calc(25% - 50px);flex-basis:calc(25% - 50px);max-width:calc(25% - 50px);}.wrap-5{-webkit-flex-basis:calc(20% - 50px);-ms-flex-preferred-size:calc(20% - 50px);flex-basis:calc(20% - 50px);max-width:calc(20% - 50px);}.vertical{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flex-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-right{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text-center{text-align:center;}select{font-size:1rem;}@media screen and (max-width:720px){.wrap-mb{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.wrap-2-mb{-webkit-flex-basis:calc(50% - 20px);-ms-flex-preferred-size:calc(50% - 20px);flex-basis:calc(50% - 20px);max-width:calc(50% - 20px);}.produto.wrap-2-mb{-webkit-flex-basis:calc(50% - 50px);-ms-flex-preferred-size:calc(50% - 50px);flex-basis:calc(50% - 50px);max-width:calc(50% - 50px);}.horizontal-mb{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.horizontal{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxBU1NFU1NPUl9FQ09cXEVDT19MT0pcXGNvbXBvbmVudHNcXFN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd3QixBQUlrQixBQUdrRCxBQUtuQyxBQUtOLEFBRUgsQUFDSixBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFFTSxBQUVZLEFBSUQsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUdMLEFBR0ksQUFHRixBQUlQLEFBSUgsQUFHUyxBQUVRLEFBSUEsQUFHRSxBQUNBLFNBMUV4QixNQTZETSxHQWpERyxBQThDdkIsQ0ExRGUsS0FRSSxJQXFCWSxLQWRmLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxNQVhLLGdCQXFCckIsQ0EzQkEsQUFPa0IsQ0FZSSxBQTBDTyxZQVNVLENBL0RwQixJQUlDLElBOEJhLEFBOEJNLG1CQXBCaEIsRUFOQSxNQWZRLEFBSUEsQUFJQSxBQVVSLEFBZ0JZLEFBSUEsR0E5Q0gsd0JBU2hDLEFBSUEsQUFJQSxBQTBCSSxBQUlBLElBOUNKLHNEQTRCd0IsRUFOQSxNQUdBIiwiZmlsZSI6IkY6XFxBU1NFU1NPUl9FQ09cXEVDT19MT0pcXGNvbXBvbmVudHNcXFN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPiB7YFxyXG4gICAgXHJcbiAgICBib2R5IHsgXHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7IH1cclxuICAgIGJvZHksICoge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcixcclxuICAgIC5jb250YWluZXItYmlnIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyB9XHJcbiAgICAuY29udGFpbmVyLWJpZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwIHB4OyB9XHJcblxyXG4gICAgLmZsZXgge2Rpc3BsYXk6IGZsZXg7IH1cclxuICAgIC5mbGV4LTEge2ZsZXg6IDE7IH1cclxuICAgIC5mbGV4LTIge2ZsZXg6IDI7IH1cclxuICAgIC5mbGV4LTMge2ZsZXg6IDM7IH1cclxuICAgIC5mbGV4LTQge2ZsZXg6IDQ7IH1cclxuICAgIC5mbGV4LTUge2ZsZXg6IDU7IH1cclxuICAgIC5mbGV4LTYge2ZsZXg6IDY7IH1cclxuXHJcbiAgICAud3JhcCB7ZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAud3JhcC0xIHsgXHJcbiAgICAgICAgZmxleC1iYXNpczogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTIgeyBcclxuICAgICAgICBmbGF4LWJhc2ljOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTMgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDMyJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygzMiUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTQgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDI1JSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygyNSUgLSA1MHB4KTtcclxuICAgIH1cclxuICAgIC53cmFwLTUgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDIwJSAtIDUwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygyMCUgLSA1MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwge2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuXHJcbiAgICAuZmxleC1jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuICAgIC5mbGV4LXN0YXJ0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtcmlnaHQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG5cclxuICAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgLndyYXAtbWIge2ZsZXgtd3JhcDogd3JhcDsgfVxyXG4gICAgICAgIC53cmFwLTItbWIge1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdXRvLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhvcml6b250YWwtbWIge2ZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgICAgICAuaG9yaXpvbnRhbCB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gICAgfVxyXG5cclxuICAgIGB9IDwvc3R5bGU+XHJcbikiXX0= */\n/*@ sourceURL=F:\\\\ASSESSOR_ECO\\\\ECO_LOJ\\\\components\\\\Style.js */"));

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, versao, loja, baseImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versao", function() { return versao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loja", function() { return loja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseImg", function() { return baseImg; });
const API = "http://localhost:3000",
      versao = "v1",
      loja = "60c262e53ebd9f09c080f59a",
      baseImg = API + "/public/images/";

/***/ }),

/***/ "./containers/Cabecalho/index.js":
/*!***************************************!*\
  !*** ./containers/Cabecalho/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Logo/Cabecalho */ "./components/Logo/Cabecalho.js");
/* harmony import */ var _components_Campos_Pesquisa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Campos/Pesquisa */ "./components/Campos/Pesquisa.js");
/* harmony import */ var _components_Cards_Carrinho__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Cards/Carrinho */ "./components/Cards/Carrinho.js");
/* harmony import */ var _components_Listas_Categorias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Listas/Categorias */ "./components/Listas/Categorias.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Cabecalho\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 //import CardCarrinhoLimpo from '../../components/Cards/CarrinhoLimpo';

class Cabecalho extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderCabecalhoNormal() {
    return __jsx("div", {
      className: "Header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "header-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx(_components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }), __jsx(_components_Campos_Pesquisa__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), __jsx(_components_Cards_Carrinho__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "categorias-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx(_components_Listas_Categorias__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    })));
  }
  /*
      renderCabecalhoNormal(){
          return(
              <div className="Header">
                  <div className="header-wrapper">
                      <Logo />
                      <CampoPesquisa />
                      <CardCarrinho />
                      <CardCarrinhoLimpo />
                  </div>
                  <div className="categorias-wrapper">
                      <Categorias />
                  </div>
              </div>
          )
      }
  */


  renderCabecalhoSimples() {
    return __jsx("div", {
      className: "Header No-Links Header-Simples",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "header-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx(_components_Logo_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    })));
  }

  render() {
    const {
      simples
    } = this.props;
    return simples ? this.renderCabecalhoSimples() : this.renderCabecalhoNormal();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cabecalho);

/***/ }),

/***/ "./containers/Carrinho/ListaDeProdutos.js":
/*!************************************************!*\
  !*** ./containers/Carrinho/ListaDeProdutos.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Carrinho\\ListaDeProdutos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class ListaDeProdutos extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderCabecalhoCarrinho(semAlteracoes) {
    return __jsx("div", {
      className: "carrinho-cabecalho no-mb-flex flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "Quantidade")), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "Pre\xE7o Unit\xE1rio")), __jsx("div", {
      className: "headline flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, "Pre\xE7o Total")), !semAlteracoes && __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 38
      }
    }));
  }

  changeQuantidade(e, quantidade, item, index) {
    //        console.log(e.target.value, quantidade, item.variacao.quantidade);
    if (Number(e.target.value) < 1) return;
    let novaQuantidade = Number(e.target.value);
    let change = novaQuantidade - quantidade;

    if (novaQuantidade >= item.variacao.quantidade) {
      return alert("Não temos essa quantidade em estoque.");
    }

    Object(_utils_cart__WEBPACK_IMPORTED_MODULE_5__["addCart"])({
      produto: item.produto._id,
      variacao: item.variacao._id,
      quantidade: change,
      precoUnitario: item.precoUnitario
    }, false);
    this.props.updateQuantidade(change, index);
  }

  removerProdutoCarrinho(index) {
    if (window.confirm("Você deseja realmente remover esse produto?")) {
      this.props.removerProduto(index);
    }
  }

  renderProduto(item, semAlteracoes, index) {
    if (!item.variacao || !item.variacao._id || !item.produto || !item.produto._id) return null;
    const foto = item.variacao.fotos && item.variacao.fotos.length > 0 ? item.variacao.fotos[0] : item.produto.fotos[0];
    const nome = item.produto.titulo + " - " + item.variacao.nome;
    const {
      quantidade,
      precoUnitario
    } = item;
    return __jsx("div", {
      key: index,
      className: "carrinho-item flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-4 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "produto-image flex-2 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: _config__WEBPACK_IMPORTED_MODULE_1__["baseImg"] + foto,
      alt: nome,
      width: "100px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "produto-titulo flex-4 flex flex-start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("h3", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, nome))), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, semAlteracoes ? __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 26
      }
    }, quantidade) : __jsx("input", {
      type: "number",
      value: quantidade,
      className: "produto-quantidade",
      onChange: e => this.changeQuantidade(e, quantidade, item, index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 26
      }
    })), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(precoUnitario))), __jsx("div", {
      className: "flex-1 flex flex-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(precoUnitario * quantidade))), !semAlteracoes && __jsx("div", {
      className: "flex-1 flex flex-center",
      onClick: () => this.removerProdutoCarrinho(index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "btn-remover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }, "Remover")));
  }

  renderProdutos(semAlteracoes) {
    return this.props.carrinho.map((item, index) => this.renderProduto(item, semAlteracoes, index));
  }

  render() {
    const {
      semAlteracoes,
      carrinho
    } = this.props;
    return __jsx("div", {
      className: "Lista-De-Produtos flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, this.renderCabecalhoCarrinho(semAlteracoes), carrinho && this.renderProdutos(semAlteracoes));
  }

}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(ListaDeProdutos));

/***/ }),

/***/ "./containers/Checkout/CheckoutButton.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/CheckoutButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\CheckoutButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CheckoutButton extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      disabled: false,
      aviso: null
    });

    _defineProperty(this, "toggleDisabled", () => this.setState({
      disabled: !this.state.disabled
    }));
  }

  calcularValorTotal(carrinho, freteSelecionado) {
    //        console.log('calcvltotal-frete selecionado: ', freteSelecionado);
    const valorProdutos = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0); //        const valorFrete = Number(freteSelecionado.Valor.replace(',','.'));

    const valorFrete = freteSelecionado ? Number(freteSelecionado.Valor.replace(',', '.')) : 0;
    return valorProdutos + valorFrete;
  }

  validarFormulario() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
      dadosCobranca,
      dadosEntregaIgualDadosCobranca,
      CPFboleto,
      numeroCartao,
      nomeCartao,
      mesCartao,
      anoCartao,
      parcelasCartaoSelecionada,
      CVVCartao,
      credit_card_token
    } = this.props.form;
    const {
      tipoPagamentoSelecionado
    } = this.props;
    let temErro = false;
    if (!nome) temErro = true;
    if (!CPF || CPF.length !== 14) temErro = true;
    if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validateCPF"])(CPF)) temErro = true;
    if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true;
    if (!telefone || telefone.length < 11) temErro = true;
    if (!local) temErro = true;
    if (!numero) temErro = true;
    if (!bairro) temErro = true;
    if (!cidade) temErro = true;
    if (!estado) temErro = true;
    if (!CEP || CEP.length !== 9) temErro = true;

    if (!dadosEntregaIgualDadosCobranca) {
      if (!dadosCobranca.local) temErro = true;
      if (!dadosCobranca.numero) temErro = true;
      if (!dadosCobranca.bairro) temErro = true;
      if (!dadosCobranca.cidade) temErro = true;
      if (!dadosCobranca.estado) temErro = true;
      if (!dadosCobranca.CEP || dadosCobranca.CEP.length !== 9) temErro = true;
    }

    if (tipoPagamentoSelecionado === "boleto") {
      if (!CPFboleto && !CPF) temErro = true;
      if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_4__["validateCPF"])(CPFboleto)) temErro = true;
    } else {
      if (!numeroCartao || numeroCartao.length !== 19) temErro = true;
      if (!nomeCartao) temErro = true;
      if (!mesCartao || mesCartao.length !== 2) temErro = true;
      if (!anoCartao || anoCartao.length !== 4) temErro = true;
      if (!parcelasCartaoSelecionada) temErro = true;
      if (!credit_card_token) temErro = true;
      if (!CVVCartao || CVVCartao.length !== 3) temErro = true;
    } //        console.log('tem erro: ', temErro);


    return !temErro;
  }

  validate() {
    const {
      freteSelecionado,
      tipoPagamentoSelecionado
    } = this.props;
    const validarFormulario = this.validarFormulario();
    return validarFormulario && freteSelecionado && tipoPagamentoSelecionado;
  }

  handleSubmit() {
    const {
      form,
      freteSelecionado,
      token,
      senderHash,
      tipoPagamentoSelecionado
    } = this.props; //        console.log('handlesubmit-frete selecionado: ', freteSelecionado);

    const carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_3__["getCart"])();
    const valorTotal = this.calcularValorTotal(carrinho, freteSelecionado); //        console.log('valor total: ', valorTotal);

    if (!this.validate()) return null; //        console.log('passou 3');

    this.toggleDisabled(); //        console.log('passou 4');

    this.props.novoPedido(form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho, error => {
      if (error) {
        this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }

      this.toggleDisabled();
    });
  }

  render() {
    //        console.log('hender-frete selecionado: ', this.props.freteSelecionado);
    return __jsx("div", {
      className: "flex flex-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_5__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-cta btn-success",
      disabled: this.state.disabled,
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }, this.state.disabled ? "ENVIANDO..." : "CONCLUIR PEDIDO")));
  }

}

const mapStateToProps = state => ({
  carrinho: state.carrinho.carrinho,
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  freteSelecionado: state.carrinho.freteSelecionado,
  form: state.checkout.form,
  token: state.auth.token,
  senderHash: state.checkout.senderHash,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_2__["default"])(CheckoutButton));

/***/ }),

/***/ "./containers/Checkout/DadosCliente.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosCliente.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cliente_DadosCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cliente/DadosCliente */ "./containers/Cliente/DadosCliente.js");
/* harmony import */ var _Cliente_ClienteLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cliente/ClienteLogin */ "./containers/Cliente/ClienteLogin.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class DadosCliente extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate() {
    this.fetchCliente();
  }

  fetchCliente() {
    const {
      usuario,
      token,
      cliente
    } = this.props;

    if (usuario && token && !cliente) {
      this.props.fetchCliente(usuario._id, token);
    }
  }

  render() {
    const {
      usuario,
      permissaoInicial,
      permitir
    } = this.props;
    return usuario || permissaoInicial ? __jsx(_Cliente_DadosCliente__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }) : __jsx(_Cliente_ClienteLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
      permitir: permitir,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    });
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosCliente));

/***/ }),

/***/ "./containers/Checkout/DadosEntrega.js":
/*!*********************************************!*\
  !*** ./containers/Checkout/DadosEntrega.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosEntrega.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class DadosEntregaContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {
        dadosCobranca: {}
      }
    });

    _defineProperty(this, "onChange", (field, value, prefix) => this.props.setForm({
      [field]: value
    }, prefix).then(() => this.validate()));

    _defineProperty(this, "onChangeCEP", (field, value, prefix) => {
      this.props.setForm({
        [field]: value
      }, prefix).then(() => {
        this.validate();

        if (value.length === 9) {
          axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://viacep.com.br/ws/${value.replace('-', '')}/json/unicode`).then(response => {
            this.props.setForm({
              "local": response.data["logradouro"],
              "bairro": response.data["bairro"],
              "cidade": response.data["localidade"],
              "estado": response.data["uf"]
            }, prefix).then(() => this.validate());
          }).catch(e => console.log(e));
        }
      });
    });
  }

  componentDidMount() {
    this.fetchCliente();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cliente && this.props.cliente) {
      this.fetchCliente();
    }
  }

  fetchCliente() {
    const {
      cliente
    } = this.props;
    this.props.setForm({
      dadosEntregaIgualDadosCobranca: true,
      local: cliente ? cliente.endereco.local : "",
      numero: cliente ? cliente.endereco.numero : "",
      bairro: cliente ? cliente.endereco.bairro : "",
      complemento: cliente ? cliente.endereco.complemento : "",
      cidade: cliente ? cliente.endereco.cidade : "",
      estado: cliente ? cliente.endereco.estado : "",
      CEP: cliente ? cliente.endereco.CEP : "",
      dadosCobranca: {
        local: cliente ? cliente.endereco.local : "",
        numero: cliente ? cliente.endereco.numero : "",
        bairro: cliente ? cliente.endereco.bairro : "",
        complemento: cliente ? cliente.endereco.complemento : "",
        cidade: cliente ? cliente.endereco.cidade : "",
        estado: cliente ? cliente.endereco.estado : "",
        CEP: cliente ? cliente.endereco.CEP : ""
      }
    });
  }

  validate() {
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      cidade,
      estado,
      CEP,
      dadosCobranca
    } = this.props.form;
    const erros = {
      dadosCobranca: {}
    };
    if (!local) erros.local = "Preencha aqui com o seu endereço";
    if (!numero) erros.numero = "Preencha aqui com o seu número";
    if (!bairro) erros.bairro = "Preencha aqui com o seu bairro";
    if (!cidade) erros.cidade = "Preencha aqui com a sua cidade";
    if (!estado) erros.estado = "Selecione o seu estado";
    if (!CEP || CEP.length !== 9) erros.CEP = "Digite aqui seu CEP";

    if (!dadosEntregaIgualDadosCobranca) {
      if (!dadosCobranca.local) erros.dadosCobranca.local = "Preencha aqui com o seu endereço";
      if (!dadosCobranca.numero) erros.dadosCobranca.numero = "Preencha aqui com o seu número";
      if (!dadosCobranca.bairro) erros.dadosCobranca.bairro = "Preencha aqui com o seu bairro";
      if (!dadosCobranca.cidade) erros.dadosCobranca.cidade = "Preencha aqui com a sua cidade";
      if (!dadosCobranca.estado) erros.dadosCobranca.estado = "Selecione o seu estado";
      if (!dadosCobranca.CEP || dadosCobranca.CEP.length !== 9) erros.dadosCobranca.CEP = "Digite aqui seu CEP";
    }

    this.setState({
      erros
    });
    return Object.keys(erros).length === 1 && Object.keys(erros.dadosCobranca).length === 0;
  }

  renderDadosDeEntrega() {
    if (!this.props.form) return null;
    const {
      dadosEntregaIgualDadosCobranca,
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, "DADOS DE ENTREGA")), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CEP || "",
      erro: erros.CEP,
      name: "CEP",
      placeholder: "12345-789",
      label: "CEP",
      onChange: e => this.onChangeCEP("CEP", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatCEP"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: local || "",
      erro: erros.local,
      name: "local",
      placeholder: "Rua, Avenida, ...",
      label: "Endere\xE7o (Rua, Avenida,..)",
      onChange: e => this.onChange("local", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: numero || "",
      erro: erros.numero,
      name: "numero",
      placeholder: "9999",
      label: "N\xFAmero",
      onChange: e => this.onChange("numero", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: bairro || "",
      erro: erros.bairro,
      name: "bairro",
      placeholder: "Bairro",
      label: "Bairro",
      onChange: e => this.onChange("bairro", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: complemento || "",
      erro: erros.complemento,
      name: "complemento",
      placeholder: "Complemento",
      label: "Complemento",
      onChange: e => this.onChange("complemento", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: cidade || "",
      erro: erros.cidade,
      name: "cidade",
      placeholder: "Cidade",
      label: "Cidade",
      onChange: e => this.onChange("cidade", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex vertical form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    }, "Estado"), __jsx("select", {
      value: estado,
      onChange: e => this.onChange("estado", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 25
      }
    }, __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 29
      }
    }, "Selecione..."), Object.keys(_utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"]).map(abbr => __jsx("option", {
      key: abbr,
      value: abbr,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 67
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"][abbr]))), erros.estado && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 44
      }
    }, erros.estado))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx("input", {
      //                        checked={dadosEntregaIgualDadosCobranca || true} 
      checked: dadosEntregaIgualDadosCobranca,
      type: "checkbox",
      onChange: () => this.props.setForm({
        "dadosEntregaIgualDadosCobranca": !dadosEntregaIgualDadosCobranca
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }), __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }, "\xA0Os dados de entrega s\xE3o iguais aos dados de cobran\xE7a")));
  }

  renderDadosDeCobranca() {
    if (!this.props.form || !this.props.form.dadosCobranca) return null;
    const {
      local,
      numero,
      bairro,
      complemento,
      cidade,
      estado,
      CEP
    } = this.props.form.dadosCobranca;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 21
      }
    }, "DADOS DE COBRAN\xC7A")), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CEP || "",
      erro: erros.dadosCobranca.CEP,
      name: "CEP",
      placeholder: "12345-789",
      label: "CEP",
      onChange: e => this.onChangeCEP("CEP", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatCEP"])(e.target.value), 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: local || "",
      erro: erros.dadosCobranca.local,
      name: "local",
      placeholder: "Rua, Avenida, ...",
      label: "Endere\xE7o (Rua, Avenida,..)",
      onChange: e => this.onChange("local", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: numero || "",
      erro: erros.dadosCobranca.numero,
      name: "numero",
      placeholder: "9999",
      label: "N\xFAmero",
      onChange: e => this.onChange("numero", Object(_utils_format__WEBPACK_IMPORTED_MODULE_7__["formatNumber"])(e.target.value), 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: bairro || "",
      erro: erros.dadosCobranca.bairro,
      name: "bairro",
      placeholder: "Bairro",
      label: "Bairro",
      onChange: e => this.onChange("bairro", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: complemento || "",
      erro: erros.dadosCobranca.complemento,
      name: "complemento",
      placeholder: "Complemento",
      label: "Complemento",
      onChange: e => this.onChange("complemento", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1 flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: cidade || "",
      erro: erros.dadosCobranca.cidade,
      name: "cidade",
      placeholder: "Cidade",
      label: "Cidade",
      onChange: e => this.onChange("cidade", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1 flex vertical form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 21
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 25
      }
    }, "Estado"), __jsx("select", {
      value: estado,
      onChange: e => this.onChange("estado", e.target.value, 'dadosCobranca'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 25
      }
    }, __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 29
      }
    }, "Selecione..."), Object.keys(_utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"]).map(abbr => __jsx("option", {
      key: abbr,
      value: abbr,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 67
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["ESTADOS"][abbr]))), erros.dadosCobranca.estado && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 58
      }
    }, erros.dadosCobranca.estado))));
  }

  render() {
    const {
      dadosEntregaIgualDadosCobranca
    } = this.props.form;
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 13
      }
    }, this.renderDadosDeEntrega(), !dadosEntregaIgualDadosCobranca && this.renderDadosDeCobranca());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosEntregaContainer));

/***/ }),

/***/ "./containers/Checkout/DadosFrete.js":
/*!*******************************************!*\
  !*** ./containers/Checkout/DadosFrete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosFrete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class DadosFrete extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const {
      form
    } = this.props;

    if (form) {
      this.props.calcularFrete(form.CEP, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])());
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.form.CEP !== this.props.form.CEP && this.props.form.CEP.length === 9) {
      this.props.calcularFrete(this.props.form.CEP, Object(_utils_cart__WEBPACK_IMPORTED_MODULE_4__["getCart"])());
    }
  }

  selecionarFrete(frete) {
    this.props.selecionarFrete(frete);
  }

  render() {
    const {
      fretes,
      freteSelecionado
    } = this.props; //        console.log('fretes: ', fretes);
    //        console.log('dados frete-frete selecionado: ', freteSelecionado);

    return __jsx("div", {
      className: "Dados-Frete",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, "M\xC9TODOS DE ENTREGA"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, (fretes || []).map((frete, index) => __jsx("div", {
      className: "flex-1",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "frete_selecionado",
      checked: freteSelecionado ? freteSelecionado.Codigo === frete.Codigo : false,
      onChange: () => this.selecionarFrete(frete),
      label: `
                                        ${_utils__WEBPACK_IMPORTED_MODULE_5__["codigosCorreios"][frete.Codigo]} 
                                        (${frete.PrazoEntrega} dias úteis) - 
                                        ${Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatMoney"])(frete.Valor.replace(',', '.'))}
                                    `,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    })))));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  fretes: state.carrinho.fretes,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosFrete));

/***/ }),

/***/ "./containers/Checkout/DadosPagamento.js":
/*!***********************************************!*\
  !*** ./containers/Checkout/DadosPagamento.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormRadio */ "./components/Inputs/FormRadio.js");
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosPagamento.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class DadosPagamento extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {}
    });

    _defineProperty(this, "onChange", (field, value) => this.props.setForm({
      [field]: value
    }).then(() => this.validate()));
  }

  componentDidMount() {
    this.props.getSessionPagamento();
  }

  componentDidUpdate(prevProps) {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      credit_card_token,
      bandeira_cartao,
      parcelasCartao
    } = this.props.form;

    if (!bandeira_cartao && numeroCartao && numeroCartao.split(' ').join('').length > 7) {
      this.getBrand();
    }

    if (!credit_card_token && numeroCartao && numeroCartao.split(' ').join('').length === 16 && mesCartao && mesCartao.length === 2 && anoCartao && anoCartao.length === 4 && CVVCartao && CVVCartao.length === 3 && bandeira_cartao) this.submitCartaoHash();
    if (!parcelasCartao && bandeira_cartao || parcelasCartao && bandeira_cartao && prevProps.freteSelecionado !== this.props.freteSelecionado) this.getParcelas();
  }

  getBrand() {
    const {
      numeroCartao
    } = this.props.form;
    PagSeguroDirectPayment.getBrand({
      cardBin: numeroCartao.split(' ').join('').slice(0, 6),
      success: r => this.props.setForm({
        bandeira_cartao: r.brand
      }),
      error: r => console.log(r)
    });
  }

  submitCartaoHash() {
    const {
      numeroCartao,
      mesCartao,
      anoCartao,
      CVVCartao,
      bandeira_cartao
    } = this.props.form;
    const params = {
      cardNumber: numeroCartao.split(' ').join(''),
      brand: bandeira_cartao.name,
      cvv: CVVCartao,
      expirationMonth: mesCartao,
      expirationYear: anoCartao,
      success: r => {
        this.props.setForm({
          credit_card_token: r.card.token
        });
      },
      error: r => console.log(r)
    };
    PagSeguroDirectPayment.createCardToken(params);
  }

  getParcelas() {
    const {
      freteSelecionado,
      carrinho
    } = this.props;
    const {
      bandeira_cartao
    } = this.props.form;
    let valorTotal = carrinho.reduce((all, item) => all + Number(item.precoUnitario) * Number(item.quantidade), 0);
    let freteValor = Number(freteSelecionado.Valor.replace(',', '.'));
    PagSeguroDirectPayment.getInstallments({
      amount: valorTotal + freteValor,
      maxInstallmentNoInterest: 6,
      maxInstallment: 6,
      brand: bandeira_cartao.name,
      success: data => {
        this.props.setForm({
          parcelasCartao: data.installments
        });
        this.props.setForm({
          parcelasCartaoSelecionada: data.installments[bandeira_cartao.name][0]
        });
      },
      error: r => console.log(r)
    });
  }

  renderOpcoesPagamento() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    return __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tipo_pagamento_selecionado",
      checked: tipoPagamentoSelecionado === 'boleto',
      onChange: () => this.props.setTipoPagamento("boleto"),
      label: "Boleto Banc\xE1rio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormRadio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "tipo_pagamento_selecionado",
      checked: tipoPagamentoSelecionado === 'cartao',
      onChange: () => this.props.setTipoPagamento("cartao"),
      label: "Cart\xE3o de Cr\xE9dito",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    })));
  }

  validate() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    const {
      CPF,
      CPFboleto,
      numeroCartao,
      nomeCartao,
      mesCartao,
      anoCartao,
      parcelasCartaoSelecionada,
      CVVCartao
    } = this.props.form;
    const erros = {};

    if (tipoPagamentoSelecionado === "boleto") {
      if (!CPFboleto && !CPF) erros.CPFboleto = "Preencha aqui com o seu CPF";
      if (CPFboleto && CPFboleto.length !== 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_7__["validateCPF"])(CPFboleto)) erros.CPFboleto = "Preencha aqui com o seu CPF corretamente";
    }

    ;

    if (tipoPagamentoSelecionado === "cartao") {
      if (!numeroCartao || numeroCartao.length !== 19) erros.numeroCartao = "Preencha aqui com o número do seu cartão";
      if (!nomeCartao) erros.nomeCartao = "Preencha aqui com o nome que está no cartão";
      if (!mesCartao || mesCartao.length !== 2) erros.mesCartao = "Preencha aqui com o mês de vencimento do cartão";
      if (!anoCartao || anoCartao.length !== 4) erros.anoCartao = "Preencha aqui com o ano de vencimento do cartão";
      if (!parcelasCartaoSelecionada) erros.parcelasCartaoSelecionada = "Selecione uma forma de pagamento";
      if (!CVVCartao || CVVCartao.length !== 3) erros.CVVCartao = "Preencha aqui com o código de segurança do cartão";
    }

    ;
    this.setState({
      erros
    });
    return !(Object.keys(erros).length > 0);
  }

  renderPagamentoComBoleto() {
    const {
      CPF,
      CPFboleto
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "Dados-Pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: CPFboleto || CPF,
      name: "CPF",
      erro: erros.CPFboleto,
      placeholder: "CPF",
      label: "CPF",
      onChange: e => this.onChange("CPFboleto", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatCPF"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }));
  }

  renderPagamentoComCartao() {
    const {
      nomeCartao,
      numeroCartao,
      CVVCartao,
      mesCartao,
      anoCartao,
      parcelasCartao,
      parcelasCartaoSelecionada,
      bandeira_cartao
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "Dados-Pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: nomeCartao,
      erro: erros.nomeCartao,
      name: "nomeCartao",
      placeholder: "Nome como escrito no cart\xE3o",
      label: "Nome Completo no Cart\xE3o",
      onChange: e => this.onChange("nomeCartao", e.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: numeroCartao,
      erro: erros.numeroCartao,
      name: "numeroCartao",
      placeholder: "XXXX XXXX XXXX XXXX",
      label: "N\xFAmero do Cart\xE3o",
      onChange: e => this.onChange("numeroCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatCartao"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: CVVCartao,
      erro: erros.CVVCartao,
      name: "CVVCartao",
      placeholder: "XXX",
      label: "C\xF3digo de Seguran\xE7a do Cart\xE3o",
      onChange: e => this.onChange("CVVCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 3)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 21
      }
    }, " Data de Validade ")), __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: mesCartao,
      erro: erros.mesCartao,
      name: "mesCartao",
      placeholder: "MM",
      label: "M\xEAs",
      onChange: e => this.onChange("mesCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 2)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }
    }), __jsx("span", {
      className: "slash-pagamento",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 21
      }
    }, " \xA0 / \xA0 "), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: anoCartao,
      erro: erros.anoCartao,
      name: "anoCartao",
      placeholder: "AAAA",
      label: "Ano",
      onChange: e => this.onChange("anoCartao", Object(_utils_format__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(e.target.value, 4)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }
    })), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "form-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 21
      }
    }, " Parcelas ")), parcelasCartao && parcelasCartaoSelecionada && __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 25
      }
    }, __jsx("select", {
      name: "parcela",
      value: parcelasCartaoSelecionada.quantity,
      onChange: e => this.onChange("parcelasCartaoSelecionada", parcelasCartao[bandeira_cartao.name][e.target.value - 1]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 29
      }
    }, !parcelasCartaoSelecionada && __jsx("option", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 37
      }
    }, " Selecione a quantidade de parcelas para pagamento "), parcelasCartao[bandeira_cartao.name].slice(0, 6).map((item, index) => __jsx("option", {
      key: index,
      value: item.quantity,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 41
      }
    }, item.quantity, " x de ", Object(_utils__WEBPACK_IMPORTED_MODULE_6__["formatMoney"])(item.totalAmount / item.quantity), " sem juros"))), erros.parcelasCartaoSelecionada && __jsx("small", {
      className: "erro",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 33
      }
    }, " ", erros.parcelasCartaoSelecionada, " ")));
  }

  render() {
    const {
      tipoPagamentoSelecionado
    } = this.props;
    return __jsx("div", {
      className: "Dados-Pagamento-Container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }
    }, " DADOS DE PAGAMENTO "), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 17
      }
    }), this.renderOpcoesPagamento(), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 17
      }
    }), tipoPagamentoSelecionado === 'boleto' && this.renderPagamentoComBoleto(), tipoPagamentoSelecionado === 'cartao' && this.renderPagamentoComCartao());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  carrinho: state.carrinho.carrinho,
  cliente: state.cliente.cliente,
  form: state.checkout.form,
  tipoPagamentoSelecionado: state.checkout.tipoPagamentoSelecionado,
  sessionId: state.checkout.sessionId,
  senderHash: state.checkout.senderHash,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(DadosPagamento));

/***/ }),

/***/ "./containers/Checkout/DadosPedido.js":
/*!********************************************!*\
  !*** ./containers/Checkout/DadosPedido.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Carrinho_ListaDeProdutos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Carrinho/ListaDeProdutos */ "./containers/Carrinho/ListaDeProdutos.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\DadosPedido.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class DadosPedido extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Dados-Pedido-Container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, "DADOS DO PEDIDO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), __jsx(_Carrinho_ListaDeProdutos__WEBPACK_IMPORTED_MODULE_1__["default"], {
      semAlteracoes: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DadosPedido);

/***/ }),

/***/ "./containers/Checkout/SubmitDadosCliente.js":
/*!***************************************************!*\
  !*** ./containers/Checkout/SubmitDadosCliente.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\SubmitDadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class SubmitDadosCliente extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      aviso: null
    });

    _defineProperty(this, "callback", error => {
      if (!error) {
        this.props.permitir();
        this.setState({
          aviso: null
        });
      } else {
        this.setState({
          aviso: {
            status: false,
            message: error.message
          }
        });
      }
    });

    _defineProperty(this, "validate", () => {
      const {
        email,
        senha,
        nome,
        CPF,
        dataDeNascimento,
        telefone,
        local,
        numero,
        bairro,
        cidade,
        estado,
        CEP
      } = this.props.form;
      const {
        usuario
      } = this.props;
      let temErro = false;
      if (!usuario && !email) temErro = true;
      if (!usuario && !senha) temErro = true;
      if (!nome) temErro = true;
      if (!CPF || CPF.length !== 14) temErro = true;
      if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_2__["validateCPF"])(CPF)) temErro = true;
      if (!dataDeNascimento || dataDeNascimento.length !== 10) temErro = true;
      if (!telefone || telefone.length < 11) temErro = true;
      if (!local) temErro = true;
      if (!numero) temErro = true;
      if (!bairro) temErro = true;
      if (!cidade) temErro = true;
      if (!estado) temErro = true;
      if (!CEP || CEP.length !== 9) temErro = true;
      return !temErro;
    });
  }

  handleSubmit() {
    if (!this.validate()) return null;
    const {
      token,
      form,
      cliente
    } = this.props;
    if (!token) this.props.newCliente(form, this.callback);else this.props.updateCliente(form, cliente._id, token, this.callback);
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_1__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "flex flex-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, __jsx("button", {
      className: "btn btn-success btn-cta",
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, "CONTINUAR PEDIDO")));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_4__["default"])(SubmitDadosCliente));

/***/ }),

/***/ "./containers/Checkout/index.js":
/*!**************************************!*\
  !*** ./containers/Checkout/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DadosCliente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DadosCliente */ "./containers/Checkout/DadosCliente.js");
/* harmony import */ var _DadosEntrega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DadosEntrega */ "./containers/Checkout/DadosEntrega.js");
/* harmony import */ var _SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitDadosCliente */ "./containers/Checkout/SubmitDadosCliente.js");
/* harmony import */ var _DadosFrete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DadosFrete */ "./containers/Checkout/DadosFrete.js");
/* harmony import */ var _DadosPagamento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DadosPagamento */ "./containers/Checkout/DadosPagamento.js");
/* harmony import */ var _DadosPedido__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DadosPedido */ "./containers/Checkout/DadosPedido.js");
/* harmony import */ var _CheckoutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckoutButton */ "./containers/Checkout/CheckoutButton.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Checkout\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class CheckoutContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      permissaoInicial: false,
      permissaoCheckout: false
    });
  }

  render() {
    const {
      permissaoInicial,
      permissaoCheckout
    } = this.state;
    const {
      usuario,
      freteSelecionado
    } = this.props; //        console.log('frete selecionado: ', freteSelecionado);

    return __jsx("div", {
      className: "Checkout container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, "CONCLUINDO SEU PEDIDO"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), __jsx(_DadosCliente__WEBPACK_IMPORTED_MODULE_1__["default"], {
      usuario: usuario,
      permissaoInicial: permissaoInicial,
      permitir: () => this.setState({
        permissaoInicial: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }), (permissaoInicial || usuario) && __jsx(_DadosEntrega__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 54
      }
    }), (permissaoInicial || usuario) && __jsx(_SubmitDadosCliente__WEBPACK_IMPORTED_MODULE_3__["default"], {
      permitir: () => this.setState({
        permissaoCheckout: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }), permissaoCheckout && __jsx(_DadosFrete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 40
      }
    }), permissaoCheckout && __jsx(_DadosPagamento__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 40
      }
    }), permissaoCheckout && __jsx(_DadosPedido__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 40
      }
    }), permissaoCheckout && __jsx(_CheckoutButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 40
      }
    }));
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  freteSelecionado: state.carrinho.freteSelecionado
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_9__["default"])(CheckoutContainer));

/***/ }),

/***/ "./containers/Cliente/ClienteLogin.js":
/*!********************************************!*\
  !*** ./containers/Cliente/ClienteLogin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var _components_Alert_Geral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Alert/Geral */ "./components/Alert/Geral.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Cliente\\ClienteLogin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ClienteLogin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      email: "",
      senha: "",
      aviso: null,
      erros: {}
    });

    _defineProperty(this, "onChange", (field, e) => this.setState({
      [field]: e.target.value
    }, () => this.validate()));
  }

  renderAvisoDeRegistro() {
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, "Comprar como Visitante/Realizar Registro"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-success",
      onClick: () => this.props.permitir(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }, "CONTINUAR")));
  }

  validate() {
    const {
      email,
      senha
    } = this.state;
    const erros = {};
    if (!email) erros.email = "Preencha aqui com o seu email";
    if (!senha) erros.senha = "Preencha aqui com a sua senha";
    this.setState({
      erros,
      aviso: null
    });
    return !(Object.keys(erros).length > 0);
  }

  handleSubmit() {
    if (!this.validate()) return null;
    const {
      email,
      senha
    } = this.state;
    this.props.autenticar({
      email,
      password: senha
    }, false, error => {
      if (error) this.setState({
        aviso: {
          status: false,
          message: error.message
        }
      });
    });
  }

  renderFormLogin() {
    const {
      email,
      senha,
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Fazer Login"), __jsx(_components_Alert_Geral__WEBPACK_IMPORTED_MODULE_4__["default"], {
      aviso: this.state.aviso,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: email,
      name: "email",
      label: "E-mail",
      erro: erros.email,
      placeholder: "E-mail",
      onChange: e => this.onChange("email", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }), __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: senha,
      name: "senha",
      erro: erros.senha,
      label: "Senha",
      type: "password",
      placeholder: "Senha",
      onChange: e => this.onChange("senha", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "btn btn-success",
      onClick: () => this.handleSubmit(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, "ENTRAR")));
  }

  render() {
    return __jsx("div", {
      className: "Cliente-Login flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, this.renderAvisoDeRegistro(), this.renderFormLogin());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(ClienteLogin));

/***/ }),

/***/ "./containers/Cliente/DadosCliente.js":
/*!********************************************!*\
  !*** ./containers/Cliente/DadosCliente.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Inputs/FormSimples */ "./components/Inputs/FormSimples.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions */ "./redux/actions/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validate */ "./utils/validate.js");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/format */ "./utils/format.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Cliente\\DadosCliente.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class DadosClienteContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      erros: {}
    });

    _defineProperty(this, "onChange", (field, e, value) => {
      this.props.setForm({
        [field]: value || e.target.value
      }, null).then(() => this.validate());
    });
  }

  componentDidMount() {
    this.props.setForm({
      email: "",
      senha: "",
      nome: this.props.cliente ? this.props.cliente.nome : "",
      CPF: this.props.cliente ? this.props.cliente.cpf : "",
      telefone: this.props.cliente && this.props.cliente.telefones ? this.props.cliente.telefones[0] : "",
      dataDeNascimento: this.props.cliente ? moment__WEBPACK_IMPORTED_MODULE_4___default()(this.props.cliente.dataDeNascimento).format("DD/MM/YYYY") : ""
    });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cliente && this.props.cliente) {
      const {
        nome,
        cpf,
        telefones,
        dataDeNascimento
      } = this.props.cliente;
      this.props.setForm({
        nome,
        CPF: cpf,
        telefone: telefones[0],
        dataDeNascimento: moment__WEBPACK_IMPORTED_MODULE_4___default()(dataDeNascimento).format("DD/MM/YYYY")
      });
    }
  }

  validate() {
    const {
      email,
      senha,
      nome,
      CPF,
      dataDeNascimento,
      telefone
    } = this.props.form;
    const {
      usuario
    } = this.props;
    const erros = {};
    if (!usuario && !email) erros.email = "Preencha aqui com o seu email";
    if (!usuario && !senha) erros.senha = "Preencha aqui com a sua senha";
    if (!nome) erros.nome = "Preencha aqui com o seu nome";
    if (!CPF || CPF.length !== 14) erros.CPF = "Preencha aqui com o seu CPF";
    if (CPF && CPF.length === 14 && !Object(_utils_validate__WEBPACK_IMPORTED_MODULE_5__["validateCPF"])(CPF)) erros.CPF = "Preencha aqui com o seu CPF corretamente";
    if (!dataDeNascimento || dataDeNascimento.length !== 10) erros.dataDeNascimento = "Preencha aqui com a sua data de nascimento";
    if (!telefone || telefone.length < 11) erros.telefone = "Preencha aqui com o seu telefone";
    this.setState({
      erros
    });
    return !(Object.keys(erros).length > 0);
  }

  renderDadosRegistro() {
    const {
      email,
      senha
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: email || "",
      name: "email",
      placeholder: "E-mail",
      label: "E-mail",
      erro: erros.email,
      onChange: e => this.onChange("email", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: senha || "",
      name: "senha",
      placeholder: "Senha",
      label: "Senha",
      type: "senha",
      erro: erros.senha,
      onChange: e => this.onChange("senha", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    })));
  }

  renderDadosUsuario() {
    const {
      nome,
      CPF,
      dataDeNascimento,
      telefone
    } = this.props.form;
    const {
      erros
    } = this.state;
    return __jsx("div", {
      className: "flex-1 flex vertical",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: nome || "",
      name: "nome",
      placeholder: "Nome",
      label: "Nome",
      erro: erros.nome,
      onChange: e => this.onChange("nome", e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: CPF || "",
      name: "CPF",
      placeholder: "CPF",
      label: "CPF",
      erro: erros.CPF,
      onChange: e => this.onChange("CPF", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatCPF"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "flex-1 flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: dataDeNascimento || "",
      erro: erros.dataDeNascimento,
      name: "dataDeNascimento",
      placeholder: "DD/MM/AAAA",
      label: "Data de Nascimento",
      onChange: e => this.onChange("dataDeNascimento", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatDataDeNascimento"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx(_components_Inputs_FormSimples__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: telefone || "",
      erro: erros.telefone,
      name: "telefone",
      placeholder: "(34) 1234-5678",
      label: "Telefone/Celular",
      onChange: e => this.onChange("telefone", e, Object(_utils_format__WEBPACK_IMPORTED_MODULE_6__["formatTelefone"])(e.target.value)),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }))));
  }

  render() {
    return __jsx("div", {
      className: "flex-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }
    }, " DADOS DO CLIENTE ")), !this.props.usuario && this.renderDadosRegistro(), this.renderDadosUsuario());
  }

}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente,
  form: state.checkout.form
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, _redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"])(DadosClienteContainer));

/***/ }),

/***/ "./containers/Rodape/index.js":
/*!************************************!*\
  !*** ./containers/Rodape/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Listas_Paginas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Listas/Paginas */ "./components/Listas/Paginas.js");
/* harmony import */ var _components_Listas_RedesSociais__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Listas/RedesSociais */ "./components/Listas/RedesSociais.js");
/* harmony import */ var _components_Item_DadosDaLoja__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Item/DadosDaLoja */ "./components/Item/DadosDaLoja.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\containers\\Rodape\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Rodape extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Rodape",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "container flex horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx(_components_Listas_Paginas__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }), __jsx(_components_Listas_RedesSociais__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }), __jsx(_components_Item_DadosDaLoja__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Rodape);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Cabecalho */ "./containers/Cabecalho/index.js");
/* harmony import */ var _containers_Checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/Checkout */ "./containers/Checkout/index.js");
/* harmony import */ var _containers_Rodape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Rodape */ "./containers/Rodape/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\pages\\checkout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Checkout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps({
    res
  }) {
    if (res) {
      res.writeHead(302, {
        Location: "/carrinho"
      });
      res.end();
    }

    return {};
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Check-out | LOJA IT - Melhores produtos de tecnologia",
      pagSeguro: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx(_containers_Cabecalho__WEBPACK_IMPORTED_MODULE_2__["default"], {
      simples: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }), __jsx(_containers_Checkout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }), __jsx(_containers_Rodape__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }));
  }

}

/***/ }),

/***/ "./redux/actions/authActions.js":
/*!**************************************!*\
  !*** ./redux/actions/authActions.js ***!
  \**************************************/
/*! exports provided: reauthenticate, getUser, autenticar, desautenticar, updateSenha, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reauthenticate", function() { return reauthenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autenticar", function() { return autenticar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desautenticar", function() { return desautenticar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSenha", function() { return updateSenha; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");








const reauthenticate = token => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"],
  payload: token
});
const getUser = ({
  token
}) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
    payload: response.data.usuario
  })).catch(e => console.log(e));
};
const autenticar = ({
  email,
  password
}, goTo = false, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios/login`, {
    email,
    password
  }).then(response => {
    Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_4__["setCookie"])('token', response.data.usuario.token);
    if (goTo) next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(goTo);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR"],
      payload: response.data
    });
    dispatch(Object(_clienteActions__WEBPACK_IMPORTED_MODULE_3__["fetchCliente"])(response.data.usuario._id, response.data.usuario.token));
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const desautenticar = () => dispatch => {
  Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_4__["removeCookie"])('token');
  next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DESAUTENTICAR"]
  });
};
const updateSenha = (data, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/usuarios`, {
    password: data.novaSenha
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["USER"],
      payload: response.data.usuario
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reauthenticate,
  getUser,
  autenticar,
  desautenticar,
  updateSenha
});

/***/ }),

/***/ "./redux/actions/carrinhoActions.js":
/*!******************************************!*\
  !*** ./redux/actions/carrinhoActions.js ***!
  \******************************************/
/*! exports provided: setCarrinho, cleanCarrinho, fetchProdutoCarrinho, fetchVariacoesCarrinho, calcularFrete, removerProduto, updateQuantidade, selecionarFrete, cleanFretes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCarrinho", function() { return setCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCarrinho", function() { return cleanCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutoCarrinho", function() { return fetchProdutoCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoesCarrinho", function() { return fetchVariacoesCarrinho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcularFrete", function() { return calcularFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removerProduto", function() { return removerProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuantidade", function() { return updateQuantidade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selecionarFrete", function() { return selecionarFrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanFretes", function() { return cleanFretes; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./redux/types.js");




const setCarrinho = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["SET_CARRINHO"],
  carrinho: Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["getCart"])()
});
const cleanCarrinho = () => {
  //    console.log('limpar carrinho');
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["cleanCart"])();
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_CARRINHO"]
  };
};
const fetchProdutoCarrinho = (id, idxCarrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/produtos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_1__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_PRODUTO_CARRINHO"],
    payload: response.data,
    idxCarrinho
  })).catch(e => console.log(e));
};
const fetchVariacoesCarrinho = (id, produto, idxCarrinho) => dispatch => {
  //    console.log(id, produto, idxCarrinho, loja)
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/variacoes/${id}?produto=${produto}&loja=${_config__WEBPACK_IMPORTED_MODULE_1__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VARIACAO_CARRINHO"],
    payload: response.data,
    idxCarrinho
  })).catch(e => console.log(e));
};
const calcularFrete = (cep, carrinho) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_1__["versao"]}/api/entregas/calcular`, {
    cep,
    carrinho
  }).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_3__["FETCH_VALOR_ENTREGA"],
    payload: response.data,
    cep
  })).catch(e => console.log(e));
};
const removerProduto = index => {
  Object(_utils_cart__WEBPACK_IMPORTED_MODULE_2__["removeCart"])(index);
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_3__["REMOVE_PROD_CART"],
    idxCarrinho: index
  };
};
const updateQuantidade = (change, index) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_QTD_CART"],
  change,
  idxCarrinho: index
});
const selecionarFrete = freteSelecionado => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["UPDATE_FRETE_CART"],
  freteSelecionado
});
const cleanFretes = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_3__["CLEAN_FRETES"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  setCarrinho,
  cleanCarrinho,
  fetchProdutoCarrinho,
  fetchVariacoesCarrinho,
  calcularFrete,
  updateQuantidade,
  selecionarFrete,
  removerProduto,
  cleanFretes
});

/***/ }),

/***/ "./redux/actions/categoriaActions.js":
/*!*******************************************!*\
  !*** ./redux/actions/categoriaActions.js ***!
  \*******************************************/
/*! exports provided: fetchCategorias, fetchCategoria, fetchProdutosCategoria, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategorias", function() { return fetchCategorias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCategoria", function() { return fetchCategoria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosCategoria", function() { return fetchProdutosCategoria; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



const fetchCategorias = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/disponiveis?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIAS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchCategoria = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchProdutosCategoria = (id, atual = 0, limit = 20) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/categorias/${id}/produtos?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${atual}&limit=${limit}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA_PRODUTOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCategorias,
  fetchCategoria,
  fetchProdutosCategoria
});

/***/ }),

/***/ "./redux/actions/checkoutActions.js":
/*!******************************************!*\
  !*** ./redux/actions/checkoutActions.js ***!
  \******************************************/
/*! exports provided: setForm, cleanForm, setTipoPagamento, getSessionPagamento, novoPedido, pagarPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setForm", function() { return setForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanForm", function() { return cleanForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTipoPagamento", function() { return setTipoPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionPagamento", function() { return getSessionPagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novoPedido", function() { return novoPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagarPedido", function() { return pagarPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cart */ "./utils/cart.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");








const setForm = (payload, prefix) => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_FORM"],
    payload,
    prefix
  });
  return Promise.resolve();
};
const cleanForm = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FORM"]
});
const setTipoPagamento = tipoPagamentoSelecionado => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_TIPO_PAGAMENTO"],
  tipoPagamentoSelecionado
});
const getSessionPagamento = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pagamentos/session`).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SESSION_ID"],
      payload: response.data
    });
    PagSeguroDirectPayment.setSessionId(response.data.sessionId);
    let senderHash = PagSeguroDirectPayment.getSenderHash();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SENDER_HASH"],
      senderHash
    });
  }).catch(e => console.log(e));
};
const novoPedido = (form, freteSelecionado, tipoPagamentoSelecionado, valorTotal, token, senderHash, carrinho = Object(_utils_cart__WEBPACK_IMPORTED_MODULE_3__["getCart"])(), cb = null) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pedidos?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    carrinho,
    entrega: {
      custo: freteSelecionado.Valor.replace(',', '.'),
      tipo: freteSelecionado.Codigo.toString(),
      prazo: freteSelecionado.PrazoEntrega,
      endereco: {
        local: form.local,
        numero: form.numero,
        complemento: form.complemento,
        bairro: form.bairro,
        cidade: form.cidade,
        estado: form.estado,
        CEP: form.CEP
      }
    },
    pagamento: {
      valor: tipoPagamentoSelecionado === "cartao" ? form.parcelasCartaoSelecionada.totalAmount : valorTotal,
      forma: tipoPagamentoSelecionado === "cartao" ? "creditCard" : "boleto",
      parcelas: tipoPagamentoSelecionado === "cartao" ? form.parcelasCartaoSelecionada.quantity : 1,
      enderecoEntregaIgualCobranca: form.dadosEntregaIgualDadosCobranca,
      endereco: {
        local: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.local : form.local,
        numero: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.numero : form.numero,
        complemento: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.complemento : form.complemento,
        bairro: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.bairro : form.bairro,
        cidade: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.cidade : form.cidade,
        estado: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.estado : form.estado,
        CEP: !form.dadosEntregaIgualDadosCobranca ? form.dadosCobranca.CEP : form.CEP
      },
      cartao: tipoPagamentoSelecionado === "cartao" ? {
        nomeCompleto: form.nomeCartao.trim(),
        codigoArea: form.telefone.slice(0, 2),
        telefone: form.telefone.slice(2).trim(),
        dataDeNascimento: form.dataDeNascimento,
        credit_card_token: form.credit_card_token,
        cpf: form.CPF
      } : undefined
    }
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["NOVO_PEDIDO"],
      payload: response.data
    });
    dispatch(pagarPedido(response.data.pedido.pagamento._id, token, senderHash, cb));
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e)));
};
const pagarPedido = (id, token, senderHash, cb = null) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/pagamentos/pagar/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    senderHash
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["PAGAR_PEDIDO"],
      payload: response.data
    });
    cb(null);
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/sucesso');
    dispatch(Object(_carrinhoActions__WEBPACK_IMPORTED_MODULE_7__["cleanCarrinho"])());
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_5__["default"])(e)));
};
/*
export const pagarPedido= (id, token, senderHash, cb = null) => dispatch => {
    cb(null);
    Router.push('/sucesso');
    dispatch(cleanCarrinho());        
};
*/

/* harmony default export */ __webpack_exports__["default"] = ({
  setForm,
  cleanForm,
  setTipoPagamento,
  getSessionPagamento,
  novoPedido,
  pagarPedido
});

/***/ }),

/***/ "./redux/actions/clienteActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/clienteActions.js ***!
  \*****************************************/
/*! exports provided: getRawData, fetchCliente, newCliente, updateCliente, logoutCliente, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawData", function() { return getRawData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCliente", function() { return fetchCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCliente", function() { return newCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCliente", function() { return updateCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutCliente", function() { return logoutCliente; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");








const getRawData = data => {
  let _data = data.split('/');

  let ano = _data[2];

  let _mes = Number(_data[1]);

  let mes = _mes < 10 ? "0" + _mes : _mes;

  let _dia = Number(_data[0]);

  let dia = _dia < 10 ? "0" + _dia : _dia;
  return `${ano}-${mes}-${dia}`;
};
const fetchCliente = (id, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(resposta => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: resposta.data
    });
  }).catch(e => console.log(e));
};
const newCliente = (form, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    nome: form.nome,
    senha: form.senha,
    cpf: form.CPF,
    email: form.email,
    telefones: [form.telefone],
    endereco: {
      local: form.local,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      CEP: form.CEP
    },
    dataDeNascimento: getRawData(form.dataDeNascimento)
  }).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
    dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_6__["autenticar"])({
      email: form.email,
      senha: form.senha
    }, null, cb));
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const updateCliente = (form, id, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/clientes/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`, {
    nome: form.nome,
    cpf: form.CPF,
    telefones: [form.telefone],
    endereco: {
      local: form.local,
      numero: form.numero,
      complemento: form.complemento,
      bairro: form.bairro,
      cidade: form.cidade,
      estado: form.estado,
      CEP: form.CEP
    },
    dataDeNascimento: getRawData(form.dataDeNascimento)
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_7__["default"])(e)));
};
const logoutCliente = () => dispatch => {
  dispatch(Object(_authActions__WEBPACK_IMPORTED_MODULE_6__["desautenticar"])());
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CLIENTE"]
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchCliente,
  newCliente,
  updateCliente,
  logoutCliente
});

/***/ }),

/***/ "./redux/actions/errorHandling.js":
/*!****************************************!*\
  !*** ./redux/actions/errorHandling.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const errorHandling = error => {
  console.log(error, error.response ? error.response.data : null);

  if (!error.response || !error.response.data) {
    return {
      status: 500,
      message: "Ocorreu um erro no servidor. Tente novamente."
    };
  }

  if (error.response.data.status === 401) {
    return {
      status: 401,
      message: "Você não tem autorização para acessar esses dados."
    };
  }

  const _errors = error.response.data.errors || error.response.data.error;

  if (_errors && typeof _errors === "string") return {
    status: 400,
    message: _errors
  };
  let msg = 'Erro: ';

  if (!Array.isArray(_errors)) {
    Object.keys(_errors).forEach((erro, index) => {
      msg += `${erro} ${_errors[erro].message || (_errors[erro].properties ? _errors[erro].properties.message : "") || _errors[erro]}\n`; //            msg += `${erro} ${_errors[erro].message || _errors[erro]}\n`;
    });
  } else {
    msg += `Preencha corretamente ${_errors.length > 1 ? "os campos " : "o campo "} de:`;

    _errors.forEach((item, index) => {
      const field = item.field[item.field.length - 1];
      msg += ` ${field}${index === _errors.length - 1 ? "." : ","}`;
    });
  }

  return {
    status: 400,
    message: msg
  };
};

/* harmony default export */ __webpack_exports__["default"] = (errorHandling);

/***/ }),

/***/ "./redux/actions/helpers.js":
/*!**********************************!*\
  !*** ./redux/actions/helpers.js ***!
  \**********************************/
/*! exports provided: getHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaders", function() { return getHeaders; });
const getHeaders = token => ({
  headers: {
    "Authorization": `Ecommerce ${token}`
  }
});

/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authActions */ "./redux/actions/authActions.js");
/* harmony import */ var _categoriaActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoriaActions */ "./redux/actions/categoriaActions.js");
/* harmony import */ var _lojaActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lojaActions */ "./redux/actions/lojaActions.js");
/* harmony import */ var _produtoActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtoActions */ "./redux/actions/produtoActions.js");
/* harmony import */ var _carrinhoActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carrinhoActions */ "./redux/actions/carrinhoActions.js");
/* harmony import */ var _clienteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clienteActions */ "./redux/actions/clienteActions.js");
/* harmony import */ var _checkoutActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkoutActions */ "./redux/actions/checkoutActions.js");
/* harmony import */ var _pedidoActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pedidoActions */ "./redux/actions/pedidoActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _authActions__WEBPACK_IMPORTED_MODULE_0__["default"]), _categoriaActions__WEBPACK_IMPORTED_MODULE_1__["default"]), _lojaActions__WEBPACK_IMPORTED_MODULE_2__["default"]), _produtoActions__WEBPACK_IMPORTED_MODULE_3__["default"]), _carrinhoActions__WEBPACK_IMPORTED_MODULE_4__["default"]), _clienteActions__WEBPACK_IMPORTED_MODULE_5__["default"]), _checkoutActions__WEBPACK_IMPORTED_MODULE_6__["default"]), _pedidoActions__WEBPACK_IMPORTED_MODULE_7__["default"]));

/***/ }),

/***/ "./redux/actions/lojaActions.js":
/*!**************************************!*\
  !*** ./redux/actions/lojaActions.js ***!
  \**************************************/
/*! exports provided: fetchDadosLoja, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDadosLoja", function() { return fetchDadosLoja; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");



const fetchDadosLoja = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/lojas/${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_DADOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDadosLoja
});

/***/ }),

/***/ "./redux/actions/pedidoActions.js":
/*!****************************************!*\
  !*** ./redux/actions/pedidoActions.js ***!
  \****************************************/
/*! exports provided: fetchPedidos, fetchPedido, cancelarPedido, cleanPedido, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedidos", function() { return fetchPedidos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPedido", function() { return fetchPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelarPedido", function() { return cancelarPedido; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPedido", function() { return cleanPedido; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _errorHandling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errorHandling */ "./redux/actions/errorHandling.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");






const fetchPedidos = ({
  offset,
  limit,
  token
}) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}&offset=${offset}&limit=${limit}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchPedido = (id, token) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDO"],
    payload: response.data
  })).catch(e => console.log(e));
};
const cancelarPedido = (id, token, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`${_config__WEBPACK_IMPORTED_MODULE_3__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_3__["versao"]}/api/pedidos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_3__["loja"]}`, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CANCELAR_PEDIDO"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(Object(_errorHandling__WEBPACK_IMPORTED_MODULE_4__["default"])(e)));
};
const cleanPedido = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_PEDIDO"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchPedidos,
  fetchPedido,
  cancelarPedido,
  cleanPedido
});

/***/ }),

/***/ "./redux/actions/produtoActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/produtoActions.js ***!
  \*****************************************/
/*! exports provided: fetchProdutosPaginaInicial, fetchTermo, fetchProdutosPesquisa, fetchProduto, fetchAvaliacoes, fetchVariacoes, novaAvaliacao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPaginaInicial", function() { return fetchProdutosPaginaInicial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTermo", function() { return fetchTermo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdutosPesquisa", function() { return fetchProdutosPesquisa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProduto", function() { return fetchProduto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAvaliacoes", function() { return fetchAvaliacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchVariacoes", function() { return fetchVariacoes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "novaAvaliacao", function() { return novaAvaliacao; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./redux/actions/helpers.js");




const fetchProdutosPaginaInicial = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/disponiveis?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${0}&limit=${4}&sortType=${"preco-crescente"}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchTermo = termo => ({
  type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PESQUISA"],
  termo
});
const fetchProdutosPesquisa = (termo, atual = 0, limit = 20) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/search/${termo}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&offset=${atual}&limit=${limit}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTOS_PESQUISA"],
    payload: response.data,
    termo
  })).catch(e => console.log(e));
};
const fetchProduto = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchAvaliacoes = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}/avaliacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&id=${id}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_AVALIACOES"],
    payload: response.data
  })).catch(e => console.log(e));
};
const fetchVariacoes = id => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/produtos/${id}/variacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&id=${id}`).then(response => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_PRODUTO_VARIACOES"],
    payload: response.data
  })).catch(e => console.log(e));
};
const novaAvaliacao = ({
  nome,
  token,
  produto,
  texto,
  pontuacao
}, cb) => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_2__["API"]}/${_config__WEBPACK_IMPORTED_MODULE_2__["versao"]}/api/avaliacoes?loja=${_config__WEBPACK_IMPORTED_MODULE_2__["loja"]}&produto=${produto}`, {
    nome,
    texto,
    pontuacao
  }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getHeaders"])(token)).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["NOVA_AVALIACAO"],
      payload: response.data
    });
    cb(null);
  }).catch(e => cb(e));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchProdutosPaginaInicial,
  fetchTermo,
  fetchProdutosPesquisa,
  fetchProduto,
  fetchAvaliacoes,
  fetchVariacoes,
  novaAvaliacao
});

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/*! exports provided: REGISTER, AUTENTICAR_TOKEN, USER, AUTENTICAR, FETCH_CATEGORIAS, FETCH_DADOS, FETCH_PRODUTOS, FETCH_CATEGORIA, FETCH_CATEGORIA_PRODUTOS, FETCH_PESQUISA, FETCH_PRODUTOS_PESQUISA, FETCH_PRODUTO, FETCH_PRODUTO_AVALIACOES, FETCH_PRODUTO_VARIACOES, NOVA_AVALIACAO, SET_CARRINHO, CLEAN_CARRINHO, FETCH_PRODUTO_CARRINHO, FETCH_VARIACAO_CARRINHO, FETCH_VALOR_ENTREGA, UPDATE_QTD_CART, UPDATE_FRETE_CART, REMOVE_PROD_CART, CLEAN_FRETES, FETCH_CLIENTE, SET_FORM, CLEAN_FORM, SET_TIPO_PAGAMENTO, FETCH_SESSION_ID, FETCH_SENDER_HASH, NOVO_PEDIDO, PAGAR_PEDIDO, LOGOUT_CLIENTE, DESAUTENTICAR, FETCH_PEDIDOS, FETCH_PEDIDO, CLEAN_PEDIDO, CANCELAR_PEDIDO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR_TOKEN", function() { return AUTENTICAR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTENTICAR", function() { return AUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIAS", function() { return FETCH_CATEGORIAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DADOS", function() { return FETCH_DADOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS", function() { return FETCH_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA", function() { return FETCH_CATEGORIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CATEGORIA_PRODUTOS", function() { return FETCH_CATEGORIA_PRODUTOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PESQUISA", function() { return FETCH_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTOS_PESQUISA", function() { return FETCH_PRODUTOS_PESQUISA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO", function() { return FETCH_PRODUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_AVALIACOES", function() { return FETCH_PRODUTO_AVALIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_VARIACOES", function() { return FETCH_PRODUTO_VARIACOES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVA_AVALIACAO", function() { return NOVA_AVALIACAO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CARRINHO", function() { return SET_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_CARRINHO", function() { return CLEAN_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PRODUTO_CARRINHO", function() { return FETCH_PRODUTO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VARIACAO_CARRINHO", function() { return FETCH_VARIACAO_CARRINHO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_VALOR_ENTREGA", function() { return FETCH_VALOR_ENTREGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_QTD_CART", function() { return UPDATE_QTD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FRETE_CART", function() { return UPDATE_FRETE_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PROD_CART", function() { return REMOVE_PROD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FRETES", function() { return CLEAN_FRETES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_CLIENTE", function() { return FETCH_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FORM", function() { return SET_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_FORM", function() { return CLEAN_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TIPO_PAGAMENTO", function() { return SET_TIPO_PAGAMENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SESSION_ID", function() { return FETCH_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SENDER_HASH", function() { return FETCH_SENDER_HASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOVO_PEDIDO", function() { return NOVO_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGAR_PEDIDO", function() { return PAGAR_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_CLIENTE", function() { return LOGOUT_CLIENTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESAUTENTICAR", function() { return DESAUTENTICAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDOS", function() { return FETCH_PEDIDOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_PEDIDO", function() { return FETCH_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAN_PEDIDO", function() { return CLEAN_PEDIDO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCELAR_PEDIDO", function() { return CANCELAR_PEDIDO; });
const REGISTER = "register",
      AUTENTICAR_TOKEN = "AUTENTICAR_TOKEN",
      USER = "user",
      AUTENTICAR = 'AUTENTICAR',
      FETCH_CATEGORIAS = "fetch_categorias",
      FETCH_DADOS = 'fetch_dados',
      FETCH_PRODUTOS = "FETCH_PRODUTOS",
      FETCH_CATEGORIA = 'FETCH_CATEGORIA',
      FETCH_CATEGORIA_PRODUTOS = 'FETCH_CATEGORIA_PRODUTOS',
      FETCH_PESQUISA = 'FETCH_PESQUISA',
      FETCH_PRODUTOS_PESQUISA = 'FETCH_PRODUTOS_PESQUISA',
      FETCH_PRODUTO = 'FETCH_PRODUTO',
      FETCH_PRODUTO_AVALIACOES = 'FETCH_PRODUTO_AVALIACOES',
      FETCH_PRODUTO_VARIACOES = 'FETCH_PRODUTO_VARIACOES',
      NOVA_AVALIACAO = 'NOVA_AVALIACAO',
      SET_CARRINHO = 'SET_CARRINHO',
      CLEAN_CARRINHO = 'CLEAN_CARRINHO',
      FETCH_PRODUTO_CARRINHO = 'FETCH_PRODUTO_CARRINHO',
      FETCH_VARIACAO_CARRINHO = 'FETCH_VARIACAO_CARRINHO',
      FETCH_VALOR_ENTREGA = 'FETCH_VALOR_ENTREGA',
      UPDATE_QTD_CART = 'UPDATE_QTD_CART',
      UPDATE_FRETE_CART = 'UPDATE_FRETE_CART',
      REMOVE_PROD_CART = 'REMOVE_PROD_CART',
      CLEAN_FRETES = 'CLEAN_FRETES',
      FETCH_CLIENTE = 'FETCH_CLIENTE',
      SET_FORM = 'SET_FORM',
      CLEAN_FORM = 'CLEAN_FORM',
      SET_TIPO_PAGAMENTO = 'SET_TIPO_PAGAMENTO',
      FETCH_SESSION_ID = 'FETCH_SESSION_ID',
      FETCH_SENDER_HASH = 'FETCH_SENDER_HASH',
      NOVO_PEDIDO = 'NOVO_PEDIDO',
      PAGAR_PEDIDO = 'PAGAR_PEDIDO',
      LOGOUT_CLIENTE = 'LOGOUT_CLIENTE',
      DESAUTENTICAR = 'DESAUTENTICAR',
      FETCH_PEDIDOS = 'FETCH_PEDIDOS',
      FETCH_PEDIDO = 'FETCH_PEDIDO',
      CLEAN_PEDIDO = 'CLEAN_PEDIDO',
      CANCELAR_PEDIDO = 'CANCELAR_PEDIDO';

/***/ }),

/***/ "./utils/cart.js":
/*!***********************!*\
  !*** ./utils/cart.js ***!
  \***********************/
/*! exports provided: getCart, cleanCart, addCart, getCountItemsCart, removeCart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCart", function() { return cleanCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCart", function() { return addCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountItemsCart", function() { return getCountItemsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCart", function() { return removeCart; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const _saveCart = item => {
  let cart = getCart();
  let found;
  cart = cart.map(_item => {
    if (_item.produto === item.produto && _item.variacao === item.variacao) {
      found = true;
      return _objectSpread(_objectSpread({}, _item), {}, {
        quantidade: Number(_item.quantidade) + Number(item.quantidade)
      });
    } else return _item;
  });
  if (!found) cart.push(item);
  localStorage.setItem("@cart", JSON.stringify(cart));
};

const getCart = () => JSON.parse(localStorage.getItem("@cart") || "[]");
const cleanCart = () => localStorage.removeItem("@cart");
const addCart = (item, goToCart = true) => {
  _saveCart(item);

  if (goToCart) next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/carrinho");
};
const getCountItemsCart = () => getCart().reduce((c, {
  quantidade
}) => c + (Number(quantidade) || 1), 0);
const removeCart = index => {
  let cart = getCart();
  cart = cart.reduce((all, item, _index) => index !== _index ? all.concat([item]) : all, []);
  localStorage.setItem("@cart", JSON.stringify(cart));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  getCart,
  addCart,
  cleanCart,
  getCountItemsCart,
  removeCart
});

/***/ }),

/***/ "./utils/cookie.js":
/*!*************************!*\
  !*** ./utils/cookie.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) return undefined;

  const _cookie = req.headers.cookie.split(";").find(c => c.trim().startsWith(`${key}=`));

  return _cookie ? _cookie.split("=")[1] : undefined;
};

/***/ }),

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: numberPattern, formatCEP, formatCPF, formatDataDeNascimento, formatTelefone, formatNumber, formatCartao, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberPattern", function() { return numberPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCEP", function() { return formatCEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCPF", function() { return formatCPF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDataDeNascimento", function() { return formatDataDeNascimento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTelefone", function() { return formatTelefone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCartao", function() { return formatCartao; });
const numberPattern = /\d+/g;
const formatCEP = value => {
  const auxCep = (value || "").match(numberPattern);

  const _cep = (auxCep || []).join('');

  return _cep.length > 5 ? _cep.slice(0, 5) + '-' + _cep.slice(5, 8) : _cep;
};
const formatCPF = value => {
  const auxCPF = (value || "").match(numberPattern);

  const _CPF = (auxCPF || []).join('');

  if (_CPF.length > 9) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9) + '-' + _CPF.slice(9, 11);
  if (_CPF.length > 6) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6) + '.' + _CPF.slice(6, 9);
  if (_CPF.length > 3) return _CPF.slice(0, 3) + '.' + _CPF.slice(3, 6);
  return _CPF;
};
const formatDataDeNascimento = value => {
  const auxData = (value || "").match(numberPattern);

  const _data = (auxData || []).join('');

  if (_data.length > 4) return _data.slice(0, 2) + '/' + _data.slice(2, 4) + '/' + _data.slice(4, 8);
  if (_data.length > 2) return _data.slice(0, 2) + '/' + _data.slice(2, 4);
  return _data;
};
const formatTelefone = value => {
  const auxTelefone = (value || "").match(numberPattern);

  const _telefone = (auxTelefone || []).join('');

  return _telefone.length > 2 ? _telefone.slice(0, 2) + ' ' + _telefone.slice(2, 12) : _telefone;
};
const formatNumber = (value, limit) => {
  const auxN = (value || "").match(numberPattern);

  const _n = (auxN || []).join('');

  return limit ? _n.slice(0, limit) : _n;
};
const formatCartao = value => {
  const auxCartao = (value || "").match(numberPattern);

  const _cartao = (auxCartao || []).join('');

  if (_cartao.length > 12) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8) + ' ' + _cartao.slice(8, 12) + ' ' + _cartao.slice(12, 16);
  if (_cartao.length > 8) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8) + ' ' + _cartao.slice(8, 12);
  if (_cartao.length > 4) return _cartao.slice(0, 4) + ' ' + _cartao.slice(4, 8);
  return _cartao;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  numberPattern,
  formatCEP,
  formatCPF,
  formatDataDeNascimento,
  formatTelefone,
  formatNumber,
  formatCartao
});

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: formatMoney, codigosCorreios, ESTADOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codigosCorreios", function() { return codigosCorreios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESTADOS", function() { return ESTADOS; });
const formatMoney = value => "R$ " + Number(value || 0).toFixed(2).replace(".", ",");
const codigosCorreios = {
  "40010": "Sedex",
  "41106": "PAC",
  "entrega_moto": "Entrega por Moto",
  "retirada": "Retirada na Loja"
};
const ESTADOS = {
  "AC": "Acre",
  "AL": "Alagoas",
  "AP": "Amapá",
  "AM": "Amazonas",
  "BA": "Bahia",
  "CE": "Ceará",
  "DF": "Distrito Federal",
  "ES": "Espírito Santo",
  "GO": "Goiás",
  "MA": "Maranhão",
  "MT": "Mato Grosso",
  "MS": "Mato Grosso do Sul",
  "MG": "Minas Gerais",
  "PA": "Pará",
  "PB": "Paraíba",
  "PR": "Paraná",
  "PE": "Pernambuco",
  "PI": "Piauí",
  "RJ": "Rio de Janeiro",
  "RN": "Rio Grande do Norte",
  "RS": "Rio Grande do Sul",
  "RO": "Rondônia",
  "RR": "Roraima",
  "SC": "Santa Catarina",
  "SP": "São Paulo",
  "SE": "Sergipe",
  "TO": "Tocantins"
};

/***/ }),

/***/ "./utils/validate.js":
/*!***************************!*\
  !*** ./utils/validate.js ***!
  \***************************/
/*! exports provided: onlyNumbers, validateCPF, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumbers", function() { return onlyNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateCPF", function() { return validateCPF; });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format */ "./utils/format.js");

const onlyNumbers = value => {
  const auxCep = (value || "").match(_format__WEBPACK_IMPORTED_MODULE_0__["numberPattern"]);
  return (auxCep || []).join("");
};
const validateCPF = _strCPF => {
  const strCPF = onlyNumbers(_strCPF);
  if (strCPF.length !== 11) return false;
  let soma;
  let resto;
  soma = 0;
  if (strCPF == "00000000000") return false;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCPF.substring(9, 10))) return false;
  soma = 0;

  for (var j = 1; j <= 10; j++) {
    soma = soma + parseInt(strCPF.substring(j - 1, j)) * (12 - j);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  validateCPF,
  onlyNumbers
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQWxlcnQvR2VyYWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYW1wb3MvUGVzcXVpc2EuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9DYXJyaW5oby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbnB1dHMvRm9ybVJhZGlvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSXRlbS9EYWRvc0RhTG9qYS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3Rhcy9DYXRlZ29yaWFzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdGFzL1BhZ2luYXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXN0YXMvUmVkZXNTb2NpYWlzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby9DYWJlY2FsaG8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DYWJlY2FsaG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DYXJyaW5oby9MaXN0YURlUHJvZHV0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9DaGVja291dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L0RhZG9zQ2xpZW50ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L0RhZG9zRW50cmVnYS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L0RhZG9zRnJldGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DaGVja291dC9EYWRvc1BhZ2FtZW50by5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NoZWNrb3V0L0RhZG9zUGVkaWRvLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2hlY2tvdXQvU3VibWl0RGFkb3NDbGllbnRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ2hlY2tvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DbGllbnRlL0NsaWVudGVMb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0NsaWVudGUvRGFkb3NDbGllbnRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvUm9kYXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoZWNrb3V0LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jYXJyaW5ob0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9jYXRlZ29yaWFBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2hlY2tvdXRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvY2xpZW50ZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9lcnJvckhhbmRsaW5nLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvbG9qYUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9wZWRpZG9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcHJvZHV0b0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkFsZXJ0R2VyYWwiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsImF2aXNvIiwibWVzc2FnZSIsIlBlc3F1aXNhIiwidGVybW8iLCJzdWJtaXRQZXNxdWlzYSIsInN0YXRlIiwiZmV0Y2hUZXJtbyIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25uZWN0IiwiYWN0aW9ucyIsIkNhcmRDYXJyaW5obyIsImNhcnRRdGQiLCJjb21wb25lbnREaWRNb3VudCIsImdldENvdW50SXRlbXNDYXJ0IiwiZGVmYXVsdERlc2NyaWNhbyIsImRlZmF1bHRPR1VSTCIsImRlZmF1bHRPR0ltYWdlIiwiSGVhZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJvZ0ltYWdlIiwicGFnU2VndXJvIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJGb3JtUmFkaW8iLCJuYW1lIiwiY2hla2VkIiwibGFiZWwiLCJvbkNoYW5nZSIsIkZvcm1TaW1wbGVzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZXJybyIsIkRhZG9zRGFMb2phIiwiUmVhY3QiLCJsb2phIiwibm9tZSIsImNucGoiLCJlbWFpbCIsImVuZGVyZWNvIiwidGVsZWZvbmVzIiwibWFwIiwiaW5kZXgiLCJsb2NhbCIsIm51bWVybyIsImJhaXJybyIsImNpZGFkZSIsImVzdGFkbyIsIkNFUCIsIm1hcFN0YXRlVG9Qcm9wcyIsIkxheW91dCIsImltYWdlIiwiQ2F0ZWdvcmlhcyIsImNhdGVnb3JpYXMiLCJjYXRlZ29yaWEiLCJfaWQiLCJQYWdpbmFzIiwiUkVERVNfU09DSUFJUyIsIlJlZGVzU29jaWFpcyIsIml0ZW0iLCJpZHgiLCJMb2dvQ2FiZWNhbGhvIiwiQVBJIiwidmVyc2FvIiwiYmFzZUltZyIsIkNhYmVjYWxobyIsInJlbmRlckNhYmVjYWxob05vcm1hbCIsInJlbmRlckNhYmVjYWxob1NpbXBsZXMiLCJzaW1wbGVzIiwiTGlzdGFEZVByb2R1dG9zIiwicmVuZGVyQ2FiZWNhbGhvQ2FycmluaG8iLCJzZW1BbHRlcmFjb2VzIiwiY2hhbmdlUXVhbnRpZGFkZSIsInF1YW50aWRhZGUiLCJOdW1iZXIiLCJub3ZhUXVhbnRpZGFkZSIsImNoYW5nZSIsInZhcmlhY2FvIiwiYWxlcnQiLCJhZGRDYXJ0IiwicHJvZHV0byIsInByZWNvVW5pdGFyaW8iLCJ1cGRhdGVRdWFudGlkYWRlIiwicmVtb3ZlclByb2R1dG9DYXJyaW5obyIsIndpbmRvdyIsImNvbmZpcm0iLCJyZW1vdmVyUHJvZHV0byIsInJlbmRlclByb2R1dG8iLCJmb3RvIiwiZm90b3MiLCJsZW5ndGgiLCJ0aXR1bG8iLCJmb3JtYXRNb25leSIsInJlbmRlclByb2R1dG9zIiwiY2FycmluaG8iLCJDaGVja291dEJ1dHRvbiIsImRpc2FibGVkIiwiY2FsY3VsYXJWYWxvclRvdGFsIiwiZnJldGVTZWxlY2lvbmFkbyIsInZhbG9yUHJvZHV0b3MiLCJyZWR1Y2UiLCJhbGwiLCJ2YWxvckZyZXRlIiwiVmFsb3IiLCJyZXBsYWNlIiwidmFsaWRhckZvcm11bGFyaW8iLCJDUEYiLCJkYXRhRGVOYXNjaW1lbnRvIiwidGVsZWZvbmUiLCJkYWRvc0NvYnJhbmNhIiwiZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhIiwiQ1BGYm9sZXRvIiwibnVtZXJvQ2FydGFvIiwibm9tZUNhcnRhbyIsIm1lc0NhcnRhbyIsImFub0NhcnRhbyIsInBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEiLCJDVlZDYXJ0YW8iLCJjcmVkaXRfY2FyZF90b2tlbiIsImZvcm0iLCJ0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8iLCJ0ZW1FcnJvIiwidmFsaWRhdGVDUEYiLCJ2YWxpZGF0ZSIsImhhbmRsZVN1Ym1pdCIsInRva2VuIiwic2VuZGVySGFzaCIsImdldENhcnQiLCJ2YWxvclRvdGFsIiwidG9nZ2xlRGlzYWJsZWQiLCJub3ZvUGVkaWRvIiwiZXJyb3IiLCJzdGF0dXMiLCJ1c3VhcmlvIiwiYXV0aCIsImNsaWVudGUiLCJjaGVja291dCIsIkRhZG9zQ2xpZW50ZSIsImZldGNoQ2xpZW50ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInBlcm1pc3Nhb0luaWNpYWwiLCJwZXJtaXRpciIsIkRhZG9zRW50cmVnYUNvbnRhaW5lciIsImVycm9zIiwiZmllbGQiLCJwcmVmaXgiLCJzZXRGb3JtIiwidGhlbiIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwicHJldlByb3BzIiwiY29tcGxlbWVudG8iLCJPYmplY3QiLCJrZXlzIiwicmVuZGVyRGFkb3NEZUVudHJlZ2EiLCJvbkNoYW5nZUNFUCIsImZvcm1hdENFUCIsImZvcm1hdE51bWJlciIsIkVTVEFET1MiLCJhYmJyIiwicmVuZGVyRGFkb3NEZUNvYnJhbmNhIiwiRGFkb3NGcmV0ZSIsImNhbGN1bGFyRnJldGUiLCJzZWxlY2lvbmFyRnJldGUiLCJmcmV0ZSIsImZyZXRlcyIsIkNvZGlnbyIsImNvZGlnb3NDb3JyZWlvcyIsIlByYXpvRW50cmVnYSIsIkRhZG9zUGFnYW1lbnRvIiwiZ2V0U2Vzc2lvblBhZ2FtZW50byIsImJhbmRlaXJhX2NhcnRhbyIsInBhcmNlbGFzQ2FydGFvIiwic3BsaXQiLCJqb2luIiwiZ2V0QnJhbmQiLCJzdWJtaXRDYXJ0YW9IYXNoIiwiZ2V0UGFyY2VsYXMiLCJQYWdTZWd1cm9EaXJlY3RQYXltZW50IiwiY2FyZEJpbiIsInNsaWNlIiwic3VjY2VzcyIsInIiLCJicmFuZCIsInBhcmFtcyIsImNhcmROdW1iZXIiLCJjdnYiLCJleHBpcmF0aW9uTW9udGgiLCJleHBpcmF0aW9uWWVhciIsImNhcmQiLCJjcmVhdGVDYXJkVG9rZW4iLCJmcmV0ZVZhbG9yIiwiZ2V0SW5zdGFsbG1lbnRzIiwiYW1vdW50IiwibWF4SW5zdGFsbG1lbnROb0ludGVyZXN0IiwibWF4SW5zdGFsbG1lbnQiLCJpbnN0YWxsbWVudHMiLCJyZW5kZXJPcGNvZXNQYWdhbWVudG8iLCJzZXRUaXBvUGFnYW1lbnRvIiwicmVuZGVyUGFnYW1lbnRvQ29tQm9sZXRvIiwiZm9ybWF0Q1BGIiwicmVuZGVyUGFnYW1lbnRvQ29tQ2FydGFvIiwiZm9ybWF0Q2FydGFvIiwicXVhbnRpdHkiLCJ0b3RhbEFtb3VudCIsInNlc3Npb25JZCIsIkRhZG9zUGVkaWRvIiwiU3VibWl0RGFkb3NDbGllbnRlIiwic2VuaGEiLCJuZXdDbGllbnRlIiwiY2FsbGJhY2siLCJ1cGRhdGVDbGllbnRlIiwiQ2hlY2tvdXRDb250YWluZXIiLCJwZXJtaXNzYW9DaGVja291dCIsIkNsaWVudGVMb2dpbiIsInJlbmRlckF2aXNvRGVSZWdpc3RybyIsImF1dGVudGljYXIiLCJwYXNzd29yZCIsInJlbmRlckZvcm1Mb2dpbiIsIkRhZG9zQ2xpZW50ZUNvbnRhaW5lciIsImNwZiIsIm1vbWVudCIsImZvcm1hdCIsInJlbmRlckRhZG9zUmVnaXN0cm8iLCJyZW5kZXJEYWRvc1VzdWFyaW8iLCJmb3JtYXREYXRhRGVOYXNjaW1lbnRvIiwiZm9ybWF0VGVsZWZvbmUiLCJSb2RhcGUiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiQ2hlY2tvdXQiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInJlYXV0aGVudGljYXRlIiwiQVVURU5USUNBUl9UT0tFTiIsInBheWxvYWQiLCJnZXRVc2VyIiwiZGlzcGF0Y2giLCJnZXRIZWFkZXJzIiwiVVNFUiIsImdvVG8iLCJwb3N0Iiwic2V0Q29va2llIiwiQVVURU5USUNBUiIsImVycm9ySGFuZGxpbmciLCJkZXNhdXRlbnRpY2FyIiwicmVtb3ZlQ29va2llIiwiREVTQVVURU5USUNBUiIsInVwZGF0ZVNlbmhhIiwicHV0Iiwibm92YVNlbmhhIiwic2V0Q2FycmluaG8iLCJTRVRfQ0FSUklOSE8iLCJjbGVhbkNhcnJpbmhvIiwiY2xlYW5DYXJ0IiwiQ0xFQU5fQ0FSUklOSE8iLCJmZXRjaFByb2R1dG9DYXJyaW5obyIsImlkIiwiaWR4Q2FycmluaG8iLCJGRVRDSF9QUk9EVVRPX0NBUlJJTkhPIiwiZmV0Y2hWYXJpYWNvZXNDYXJyaW5obyIsIkZFVENIX1ZBUklBQ0FPX0NBUlJJTkhPIiwiY2VwIiwiRkVUQ0hfVkFMT1JfRU5UUkVHQSIsInJlbW92ZUNhcnQiLCJSRU1PVkVfUFJPRF9DQVJUIiwiVVBEQVRFX1FURF9DQVJUIiwiVVBEQVRFX0ZSRVRFX0NBUlQiLCJjbGVhbkZyZXRlcyIsIkNMRUFOX0ZSRVRFUyIsImZldGNoQ2F0ZWdvcmlhcyIsIkZFVENIX0NBVEVHT1JJQVMiLCJmZXRjaENhdGVnb3JpYSIsIkZFVENIX0NBVEVHT1JJQSIsImZldGNoUHJvZHV0b3NDYXRlZ29yaWEiLCJhdHVhbCIsImxpbWl0IiwiRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TIiwiU0VUX0ZPUk0iLCJyZXNvbHZlIiwiY2xlYW5Gb3JtIiwiQ0xFQU5fRk9STSIsIlNFVF9USVBPX1BBR0FNRU5UTyIsIkZFVENIX1NFU1NJT05fSUQiLCJzZXRTZXNzaW9uSWQiLCJnZXRTZW5kZXJIYXNoIiwiRkVUQ0hfU0VOREVSX0hBU0giLCJlbnRyZWdhIiwiY3VzdG8iLCJ0aXBvIiwidG9TdHJpbmciLCJwcmF6byIsInBhZ2FtZW50byIsInZhbG9yIiwiZm9ybWEiLCJwYXJjZWxhcyIsImVuZGVyZWNvRW50cmVnYUlndWFsQ29icmFuY2EiLCJjYXJ0YW8iLCJub21lQ29tcGxldG8iLCJ0cmltIiwiY29kaWdvQXJlYSIsInVuZGVmaW5lZCIsIk5PVk9fUEVESURPIiwicGFnYXJQZWRpZG8iLCJwZWRpZG8iLCJQQUdBUl9QRURJRE8iLCJnZXRSYXdEYXRhIiwiX2RhdGEiLCJhbm8iLCJfbWVzIiwibWVzIiwiX2RpYSIsImRpYSIsInJlc3Bvc3RhIiwiRkVUQ0hfQ0xJRU5URSIsImxvZ291dENsaWVudGUiLCJMT0dPVVRfQ0xJRU5URSIsIl9lcnJvcnMiLCJlcnJvcnMiLCJtc2ciLCJpc0FycmF5IiwiZm9yRWFjaCIsInByb3BlcnRpZXMiLCJoZWFkZXJzIiwiYXV0aEFjdGlvbnMiLCJjYXRlZ29yaWFBY3Rpb25zIiwibG9qYUFjdGlvbnMiLCJwcm9kdXRvQWN0aW9ucyIsImNhcnJpbmhvQWN0aW9ucyIsImNsaWVudGVBY3Rpb25zIiwiY2hlY2tvdXRBY3Rpb25zIiwicGVkaWRvQWN0aW9ucyIsImZldGNoRGFkb3NMb2phIiwiRkVUQ0hfREFET1MiLCJmZXRjaFBlZGlkb3MiLCJvZmZzZXQiLCJGRVRDSF9QRURJRE9TIiwiZmV0Y2hQZWRpZG8iLCJGRVRDSF9QRURJRE8iLCJjYW5jZWxhclBlZGlkbyIsImRlbGV0ZSIsIkNBTkNFTEFSX1BFRElETyIsImNsZWFuUGVkaWRvIiwiQ0xFQU5fUEVESURPIiwiZmV0Y2hQcm9kdXRvc1BhZ2luYUluaWNpYWwiLCJGRVRDSF9QUk9EVVRPUyIsIkZFVENIX1BFU1FVSVNBIiwiZmV0Y2hQcm9kdXRvc1Blc3F1aXNhIiwiRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EiLCJmZXRjaFByb2R1dG8iLCJGRVRDSF9QUk9EVVRPIiwiZmV0Y2hBdmFsaWFjb2VzIiwiRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTIiwiZmV0Y2hWYXJpYWNvZXMiLCJGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUyIsIm5vdmFBdmFsaWFjYW8iLCJ0ZXh0byIsInBvbnR1YWNhbyIsIk5PVkFfQVZBTElBQ0FPIiwiUkVHSVNURVIiLCJfc2F2ZUNhcnQiLCJjYXJ0IiwiZm91bmQiLCJfaXRlbSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdvVG9DYXJ0IiwiYyIsIl9pbmRleCIsImNvbmNhdCIsImNvb2tpZSIsImdldENvb2tpZSIsInJlcSIsImdldENvb2tpZUZyb21Ccm93c2VyIiwiZ2V0Q29va2llRnJvbVNlcnZlciIsIl9jb29raWUiLCJmaW5kIiwic3RhcnRzV2l0aCIsIm51bWJlclBhdHRlcm4iLCJhdXhDZXAiLCJtYXRjaCIsIl9jZXAiLCJhdXhDUEYiLCJfQ1BGIiwiYXV4RGF0YSIsImF1eFRlbGVmb25lIiwiX3RlbGVmb25lIiwiYXV4TiIsIl9uIiwiYXV4Q2FydGFvIiwiX2NhcnRhbyIsInRvRml4ZWQiLCJvbmx5TnVtYmVycyIsIl9zdHJDUEYiLCJzdHJDUEYiLCJzb21hIiwicmVzdG8iLCJzdWJzdHJpbmciLCJqIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7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RixNQUFJLEdBQUcsQ0FBUDs7QUFDQSxPQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksRUFBckIsRUFBeUJBLENBQUMsRUFBMUIsRUFBK0I7QUFDM0JILFFBQUksR0FBR0EsSUFBSSxHQUFHdkwsUUFBUSxDQUFDc0wsTUFBTSxDQUFDRyxTQUFQLENBQWlCQyxDQUFDLEdBQUMsQ0FBbkIsRUFBc0JBLENBQXRCLENBQUQsQ0FBUixJQUFzQyxLQUFLQSxDQUEzQyxDQUFkO0FBQ0g7O0FBQ0RGLE9BQUssR0FBSUQsSUFBSSxHQUFHLEVBQVIsR0FBYSxFQUFyQjtBQUVBLE1BQUtDLEtBQUssSUFBSSxFQUFWLElBQWtCQSxLQUFLLElBQUksRUFBL0IsRUFBb0NBLEtBQUssR0FBRyxDQUFSO0FBQ3BDLE1BQUlBLEtBQUssSUFBSXhMLFFBQVEsQ0FBQ3NMLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQixFQUFqQixFQUFxQixFQUFyQixDQUFELENBQXJCLEVBQWlELE9BQU8sS0FBUDtBQUVqRCxTQUFPLElBQVA7QUFDSCxDQTFCTTtBQTRCUTtBQUNYOWlCLGFBRFc7QUFFWHlpQjtBQUZXLENBQWYsRTs7Ozs7Ozs7Ozs7QUNuQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NoZWNrb3V0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQWxlcnRHZXJhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBpZighdGhpcy5wcm9wcy5hdmlzbykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmF2aXNvLm1lc3NhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0R2VyYWw7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcblxyXG5jbGFzcyBQZXNxdWlzYSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHt0ZXJtbzogXCJcIn1cclxuXHJcbiAgICBzdWJtaXRQZXNxdWlzYSgpIHtcclxuICAgICAgICBjb25zdCB7dGVybW99ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoVGVybW8odGVybW8pO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtwYXRobmFtZTpcIi9wZXNxdWlzYVwiLCBxdWVyeToge3Rlcm1vfX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTMgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBlc3F1aXNhXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXJtb31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHt0ZXJtbzogZS50YXJnZXQudmFsdWV9KX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBhcXVpIGEgc3VhIHBlc3F1aXNhIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtcGVzcXVpc2FcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3VibWl0UGVzcXVpc2EoKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXBlc3F1aXNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+IDwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgYWN0aW9ucykgKFBlc3F1aXNhKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb3VudEl0ZW1zQ2FydCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5cclxuY2xhc3MgQ2FyZENhcnJpbmhvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBjYXJ0UXRkOiAwIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0UXRkOiBnZXRDb3VudEl0ZW1zQ2FydCgpIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVucy1jYWJlY2FsaG8gZmxleC0yIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXJlYS1jbGllbnRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWNhYmVjYWxob1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5NaW5oYSBDb250YTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FycmluaG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tY2FiZWNhbGhvIGNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctYmFnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57IHRoaXMuc3RhdGUuY2FydFF0ZCB8fCAwIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZENhcnJpbmhvOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOZXh0SGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge3N0cmluZ30gZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBkZWZhdWx0RGVzY3JpY2FvID0gJyc7XHJcbmNvbnN0IGRlZmF1bHRPR1VSTCA9ICcnO1xyXG5jb25zdCBkZWZhdWx0T0dJbWFnZSA9IFwiL3N0YXRpYy9sb2dvLnBuZ1wiO1xyXG5cclxuY29uc3QgSGVhZCA9IHByb3BzID0+IChcclxuICAgIDxOZXh0SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICAgIDx0aXRsZT4ge3Byb3BzLnRpdGxlIHx8IFwiXCJ9IDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgXHJcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9uIHx8IGRlZmF1bHREZXNjcmljYW99IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj0gXCIvc3RhdGljL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3Byb3BzLnVybCB8fCBkZWZhdWx0T0dVUkx9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3Byb3BzLnRpdGxlIHx8IFwiXCJ9IC8+XHJcbiAgICAgICAgPG1ldGEgXHJcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpY2FvfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpzaXRlXCIgY29udGVudD17cHJvcHMudXJsIHx8IGRlZmF1bHRPR1VSTH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5vZ0ltYWdlIHx8IGRlZmF1bHRPR0ltYWdlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtwcm9wcy5vZ0ltYWdlIHx8IGRlZmF1bHRPR0ltYWdlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiNjAwXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2MDBcIiAvPlxyXG4gICAgICAgIDxsaW5rIFxyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXHJcbi8vICAgICAgICAgICAgaHJlZj1cIi9zdGF0aWMvZm9udC1hd2Vzb21lLm1pbi5jc3NcIiBcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIFxyXG4gICAgICAgICAgICBpbnRlZ3J5dGU9XCJzaGEzODQtd3ZmWHBxcFpaVlFHSzZUQWg1UFZsR09mUU5IU29EMnhiRStRa1B4Q0FGbE5FZXZvRUgzU2wwc2liVmNPUVZuTlwiIFxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL3N0eWxlLmNzc1wiIC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wcy5wYWdTZWd1cm8gPyAoXHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGMuc2FuZGJveC5wYWdzZWd1cm8udW9sLmNvbS5ici9wYWdzZWd1cm8vYXBpL3YyL2NoZWNrb3V0L3BhZ3NlZ3Vyby5kaXJlY3RwYXltZW50LmpzXCI+XHJcbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9OZXh0SGVhZD5cclxuKTtcclxuXHJcbkhlYWQucHJvcFR5cGVzPXtcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBvZ0ltYWdlOiBzdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWQ7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgY2hla2VkLCBsYWJlbCwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZm9ybS1pbnB1dCBmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17Y2hla2VkfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+ICZuYnNwOyB7bGFiZWx9IDwvbGFiZWw+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TaW1wbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3Qge3ZhbHVlLCBuYW1lLCBwbGFjZWhvbGRlciwgdHlwZSwgbGFiZWwsIG9uQ2hhbmdlLCBlcnJvfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIHtsYWJlbCAmJiA8bGFiZWw+IHtsYWJlbH0gPC9sYWJlbD59XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17dHlwZX0gdmFsdWU9e3ZhbHVlfSBuYW1lPXtuYW1lfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZSA9IFwiZXJyb1wiPiB7ZXJyb30gPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgRGFkb3NEYUxvamEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMubG9qYSkgcmV0dXJuICg8ZGl2PiA8L2Rpdj4pO1xyXG4gICAgICAgIGNvbnN0IHtub21lLCBjbnBqLCBlbWFpbCwgZW5kZXJlY28sIHRlbGVmb25lc30gPSB0aGlzLnByb3BzLmxvamE7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMSBkYWRvcy1kYS1sb2phXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4gRW50cmUgZW0gQ29udGF0byA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcImxvamEtbm9tZVwiPiBOb21lOiB7bm9tZX0gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLWNucGpcIj4gQ05QSjoge2NucGp9IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS1lbWFpbFwiPiBFLW1haWw6IDxhIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfT4ge2VtYWlsfSA8L2E+IDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZSA9IFwibG9qYS10ZWxlZm9uZXNcIj4gVGVsZWZvbmVzOiA8L3A+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVsZWZvbmVzLm1hcCgoaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLXRlbGVmb25lXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgcGhvbmU6JHt0ZWxlZm9uZXN9YH0+IHt0ZWxlZm9uZXN9IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLWVuZGVyZWNvXCI+IHtlbmRlcmVjby5sb2NhbH0sIHtlbmRlcmVjby5udW1lcm99IC0ge2VuZGVyZWNvLmJhaXJyb30gPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJsb2phLWNpZGFkZVwiPiB7ZW5kZXJlY28uY2lkYWRlfSAvIHtlbmRlcmVjby5lc3RhZG99IC0ge2VuZGVyZWNvLkNFUH0gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbG9qYTogc3RhdGUubG9qYS5sb2phXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykgKERhZG9zRGFMb2phKTsiLCJpbXBvcnQgSGVhZCBmcm9tICcuL0hlYWQnO1xyXG5cclxuaW1wb3J0IFN0eWxlIGZyb20gJy4vU3R5bGUnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBkZXNjcmlwdGlvbiwgdXJsLCBpbWFnZSwgcGFnU2VndXJvIH0pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWRcclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHVybD17dXJsfVxyXG4gICAgICAgICAgICBvZ0ltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgcGFnU2VndXJvPXtwYWdTZWd1cm99PjwvSGVhZD5cclxuICAgICAgICA8U3R5bGUgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgJmNvcHk7IExvamEgSVQgLSBDdXJzbyBDcmlhbmRvIHVtIEVjb21tZXJjZSBkbyBaZXJvXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBDYXRlZ29yaWFzIGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgY2F0ZWdvcmlhcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhcyBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWFzLm1hcChjYXRlZ29yaWEgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3JpYS8ke2NhdGVnb3JpYS5ub21lfT9pZD0ke2NhdGVnb3JpYS5faWR9YH0ga2V5PXtjYXRlZ29yaWEuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhLWl0ZW0gZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntjYXRlZ29yaWEubm9tZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhdGVnb3JpYXM6IHN0YXRlLmNhdGVnb3JpYS5jYXRlZ29yaWFzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2F0ZWdvcmlhcyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFBhZ2luYXMgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsIGluc3RpdHVjaW9uYWxcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+UMOhZ2luYXM8L2gyPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Qw6FnaW5hIEluaWNpYWw8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2FycmluaG9cIj5cclxuICAgICAgICAgICAgPHNwYW4+VmVyIFNhY29sYTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcmVhLWNsaWVudGUvXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPk1pbmhhIENvbnRhPC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NvYnJlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlNvYnJlIGEgTG9qYTwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUkVERVNfU09DSUFJUyA9IFtcclxuICAgIHsgbm9tZTogXCJmYWNlYm9va1wiLCB1cmw6IFwiI1wiIH0sXHJcbiAgICB7IG5vbWU6IFwiaW5zdGFncmFtXCIsIHVybDogXCIjXCIgfSxcclxuICAgIHsgbm9tZTogXCJ0d2l0dGVyXCIsIHVybDogXCIjXCIgfSxcclxuICAgIHsgbm9tZTogXCJ3aGF0c2FwcFwiLCB1cmw6IFwiI1wiIH0sXHJcbl07XHJcblxyXG5jb25zdCBSZWRlc1NvY2lhaXMgPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPlJlZGVzIFNvY2lhaXM8L2gyPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHJlZGVzLXNvY2lhaXMgd3JhcFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBSRURFU19TT0NJQUlTLm1hcCgoaXRlbSwgaWR4KT0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSBmYS0ke2l0ZW0ubm9tZX0gZmEtbGdgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWRlc1NvY2lhaXM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IExvZ29DYWJlY2FsaG8gPSAoKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMiBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiIHdpZHRoPVwiOTAlXCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb0NhYmVjYWxobzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+IHtgXHJcbiAgICBcclxuICAgIGJvZHkgeyBcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDsgfVxyXG4gICAgYm9keSwgKiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyLFxyXG4gICAgLmNvbnRhaW5lci1iaWcge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IH1cclxuICAgIC5jb250YWluZXItYmlnIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0NDAgcHg7IH1cclxuXHJcbiAgICAuZmxleCB7ZGlzcGxheTogZmxleDsgfVxyXG4gICAgLmZsZXgtMSB7ZmxleDogMTsgfVxyXG4gICAgLmZsZXgtMiB7ZmxleDogMjsgfVxyXG4gICAgLmZsZXgtMyB7ZmxleDogMzsgfVxyXG4gICAgLmZsZXgtNCB7ZmxleDogNDsgfVxyXG4gICAgLmZsZXgtNSB7ZmxleDogNTsgfVxyXG4gICAgLmZsZXgtNiB7ZmxleDogNjsgfVxyXG5cclxuICAgIC53cmFwIHtmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAgIC53cmFwLTEgeyBcclxuICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtMiB7IFxyXG4gICAgICAgIGZsYXgtYmFzaWM6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtMyB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMzIlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDMyJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtNCB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjUlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDI1JSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgLndyYXAtNSB7IFxyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjAlIC0gNTBweCk7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDIwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbCB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG5cclxuICAgIC5mbGV4LWNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4gICAgLmZsZXgtc3RhcnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbiAgICAuZmxleC1yaWdodCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcblxyXG4gICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICAud3JhcC1tYiB7ZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgICAgICAgLndyYXAtMi1tYiB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2R1dG8ud3JhcC0yLW1iIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaG9yaXpvbnRhbC1tYiB7ZmxleC1kaXJlY3Rpb246IHJvdzsgfVxyXG4gICAgICAgIC5ob3Jpem9udGFsIHtmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgICB9XHJcblxyXG4gICAgYH0gPC9zdHlsZT5cclxuKSIsImV4cG9ydCBjb25zdCBBUEkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxyXG4gICAgICAgICAgICAgdmVyc2FvID0gXCJ2MVwiLFxyXG4gICAgICAgICAgICAgbG9qYSA9IFwiNjBjMjYyZTUzZWJkOWYwOWMwODBmNTlhXCIsXHJcbiAgICAgICAgICAgICBiYXNlSW1nID0gQVBJICsgXCIvcHVibGljL2ltYWdlcy9cIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Mb2dvL0NhYmVjYWxobyc7XHJcbmltcG9ydCBDYW1wb1Blc3F1aXNhIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FtcG9zL1Blc3F1aXNhJztcclxuaW1wb3J0IENhcmRDYXJyaW5obyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhcmRzL0NhcnJpbmhvJztcclxuaW1wb3J0IENhdGVnb3JpYXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0YXMvQ2F0ZWdvcmlhcyc7XHJcbi8vaW1wb3J0IENhcmRDYXJyaW5ob0xpbXBvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZHMvQ2FycmluaG9MaW1wbyc7XHJcblxyXG5jbGFzcyBDYWJlY2FsaG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgcmVuZGVyQ2FiZWNhbGhvTm9ybWFsKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbXBvUGVzcXVpc2EgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENhcnJpbmhvIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhcy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3JpYXMgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4vKlxyXG4gICAgcmVuZGVyQ2FiZWNhbGhvTm9ybWFsKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbXBvUGVzcXVpc2EgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENhcnJpbmhvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJyaW5ob0xpbXBvIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcmlhcy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3JpYXMgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiovIFxyXG5cclxuICAgIHJlbmRlckNhYmVjYWxob1NpbXBsZXMoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlciBOby1MaW5rcyBIZWFkZXItU2ltcGxlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3Qge3NpbXBsZXN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gc2ltcGxlcyA/IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJDYWJlY2FsaG9TaW1wbGVzKCkgOiBcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FiZWNhbGhvTm9ybWFsKClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FiZWNhbGhvOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJhc2VJbWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBmb3JtYXRNb25leSB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGFkZENhcnQgfSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuXHJcbmNsYXNzIExpc3RhRGVQcm9kdXRvcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyQ2FiZWNhbGhvQ2FycmluaG8oc2VtQWx0ZXJhY29lcyl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJyaW5oby1jYWJlY2FsaG8gbm8tbWItZmxleCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZSBmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlF1YW50aWRhZGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lIGZsZXgtMSBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UHJlw6dvIFVuaXTDoXJpbzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGxpbmUgZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5QcmXDp28gVG90YWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ICFzZW1BbHRlcmFjb2VzICYmICg8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPjwvZGl2PikgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUXVhbnRpZGFkZShlLCBxdWFudGlkYWRlLCBpdGVtLCBpbmRleCl7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSwgcXVhbnRpZGFkZSwgaXRlbS52YXJpYWNhby5xdWFudGlkYWRlKTtcclxuICAgICAgICBpZihOdW1iZXIoZS50YXJnZXQudmFsdWUpIDwgMSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBub3ZhUXVhbnRpZGFkZSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgbGV0IGNoYW5nZSA9IG5vdmFRdWFudGlkYWRlIC0gcXVhbnRpZGFkZTtcclxuICAgICAgICBpZiggbm92YVF1YW50aWRhZGUgPj0gaXRlbS52YXJpYWNhby5xdWFudGlkYWRlICl7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIk7Do28gdGVtb3MgZXNzYSBxdWFudGlkYWRlIGVtIGVzdG9xdWUuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRDYXJ0KHtcclxuICAgICAgICAgICAgcHJvZHV0bzogaXRlbS5wcm9kdXRvLl9pZCxcclxuICAgICAgICAgICAgdmFyaWFjYW86IGl0ZW0udmFyaWFjYW8uX2lkLFxyXG4gICAgICAgICAgICBxdWFudGlkYWRlOiBjaGFuZ2UsXHJcbiAgICAgICAgICAgIHByZWNvVW5pdGFyaW86IGl0ZW0ucHJlY29Vbml0YXJpb1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVF1YW50aWRhZGUoY2hhbmdlLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlclByb2R1dG9DYXJyaW5obyhpbmRleCl7XHJcbiAgICAgICAgaWYod2luZG93LmNvbmZpcm0oXCJWb2PDqiBkZXNlamEgcmVhbG1lbnRlIHJlbW92ZXIgZXNzZSBwcm9kdXRvP1wiKSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMucmVtb3ZlclByb2R1dG8oaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQcm9kdXRvKGl0ZW0sIHNlbUFsdGVyYWNvZXMsIGluZGV4KXtcclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgIWl0ZW0udmFyaWFjYW8gfHwgIWl0ZW0udmFyaWFjYW8uX2lkIHx8IFxyXG4gICAgICAgICAgICAhaXRlbS5wcm9kdXRvIHx8ICFpdGVtLnByb2R1dG8uX2lkXHJcbiAgICAgICAgKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBmb3RvID0gaXRlbS52YXJpYWNhby5mb3RvcyAmJiBpdGVtLnZhcmlhY2FvLmZvdG9zLmxlbmd0aCA+IDAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFyaWFjYW8uZm90b3NbMF0gOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvZHV0by5mb3Rvc1swXTtcclxuICAgICAgICBjb25zdCBub21lID0gaXRlbS5wcm9kdXRvLnRpdHVsbyArIFwiIC0gXCIgKyBpdGVtLnZhcmlhY2FvLm5vbWU7XHJcbiAgICAgICAgY29uc3QgeyBxdWFudGlkYWRlLCBwcmVjb1VuaXRhcmlvIH0gPSBpdGVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY2FycmluaG8taXRlbSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdXRvLWltYWdlIGZsZXgtMiBmbGV4IGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYXNlSW1nICsgZm90b30gYWx0PXtub21lfSB3aWR0aD1cIjEwMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1dG8tdGl0dWxvIGZsZXgtNCBmbGV4IGZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e25vbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VtQWx0ZXJhY29lcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8c3Bhbj57cXVhbnRpZGFkZX08L3NwYW4+KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3F1YW50aWRhZGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHV0by1xdWFudGlkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuY2hhbmdlUXVhbnRpZGFkZShlLCBxdWFudGlkYWRlLCBpdGVtLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtYXRNb25leShwcmVjb1VuaXRhcmlvKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0TW9uZXkocHJlY29Vbml0YXJpbyAqIHF1YW50aWRhZGUpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgeyAhc2VtQWx0ZXJhY29lcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZXJQcm9kdXRvQ2FycmluaG8oaW5kZXgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi1yZW1vdmVyXCI+UmVtb3Zlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQcm9kdXRvcyhzZW1BbHRlcmFjb2VzKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jYXJyaW5oby5tYXAoKGl0ZW0sIGluZGV4KSA9PiB0aGlzLnJlbmRlclByb2R1dG8oaXRlbSwgc2VtQWx0ZXJhY29lcywgaW5kZXgpKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgc2VtQWx0ZXJhY29lcywgY2FycmluaG8gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMaXN0YS1EZS1Qcm9kdXRvcyBmbGV4IHZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2FiZWNhbGhvQ2FycmluaG8oc2VtQWx0ZXJhY29lcykgfVxyXG4gICAgICAgICAgICAgICAgeyBjYXJyaW5obyAmJiB0aGlzLnJlbmRlclByb2R1dG9zKHNlbUFsdGVyYWNvZXMpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgY2FycmluaG86IHN0YXRlLmNhcnJpbmhvLmNhcnJpbmhvXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKExpc3RhRGVQcm9kdXRvcyk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENhcnQgfSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuaW1wb3J0IHsgdmFsaWRhdGVDUEYgfSBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0ZSc7XHJcbmltcG9ydCBBbGVydEdlcmFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWxlcnQvR2VyYWwnO1xyXG5cclxuY2xhc3MgQ2hlY2tvdXRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IFxyXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSwgXHJcbiAgICAgICAgYXZpc286IG51bGwgXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlzYWJsZWQgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZGlzYWJsZWQ6ICF0aGlzLnN0YXRlLmRpc2FibGVkIH0pO1xyXG5cclxuICAgIGNhbGN1bGFyVmFsb3JUb3RhbChjYXJyaW5obywgZnJldGVTZWxlY2lvbmFkbyl7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygnY2FsY3ZsdG90YWwtZnJldGUgc2VsZWNpb25hZG86ICcsIGZyZXRlU2VsZWNpb25hZG8pO1xyXG4gICAgICAgIGNvbnN0IHZhbG9yUHJvZHV0b3MgPSBjYXJyaW5oby5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWxsLCBpdGVtKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbCArIChOdW1iZXIoaXRlbS5wcmVjb1VuaXRhcmlvKSAqIE51bWJlcihpdGVtLnF1YW50aWRhZGUpKSAsIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuLy8gICAgICAgIGNvbnN0IHZhbG9yRnJldGUgPSBOdW1iZXIoZnJldGVTZWxlY2lvbmFkby5WYWxvci5yZXBsYWNlKCcsJywnLicpKTtcclxuICAgICAgICBjb25zdCB2YWxvckZyZXRlID0gZnJldGVTZWxlY2lvbmFkbyA/IE51bWJlcihmcmV0ZVNlbGVjaW9uYWRvLlZhbG9yLnJlcGxhY2UoJywnLCcuJykpIDogMDtcclxuICAgICAgICByZXR1cm4gdmFsb3JQcm9kdXRvcyArIHZhbG9yRnJldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhckZvcm11bGFyaW8oKXtcclxuICAgICAgICBjb25zdCB7ICBcclxuICAgICAgICAgICAgbm9tZSwgQ1BGLCBkYXRhRGVOYXNjaW1lbnRvLCB0ZWxlZm9uZSxcclxuICAgICAgICAgICAgbG9jYWwsIG51bWVybywgYmFpcnJvLCBjaWRhZGUsIGVzdGFkbywgQ0VQLFxyXG4gICAgICAgICAgICBkYWRvc0NvYnJhbmNhLCBkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EsXHJcbiAgICAgICAgICAgIENQRmJvbGV0byxcclxuICAgICAgICAgICAgbnVtZXJvQ2FydGFvLCBub21lQ2FydGFvLCBtZXNDYXJ0YW8sIGFub0NhcnRhbywgcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSwgQ1ZWQ2FydGFvLFxyXG4gICAgICAgICAgICBjcmVkaXRfY2FyZF90b2tlblxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgeyB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCB0ZW1FcnJvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKCFub21lKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighQ1BGIHx8IENQRi5sZW5ndGggIT09IDE0KSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZihDUEYgJiYgQ1BGLmxlbmd0aCA9PT0gMTQgJiYgIXZhbGlkYXRlQ1BGKENQRikpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFkYXRhRGVOYXNjaW1lbnRvIHx8IGRhdGFEZU5hc2NpbWVudG8ubGVuZ3RoICE9PSAxMCkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIXRlbGVmb25lIHx8IHRlbGVmb25lLmxlbmd0aCA8IDExKSB0ZW1FcnJvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYoIWxvY2FsKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighbnVtZXJvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighYmFpcnJvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighY2lkYWRlKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighZXN0YWRvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighQ0VQIHx8IENFUC5sZW5ndGggIT09IDkpIHRlbUVycm8gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhKXtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EubG9jYWwpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5udW1lcm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5iYWlycm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5jaWRhZGUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5lc3RhZG8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5DRVAgfHwgZGFkb3NDb2JyYW5jYS5DRVAubGVuZ3RoICE9PSA5KSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJib2xldG9cIil7XHJcbiAgICAgICAgICAgIGlmKCFDUEZib2xldG8gJiYgIUNQRikgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKENQRmJvbGV0byAmJiBDUEZib2xldG8ubGVuZ3RoICE9PSAxNCAmJiAhdmFsaWRhdGVDUEYoQ1BGYm9sZXRvKSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIW51bWVyb0NhcnRhbyB8fCBudW1lcm9DYXJ0YW8ubGVuZ3RoICE9PSAxOSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKCFub21lQ2FydGFvKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIW1lc0NhcnRhbyB8fCBtZXNDYXJ0YW8ubGVuZ3RoICE9PSAyKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIWFub0NhcnRhbyB8fCBhbm9DYXJ0YW8ubGVuZ3RoICE9PSA0KSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoIXBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighY3JlZGl0X2NhcmRfdG9rZW4pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZighQ1ZWQ2FydGFvIHx8IENWVkNhcnRhby5sZW5ndGggIT09IDMpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbi8vICAgICAgICBjb25zb2xlLmxvZygndGVtIGVycm86ICcsIHRlbUVycm8pO1xyXG5cclxuICAgICAgICByZXR1cm4gIXRlbUVycm87XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKXtcclxuICAgICAgICBjb25zdCB7IGZyZXRlU2VsZWNpb25hZG8sIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB2YWxpZGFyRm9ybXVsYXJpbyA9IHRoaXMudmFsaWRhckZvcm11bGFyaW8oKTtcclxuICAgICAgICByZXR1cm4gdmFsaWRhckZvcm11bGFyaW8gJiYgZnJldGVTZWxlY2lvbmFkbyAmJiB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG87XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KCl7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBmb3JtLCBmcmV0ZVNlbGVjaW9uYWRvLCB0b2tlbiwgc2VuZGVySGFzaCwgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlc3VibWl0LWZyZXRlIHNlbGVjaW9uYWRvOiAnLCBmcmV0ZVNlbGVjaW9uYWRvKTtcclxuICAgICAgICBjb25zdCBjYXJyaW5obyA9IGdldENhcnQoKTtcclxuICAgICAgICBjb25zdCB2YWxvclRvdGFsID0gdGhpcy5jYWxjdWxhclZhbG9yVG90YWwoY2FycmluaG8sIGZyZXRlU2VsZWNpb25hZG8pO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ3ZhbG9yIHRvdGFsOiAnLCB2YWxvclRvdGFsKTtcclxuICAgICAgICBpZighdGhpcy52YWxpZGF0ZSgpKSByZXR1cm4gbnVsbDtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdwYXNzb3UgMycpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRGlzYWJsZWQoKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdwYXNzb3UgNCcpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubm92b1BlZGlkbyhcclxuICAgICAgICAgICAgZm9ybSwgZnJldGVTZWxlY2lvbmFkbywgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvLCBcclxuICAgICAgICAgICAgdmFsb3JUb3RhbCwgdG9rZW4sIHNlbmRlckhhc2gsIGNhcnJpbmhvLCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXZpc286IHsgc3RhdHVzOmZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0gfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlzYWJsZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdoZW5kZXItZnJldGUgc2VsZWNpb25hZG86ICcsIHRoaXMucHJvcHMuZnJldGVTZWxlY2lvbmFkbyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxBbGVydEdlcmFsIGF2aXNvPXt0aGlzLnN0YXRlLmF2aXNvfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWN0YSBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGlzYWJsZWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFTlZJQU5ETy4uLlwiIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ09OQ0xVSVIgUEVESURPXCJcclxuICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5obyxcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG8sXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtLFxyXG4gICAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXHJcbiAgICBzZW5kZXJIYXNoOiBzdGF0ZS5jaGVja291dC5zZW5kZXJIYXNoLFxyXG4gICAgdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvOiBzdGF0ZS5jaGVja291dC50aXBvUGFnYW1lbnRvU2VsZWNpb25hZG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoQ2hlY2tvdXRCdXR0b24pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRGFkb3NDbGllbnRlQ29udGFpbmVyIGZyb20gJy4uL0NsaWVudGUvRGFkb3NDbGllbnRlJztcclxuaW1wb3J0IENsaWVudGVMb2dpbiBmcm9tICcuLi9DbGllbnRlL0NsaWVudGVMb2dpbic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgRGFkb3NDbGllbnRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5mZXRjaENsaWVudGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB0aGlzLmZldGNoQ2xpZW50ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQ2xpZW50ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgdXN1YXJpbywgdG9rZW4sIGNsaWVudGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYodXN1YXJpbyAmJiB0b2tlbiAmJiAhY2xpZW50ZSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDbGllbnRlKHVzdWFyaW8uX2lkLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgdXN1YXJpbywgcGVybWlzc2FvSW5pY2lhbCwgcGVybWl0aXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIHVzdWFyaW8gfHwgcGVybWlzc2FvSW5pY2lhbCA/IFxyXG4gICAgICAgICAgICA8RGFkb3NDbGllbnRlQ29udGFpbmVyIC8+IDogXHJcbiAgICAgICAgICAgIDxDbGllbnRlTG9naW4gcGVybWl0aXI9e3Blcm1pdGlyfSAvPjtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIHRva2VuOiBzdGF0ZS5hdXRoLnRva2VuLFxyXG4gICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZS5jbGllbnRlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKERhZG9zQ2xpZW50ZSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm1TaW1wbGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzJztcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBFU1RBRE9TIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBmb3JtYXROdW1iZXIsIGZvcm1hdENFUCB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCc7XHJcblxyXG5jbGFzcyBEYWRvc0VudHJlZ2FDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGVycm9zOiB7IGRhZG9zQ29icmFuY2E6IHt9IH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZmV0Y2hDbGllbnRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XHJcbiAgICAgICAgaWYoIXByZXZQcm9wcy5jbGllbnRlICYmIHRoaXMucHJvcHMuY2xpZW50ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDbGllbnRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoQ2xpZW50ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgY2xpZW50ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICBkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2E6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2FsOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5sb2NhbCA6IFwiXCIsXHJcbiAgICAgICAgICAgIG51bWVybzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28ubnVtZXJvIDogXCJcIixcclxuICAgICAgICAgICAgYmFpcnJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5iYWlycm8gOiBcIlwiLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50bzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uY29tcGxlbWVudG8gOiBcIlwiLFxyXG4gICAgICAgICAgICBjaWRhZGU6IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmNpZGFkZSA6IFwiXCIsXHJcbiAgICAgICAgICAgIGVzdGFkbzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uZXN0YWRvIDogXCJcIixcclxuICAgICAgICAgICAgQ0VQOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5DRVAgOiBcIlwiLFxyXG4gICAgICAgICAgICBkYWRvc0NvYnJhbmNhOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbDogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28ubG9jYWwgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5udW1lcm8gOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYmFpcnJvOiBjbGllbnRlID8gY2xpZW50ZS5lbmRlcmVjby5iYWlycm8gOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY29tcGxlbWVudG86IGNsaWVudGUgPyBjbGllbnRlLmVuZGVyZWNvLmNvbXBsZW1lbnRvIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGNpZGFkZTogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uY2lkYWRlIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGVzdGFkbzogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uZXN0YWRvIDogXCJcIixcclxuICAgICAgICAgICAgICAgIENFUDogY2xpZW50ZSA/IGNsaWVudGUuZW5kZXJlY28uQ0VQIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBsb2NhbCwgbnVtZXJvLCBiYWlycm8sIGNpZGFkZSwgZXN0YWRvLCBDRVAsXHJcbiAgICAgICAgICAgIGRhZG9zQ29icmFuY2EgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCBlcnJvcyA9IHsgZGFkb3NDb2JyYW5jYToge30gfTtcclxuXHJcbiAgICAgICAgaWYoIWxvY2FsKSBlcnJvcy5sb2NhbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW5kZXJlw6dvXCI7XHJcbiAgICAgICAgaWYoIW51bWVybykgZXJyb3MubnVtZXJvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBuw7ptZXJvXCI7XHJcbiAgICAgICAgaWYoIWJhaXJybykgZXJyb3MuYmFpcnJvID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBiYWlycm9cIjtcclxuICAgICAgICBpZighY2lkYWRlKSBlcnJvcy5jaWRhZGUgPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIGNpZGFkZVwiO1xyXG4gICAgICAgIGlmKCFlc3RhZG8pIGVycm9zLmVzdGFkbyA9IFwiU2VsZWNpb25lIG8gc2V1IGVzdGFkb1wiO1xyXG4gICAgICAgIGlmKCFDRVAgfHwgQ0VQLmxlbmd0aCAhPT0gOSkgZXJyb3MuQ0VQID0gXCJEaWdpdGUgYXF1aSBzZXUgQ0VQXCI7XHJcblxyXG4gICAgICAgIGlmKCFkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2Epe1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5sb2NhbCkgZXJyb3MuZGFkb3NDb2JyYW5jYS5sb2NhbCA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgZW5kZXJlw6dvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLm51bWVybykgZXJyb3MuZGFkb3NDb2JyYW5jYS5udW1lcm8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IG7Dum1lcm9cIjtcclxuICAgICAgICAgICAgaWYoIWRhZG9zQ29icmFuY2EuYmFpcnJvKSBlcnJvcy5kYWRvc0NvYnJhbmNhLmJhaXJybyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgYmFpcnJvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLmNpZGFkZSkgZXJyb3MuZGFkb3NDb2JyYW5jYS5jaWRhZGUgPSBcIlByZWVuY2hhIGFxdWkgY29tIGEgc3VhIGNpZGFkZVwiO1xyXG4gICAgICAgICAgICBpZighZGFkb3NDb2JyYW5jYS5lc3RhZG8pIGVycm9zLmRhZG9zQ29icmFuY2EuZXN0YWRvID0gXCJTZWxlY2lvbmUgbyBzZXUgZXN0YWRvXCI7XHJcbiAgICAgICAgICAgIGlmKCFkYWRvc0NvYnJhbmNhLkNFUCB8fCBkYWRvc0NvYnJhbmNhLkNFUC5sZW5ndGggIT09IDkpIGVycm9zLmRhZG9zQ29icmFuY2EuQ0VQID0gXCJEaWdpdGUgYXF1aSBzZXUgQ0VQXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3MgfSk7XHJcbiAgICAgICAgcmV0dXJuICggT2JqZWN0LmtleXMoZXJyb3MpLmxlbmd0aCA9PT0gMSAmJiBPYmplY3Qua2V5cyhlcnJvcy5kYWRvc0NvYnJhbmNhKS5sZW5ndGggPT09IDAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSA9IChmaWVsZCwgdmFsdWUsIHByZWZpeCkgPT4gXHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHsgW2ZpZWxkXTogdmFsdWUgfSwgcHJlZml4KS50aGVuKCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcblxyXG4gICAgb25DaGFuZ2VDRVAgPSAoZmllbGQsIHZhbHVlLCBwcmVmaXgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oeyBbZmllbGRdOiB2YWx1ZSB9LCBwcmVmaXgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gOSl7XHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vdmlhY2VwLmNvbS5ici93cy8ke3ZhbHVlLnJlcGxhY2UoJy0nLCcnKX0vanNvbi91bmljb2RlYClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxvY2FsXCI6IHJlc3BvbnNlLmRhdGFbXCJsb2dyYWRvdXJvXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhaXJyb1wiOiByZXNwb25zZS5kYXRhW1wiYmFpcnJvXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNpZGFkZVwiOiByZXNwb25zZS5kYXRhW1wibG9jYWxpZGFkZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlc3RhZG9cIjogcmVzcG9uc2UuZGF0YVtcInVmXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcHJlZml4KS50aGVuKCgpID0+IHRoaXMudmFsaWRhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlckRhZG9zRGVFbnRyZWdhKCl7XHJcbiAgICAgICAgaWYoIXRoaXMucHJvcHMuZm9ybSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhLFxyXG4gICAgICAgICAgICBsb2NhbCxcclxuICAgICAgICAgICAgbnVtZXJvLFxyXG4gICAgICAgICAgICBiYWlycm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBjaWRhZGUsXHJcbiAgICAgICAgICAgIGVzdGFkbyxcclxuICAgICAgICAgICAgQ0VQXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7IGVycm9zIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkRBRE9TIERFIEVOVFJFR0E8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0NFUCB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuQ0VQfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNDUtNzg5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUNFUChcIkNFUFwiLCBmb3JtYXRDRVAoZS50YXJnZXQudmFsdWUpKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYWwgfHwgXCJcIn0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MubG9jYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9jYWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUnVhLCBBdmVuaWRhLCAuLi5cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW5kZXJlw6dvIChSdWEsIEF2ZW5pZGEsLi4pXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJsb2NhbFwiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVybyB8fCBcIlwifSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5udW1lcm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibnVtZXJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjk5OTlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibnVtZXJvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSkpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFpcnJvIHx8IFwiXCJ9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5iYWlycm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYmFpcnJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJhaXJyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYWlycm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImJhaXJyb1wiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBsZW1lbnRvIHx8IFwiXCJ9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmNvbXBsZW1lbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJjb21wbGVtZW50b1wiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaWRhZGUgfHwgXCJcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5jaWRhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2lkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImNpZGFkZVwiLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggdmVydGljYWwgZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXN0YWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZXN0YWRvfSBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJlc3RhZG9cIiwgZS50YXJnZXQudmFsdWUpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjaW9uZS4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBPYmplY3Qua2V5cyhFU1RBRE9TKS5tYXAoKGFiYnIpID0+ICg8b3B0aW9uIGtleT17YWJicn0gdmFsdWU9e2FiYnJ9PntFU1RBRE9TW2FiYnJdfTwvb3B0aW9uPikpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3MuZXN0YWRvICYmICg8c21hbGwgY2xhc3NOYW1lPVwiZXJyb1wiPntlcnJvcy5lc3RhZG99PC9zbWFsbD4pIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhIHx8IHRydWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2F9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5wcm9wcy5zZXRGb3JtKHsgXCJkYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2FcIjogIWRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSB9KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7T3MgZGFkb3MgZGUgZW50cmVnYSBzw6NvIGlndWFpcyBhb3MgZGFkb3MgZGUgY29icmFuw6dhPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRhZG9zRGVDb2JyYW5jYSgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnByb3BzLmZvcm0gfHwgIXRoaXMucHJvcHMuZm9ybS5kYWRvc0NvYnJhbmNhKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCB7IFxyXG4gICAgICAgICAgICBsb2NhbCxcclxuICAgICAgICAgICAgbnVtZXJvLFxyXG4gICAgICAgICAgICBiYWlycm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBjaWRhZGUsXHJcbiAgICAgICAgICAgIGVzdGFkbyxcclxuICAgICAgICAgICAgQ0VQXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybS5kYWRvc0NvYnJhbmNhO1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+REFET1MgREUgQ09CUkFOw4dBPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtDRVAgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybz17ZXJyb3MuZGFkb3NDb2JyYW5jYS5DRVB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNDUtNzg5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ0VQXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZUNFUChcIkNFUFwiLCBmb3JtYXRDRVAoZS50YXJnZXQudmFsdWUpLCAnZGFkb3NDb2JyYW5jYScpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhbCB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EubG9jYWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvY2FsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJ1YSwgQXZlbmlkYSwgLi4uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVuZGVyZcOnbyAoUnVhLCBBdmVuaWRhLC4uKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwibG9jYWxcIiwgZS50YXJnZXQudmFsdWUsICdkYWRvc0NvYnJhbmNhJyl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e251bWVybyB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EubnVtZXJvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJudW1lcm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiOTk5OVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOw7ptZXJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJudW1lcm9cIiwgZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlKSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhaXJybyB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EuYmFpcnJvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYWlycm9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmFpcnJvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJhaXJyb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiYmFpcnJvXCIsIGUudGFyZ2V0LnZhbHVlLCAnZGFkb3NDb2JyYW5jYScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wbGVtZW50byB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EuY29tcGxlbWVudG99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbXBsZW1lbnRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoXCJjb21wbGVtZW50b1wiLCBlLnRhcmdldC52YWx1ZSwgJ2RhZG9zQ29icmFuY2EnKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NpZGFkZSB8fCBcIlwifSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm89e2Vycm9zLmRhZG9zQ29icmFuY2EuY2lkYWRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjaWRhZGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2lkYWRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNpZGFkZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiY2lkYWRlXCIsIGUudGFyZ2V0LnZhbHVlLCAnZGFkb3NDb2JyYW5jYScpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IHZlcnRpY2FsIGZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVzdGFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e2VzdGFkb30gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiZXN0YWRvXCIsIGUudGFyZ2V0LnZhbHVlLCAnZGFkb3NDb2JyYW5jYScpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjaW9uZS4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBPYmplY3Qua2V5cyhFU1RBRE9TKS5tYXAoKGFiYnIpID0+ICg8b3B0aW9uIGtleT17YWJicn0gdmFsdWU9e2FiYnJ9PntFU1RBRE9TW2FiYnJdfTwvb3B0aW9uPikpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyb3MuZGFkb3NDb2JyYW5jYS5lc3RhZG8gJiYgKDxzbWFsbCBjbGFzc05hbWU9XCJlcnJvXCI+e2Vycm9zLmRhZG9zQ29icmFuY2EuZXN0YWRvfTwvc21hbGw+KSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJEYWRvc0RlRW50cmVnYSgpIH1cclxuICAgICAgICAgICAgICAgIHsgIWRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSAmJiB0aGlzLnJlbmRlckRhZG9zRGVDb2JyYW5jYSgpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykoRGFkb3NFbnRyZWdhQ29udGFpbmVyKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEZvcm1SYWRpbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtUmFkaW8nO1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldENhcnQgfSBmcm9tICcuLi8uLi91dGlscy9jYXJ0JztcclxuaW1wb3J0IHsgZm9ybWF0TW9uZXksIGNvZGlnb3NDb3JyZWlvcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbmNsYXNzIERhZG9zRnJldGUgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKGZvcm0pe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNhbGN1bGFyRnJldGUoZm9ybS5DRVAsIGdldENhcnQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpe1xyXG4gICAgICAgIGlmKHByZXZQcm9wcy5mb3JtLkNFUCAhPT0gdGhpcy5wcm9wcy5mb3JtLkNFUCAmJiB0aGlzLnByb3BzLmZvcm0uQ0VQLmxlbmd0aCA9PT0gOSl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2FsY3VsYXJGcmV0ZSh0aGlzLnByb3BzLmZvcm0uQ0VQLCBnZXRDYXJ0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY2lvbmFyRnJldGUoZnJldGUpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2VsZWNpb25hckZyZXRlKGZyZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IGZyZXRlcywgZnJldGVTZWxlY2lvbmFkbyB9ID0gdGhpcy5wcm9wcztcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKCdmcmV0ZXM6ICcsIGZyZXRlcyk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZygnZGFkb3MgZnJldGUtZnJldGUgc2VsZWNpb25hZG86ICcsIGZyZXRlU2VsZWNpb25hZG8pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGFkb3MtRnJldGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Nw4lUT0RPUyBERSBFTlRSRUdBPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmcmV0ZXMgfHwgW10pLm1hcCgoZnJldGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtUmFkaW8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmcmV0ZV9zZWxlY2lvbmFkb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmcmV0ZVNlbGVjaW9uYWRvID8gZnJldGVTZWxlY2lvbmFkby5Db2RpZ28gPT09IGZyZXRlLkNvZGlnbyA6IGZhbHNlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT4gdGhpcy5zZWxlY2lvbmFyRnJldGUoZnJldGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtjb2RpZ29zQ29ycmVpb3NbZnJldGUuQ29kaWdvXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJHtmcmV0ZS5QcmF6b0VudHJlZ2F9IGRpYXMgw7p0ZWlzKSAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXRNb25leShmcmV0ZS5WYWxvci5yZXBsYWNlKCcsJywnLicpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4oe1xyXG4gICAgdXN1YXJpbzogc3RhdGUuYXV0aC51c3VhcmlvLFxyXG4gICAgY2FycmluaG86IHN0YXRlLmNhcnJpbmhvLmNhcnJpbmhvLFxyXG4gICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZS5jbGllbnRlLFxyXG4gICAgZm9ybTogc3RhdGUuY2hlY2tvdXQuZm9ybSxcclxuICAgIGZyZXRlczogc3RhdGUuY2FycmluaG8uZnJldGVzLFxyXG4gICAgZnJldGVTZWxlY2lvbmFkbzogc3RhdGUuY2FycmluaG8uZnJldGVTZWxlY2lvbmFkb1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShEYWRvc0ZyZXRlKTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBGb3JtUmFkaW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dHMvRm9ybVJhZGlvJztcclxuaW1wb3J0IEZvcm1TaW1wbGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXRzL0Zvcm1TaW1wbGVzJztcclxuXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IHtmb3JtYXRDUEYsIGZvcm1hdENhcnRhbywgZm9ybWF0TnVtYmVyfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnO1xyXG5pbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7dmFsaWRhdGVDUEZ9IGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRlJztcclxuXHJcbmNsYXNzIERhZG9zUGFnYW1lbnRvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtlcnJvczoge319XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRTZXNzaW9uUGFnYW1lbnRvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbnVtZXJvQ2FydGFvLFxyXG4gICAgICAgICAgICBtZXNDYXJ0YW8sXHJcbiAgICAgICAgICAgIGFub0NhcnRhbyxcclxuICAgICAgICAgICAgQ1ZWQ2FydGFvLFxyXG4gICAgICAgICAgICBjcmVkaXRfY2FyZF90b2tlbixcclxuICAgICAgICAgICAgYmFuZGVpcmFfY2FydGFvLFxyXG4gICAgICAgICAgICBwYXJjZWxhc0NhcnRhb1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcblxyXG4gICAgICAgIGlmKCFiYW5kZWlyYV9jYXJ0YW8gJiYgbnVtZXJvQ2FydGFvICYmIG51bWVyb0NhcnRhby5zcGxpdCgnICcpLmpvaW4oJycpLmxlbmd0aCA+IDcpe1xyXG4gICAgICAgICAgICB0aGlzLmdldEJyYW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgIWNyZWRpdF9jYXJkX3Rva2VuICYmXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbyAmJiBudW1lcm9DYXJ0YW8uc3BsaXQoJyAnKS5qb2luKCcnKS5sZW5ndGggPT09IDE2ICYmXHJcbiAgICAgICAgICAgIG1lc0NhcnRhbyAmJiBtZXNDYXJ0YW8ubGVuZ3RoID09PSAyICYmXHJcbiAgICAgICAgICAgIGFub0NhcnRhbyAmJiBhbm9DYXJ0YW8ubGVuZ3RoID09PSA0ICYmXHJcbiAgICAgICAgICAgIENWVkNhcnRhbyAmJiBDVlZDYXJ0YW8ubGVuZ3RoID09PSAzICYmXHJcbiAgICAgICAgICAgIGJhbmRlaXJhX2NhcnRhbyBcclxuICAgICAgICApIHRoaXMuc3VibWl0Q2FydGFvSGFzaCgpO1xyXG5cclxuICAgICAgICBpZiAoKCFwYXJjZWxhc0NhcnRhbyAmJiBiYW5kZWlyYV9jYXJ0YW8pIHx8XHJcbiAgICAgICAgICAgIChwYXJjZWxhc0NhcnRhbyAmJiBiYW5kZWlyYV9jYXJ0YW8gJiYgcHJldlByb3BzLmZyZXRlU2VsZWNpb25hZG8gIT09IHRoaXMucHJvcHMuZnJldGVTZWxlY2lvbmFkbylcclxuICAgICAgICApIHRoaXMuZ2V0UGFyY2VsYXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuZCgpe1xyXG4gICAgICAgIGNvbnN0IHsgbnVtZXJvQ2FydGFvIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgUGFnU2VndXJvRGlyZWN0UGF5bWVudC5nZXRCcmFuZCh7XHJcbiAgICAgICAgICAgIGNhcmRCaW46IG51bWVyb0NhcnRhby5zcGxpdCgnICcpLmpvaW4oJycpLnNsaWNlKDAsNiksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyKSA9PnRoaXMucHJvcHMuc2V0Rm9ybSh7IGJhbmRlaXJhX2NhcnRhbzogci5icmFuZCB9KSxcclxuICAgICAgICAgICAgZXJyb3I6IChyKSA9PiBjb25zb2xlLmxvZyhyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdENhcnRhb0hhc2goKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBudW1lcm9DYXJ0YW8sXHJcbiAgICAgICAgICAgIG1lc0NhcnRhbyxcclxuICAgICAgICAgICAgYW5vQ2FydGFvLFxyXG4gICAgICAgICAgICBDVlZDYXJ0YW8sXHJcbiAgICAgICAgICAgIGJhbmRlaXJhX2NhcnRhb1xyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgY2FyZE51bWJlcjogbnVtZXJvQ2FydGFvLnNwbGl0KCcgJykuam9pbignJyksXHJcbiAgICAgICAgICAgIGJyYW5kOiBiYW5kZWlyYV9jYXJ0YW8ubmFtZSxcclxuICAgICAgICAgICAgY3Z2OiBDVlZDYXJ0YW8sXHJcbiAgICAgICAgICAgIGV4cGlyYXRpb25Nb250aDogbWVzQ2FydGFvLFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uWWVhcjogYW5vQ2FydGFvLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtjcmVkaXRfY2FyZF90b2tlbjogci5jYXJkLnRva2VufSlcclxuICAgICAgICAgICAgfSwgICAgXHJcbiAgICAgICAgICAgIGVycm9yOiAocikgPT4gY29uc29sZS5sb2cocilcclxuICAgICAgICB9O1xyXG4gICAgICAgIFBhZ1NlZ3Vyb0RpcmVjdFBheW1lbnQuY3JlYXRlQ2FyZFRva2VuKHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyY2VsYXMoKSB7XHJcbiAgICAgICAgY29uc3Qge2ZyZXRlU2VsZWNpb25hZG8sIGNhcnJpbmhvfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qge2JhbmRlaXJhX2NhcnRhb30gPSB0aGlzLnByb3BzLmZvcm07XHJcblxyXG4gICAgICAgIGxldCB2YWxvclRvdGFsID0gY2FycmluaG8ucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFsbCwgaXRlbSkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGwgKyAoTnVtYmVyKGl0ZW0ucHJlY29Vbml0YXJpbykgKiBOdW1iZXIoaXRlbS5xdWFudGlkYWRlKSksIDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICBsZXQgZnJldGVWYWxvciA9IE51bWJlcihmcmV0ZVNlbGVjaW9uYWRvLlZhbG9yLnJlcGxhY2UoJywnLCAnLicpKTtcclxuXHJcbiAgICAgICAgUGFnU2VndXJvRGlyZWN0UGF5bWVudC5nZXRJbnN0YWxsbWVudHMoe1xyXG4gICAgICAgICAgICBhbW91bnQ6IHZhbG9yVG90YWwgKyBmcmV0ZVZhbG9yLFxyXG4gICAgICAgICAgICBtYXhJbnN0YWxsbWVudE5vSW50ZXJlc3Q6IDYsXHJcbiAgICAgICAgICAgIG1heEluc3RhbGxtZW50OiA2LFxyXG4gICAgICAgICAgICBicmFuZDogYmFuZGVpcmFfY2FydGFvLm5hbWUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe3BhcmNlbGFzQ2FydGFvOiBkYXRhLmluc3RhbGxtZW50c30pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZXRGb3JtKHtwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhOiBkYXRhLmluc3RhbGxtZW50c1tiYW5kZWlyYV9jYXJ0YW8ubmFtZV1bMF19KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IChyKSA9PiBjb25zb2xlLmxvZyhyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck9wY29lc1BhZ2FtZW50bygpIHtcclxuICAgICAgICBjb25zdCB7dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtUmFkaW8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInRpcG9fcGFnYW1lbnRvX3NlbGVjaW9uYWRvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB7dGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSAnYm9sZXRvJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geygpID0+IHRoaXMucHJvcHMuc2V0VGlwb1BhZ2FtZW50byhcImJvbGV0b1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkJvbGV0byBCYW5jw6FyaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1SYWRpbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwidGlwb19wYWdhbWVudG9fc2VsZWNpb25hZG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9IHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09ICdjYXJ0YW8nfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KCkgPT4gdGhpcy5wcm9wcy5zZXRUaXBvUGFnYW1lbnRvKFwiY2FydGFvXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ2FydMOjbyBkZSBDcsOpZGl0b1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG99ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB7IFxyXG4gICAgICAgICAgICBDUEYsIENQRmJvbGV0byxcclxuICAgICAgICAgICAgbnVtZXJvQ2FydGFvLCBub21lQ2FydGFvLCBtZXNDYXJ0YW8sIGFub0NhcnRhbywgcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSwgQ1ZWQ2FydGFvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCBlcnJvcyA9IHt9O1xyXG5cclxuICAgICAgICBpZiAodGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImJvbGV0b1wiKSB7XHJcbiAgICAgICAgICAgIGlmICghQ1BGYm9sZXRvICYmICFDUEYpIGVycm9zLkNQRmJvbGV0byA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBzZXUgQ1BGXCI7XHJcbiAgICAgICAgICAgIGlmIChDUEZib2xldG8gJiYgQ1BGYm9sZXRvLmxlbmd0aCAhPT0gMTQgJiYgIXZhbGlkYXRlQ1BGKENQRmJvbGV0bykpXHJcbiAgICAgICAgICAgICAgICBlcnJvcy5DUEZib2xldG8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IENQRiBjb3JyZXRhbWVudGVcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiY2FydGFvXCIpIHtcclxuICAgICAgICAgICAgaWYgKCFudW1lcm9DYXJ0YW8gfHwgbnVtZXJvQ2FydGFvLmxlbmd0aCAhPT0gMTkpIGVycm9zLm51bWVyb0NhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBuw7ptZXJvIGRvIHNldSBjYXJ0w6NvXCI7XHJcbiAgICAgICAgICAgIGlmICghbm9tZUNhcnRhbykgZXJyb3Mubm9tZUNhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBub21lIHF1ZSBlc3TDoSBubyBjYXJ0w6NvXCI7XHJcbiAgICAgICAgICAgIGlmICghbWVzQ2FydGFvIHx8IG1lc0NhcnRhby5sZW5ndGggIT09IDIpIGVycm9zLm1lc0NhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBtw6pzIGRlIHZlbmNpbWVudG8gZG8gY2FydMOjb1wiO1xyXG4gICAgICAgICAgICBpZiAoIWFub0NhcnRhbyB8fCBhbm9DYXJ0YW8ubGVuZ3RoICE9PSA0KSBlcnJvcy5hbm9DYXJ0YW8gPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gYW5vIGRlIHZlbmNpbWVudG8gZG8gY2FydMOjb1wiO1xyXG4gICAgICAgICAgICBpZiAoIXBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEpIGVycm9zLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEgPSBcIlNlbGVjaW9uZSB1bWEgZm9ybWEgZGUgcGFnYW1lbnRvXCI7XHJcbiAgICAgICAgICAgIGlmICghQ1ZWQ2FydGFvIHx8IENWVkNhcnRhby5sZW5ndGggIT09IDMpIGVycm9zLkNWVkNhcnRhbyA9IFwiUHJlZW5jaGEgYXF1aSBjb20gbyBjw7NkaWdvIGRlIHNlZ3VyYW7Dp2EgZG8gY2FydMOjb1wiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3N9KTtcclxuICAgICAgICByZXR1cm4gIShPYmplY3Qua2V5cyhlcnJvcykubGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZmllbGQsIHZhbHVlKSA9PiB0aGlzLnByb3BzLnNldEZvcm0oe1tmaWVsZF06IHZhbHVlfSkudGhlbigoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xyXG5cclxuICAgIHJlbmRlclBhZ2FtZW50b0NvbUJvbGV0bygpIHtcclxuICAgICAgICBjb25zdCB7Q1BGLCBDUEZib2xldG99ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJEYWRvcy1QYWdhbWVudG9cIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtDUEZib2xldG8gfHwgQ1BGfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIkNQRlwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MuQ1BGYm9sZXRvfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJDUEZcIiBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQ1BGXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJDUEZib2xldG9cIiwgZm9ybWF0Q1BGKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQYWdhbWVudG9Db21DYXJ0YW8oKSB7XHJcbiAgICAgICAgY29uc3QgeyBcclxuICAgICAgICAgICAgbm9tZUNhcnRhbywgXHJcbiAgICAgICAgICAgIG51bWVyb0NhcnRhbywgXHJcbiAgICAgICAgICAgIENWVkNhcnRhbywgXHJcbiAgICAgICAgICAgIG1lc0NhcnRhbywgXHJcbiAgICAgICAgICAgIGFub0NhcnRhbywgXHJcbiAgICAgICAgICAgIHBhcmNlbGFzQ2FydGFvLCBcclxuICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSxcclxuICAgICAgICAgICAgYmFuZGVpcmFfY2FydGFvXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7ZXJyb3N9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiRGFkb3MtUGFnYW1lbnRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bm9tZUNhcnRhb30gXHJcbiAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5ub21lQ2FydGFvfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcIm5vbWVDYXJ0YW9cIiBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiTm9tZSBjb21vIGVzY3JpdG8gbm8gY2FydMOjb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJOb21lIENvbXBsZXRvIG5vIENhcnTDo29cIiBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm5vbWVDYXJ0YW9cIiwgZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bnVtZXJvQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MubnVtZXJvQ2FydGFvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwibnVtZXJvQ2FydGFvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiWFhYWCBYWFhYIFhYWFggWFhYWFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIk7Dum1lcm8gZG8gQ2FydMOjb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJudW1lcm9DYXJ0YW9cIiwgZm9ybWF0Q2FydGFvKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtDVlZDYXJ0YW99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5DVlZDYXJ0YW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJDVlZDYXJ0YW9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJYWFhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJDw7NkaWdvIGRlIFNlZ3VyYW7Dp2EgZG8gQ2FydMOjb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJDVlZDYXJ0YW9cIiwgZm9ybWF0TnVtYmVyKGUudGFyZ2V0LnZhbHVlLCAzKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBEYXRhIGRlIFZhbGlkYWRlIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHttZXNDYXJ0YW99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvID0ge2Vycm9zLm1lc0NhcnRhb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwibWVzQ2FydGFvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJNTVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiTcOqc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcIm1lc0NhcnRhb1wiLCBmb3JtYXROdW1iZXIoZS50YXJnZXQudmFsdWUsIDIpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSBcInNsYXNoLXBhZ2FtZW50b1wiPiAmbmJzcDsgLyAmbmJzcDsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7YW5vQ2FydGFvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5hbm9DYXJ0YW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImFub0NhcnRhb1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiQUFBQVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiQW5vXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiYW5vQ2FydGFvXCIsIGZvcm1hdE51bWJlcihlLnRhcmdldC52YWx1ZSwgNCkpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBQYXJjZWxhcyA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW8gJiYgcGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInBhcmNlbGFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhLnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwicGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYVwiLCBwYXJjZWxhc0NhcnRhb1tiYW5kZWlyYV9jYXJ0YW8ubmFtZV1bZS50YXJnZXQudmFsdWUgLSAxXSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+IFNlbGVjaW9uZSBhIHF1YW50aWRhZGUgZGUgcGFyY2VsYXMgcGFyYSBwYWdhbWVudG8gPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyY2VsYXNDYXJ0YW9bYmFuZGVpcmFfY2FydGFvLm5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLDYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT0ge2luZGV4fSB2YWx1ZT17aXRlbS5xdWFudGl0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9IHggZGUge2Zvcm1hdE1vbmV5KGl0ZW0udG90YWxBbW91bnQgLyBpdGVtLnF1YW50aXR5KX0gc2VtIGp1cm9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9zLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWUgPSBcImVycm9cIj4ge2Vycm9zLnBhcmNlbGFzQ2FydGFvU2VsZWNpb25hZGF9IDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG99ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiRGFkb3MtUGFnYW1lbnRvLUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPiBEQURPUyBERSBQQUdBTUVOVE8gPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyT3Bjb2VzUGFnYW1lbnRvKCl9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge3RpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gJ2JvbGV0bycgJiYgdGhpcy5yZW5kZXJQYWdhbWVudG9Db21Cb2xldG8oKX1cclxuICAgICAgICAgICAgICAgIHt0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09ICdjYXJ0YW8nICYmIHRoaXMucmVuZGVyUGFnYW1lbnRvQ29tQ2FydGFvKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHVzdWFyaW86IHN0YXRlLmF1dGgudXN1YXJpbyxcclxuICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5jYXJyaW5obyxcclxuICAgIGNsaWVudGU6IHN0YXRlLmNsaWVudGUuY2xpZW50ZSxcclxuICAgIGZvcm06IHN0YXRlLmNoZWNrb3V0LmZvcm0sXHJcbiAgICB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG86IHN0YXRlLmNoZWNrb3V0LnRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyxcclxuICAgIHNlc3Npb25JZDogc3RhdGUuY2hlY2tvdXQuc2Vzc2lvbklkLFxyXG4gICAgc2VuZGVySGFzaDogc3RhdGUuY2hlY2tvdXQuc2VuZGVySGFzaCxcclxuICAgIGZyZXRlU2VsZWNpb25hZG86IHN0YXRlLmNhcnJpbmhvLmZyZXRlU2VsZWNpb25hZG9cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9ucykgKERhZG9zUGFnYW1lbnRvKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IExpc3RhRGVQcm9kdXRvcyBmcm9tICcuLi9DYXJyaW5oby9MaXN0YURlUHJvZHV0b3MnO1xyXG5cclxuY2xhc3MgRGFkb3NQZWRpZG8gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRhZG9zLVBlZGlkby1Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5EQURPUyBETyBQRURJRE88L2gyPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGlzdGFEZVByb2R1dG9zIHNlbUFsdGVyYWNvZXMgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhZG9zUGVkaWRvOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQWxlcnRHZXJhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsZXJ0L0dlcmFsJztcclxuaW1wb3J0IHsgdmFsaWRhdGVDUEYgfSBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5cclxuY2xhc3MgU3VibWl0RGFkb3NDbGllbnRlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0geyBhdmlzbzogbnVsbCB9XHJcblxyXG4gICAgY2FsbGJhY2sgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICBpZighZXJyb3Ipe1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnBlcm1pdGlyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdmlzbzogbnVsbCB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdmlzbzogeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgIFxyXG4gICAgICAgICAgICBlbWFpbCwgc2VuaGEsIG5vbWUsIENQRiwgZGF0YURlTmFzY2ltZW50bywgdGVsZWZvbmUsXHJcbiAgICAgICAgICAgIGxvY2FsLCBudW1lcm8sIGJhaXJybywgY2lkYWRlLCBlc3RhZG8sIENFUFxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgeyB1c3VhcmlvIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBsZXQgdGVtRXJybyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZighdXN1YXJpbyAmJiAhZW1haWwpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCF1c3VhcmlvICYmICFzZW5oYSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIW5vbWUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFDUEYgfHwgQ1BGLmxlbmd0aCAhPT0gMTQpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKENQRiAmJiBDUEYubGVuZ3RoID09PSAxNCAmJiAhdmFsaWRhdGVDUEYoQ1BGKSkgdGVtRXJybyA9IHRydWU7XHJcbiAgICAgICAgaWYoIWRhdGFEZU5hc2NpbWVudG8gfHwgZGF0YURlTmFzY2ltZW50by5sZW5ndGggIT09IDEwKSB0ZW1FcnJvID0gdHJ1ZTtcclxuICAgICAgICBpZighdGVsZWZvbmUgfHwgdGVsZWZvbmUubGVuZ3RoIDwgMTEpIHRlbUVycm8gPSB0cnVlO1xyXG5cclxuICAgICAgICBpZighbG9jYWwpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFudW1lcm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFiYWlycm8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFjaWRhZGUpIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFlc3RhZG8pIHRlbUVycm8gPSB0cnVlO1xyXG4gICAgICAgIGlmKCFDRVAgfHwgQ0VQLmxlbmd0aCAhPT0gOSkgdGVtRXJybyA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiAhdGVtRXJybztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoKXtcclxuICAgICAgICBpZighdGhpcy52YWxpZGF0ZSgpKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCB7IHRva2VuLCBmb3JtLCBjbGllbnRlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKCF0b2tlbikgdGhpcy5wcm9wcy5uZXdDbGllbnRlKGZvcm0sIHRoaXMuY2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUNsaWVudGUoZm9ybSwgY2xpZW50ZS5faWQsIHRva2VuLCB0aGlzLmNhbGxiYWNrKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0R2VyYWwgYXZpc289e3RoaXMuc3RhdGUuYXZpc299IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tY3RhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05USU5VQVIgUEVESURPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdXN1YXJpbzogc3RhdGUuYXV0aC51c3VhcmlvLFxyXG4gICAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXHJcbiAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLmNsaWVudGUsXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKFN1Ym1pdERhZG9zQ2xpZW50ZSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBEYWRvc0NsaWVudGUgZnJvbSAnLi9EYWRvc0NsaWVudGUnO1xyXG5pbXBvcnQgRGFkb3NFbnRyZWdhIGZyb20gJy4vRGFkb3NFbnRyZWdhJztcclxuaW1wb3J0IFN1Ym1pdERhZG9zQ2xpZW50ZSBmcm9tICcuL1N1Ym1pdERhZG9zQ2xpZW50ZSc7XHJcbmltcG9ydCBEYWRvc0ZyZXRlIGZyb20gJy4vRGFkb3NGcmV0ZSc7XHJcbmltcG9ydCBEYWRvc1BhZ2FtZW50byBmcm9tICcuL0RhZG9zUGFnYW1lbnRvJztcclxuaW1wb3J0IERhZG9zUGVkaWRvIGZyb20gJy4vRGFkb3NQZWRpZG8nO1xyXG5pbXBvcnQgQ2hlY2tvdXRCdXR0b24gZnJvbSAnLi9DaGVja291dEJ1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuXHJcbmNsYXNzIENoZWNrb3V0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHBlcm1pc3Nhb0luaWNpYWw6IGZhbHNlLFxyXG4gICAgICAgIHBlcm1pc3Nhb0NoZWNrb3V0OiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHsgcGVybWlzc2FvSW5pY2lhbCwgcGVybWlzc2FvQ2hlY2tvdXQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgeyB1c3VhcmlvLCBmcmV0ZVNlbGVjaW9uYWRvIH0gPSB0aGlzLnByb3BzO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coJ2ZyZXRlIHNlbGVjaW9uYWRvOiAnLCBmcmV0ZVNlbGVjaW9uYWRvKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoZWNrb3V0IGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgIENPTkNMVUlORE8gU0VVIFBFRElET1xyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPERhZG9zQ2xpZW50ZSBcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvPXt1c3VhcmlvfSBcclxuICAgICAgICAgICAgICAgICAgICBwZXJtaXNzYW9JbmljaWFsPXtwZXJtaXNzYW9JbmljaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBlcm1pdGlyPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcGVybWlzc2FvSW5pY2lhbDogdHJ1ZSB9KX0gLz5cclxuICAgICAgICAgICAgICAgIHsgKCBwZXJtaXNzYW9JbmljaWFsIHx8IHVzdWFyaW8gKSAmJiA8RGFkb3NFbnRyZWdhIC8+fVxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAoIHBlcm1pc3Nhb0luaWNpYWwgfHwgdXN1YXJpbyApICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdWJtaXREYWRvc0NsaWVudGUgcGVybWl0aXI9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwZXJtaXNzYW9DaGVja291dDogdHJ1ZSB9KX0vPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgeyBwZXJtaXNzYW9DaGVja291dCAmJiA8RGFkb3NGcmV0ZSAvPn1cclxuICAgICAgICAgICAgICAgIHsgcGVybWlzc2FvQ2hlY2tvdXQgJiYgPERhZG9zUGFnYW1lbnRvIC8+fVxyXG4gICAgICAgICAgICAgICAgeyBwZXJtaXNzYW9DaGVja291dCAmJiA8RGFkb3NQZWRpZG8gLz59XHJcbiAgICAgICAgICAgICAgICB7IHBlcm1pc3Nhb0NoZWNrb3V0ICYmIDxDaGVja291dEJ1dHRvbiAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdXN1YXJpbzogc3RhdGUuYXV0aC51c3VhcmlvLFxyXG4gICAgZnJldGVTZWxlY2lvbmFkbzogc3RhdGUuY2FycmluaG8uZnJldGVTZWxlY2lvbmFkb1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpKENoZWNrb3V0Q29udGFpbmVyKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEZvcm1JbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtU2ltcGxlcyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMnO1xyXG5pbXBvcnQgQWxlcnRHZXJhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsZXJ0L0dlcmFsJztcclxuXHJcbmNsYXNzIENsaWVudGVMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBzZW5oYTogXCJcIixcclxuICAgICAgICBhdmlzbzogbnVsbCxcclxuICAgICAgICBlcnJvczoge31cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJBdmlzb0RlUmVnaXN0cm8oKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkNvbXByYXIgY29tbyBWaXNpdGFudGUvUmVhbGl6YXIgUmVnaXN0cm88L2gyPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucGVybWl0aXIoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q09OVElOVUFSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSgpe1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHNlbmhhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IGVycm9zID0ge307XHJcblxyXG4gICAgICAgIGlmKCFlbWFpbCkgZXJyb3MuZW1haWwgPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IGVtYWlsXCI7XHJcbiAgICAgICAgaWYoIXNlbmhhKSBlcnJvcy5zZW5oYSA9IFwiUHJlZW5jaGEgYXF1aSBjb20gYSBzdWEgc2VuaGFcIjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9zLCBhdmlzbzogbnVsbCB9KTtcclxuICAgICAgICByZXR1cm4gIShPYmplY3Qua2V5cyhlcnJvcykubGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoZmllbGQsIGUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiBlLnRhcmdldC52YWx1ZSB9LCAoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLnZhbGlkYXRlKCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHNlbmhhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMucHJvcHMuYXV0ZW50aWNhcih7IGVtYWlsLCBwYXNzd29yZDogc2VuaGEgfSwgZmFsc2UsIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnJvcikgdGhpcy5zZXRTdGF0ZSh7IGF2aXNvOiB7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJGb3JtTG9naW4oKXtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBzZW5oYSwgZXJyb3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5GYXplciBMb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8QWxlcnRHZXJhbCBhdmlzbz17dGhpcy5zdGF0ZS5hdmlzb30gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn0gXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShcImVtYWlsXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZW5oYX0gXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17XCJzZW5oYVwifSBcclxuICAgICAgICAgICAgICAgICAgICBlcnJvPXtlcnJvcy5zZW5oYX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbmhhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwic2VuaGFcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RU5UUkFSPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNsaWVudGUtTG9naW4gZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICB7IHRoaXMucmVuZGVyQXZpc29EZVJlZ2lzdHJvKCkgfVxyXG4gICAgICAgICAgICAgICAgeyB0aGlzLnJlbmRlckZvcm1Mb2dpbigpIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIGFjdGlvbnMpKENsaWVudGVMb2dpbik7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtU2ltcGxlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0cy9Gb3JtU2ltcGxlcyc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHt2YWxpZGF0ZUNQRn0gZnJvbSAnLi4vLi4vdXRpbHMvdmFsaWRhdGUnO1xyXG5pbXBvcnQge2Zvcm1hdERhdGFEZU5hc2NpbWVudG8sIGZvcm1hdFRlbGVmb25lLCBmb3JtYXRDUEZ9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCc7XHJcblxyXG5jbGFzcyBEYWRvc0NsaWVudGVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGVycm9zOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1xyXG4gICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgc2VuaGE6IFwiXCIsXHJcbiAgICAgICAgICAgIG5vbWU6IHRoaXMucHJvcHMuY2xpZW50ZSA/IHRoaXMucHJvcHMuY2xpZW50ZS5ub21lIDogXCJcIixcclxuICAgICAgICAgICAgQ1BGOiB0aGlzLnByb3BzLmNsaWVudGUgPyB0aGlzLnByb3BzLmNsaWVudGUuY3BmIDogXCJcIixcclxuICAgICAgICAgICAgdGVsZWZvbmU6IHRoaXMucHJvcHMuY2xpZW50ZSAmJiB0aGlzLnByb3BzLmNsaWVudGUudGVsZWZvbmVzID8gXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsaWVudGUudGVsZWZvbmVzWzBdIDogXCJcIixcclxuICAgICAgICAgICAgZGF0YURlTmFzY2ltZW50bzogdGhpcy5wcm9wcy5jbGllbnRlID8gXHJcbiAgICAgICAgICAgICAgICBtb21lbnQodGhpcy5wcm9wcy5jbGllbnRlLmRhdGFEZU5hc2NpbWVudG8pLmZvcm1hdChcIkREL01NL1lZWVlcIikgOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmICghcHJldlByb3BzLmNsaWVudGUgJiYgdGhpcy5wcm9wcy5jbGllbnRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtub21lLCBjcGYsIHRlbGVmb25lcywgZGF0YURlTmFzY2ltZW50b30gPSB0aGlzLnByb3BzLmNsaWVudGU7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0Rm9ybSh7XHJcbiAgICAgICAgICAgICAgICBub21lLCBDUEY6IGNwZiwgdGVsZWZvbmU6IHRlbGVmb25lc1swXSwgXHJcbiAgICAgICAgICAgICAgICBkYXRhRGVOYXNjaW1lbnRvOiBtb21lbnQoZGF0YURlTmFzY2ltZW50bykuZm9ybWF0KFwiREQvTU0vWVlZWVwiKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKXtcclxuICAgICAgICBjb25zdCB7ZW1haWwsIHNlbmhhLCBub21lLCBDUEYsIGRhdGFEZU5hc2NpbWVudG8sIHRlbGVmb25lfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zdCB7dXN1YXJpb30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGVycm9zID0ge307XHJcblxyXG4gICAgICAgIGlmICghdXN1YXJpbyAmJiEgZW1haWwpIGVycm9zLmVtYWlsID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBlbWFpbFwiO1xyXG4gICAgICAgIGlmICghdXN1YXJpbyAmJiEgc2VuaGEpIGVycm9zLnNlbmhhID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBhIHN1YSBzZW5oYVwiO1xyXG5cclxuICAgICAgICBpZiAoIW5vbWUpIGVycm9zLm5vbWUgPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IG5vbWVcIjtcclxuICAgICAgICBpZiAoIUNQRiB8fCBDUEYubGVuZ3RoICE9PSAxNCkgZXJyb3MuQ1BGID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBDUEZcIjtcclxuICAgICAgICBpZiAoQ1BGICYmIENQRi5sZW5ndGggPT09IDE0ICYmICF2YWxpZGF0ZUNQRihDUEYpKSBcclxuICAgICAgICAgICAgZXJyb3MuQ1BGID0gXCJQcmVlbmNoYSBhcXVpIGNvbSBvIHNldSBDUEYgY29ycmV0YW1lbnRlXCI7XHJcbiAgICAgICAgaWYgKCFkYXRhRGVOYXNjaW1lbnRvIHx8IGRhdGFEZU5hc2NpbWVudG8ubGVuZ3RoICE9PSAxMClcclxuICAgICAgICAgICAgZXJyb3MuZGF0YURlTmFzY2ltZW50byA9IFwiUHJlZW5jaGEgYXF1aSBjb20gYSBzdWEgZGF0YSBkZSBuYXNjaW1lbnRvXCI7XHJcbiAgICAgICAgaWYgKCF0ZWxlZm9uZSB8fCB0ZWxlZm9uZS5sZW5ndGggPCAxMSlcclxuICAgICAgICAgICAgZXJyb3MudGVsZWZvbmUgPSBcIlByZWVuY2hhIGFxdWkgY29tIG8gc2V1IHRlbGVmb25lXCI7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgKHtlcnJvc30pO1xyXG4gICAgICAgIHJldHVybiAhKE9iamVjdC5rZXlzKGVycm9zKS5sZW5ndGggPiAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSA9IChmaWVsZCwgZSwgdmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNldEZvcm0oe1tmaWVsZF06IHZhbHVlIHx8IGUudGFyZ2V0LnZhbHVlfSwgbnVsbClcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLnZhbGlkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRhZG9zUmVnaXN0cm8gKCkge1xyXG4gICAgICAgIGNvbnN0IHtlbWFpbCwgc2VuaGF9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTEgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtlbWFpbCB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiRS1tYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJFLW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJlbWFpbFwiLCBlKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c2VuaGEgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwic2VuaGFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlNlbmhhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJTZW5oYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJzZW5oYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3Muc2VuaGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwic2VuaGFcIiwgZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYWRvc1VzdWFyaW8oKSB7XHJcbiAgICAgICAgY29uc3Qge25vbWUsIENQRiwgZGF0YURlTmFzY2ltZW50bywgdGVsZWZvbmV9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHtlcnJvc30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTEgZmxleCB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtU2ltcGxlcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7bm9tZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJub21lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJOb21lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJOb21lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3Mubm9tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJub21lXCIsIGUpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtDUEYgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiQ1BGXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJDUEZcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkNQRlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm8gPSB7ZXJyb3MuQ1BGfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpID0+IHRoaXMub25DaGFuZ2UoXCJDUEZcIiwgZSwgZm9ybWF0Q1BGKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiZmxleC0xIGZsZXggaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1TaW1wbGVzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7ZGF0YURlTmFzY2ltZW50byB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy5kYXRhRGVOYXNjaW1lbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZGF0YURlTmFzY2ltZW50b1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkREL01NL0FBQUFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJEYXRhIGRlIE5hc2NpbWVudG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKSA9PiB0aGlzLm9uQ2hhbmdlKFwiZGF0YURlTmFzY2ltZW50b1wiLCBlLCBmb3JtYXREYXRhRGVOYXNjaW1lbnRvKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVNpbXBsZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHt0ZWxlZm9uZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJybyA9IHtlcnJvcy50ZWxlZm9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInRlbGVmb25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiKDM0KSAxMjM0LTU2NzhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJUZWxlZm9uZS9DZWx1bGFyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSkgPT4gdGhpcy5vbkNoYW5nZShcInRlbGVmb25lXCIsIGUsIGZvcm1hdFRlbGVmb25lKGUudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj4gREFET1MgRE8gQ0xJRU5URSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMudXN1YXJpbyAmJiB0aGlzLnJlbmRlckRhZG9zUmVnaXN0cm8oKX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckRhZG9zVXN1YXJpbygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgdXN1YXJpbzogc3RhdGUuYXV0aC51c3VhcmlvLFxyXG4gICAgdG9rZW46IHN0YXRlLmF1dGgudG9rZW4sXHJcbiAgICBjbGllbnRlOiBzdGF0ZS5jbGllbnRlLmNsaWVudGUsXHJcbiAgICBmb3JtOiBzdGF0ZS5jaGVja291dC5mb3JtXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbnMpIChEYWRvc0NsaWVudGVDb250YWluZXIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUGFnaW5hcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpc3Rhcy9QYWdpbmFzJztcclxuaW1wb3J0IFJlZGVzU29jaWFpcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpc3Rhcy9SZWRlc1NvY2lhaXMnO1xyXG5pbXBvcnQgRGFkb3NEYUxvamEgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JdGVtL0RhZG9zRGFMb2phJztcclxuXHJcbmNsYXNzIFJvZGFwZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJvZGFwZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmVkZXNTb2NpYWlzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhZG9zRGFMb2phIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb2RhcGU7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5pbXBvcnQgQ2FiZWNhbGhvIGZyb20gJy4uL2NvbnRhaW5lcnMvQ2FiZWNhbGhvJztcclxuaW1wb3J0IENoZWNrb3V0Q29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQ2hlY2tvdXQnO1xyXG5pbXBvcnQgUm9kYXBlIGZyb20gJy4uL2NvbnRhaW5lcnMvUm9kYXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrb3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3Jlc30pIHtcclxuICAgICAgICBpZihyZXMpIHtcclxuICAgICAgICAgICAgcmVzLndyaXRlSGVhZCgzMDIsIHtMb2NhdGlvbjogXCIvY2FycmluaG9cIn0pO1xyXG4gICAgICAgICAgICByZXMuZW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dCBcclxuICAgICAgICAgICAgICAgIHRpdGxlID0gXCJDaGVjay1vdXQgfCBMT0pBIElUIC0gTWVsaG9yZXMgcHJvZHV0b3MgZGUgdGVjbm9sb2dpYVwiXHJcbiAgICAgICAgICAgICAgICBwYWdTZWd1cm8+XHJcbiAgICAgICAgICAgICAgICA8Q2FiZWNhbGhvIHNpbXBsZXMgLz5cclxuICAgICAgICAgICAgICAgIDxDaGVja291dENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPFJvZGFwZSAvPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBcclxuICAgIEFVVEVOVElDQVJfVE9LRU4sXHJcbiAgICBBVVRFTlRJQ0FSLFxyXG4gICAgVVNFUixcclxuICAgIERFU0FVVEVOVElDQVJcclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFQSSwgdmVyc2FvIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgZmV0Y2hDbGllbnRlIH0gZnJvbSAnLi9jbGllbnRlQWN0aW9ucyc7XHJcbmltcG9ydCB7IHNldENvb2tpZSwgcmVtb3ZlQ29va2llIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29va2llJztcclxuaW1wb3J0IHsgZ2V0SGVhZGVycyB9IGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGVycm9ySGFuZGxpbmcgZnJvbSAnLi9lcnJvckhhbmRsaW5nJztcclxuXHJcbmV4cG9ydCBjb25zdCByZWF1dGhlbnRpY2F0ZSA9IHRva2VuID0+ICh7IHR5cGU6IEFVVEVOVElDQVJfVE9LRU4sIHBheWxvYWQ6IHRva2VuIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoeyB0b2tlbiB9KSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvdXN1YXJpb3NgLCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBVU0VSLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhLnVzdWFyaW8gfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXV0ZW50aWNhciA9ICh7IGVtYWlsLCBwYXNzd29yZCB9LCBnb1RvID0gZmFsc2UsIGNiKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS91c3Vhcmlvcy9sb2dpbmAsIHtlbWFpbCwgcGFzc3dvcmR9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0Q29va2llKCd0b2tlbicsIHJlc3BvbnNlLmRhdGEudXN1YXJpby50b2tlbik7XHJcbiAgICAgICAgaWYoZ29UbykgUm91dGVyLnB1c2goZ29Ubyk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBVVRFTlRJQ0FSLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoQ2xpZW50ZShyZXNwb25zZS5kYXRhLnVzdWFyaW8uX2lkLCByZXNwb25zZS5kYXRhLnVzdWFyaW8udG9rZW4pKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXNhdXRlbnRpY2FyID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmVtb3ZlQ29va2llKCd0b2tlbicpO1xyXG4gICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVTQVVURU5USUNBUiB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlbmhhID0gKGRhdGEsIHRva2VuLCBjYikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucHV0KFxyXG4gICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS91c3Vhcmlvc2AsIFxyXG4gICAgICAgIHsgcGFzc3dvcmQ6IGRhdGEubm92YVNlbmhhIH0sIFxyXG4gICAgICAgIGdldEhlYWRlcnModG9rZW4pXHJcbiAgICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFVTRVIsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEudXN1YXJpbyB9KTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZSA9PiBjYihlcnJvckhhbmRsaW5nKGUpKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHJlYXV0aGVudGljYXRlLFxyXG4gICAgZ2V0VXNlcixcclxuICAgIGF1dGVudGljYXIsXHJcbiAgICBkZXNhdXRlbnRpY2FyLFxyXG4gICAgdXBkYXRlU2VuaGFcclxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0FQSSwgdmVyc2FvLCBsb2phfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge2dldENhcnQsIHJlbW92ZUNhcnQsIGNsZWFuQ2FydH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FydCc7XHJcbmltcG9ydCB7XHJcbiAgICBTRVRfQ0FSUklOSE8sXHJcbiAgICBDTEVBTl9DQVJSSU5ITyxcclxuICAgIEZFVENIX1BST0RVVE9fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyxcclxuICAgIEZFVENIX1ZBTE9SX0VOVFJFR0EsXHJcbiAgICBVUERBVEVfUVREX0NBUlQsXHJcbiAgICBVUERBVEVfRlJFVEVfQ0FSVCxcclxuICAgIFJFTU9WRV9QUk9EX0NBUlQsXHJcbiAgICBDTEVBTl9GUkVURVNcclxufSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q2FycmluaG8gPSAoKSA9PiAoe3R5cGU6IFNFVF9DQVJSSU5ITywgY2FycmluaG86IGdldENhcnQoKX0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFuQ2FycmluaG8gPSAoKSA9PiB7XHJcbi8vICAgIGNvbnNvbGUubG9nKCdsaW1wYXIgY2FycmluaG8nKTtcclxuICAgIGNsZWFuQ2FydCgpO1xyXG4gICAgcmV0dXJuIHt0eXBlOiBDTEVBTl9DQVJSSU5IT307XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvQ2FycmluaG8gPSAoaWQsIGlkeENhcnJpbmhvKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3Byb2R1dG9zLyR7aWR9P2xvamE9JHtsb2phfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICB0eXBlOiBGRVRDSF9QUk9EVVRPX0NBUlJJTkhPLCBcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSwgXHJcbiAgICAgICAgICAgIGlkeENhcnJpbmhvIFxyXG4gICAgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hWYXJpYWNvZXNDYXJyaW5obyA9IChpZCwgcHJvZHV0bywgaWR4Q2FycmluaG8pID0+IGRpc3BhdGNoID0+IHtcclxuLy8gICAgY29uc29sZS5sb2coaWQsIHByb2R1dG8sIGlkeENhcnJpbmhvLCBsb2phKVxyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS92YXJpYWNvZXMvJHtpZH0/cHJvZHV0bz0ke3Byb2R1dG99JmxvamE9JHtsb2phfWApXHJcbiAgICAudGhlbiAocmVzcG9uc2UgPT4gZGlzcGF0Y2goeyBcclxuICAgICAgICAgICAgdHlwZTogRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8sIFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCBcclxuICAgICAgICAgICAgaWR4Q2FycmluaG8gXHJcbiAgICB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYWxjdWxhckZyZXRlID0gKGNlcCwgY2FycmluaG8pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnBvc3QoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2VudHJlZ2FzL2NhbGN1bGFyYCwge2NlcCwgY2FycmluaG99KVxyXG4gICAgLnRoZW4gKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgIHR5cGU6IEZFVENIX1ZBTE9SX0VOVFJFR0EsIFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhLCBcclxuICAgICAgICAgICAgY2VwXHJcbiAgICB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVyUHJvZHV0byA9IChpbmRleCkgPT4ge1xyXG4gICAgcmVtb3ZlQ2FydChpbmRleCk7XHJcbiAgICByZXR1cm4ge3R5cGU6IFJFTU9WRV9QUk9EX0NBUlQsIGlkeENhcnJpbmhvOiBpbmRleH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUXVhbnRpZGFkZSA9IChjaGFuZ2UsIGluZGV4KSA9PiAoeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVVBEQVRFX1FURF9DQVJULCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWR4Q2FycmluaG86IGluZGV4IFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjaW9uYXJGcmV0ZSA9IChmcmV0ZVNlbGVjaW9uYWRvKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVQREFURV9GUkVURV9DQVJULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyZXRlU2VsZWNpb25hZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbmV4cG9ydCBjb25zdCBjbGVhbkZyZXRlcyA9ICgpID0+ICh7dHlwZTogQ0xFQU5fRlJFVEVTfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzZXRDYXJyaW5obyxcclxuICAgIGNsZWFuQ2FycmluaG8sXHJcbiAgICBmZXRjaFByb2R1dG9DYXJyaW5obyxcclxuICAgIGZldGNoVmFyaWFjb2VzQ2FycmluaG8sXHJcbiAgICBjYWxjdWxhckZyZXRlLFxyXG4gICAgdXBkYXRlUXVhbnRpZGFkZSxcclxuICAgIHNlbGVjaW9uYXJGcmV0ZSxcclxuICAgIHJlbW92ZXJQcm9kdXRvLFxyXG4gICAgY2xlYW5GcmV0ZXNcclxufTsiLCJpbXBvcnQge1xyXG4gICAgRkVUQ0hfQ0FURUdPUklBUyxcclxuICAgIEZFVENIX0NBVEVHT1JJQSxcclxuICAgIEZFVENIX0NBVEVHT1JJQV9QUk9EVVRPU1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQVBJLCB2ZXJzYW8sIGxvamEgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2F0ZWdvcmlhcyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jYXRlZ29yaWFzL2Rpc3Bvbml2ZWlzP2xvamE9JHtsb2phfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0FURUdPUklBUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ2F0ZWdvcmlhID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2NhdGVnb3JpYXMvJHtpZH0/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfQ0FURUdPUklBLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9kdXRvc0NhdGVnb3JpYSA9IChpZCwgYXR1YWwgPSAwLCBsaW1pdCA9IDIwKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2NhdGVnb3JpYXMvJHtpZH0vcHJvZHV0b3M/bG9qYT0ke2xvamF9Jm9mZnNldD0ke2F0dWFsfSZsaW1pdD0ke2xpbWl0fWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hDYXRlZ29yaWFzLFxyXG4gICAgZmV0Y2hDYXRlZ29yaWEsXHJcbiAgICBmZXRjaFByb2R1dG9zQ2F0ZWdvcmlhXHJcbn07IiwiaW1wb3J0IHtcclxuICAgIFNFVF9GT1JNLFxyXG4gICAgQ0xFQU5fRk9STSxcclxuICAgIFNFVF9USVBPX1BBR0FNRU5UTyxcclxuICAgIEZFVENIX1NFU1NJT05fSUQsXHJcbiAgICBGRVRDSF9TRU5ERVJfSEFTSCxcclxuICAgIE5PVk9fUEVESURPLFxyXG4gICAgUEFHQVJfUEVESURPXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0FQSSwgdmVyc2FvLCBsb2phfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQge2dldENhcnR9IGZyb20gJy4uLy4uL3V0aWxzL2NhcnQnO1xyXG5pbXBvcnQge2dldEhlYWRlcnN9IGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCBlcnJvckhhbmRsaW5nIGZyb20gJy4vZXJyb3JIYW5kbGluZyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge2NsZWFuQ2FycmluaG99IGZyb20gJy4vY2FycmluaG9BY3Rpb25zJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRGb3JtID0gKHBheWxvYWQsIHByZWZpeCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IFNFVF9GT1JNLCBwYXlsb2FkLCBwcmVmaXh9KTtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFuRm9ybSA9ICgpID0+ICh7dHlwZTogQ0xFQU5fRk9STX0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFRpcG9QYWdhbWVudG8gPSAodGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvKSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHt0eXBlOiBTRVRfVElQT19QQUdBTUVOVE8sIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkb30pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25QYWdhbWVudG8gPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGFnYW1lbnRvcy9zZXNzaW9uYCkudGhlbiAoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX1NFU1NJT05fSUQsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGF9KTtcclxuXHJcbiAgICAgICAgUGFnU2VndXJvRGlyZWN0UGF5bWVudC5zZXRTZXNzaW9uSWQocmVzcG9uc2UuZGF0YS5zZXNzaW9uSWQpO1xyXG4gICAgICAgIGxldCBzZW5kZXJIYXNoID0gUGFnU2VndXJvRGlyZWN0UGF5bWVudC5nZXRTZW5kZXJIYXNoKCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEZFVENIX1NFTkRFUl9IQVNILCBzZW5kZXJIYXNofSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgbm92b1BlZGlkbyA9IChcclxuICAgIGZvcm0sIGZyZXRlU2VsZWNpb25hZG8sIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbywgXHJcbiAgICB2YWxvclRvdGFsLCB0b2tlbiwgc2VuZGVySGFzaCwgY2FycmluaG8gPSBnZXRDYXJ0KCksIGNiID0gbnVsbFxyXG4pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLnBvc3QoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BlZGlkb3M/bG9qYT0ke2xvamF9YCwge1xyXG4gICAgICAgIGNhcnJpbmhvLFxyXG4gICAgICAgIGVudHJlZ2E6IHtcclxuICAgICAgICAgICAgY3VzdG86IGZyZXRlU2VsZWNpb25hZG8uVmFsb3IucmVwbGFjZSgnLCcsICcuJyksXHJcbiAgICAgICAgICAgIHRpcG86IChmcmV0ZVNlbGVjaW9uYWRvLkNvZGlnbykudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgcHJhem86IGZyZXRlU2VsZWNpb25hZG8uUHJhem9FbnRyZWdhLFxyXG4gICAgICAgICAgICBlbmRlcmVjbzoge1xyXG4gICAgICAgICAgICAgICAgbG9jYWw6IGZvcm0ubG9jYWwsXHJcbiAgICAgICAgICAgICAgICBudW1lcm86IGZvcm0ubnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgY29tcGxlbWVudG86IGZvcm0uY29tcGxlbWVudG8sXHJcbiAgICAgICAgICAgICAgICBiYWlycm86IGZvcm0uYmFpcnJvLFxyXG4gICAgICAgICAgICAgICAgY2lkYWRlOiBmb3JtLmNpZGFkZSxcclxuICAgICAgICAgICAgICAgIGVzdGFkbzogZm9ybS5lc3RhZG8sXHJcbiAgICAgICAgICAgICAgICBDRVA6IGZvcm0uQ0VQXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2FtZW50bzoge1xyXG4gICAgICAgICAgICB2YWxvcjogdGlwb1BhZ2FtZW50b1NlbGVjaW9uYWRvID09PSBcImNhcnRhb1wiID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0ucGFyY2VsYXNDYXJ0YW9TZWxlY2lvbmFkYS50b3RhbEFtb3VudCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbG9yVG90YWwsXHJcbiAgICAgICAgICAgIGZvcm1hOiB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiY2FydGFvXCIgPyBcImNyZWRpdENhcmRcIiA6IFwiYm9sZXRvXCIsXHJcbiAgICAgICAgICAgIHBhcmNlbGFzOiB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8gPT09IFwiY2FydGFvXCIgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5wYXJjZWxhc0NhcnRhb1NlbGVjaW9uYWRhLnF1YW50aXR5IDogMSxcclxuICAgICAgICAgICAgZW5kZXJlY29FbnRyZWdhSWd1YWxDb2JyYW5jYTogZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EsXHJcbiAgICAgICAgICAgIGVuZGVyZWNvOiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbDogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmxvY2FsIDogZm9ybS5sb2NhbCxcclxuICAgICAgICAgICAgICAgIG51bWVybzogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLm51bWVybyA6IGZvcm0ubnVtZXJvLFxyXG4gICAgICAgICAgICAgICAgY29tcGxlbWVudG86ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5jb21wbGVtZW50byA6IGZvcm0uY29tcGxlbWVudG8sXHJcbiAgICAgICAgICAgICAgICBiYWlycm86ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5iYWlycm8gOiBmb3JtLmJhaXJybyxcclxuICAgICAgICAgICAgICAgIGNpZGFkZTogIWZvcm0uZGFkb3NFbnRyZWdhSWd1YWxEYWRvc0NvYnJhbmNhID8gZm9ybS5kYWRvc0NvYnJhbmNhLmNpZGFkZSA6IGZvcm0uY2lkYWRlLFxyXG4gICAgICAgICAgICAgICAgZXN0YWRvOiAhZm9ybS5kYWRvc0VudHJlZ2FJZ3VhbERhZG9zQ29icmFuY2EgPyBmb3JtLmRhZG9zQ29icmFuY2EuZXN0YWRvIDogZm9ybS5lc3RhZG8sXHJcbiAgICAgICAgICAgICAgICBDRVA6ICFmb3JtLmRhZG9zRW50cmVnYUlndWFsRGFkb3NDb2JyYW5jYSA/IGZvcm0uZGFkb3NDb2JyYW5jYS5DRVAgOiBmb3JtLkNFUFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXJ0YW86IHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbyA9PT0gXCJjYXJ0YW9cIiA/IHtcclxuICAgICAgICAgICAgICAgIG5vbWVDb21wbGV0bzogZm9ybS5ub21lQ2FydGFvLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgIGNvZGlnb0FyZWE6IGZvcm0udGVsZWZvbmUuc2xpY2UoMCwyKSxcclxuICAgICAgICAgICAgICAgIHRlbGVmb25lOiBmb3JtLnRlbGVmb25lLnNsaWNlKDIpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgIGRhdGFEZU5hc2NpbWVudG86IGZvcm0uZGF0YURlTmFzY2ltZW50byxcclxuICAgICAgICAgICAgICAgIGNyZWRpdF9jYXJkX3Rva2VuOiBmb3JtLmNyZWRpdF9jYXJkX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgY3BmOiBmb3JtLkNQRiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSA6IHVuZGVmaW5lZCBcclxuICAgICAgICB9XHJcbiAgICB9LCBnZXRIZWFkZXJzKHRva2VuKSlcclxuICAgIC50aGVuIChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6IE5PVk9fUEVESURPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgICAgZGlzcGF0Y2gocGFnYXJQZWRpZG8ocmVzcG9uc2UuZGF0YS5wZWRpZG8ucGFnYW1lbnRvLl9pZCwgdG9rZW4sIHNlbmRlckhhc2gsIGNiKSk7IFxyXG59KVxyXG4gICAgLmNhdGNoKGUgPT4gY2IgKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdhclBlZGlkbyA9IChpZCwgdG9rZW4sIHNlbmRlckhhc2gsIGNiID0gbnVsbCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgIGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wYWdhbWVudG9zL3BhZ2FyLyR7aWR9P2xvamE9JHtsb2phfWAsIFxyXG4gICAgICAgICAgICB7c2VuZGVySGFzaH0sIFxyXG4gICAgICAgICAgICBnZXRIZWFkZXJzKHRva2VuKVxyXG4pXHJcbi50aGVuIChyZXNwb25zZSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogUEFHQVJfUEVESURPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICBjYihudWxsKTtcclxuICAgIFJvdXRlci5wdXNoKCcvc3VjZXNzbycpO1xyXG4gICAgZGlzcGF0Y2goY2xlYW5DYXJyaW5obygpKTsgICAgICAgIFxyXG59KVxyXG4uY2F0Y2goZSA9PiBjYiAoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59XHJcbi8qXHJcbmV4cG9ydCBjb25zdCBwYWdhclBlZGlkbz0gKGlkLCB0b2tlbiwgc2VuZGVySGFzaCwgY2IgPSBudWxsKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBjYihudWxsKTtcclxuICAgIFJvdXRlci5wdXNoKCcvc3VjZXNzbycpO1xyXG4gICAgZGlzcGF0Y2goY2xlYW5DYXJyaW5obygpKTsgICAgICAgIFxyXG59O1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzZXRGb3JtLFxyXG4gICAgY2xlYW5Gb3JtLFxyXG4gICAgc2V0VGlwb1BhZ2FtZW50byxcclxuICAgIGdldFNlc3Npb25QYWdhbWVudG8sXHJcbiAgICBub3ZvUGVkaWRvLFxyXG4gICAgcGFnYXJQZWRpZG9cclxufTsiLCJpbXBvcnQgeyBcclxuICAgIEZFVENIX0NMSUVOVEUsXHJcbiAgICBMT0dPVVRfQ0xJRU5URVxyXG59IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtBUEksIHZlcnNhbywgbG9qYX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtzZXRDb29raWV9IGZyb20gJy4uLy4uL3V0aWxzL2Nvb2tpZSc7XHJcbmltcG9ydCB7Z2V0SGVhZGVyc30gZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7YXV0ZW50aWNhciwgZGVzYXV0ZW50aWNhcn0gZnJvbSAnLi9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCBlcnJvckhhbmRsaW5nIGZyb20gJy4vZXJyb3JIYW5kbGluZyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmF3RGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgICBsZXQgX2RhdGEgPSBkYXRhLnNwbGl0KCcvJyk7XHJcbiAgICBsZXQgYW5vID0gX2RhdGFbMl07XHJcbiAgICBsZXQgX21lcyA9IE51bWJlcihfZGF0YVsxXSk7XHJcbiAgICBsZXQgbWVzID0gX21lcyA8IDEwID8gXCIwXCIgKyBfbWVzIDogX21lcztcclxuICAgIGxldCBfZGlhID0gTnVtYmVyKF9kYXRhWzBdKTtcclxuICAgIGxldCBkaWEgPSBfZGlhIDwgMTAgPyBcIjBcIiArIF9kaWE6IF9kaWE7XHJcbiAgICByZXR1cm4gYCR7YW5vfS0ke21lc30tJHtkaWF9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENsaWVudGUgPSAoaWQsIHRva2VuKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL2NsaWVudGVzLyR7aWR9P2xvamE9JHtsb2phfWAsIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4gKChyZXNwb3N0YSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBGRVRDSF9DTElFTlRFLCBwYXlsb2FkOiByZXNwb3N0YS5kYXRhfSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2ggKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3Q2xpZW50ZSA9IChmb3JtLCBjYikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucG9zdChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvY2xpZW50ZXM/bG9qYT0ke2xvamF9YCwge1xyXG4gICAgICAgIG5vbWU6IGZvcm0ubm9tZSxcclxuICAgICAgICBzZW5oYTogZm9ybS5zZW5oYSxcclxuICAgICAgICBjcGY6IGZvcm0uQ1BGLFxyXG4gICAgICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxyXG4gICAgICAgIHRlbGVmb25lczogW2Zvcm0udGVsZWZvbmVdLFxyXG4gICAgICAgIGVuZGVyZWNvOiB7XHJcbiAgICAgICAgICAgIGxvY2FsOiBmb3JtLmxvY2FsLFxyXG4gICAgICAgICAgICBudW1lcm86IGZvcm0ubnVtZXJvLFxyXG4gICAgICAgICAgICBjb21wbGVtZW50bzogZm9ybS5jb21wbGVtZW50byxcclxuICAgICAgICAgICAgYmFpcnJvOiBmb3JtLmJhaXJybyxcclxuICAgICAgICAgICAgY2lkYWRlOiBmb3JtLmNpZGFkZSxcclxuICAgICAgICAgICAgZXN0YWRvOiBmb3JtLmVzdGFkbyxcclxuICAgICAgICAgICAgQ0VQOiBmb3JtLkNFUFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YURlTmFzY2ltZW50bzogZ2V0UmF3RGF0YShmb3JtLmRhdGFEZU5hc2NpbWVudG8pXHJcbiAgICB9KVxyXG4gICAgLnRoZW4gKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBGRVRDSF9DTElFTlRFLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goYXV0ZW50aWNhcih7ZW1haWw6IGZvcm0uZW1haWwsIHNlbmhhOiBmb3JtLnNlbmhhfSwgbnVsbCwgY2IpKTtcclxuICAgICAgICBjYihudWxsKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2ggKGUgPT4gY2IoZXJyb3JIYW5kbGluZyhlKSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNsaWVudGUgPSAoZm9ybSwgaWQsIHRva2VuLCBjYikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucHV0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9jbGllbnRlcy8ke2lkfT9sb2phPSR7bG9qYX1gLCB7XHJcbiAgICAgICAgbm9tZTogZm9ybS5ub21lLFxyXG4gICAgICAgIGNwZjogZm9ybS5DUEYsXHJcbiAgICAgICAgdGVsZWZvbmVzOiBbZm9ybS50ZWxlZm9uZV0sXHJcbiAgICAgICAgZW5kZXJlY286IHtcclxuICAgICAgICAgICAgbG9jYWw6IGZvcm0ubG9jYWwsXHJcbiAgICAgICAgICAgIG51bWVybzogZm9ybS5udW1lcm8sXHJcbiAgICAgICAgICAgIGNvbXBsZW1lbnRvOiBmb3JtLmNvbXBsZW1lbnRvLFxyXG4gICAgICAgICAgICBiYWlycm86IGZvcm0uYmFpcnJvLFxyXG4gICAgICAgICAgICBjaWRhZGU6IGZvcm0uY2lkYWRlLFxyXG4gICAgICAgICAgICBlc3RhZG86IGZvcm0uZXN0YWRvLFxyXG4gICAgICAgICAgICBDRVA6IGZvcm0uQ0VQXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhRGVOYXNjaW1lbnRvOiBnZXRSYXdEYXRhKGZvcm0uZGF0YURlTmFzY2ltZW50bylcclxuICAgIH0sIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4gKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiBGRVRDSF9DTElFTlRFLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgICAgY2IobnVsbCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoIChlID0+IGNiKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dENsaWVudGUgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChkZXNhdXRlbnRpY2FyKCkpO1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6IExPR09VVF9DTElFTlRFfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZmV0Y2hDbGllbnRlLFxyXG4gICAgbmV3Q2xpZW50ZSxcclxuICAgIHVwZGF0ZUNsaWVudGUsXHJcbiAgICBsb2dvdXRDbGllbnRlXHJcbn07IiwiY29uc3QgZXJyb3JIYW5kbGluZyA9IChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YSA6IG51bGwpO1xyXG4gICAgaWYoIWVycm9yLnJlc3BvbnNlIHx8ICFlcnJvci5yZXNwb25zZS5kYXRhKXtcclxuICAgICAgICByZXR1cm4geyBzdGF0dXM6IDUwMCwgbWVzc2FnZTogXCJPY29ycmV1IHVtIGVycm8gbm8gc2Vydmlkb3IuIFRlbnRlIG5vdmFtZW50ZS5cIiB9O1xyXG4gICAgfVxyXG4gICAgaWYoZXJyb3IucmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09IDQwMSl7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiA0MDEsIG1lc3NhZ2U6IFwiVm9jw6ogbsOjbyB0ZW0gYXV0b3JpemHDp8OjbyBwYXJhIGFjZXNzYXIgZXNzZXMgZGFkb3MuXCIgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgfHwgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcjtcclxuICAgIGlmKF9lcnJvcnMgJiYgdHlwZW9mIF9lcnJvcnMgPT09IFwic3RyaW5nXCIpIHJldHVybiB7IHN0YXR1czogNDAwLCBtZXNzYWdlOiBfZXJyb3JzIH07XHJcblxyXG4gICAgbGV0IG1zZyA9ICdFcnJvOiAnO1xyXG4gICAgaWYoIUFycmF5LmlzQXJyYXkoX2Vycm9ycykpe1xyXG4gICAgICAgIE9iamVjdC5rZXlzKF9lcnJvcnMpLmZvckVhY2goKGVycm8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIG1zZyArPSBgJHtlcnJvfSAkeyBfZXJyb3JzW2Vycm9dLm1lc3NhZ2UgfHwgKF9lcnJvcnNbZXJyb10ucHJvcGVydGllcyA/IF9lcnJvcnNbZXJyb10ucHJvcGVydGllcy5tZXNzYWdlIDogXCJcIikgfHwgX2Vycm9yc1tlcnJvXSB9XFxuYDsgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICBtc2cgKz0gYCR7ZXJyb30gJHtfZXJyb3JzW2Vycm9dLm1lc3NhZ2UgfHwgX2Vycm9yc1tlcnJvXX1cXG5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtc2cgKz0gYFByZWVuY2hhIGNvcnJldGFtZW50ZSAkeyBfZXJyb3JzLmxlbmd0aCA+IDEgPyBcIm9zIGNhbXBvcyBcIiA6IFwibyBjYW1wbyBcIiB9IGRlOmA7XHJcbiAgICAgICAgX2Vycm9ycy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGl0ZW0uZmllbGRbaXRlbS5maWVsZC5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgbXNnICs9IGAgJHtmaWVsZH0ke2luZGV4ID09PSBfZXJyb3JzLmxlbmd0aCAtIDEgPyBcIi5cIiA6IFwiLFwifWA7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN0YXR1czogNDAwLCBtZXNzYWdlOiBtc2cgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5kbGluZzsiLCJleHBvcnQgY29uc3QgZ2V0SGVhZGVycyA9ICh0b2tlbikgPT4gKHsgaGVhZGVyczogeyBcIkF1dGhvcml6YXRpb25cIjogYEVjb21tZXJjZSAke3Rva2VufWAgfSB9KTsiLCJpbXBvcnQgYXV0aEFjdGlvbnMgZnJvbSAnLi9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCBjYXRlZ29yaWFBY3Rpb25zIGZyb20gJy4vY2F0ZWdvcmlhQWN0aW9ucyc7XHJcbmltcG9ydCBsb2phQWN0aW9ucyBmcm9tICcuL2xvamFBY3Rpb25zJztcclxuaW1wb3J0IHByb2R1dG9BY3Rpb25zIGZyb20gJy4vcHJvZHV0b0FjdGlvbnMnO1xyXG5pbXBvcnQgY2FycmluaG9BY3Rpb25zIGZyb20gJy4vY2FycmluaG9BY3Rpb25zJztcclxuaW1wb3J0IGNsaWVudGVBY3Rpb25zIGZyb20gJy4vY2xpZW50ZUFjdGlvbnMnO1xyXG5pbXBvcnQgY2hlY2tvdXRBY3Rpb25zIGZyb20gJy4vY2hlY2tvdXRBY3Rpb25zJztcclxuaW1wb3J0IHBlZGlkb0FjdGlvbnMgZnJvbSAnLi9wZWRpZG9BY3Rpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC4uLmF1dGhBY3Rpb25zLFxyXG4gICAgLi4uY2F0ZWdvcmlhQWN0aW9ucyxcclxuICAgIC4uLmxvamFBY3Rpb25zLFxyXG4gICAgLi4ucHJvZHV0b0FjdGlvbnMsXHJcbiAgICAuLi5jYXJyaW5ob0FjdGlvbnMsXHJcbiAgICAuLi5jbGllbnRlQWN0aW9ucyxcclxuICAgIC4uLmNoZWNrb3V0QWN0aW9ucyxcclxuICAgIC4uLnBlZGlkb0FjdGlvbnNcclxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgRkVUQ0hfREFET1NcclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEFQSSwgdmVyc2FvLCBsb2phIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaERhZG9zTG9qYSA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9sb2phcy8ke2xvamF9P2xvamE9JHtsb2phfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHsgdHlwZTogRkVUQ0hfREFET1MsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZldGNoRGFkb3NMb2phXHJcbn07IiwiaW1wb3J0IHtcclxuICAgIEZFVENIX1BFRElET1MsXHJcbiAgICBGRVRDSF9QRURJRE8sXHJcbiAgICBDTEVBTl9QRURJRE8sXHJcbiAgICBDQU5DRUxBUl9QRURJRE9cclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0FQSSwgdmVyc2FvLCBsb2phfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgZXJyb3JIYW5kbGluZyBmcm9tICcuL2Vycm9ySGFuZGxpbmcnO1xyXG5pbXBvcnQge2dldEhlYWRlcnN9IGZyb20gJy4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQZWRpZG9zID0gKHtvZmZzZXQsIGxpbWl0LCB0b2tlbn0pID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChcclxuICAgICAgICBgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcGVkaWRvcz9sb2phPSR7bG9qYX0mb2Zmc2V0PSR7b2Zmc2V0fSZsaW1pdD0ke2xpbWl0fWAsXHJcbiAgICAgICAgZ2V0SGVhZGVycyh0b2tlbilcclxuICAgIClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHt0eXBlOiBGRVRDSF9QRURJRE9TLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQZWRpZG8gPSAoaWQsIHRva2VuKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3BlZGlkb3MvJHtpZH0/bG9qYT0ke2xvamF9YCwgZ2V0SGVhZGVycyh0b2tlbikpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaCh7dHlwZTogRkVUQ0hfUEVESURPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FuY2VsYXJQZWRpZG8gPSAoaWQsIHRva2VuLCBjYikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZGVsZXRlKGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wZWRpZG9zLyR7aWR9P2xvamE9JHtsb2phfWAsIGdldEhlYWRlcnModG9rZW4pKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoICh7dHlwZTogQ0FOQ0VMQVJfUEVESURPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgICAgY2IobnVsbCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGUgPT4gY2IgKGVycm9ySGFuZGxpbmcoZSkpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhblBlZGlkbyA9ICgpID0+ICh7dHlwZTogQ0xFQU5fUEVESURPfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBmZXRjaFBlZGlkb3MsXHJcbiAgICBmZXRjaFBlZGlkbyxcclxuICAgIGNhbmNlbGFyUGVkaWRvLFxyXG4gICAgY2xlYW5QZWRpZG9cclxufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gICAgRkVUQ0hfUFJPRFVUT1MsXHJcbiAgICBGRVRDSF9QRVNRVUlTQSxcclxuICAgIEZFVENIX1BST0RVVE9TX1BFU1FVSVNBLFxyXG4gICAgRkVUQ0hfUFJPRFVUTyxcclxuICAgIEZFVENIX1BST0RVVE9fQVZBTElBQ09FUyxcclxuICAgIEZFVENIX1BST0RVVE9fVkFSSUFDT0VTLFxyXG4gICAgTk9WQV9BVkFMSUFDQU9cclxufSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEFQSSwgdmVyc2FvLCBsb2phIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmltcG9ydCB7IGdldEhlYWRlcnMgfSBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHV0b3NQYWdpbmFJbmljaWFsID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3Byb2R1dG9zL2Rpc3Bvbml2ZWlzP2xvamE9JHtsb2phfSZvZmZzZXQ9JHswfSZsaW1pdD0kezR9JnNvcnRUeXBlPSR7XCJwcmVjby1jcmVzY2VudGVcIn1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaCh7IHR5cGU6IEZFVENIX1BST0RVVE9TLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hUZXJtbyA9ICh0ZXJtbykgPT4gKHsgdHlwZTogRkVUQ0hfUEVTUVVJU0EsIHRlcm1vIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvZHV0b3NQZXNxdWlzYSA9ICh0ZXJtbywgYXR1YWwgPSAwLCBsaW1pdCA9IDIwKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3Byb2R1dG9zL3NlYXJjaC8ke3Rlcm1vfT9sb2phPSR7bG9qYX0mb2Zmc2V0PSR7YXR1YWx9JmxpbWl0PSR7bGltaXR9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSwgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSwgdGVybW8gfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFByb2R1dG8gPSAoaWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7dmVyc2FvfS9hcGkvcHJvZHV0b3MvJHtpZH0/bG9qYT0ke2xvamF9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9QUk9EVVRPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pKVxyXG4gICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hBdmFsaWFjb2VzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke3ZlcnNhb30vYXBpL3Byb2R1dG9zLyR7aWR9L2F2YWxpYWNvZXM/bG9qYT0ke2xvamF9JmlkPSR7aWR9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMsIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGEgfSkpXHJcbiAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFZhcmlhY29lcyA9IChpZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHt2ZXJzYW99L2FwaS9wcm9kdXRvcy8ke2lkfS92YXJpYWNvZXM/bG9qYT0ke2xvamF9JmlkPSR7aWR9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUywgcGF5bG9hZDogcmVzcG9uc2UuZGF0YSB9KSlcclxuICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5vdmFBdmFsaWFjYW8gPSAoeyBub21lLCB0b2tlbiwgcHJvZHV0bywgdGV4dG8sIHBvbnR1YWNhbyB9LCBjYikgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtBUEl9LyR7dmVyc2FvfS9hcGkvYXZhbGlhY29lcz9sb2phPSR7bG9qYX0mcHJvZHV0bz0ke3Byb2R1dG99YCxcclxuICAgICAgICB7IG5vbWUsIHRleHRvLCBwb250dWFjYW8gfSxcclxuICAgICAgICBnZXRIZWFkZXJzKHRva2VuKVxyXG4gICAgKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IE5PVkFfQVZBTElBQ0FPLCBwYXlsb2FkOiByZXNwb25zZS5kYXRhIH0pO1xyXG4gICAgICAgIGNiKG51bGwpO1xyXG4gICAgfSkuY2F0Y2goZSA9PiBjYihlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGZldGNoUHJvZHV0b3NQYWdpbmFJbmljaWFsLFxyXG4gICAgZmV0Y2hUZXJtbyxcclxuICAgIGZldGNoUHJvZHV0b3NQZXNxdWlzYSxcclxuICAgIGZldGNoUHJvZHV0byxcclxuICAgIGZldGNoQXZhbGlhY29lcyxcclxuICAgIGZldGNoVmFyaWFjb2VzLFxyXG4gICAgbm92YUF2YWxpYWNhb1xyXG59OyIsImV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IFwicmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgIEFVVEVOVElDQVJfVE9LRU4gPSBcIkFVVEVOVElDQVJfVE9LRU5cIixcclxuICAgICAgICAgICAgIFVTRVIgPSBcInVzZXJcIixcclxuICAgICAgICAgICAgIEFVVEVOVElDQVIgPSAnQVVURU5USUNBUicsXHJcbiAgICAgICAgICAgICBGRVRDSF9DQVRFR09SSUFTID0gXCJmZXRjaF9jYXRlZ29yaWFzXCIsXHJcbiAgICAgICAgICAgICBGRVRDSF9EQURPUyA9ICdmZXRjaF9kYWRvcycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPUyA9IFwiRkVUQ0hfUFJPRFVUT1NcIixcclxuICAgICAgICAgICAgIEZFVENIX0NBVEVHT1JJQSA9ICdGRVRDSF9DQVRFR09SSUEnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TID0gJ0ZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRVNRVUlTQSA9ICdGRVRDSF9QRVNRVUlTQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSA9ICdGRVRDSF9QUk9EVVRPU19QRVNRVUlTQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPID0gJ0ZFVENIX1BST0RVVE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTID0gJ0ZFVENIX1BST0RVVE9fQVZBTElBQ09FUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUyA9ICdGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUycsXHJcbiAgICAgICAgICAgICBOT1ZBX0FWQUxJQUNBTyA9ICdOT1ZBX0FWQUxJQUNBTycsXHJcbiAgICAgICAgICAgICBTRVRfQ0FSUklOSE8gPSAnU0VUX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIENMRUFOX0NBUlJJTkhPID0gJ0NMRUFOX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9fQ0FSUklOSE8gPSAnRkVUQ0hfUFJPRFVUT19DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyA9ICdGRVRDSF9WQVJJQUNBT19DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9WQUxPUl9FTlRSRUdBID0gJ0ZFVENIX1ZBTE9SX0VOVFJFR0EnLFxyXG4gICAgICAgICAgICAgVVBEQVRFX1FURF9DQVJUID0gJ1VQREFURV9RVERfQ0FSVCcsXHJcbiAgICAgICAgICAgICBVUERBVEVfRlJFVEVfQ0FSVCA9ICdVUERBVEVfRlJFVEVfQ0FSVCcsXHJcbiAgICAgICAgICAgICBSRU1PVkVfUFJPRF9DQVJUID0gJ1JFTU9WRV9QUk9EX0NBUlQnLFxyXG4gICAgICAgICAgICAgQ0xFQU5fRlJFVEVTID0gJ0NMRUFOX0ZSRVRFUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9DTElFTlRFID0gJ0ZFVENIX0NMSUVOVEUnLFxyXG4gICAgICAgICAgICAgU0VUX0ZPUk0gPSAnU0VUX0ZPUk0nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fRk9STSA9ICdDTEVBTl9GT1JNJyxcclxuICAgICAgICAgICAgIFNFVF9USVBPX1BBR0FNRU5UTyA9ICdTRVRfVElQT19QQUdBTUVOVE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfU0VTU0lPTl9JRCA9ICdGRVRDSF9TRVNTSU9OX0lEJyxcclxuICAgICAgICAgICAgIEZFVENIX1NFTkRFUl9IQVNIID0gJ0ZFVENIX1NFTkRFUl9IQVNIJyxcclxuICAgICAgICAgICAgIE5PVk9fUEVESURPID0gJ05PVk9fUEVESURPJyxcclxuICAgICAgICAgICAgIFBBR0FSX1BFRElETyA9ICdQQUdBUl9QRURJRE8nLFxyXG4gICAgICAgICAgICAgTE9HT1VUX0NMSUVOVEUgPSAnTE9HT1VUX0NMSUVOVEUnLFxyXG4gICAgICAgICAgICAgREVTQVVURU5USUNBUiA9ICdERVNBVVRFTlRJQ0FSJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFRElET1MgPSAnRkVUQ0hfUEVESURPUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRURJRE8gPSAnRkVUQ0hfUEVESURPJyxcclxuICAgICAgICAgICAgIENMRUFOX1BFRElETyA9ICdDTEVBTl9QRURJRE8nLFxyXG4gICAgICAgICAgICAgQ0FOQ0VMQVJfUEVESURPID0gJ0NBTkNFTEFSX1BFRElETyc7IiwiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IF9zYXZlQ2FydCA9IChpdGVtKSA9PiB7XHJcbiAgICBsZXQgY2FydCA9IGdldENhcnQoKTtcclxuXHJcbiAgICBsZXQgZm91bmQ7XHJcbiAgICBjYXJ0ID0gY2FydC5tYXAoKF9pdGVtKSA9PiB7XHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgIF9pdGVtLnByb2R1dG8gPT09IGl0ZW0ucHJvZHV0byAmJlxyXG4gICAgICAgICAgICBfaXRlbS52YXJpYWNhbyA9PT0gaXRlbS52YXJpYWNhbyBcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLl9pdGVtLCBxdWFudGlkYWRlOiBOdW1iZXIoX2l0ZW0ucXVhbnRpZGFkZSkgKyBOdW1iZXIoaXRlbS5xdWFudGlkYWRlKSB9XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiBfaXRlbTtcclxuICAgIH0pO1xyXG4gICAgaWYoIWZvdW5kKSBjYXJ0LnB1c2goaXRlbSk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJAY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJ0ID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkBjYXJ0XCIpIHx8IFwiW11cIik7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYW5DYXJ0ID0gKCkgPT4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJAY2FydFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDYXJ0ID0gKGl0ZW0sIGdvVG9DYXJ0ID0gdHJ1ZSkgPT4ge1xyXG4gICAgX3NhdmVDYXJ0KGl0ZW0pO1xyXG4gICAgaWYoZ29Ub0NhcnQpIFJvdXRlci5wdXNoKFwiL2NhcnJpbmhvXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvdW50SXRlbXNDYXJ0ID0gKCkgPT4gXHJcbiAgICAgICAgICAgIGdldENhcnQoKS5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAoYywgeyBxdWFudGlkYWRlIH0pID0+IFxyXG4gICAgICAgICAgICAgICAgYyArIChOdW1iZXIocXVhbnRpZGFkZSkgfHwgMSkgLCAwKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDYXJ0ID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgY2FydCA9IGdldENhcnQoKTtcclxuICAgIGNhcnQgPSBjYXJ0LnJlZHVjZShcclxuICAgICAgICAoYWxsLCBpdGVtLCBfaW5kZXgpID0+XHJcbiAgICAgICAgaW5kZXggIT09IF9pbmRleCA/IGFsbC5jb25jYXQoW2l0ZW1dKSA6IGFsbCwgW11cclxuICAgICk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkBjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0Q2FydCxcclxuICAgIGFkZENhcnQsXHJcbiAgICBjbGVhbkNhcnQsXHJcbiAgICBnZXRDb3VudEl0ZW1zQ2FydCxcclxuICAgIHJlbW92ZUNhcnRcclxufTsiLCJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIGlmKHByb2Nlc3MuYnJvd3NlcikgY29va2llLnNldChrZXksIHZhbHVlLCB7IGV4cGlyZXM6IDEsIHBhdGg6IFwiL1wiIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xyXG4gICAgaWYocHJvY2Vzcy5icm93c2VyKSBjb29raWUucmVtb3ZlKGtleSwgeyBleHBpcmVzOiAxIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSwgcmVxKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5icm93c2VyID8gXHJcbiAgICAgICAgICAgIGdldENvb2tpZUZyb21Ccm93c2VyKGtleSkgOlxyXG4gICAgICAgICAgICBnZXRDb29raWVGcm9tU2VydmVyKGtleSwgcmVxKVxyXG59XHJcblxyXG5jb25zdCBnZXRDb29raWVGcm9tQnJvd3NlciA9IGtleSA9PiBjb29raWUuZ2V0KGtleSk7XHJcblxyXG5jb25zdCBnZXRDb29raWVGcm9tU2VydmVyID0gKGtleSwgcmVxKSA9PiB7XHJcbiAgICBpZighcmVxLmhlYWRlcnMuY29va2llKSByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgX2Nvb2tpZSA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdChcIjtcIikuZmluZChjID0+IGMudHJpbSgpLnN0YXJ0c1dpdGgoYCR7a2V5fT1gKSk7XHJcbiAgICByZXR1cm4gX2Nvb2tpZSA/IF9jb29raWUuc3BsaXQoXCI9XCIpWzFdIDogdW5kZWZpbmVkO1xyXG59IiwiZXhwb3J0IGNvbnN0IG51bWJlclBhdHRlcm4gPSAvXFxkKy9nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdENFUCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4Q2VwID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgY29uc3QgX2NlcCA9IChhdXhDZXAgfHwgW10pLmpvaW4oJycpO1xyXG4gICAgcmV0dXJuIF9jZXAubGVuZ3RoID4gNSA/IF9jZXAuc2xpY2UoMCw1KSsnLScrX2NlcC5zbGljZSg1LDgpIDogX2NlcDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRDUEYgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGF1eENQRiA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIGNvbnN0IF9DUEYgPSAoYXV4Q1BGIHx8IFtdKS5qb2luKCcnKTsgXHJcbiAgICBpZihfQ1BGLmxlbmd0aCA+IDkpIHJldHVybiBfQ1BGLnNsaWNlKDAsMykgKyAnLicgKyBfQ1BGLnNsaWNlKDMsNikgKyAnLicgKyBfQ1BGLnNsaWNlKDYsOSkgKyAnLScgKyBfQ1BGLnNsaWNlKDksMTEpO1xyXG4gICAgaWYoX0NQRi5sZW5ndGggPiA2KSByZXR1cm4gX0NQRi5zbGljZSgwLDMpICsgJy4nICsgX0NQRi5zbGljZSgzLDYpICsgJy4nICsgX0NQRi5zbGljZSg2LDkpO1xyXG4gICAgaWYoX0NQRi5sZW5ndGggPiAzKSByZXR1cm4gX0NQRi5zbGljZSgwLDMpICsgJy4nICsgX0NQRi5zbGljZSgzLDYpO1xyXG4gICAgcmV0dXJuIF9DUEY7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0YURlTmFzY2ltZW50byA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgYXV4RGF0YSA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIGNvbnN0IF9kYXRhID0gKGF1eERhdGEgfHwgW10pLmpvaW4oJycpOyBcclxuICAgIGlmKF9kYXRhLmxlbmd0aCA+IDQpIHJldHVybiBfZGF0YS5zbGljZSgwLDIpICsgJy8nICsgX2RhdGEuc2xpY2UoMiw0KSArICcvJyArIF9kYXRhLnNsaWNlKDQsOCk7XHJcbiAgICBpZihfZGF0YS5sZW5ndGggPiAyKSByZXR1cm4gX2RhdGEuc2xpY2UoMCwyKSArICcvJyArIF9kYXRhLnNsaWNlKDIsNCk7XHJcbiAgICByZXR1cm4gX2RhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0VGVsZWZvbmUgPSAgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhUZWxlZm9uZSA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIGNvbnN0IF90ZWxlZm9uZSA9IChhdXhUZWxlZm9uZSB8fCBbXSkuam9pbignJyk7ICAgICBcclxuICAgIHJldHVybiBfdGVsZWZvbmUubGVuZ3RoID4gMiA/IF90ZWxlZm9uZS5zbGljZSgwLDIpICsgJyAnICsgX3RlbGVmb25lLnNsaWNlKDIsMTIpIDogX3RlbGVmb25lO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlciA9ICAodmFsdWUsIGxpbWl0KSA9PiB7XHJcbiAgICBjb25zdCBhdXhOID0gKHZhbHVlIHx8IFwiXCIpLm1hdGNoKG51bWJlclBhdHRlcm4pO1xyXG4gICAgY29uc3QgX24gPSAoYXV4TiB8fCBbXSkuam9pbignJyk7ICAgICBcclxuICAgIHJldHVybiBsaW1pdCA/IF9uLnNsaWNlKDAsbGltaXQpIDogX247XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0Q2FydGFvID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBhdXhDYXJ0YW8gPSAodmFsdWUgfHwgXCJcIikubWF0Y2gobnVtYmVyUGF0dGVybik7XHJcbiAgICBjb25zdCBfY2FydGFvID0gKGF1eENhcnRhbyB8fCBbXSkuam9pbignJyk7IFxyXG4gICAgaWYoX2NhcnRhby5sZW5ndGggPiAxMikgXHJcbiAgICAgICAgcmV0dXJuIF9jYXJ0YW8uc2xpY2UoMCw0KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoNCw4KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoOCwxMikgKyAnICcgKyBfY2FydGFvLnNsaWNlKDEyLDE2KTtcclxuICAgIGlmKF9jYXJ0YW8ubGVuZ3RoID4gOCkgXHJcbiAgICAgICAgcmV0dXJuIF9jYXJ0YW8uc2xpY2UoMCw0KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoNCw4KSArICcgJyArIF9jYXJ0YW8uc2xpY2UoOCwxMik7XHJcbiAgICBpZihfY2FydGFvLmxlbmd0aCA+IDQpIFxyXG4gICAgICAgIHJldHVybiBfY2FydGFvLnNsaWNlKDAsNCkgKyAnICcgKyBfY2FydGFvLnNsaWNlKDQsOCk7XHJcbiAgICByZXR1cm4gX2NhcnRhbztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG51bWJlclBhdHRlcm4sXHJcbiAgICBmb3JtYXRDRVAsXHJcbiAgICBmb3JtYXRDUEYsXHJcbiAgICBmb3JtYXREYXRhRGVOYXNjaW1lbnRvLFxyXG4gICAgZm9ybWF0VGVsZWZvbmUsXHJcbiAgICBmb3JtYXROdW1iZXIsXHJcbiAgICBmb3JtYXRDYXJ0YW9cclxufTsiLCJleHBvcnQgY29uc3QgZm9ybWF0TW9uZXkgPSAodmFsdWUpID0+IFwiUiQgXCIgKyBOdW1iZXIodmFsdWUgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb2RpZ29zQ29ycmVpb3MgPSB7XHJcbiAgICBcIjQwMDEwXCI6IFwiU2VkZXhcIixcclxuICAgIFwiNDExMDZcIjogXCJQQUNcIixcclxuICAgIFwiZW50cmVnYV9tb3RvXCI6IFwiRW50cmVnYSBwb3IgTW90b1wiLFxyXG4gICAgXCJyZXRpcmFkYVwiOiBcIlJldGlyYWRhIG5hIExvamFcIlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVTVEFET1MgPSB7XHJcbiAgICBcIkFDXCI6IFwiQWNyZVwiLFxyXG4gICAgXCJBTFwiOiBcIkFsYWdvYXNcIixcclxuICAgIFwiQVBcIjogXCJBbWFww6FcIixcclxuICAgIFwiQU1cIjogXCJBbWF6b25hc1wiLFxyXG4gICAgXCJCQVwiOiBcIkJhaGlhXCIsXHJcbiAgICBcIkNFXCI6IFwiQ2VhcsOhXCIsXHJcbiAgICBcIkRGXCI6IFwiRGlzdHJpdG8gRmVkZXJhbFwiLFxyXG4gICAgXCJFU1wiOiBcIkVzcMOtcml0byBTYW50b1wiLFxyXG4gICAgXCJHT1wiOiBcIkdvacOhc1wiLFxyXG4gICAgXCJNQVwiOiBcIk1hcmFuaMOjb1wiLFxyXG4gICAgXCJNVFwiOiBcIk1hdG8gR3Jvc3NvXCIsXHJcbiAgICBcIk1TXCI6IFwiTWF0byBHcm9zc28gZG8gU3VsXCIsXHJcbiAgICBcIk1HXCI6IFwiTWluYXMgR2VyYWlzXCIsXHJcbiAgICBcIlBBXCI6IFwiUGFyw6FcIixcclxuICAgIFwiUEJcIjogXCJQYXJhw61iYVwiLFxyXG4gICAgXCJQUlwiOiBcIlBhcmFuw6FcIixcclxuICAgIFwiUEVcIjogXCJQZXJuYW1idWNvXCIsXHJcbiAgICBcIlBJXCI6IFwiUGlhdcOtXCIsXHJcbiAgICBcIlJKXCI6IFwiUmlvIGRlIEphbmVpcm9cIixcclxuICAgIFwiUk5cIjogXCJSaW8gR3JhbmRlIGRvIE5vcnRlXCIsXHJcbiAgICBcIlJTXCI6IFwiUmlvIEdyYW5kZSBkbyBTdWxcIixcclxuICAgIFwiUk9cIjogXCJSb25kw7RuaWFcIixcclxuICAgIFwiUlJcIjogXCJSb3JhaW1hXCIsXHJcbiAgICBcIlNDXCI6IFwiU2FudGEgQ2F0YXJpbmFcIixcclxuICAgIFwiU1BcIjogXCJTw6NvIFBhdWxvXCIsXHJcbiAgICBcIlNFXCI6IFwiU2VyZ2lwZVwiLFxyXG4gICAgXCJUT1wiOiBcIlRvY2FudGluc1wiXHJcbn07IiwiaW1wb3J0IHtudW1iZXJQYXR0ZXJufSBmcm9tICcuL2Zvcm1hdCc7XHJcblxyXG5leHBvcnQgY29uc3Qgb25seU51bWJlcnMgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGF1eENlcCA9ICh2YWx1ZSB8fCBcIlwiKS5tYXRjaChudW1iZXJQYXR0ZXJuKTtcclxuICAgIHJldHVybiAoYXV4Q2VwIHx8IFtdKS5qb2luKFwiXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQ1BGID0gKF9zdHJDUEYpID0+IHtcclxuICAgIGNvbnN0IHN0ckNQRiA9IG9ubHlOdW1iZXJzKF9zdHJDUEYpO1xyXG4gICAgaWYgKHN0ckNQRi5sZW5ndGggIT09IDExKSByZXR1cm4gZmFsc2U7XHJcbiAgICBsZXQgc29tYTtcclxuICAgIGxldCByZXN0bztcclxuICAgIHNvbWEgPSAwO1xyXG4gICAgaWYgKHN0ckNQRiA9PSBcIjAwMDAwMDAwMDAwXCIpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgIGZvciAodmFyIGk9MTsgaTw9OTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNvbWEgPSBzb21hICsgcGFyc2VJbnQoc3RyQ1BGLnN1YnN0cmluZyhpLTEsIGkpKSAqICgxMSAtIGkpO1xyXG4gICAgfVxyXG4gICAgcmVzdG8gPSAoc29tYSAqIDEwKSAlIDExO1xyXG4gICBcclxuICAgIGlmICgocmVzdG8gPT0gMTApIHx8IChyZXN0byA9PSAxMSkpIHJlc3RvID0gMDtcclxuICAgIGlmIChyZXN0byAhPSBwYXJzZUludChzdHJDUEYuc3Vic3RyaW5nKDksIDEwKSkpIHJldHVybiBmYWxzZTtcclxuICAgXHJcbiAgICBzb21hID0gMDtcclxuICAgIGZvciAodmFyIGogPSAxOyBqIDw9IDEwOyBqICsrKSB7XHJcbiAgICAgICAgc29tYSA9IHNvbWEgKyBwYXJzZUludChzdHJDUEYuc3Vic3RyaW5nKGotMSwgaikpICogKDEyIC0gaik7XHJcbiAgICB9XHJcbiAgICByZXN0byA9IChzb21hICogMTApJSAxMTtcclxuICAgXHJcbiAgICBpZiAoKHJlc3RvID09IDEwKSB8fCAocmVzdG8gPT0gMTEpKSByZXN0byA9IDA7XHJcbiAgICBpZiAocmVzdG8gIT0gcGFyc2VJbnQoc3RyQ1BGLnN1YnN0cmluZygxMCwgMTEpKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdmFsaWRhdGVDUEYsXHJcbiAgICBvbmx5TnVtYmVyc1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9