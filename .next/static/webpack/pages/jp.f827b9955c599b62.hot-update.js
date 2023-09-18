"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jp",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [selectedLanguage, setSelectedLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"English\");\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLanguageChange = (language)=>{\n        setSelectedLanguage(language);\n        setIsDropdownOpen(false);\n        const path = languageOptions.find((option)=>option.label === language).path;\n        router.push(path);\n    };\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const homePath = pathname.split(\"/\")[1] || \"\";\n    const languageOptions = [\n        {\n            path: \"/\",\n            label: \"English\"\n        },\n        {\n            path: \"/zh\",\n            label: \"简体中文\"\n        },\n        {\n            path: \"/tc\",\n            label: \"繁體中文\"\n        },\n        {\n            path: \"/kr\",\n            label: \"한국인\"\n        },\n        {\n            path: \"/jp\",\n            label: \"日本語\"\n        },\n        {\n            path: \"/ru\",\n            label: \"Русский\"\n        },\n        {\n            path: \"/es\",\n            label: \"Espa\\xf1ol\"\n        },\n        {\n            path: \"/vn\",\n            label: \"Tiếng Việt\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().layout),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\".concat(homePath),\n                                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"URLxcode\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"x = En/De\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            pathname.length <= 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"dropdown\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"dropdown-toggle\",\n                                            onClick: toggleDropdown,\n                                            children: selectedLanguage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: selectedLanguage\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 23\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Select Language\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this),\n                                        isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"dropdown-menu\",\n                                            children: languageOptions.map((param)=>/*#__PURE__*/ {\n                                                let { path, label } = param;\n                                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"dropdown-item\",\n                                                    onClick: ()=>handleLanguageChange(label),\n                                                    children: label\n                                                }, path, false, {\n                                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 25\n                                                }, this);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Online URL Encode/Decode Tool.\\xa0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Copyright \\xa9 2023 \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"https://rokcso.com\",\n                                    children: \"rokcso\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 35\n                                }, this),\n                                \".\\xa0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"rWHzbjM2hkwXv+kh8/nf0UGGjuA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tIFwiLi9sYXlvdXQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZExhbmd1YWdlLCBzZXRTZWxlY3RlZExhbmd1YWdlXSA9IHVzZVN0YXRlKFwiRW5nbGlzaFwiKTtcbiAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBzZXRJc0Ryb3Bkb3duT3BlbighaXNEcm9wZG93bk9wZW4pO1xuICB9O1xuICBjb25zdCBoYW5kbGVMYW5ndWFnZUNoYW5nZSA9IChsYW5ndWFnZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICBjb25zdCBwYXRoID0gbGFuZ3VhZ2VPcHRpb25zLmZpbmQoXG4gICAgICAob3B0aW9uKSA9PiBvcHRpb24ubGFiZWwgPT09IGxhbmd1YWdlXG4gICAgKS5wYXRoO1xuICAgIHJvdXRlci5wdXNoKHBhdGgpO1xuICB9O1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaG9tZVBhdGggPSBwYXRobmFtZS5zcGxpdChcIi9cIilbMV0gfHwgXCJcIjtcbiAgY29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gW1xuICAgIHsgcGF0aDogXCIvXCIsIGxhYmVsOiBcIkVuZ2xpc2hcIiB9LFxuICAgIHsgcGF0aDogXCIvemhcIiwgbGFiZWw6IFwi566A5L2T5Lit5paHXCIgfSxcbiAgICB7IHBhdGg6IFwiL3RjXCIsIGxhYmVsOiBcIue5gemrlOS4reaWh1wiIH0sXG4gICAgeyBwYXRoOiBcIi9rclwiLCBsYWJlbDogXCLtlZzqta3snbhcIiB9LFxuICAgIHsgcGF0aDogXCIvanBcIiwgbGFiZWw6IFwi5pel5pys6KqeXCIgfSxcbiAgICB7IHBhdGg6IFwiL3J1XCIsIGxhYmVsOiBcItCg0YPRgdGB0LrQuNC5XCIgfSxcbiAgICB7IHBhdGg6IFwiL2VzXCIsIGxhYmVsOiBcIkVzcGHDsW9sXCIgfSxcbiAgICB7IHBhdGg6IFwiL3ZuXCIsIGxhYmVsOiBcIlRp4bq/bmcgVmnhu4d0XCIgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmxheW91dH0+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmhlYWRlckNvbnRlbnR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2hvbWVQYXRofWB9IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgICA8c3Bhbj5VUkx4Y29kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxzcGFuPnggPSBFbi9EZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtwYXRobmFtZS5sZW5ndGggPD0gMyAmJiAoXG4gICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn0+XG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZExhbmd1YWdlID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWxlY3RlZExhbmd1YWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWxlY3QgTGFuZ3VhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtpc0Ryb3Bkb3duT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZU9wdGlvbnMubWFwKCh7IHBhdGgsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UobGFiZWwpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgLy8gPG5hdj5cbiAgICAgICAgICAgICAgLy8gICB7bGFuZ3VhZ2VPcHRpb25zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAvLyAgICAgPExpbmsga2V5PXtpdGVtLnBhdGh9IGhyZWY9e2l0ZW0ucGF0aH0+XG4gICAgICAgICAgICAgIC8vICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAvLyAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAvLyAgICkpfVxuICAgICAgICAgICAgICAvLyA8L25hdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5tYWlufT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgPHNwYW4+T25saW5lIFVSTCBFbmNvZGUvRGVjb2RlIFRvb2wuJm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyAyMDIzIDxMaW5rIGhyZWY9XCJodHRwczovL3Jva2Nzby5jb21cIj5yb2tjc288L0xpbms+XG4gICAgICAgICAgICAuJm5ic3A7XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9zcGFuPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvbmVudFN0eWxlcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkxheW91dCIsImNoaWxkcmVuIiwic2VsZWN0ZWRMYW5ndWFnZSIsInNldFNlbGVjdGVkTGFuZ3VhZ2UiLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwicm91dGVyIiwidG9nZ2xlRHJvcGRvd24iLCJoYW5kbGVMYW5ndWFnZUNoYW5nZSIsImxhbmd1YWdlIiwicGF0aCIsImxhbmd1YWdlT3B0aW9ucyIsImZpbmQiLCJvcHRpb24iLCJsYWJlbCIsInB1c2giLCJwYXRobmFtZSIsImhvbWVQYXRoIiwic3BsaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJoZWFkZXIiLCJoZWFkZXJDb250ZW50IiwiaHJlZiIsImxvZ28iLCJzcGFuIiwiYnIiLCJsZW5ndGgiLCJuYXYiLCJvbkNsaWNrIiwibWFwIiwibWFpbiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});