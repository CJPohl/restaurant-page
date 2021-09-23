/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-background: #086cdfd0;\n    --primary-text: black;\n    --secondary-text: #dfa208;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    min-height: 100%;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    color: var(--primary-text);\n    font-family: 'Carrois Gothic SC', sans-serif;\n    font-size: 20px;\n}\n\n.header {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 0;\n    width: 100%;\n    height: 75px;\n    overflow: hidden;\n}\n\n.title {\n    position: absolute;\n    left: 0;\n    padding: 5px;\n    border: 2px solid black;\n    margin-left: 40px;\n    cursor: pointer;\n}\n\n.title:hover {\n    border-color: var(--secondary-text);\n    color: var(--secondary-text); \n}\n\n.directory {\n    position: absolute;\n    right: 0;\n    margin-right: 150px;\n    display: flex;\n    gap: 150px;\n}\n\n.header a {\n    cursor: pointer;\n}\n\n.header a:hover {\n    color: var(--secondary-text);\n}\n\n.content {\n    position: absolute;\n    top: 75px;\n    bottom: 75px;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(255, 255, 255, 0.596);\n    border: 1px solid black;\n}\n\n.landing-container {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    width: 100%;\n    padding: 25px 25px;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: 1fr .10fr 1fr;\n}\n\n.landing-img-container1 {\n    position: relative;\n    grid-column: 1;\n}\n\n.landing-img {\n    height: auto;\n    max-width: 100%;\n    object-fit: contain;\n}\n\n.landing-img-container2 {\n    position: relative;\n    grid-column: 3;\n}\n\n.landing-label {\n    position: absolute;\n    top: 10px;\n    left: 15px;\n    border: 2px solid black;\n    padding: 15px;\n    border-radius: 50%;\n}\n\n.landing-label:hover {\n    border-color: var(--secondary-text);\n    color: var(--secondary-text);\n}\n\n.about-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    padding: 25px 125px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\n.about-title {\n    text-align: center;\n    font-size: 25px;\n    \n}\n\n.about-content {\n    text-indent: 50px;\n    line-height: 1.5;\n}\n\n.menu-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    gap: 50px;\n    \n}\n\n.menu-item-titles {\n    font-size: 30px;\n}\n\n.menu-item-descriptions {\n    border-bottom: 1px solid black;\n    font-style: italic;\n    font-size: 15px;\n}\n\n.contact-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 60px;\n}\n\n.contact-title {\n    font-size: 50px;\n}\n\n.contact-number-email {\n    font-weight: bold;\n    font-size: 30px;\n}\n\n.footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    height: 75px;\n    width: 100%;\n    background-color: var(--primary-background);\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.footer a {\n    text-decoration: none;\n    color: var(--primary-text);\n}\n\n.footer a:hover {\n    color: var(--secondary-text);\n}\n\n.fa-github {\n    color: var(--primary-text);\n    font-size: 40px;\n    transition: transform 0.1s ease-in-out;\n}\n\n.fa-github:hover {\n    transform: scale(1.2);\n}\n\n.fade-in {\nanimation: fadeIn ease 2s;\n}\n\n@keyframes fadeIn {\n0% {\n    opacity:0;\n}\n100% {\n    opacity:1;\n}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,+BAA+B;IAC/B,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;;;IAGI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,yDAAyC;IACzC,0BAA0B;IAC1B,4CAA4C;IAC5C,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,MAAM;IACN,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,mBAAmB;IACnB,aAAa;IACb,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,WAAW;IACX,cAAc;IACd,4CAA4C;IAC5C,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,uBAAuB;IACvB,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;;AAEnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;;AAEb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,YAAY;IACZ,WAAW;IACX,2CAA2C;IAC3C,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,0BAA0B;IAC1B,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;AACA,yBAAyB;AACzB;;AAEA;AACA;IACI,SAAS;AACb;AACA;IACI,SAAS;AACb;AACA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Carrois+Gothic+SC&display=swap');\n\n:root {\n    --primary-background: #086cdfd0;\n    --primary-text: black;\n    --secondary-text: #dfa208;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nhtml {\n    min-height: 100%;\n}\n\nbody {\n    background-image: url('./background.jpg');\n    color: var(--primary-text);\n    font-family: 'Carrois Gothic SC', sans-serif;\n    font-size: 20px;\n}\n\n.header {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 0;\n    width: 100%;\n    height: 75px;\n    overflow: hidden;\n}\n\n.title {\n    position: absolute;\n    left: 0;\n    padding: 5px;\n    border: 2px solid black;\n    margin-left: 40px;\n    cursor: pointer;\n}\n\n.title:hover {\n    border-color: var(--secondary-text);\n    color: var(--secondary-text); \n}\n\n.directory {\n    position: absolute;\n    right: 0;\n    margin-right: 150px;\n    display: flex;\n    gap: 150px;\n}\n\n.header a {\n    cursor: pointer;\n}\n\n.header a:hover {\n    color: var(--secondary-text);\n}\n\n.content {\n    position: absolute;\n    top: 75px;\n    bottom: 75px;\n    width: 100%;\n    overflow: auto;\n    background-color: rgba(255, 255, 255, 0.596);\n    border: 1px solid black;\n}\n\n.landing-container {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    width: 100%;\n    padding: 25px 25px;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-template-columns: 1fr .10fr 1fr;\n}\n\n.landing-img-container1 {\n    position: relative;\n    grid-column: 1;\n}\n\n.landing-img {\n    height: auto;\n    max-width: 100%;\n    object-fit: contain;\n}\n\n.landing-img-container2 {\n    position: relative;\n    grid-column: 3;\n}\n\n.landing-label {\n    position: absolute;\n    top: 10px;\n    left: 15px;\n    border: 2px solid black;\n    padding: 15px;\n    border-radius: 50%;\n}\n\n.landing-label:hover {\n    border-color: var(--secondary-text);\n    color: var(--secondary-text);\n}\n\n.about-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    padding: 25px 125px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\n.about-title {\n    text-align: center;\n    font-size: 25px;\n    \n}\n\n.about-content {\n    text-indent: 50px;\n    line-height: 1.5;\n}\n\n.menu-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    gap: 50px;\n    \n}\n\n.menu-item-titles {\n    font-size: 30px;\n}\n\n.menu-item-descriptions {\n    border-bottom: 1px solid black;\n    font-style: italic;\n    font-size: 15px;\n}\n\n.contact-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 60px;\n}\n\n.contact-title {\n    font-size: 50px;\n}\n\n.contact-number-email {\n    font-weight: bold;\n    font-size: 30px;\n}\n\n.footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    height: 75px;\n    width: 100%;\n    background-color: var(--primary-background);\n    font-size: 18px;\n    font-weight: bold;\n}\n\n.footer a {\n    text-decoration: none;\n    color: var(--primary-text);\n}\n\n.footer a:hover {\n    color: var(--secondary-text);\n}\n\n.fa-github {\n    color: var(--primary-text);\n    font-size: 40px;\n    transition: transform 0.1s ease-in-out;\n}\n\n.fa-github:hover {\n    transform: scale(1.2);\n}\n\n.fade-in {\nanimation: fadeIn ease 2s;\n}\n\n@keyframes fadeIn {\n0% {\n    opacity:0;\n}\n100% {\n    opacity:1;\n}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87163ab6a2c8e064e957.jpg";

