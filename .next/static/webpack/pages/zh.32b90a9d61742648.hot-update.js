"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/zh",{

/***/ "./lib/useI18n.js":
/*!************************!*\
  !*** ./lib/useI18n.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useI18n; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/i18n */ \"./public/i18n.js\");\nvar _s = $RefreshSig$();\n\n\nfunction useI18n() {\n    _s();\n    const { locale } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    return locale === \"zh\" ? _public_i18n__WEBPACK_IMPORTED_MODULE_1__.zh : _public_i18n__WEBPACK_IMPORTED_MODULE_1__.en;\n}\n_s(useI18n, \"8NqG7Oj4xICngQpoOytAK34hitI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXNlSTE4bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNBO0FBRXpCLFNBQVNHOztJQUNwQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHSixzREFBU0E7SUFDNUIsT0FBT0ksV0FBVyxPQUFPRiw0Q0FBRUEsR0FBR0QsNENBQUVBO0FBQ3BDO0dBSHdCRTs7UUFDREgsa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91c2VJMThuLmpzPzkwNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBlbiwgemggfSBmcm9tIFwiLi4vcHVibGljL2kxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSTE4bigpIHtcbiAgICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlUm91dGVyKCk7XG4gICAgcmV0dXJuIGxvY2FsZSA9PT0gXCJ6aFwiID8gemggOiBlbjtcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZW4iLCJ6aCIsInVzZUkxOG4iLCJsb2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/useI18n.js\n"));

/***/ }),

