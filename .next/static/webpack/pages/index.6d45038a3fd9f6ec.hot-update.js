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

/***/ "./components/URLConvertor.js":
/*!************************************!*\
  !*** ./components/URLConvertor.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ URLConvertor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./URLConvertor.module.css */ \"./components/URLConvertor.module.css\");\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst placeHolderInput = \"Please enter the text to encod/decod.\";\nconst placeHolderOutput = \"URL encoded/decoded result.\";\nfunction URLConvertor(param) {\n    let { placeHolder } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_1___default().convertor),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    placeholder: placeHolderInput\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    placeholder: placeHolderOutput\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = URLConvertor;\nvar _c;\n$RefreshReg$(_c, \"URLConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VSTENvbnZlcnRvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFFeEQsTUFBTUMsbUJBQW1CO0FBQ3pCLE1BQU1DLG9CQUFvQjtBQUVYLFNBQVNDLGFBQWEsS0FBZTtRQUFmLEVBQUVDLFdBQVcsRUFBRSxHQUFmO0lBQ25DLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTiwyRUFBeUI7a0JBQ3ZDLDRFQUFDSzs7OEJBQ0MsOERBQUNHO29CQUFTQyxhQUFhUjs7Ozs7OzhCQUN2Qiw4REFBQ087b0JBQVNDLGFBQWFQOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQjtLQVR3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VUkxDb252ZXJ0b3IuanM/YWQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gXCIuL1VSTENvbnZlcnRvci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IHBsYWNlSG9sZGVySW5wdXQgPSBcIlBsZWFzZSBlbnRlciB0aGUgdGV4dCB0byBlbmNvZC9kZWNvZC5cIjtcbmNvbnN0IHBsYWNlSG9sZGVyT3V0cHV0ID0gXCJVUkwgZW5jb2RlZC9kZWNvZGVkIHJlc3VsdC5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVVJMQ29udmVydG9yKHsgcGxhY2VIb2xkZXIgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuY29udmVydG9yfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj17cGxhY2VIb2xkZXJJbnB1dH0+PC90ZXh0YXJlYT5cbiAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPXtwbGFjZUhvbGRlck91dHB1dH0+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvbmVudFN0eWxlcyIsInBsYWNlSG9sZGVySW5wdXQiLCJwbGFjZUhvbGRlck91dHB1dCIsIlVSTENvbnZlcnRvciIsInBsYWNlSG9sZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udmVydG9yIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/URLConvertor.js\n"));

/***/ })

});