/***/ }),

/***/ "./src/cheese_landing.jpg":
/*!********************************!*\
  !*** ./src/cheese_landing.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c546e137c565eec0aec.jpg";

/***/ }),

/***/ "./src/restaurant_landing.jpg":
/*!************************************!*\
  !*** ./src/restaurant_landing.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38133ac0bb3cf85e3e5b.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _cheese_landing_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cheese_landing.jpg */ "./src/cheese_landing.jpg");
/* harmony import */ var _restaurant_landing_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant_landing.jpg */ "./src/restaurant_landing.jpg");




const restaurantPage = (() => {
    // main container
    const content = document.createElement('div');
    content.classList.add('content');
    document.body.appendChild(content);
    
    // header
    const showHeader = () => {
        const header = document.createElement('header');
        header.classList.add('header');

        // title
        const restaurantTitle = document.createElement('h1');
        restaurantTitle.classList.add('title');
        restaurantTitle.textContent = 'Chez Christophe';
        header.appendChild(restaurantTitle);

        restaurantTitle.addEventListener('click', showLandingContent);

        // directory
        const directory = document.createElement('ul');
        directory.classList.add('directory');
        const about = document.createElement('a');
        const menu = document.createElement('a');
        const contact = document.createElement('a');
        about.textContent = 'About';
        menu.textContent = 'Menu';
        contact.textContent = 'Contact';
        directory.appendChild(about);
        directory.appendChild(menu);
        directory.appendChild(contact);
        header.appendChild(directory);

        about.addEventListener('click', showAboutContent);
        menu.addEventListener('click', showMenuContent);
        contact.addEventListener('click', showContactContent);

        document.body.append(header);
    }

    const showFooter = () => {
        // footer
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        const link = document.createElement("a");
        link.textContent = "Copyright © 2021 Christopher J. Pohl";
        link.href = 'https://github.com/CJPohl';
        
        footer.appendChild(link);
        document.body.appendChild(footer);
    }

    // main landing page tab
    const showLandingContent = () => {
        content.textContent = '';
        const landingContainer = document.createElement('div');
        landingContainer.classList.add('landing-container');
        landingContainer.classList.add('fade-in');
        content.appendChild(landingContainer);

        const img1Container = document.createElement('div');
        img1Container.classList.add('landing-img-container1');
        const landingImg1 = new Image();
        landingImg1.src = _cheese_landing_jpg__WEBPACK_IMPORTED_MODULE_1__;
        landingImg1.classList.add('landing-img');
        img1Container.appendChild(landingImg1);

        const img2Container = document.createElement('div');
        img2Container.classList.add('landing-img-container2');
        const landingImg2 = new Image();
        landingImg2.src = _restaurant_landing_jpg__WEBPACK_IMPORTED_MODULE_2__;
        landingImg2.classList.add('landing-img');
        img2Container.appendChild(landingImg2);
        
        landingContainer.appendChild(img1Container);
        landingContainer.appendChild(img2Container);

        const cheeseLabel = document.createElement('h1');
        const restaurantLabel = document.createElement('h1');
        cheeseLabel.classList.add('landing-label');
        restaurantLabel.classList.add('landing-label');
        cheeseLabel.textContent = 'Fromagerie';
        restaurantLabel.textContent = 'Restaurant';

        img1Container.appendChild(cheeseLabel);
        img2Container.appendChild(restaurantLabel);
    }

    const showAboutContent = () => {
        content.textContent = '';
        const aboutContainer = document.createElement('div');
        const aboutTitle = document.createElement('h3');
        const aboutContent1 = document.createElement('p');
        const aboutContent2 = document.createElement('p');
        const aboutContent3 = document.createElement('p');

        aboutContainer.classList.add('about-container');
        aboutContainer.classList.add('fade-in');
        aboutTitle.classList.add('about-title');
        aboutContent1.classList.add('about-content');
        aboutContent2.classList.add('about-content');
        aboutContent3.classList.add('about-content');

        aboutTitle.textContent = 'Ce Restaurant';
        aboutContent1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu. Cras adipiscing enim eu turpis egestas pretium. Malesuada fames ac turpis egestas sed tempus urna. Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor pretium. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Id faucibus nisl tincidunt eget nullam non nisi est sit. Nulla facilisi nullam vehicula ipsum. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Erat nam at lectus urna duis convallis. Pellentesque dignissim enim sit amet venenatis urna cursus.';
        aboutContent2.textContent = 'Ultrices vitae auctor eu augue ut lectus arcu. Praesent tristique magna sit amet purus gravida. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Sollicitudin nibh sit amet commodo nulla facilisi. In hac habitasse platea dictumst vestibulum. Suscipit tellus mauris a diam maecenas sed enim. Elit duis tristique sollicitudin nibh sit amet commodo. Pulvinar neque laoreet suspendisse interdum. Tortor condimentum lacinia quis vel eros. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Id volutpat lacus laoreet non curabitur gravida. Tellus mauris a diam maecenas. Eget nulla facilisi etiam dignissim diam quis.';
        aboutContent3.textContent = 'Ultrices eros in cursus turpis massa. Duis ut diam quam nulla porttitor massa id neque. Enim sit amet venenatis urna cursus. Quis blandit turpis cursus in hac. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Volutpat est velit egestas dui id ornare. Sed lectus vestibulum mattis ullamcorper. Et ligula ullamcorper malesuada proin. Lobortis feugiat vivamus at augue eget arcu dictum. Consequat mauris nunc congue nisi vitae suscipit tellus. Eu consequat ac felis donec et odio. Elementum integer enim neque volutpat ac. Amet dictum sit amet justo donec enim diam vulputate. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tempus quam pellentesque nec nam. Gravida rutrum quisque non tellus orci ac auctor. Ut faucibus pulvinar elementum integer enim neque. Neque ornare aenean euismod elementum nisi quis. Ornare quam viverra orci sagittis.';

        aboutContainer.appendChild(aboutTitle);
        aboutContainer.appendChild(aboutContent1);
        aboutContainer.appendChild(aboutContent2);
        aboutContainer.appendChild(aboutContent3);
        content.appendChild(aboutContainer);
    }
    
    const showMenuContent = () => {
        content.textContent = '';
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
        menuContainer.classList.add('fade-in');
        content.appendChild(menuContainer);

        const entree1 = document.createElement('div');
        const e1Title = document.createElement('h5');
        e1Title.classList.add('menu-item-titles');
        e1Title.textContent = 'Escargots de Bourgogne'
        const e1Item = document.createElement('p');
        e1Item.classList.add('menu-item-descriptions');
        e1Item.textContent = 'Snails, Garlic Butter, Herbs, White Wine';

        entree1.appendChild(e1Title);
        entree1.appendChild(e1Item);

        const entree2 = document.createElement('div');
        const e2Title = document.createElement('h5');
        e2Title.classList.add('menu-item-titles');
        e2Title.textContent = 'Baked Seafood Crepe'
        const e2Item = document.createElement('p');
        e2Item.classList.add('menu-item-descriptions');
        e2Item.textContent = 'Scallop, Shrimp, Mushroom Caramelized Onion & Bechamel';

        entree2.appendChild(e2Title);
        entree2.appendChild(e2Item);

        const entree3 = document.createElement('div');
        const e3Title = document.createElement('h5');
        e3Title.classList.add('menu-item-titles');
        e3Title.textContent = 'Pate de Campagne'
        const e3Item = document.createElement('p');
        e3Item.classList.add('menu-item-descriptions');
        e3Item.textContent = 'Rustic Pork & Duck Recipe, Cornichons Duo de Moutarde';

        entree3.appendChild(e3Title);
        entree3.appendChild(e3Item);

        const plat1 = document.createElement('div');
        const p1Title = document.createElement('h5');
        p1Title.classList.add('menu-item-titles');
        p1Title.textContent = 'Truite Amandine';
        const p1Item = document.createElement('p');
        p1Item.classList.add('menu-item-descriptions');
        p1Item.textContent = 'Pan Seared Rainbow Trout, Toasted Almonds Grilled Lemon, Brown Butter';

        plat1.appendChild(p1Title);
        plat1.appendChild(p1Item);

        const plat2 = document.createElement('div');
        const p2Title = document.createElement('h5');
        p2Title.classList.add('menu-item-titles');
        p2Title.textContent = 'Coq Au Vin';
        const p2Item = document.createElement('p');
        p2Item.classList.add('menu-item-descriptions');
        p2Item.textContent = 'Half Amish Chicken Braised in Wine, Mushroom';

        plat2.appendChild(p2Title);
        plat2.appendChild(p2Item);

        const plat3 = document.createElement('div');
        const p3Title = document.createElement('h5');
        p3Title.classList.add('menu-item-titles');
        p3Title.textContent = "Canard a l'Orange";
        const p3Item = document.createElement('p');
        p3Item.classList.add('menu-item-descriptions');
        p3Item.textContent = 'Roast Duck, Orange Supreme, Sauce Bigarade';

        plat3.appendChild(p3Title);
        plat3.appendChild(p3Item);

        const dessert1 = document.createElement('div');
        const d1Title = document.createElement('h5');
        d1Title.classList.add('menu-item-titles');
        d1Title.textContent = 'Tarte Maison'
        const d1Item = document.createElement('p');
        d1Item.classList.add('menu-item-descriptions');
        d1Item.textContent = 'Daily homeade tart';

        dessert1.appendChild(d1Title);
        dessert1.appendChild(d1Item);

        const dessert2 = document.createElement('div');
        const d2Title = document.createElement('h5');
        d2Title.classList.add('menu-item-titles');
        d2Title.textContent = 'Creme Brulee';
        const d2Item = document.createElement('p');
        d2Item.classList.add('menu-item-descriptions');
        d2Item.textContent = 'Custard with sugar and caramel glaze';

        dessert2.appendChild(d2Title);
        dessert2.appendChild(d2Item);

        const dessert3 = document.createElement('div');
        const d3Title = document.createElement('h5');
        d3Title.classList.add('menu-item-titles');
        d3Title.textContent = 'Chocolate Mousses'
        const d3Item = document.createElement('p');
        d3Item.classList.add('menu-item-descriptions');
        d3Item.textContent = 'Creme Chantilly';

        dessert3.appendChild(d3Title);
        dessert3.appendChild(d3Item);
       
        menuContainer.appendChild(entree1);
        menuContainer.appendChild(entree2);
        menuContainer.appendChild(entree3);
        menuContainer.appendChild(plat1);
        menuContainer.appendChild(plat2);
        menuContainer.appendChild(plat3);
        menuContainer.appendChild(dessert1);
        menuContainer.appendChild(dessert2);
        menuContainer.appendChild(dessert3);
    }

    const showContactContent = () => {
        content.textContent = '';
        const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact-container');
        contactContainer.classList.add('fade-in');
        content.appendChild(contactContainer);

        const contactTitle = document.createElement('h1');
        contactTitle.classList.add('contact-title');
        contactTitle.textContent = 'FOR RESERVATIONS AND MORE INFOMATION:'
        const contactNumber = document.createElement('p');
        contactNumber.classList.add('contact-number-email');
        contactNumber.textContent = '(###)-###-####';

        contactContainer.appendChild(contactTitle);
        contactContainer.appendChild(contactNumber);

        const contactBuisiness = document.createElement('h1');
        contactBuisiness.classList.add('contact-title');
        contactBuisiness.textContent = 'FOR BUSINESS INQUIRIES AND ALL ELSE:';
        const contactEmail = document.createElement('p');
        contactEmail.classList.add('contact-number-email');
        contactEmail.textContent = 'LeSacreBleu@frenchworld@@$.com';

        contactContainer.appendChild(contactBuisiness);
        contactContainer.appendChild(contactEmail);
    }

    window.onload = () => {
        showHeader();
        showLandingContent();
        showFooter();
    };  
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJyb2lzK0dvdGhpYytTQyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktYmFja2dyb3VuZDogIzA4NmNkZmQwO1xcbiAgICAtLXByaW1hcnktdGV4dDogYmxhY2s7XFxuICAgIC0tc2Vjb25kYXJ5LXRleHQ6ICNkZmEyMDg7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xcbiAgICBmb250LWZhbWlseTogJ0NhcnJvaXMgR290aGljIFNDJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aXRsZTpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpOyBcXG59XFxuXFxuLmRpcmVjdG9yeSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTUwcHg7XFxufVxcblxcbi5oZWFkZXIgYSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzVweDtcXG4gICAgYm90dG9tOiA3NXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OTYpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmxhbmRpbmctY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAuMTBmciAxZnI7XFxufVxcblxcbi5sYW5kaW5nLWltZy1jb250YWluZXIxIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuLmxhbmRpbmctaW1nIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5sYW5kaW5nLWltZy1jb250YWluZXIyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuLmxhbmRpbmctbGFiZWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmxhbmRpbmctbGFiZWw6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0KTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0KTtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAyNXB4IDEyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uYWJvdXQtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgXFxufVxcblxcbi5hYm91dC1jb250ZW50IHtcXG4gICAgdGV4dC1pbmRlbnQ6IDUwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIFxcbn1cXG5cXG4ubWVudS1pdGVtLXRpdGxlcyB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLm1lbnUtaXRlbS1kZXNjcmlwdGlvbnMge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNjBweDtcXG59XFxuXFxuLmNvbnRhY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbi5jb250YWN0LW51bWJlci1lbWFpbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0KTtcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0KTtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uZmFkZS1pbiB7XFxuYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAycztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbjAlIHtcXG4gICAgb3BhY2l0eTowO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eToxO1xcbn1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlEQUF5QztJQUN6QywwQkFBMEI7SUFDMUIsNENBQTRDO0lBQzVDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCw0Q0FBNEM7SUFDNUMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnJvaXMrR290aGljK1NDJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWJhY2tncm91bmQ6ICMwODZjZGZkMDtcXG4gICAgLS1wcmltYXJ5LXRleHQ6IGJsYWNrO1xcbiAgICAtLXNlY29uZGFyeS10ZXh0OiAjZGZhMjA4O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmFja2dyb3VuZC5qcGcnKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fycm9pcyBHb3RoaWMgU0MnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50aXRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dCk7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dCk7IFxcbn1cXG5cXG4uZGlyZWN0b3J5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNTBweDtcXG59XFxuXFxuLmhlYWRlciBhIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA3NXB4O1xcbiAgICBib3R0b206IDc1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU5Nik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubGFuZGluZy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMHB4O1xcbiAgICBib3R0b206IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDI1cHggMjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIC4xMGZyIDFmcjtcXG59XFxuXFxuLmxhbmRpbmctaW1nLWNvbnRhaW5lcjEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4ubGFuZGluZy1pbWcge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmxhbmRpbmctaW1nLWNvbnRhaW5lcjIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGdyaWQtY29sdW1uOiAzO1xcbn1cXG5cXG4ubGFuZGluZy1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubGFuZGluZy1sYWJlbDpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDI1cHggMTI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5hYm91dC10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBcXG59XFxuXFxuLmFib3V0LWNvbnRlbnQge1xcbiAgICB0ZXh0LWluZGVudDogNTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNTBweDtcXG4gICAgXFxufVxcblxcbi5tZW51LWl0ZW0tdGl0bGVzIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubWVudS1pdGVtLWRlc2NyaXB0aW9ucyB7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2MHB4O1xcbn1cXG5cXG4uY29udGFjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuLmNvbnRhY3QtbnVtYmVyLWVtYWlsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQpO1xcbn1cXG5cXG4uZm9vdGVyIGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQpO1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5mYWRlLWluIHtcXG5hbmltYXRpb246IGZhZGVJbiBlYXNlIDJzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuMCUge1xcbiAgICBvcGFjaXR5OjA7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OjE7XFxufVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGltZzEgZnJvbSAnLi9jaGVlc2VfbGFuZGluZy5qcGcnO1xuaW1wb3J0IGltZzIgZnJvbSAnLi9yZXN0YXVyYW50X2xhbmRpbmcuanBnJztcblxuY29uc3QgcmVzdGF1cmFudFBhZ2UgPSAoKCkgPT4ge1xuICAgIC8vIG1haW4gY29udGFpbmVyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgXG4gICAgLy8gaGVhZGVyXG4gICAgY29uc3Qgc2hvd0hlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgICAgICAvLyB0aXRsZVxuICAgICAgICBjb25zdCByZXN0YXVyYW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICByZXN0YXVyYW50VGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gJ0NoZXogQ2hyaXN0b3BoZSc7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50VGl0bGUpO1xuXG4gICAgICAgIHJlc3RhdXJhbnRUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dMYW5kaW5nQ29udGVudCk7XG5cbiAgICAgICAgLy8gZGlyZWN0b3J5XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGRpcmVjdG9yeS5jbGFzc0xpc3QuYWRkKCdkaXJlY3RvcnknKTtcbiAgICAgICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGFib3V0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICAgICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICAgICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAgICAgZGlyZWN0b3J5LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICAgICAgZGlyZWN0b3J5LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgICAgICBkaXJlY3RvcnkuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXJlY3RvcnkpO1xuXG4gICAgICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Fib3V0Q29udGVudCk7XG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudUNvbnRlbnQpO1xuICAgICAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0NvbnRhY3RDb250ZW50KTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgIC8vIGZvb3RlclxuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjEgQ2hyaXN0b3BoZXIgSi4gUG9obFwiO1xuICAgICAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0NKUG9obCc7XG4gICAgICAgIFxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICB9XG5cbiAgICAvLyBtYWluIGxhbmRpbmcgcGFnZSB0YWJcbiAgICBjb25zdCBzaG93TGFuZGluZ0NvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29uc3QgbGFuZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsYW5kaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xhbmRpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGxhbmRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGxhbmRpbmdDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGltZzFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1nMUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsYW5kaW5nLWltZy1jb250YWluZXIxJyk7XG4gICAgICAgIGNvbnN0IGxhbmRpbmdJbWcxID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxhbmRpbmdJbWcxLnNyYyA9IGltZzE7XG4gICAgICAgIGxhbmRpbmdJbWcxLmNsYXNzTGlzdC5hZGQoJ2xhbmRpbmctaW1nJyk7XG4gICAgICAgIGltZzFDb250YWluZXIuYXBwZW5kQ2hpbGQobGFuZGluZ0ltZzEpO1xuXG4gICAgICAgIGNvbnN0IGltZzJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1nMkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsYW5kaW5nLWltZy1jb250YWluZXIyJyk7XG4gICAgICAgIGNvbnN0IGxhbmRpbmdJbWcyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxhbmRpbmdJbWcyLnNyYyA9IGltZzI7XG4gICAgICAgIGxhbmRpbmdJbWcyLmNsYXNzTGlzdC5hZGQoJ2xhbmRpbmctaW1nJyk7XG4gICAgICAgIGltZzJDb250YWluZXIuYXBwZW5kQ2hpbGQobGFuZGluZ0ltZzIpO1xuICAgICAgICBcbiAgICAgICAgbGFuZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcxQ29udGFpbmVyKTtcbiAgICAgICAgbGFuZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcyQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBjaGVlc2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNoZWVzZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhbmRpbmctbGFiZWwnKTtcbiAgICAgICAgcmVzdGF1cmFudExhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhbmRpbmctbGFiZWwnKTtcbiAgICAgICAgY2hlZXNlTGFiZWwudGV4dENvbnRlbnQgPSAnRnJvbWFnZXJpZSc7XG4gICAgICAgIHJlc3RhdXJhbnRMYWJlbC50ZXh0Q29udGVudCA9ICdSZXN0YXVyYW50JztcblxuICAgICAgICBpbWcxQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWVzZUxhYmVsKTtcbiAgICAgICAgaW1nMkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TGFiZWwpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dBYm91dENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IGFib3V0Q29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFib3V0Q29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGFib3V0Q29udGVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgYWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGFpbmVyJyk7XG4gICAgICAgIGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICAgICAgYWJvdXRUaXRsZS5jbGFzc0xpc3QuYWRkKCdhYm91dC10aXRsZScpO1xuICAgICAgICBhYm91dENvbnRlbnQxLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRlbnQnKTtcbiAgICAgICAgYWJvdXRDb250ZW50Mi5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50Jyk7XG4gICAgICAgIGFib3V0Q29udGVudDMuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudCcpO1xuXG4gICAgICAgIGFib3V0VGl0bGUudGV4dENvbnRlbnQgPSAnQ2UgUmVzdGF1cmFudCc7XG4gICAgICAgIGFib3V0Q29udGVudDEudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFB1cnVzIHZpdmVycmEgYWNjdW1zYW4gaW4gbmlzbCBuaXNpIHNjZWxlcmlzcXVlIGV1LiBDcmFzIGFkaXBpc2NpbmcgZW5pbSBldSB0dXJwaXMgZWdlc3RhcyBwcmV0aXVtLiBNYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgc2VkIHRlbXB1cyB1cm5hLiBFZ2VzdGFzIGRpYW0gaW4gYXJjdSBjdXJzdXMgZXVpc21vZCBxdWlzLiBGdXNjZSBpZCB2ZWxpdCB1dCB0b3J0b3IgcHJldGl1bS4gRXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIG1hZWNlbmFzIHBoYXJldHJhIGNvbnZhbGxpcyBwb3N1ZXJlLiBJZCBmYXVjaWJ1cyBuaXNsIHRpbmNpZHVudCBlZ2V0IG51bGxhbSBub24gbmlzaSBlc3Qgc2l0LiBOdWxsYSBmYWNpbGlzaSBudWxsYW0gdmVoaWN1bGEgaXBzdW0uIE51bmMgYWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcyBncmF2aWRhIG5lcXVlIGNvbnZhbGxpcyBhLiBFcmF0IG5hbSBhdCBsZWN0dXMgdXJuYSBkdWlzIGNvbnZhbGxpcy4gUGVsbGVudGVzcXVlIGRpZ25pc3NpbSBlbmltIHNpdCBhbWV0IHZlbmVuYXRpcyB1cm5hIGN1cnN1cy4nO1xuICAgICAgICBhYm91dENvbnRlbnQyLnRleHRDb250ZW50ID0gJ1VsdHJpY2VzIHZpdGFlIGF1Y3RvciBldSBhdWd1ZSB1dCBsZWN0dXMgYXJjdS4gUHJhZXNlbnQgdHJpc3RpcXVlIG1hZ25hIHNpdCBhbWV0IHB1cnVzIGdyYXZpZGEuIEJpYmVuZHVtIG5lcXVlIGVnZXN0YXMgY29uZ3VlIHF1aXNxdWUgZWdlc3RhcyBkaWFtIGluIGFyY3UgY3Vyc3VzLiBTb2xsaWNpdHVkaW4gbmliaCBzaXQgYW1ldCBjb21tb2RvIG51bGxhIGZhY2lsaXNpLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdCB2ZXN0aWJ1bHVtLiBTdXNjaXBpdCB0ZWxsdXMgbWF1cmlzIGEgZGlhbSBtYWVjZW5hcyBzZWQgZW5pbS4gRWxpdCBkdWlzIHRyaXN0aXF1ZSBzb2xsaWNpdHVkaW4gbmliaCBzaXQgYW1ldCBjb21tb2RvLiBQdWx2aW5hciBuZXF1ZSBsYW9yZWV0IHN1c3BlbmRpc3NlIGludGVyZHVtLiBUb3J0b3IgY29uZGltZW50dW0gbGFjaW5pYSBxdWlzIHZlbCBlcm9zLiBEaWFtIHF1YW0gbnVsbGEgcG9ydHRpdG9yIG1hc3NhIGlkIG5lcXVlIGFsaXF1YW0gdmVzdGlidWx1bSBtb3JiaS4gSWQgdm9sdXRwYXQgbGFjdXMgbGFvcmVldCBub24gY3VyYWJpdHVyIGdyYXZpZGEuIFRlbGx1cyBtYXVyaXMgYSBkaWFtIG1hZWNlbmFzLiBFZ2V0IG51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbSBkaWFtIHF1aXMuJztcbiAgICAgICAgYWJvdXRDb250ZW50My50ZXh0Q29udGVudCA9ICdVbHRyaWNlcyBlcm9zIGluIGN1cnN1cyB0dXJwaXMgbWFzc2EuIER1aXMgdXQgZGlhbSBxdWFtIG51bGxhIHBvcnR0aXRvciBtYXNzYSBpZCBuZXF1ZS4gRW5pbSBzaXQgYW1ldCB2ZW5lbmF0aXMgdXJuYSBjdXJzdXMuIFF1aXMgYmxhbmRpdCB0dXJwaXMgY3Vyc3VzIGluIGhhYy4gRWdldCBsb3JlbSBkb2xvciBzZWQgdml2ZXJyYSBpcHN1bSBudW5jIGFsaXF1ZXQgYmliZW5kdW0uIFZvbHV0cGF0IGVzdCB2ZWxpdCBlZ2VzdGFzIGR1aSBpZCBvcm5hcmUuIFNlZCBsZWN0dXMgdmVzdGlidWx1bSBtYXR0aXMgdWxsYW1jb3JwZXIuIEV0IGxpZ3VsYSB1bGxhbWNvcnBlciBtYWxlc3VhZGEgcHJvaW4uIExvYm9ydGlzIGZldWdpYXQgdml2YW11cyBhdCBhdWd1ZSBlZ2V0IGFyY3UgZGljdHVtLiBDb25zZXF1YXQgbWF1cmlzIG51bmMgY29uZ3VlIG5pc2kgdml0YWUgc3VzY2lwaXQgdGVsbHVzLiBFdSBjb25zZXF1YXQgYWMgZmVsaXMgZG9uZWMgZXQgb2Rpby4gRWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdCBhYy4gQW1ldCBkaWN0dW0gc2l0IGFtZXQganVzdG8gZG9uZWMgZW5pbSBkaWFtIHZ1bHB1dGF0ZS4gUHJldGl1bSBhZW5lYW4gcGhhcmV0cmEgbWFnbmEgYWMgcGxhY2VyYXQgdmVzdGlidWx1bSBsZWN0dXMuIFRlbXB1cyBxdWFtIHBlbGxlbnRlc3F1ZSBuZWMgbmFtLiBHcmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMgb3JjaSBhYyBhdWN0b3IuIFV0IGZhdWNpYnVzIHB1bHZpbmFyIGVsZW1lbnR1bSBpbnRlZ2VyIGVuaW0gbmVxdWUuIE5lcXVlIG9ybmFyZSBhZW5lYW4gZXVpc21vZCBlbGVtZW50dW0gbmlzaSBxdWlzLiBPcm5hcmUgcXVhbSB2aXZlcnJhIG9yY2kgc2FnaXR0aXMuJztcblxuICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKTtcbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50MSk7XG4gICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGVudDIpO1xuICAgICAgICBhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQzKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNob3dNZW51Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgZW50cmVlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBlMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgZTFUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tdGl0bGVzJyk7XG4gICAgICAgIGUxVGl0bGUudGV4dENvbnRlbnQgPSAnRXNjYXJnb3RzIGRlIEJvdXJnb2duZSdcbiAgICAgICAgY29uc3QgZTFJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlMUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWRlc2NyaXB0aW9ucycpO1xuICAgICAgICBlMUl0ZW0udGV4dENvbnRlbnQgPSAnU25haWxzLCBHYXJsaWMgQnV0dGVyLCBIZXJicywgV2hpdGUgV2luZSc7XG5cbiAgICAgICAgZW50cmVlMS5hcHBlbmRDaGlsZChlMVRpdGxlKTtcbiAgICAgICAgZW50cmVlMS5hcHBlbmRDaGlsZChlMUl0ZW0pO1xuXG4gICAgICAgIGNvbnN0IGVudHJlZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZTJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGUyVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlcycpO1xuICAgICAgICBlMlRpdGxlLnRleHRDb250ZW50ID0gJ0Jha2VkIFNlYWZvb2QgQ3JlcGUnXG4gICAgICAgIGNvbnN0IGUySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZTJJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbnMnKTtcbiAgICAgICAgZTJJdGVtLnRleHRDb250ZW50ID0gJ1NjYWxsb3AsIFNocmltcCwgTXVzaHJvb20gQ2FyYW1lbGl6ZWQgT25pb24gJiBCZWNoYW1lbCc7XG5cbiAgICAgICAgZW50cmVlMi5hcHBlbmRDaGlsZChlMlRpdGxlKTtcbiAgICAgICAgZW50cmVlMi5hcHBlbmRDaGlsZChlMkl0ZW0pO1xuXG4gICAgICAgIGNvbnN0IGVudHJlZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZTNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGUzVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlcycpO1xuICAgICAgICBlM1RpdGxlLnRleHRDb250ZW50ID0gJ1BhdGUgZGUgQ2FtcGFnbmUnXG4gICAgICAgIGNvbnN0IGUzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZTNJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbnMnKTtcbiAgICAgICAgZTNJdGVtLnRleHRDb250ZW50ID0gJ1J1c3RpYyBQb3JrICYgRHVjayBSZWNpcGUsIENvcm5pY2hvbnMgRHVvIGRlIE1vdXRhcmRlJztcblxuICAgICAgICBlbnRyZWUzLmFwcGVuZENoaWxkKGUzVGl0bGUpO1xuICAgICAgICBlbnRyZWUzLmFwcGVuZENoaWxkKGUzSXRlbSk7XG5cbiAgICAgICAgY29uc3QgcGxhdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcDFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIHAxVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlcycpO1xuICAgICAgICBwMVRpdGxlLnRleHRDb250ZW50ID0gJ1RydWl0ZSBBbWFuZGluZSc7XG4gICAgICAgIGNvbnN0IHAxSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcDFJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbnMnKTtcbiAgICAgICAgcDFJdGVtLnRleHRDb250ZW50ID0gJ1BhbiBTZWFyZWQgUmFpbmJvdyBUcm91dCwgVG9hc3RlZCBBbG1vbmRzIEdyaWxsZWQgTGVtb24sIEJyb3duIEJ1dHRlcic7XG5cbiAgICAgICAgcGxhdDEuYXBwZW5kQ2hpbGQocDFUaXRsZSk7XG4gICAgICAgIHBsYXQxLmFwcGVuZENoaWxkKHAxSXRlbSk7XG5cbiAgICAgICAgY29uc3QgcGxhdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcDJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIHAyVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlcycpO1xuICAgICAgICBwMlRpdGxlLnRleHRDb250ZW50ID0gJ0NvcSBBdSBWaW4nO1xuICAgICAgICBjb25zdCBwMkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAySXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb25zJyk7XG4gICAgICAgIHAySXRlbS50ZXh0Q29udGVudCA9ICdIYWxmIEFtaXNoIENoaWNrZW4gQnJhaXNlZCBpbiBXaW5lLCBNdXNocm9vbSc7XG5cbiAgICAgICAgcGxhdDIuYXBwZW5kQ2hpbGQocDJUaXRsZSk7XG4gICAgICAgIHBsYXQyLmFwcGVuZENoaWxkKHAySXRlbSk7XG5cbiAgICAgICAgY29uc3QgcGxhdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcDNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIHAzVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlcycpO1xuICAgICAgICBwM1RpdGxlLnRleHRDb250ZW50ID0gXCJDYW5hcmQgYSBsJ09yYW5nZVwiO1xuICAgICAgICBjb25zdCBwM0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAzSXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb25zJyk7XG4gICAgICAgIHAzSXRlbS50ZXh0Q29udGVudCA9ICdSb2FzdCBEdWNrLCBPcmFuZ2UgU3VwcmVtZSwgU2F1Y2UgQmlnYXJhZGUnO1xuXG4gICAgICAgIHBsYXQzLmFwcGVuZENoaWxkKHAzVGl0bGUpO1xuICAgICAgICBwbGF0My5hcHBlbmRDaGlsZChwM0l0ZW0pO1xuXG4gICAgICAgIGNvbnN0IGRlc3NlcnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGQxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBkMVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10aXRsZXMnKTtcbiAgICAgICAgZDFUaXRsZS50ZXh0Q29udGVudCA9ICdUYXJ0ZSBNYWlzb24nXG4gICAgICAgIGNvbnN0IGQxSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZDFJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbnMnKTtcbiAgICAgICAgZDFJdGVtLnRleHRDb250ZW50ID0gJ0RhaWx5IGhvbWVhZGUgdGFydCc7XG5cbiAgICAgICAgZGVzc2VydDEuYXBwZW5kQ2hpbGQoZDFUaXRsZSk7XG4gICAgICAgIGRlc3NlcnQxLmFwcGVuZENoaWxkKGQxSXRlbSk7XG5cbiAgICAgICAgY29uc3QgZGVzc2VydDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZDJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGQyVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlcycpO1xuICAgICAgICBkMlRpdGxlLnRleHRDb250ZW50ID0gJ0NyZW1lIEJydWxlZSc7XG4gICAgICAgIGNvbnN0IGQySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZDJJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1kZXNjcmlwdGlvbnMnKTtcbiAgICAgICAgZDJJdGVtLnRleHRDb250ZW50ID0gJ0N1c3RhcmQgd2l0aCBzdWdhciBhbmQgY2FyYW1lbCBnbGF6ZSc7XG5cbiAgICAgICAgZGVzc2VydDIuYXBwZW5kQ2hpbGQoZDJUaXRsZSk7XG4gICAgICAgIGRlc3NlcnQyLmFwcGVuZENoaWxkKGQySXRlbSk7XG5cbiAgICAgICAgY29uc3QgZGVzc2VydDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZDNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgIGQzVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLXRpdGxlcycpO1xuICAgICAgICBkM1RpdGxlLnRleHRDb250ZW50ID0gJ0Nob2NvbGF0ZSBNb3Vzc2VzJ1xuICAgICAgICBjb25zdCBkM0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGQzSXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tZGVzY3JpcHRpb25zJyk7XG4gICAgICAgIGQzSXRlbS50ZXh0Q29udGVudCA9ICdDcmVtZSBDaGFudGlsbHknO1xuXG4gICAgICAgIGRlc3NlcnQzLmFwcGVuZENoaWxkKGQzVGl0bGUpO1xuICAgICAgICBkZXNzZXJ0My5hcHBlbmRDaGlsZChkM0l0ZW0pO1xuICAgICAgIFxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJlZTEpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJlZTIpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJlZTMpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXQxKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF0Mik7XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocGxhdDMpO1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnQxKTtcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0Mik7XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydDMpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dDb250YWN0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jb250YWluZXInKTtcbiAgICAgICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29udGFjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGl0bGUnKTtcbiAgICAgICAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0ZPUiBSRVNFUlZBVElPTlMgQU5EIE1PUkUgSU5GT01BVElPTjonXG4gICAgICAgIGNvbnN0IGNvbnRhY3ROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnRhY3ROdW1iZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1udW1iZXItZW1haWwnKTtcbiAgICAgICAgY29udGFjdE51bWJlci50ZXh0Q29udGVudCA9ICcoIyMjKS0jIyMtIyMjIyc7XG5cbiAgICAgICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhY3RCdWlzaW5lc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb250YWN0QnVpc2luZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGl0bGUnKTtcbiAgICAgICAgY29udGFjdEJ1aXNpbmVzcy50ZXh0Q29udGVudCA9ICdGT1IgQlVTSU5FU1MgSU5RVUlSSUVTIEFORCBBTEwgRUxTRTonO1xuICAgICAgICBjb25zdCBjb250YWN0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnRhY3RFbWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW51bWJlci1lbWFpbCcpO1xuICAgICAgICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSAnTGVTYWNyZUJsZXVAZnJlbmNod29ybGRAQCQuY29tJztcblxuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdWlzaW5lc3MpO1xuICAgICAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG4gICAgfVxuXG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgc2hvd0hlYWRlcigpO1xuICAgICAgICBzaG93TGFuZGluZ0NvbnRlbnQoKTtcbiAgICAgICAgc2hvd0Zvb3RlcigpO1xuICAgIH07ICBcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9