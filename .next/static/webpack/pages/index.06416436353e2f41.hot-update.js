"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/useI18n.js":
/*!************************!*\
  !*** ./lib/useI18n.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useI18n; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_i18n_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/i18n.json */ \"./public/i18n.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\nfunction useI18n() {\n    _s();\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    console.log(pathname);\n    if (pathname === \"\") {\n        return _public_i18n_json__WEBPACK_IMPORTED_MODULE_1__.en;\n    } else if (pathname === \"zh\") {\n        return _public_i18n_json__WEBPACK_IMPORTED_MODULE_1__.zh;\n    } else {\n        return _public_i18n_json__WEBPACK_IMPORTED_MODULE_1__.en;\n    }\n}\n_s(useI18n, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXNlSTE4bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0Q7QUFDTDtBQUVuQixTQUFTRzs7SUFDcEIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0osc0RBQVNBO0lBQzlCSyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osSUFBSUEsYUFBYSxJQUFJO1FBQ2pCLE9BQU9ILGlEQUFVO0lBQ3JCLE9BQU8sSUFBSUcsYUFBYSxNQUFNO1FBQzFCLE9BQU9ILGlEQUFVO0lBQ3JCLE9BQU87UUFDSCxPQUFPQSxpREFBVTtJQUNyQjtBQUNKO0dBVndCRTs7UUFDQ0gsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91c2VJMThuLmpzPzkwNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgaTE4biBmcm9tIFwiLi4vcHVibGljL2kxOG4uanNvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUkxOG4oKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2cocGF0aG5hbWUpXG4gICAgaWYgKHBhdGhuYW1lID09PSBcIlwiKSB7XG4gICAgICAgIHJldHVybiBpMThuW1wiZW5cIl07XG4gICAgfSBlbHNlIGlmIChwYXRobmFtZSA9PT0gXCJ6aFwiKSB7XG4gICAgICAgIHJldHVybiBpMThuW1wiemhcIl07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGkxOG5bXCJlblwiXTtcbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsImkxOG4iLCJ1c2VFZmZlY3QiLCJ1c2VJMThuIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useI18n.js\n"));

/***/ })

});