/***/ "./public/i18n.js":
/*!************************!*\
  !*** ./public/i18n.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   en: function() { return /* binding */ en; },\n/* harmony export */   zh: function() { return /* binding */ zh; }\n/* harmony export */ });\nconst en = {\n    siteName: \"URLxcode\",\n    siteTitle: \"URL Encode/Decode - Online Tool - URLxcode.com\",\n    siteDescription: \"Encode URL to URL-encoded format or decode from it easily. Our site is an online tool to convert your URL.\",\n    placeHolderInput: \"Please enter the text to encod/decod.\",\n    placeHolderOutput: \"URL encoded/decoded result.\",\n    promptTitle: \"Encode to URL-encoded format or decode from it\",\n    copyMsgSuccess: \"Copied!\",\n    copyMsgError: \"Copy failed.\",\n    btnCopyText: \"Copy output\",\n    btnDecodeText: \"Decode\",\n    btnEncodeText: \"Encode\",\n    btnClearText: \"Clear\",\n    btnSwapText: \"Swap\",\n    btnParseText: \"Parse\",\n    optionURIText: \"Don't encode special characters\",\n    optionURIComponentText: \"Encode special characters\",\n    URITooltip: \"Using the encodeURI() method of JavaScript to implement.\",\n    URIComponentTooltip: \"Using the encodeURIComponent() method of JavaScript to implement.\",\n    btnToJsonText: \"To JSON\"\n};\nconst zh = {\n    siteName: \"URLxcode\",\n    siteTitle: \"URL 编码、解码 - 在线工具 - URLxcode.com\",\n    siteDescription: \"将 URL 编码为 URL 编码格式或轻松解码。我们的网站是一个在线工具，可以转换您的URL。\",\n    placeHolderInput: \"请输入要编码/解码的文本。\",\n    placeHolderOutput: \"URL 编码/解码结果。\",\n    promptTitle: \"编码为 URL 编码格式或从中解码\",\n    copyMsgSuccess: \"已复制！\",\n    copyMsgError: \"复制失败。\",\n    btnCopyText: \"复制结果\",\n    btnDecodeText: \"解码\",\n    btnEncodeText: \"编码\",\n    btnClearText: \"清除\",\n    btnSwapText: \"交换\",\n    btnParseText: \"解析\",\n    optionURIText: \"不对特殊字符进行编码\",\n    optionURIComponentText: \"对特殊字符进行编码\",\n    URITooltip: \"使用 JavaScript 的 encodeURI() 方法实现。\",\n    URIComponentTooltip: \"使用 JavaScript 的 encodeURIComponent() 方法实现。\",\n    btnToJsonText: \"转为 JSON\"\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvaTE4bi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLEtBQUs7SUFDaEJDLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxpQkFDRTtJQUNGQyxrQkFBa0I7SUFDbEJDLG1CQUFtQjtJQUNuQkMsYUFBYTtJQUNiQyxnQkFBZ0I7SUFDaEJDLGNBQWM7SUFDZEMsYUFBYTtJQUNiQyxlQUFlO0lBQ2ZDLGVBQWU7SUFDZkMsY0FBYztJQUNkQyxhQUFhO0lBQ2JDLGNBQWM7SUFDZEMsZUFBZTtJQUNmQyx3QkFBd0I7SUFDeEJDLFlBQVk7SUFDWkMscUJBQ0U7SUFDRkMsZUFBZTtBQUNqQixFQUFFO0FBRUssTUFBTUMsS0FBSztJQUNoQm5CLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxpQkFDRTtJQUNGQyxrQkFBa0I7SUFDbEJDLG1CQUFtQjtJQUNuQkMsYUFBYTtJQUNiQyxnQkFBZ0I7SUFDaEJDLGNBQWM7SUFDZEMsYUFBYTtJQUNiQyxlQUFlO0lBQ2ZDLGVBQWU7SUFDZkMsY0FBYztJQUNkQyxhQUFhO0lBQ2JDLGNBQWM7SUFDZEMsZUFBZTtJQUNmQyx3QkFBd0I7SUFDeEJDLFlBQVk7SUFDWkMscUJBQXFCO0lBQ3JCQyxlQUFlO0FBQ2pCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL2kxOG4uanM/NmJkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW4gPSB7XG4gIHNpdGVOYW1lOiBcIlVSTHhjb2RlXCIsXG4gIHNpdGVUaXRsZTogXCJVUkwgRW5jb2RlL0RlY29kZSAtIE9ubGluZSBUb29sIC0gVVJMeGNvZGUuY29tXCIsXG4gIHNpdGVEZXNjcmlwdGlvbjpcbiAgICBcIkVuY29kZSBVUkwgdG8gVVJMLWVuY29kZWQgZm9ybWF0IG9yIGRlY29kZSBmcm9tIGl0IGVhc2lseS4gT3VyIHNpdGUgaXMgYW4gb25saW5lIHRvb2wgdG8gY29udmVydCB5b3VyIFVSTC5cIixcbiAgcGxhY2VIb2xkZXJJbnB1dDogXCJQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gZW5jb2QvZGVjb2QuXCIsXG4gIHBsYWNlSG9sZGVyT3V0cHV0OiBcIlVSTCBlbmNvZGVkL2RlY29kZWQgcmVzdWx0LlwiLFxuICBwcm9tcHRUaXRsZTogXCJFbmNvZGUgdG8gVVJMLWVuY29kZWQgZm9ybWF0IG9yIGRlY29kZSBmcm9tIGl0XCIsXG4gIGNvcHlNc2dTdWNjZXNzOiBcIkNvcGllZCFcIixcbiAgY29weU1zZ0Vycm9yOiBcIkNvcHkgZmFpbGVkLlwiLFxuICBidG5Db3B5VGV4dDogXCJDb3B5IG91dHB1dFwiLFxuICBidG5EZWNvZGVUZXh0OiBcIkRlY29kZVwiLFxuICBidG5FbmNvZGVUZXh0OiBcIkVuY29kZVwiLFxuICBidG5DbGVhclRleHQ6IFwiQ2xlYXJcIixcbiAgYnRuU3dhcFRleHQ6IFwiU3dhcFwiLFxuICBidG5QYXJzZVRleHQ6IFwiUGFyc2VcIixcbiAgb3B0aW9uVVJJVGV4dDogXCJEb24ndCBlbmNvZGUgc3BlY2lhbCBjaGFyYWN0ZXJzXCIsXG4gIG9wdGlvblVSSUNvbXBvbmVudFRleHQ6IFwiRW5jb2RlIHNwZWNpYWwgY2hhcmFjdGVyc1wiLFxuICBVUklUb29sdGlwOiBcIlVzaW5nIHRoZSBlbmNvZGVVUkkoKSBtZXRob2Qgb2YgSmF2YVNjcmlwdCB0byBpbXBsZW1lbnQuXCIsXG4gIFVSSUNvbXBvbmVudFRvb2x0aXA6XG4gICAgXCJVc2luZyB0aGUgZW5jb2RlVVJJQ29tcG9uZW50KCkgbWV0aG9kIG9mIEphdmFTY3JpcHQgdG8gaW1wbGVtZW50LlwiLFxuICBidG5Ub0pzb25UZXh0OiBcIlRvIEpTT05cIixcbn07XG5cbmV4cG9ydCBjb25zdCB6aCA9IHtcbiAgc2l0ZU5hbWU6IFwiVVJMeGNvZGVcIixcbiAgc2l0ZVRpdGxlOiBcIlVSTCDnvJbnoIHjgIHop6PnoIEgLSDlnKjnur/lt6XlhbcgLSBVUkx4Y29kZS5jb21cIixcbiAgc2l0ZURlc2NyaXB0aW9uOlxuICAgIFwi5bCGIFVSTCDnvJbnoIHkuLogVVJMIOe8lueggeagvOW8j+aIlui9u+advuino+eggeOAguaIkeS7rOeahOe9keermeaYr+S4gOS4quWcqOe6v+W3peWFt++8jOWPr+S7pei9rOaNouaCqOeahFVSTOOAglwiLFxuICBwbGFjZUhvbGRlcklucHV0OiBcIuivt+i+k+WFpeimgee8lueggS/op6PnoIHnmoTmlofmnKzjgIJcIixcbiAgcGxhY2VIb2xkZXJPdXRwdXQ6IFwiVVJMIOe8lueggS/op6PnoIHnu5PmnpzjgIJcIixcbiAgcHJvbXB0VGl0bGU6IFwi57yW56CB5Li6IFVSTCDnvJbnoIHmoLzlvI/miJbku47kuK3op6PnoIFcIixcbiAgY29weU1zZ1N1Y2Nlc3M6IFwi5bey5aSN5Yi277yBXCIsXG4gIGNvcHlNc2dFcnJvcjogXCLlpI3liLblpLHotKXjgIJcIixcbiAgYnRuQ29weVRleHQ6IFwi5aSN5Yi257uT5p6cXCIsXG4gIGJ0bkRlY29kZVRleHQ6IFwi6Kej56CBXCIsXG4gIGJ0bkVuY29kZVRleHQ6IFwi57yW56CBXCIsXG4gIGJ0bkNsZWFyVGV4dDogXCLmuIXpmaRcIixcbiAgYnRuU3dhcFRleHQ6IFwi5Lqk5o2iXCIsXG4gIGJ0blBhcnNlVGV4dDogXCLop6PmnpBcIixcbiAgb3B0aW9uVVJJVGV4dDogXCLkuI3lr7nnibnmrorlrZfnrKbov5vooYznvJbnoIFcIixcbiAgb3B0aW9uVVJJQ29tcG9uZW50VGV4dDogXCLlr7nnibnmrorlrZfnrKbov5vooYznvJbnoIFcIixcbiAgVVJJVG9vbHRpcDogXCLkvb/nlKggSmF2YVNjcmlwdCDnmoQgZW5jb2RlVVJJKCkg5pa55rOV5a6e546w44CCXCIsXG4gIFVSSUNvbXBvbmVudFRvb2x0aXA6IFwi5L2/55SoIEphdmFTY3JpcHQg55qEIGVuY29kZVVSSUNvbXBvbmVudCgpIOaWueazleWunueOsOOAglwiLFxuICBidG5Ub0pzb25UZXh0OiBcIui9rOS4uiBKU09OXCIsXG59O1xuIl0sIm5hbWVzIjpbImVuIiwic2l0ZU5hbWUiLCJzaXRlVGl0bGUiLCJzaXRlRGVzY3JpcHRpb24iLCJwbGFjZUhvbGRlcklucHV0IiwicGxhY2VIb2xkZXJPdXRwdXQiLCJwcm9tcHRUaXRsZSIsImNvcHlNc2dTdWNjZXNzIiwiY29weU1zZ0Vycm9yIiwiYnRuQ29weVRleHQiLCJidG5EZWNvZGVUZXh0IiwiYnRuRW5jb2RlVGV4dCIsImJ0bkNsZWFyVGV4dCIsImJ0blN3YXBUZXh0IiwiYnRuUGFyc2VUZXh0Iiwib3B0aW9uVVJJVGV4dCIsIm9wdGlvblVSSUNvbXBvbmVudFRleHQiLCJVUklUb29sdGlwIiwiVVJJQ29tcG9uZW50VG9vbHRpcCIsImJ0blRvSnNvblRleHQiLCJ6aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/i18n.js\n"));

/***/ })

});