"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/kr",{

/***/ "./lib/useI18n.js":
/*!************************!*\
  !*** ./lib/useI18n.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useI18n; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_i18n_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/i18n.json */ \"./public/i18n.json\");\nvar _s = $RefreshSig$();\n\n\nfunction useI18n() {\n    _s();\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    console.log(pathname);\n    const languageMap = {\n        \"/\": \"en\",\n        \"/zh\": \"zh\",\n        \"/kr\": \"kr\",\n        \"/jp\": \"jp\"\n    };\n    const language = languageMap[pathname] || \"en\";\n    return _public_i18n_json__WEBPACK_IMPORTED_MODULE_1__[language];\n}\n_s(useI18n, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXNlSTE4bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNEO0FBRXhCLFNBQVNFOztJQUN0QixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHSCxzREFBU0E7SUFDOUJJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNRyxjQUFjO1FBQ2xCLEtBQUs7UUFDTCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87SUFDVDtJQUNBLE1BQU1DLFdBQVdELFdBQVcsQ0FBQ0gsU0FBUyxJQUFJO0lBQzFDLE9BQU9GLDhDQUFJLENBQUNNLFNBQVM7QUFDdkI7R0FYd0JMOztRQUNERixrREFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUkxOG4uanM/OTA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBpMThuIGZyb20gXCIuLi9wdWJsaWMvaTE4bi5qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUkxOG4oKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhwYXRobmFtZSlcbiAgY29uc3QgbGFuZ3VhZ2VNYXAgPSB7XG4gICAgXCIvXCI6IFwiZW5cIixcbiAgICBcIi96aFwiOiBcInpoXCIsXG4gICAgXCIva3JcIjogXCJrclwiLFxuICAgIFwiL2pwXCI6IFwianBcIixcbiAgfTtcbiAgY29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZU1hcFtwYXRobmFtZV0gfHwgXCJlblwiO1xuICByZXR1cm4gaTE4bltsYW5ndWFnZV07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiaTE4biIsInVzZUkxOG4iLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsYW5ndWFnZU1hcCIsImxhbmd1YWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/useI18n.js\n"));

/***/ })

});