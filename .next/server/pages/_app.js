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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux */ "./redux/index.js");
var _jsxFileName = "F:\\ASSESSOR_ECO\\ECO_LOJ\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Principal extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_redux__WEBPACK_IMPORTED_MODULE_4__["initStore"])(Principal));

/***/ }),

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: initStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");



const initStore = (initialState = {}) => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));
/* harmony default export */ __webpack_exports__["default"] = (initStore);

/***/ }),

/***/ "./redux/reducers/authReducers.js":
/*!****************************************!*\
  !*** ./redux/reducers/authReducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  token: null,
  usuario: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload.usuario ? action.payload.usuario.token : null,
        usuario: action.payload.usuario || null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["USER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        usuario: action.payload,
        token: action.payload ? action.payload.token : null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["AUTENTICAR_TOKEN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        token: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["DESAUTENTICAR"]:
      return initialState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/carrinhoReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/carrinhoReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  carrinho: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_CARRINHO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: action.carrinho
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_CARRINHO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: null,
        freteSelecionado: null,
        fretes: null,
        cep: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_CARRINHO"]:
      if (!action.payload.produto) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            produto: action.payload.produto
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_VARIACAO_CARRINHO"]:
      if (!action.payload.variacao) return state;
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            variacao: action.payload.variacao
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_VALOR_ENTREGA"]:
      //            console.log('fetch-valor-entrega-payload: ', action.payload);
      //            console.log('fetch-valor-entrega-fretes: ', action.payload.resultados);
      //            console.log('fetch-valor-entrega-freteselecionadao: ', action.payload.resultados[0]);
      //            console.log('fetch-valor-entrega-freteselecionadao: cep: ', action.cep);
      return _objectSpread(_objectSpread({}, state), {}, {
        fretes: action.payload.resultados,
        freteSelecionado: action.payload.resultados[0],
        cep: action.cep
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_QTD_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho ? state.carrinho.map((item, index) => {
          return action.idxCarrinho == index ? _objectSpread(_objectSpread({}, item), {}, {
            quantidade: Number(item.quantidade) + Number(action.change)
          }) : item;
        }) : []
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PROD_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrinho: state.carrinho.reduce((all, item, index) => index !== action.idxCarrinho ? all.concat([item]) : all, [])
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_FRETE_CART"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        freteSelecionado: action.freteSelecionado
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FRETES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        freteSelecionado: null,
        fretes: null,
        cep: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/categoriaReducers.js":
/*!*********************************************!*\
  !*** ./redux/reducers/categoriaReducers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  categorias: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIAS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categorias: action.payload.categorias
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoria: action.payload.categoria
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CATEGORIA_PRODUTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtosCategoria: action.payload.produtos
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/checkoutReducers.js":
/*!********************************************!*\
  !*** ./redux/reducers/checkoutReducers.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  form: {
    dadosCobranca: {}
  },
  tipoPagamentoSelecionado: "cartao"
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_FORM"]:
      let form = _objectSpread({}, state.form);

      Object.keys(action.payload).forEach(item => {
        if (action.prefix) form[action.prefix][item] = action.payload[item];else form[item] = action.payload[item];
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        form
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_FORM"]:
      return _objectSpread(_objectSpread({}, state), initialState);

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_TIPO_PAGAMENTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tipoPagamentoSelecionado: action.tipoPagamentoSelecionado
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SESSION_ID"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        sessionId: action.payload.sessionId
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SENDER_HASH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        senderHash: action.senderHash
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["NOVO_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        novoPedido: action.payload.pedido
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["PAGAR_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        novoPagamento: action.payload.pagamento
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/clienteReducers.js":
/*!*******************************************!*\
  !*** ./redux/reducers/clienteReducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  cliente: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_CLIENTE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        cliente: action.payload.cliente
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_CLIENTE"]:
      return initialState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authReducers */ "./redux/reducers/authReducers.js");
