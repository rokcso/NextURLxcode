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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ URLConvertor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./URLConvertor.module.css */ \"./components/URLConvertor.module.css\");\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction URLConvertor(param) {\n    let { texts } = param;\n    _s();\n    const [copyMsg, setCopyMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"decode\");\n    const [decoded, setDecoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [encoded, setEncoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [optionSelected, setOptionSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"uri\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const outputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleDecode = ()=>{\n        setMode(\"decode\");\n        const inputValue = inputRef.current.value;\n        const decoded = decodeURIComponent(inputValue);\n        setDecoded(decoded);\n    };\n    const handleEncode = ()=>{\n        setMode(\"encode\");\n        const inputValue = inputRef.current.value;\n        const encoded = encodeURIComponent(inputValue);\n        setEncoded(encoded);\n    };\n    const handleCopy = ()=>{\n        const outputValue = outputRef.current.value;\n        try {\n            navigator.clipboard.writeText(outputValue);\n            setCopyMsg(texts.copyMsgSuccess);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        } catch (e) {\n            setCopyMsg(texts.copyMsgError);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().convertor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: texts.promptTitle\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textAreaBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textInputBox),\n                        placeholder: texts.placeHolderInput,\n                        ref: inputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textOutputBox),\n                        placeholder: texts.placeHolderOutput,\n                        ref: outputRef,\n                        value: mode === \"decode\" ? decoded : encoded,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupTop),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnerOne),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),\n                            onClick: handleCopy,\n                            children: copyMsg || texts.btnCopyText\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnderTwo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDecode,\n                                children: texts.btnDecodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleEncode,\n                                children: texts.btnEncodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().optionGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().singleOption),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                checked: optionSelected === \"uri\",\n                                                onChange: ()=>{\n                                                    setOptionSelected(\"uri\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                children: texts.optionTextA\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().singleOption),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                checked: optionSelected === \"uricomponent\",\n                                                onChange: ()=>{\n                                                    setOptionSelected(\"uricomponent\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                children: texts.optionTextB\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnClearText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnSwapText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnParseText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(URLConvertor, \"x/96/DpDXTIQEOP1Nexq4wTMGpo=\");\n_c = URLConvertor;\nvar _c;\n$RefreshReg$(_c, \"URLConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0RBQ0NDLE1BQUs7Z0RBQ0xDLFNBQVM5QyxtQkFBbUI7Z0RBQzVCK0MsVUFBVTtvREFDUjlDLGtCQUFrQjtnREFDcEI7Ozs7OzswREFFRiw4REFBQytDOzBEQUFPekQsTUFBTTJELFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHN0IsOERBQUNmOzBDQUFRNUMsTUFBTTRELFlBQVk7Ozs7OzswQ0FDM0IsOERBQUNoQjswQ0FBUTVDLE1BQU02RCxXQUFXOzs7Ozs7MENBQzFCLDhEQUFDakI7MENBQVE1QyxNQUFNOEQsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JDO0dBMUZ3Qi9EO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVVJMQ29udmVydG9yLmpzP2FkNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tIFwiLi9VUkxDb252ZXJ0b3IubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVUkxDb252ZXJ0b3IoeyB0ZXh0cyB9KSB7XG4gIGNvbnN0IFtjb3B5TXNnLCBzZXRDb3B5TXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZShcImRlY29kZVwiKTtcbiAgY29uc3QgW2RlY29kZWQsIHNldERlY29kZWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbmNvZGVkLCBzZXRFbmNvZGVkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb3B0aW9uU2VsZWN0ZWQsIHNldE9wdGlvblNlbGVjdGVkXSA9IHVzZVN0YXRlKFwidXJpXCIpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgb3V0cHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBoYW5kbGVEZWNvZGUgPSAoKSA9PiB7XG4gICAgc2V0TW9kZShcImRlY29kZVwiKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0VmFsdWUpO1xuICAgIHNldERlY29kZWQoZGVjb2RlZCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUVuY29kZSA9ICgpID0+IHtcbiAgICBzZXRNb2RlKFwiZW5jb2RlXCIpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQoaW5wdXRWYWx1ZSk7XG4gICAgc2V0RW5jb2RlZChlbmNvZGVkKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ29weSA9ICgpID0+IHtcbiAgICBjb25zdCBvdXRwdXRWYWx1ZSA9IG91dHB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChvdXRwdXRWYWx1ZSk7XG4gICAgICBzZXRDb3B5TXNnKHRleHRzLmNvcHlNc2dTdWNjZXNzKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDb3B5TXNnKFwiXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldENvcHlNc2codGV4dHMuY29weU1zZ0Vycm9yKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDb3B5TXNnKFwiXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5jb252ZXJ0b3J9PlxuICAgICAgPGgxPnt0ZXh0cy5wcm9tcHRUaXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0QXJlYUJveH0+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRJbnB1dEJveH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGV4dHMucGxhY2VIb2xkZXJJbnB1dH1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dE91dHB1dEJveH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGV4dHMucGxhY2VIb2xkZXJPdXRwdXR9XG4gICAgICAgICAgcmVmPXtvdXRwdXRSZWZ9XG4gICAgICAgICAgdmFsdWU9e21vZGUgPT09IFwiZGVjb2RlXCIgPyBkZWNvZGVkIDogZW5jb2RlZH1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Hcm91cFRvcH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuYnRuR3JvdXBJbm5lck9uZX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Db3B5fSBvbkNsaWNrPXtoYW5kbGVDb3B5fT5cbiAgICAgICAgICAgIHtjb3B5TXNnIHx8IHRleHRzLmJ0bkNvcHlUZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Hcm91cElubmRlclR3b30+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWNvZGV9Pnt0ZXh0cy5idG5EZWNvZGVUZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRW5jb2RlfT57dGV4dHMuYnRuRW5jb2RlVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLm9wdGlvbkdyb3VwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuc2luZ2xlT3B0aW9ufT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtvcHRpb25TZWxlY3RlZCA9PT0gXCJ1cmlcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uU2VsZWN0ZWQoXCJ1cmlcIik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsPnt0ZXh0cy5vcHRpb25UZXh0QX08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnNpbmdsZU9wdGlvbn0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9uU2VsZWN0ZWQgPT09IFwidXJpY29tcG9uZW50XCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldE9wdGlvblNlbGVjdGVkKFwidXJpY29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbD57dGV4dHMub3B0aW9uVGV4dEJ9PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24+e3RleHRzLmJ0bkNsZWFyVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uPnt0ZXh0cy5idG5Td2FwVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uPnt0ZXh0cy5idG5QYXJzZVRleHR9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJjb21wb25lbnRTdHlsZXMiLCJVUkxDb252ZXJ0b3IiLCJ0ZXh0cyIsImNvcHlNc2ciLCJzZXRDb3B5TXNnIiwibW9kZSIsInNldE1vZGUiLCJkZWNvZGVkIiwic2V0RGVjb2RlZCIsImVuY29kZWQiLCJzZXRFbmNvZGVkIiwib3B0aW9uU2VsZWN0ZWQiLCJzZXRPcHRpb25TZWxlY3RlZCIsImlucHV0UmVmIiwib3V0cHV0UmVmIiwiaGFuZGxlRGVjb2RlIiwiaW5wdXRWYWx1ZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImhhbmRsZUVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhhbmRsZUNvcHkiLCJvdXRwdXRWYWx1ZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcHlNc2dTdWNjZXNzIiwic2V0VGltZW91dCIsImNvcHlNc2dFcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnZlcnRvciIsImgxIiwicHJvbXB0VGl0bGUiLCJ0ZXh0QXJlYUJveCIsInRleHRhcmVhIiwidGV4dElucHV0Qm94IiwicGxhY2Vob2xkZXIiLCJwbGFjZUhvbGRlcklucHV0IiwicmVmIiwidGV4dE91dHB1dEJveCIsInBsYWNlSG9sZGVyT3V0cHV0IiwicmVhZE9ubHkiLCJidG5Hcm91cFRvcCIsImJ0bkdyb3VwSW5uZXJPbmUiLCJidXR0b24iLCJidG5Db3B5Iiwib25DbGljayIsImJ0bkNvcHlUZXh0IiwiYnRuR3JvdXBJbm5kZXJUd28iLCJidG5EZWNvZGVUZXh0IiwiYnRuRW5jb2RlVGV4dCIsIm9wdGlvbkdyb3VwIiwic2luZ2xlT3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwibGFiZWwiLCJvcHRpb25UZXh0QSIsIm9wdGlvblRleHRCIiwiYnRuQ2xlYXJUZXh0IiwiYnRuU3dhcFRleHQiLCJidG5QYXJzZVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/URLConvertor.js\n"));

/***/ })

});