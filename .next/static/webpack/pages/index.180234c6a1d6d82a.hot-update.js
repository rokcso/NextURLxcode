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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ URLConvertor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./URLConvertor.module.css */ \"./components/URLConvertor.module.css\");\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction URLConvertor(param) {\n    let { texts } = param;\n    _s();\n    const [copyMsg, setCopyMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"decode\");\n    const [decoded, setDecoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [encoded, setEncoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [optionSelected, setOptionSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"uri\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const outputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleDecode = ()=>{\n        setMode(\"decode\");\n        const inputValue = inputRef.current.value;\n        const decoded = decodeURIComponent(inputValue);\n        setDecoded(decoded);\n    };\n    const handleEncode = ()=>{\n        setMode(\"encode\");\n        const inputValue = inputRef.current.value;\n        let encoded = \"\";\n        if (optionSelected === \"uri\") {\n            encoded = encodeURI(inputValue);\n        } else {\n            encoded = encodeURIComponent(inputValue);\n        }\n        setEncoded(encoded);\n    };\n    const handleCopy = ()=>{\n        const outputValue = outputRef.current.value;\n        try {\n            navigator.clipboard.writeText(outputValue);\n            setCopyMsg(texts.copyMsgSuccess);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        } catch (e) {\n            setCopyMsg(texts.copyMsgError);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().convertor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: texts.promptTitle\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textAreaBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textInputBox),\n                        placeholder: texts.placeHolderInput,\n                        ref: inputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textOutputBox),\n                        placeholder: texts.placeHolderOutput,\n                        ref: outputRef,\n                        value: mode === \"decode\" ? decoded : encoded,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupTop),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnerOne),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),\n                            onClick: handleCopy,\n                            children: copyMsg || texts.btnCopyText\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnderTwo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDecode,\n                                children: texts.btnDecodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleEncode,\n                                children: texts.btnEncodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().optionGroup),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().singleOption),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                id: \"uri\",\n                                                checked: optionSelected === \"uri\",\n                                                onChange: ()=>{\n                                                    setOptionSelected(\"uri\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                title: texts.URITooltip,\n                                                children: texts.optionURIText\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().singleOption),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"radio\",\n                                                checked: optionSelected === \"uricomponent\",\n                                                onChange: ()=>{\n                                                    setOptionSelected(\"uricomponent\");\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                title: texts.URIComponentTooltip,\n                                                children: texts.optionURIComponentText\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnClearText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnSwapText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: texts.btnParseText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(URLConvertor, \"x/96/DpDXTIQEOP1Nexq4wTMGpo=\");\n_c = URLConvertor;\nvar _c;\n$RefreshReg$(_c, \"URLConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNQyxPQUFPNUQsTUFBTTZELFVBQVU7MERBQUc3RCxNQUFNOEQsYUFBYTs7Ozs7Ozs7Ozs7O2tEQUV0RCw4REFBQ2pDO3dDQUFJQyxXQUFXaEMsOEVBQTRCOzswREFDMUMsOERBQUN3RDtnREFDQ0MsTUFBSztnREFDTEUsU0FBU2hELG1CQUFtQjtnREFDNUJpRCxVQUFVO29EQUNSaEQsa0JBQWtCO2dEQUNwQjs7Ozs7OzBEQUVGLDhEQUFDaUQ7Z0RBQU1DLE9BQU81RCxNQUFNK0QsbUJBQW1COzBEQUNwQy9ELE1BQU1nRSxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJbkMsOERBQUNuQjswQ0FBUTdDLE1BQU1pRSxZQUFZOzs7Ozs7MENBQzNCLDhEQUFDcEI7MENBQVE3QyxNQUFNa0UsV0FBVzs7Ozs7OzBDQUMxQiw4REFBQ3JCOzBDQUFRN0MsTUFBTW1FLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQztHQWxHd0JwRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VSTENvbnZlcnRvci5qcz9hZDc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSBcIi4vVVJMQ29udmVydG9yLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVVJMQ29udmVydG9yKHsgdGV4dHMgfSkge1xuICBjb25zdCBbY29weU1zZywgc2V0Q29weU1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoXCJkZWNvZGVcIik7XG4gIGNvbnN0IFtkZWNvZGVkLCBzZXREZWNvZGVkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW5jb2RlZCwgc2V0RW5jb2RlZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29wdGlvblNlbGVjdGVkLCBzZXRPcHRpb25TZWxlY3RlZF0gPSB1c2VTdGF0ZShcInVyaVwiKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG91dHB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaGFuZGxlRGVjb2RlID0gKCkgPT4ge1xuICAgIHNldE1vZGUoXCJkZWNvZGVcIik7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZVVSSUNvbXBvbmVudChpbnB1dFZhbHVlKTtcbiAgICBzZXREZWNvZGVkKGRlY29kZWQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVFbmNvZGUgPSAoKSA9PiB7XG4gICAgc2V0TW9kZShcImVuY29kZVwiKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBsZXQgZW5jb2RlZCA9IFwiXCI7XG4gICAgaWYgKG9wdGlvblNlbGVjdGVkID09PSBcInVyaVwiKSB7XG4gICAgICBlbmNvZGVkID0gZW5jb2RlVVJJKGlucHV0VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0VmFsdWUpO1xuICAgIH1cbiAgICBzZXRFbmNvZGVkKGVuY29kZWQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dHB1dFZhbHVlID0gb3V0cHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KG91dHB1dFZhbHVlKTtcbiAgICAgIHNldENvcHlNc2codGV4dHMuY29weU1zZ1N1Y2Nlc3MpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldENvcHlNc2coXCJcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0Q29weU1zZyh0ZXh0cy5jb3B5TXNnRXJyb3IpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldENvcHlNc2coXCJcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmNvbnZlcnRvcn0+XG4gICAgICA8aDE+e3RleHRzLnByb21wdFRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRBcmVhQm94fT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0Qm94fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0ZXh0cy5wbGFjZUhvbGRlcklucHV0fVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0T3V0cHV0Qm94fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0ZXh0cy5wbGFjZUhvbGRlck91dHB1dH1cbiAgICAgICAgICByZWY9e291dHB1dFJlZn1cbiAgICAgICAgICB2YWx1ZT17bW9kZSA9PT0gXCJkZWNvZGVcIiA/IGRlY29kZWQgOiBlbmNvZGVkfVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkdyb3VwVG9wfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Hcm91cElubmVyT25lfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkNvcHl9IG9uQ2xpY2s9e2hhbmRsZUNvcHl9PlxuICAgICAgICAgICAge2NvcHlNc2cgfHwgdGV4dHMuYnRuQ29weVRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkdyb3VwSW5uZGVyVHdvfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlY29kZX0+e3RleHRzLmJ0bkRlY29kZVRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFbmNvZGV9Pnt0ZXh0cy5idG5FbmNvZGVUZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMub3B0aW9uR3JvdXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5zaW5nbGVPcHRpb259PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIGlkPVwidXJpXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtvcHRpb25TZWxlY3RlZCA9PT0gXCJ1cmlcIn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0T3B0aW9uU2VsZWN0ZWQoXCJ1cmlcIik7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIHRpdGxlPXt0ZXh0cy5VUklUb29sdGlwfT57dGV4dHMub3B0aW9uVVJJVGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnNpbmdsZU9wdGlvbn0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17b3B0aW9uU2VsZWN0ZWQgPT09IFwidXJpY29tcG9uZW50XCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldE9wdGlvblNlbGVjdGVkKFwidXJpY29tcG9uZW50XCIpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT17dGV4dHMuVVJJQ29tcG9uZW50VG9vbHRpcH0+XG4gICAgICAgICAgICAgICAge3RleHRzLm9wdGlvblVSSUNvbXBvbmVudFRleHR9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uPnt0ZXh0cy5idG5DbGVhclRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj57dGV4dHMuYnRuU3dhcFRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbj57dGV4dHMuYnRuUGFyc2VUZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiY29tcG9uZW50U3R5bGVzIiwiVVJMQ29udmVydG9yIiwidGV4dHMiLCJjb3B5TXNnIiwic2V0Q29weU1zZyIsIm1vZGUiLCJzZXRNb2RlIiwiZGVjb2RlZCIsInNldERlY29kZWQiLCJlbmNvZGVkIiwic2V0RW5jb2RlZCIsIm9wdGlvblNlbGVjdGVkIiwic2V0T3B0aW9uU2VsZWN0ZWQiLCJpbnB1dFJlZiIsIm91dHB1dFJlZiIsImhhbmRsZURlY29kZSIsImlucHV0VmFsdWUiLCJjdXJyZW50IiwidmFsdWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJoYW5kbGVFbmNvZGUiLCJlbmNvZGVVUkkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoYW5kbGVDb3B5Iiwib3V0cHV0VmFsdWUiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJjb3B5TXNnU3VjY2VzcyIsInNldFRpbWVvdXQiLCJjb3B5TXNnRXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb252ZXJ0b3IiLCJoMSIsInByb21wdFRpdGxlIiwidGV4dEFyZWFCb3giLCJ0ZXh0YXJlYSIsInRleHRJbnB1dEJveCIsInBsYWNlaG9sZGVyIiwicGxhY2VIb2xkZXJJbnB1dCIsInJlZiIsInRleHRPdXRwdXRCb3giLCJwbGFjZUhvbGRlck91dHB1dCIsInJlYWRPbmx5IiwiYnRuR3JvdXBUb3AiLCJidG5Hcm91cElubmVyT25lIiwiYnV0dG9uIiwiYnRuQ29weSIsIm9uQ2xpY2siLCJidG5Db3B5VGV4dCIsImJ0bkdyb3VwSW5uZGVyVHdvIiwiYnRuRGVjb2RlVGV4dCIsImJ0bkVuY29kZVRleHQiLCJvcHRpb25Hcm91cCIsInNpbmdsZU9wdGlvbiIsImlucHV0IiwidHlwZSIsImlkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwibGFiZWwiLCJ0aXRsZSIsIlVSSVRvb2x0aXAiLCJvcHRpb25VUklUZXh0IiwiVVJJQ29tcG9uZW50VG9vbHRpcCIsIm9wdGlvblVSSUNvbXBvbmVudFRleHQiLCJidG5DbGVhclRleHQiLCJidG5Td2FwVGV4dCIsImJ0blBhcnNlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/URLConvertor.js\n"));

/***/ })

});