/* harmony import */ var _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoriaReducers */ "./redux/reducers/categoriaReducers.js");
/* harmony import */ var _lojaReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lojaReducers */ "./redux/reducers/lojaReducers.js");
/* harmony import */ var _produtoReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produtoReducers */ "./redux/reducers/produtoReducers.js");
/* harmony import */ var _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carrinhoReducers */ "./redux/reducers/carrinhoReducers.js");
/* harmony import */ var _clienteReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clienteReducers */ "./redux/reducers/clienteReducers.js");
/* harmony import */ var _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkoutReducers */ "./redux/reducers/checkoutReducers.js");
/* harmony import */ var _pedidoReducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pedidoReducers */ "./redux/reducers/pedidoReducers.js");









/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _authReducers__WEBPACK_IMPORTED_MODULE_1__["default"],
  categoria: _categoriaReducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  loja: _lojaReducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  produto: _produtoReducers__WEBPACK_IMPORTED_MODULE_4__["default"],
  carrinho: _carrinhoReducers__WEBPACK_IMPORTED_MODULE_5__["default"],
  cliente: _clienteReducers__WEBPACK_IMPORTED_MODULE_6__["default"],
  checkout: _checkoutReducers__WEBPACK_IMPORTED_MODULE_7__["default"],
  pedido: _pedidoReducers__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./redux/reducers/lojaReducers.js":
