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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ URLConvertor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./URLConvertor.module.css */ \"./components/URLConvertor.module.css\");\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction URLConvertor(param) {\n    let { texts } = param;\n    _s();\n    const [copyMsg, setCopyMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"decode\");\n    const [decoded, setDecoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [encoded, setEncoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const outputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleDecode = ()=>{\n        setMode(\"decode\");\n        const inputValue = inputRef.current.value;\n        const decoded = decodeURIComponent(inputValue);\n        setDecoded(decoded);\n    };\n    const handleEncode = ()=>{\n        setMode(\"encode\");\n        const inputValue = inputRef.current.value;\n        const encoded = encodeURIComponent(inputValue);\n        setEncoded(encoded);\n    };\n    const handleCopy = ()=>{\n        const outputValue = outputRef.current.value;\n        try {\n            navigator.clipboard.writeText(outputValue);\n            setCopyMsg(texts.copyMsgSuccess);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        } catch (e) {\n            setCopyMsg(texts.copyMsgError);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().convertor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: texts.promptTitle\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textAreaBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textInputBox),\n                        placeholder: texts.placeHolderInput,\n                        ref: inputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textOutputBox),\n                        placeholder: texts.placeHolderOutput,\n                        ref: outputRef,\n                        value: mode === \"decode\" ? decoded : encoded,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupTop),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnerOne),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),\n                            onClick: handleCopy,\n                            children: copyMsg || texts.btnCopyText\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnderTwo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDecode,\n                                children: texts.btnDecodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleEncode,\n                                children: texts.btnEncodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().optionGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        id: \"optionA\",\n                                        name: \"options\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Option A\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"radio\",\n                                        id: \"optionB\",\n                                        name: \"options\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Option B\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnClearText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnSwapText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnParseText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(URLConvertor, \"M6nAOLF4fkHPLn5bMwBUZwJDa1U=\");\n_c = URLConvertor;\nvar _c;\n$RefreshReg$(_c, \"URLConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckM7R0F6RXdCMUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VUkxDb252ZXJ0b3IuanM/YWQ3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gXCIuL1VSTENvbnZlcnRvci5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVSTENvbnZlcnRvcih7IHRleHRzIH0pIHtcbiAgY29uc3QgW2NvcHlNc2csIHNldENvcHlNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiZGVjb2RlXCIpO1xuICBjb25zdCBbZGVjb2RlZCwgc2V0RGVjb2RlZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VuY29kZWQsIHNldEVuY29kZWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvdXRwdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGhhbmRsZURlY29kZSA9ICgpID0+IHtcbiAgICBzZXRNb2RlKFwiZGVjb2RlXCIpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQoaW5wdXRWYWx1ZSk7XG4gICAgc2V0RGVjb2RlZChkZWNvZGVkKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlRW5jb2RlID0gKCkgPT4ge1xuICAgIHNldE1vZGUoXCJlbmNvZGVcIik7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChpbnB1dFZhbHVlKTtcbiAgICBzZXRFbmNvZGVkKGVuY29kZWQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dHB1dFZhbHVlID0gb3V0cHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KG91dHB1dFZhbHVlKTtcbiAgICAgIHNldENvcHlNc2codGV4dHMuY29weU1zZ1N1Y2Nlc3MpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldENvcHlNc2coXCJcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0Q29weU1zZyh0ZXh0cy5jb3B5TXNnRXJyb3IpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldENvcHlNc2coXCJcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmNvbnZlcnRvcn0+XG4gICAgICA8aDE+e3RleHRzLnByb21wdFRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRBcmVhQm94fT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0Qm94fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0ZXh0cy5wbGFjZUhvbGRlcklucHV0fVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0T3V0cHV0Qm94fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0ZXh0cy5wbGFjZUhvbGRlck91dHB1dH1cbiAgICAgICAgICByZWY9e291dHB1dFJlZn1cbiAgICAgICAgICB2YWx1ZT17bW9kZSA9PT0gXCJkZWNvZGVcIiA/IGRlY29kZWQgOiBlbmNvZGVkfVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkdyb3VwVG9wfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Hcm91cElubmVyT25lfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkNvcHl9IG9uQ2xpY2s9e2hhbmRsZUNvcHl9PlxuICAgICAgICAgICAge2NvcHlNc2cgfHwgdGV4dHMuYnRuQ29weVRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkdyb3VwSW5uZGVyVHdvfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlY29kZX0+e3RleHRzLmJ0bkRlY29kZVRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFbmNvZGV9Pnt0ZXh0cy5idG5FbmNvZGVUZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMub3B0aW9uR3JvdXB9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwib3B0aW9uQVwiIG5hbWU9XCJvcHRpb25zXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbD5PcHRpb24gQTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJvcHRpb25CXCIgbmFtZT1cIm9wdGlvbnNcIiAvPlxuICAgICAgICAgICAgPGxhYmVsPk9wdGlvbiBCPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uPnt0ZXh0cy5idG5DbGVhclRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj57dGV4dHMuYnRuU3dhcFRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj57dGV4dHMuYnRuUGFyc2VUZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiY29tcG9uZW50U3R5bGVzIiwiVVJMQ29udmVydG9yIiwidGV4dHMiLCJjb3B5TXNnIiwic2V0Q29weU1zZyIsIm1vZGUiLCJzZXRNb2RlIiwiZGVjb2RlZCIsInNldERlY29kZWQiLCJlbmNvZGVkIiwic2V0RW5jb2RlZCIsImlucHV0UmVmIiwib3V0cHV0UmVmIiwiaGFuZGxlRGVjb2RlIiwiaW5wdXRWYWx1ZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImhhbmRsZUVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImhhbmRsZUNvcHkiLCJvdXRwdXRWYWx1ZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcHlNc2dTdWNjZXNzIiwic2V0VGltZW91dCIsImNvcHlNc2dFcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnZlcnRvciIsImgxIiwicHJvbXB0VGl0bGUiLCJ0ZXh0QXJlYUJveCIsInRleHRhcmVhIiwidGV4dElucHV0Qm94IiwicGxhY2Vob2xkZXIiLCJwbGFjZUhvbGRlcklucHV0IiwicmVmIiwidGV4dE91dHB1dEJveCIsInBsYWNlSG9sZGVyT3V0cHV0IiwicmVhZE9ubHkiLCJidG5Hcm91cFRvcCIsImJ0bkdyb3VwSW5uZXJPbmUiLCJidXR0b24iLCJidG5Db3B5Iiwib25DbGljayIsImJ0bkNvcHlUZXh0IiwiYnRuR3JvdXBJbm5kZXJUd28iLCJidG5EZWNvZGVUZXh0IiwiYnRuRW5jb2RlVGV4dCIsIm9wdGlvbkdyb3VwIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJidG5DbGVhclRleHQiLCJidG5Td2FwVGV4dCIsImJ0blBhcnNlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/URLConvertor.js\n"));

/***/ })

});