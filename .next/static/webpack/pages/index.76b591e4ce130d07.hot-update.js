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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ URLConvertor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./URLConvertor.module.css */ \"./components/URLConvertor.module.css\");\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst placeHolderInput = \"Please enter the text to encod/decod.\";\nconst placeHolderOutput = \"URL encoded/decoded result.\";\nconst promptTitle = \"Encode to URL-encoded format or decode from it\";\nconst [decodedURL, setDecodedURL] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\nconst handleDecode = ()=>{\n    const inputURL = textInputBox.value;\n    const decoded = decodeURIComponent(inputURL);\n    setDecodedURL(decoded);\n};\nfunction URLConvertor() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().convertor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: promptTitle\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textAreaBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textInputBox),\n                        placeholder: placeHolderInput\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textOutputBox),\n                        placeholder: placeHolderOutput,\n                        value: decodedURL,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupTop),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnerOne),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),\n                            children: \"Copy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnderTwo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Decode\"\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Encode\"\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = URLConvertor;\nvar _c;\n$RefreshReg$(_c, \"URLConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VSTENvbnZlcnRvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUV4RCxNQUFNRSxtQkFBbUI7QUFDekIsTUFBTUMsb0JBQW9CO0FBQzFCLE1BQU1DLGNBQWM7QUFFcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0FBQzdDLE1BQU1PLGVBQWU7SUFDbkIsTUFBTUMsV0FBV0MsYUFBYUMsS0FBSztJQUNuQyxNQUFNQyxVQUFVQyxtQkFBbUJKO0lBQ25DRixjQUFjSztBQUNoQjtBQUVlLFNBQVNFO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXZCwyRUFBeUI7OzBCQUN2Qyw4REFBQ2dCOzBCQUFJYjs7Ozs7OzBCQUNMLDhEQUFDVTtnQkFBSUMsV0FBV2QsNkVBQTJCOztrQ0FDekMsOERBQUNrQjt3QkFDQ0osV0FBV2QsOEVBQTRCO3dCQUN2Q21CLGFBQWFsQjs7Ozs7O2tDQUVmLDhEQUFDaUI7d0JBQ0NKLFdBQVdkLCtFQUE2Qjt3QkFDeENtQixhQUFhakI7d0JBQ2JPLE9BQU9MO3dCQUNQaUIsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDUjtnQkFBSUMsV0FBV2QsNkVBQTJCOztrQ0FDekMsOERBQUNhO3dCQUFJQyxXQUFXZCxrRkFBZ0M7a0NBQzlDLDRFQUFDd0I7NEJBQU9WLFdBQVdkLHlFQUF1QjtzQ0FBRTs7Ozs7Ozs7Ozs7a0NBRTlDLDhEQUFDYTt3QkFBSUMsV0FBV2QsbUZBQWlDOzswQ0FDL0MsOERBQUN3QjswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0tBM0J3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VUkxDb252ZXJ0b3IuanM/YWQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tIFwiLi9VUkxDb252ZXJ0b3IubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBwbGFjZUhvbGRlcklucHV0ID0gXCJQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gZW5jb2QvZGVjb2QuXCI7XG5jb25zdCBwbGFjZUhvbGRlck91dHB1dCA9IFwiVVJMIGVuY29kZWQvZGVjb2RlZCByZXN1bHQuXCI7XG5jb25zdCBwcm9tcHRUaXRsZSA9IFwiRW5jb2RlIHRvIFVSTC1lbmNvZGVkIGZvcm1hdCBvciBkZWNvZGUgZnJvbSBpdFwiO1xuXG5jb25zdCBbZGVjb2RlZFVSTCwgc2V0RGVjb2RlZFVSTF0gPSB1c2VTdGF0ZShcIlwiKTtcbmNvbnN0IGhhbmRsZURlY29kZSA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRVUkwgPSB0ZXh0SW5wdXRCb3gudmFsdWU7XG4gIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQoaW5wdXRVUkwpO1xuICBzZXREZWNvZGVkVVJMKGRlY29kZWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVVJMQ29udmVydG9yKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuY29udmVydG9yfT5cbiAgICAgIDxoMT57cHJvbXB0VGl0bGV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dEFyZWFCb3h9PlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0SW5wdXRCb3h9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVySW5wdXR9XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0T3V0cHV0Qm94fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZUhvbGRlck91dHB1dH1cbiAgICAgICAgICB2YWx1ZT17ZGVjb2RlZFVSTH1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Hcm91cFRvcH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuYnRuR3JvdXBJbm5lck9uZX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Db3B5fT5Db3B5PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkdyb3VwSW5uZGVyVHdvfT5cbiAgICAgICAgICA8YnV0dG9uPkRlY29kZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24+RW5jb2RlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb21wb25lbnRTdHlsZXMiLCJwbGFjZUhvbGRlcklucHV0IiwicGxhY2VIb2xkZXJPdXRwdXQiLCJwcm9tcHRUaXRsZSIsImRlY29kZWRVUkwiLCJzZXREZWNvZGVkVVJMIiwiaGFuZGxlRGVjb2RlIiwiaW5wdXRVUkwiLCJ0ZXh0SW5wdXRCb3giLCJ2YWx1ZSIsImRlY29kZWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJVUkxDb252ZXJ0b3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb252ZXJ0b3IiLCJoMSIsInRleHRBcmVhQm94IiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInRleHRPdXRwdXRCb3giLCJyZWFkT25seSIsImJ0bkdyb3VwVG9wIiwiYnRuR3JvdXBJbm5lck9uZSIsImJ1dHRvbiIsImJ0bkNvcHkiLCJidG5Hcm91cElubmRlclR3byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/URLConvertor.js\n"));

/***/ })

});