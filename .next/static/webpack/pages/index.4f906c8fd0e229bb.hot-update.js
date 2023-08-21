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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ URLConvertor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./URLConvertor.module.css */ \"./components/URLConvertor.module.css\");\n/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst placeHolderInput = \"Please enter the text to encod/decod.\";\nconst placeHolderOutput = \"URL encoded/decoded result.\";\nconst promptTitle = \"Encode to URL-encoded format or decode from it\";\nconst copyMsgSuccess = \"Copied!\";\nconst copyMsgError = \"Copy failed.\";\nconst btnCopyText = \"Copy\";\nconst btnDecodeText = \"Decode\";\nconst btnEncodeText = \"Encode\";\nconst btnClearText = \"Clear\";\nconst btnSwapText = \"Swap\";\nconst btnParseText = \"Parse\";\nfunction URLConvertor() {\n    _s();\n    const [copyMsg, setCopyMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"decode\");\n    const [decoded, setDecoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [encoded, setEncoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const outputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleDecode = ()=>{\n        setMode(\"decode\");\n        const inputValue = inputRef.current.value;\n        const decoded = decodeURIComponent(inputValue);\n        setDecoded(decoded);\n    };\n    const handleEncode = ()=>{\n        setMode(\"encode\");\n        const inputValue = inputRef.current.value;\n        const encoded = encodeURIComponent(inputValue);\n        setEncoded(encoded);\n    };\n    const handleCopy = ()=>{\n        const outputValue = outputRef.current.value;\n        try {\n            navigator.clipboard.writeText(outputValue);\n            setCopyMsg(copyMsgSuccess);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        } catch (e) {\n            setCopyMsg(copyMsgError);\n            setTimeout(()=>{\n                setCopyMsg(\"\");\n            }, 500);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().convertor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: promptTitle\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textAreaBox),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textInputBox),\n                        placeholder: placeHolderInput,\n                        ref: inputRef\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textOutputBox),\n                        placeholder: placeHolderOutput,\n                        ref: outputRef,\n                        value: mode === \"decode\" ? decoded : encoded,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupTop),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnerOne),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),\n                            onClick: handleCopy,\n                            children: copyMsg || btnCopyText\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnderTwo),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleDecode,\n                                children: btnDecodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleEncode,\n                                children: btnEncodeText\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {}, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/waringhu/Developer/nextURLxcode/components/URLConvertor.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(URLConvertor, \"M6nAOLF4fkHPLn5bMwBUZwJDa1U=\");\n_c = URLConvertor;\nfunction copy(text) {\n    if (navigator.clipboard) {\n        return;\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"URLConvertor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VSTENvbnZlcnRvci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDZTtBQUV4RCxNQUFNRyxtQkFBbUI7QUFDekIsTUFBTUMsb0JBQW9CO0FBQzFCLE1BQU1DLGNBQWM7QUFDcEIsTUFBTUMsaUJBQWlCO0FBQ3ZCLE1BQU1DLGVBQWU7QUFDckIsTUFBTUMsY0FBYztBQUNwQixNQUFNQyxnQkFBZ0I7QUFDdEIsTUFBTUMsZ0JBQWdCO0FBQ3RCLE1BQU1DLGVBQWU7QUFDckIsTUFBTUMsY0FBYztBQUNwQixNQUFNQyxlQUFlO0FBRU4sU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNrQixTQUFTQyxXQUFXLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNvQixTQUFTQyxXQUFXLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNc0IsV0FBV3ZCLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU13QixZQUFZeEIsNkNBQU1BLENBQUM7SUFDekIsTUFBTXlCLGVBQWU7UUFDbkJQLFFBQVE7UUFDUixNQUFNUSxhQUFhSCxTQUFTSSxPQUFPLENBQUNDLEtBQUs7UUFDekMsTUFBTVQsVUFBVVUsbUJBQW1CSDtRQUNuQ04sV0FBV0Q7SUFDYjtJQUNBLE1BQU1XLGVBQWU7UUFDbkJaLFFBQVE7UUFDUixNQUFNUSxhQUFhSCxTQUFTSSxPQUFPLENBQUNDLEtBQUs7UUFDekMsTUFBTVAsVUFBVVUsbUJBQW1CTDtRQUNuQ0osV0FBV0Q7SUFDYjtJQUNBLE1BQU1XLGFBQWE7UUFDakIsTUFBTUMsY0FBY1QsVUFBVUcsT0FBTyxDQUFDQyxLQUFLO1FBQzNDLElBQUk7WUFDRk0sVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNIO1lBQzlCakIsV0FBV1Y7WUFDWCtCLFdBQVc7Z0JBQ1RyQixXQUFXO1lBQ2IsR0FBRztRQUNMLEVBQUUsVUFBTTtZQUNOQSxXQUFXVDtZQUNYOEIsV0FBVztnQkFDVHJCLFdBQVc7WUFDYixHQUFHO1FBQ0w7SUFDRjtJQUNBLHFCQUNFLDhEQUFDc0I7UUFBSUMsV0FBV3JDLDJFQUF5Qjs7MEJBQ3ZDLDhEQUFDdUM7MEJBQUlwQzs7Ozs7OzBCQUNMLDhEQUFDaUM7Z0JBQUlDLFdBQVdyQyw2RUFBMkI7O2tDQUN6Qyw4REFBQ3lDO3dCQUNDSixXQUFXckMsOEVBQTRCO3dCQUN2QzJDLGFBQWExQzt3QkFDYjJDLEtBQUt2Qjs7Ozs7O2tDQUVQLDhEQUFDb0I7d0JBQ0NKLFdBQVdyQywrRUFBNkI7d0JBQ3hDMkMsYUFBYXpDO3dCQUNiMEMsS0FBS3RCO3dCQUNMSSxPQUFPWCxTQUFTLFdBQVdFLFVBQVVFO3dCQUNyQzJCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ1Y7Z0JBQUlDLFdBQVdyQyw2RUFBMkI7O2tDQUN6Qyw4REFBQ29DO3dCQUFJQyxXQUFXckMsa0ZBQWdDO2tDQUM5Qyw0RUFBQ2lEOzRCQUFPWixXQUFXckMseUVBQXVCOzRCQUFFbUQsU0FBU3JCO3NDQUNsRGpCLFdBQVdQOzs7Ozs7Ozs7OztrQ0FHaEIsOERBQUM4Qjt3QkFBSUMsV0FBV3JDLG1GQUFpQzs7MENBQy9DLDhEQUFDaUQ7Z0NBQU9FLFNBQVM1QjswQ0FBZWhCOzs7Ozs7MENBQ2hDLDhEQUFDMEM7Z0NBQU9FLFNBQVN2QjswQ0FBZXBCOzs7Ozs7MENBQ2hDLDhEQUFDeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0FqRXdCckM7S0FBQUE7QUFtRXhCLFNBQVN5QyxLQUFLQyxJQUFJO0lBQ2hCLElBQUl0QixVQUFVQyxTQUFTLEVBQUU7UUFDdkI7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVVJMQ29udmVydG9yLmpzP2FkNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tIFwiLi9VUkxDb252ZXJ0b3IubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBwbGFjZUhvbGRlcklucHV0ID0gXCJQbGVhc2UgZW50ZXIgdGhlIHRleHQgdG8gZW5jb2QvZGVjb2QuXCI7XG5jb25zdCBwbGFjZUhvbGRlck91dHB1dCA9IFwiVVJMIGVuY29kZWQvZGVjb2RlZCByZXN1bHQuXCI7XG5jb25zdCBwcm9tcHRUaXRsZSA9IFwiRW5jb2RlIHRvIFVSTC1lbmNvZGVkIGZvcm1hdCBvciBkZWNvZGUgZnJvbSBpdFwiO1xuY29uc3QgY29weU1zZ1N1Y2Nlc3MgPSBcIkNvcGllZCFcIjtcbmNvbnN0IGNvcHlNc2dFcnJvciA9IFwiQ29weSBmYWlsZWQuXCI7XG5jb25zdCBidG5Db3B5VGV4dCA9IFwiQ29weVwiO1xuY29uc3QgYnRuRGVjb2RlVGV4dCA9IFwiRGVjb2RlXCI7XG5jb25zdCBidG5FbmNvZGVUZXh0ID0gXCJFbmNvZGVcIjtcbmNvbnN0IGJ0bkNsZWFyVGV4dCA9IFwiQ2xlYXJcIjtcbmNvbnN0IGJ0blN3YXBUZXh0ID0gXCJTd2FwXCI7XG5jb25zdCBidG5QYXJzZVRleHQgPSBcIlBhcnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVSTENvbnZlcnRvcigpIHtcbiAgY29uc3QgW2NvcHlNc2csIHNldENvcHlNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKFwiZGVjb2RlXCIpO1xuICBjb25zdCBbZGVjb2RlZCwgc2V0RGVjb2RlZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VuY29kZWQsIHNldEVuY29kZWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBvdXRwdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGhhbmRsZURlY29kZSA9ICgpID0+IHtcbiAgICBzZXRNb2RlKFwiZGVjb2RlXCIpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBpbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQoaW5wdXRWYWx1ZSk7XG4gICAgc2V0RGVjb2RlZChkZWNvZGVkKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlRW5jb2RlID0gKCkgPT4ge1xuICAgIHNldE1vZGUoXCJlbmNvZGVcIik7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChpbnB1dFZhbHVlKTtcbiAgICBzZXRFbmNvZGVkKGVuY29kZWQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgIGNvbnN0IG91dHB1dFZhbHVlID0gb3V0cHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KG91dHB1dFZhbHVlKTtcbiAgICAgIHNldENvcHlNc2coY29weU1zZ1N1Y2Nlc3MpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldENvcHlNc2coXCJcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0Q29weU1zZyhjb3B5TXNnRXJyb3IpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldENvcHlNc2coXCJcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmNvbnZlcnRvcn0+XG4gICAgICA8aDE+e3Byb21wdFRpdGxlfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLnRleHRBcmVhQm94fT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMudGV4dElucHV0Qm94fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZUhvbGRlcklucHV0fVxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy50ZXh0T3V0cHV0Qm94fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZUhvbGRlck91dHB1dH1cbiAgICAgICAgICByZWY9e291dHB1dFJlZn1cbiAgICAgICAgICB2YWx1ZT17bW9kZSA9PT0gXCJkZWNvZGVcIiA/IGRlY29kZWQgOiBlbmNvZGVkfVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgID48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkdyb3VwVG9wfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5idG5Hcm91cElubmVyT25lfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkNvcHl9IG9uQ2xpY2s9e2hhbmRsZUNvcHl9PlxuICAgICAgICAgICAge2NvcHlNc2cgfHwgYnRuQ29weVRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmJ0bkdyb3VwSW5uZGVyVHdvfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlY29kZX0+e2J0bkRlY29kZVRleHR9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFbmNvZGV9PntidG5FbmNvZGVUZXh0fTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGNvcHkodGV4dCkge1xuICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwiY29tcG9uZW50U3R5bGVzIiwicGxhY2VIb2xkZXJJbnB1dCIsInBsYWNlSG9sZGVyT3V0cHV0IiwicHJvbXB0VGl0bGUiLCJjb3B5TXNnU3VjY2VzcyIsImNvcHlNc2dFcnJvciIsImJ0bkNvcHlUZXh0IiwiYnRuRGVjb2RlVGV4dCIsImJ0bkVuY29kZVRleHQiLCJidG5DbGVhclRleHQiLCJidG5Td2FwVGV4dCIsImJ0blBhcnNlVGV4dCIsIlVSTENvbnZlcnRvciIsImNvcHlNc2ciLCJzZXRDb3B5TXNnIiwibW9kZSIsInNldE1vZGUiLCJkZWNvZGVkIiwic2V0RGVjb2RlZCIsImVuY29kZWQiLCJzZXRFbmNvZGVkIiwiaW5wdXRSZWYiLCJvdXRwdXRSZWYiLCJoYW5kbGVEZWNvZGUiLCJpbnB1dFZhbHVlIiwiY3VycmVudCIsInZhbHVlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiaGFuZGxlRW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGFuZGxlQ29weSIsIm91dHB1dFZhbHVlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnZlcnRvciIsImgxIiwidGV4dEFyZWFCb3giLCJ0ZXh0YXJlYSIsInRleHRJbnB1dEJveCIsInBsYWNlaG9sZGVyIiwicmVmIiwidGV4dE91dHB1dEJveCIsInJlYWRPbmx5IiwiYnRuR3JvdXBUb3AiLCJidG5Hcm91cElubmVyT25lIiwiYnV0dG9uIiwiYnRuQ29weSIsIm9uQ2xpY2siLCJidG5Hcm91cElubmRlclR3byIsImNvcHkiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/URLConvertor.js\n"));

/***/ })

});