/*!****************************************!*\
  !*** ./redux/reducers/lojaReducers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loja: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_DADOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loja: action.payload.loja
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/pedidoReducers.js":
/*!******************************************!*\
  !*** ./redux/reducers/pedidoReducers.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  pedidos: null,
  pedido: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedidos: action.payload.pedidos
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: action.payload.pedido,
        pedidoRegistros: action.payload.registros
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAN_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: null,
        pedidoRegistros: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["CANCELAR_PEDIDO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pedido: state.pedido ? _objectSpread(_objectSpread({}, state.pedido), {}, {
          cancelado: true
        }) : null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/produtoReducers.js":
/*!*******************************************!*\
  !*** ./redux/reducers/produtoReducers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./redux/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  produtos: null,
  termo: "",
  produtosPesquisa: null,
  produto: null
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTOS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtos: action.payload.produtos
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PESQUISA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        termo: action.termo
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTOS_PESQUISA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produtosPesquisa: action.payload.produtos,
        termo: action.termo
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        produto: action.payload.produto
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_AVALIACOES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        avaliacoes: action.payload.avaliacoes
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_PRODUTO_VARIACOES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        variacoes: action.payload.variacoes
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__["NOVA_AVALIACAO"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        avaliacoes: state.avaliacoes.concat([action.payload.avaliacao])
      });

    default:
      return state;
  }
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYXV0aFJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2NhcnJpbmhvUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY2F0ZWdvcmlhUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvY2hlY2tvdXRSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9jbGllbnRlUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvbG9qYVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3BlZGlkb1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3Byb2R1dG9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiUHJpbmNpcGFsIiwiY3R4Iiwic3RvcmUiLCJwcm9wcyIsIndpdGhSZWR1eCIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwidG9rZW4iLCJ1c3VhcmlvIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQVVURU5USUNBUiIsInBheWxvYWQiLCJVU0VSIiwiQVVURU5USUNBUl9UT0tFTiIsIkRFU0FVVEVOVElDQVIiLCJjYXJyaW5obyIsIlNFVF9DQVJSSU5ITyIsIkNMRUFOX0NBUlJJTkhPIiwiZnJldGVTZWxlY2lvbmFkbyIsImZyZXRlcyIsImNlcCIsIkZFVENIX1BST0RVVE9fQ0FSUklOSE8iLCJwcm9kdXRvIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWR4Q2FycmluaG8iLCJGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyIsInZhcmlhY2FvIiwiRkVUQ0hfVkFMT1JfRU5UUkVHQSIsInJlc3VsdGFkb3MiLCJVUERBVEVfUVREX0NBUlQiLCJxdWFudGlkYWRlIiwiTnVtYmVyIiwiY2hhbmdlIiwiUkVNT1ZFX1BST0RfQ0FSVCIsInJlZHVjZSIsImFsbCIsImNvbmNhdCIsIlVQREFURV9GUkVURV9DQVJUIiwiQ0xFQU5fRlJFVEVTIiwiY2F0ZWdvcmlhcyIsIkZFVENIX0NBVEVHT1JJQVMiLCJGRVRDSF9DQVRFR09SSUEiLCJjYXRlZ29yaWEiLCJGRVRDSF9DQVRFR09SSUFfUFJPRFVUT1MiLCJwcm9kdXRvc0NhdGVnb3JpYSIsInByb2R1dG9zIiwiZm9ybSIsImRhZG9zQ29icmFuY2EiLCJ0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG8iLCJTRVRfRk9STSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJlZml4IiwiQ0xFQU5fRk9STSIsIlNFVF9USVBPX1BBR0FNRU5UTyIsIkZFVENIX1NFU1NJT05fSUQiLCJzZXNzaW9uSWQiLCJGRVRDSF9TRU5ERVJfSEFTSCIsInNlbmRlckhhc2giLCJOT1ZPX1BFRElETyIsIm5vdm9QZWRpZG8iLCJwZWRpZG8iLCJQQUdBUl9QRURJRE8iLCJub3ZvUGFnYW1lbnRvIiwicGFnYW1lbnRvIiwiY2xpZW50ZSIsIkZFVENIX0NMSUVOVEUiLCJMT0dPVVRfQ0xJRU5URSIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGgiLCJhdXRoUmVkdWNlciIsImNhdGVnb3JpYVJlZHVjZXIiLCJsb2phIiwibG9qYVJlZHVjZXIiLCJwcm9kdXRvUmVkdWNlciIsImNhcnJpbmhvUmVkdWNlciIsImNsaWVudGVSZWR1Y2VyIiwiY2hlY2tvdXQiLCJjaGVja291dFJlZHVjZXIiLCJwZWRpZG9SZWR1Y2VyIiwiRkVUQ0hfREFET1MiLCJwZWRpZG9zIiwiRkVUQ0hfUEVESURPUyIsIkZFVENIX1BFRElETyIsInBlZGlkb1JlZ2lzdHJvcyIsInJlZ2lzdHJvcyIsIkNMRUFOX1BFRElETyIsIkNBTkNFTEFSX1BFRElETyIsImNhbmNlbGFkbyIsInRlcm1vIiwicHJvZHV0b3NQZXNxdWlzYSIsIkZFVENIX1BST0RVVE9TIiwiRkVUQ0hfUEVTUVVJU0EiLCJGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSIsIkZFVENIX1BST0RVVE8iLCJGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVMiLCJhdmFsaWFjb2VzIiwiRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMiLCJ2YXJpYWNvZXMiLCJOT1ZBX0FWQUxJQUNBTyIsImF2YWxpYWNhbyIsIlJFR0lTVEVSIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLG1CQUFPLENBQUMsaUVBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTVDOztBQUNBOzs7O0FBa0JBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFB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QUFnQixHQUFHLGtCQTVCekI7QUFBQSxNQTZCTUUsaUJBQWlCLEdBQUcsbUJBN0IxQjtBQUFBLE1BOEJNRSxXQUFXLEdBQUcsYUE5QnBCO0FBQUEsTUErQk1HLFlBQVksR0FBRyxjQS9CckI7QUFBQSxNQWdDTUssY0FBYyxHQUFHLGdCQWhDdkI7QUFBQSxNQWlDTXhELGFBQWEsR0FBRyxlQWpDdEI7QUFBQSxNQWtDTXVFLGFBQWEsR0FBRyxlQWxDdEI7QUFBQSxNQW1DTUMsWUFBWSxHQUFHLGNBbkNyQjtBQUFBLE1Bb0NNRyxZQUFZLEdBQUcsY0FwQ3JCO0FBQUEsTUFxQ01DLGVBQWUsR0FBRyxpQkFyQ3hCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVAsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXBwLCB7Q29udGFpbmVyfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHtpbml0U3RvcmV9IGZyb20gJy4uL3JlZHV4JztcclxuXHJcbmNsYXNzIFByaW5jaXBhbCBleHRlbmRzIEFwcCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHh9KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFnZVByb3BzOiBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKSAoUHJpbmNpcGFsKTsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0U3RvcmU7ICAgICAgICAgICAgICAgICAgICAiLCJpbXBvcnQgeyBcclxuICAgIEFVVEVOVElDQVJfVE9LRU4sXHJcbiAgICBBVVRFTlRJQ0FSLFxyXG4gICAgVVNFUixcclxuICAgIERFU0FVVEVOVElDQVJcclxufSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IHRva2VuOiBudWxsLCB1c3VhcmlvOiBudWxsIH07XHJcbmV4cG9ydCBkZWZhdWx0ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFVVEVOVElDQVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZC51c3VhcmlvID8gYWN0aW9uLnBheWxvYWQudXN1YXJpby50b2tlbiA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB1c3VhcmlvOiBhY3Rpb24ucGF5bG9hZC51c3VhcmlvIHx8IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVNFUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXN1YXJpbzogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQgPyBhY3Rpb24ucGF5bG9hZC50b2tlbiA6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFVVEVOVElDQVJfVE9LRU46XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0b2tlbjogYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgIGNhc2UgREVTQVVURU5USUNBUjpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1xyXG4gICAgU0VUX0NBUlJJTkhPLFxyXG4gICAgQ0xFQU5fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9QUk9EVVRPX0NBUlJJTkhPLFxyXG4gICAgRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE8sXHJcbiAgICBGRVRDSF9WQUxPUl9FTlRSRUdBLFxyXG4gICAgVVBEQVRFX1FURF9DQVJULFxyXG4gICAgVVBEQVRFX0ZSRVRFX0NBUlQsXHJcbiAgICBSRU1PVkVfUFJPRF9DQVJULFxyXG4gICAgQ0xFQU5fRlJFVEVTXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBjYXJyaW5obzogbnVsbCB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBTRVRfQ0FSUklOSE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBhY3Rpb24uY2FycmluaG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0xFQU5fQ0FSUklOSE86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkbzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZyZXRlczogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNlcDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QUk9EVVRPX0NBUlJJTkhPOlxyXG4gICAgICAgICAgICBpZighYWN0aW9uLnBheWxvYWQucHJvZHV0bykgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8gPyBzdGF0ZS5jYXJyaW5oby5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggYWN0aW9uLmlkeENhcnJpbmhvID09IGluZGV4ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IC4uLml0ZW0sIHByb2R1dG86IGFjdGlvbi5wYXlsb2FkLnByb2R1dG8gfSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgICAgICAgIH0pIDogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfVkFSSUFDQU9fQ0FSUklOSE86XHJcbiAgICAgICAgICAgIGlmKCFhY3Rpb24ucGF5bG9hZC52YXJpYWNhbykgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJyaW5obzogc3RhdGUuY2FycmluaG8gPyBzdGF0ZS5jYXJyaW5oby5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggYWN0aW9uLmlkeENhcnJpbmhvID09IGluZGV4ICkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IC4uLml0ZW0sIHZhcmlhY2FvOiBhY3Rpb24ucGF5bG9hZC52YXJpYWNhbyB9IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgICAgICAgfSkgOiBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9WQUxPUl9FTlRSRUdBOlxyXG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaC12YWxvci1lbnRyZWdhLXBheWxvYWQ6ICcsIGFjdGlvbi5wYXlsb2FkKTtcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2gtdmFsb3ItZW50cmVnYS1mcmV0ZXM6ICcsIGFjdGlvbi5wYXlsb2FkLnJlc3VsdGFkb3MpO1xyXG4vLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaC12YWxvci1lbnRyZWdhLWZyZXRlc2VsZWNpb25hZGFvOiAnLCBhY3Rpb24ucGF5bG9hZC5yZXN1bHRhZG9zWzBdKTtcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2gtdmFsb3ItZW50cmVnYS1mcmV0ZXNlbGVjaW9uYWRhbzogY2VwOiAnLCBhY3Rpb24uY2VwKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZnJldGVzOiBhY3Rpb24ucGF5bG9hZC5yZXN1bHRhZG9zLFxyXG4gICAgICAgICAgICAgICAgZnJldGVTZWxlY2lvbmFkbzogYWN0aW9uLnBheWxvYWQucmVzdWx0YWRvc1swXSxcclxuICAgICAgICAgICAgICAgIGNlcDogYWN0aW9uLmNlcFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVUERBVEVfUVREX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5obyA/IHN0YXRlLmNhcnJpbmhvLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBhY3Rpb24uaWR4Q2FycmluaG8gPT0gaW5kZXggKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5pdGVtLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aWRhZGU6IE51bWJlcihpdGVtLnF1YW50aWRhZGUpICsgTnVtYmVyKGFjdGlvbi5jaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KSA6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9QUk9EX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnJpbmhvOiBzdGF0ZS5jYXJyaW5oby5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhbGwsIGl0ZW0sIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT09IGFjdGlvbi5pZHhDYXJyaW5obyA/IGFsbC5jb25jYXQoW2l0ZW1dKSA6IGFsbCwgW11cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVQREFURV9GUkVURV9DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZVNlbGVjaW9uYWRvOiBhY3Rpb24uZnJldGVTZWxlY2lvbmFkb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDTEVBTl9GUkVURVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZyZXRlU2VsZWNpb25hZG86IG51bGwsXHJcbiAgICAgICAgICAgICAgICBmcmV0ZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjZXA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9DQVRFR09SSUFTLFxyXG4gICAgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TLFxyXG4gICAgRkVUQ0hfQ0FURUdPUklBXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyBjYXRlZ29yaWFzOiBudWxsIH07XHJcbmV4cG9ydCBkZWZhdWx0ICggc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9DQVRFR09SSUFTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFzOiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yaWFzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX0NBVEVHT1JJQTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yaWFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdXRvc0NhdGVnb3JpYTogYWN0aW9uLnBheWxvYWQucHJvZHV0b3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBTRVRfRk9STSxcclxuICAgIENMRUFOX0ZPUk0sXHJcbiAgICBTRVRfVElQT19QQUdBTUVOVE8sXHJcbiAgICBGRVRDSF9TRVNTSU9OX0lELFxyXG4gICAgRkVUQ0hfU0VOREVSX0hBU0gsXHJcbiAgICBOT1ZPX1BFRElETyxcclxuICAgIFBBR0FSX1BFRElET1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGZvcm06IHsgZGFkb3NDb2JyYW5jYToge30gfSxcclxuICAgIHRpcG9QYWdhbWVudG9TZWxlY2lvbmFkbzogXCJjYXJ0YW9cIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBTRVRfRk9STTpcclxuICAgICAgICAgICAgbGV0IGZvcm0gPSB7IC4uLnN0YXRlLmZvcm0gfTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9uLnBheWxvYWQpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihhY3Rpb24ucHJlZml4KSBmb3JtW2FjdGlvbi5wcmVmaXhdW2l0ZW1dID0gYWN0aW9uLnBheWxvYWRbaXRlbV07XHJcbiAgICAgICAgICAgICAgICBlbHNlIGZvcm1baXRlbV0gPSBhY3Rpb24ucGF5bG9hZFtpdGVtXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb3JtIH07XHJcbiAgICAgICAgY2FzZSBDTEVBTl9GT1JNOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5pbml0aWFsU3RhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0VUX1RJUE9fUEFHQU1FTlRPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0aXBvUGFnYW1lbnRvU2VsZWNpb25hZG86IGFjdGlvbi50aXBvUGFnYW1lbnRvU2VsZWNpb25hZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfU0VTU0lPTl9JRDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbklkOiBhY3Rpb24ucGF5bG9hZC5zZXNzaW9uSWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfU0VOREVSX0hBU0g6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNlbmRlckhhc2g6IGFjdGlvbi5zZW5kZXJIYXNoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE5PVk9fUEVESURPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3ZvUGVkaWRvOiBhY3Rpb24ucGF5bG9hZC5wZWRpZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUEFHQVJfUEVESURPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3ZvUGFnYW1lbnRvOiBhY3Rpb24ucGF5bG9hZC5wYWdhbWVudG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9DTElFTlRFLFxyXG4gICAgTE9HT1VUX0NMSUVOVEVcclxufSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IGNsaWVudGU6IG51bGwgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfQ0xJRU5URTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50ZTogYWN0aW9uLnBheWxvYWQuY2xpZW50ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dPVVRfQ0xJRU5URTpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSAnLi9hdXRoUmVkdWNlcnMnO1xyXG5pbXBvcnQgY2F0ZWdvcmlhUmVkdWNlciBmcm9tICcuL2NhdGVnb3JpYVJlZHVjZXJzJztcclxuaW1wb3J0IGxvamFSZWR1Y2VyIGZyb20gJy4vbG9qYVJlZHVjZXJzJztcclxuaW1wb3J0IHByb2R1dG9SZWR1Y2VyIGZyb20gJy4vcHJvZHV0b1JlZHVjZXJzJztcclxuaW1wb3J0IGNhcnJpbmhvUmVkdWNlciBmcm9tICcuL2NhcnJpbmhvUmVkdWNlcnMnO1xyXG5pbXBvcnQgY2xpZW50ZVJlZHVjZXIgZnJvbSAnLi9jbGllbnRlUmVkdWNlcnMnO1xyXG5pbXBvcnQgY2hlY2tvdXRSZWR1Y2VyIGZyb20gJy4vY2hlY2tvdXRSZWR1Y2Vycyc7XHJcbmltcG9ydCBwZWRpZG9SZWR1Y2VyIGZyb20gJy4vcGVkaWRvUmVkdWNlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGF1dGg6IGF1dGhSZWR1Y2VyLFxyXG4gICAgY2F0ZWdvcmlhOiBjYXRlZ29yaWFSZWR1Y2VyLFxyXG4gICAgbG9qYTogbG9qYVJlZHVjZXIsXHJcbiAgICBwcm9kdXRvOiBwcm9kdXRvUmVkdWNlcixcclxuICAgIGNhcnJpbmhvOiBjYXJyaW5ob1JlZHVjZXIsXHJcbiAgICBjbGllbnRlOiBjbGllbnRlUmVkdWNlcixcclxuICAgIGNoZWNrb3V0OiBjaGVja291dFJlZHVjZXIsXHJcbiAgICBwZWRpZG86IHBlZGlkb1JlZHVjZXJcclxufSk7IiwiaW1wb3J0IHtGRVRDSF9EQURPU30gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge2xvamE6IG51bGx9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX0RBRE9TOlxyXG4gICAgICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9qYTogYWN0aW9uLnBheWxvYWQubG9qYVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9QRURJRE9TLFxyXG4gICAgRkVUQ0hfUEVESURPLFxyXG4gICAgQ0xFQU5fUEVESURPLFxyXG4gICAgQ0FOQ0VMQVJfUEVESURPXHJcbn0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcGVkaWRvczogbnVsbCxcclxuICAgIHBlZGlkbzogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX1BFRElET1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBlZGlkb3M6IGFjdGlvbi5wYXlsb2FkLnBlZGlkb3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUEVESURPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwZWRpZG86IGFjdGlvbi5wYXlsb2FkLnBlZGlkbyxcclxuICAgICAgICAgICAgICAgIHBlZGlkb1JlZ2lzdHJvczogYWN0aW9uLnBheWxvYWQucmVnaXN0cm9zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENMRUFOX1BFRElETzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvUmVnaXN0cm9zOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENBTkNFTEFSX1BFRElETzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvOiBzdGF0ZS5wZWRpZG8gPyB7Li4uIHN0YXRlLnBlZGlkbywgY2FuY2VsYWRvOiB0cnVlfSA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgICBGRVRDSF9QUk9EVVRPUyxcclxuICAgIEZFVENIX1BFU1FVSVNBLFxyXG4gICAgRkVUQ0hfUFJPRFVUT1NfUEVTUVVJU0EsXHJcbiAgICBGRVRDSF9QUk9EVVRPLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTLFxyXG4gICAgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVMsXHJcbiAgICBOT1ZBX0FWQUxJQUNBT1xyXG59IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHByb2R1dG9zOiBudWxsLFxyXG4gICAgdGVybW86IFwiXCIsXHJcbiAgICBwcm9kdXRvc1Blc3F1aXNhOiBudWxsLFxyXG4gICAgcHJvZHV0bzogbnVsbFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QUk9EVVRPUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHV0b3M6IGFjdGlvbi5wYXlsb2FkLnByb2R1dG9zXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1BFU1FVSVNBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0ZXJtbzogYWN0aW9uLnRlcm1vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZFVENIX1BST0RVVE9TX1BFU1FVSVNBOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdXRvc1Blc3F1aXNhOiBhY3Rpb24ucGF5bG9hZC5wcm9kdXRvcyxcclxuICAgICAgICAgICAgICAgIHRlcm1vOiBhY3Rpb24udGVybW9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUFJPRFVUTzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcHJvZHV0bzogYWN0aW9uLnBheWxvYWQucHJvZHV0b1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGRVRDSF9QUk9EVVRPX0FWQUxJQUNPRVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF2YWxpYWNvZXM6IGFjdGlvbi5wYXlsb2FkLmF2YWxpYWNvZXNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRkVUQ0hfUFJPRFVUT19WQVJJQUNPRVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHZhcmlhY29lczogYWN0aW9uLnBheWxvYWQudmFyaWFjb2VzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE5PVkFfQVZBTElBQ0FPOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdmFsaWFjb2VzOiBzdGF0ZS5hdmFsaWFjb2VzLmNvbmNhdChbYWN0aW9uLnBheWxvYWQuYXZhbGlhY2FvXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IFwicmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgIEFVVEVOVElDQVJfVE9LRU4gPSBcIkFVVEVOVElDQVJfVE9LRU5cIixcclxuICAgICAgICAgICAgIFVTRVIgPSBcInVzZXJcIixcclxuICAgICAgICAgICAgIEFVVEVOVElDQVIgPSAnQVVURU5USUNBUicsXHJcbiAgICAgICAgICAgICBGRVRDSF9DQVRFR09SSUFTID0gXCJmZXRjaF9jYXRlZ29yaWFzXCIsXHJcbiAgICAgICAgICAgICBGRVRDSF9EQURPUyA9ICdmZXRjaF9kYWRvcycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPUyA9IFwiRkVUQ0hfUFJPRFVUT1NcIixcclxuICAgICAgICAgICAgIEZFVENIX0NBVEVHT1JJQSA9ICdGRVRDSF9DQVRFR09SSUEnLFxyXG4gICAgICAgICAgICAgRkVUQ0hfQ0FURUdPUklBX1BST0RVVE9TID0gJ0ZFVENIX0NBVEVHT1JJQV9QUk9EVVRPUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRVNRVUlTQSA9ICdGRVRDSF9QRVNRVUlTQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPU19QRVNRVUlTQSA9ICdGRVRDSF9QUk9EVVRPU19QRVNRVUlTQScsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPID0gJ0ZFVENIX1BST0RVVE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfUFJPRFVUT19BVkFMSUFDT0VTID0gJ0ZFVENIX1BST0RVVE9fQVZBTElBQ09FUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUyA9ICdGRVRDSF9QUk9EVVRPX1ZBUklBQ09FUycsXHJcbiAgICAgICAgICAgICBOT1ZBX0FWQUxJQUNBTyA9ICdOT1ZBX0FWQUxJQUNBTycsXHJcbiAgICAgICAgICAgICBTRVRfQ0FSUklOSE8gPSAnU0VUX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIENMRUFOX0NBUlJJTkhPID0gJ0NMRUFOX0NBUlJJTkhPJyxcclxuICAgICAgICAgICAgIEZFVENIX1BST0RVVE9fQ0FSUklOSE8gPSAnRkVUQ0hfUFJPRFVUT19DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9WQVJJQUNBT19DQVJSSU5ITyA9ICdGRVRDSF9WQVJJQUNBT19DQVJSSU5ITycsXHJcbiAgICAgICAgICAgICBGRVRDSF9WQUxPUl9FTlRSRUdBID0gJ0ZFVENIX1ZBTE9SX0VOVFJFR0EnLFxyXG4gICAgICAgICAgICAgVVBEQVRFX1FURF9DQVJUID0gJ1VQREFURV9RVERfQ0FSVCcsXHJcbiAgICAgICAgICAgICBVUERBVEVfRlJFVEVfQ0FSVCA9ICdVUERBVEVfRlJFVEVfQ0FSVCcsXHJcbiAgICAgICAgICAgICBSRU1PVkVfUFJPRF9DQVJUID0gJ1JFTU9WRV9QUk9EX0NBUlQnLFxyXG4gICAgICAgICAgICAgQ0xFQU5fRlJFVEVTID0gJ0NMRUFOX0ZSRVRFUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9DTElFTlRFID0gJ0ZFVENIX0NMSUVOVEUnLFxyXG4gICAgICAgICAgICAgU0VUX0ZPUk0gPSAnU0VUX0ZPUk0nLFxyXG4gICAgICAgICAgICAgQ0xFQU5fRk9STSA9ICdDTEVBTl9GT1JNJyxcclxuICAgICAgICAgICAgIFNFVF9USVBPX1BBR0FNRU5UTyA9ICdTRVRfVElQT19QQUdBTUVOVE8nLFxyXG4gICAgICAgICAgICAgRkVUQ0hfU0VTU0lPTl9JRCA9ICdGRVRDSF9TRVNTSU9OX0lEJyxcclxuICAgICAgICAgICAgIEZFVENIX1NFTkRFUl9IQVNIID0gJ0ZFVENIX1NFTkRFUl9IQVNIJyxcclxuICAgICAgICAgICAgIE5PVk9fUEVESURPID0gJ05PVk9fUEVESURPJyxcclxuICAgICAgICAgICAgIFBBR0FSX1BFRElETyA9ICdQQUdBUl9QRURJRE8nLFxyXG4gICAgICAgICAgICAgTE9HT1VUX0NMSUVOVEUgPSAnTE9HT1VUX0NMSUVOVEUnLFxyXG4gICAgICAgICAgICAgREVTQVVURU5USUNBUiA9ICdERVNBVVRFTlRJQ0FSJyxcclxuICAgICAgICAgICAgIEZFVENIX1BFRElET1MgPSAnRkVUQ0hfUEVESURPUycsXHJcbiAgICAgICAgICAgICBGRVRDSF9QRURJRE8gPSAnRkVUQ0hfUEVESURPJyxcclxuICAgICAgICAgICAgIENMRUFOX1BFRElETyA9ICdDTEVBTl9QRURJRE8nLFxyXG4gICAgICAgICAgICAgQ0FOQ0VMQVJfUEVESURPID0gJ0NBTkNFTEFSX1BFRElETyc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=