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

/***/ "./components/URLConvertor.js":
/*!************************************!*\
  !*** ./components/URLConvertor.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ URLConvertor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./URLConvertor.module.css */ \"./components/URLConvertor.module.css\");\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction URLConvertor(param) {\n    let { texts } = param;\n    _s();\n    const [copyMsg, setCopyMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"decode\");\n    const [decoded, setDecoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [encoded, setEncoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [optionSelected, setOptionSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"uri\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const outputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleDecode = ()=>{\n        setMode(\"decode\");\n        const inputValue = inputRef.current.value;\n        const decoded = decodeURIComponent(inputValue);\n        setDecoded(decoded);\n    };\n    const handleEncode = ()=>{\n        setMode(\"encode\");\n        const inputValue = inputRef.current.value;\n        let encoded = \"\";\n        if (optionSelected === \"uri\") {\n            encoded = encodeURI(inputValue);\n        } else {\n            encoded = encodeURIComponent(inputValue);\n        }\n        setEncoded(encoded);\n    };\n    const handleCopy = ()=>{\n        const outputValue = outputRef.current.value;\n        try {\n            navigator.clipboard.writeText(outputValue);\n            setCopyMsg(texts.copyMsgSuccess);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        } catch (e) {\n            setCopyMsg(texts.copyMsgError);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().convertor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: texts.promptTitle\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textAreaBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textInputBox),\n                        placeholder: texts.placeHolderInput,\n                        ref: inputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textOutputBox),\n                        placeholder: texts.placeHolderOutput,\n                        ref: outputRef,\n                        value: mode === \"decode\" ? decoded : encoded,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupTop),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnerOne),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),\n                            onClick: handleCopy,\n                            children: copyMsg || texts.btnCopyText\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnderTwo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDecode,\n                                children: texts.btnDecodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleEncode,\n                                children: texts.btnEncodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().optionGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().singleOption),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                checked: optionSelected === \"uri\",\n                                                onChange: ()=>{\n                                                    setOptionSelected(\"uri\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                children: texts.optionURIText\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().singleOption),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                checked: optionSelected === \"uricomponent\",\n                                                onChange: ()=>{\n                                                    setOptionSelected(\"uricomponent\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                children: texts.optionURIComponentText\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnClearText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnSwapText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnParseText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(URLConvertor, \"x/96/DpDXTIQEOP1Nexq4wTMGpo=\");\n_c = URLConvertor;\nvar _c;\n$RefreshReg$(_c, \"URLConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7Ozs7Ozs7Ozs7OztrREFFN0IsOERBQUM5Qjt3Q0FBSUMsV0FBV2hDLDhFQUE0Qjs7MERBQzFDLDhEQUFDd0Q7Z0RBQ0NDLE1BQUs7Z0RBQ0xDLFNBQVMvQyxtQkFBbUI7Z0RBQzVCZ0QsVUFBVTtvREFDUi9DLGtCQUFrQjtnREFDcEI7Ozs7OzswREFFRiw4REFBQ2dEOzBEQUFPMUQsTUFBTTRELHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUd4Qyw4REFBQ2Y7MENBQVE3QyxNQUFNNkQsWUFBWTs7Ozs7OzBDQUMzQiw4REFBQ2hCOzBDQUFRN0MsTUFBTThELFdBQVc7Ozs7OzswQ0FDMUIsOERBQUNqQjswQ0FBUTdDLE1BQU0rRCxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckM7R0EvRndCaEU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VUkxDb252ZXJ0b3IuanM/YWQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gXCIuL1VSTENvbnZlcnRvci5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVSTENvbnZlcnRvcih7IHRleHRzIH0pIHtcbiAgY29uc3QgW2NvcHlNc2csIHNldENvcHlNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiZGVjb2RlXCIpO1xuICBjb25zdCBbZGVjb2RlZCwgc2V0RGVjb2RlZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VuY29kZWQsIHNldEVuY29kZWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtvcHRpb25TZWxlY3RlZCwgc2V0T3B0aW9uU2VsZWN0ZWRdID0gdXNlU3RhdGUoXCJ1cmlcIik7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvdXRwdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGhhbmRsZURlY29kZSA9ICgpID0+IHtcbiAgICBzZXRNb2RlKFwiZGVjb2RlXCIpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQoaW5wdXRWYWx1ZSk7XG4gICAgc2V0RGVjb2RlZChkZWNvZGVkKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlRW5jb2RlID0gKCkgPT4ge1xuICAgIHNldE1vZGUoXCJlbmNvZGVcIik7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgbGV0IGVuY29kZWQgPSBcIlwiO1xuICAgIGlmIChvcHRpb25TZWxlY3RlZCA9PT0gXCJ1cmlcIikge1xuICAgICAgZW5jb2RlZCA9IGVuY29kZVVSSShpbnB1dFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChpbnB1dFZhbHVlKTtcbiAgICB9XG4gICAgc2V0RW5jb2RlZChlbmNvZGVkKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ29weSA9ICgpID0+IHtcbiAgICBjb25zdCBvdXRwdXRWYWx1ZSA9IG91dHB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIHRyeSB7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChvdXRwdXRWYWx1ZSk7XG4gICAgICBzZXRDb3B5TXNnKHRleHRzLmNvcHlNc2dTdWNjZXNzKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDb3B5TXNnKFwiXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldENvcHlNc2codGV4dHMuY29weU1zZ0Vycm9yKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRDb3B5TXNnKFwiXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5jb252ZXJ0b3J9PlxuICAgICAgPGgxPnt0ZXh0cy5wcm9tcHRUaXRsZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0QXJlYUJveH0+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRJbnB1dEJveH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGV4dHMucGxhY2VIb2xkZXJJbnB1dH1cbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dE91dHB1dEJveH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17dGV4dHMucGxhY2VIb2xkZXJPdXRwdXR9XG4gICAgICAgICAgcmVmPXtvdXRwdXRSZWZ9XG4gICAgICAgICAgdmFsdWU9e21vZGUgPT09IFwiZGVjb2RlXCIgPyBkZWNvZGVkIDogZW5jb2RlZH1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Hcm91cFRvcH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuYnRuR3JvdXBJbm5lck9uZX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Db3B5fSBvbkNsaWNrPXtoYW5kbGVDb3B5fT5cbiAgICAgICAgICAgIHtjb3B5TXNnIHx8IHRleHRzLmJ0bkNvcHlUZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Hcm91cElubmRlclR3b30+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWNvZGV9Pnt0ZXh0cy5idG5EZWNvZGVUZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRW5jb2RlfT57dGV4dHMuYnRuRW5jb2RlVGV4dH08L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLm9wdGlvbkdyb3VwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuc2luZ2xlT3B0aW9ufT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtvcHRpb25TZWxlY3RlZCA9PT0gXCJ1cmlcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uU2VsZWN0ZWQoXCJ1cmlcIik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsPnt0ZXh0cy5vcHRpb25VUklUZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuc2luZ2xlT3B0aW9ufT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtvcHRpb25TZWxlY3RlZCA9PT0gXCJ1cmljb21wb25lbnRcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uU2VsZWN0ZWQoXCJ1cmljb21wb25lbnRcIik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsPnt0ZXh0cy5vcHRpb25VUklDb21wb25lbnRUZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uPnt0ZXh0cy5idG5DbGVhclRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj57dGV4dHMuYnRuU3dhcFRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj57dGV4dHMuYnRuUGFyc2VUZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiY29tcG9uZW50U3R5bGVzIiwiVVJMQ29udmVydG9yIiwidGV4dHMiLCJjb3B5TXNnIiwic2V0Q29weU1zZyIsIm1vZGUiLCJzZXRNb2RlIiwiZGVjb2RlZCIsInNldERlY29kZWQiLCJlbmNvZGVkIiwic2V0RW5jb2RlZCIsIm9wdGlvblNlbGVjdGVkIiwic2V0T3B0aW9uU2VsZWN0ZWQiLCJpbnB1dFJlZiIsIm91dHB1dFJlZiIsImhhbmRsZURlY29kZSIsImlucHV0VmFsdWUiLCJjdXJyZW50IiwidmFsdWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJoYW5kbGVFbmNvZGUiLCJlbmNvZGVVUkkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoYW5kbGVDb3B5Iiwib3V0cHV0VmFsdWUiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3B5TXNnU3VjY2VzcyIsInNldFRpbWVvdXQiLCJjb3B5TXNnRXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb252ZXJ0b3IiLCJoMSIsInByb21wdFRpdGxlIiwidGV4dEFyZWFCb3giLCJ0ZXh0YXJlYSIsInRleHRJbnB1dEJveCIsInBsYWNlaG9sZGVyIiwicGxhY2VIb2xkZXJJbnB1dCIsInJlZiIsInRleHRPdXRwdXRCb3giLCJwbGFjZUhvbGRlck91dHB1dCIsInJlYWRPbmx5IiwiYnRuR3JvdXBUb3AiLCJidG5Hcm91cElubmVyT25lIiwiYnV0dG9uIiwiYnRuQ29weSIsIm9uQ2xpY2siLCJidG5Db3B5VGV4dCIsImJ0bkdyb3VwSW5uZGVyVHdvIiwiYnRuRGVjb2RlVGV4dCIsImJ0bkVuY29kZVRleHQiLCJvcHRpb25Hcm91cCIsInNpbmdsZU9wdGlvbiIsImlucHV0IiwidHlwZSIsImNoZWNrZWQiLCJvbkNoYW5nZSIsImxhYmVsIiwib3B0aW9uVVJJVGV4dCIsIm9wdGlvblVSSUNvbXBvbmVudFRleHQiLCJidG5DbGVhclRleHQiLCJidG5Td2FwVGV4dCIsImJ0blBhcnNlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/URLConvertor.js\n"));

/***/ })

});