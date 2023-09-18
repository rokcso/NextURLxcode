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

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [selectedLanguage, setSelectedLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // const router = useRouter();\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLanguageChange = (language)=>{\n        setSelectedLanguage(language);\n        setIsDropdownOpen(false);\n    // const path = languageOptions.find(\n    //   (option) => option.label === language\n    // ).path;\n    // router.push(path);\n    };\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const homePath = pathname.split(\"/\")[1] || \"\";\n    const languageOptions = [\n        {\n            path: \"/\",\n            label: \"English\"\n        },\n        {\n            path: \"/zh\",\n            label: \"简体中文\"\n        },\n        {\n            path: \"/tc\",\n            label: \"繁體中文\"\n        },\n        {\n            path: \"/kr\",\n            label: \"한국인\"\n        },\n        {\n            path: \"/jp\",\n            label: \"日本語\"\n        },\n        {\n            path: \"/ru\",\n            label: \"Русский\"\n        },\n        {\n            path: \"/es\",\n            label: \"Espa\\xf1ol\"\n        },\n        {\n            path: \"/vn\",\n            label: \"Tiếng Việt\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().layout),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\".concat(homePath),\n                                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"URLxcode\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"x = En/De\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            pathname.length <= 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"dropdown\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"dropdown-toggle\",\n                                            onClick: toggleDropdown,\n                                            children: selectedLanguage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: selectedLanguage\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 23\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Select Language\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this),\n                                        isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"dropdown-menu\",\n                                            children: languageOptions.map((param)=>/*#__PURE__*/ {\n                                                let { path, label } = param;\n                                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                                        href: path,\n                                                        onClick: handleLanguageChange,\n                                                        children: label\n                                                    }, path, false, {\n                                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 27\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 25\n                                                }, this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Online URL Encode/Decode Tool.\\xa0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Copyright \\xa9 2023 \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"https://rokcso.com\",\n                                    children: \"rokcso\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 35\n                                }, this),\n                                \".\\xa0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"ke6uqKPqgYD8it26+sK2Kck479o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ3JCO0FBQ1c7QUFDUDtBQUVsQixTQUFTSSxPQUFPLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDN0IsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNLLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JELDhCQUE4QjtJQUM5QixNQUFNTyxpQkFBaUI7UUFDckJELGtCQUFrQixDQUFDRDtJQUNyQjtJQUNBLE1BQU1HLHVCQUF1QixDQUFDQztRQUM1Qkwsb0JBQW9CSztRQUNwQkgsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLHFCQUFxQjtJQUN2QjtJQUNBLE1BQU0sRUFBRUksUUFBUSxFQUFFLEdBQUdYLHNEQUFTQTtJQUM5QixNQUFNWSxXQUFXRCxTQUFTRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSTtJQUMzQyxNQUFNQyxrQkFBa0I7UUFDdEI7WUFBRUMsTUFBTTtZQUFLQyxPQUFPO1FBQVU7UUFDOUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU87UUFDN0I7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU87UUFDN0I7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU07UUFDNUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU07UUFDNUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQVU7UUFDaEM7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQVU7UUFDaEM7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQWE7S0FDcEM7SUFFRCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBV3BCLGtFQUFzQjs7OEJBQ3BDLDhEQUFDc0I7b0JBQU9GLFdBQVdwQixrRUFBc0I7OEJBQ3ZDLDRFQUFDbUI7d0JBQUlDLFdBQVdwQix5RUFBNkI7OzBDQUMzQyw4REFBQ0Msa0RBQUlBO2dDQUFDdUIsTUFBTSxJQUFhLE9BQVRWO2dDQUFZTSxXQUFXcEIsZ0VBQW9COztrREFDekQsOERBQUMwQjtrREFBSzs7Ozs7O2tEQUNOLDhEQUFDQzs7Ozs7a0RBQ0QsOERBQUNEO2tEQUFLOzs7Ozs7Ozs7Ozs7NEJBRVBiLFNBQVNlLE1BQU0sSUFBSSxtQkFDbEIsOERBQUNDOzBDQUNDLDRFQUFDVjtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUFJQyxXQUFVOzRDQUFrQlUsU0FBU3BCO3NEQUN2Q0osaUNBQ0MsOERBQUNvQjswREFBTXBCOzs7OztxRUFFUCw4REFBQ29COzBEQUFLOzs7Ozs7Ozs7Ozt3Q0FHVGxCLGdDQUNDLDhEQUFDVzs0Q0FBSUMsV0FBVTtzREFDWkosZ0JBQWdCZSxHQUFHLENBQUM7b0RBQUMsRUFBRWQsSUFBSSxFQUFFQyxLQUFLLEVBQUU7dURBQ25DLDhEQUFDUTs4REFDQyw0RUFBQ007d0RBRUNSLE1BQU1QO3dEQUNOYSxTQUFTbkI7a0VBRVJPO3VEQUpJRDs7Ozs7Ozs7Ozs0Q0FNSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFnQnRCLDhEQUFDZ0I7b0JBQUtiLFdBQVdwQixnRUFBb0I7OEJBQUdLOzs7Ozs7OEJBQ3hDLDhEQUFDNkI7b0JBQU9kLFdBQVdwQixrRUFBc0I7O3NDQUN2Qyw4REFBQzBCO3NDQUFLOzs7Ozs7c0NBQ04sOERBQUNBOztnQ0FBSzs4Q0FDa0IsOERBQUN6QixrREFBSUE7b0NBQUN1QixNQUFLOzhDQUFxQjs7Ozs7O2dDQUFhOzs7Ozs7O3NDQUdyRSw4REFBQ0U7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0F2RndCdEI7O1FBZURGLGtEQUFTQTs7O0tBZlJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tIFwiLi9sYXlvdXQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZExhbmd1YWdlLCBzZXRTZWxlY3RlZExhbmd1YWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIHNldElzRHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbik7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKGxhbmd1YWdlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRMYW5ndWFnZShsYW5ndWFnZSk7XG4gICAgc2V0SXNEcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIC8vIGNvbnN0IHBhdGggPSBsYW5ndWFnZU9wdGlvbnMuZmluZChcbiAgICAvLyAgIChvcHRpb24pID0+IG9wdGlvbi5sYWJlbCA9PT0gbGFuZ3VhZ2VcbiAgICAvLyApLnBhdGg7XG4gICAgLy8gcm91dGVyLnB1c2gocGF0aCk7XG4gIH07XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBob21lUGF0aCA9IHBhdGhuYW1lLnNwbGl0KFwiL1wiKVsxXSB8fCBcIlwiO1xuICBjb25zdCBsYW5ndWFnZU9wdGlvbnMgPSBbXG4gICAgeyBwYXRoOiBcIi9cIiwgbGFiZWw6IFwiRW5nbGlzaFwiIH0sXG4gICAgeyBwYXRoOiBcIi96aFwiLCBsYWJlbDogXCLnroDkvZPkuK3mlodcIiB9LFxuICAgIHsgcGF0aDogXCIvdGNcIiwgbGFiZWw6IFwi57mB6auU5Lit5paHXCIgfSxcbiAgICB7IHBhdGg6IFwiL2tyXCIsIGxhYmVsOiBcIu2VnOq1reyduFwiIH0sXG4gICAgeyBwYXRoOiBcIi9qcFwiLCBsYWJlbDogXCLml6XmnKzoqp5cIiB9LFxuICAgIHsgcGF0aDogXCIvcnVcIiwgbGFiZWw6IFwi0KDRg9GB0YHQutC40LlcIiB9LFxuICAgIHsgcGF0aDogXCIvZXNcIiwgbGFiZWw6IFwiRXNwYcOxb2xcIiB9LFxuICAgIHsgcGF0aDogXCIvdm5cIiwgbGFiZWw6IFwiVGnhur9uZyBWaeG7h3RcIiB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMubGF5b3V0fT5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7aG9tZVBhdGh9YH0gY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMubG9nb30+XG4gICAgICAgICAgICAgIDxzcGFuPlVSTHhjb2RlPC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+eCA9IEVuL0RlPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge3BhdGhuYW1lLmxlbmd0aCA8PSAzICYmIChcbiAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkTGFuZ3VhZ2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlbGVjdGVkTGFuZ3VhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlbGVjdCBMYW5ndWFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge2lzRHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2xhbmd1YWdlT3B0aW9ucy5tYXAoKHsgcGF0aCwgbGFiZWwgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3BhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGFuZ3VhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgLy8gPG5hdj5cbiAgICAgICAgICAgICAgLy8gICB7bGFuZ3VhZ2VPcHRpb25zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAvLyAgICAgPExpbmsga2V5PXtpdGVtLnBhdGh9IGhyZWY9e2l0ZW0ucGF0aH0+XG4gICAgICAgICAgICAgIC8vICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAvLyAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAvLyAgICkpfVxuICAgICAgICAgICAgICAvLyA8L25hdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5tYWlufT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgPHNwYW4+T25saW5lIFVSTCBFbmNvZGUvRGVjb2RlIFRvb2wuJm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyAyMDIzIDxMaW5rIGhyZWY9XCJodHRwczovL3Jva2Nzby5jb21cIj5yb2tjc288L0xpbms+XG4gICAgICAgICAgICAuJm5ic3A7XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9zcGFuPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvbmVudFN0eWxlcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkxheW91dCIsImNoaWxkcmVuIiwic2VsZWN0ZWRMYW5ndWFnZSIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJoYW5kbGVMYW5ndWFnZUNoYW5nZSIsImxhbmd1YWdlIiwicGF0aG5hbWUiLCJob21lUGF0aCIsInNwbGl0IiwibGFuZ3VhZ2VPcHRpb25zIiwicGF0aCIsImxhYmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwibGF5b3V0IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsImhyZWYiLCJsb2dvIiwic3BhbiIsImJyIiwibGVuZ3RoIiwibmF2Iiwib25DbGljayIsIm1hcCIsImxpbmsiLCJtYWluIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});