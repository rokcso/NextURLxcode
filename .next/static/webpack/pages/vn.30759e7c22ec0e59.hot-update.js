"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/vn",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const { pathname, push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(\"pathname: \" + pathname);\n    const homePath = pathname.split(\"/\")[1] || \"\";\n    console.log(\"homePath: \" + homePath);\n    const languageOptions = [\n        {\n            path: \"/\",\n            label: \"English\"\n        },\n        {\n            path: \"/zh\",\n            label: \"简体中文\"\n        },\n        {\n            path: \"/tc\",\n            label: \"繁體中文\"\n        },\n        {\n            path: \"/kr\",\n            label: \"한국인\"\n        },\n        {\n            path: \"/jp\",\n            label: \"日本語\"\n        },\n        {\n            path: \"/ru\",\n            label: \"Русский\"\n        },\n        {\n            path: \"/es\",\n            label: \"Espa\\xf1ol\"\n        },\n        {\n            path: \"/vn\",\n            label: \"Tiếng Việt\"\n        }\n    ];\n    const handleLanguageChange = (event)=>{\n        const selectedLanguage = event.target.value;\n        push(selectedLanguage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().layout),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\".concat(homePath),\n                                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"URLxcode\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"x = En/De\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            pathname.length <= 30 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: handleLanguageChange,\n                                    children: languageOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: item.path,\n                                            children: item.label\n                                        }, item.path, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Online URL Encode/Decode Tool.\\xa0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Copyright \\xa9 2023\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"https://rokcso.com\",\n                                    children: \"rokcso \\uD83C\\uDF69\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                \".\\xa0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"iByxMMxcsL+Mr6fMHv/yYcNrWLw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNyQjtBQUNXO0FBRXpCLFNBQVNHLE9BQU8sS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFLEdBQUdKLHNEQUFTQTtJQUNwQ0ssUUFBUUMsR0FBRyxDQUFDLGVBQWVIO0lBQzNCLE1BQU1JLFdBQVdKLFNBQVNLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJO0lBQzNDSCxRQUFRQyxHQUFHLENBQUMsZUFBZUM7SUFDM0IsTUFBTUUsa0JBQWtCO1FBQ3RCO1lBQUVDLE1BQU07WUFBS0MsT0FBTztRQUFVO1FBQzlCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFPO1FBQzdCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFPO1FBQzdCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFNO1FBQzVCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFNO1FBQzVCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFVO1FBQ2hDO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFVO1FBQ2hDO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFhO0tBQ3BDO0lBRUQsTUFBTUMsdUJBQXVCLENBQUNDO1FBQzVCLE1BQU1DLG1CQUFtQkQsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO1FBQzNDWixLQUFLVTtJQUNQO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUlDLFdBQVdwQixrRUFBc0I7OzhCQUNwQyw4REFBQ3NCO29CQUFPRixXQUFXcEIsa0VBQXNCOzhCQUN2Qyw0RUFBQ21CO3dCQUFJQyxXQUFXcEIseUVBQTZCOzswQ0FDM0MsOERBQUNDLGtEQUFJQTtnQ0FBQ3VCLE1BQU0sSUFBYSxPQUFUZjtnQ0FBWVcsV0FBV3BCLGdFQUFvQjs7a0RBQ3pELDhEQUFDMEI7a0RBQUs7Ozs7OztrREFDTiw4REFBQ0M7Ozs7O2tEQUNELDhEQUFDRDtrREFBSzs7Ozs7Ozs7Ozs7OzRCQUVQckIsU0FBU3VCLE1BQU0sSUFBSSxvQkFDbEIsOERBQUNDOzBDQUNDLDRFQUFDQztvQ0FBT0MsVUFBVWpCOzhDQUNmSCxnQkFBZ0JxQixHQUFHLENBQUMsQ0FBQ0MscUJBQ3BCLDhEQUFDQzs0Q0FBdUJoQixPQUFPZSxLQUFLckIsSUFBSTtzREFDckNxQixLQUFLcEIsS0FBSzsyQ0FEQW9CLEtBQUtyQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFTbEMsOERBQUN1QjtvQkFBS2YsV0FBV3BCLGdFQUFvQjs4QkFBR0k7Ozs7Ozs4QkFDeEMsOERBQUNnQztvQkFBT2hCLFdBQVdwQixrRUFBc0I7O3NDQUN2Qyw4REFBQzBCO3NDQUFLOzs7Ozs7c0NBQ04sOERBQUNBOztnQ0FBSztnQ0FDa0I7OENBQ3RCLDhEQUFDekIsa0RBQUlBO29DQUFDdUIsTUFBSzs4Q0FBcUI7Ozs7OztnQ0FBZ0I7Ozs7Ozs7c0NBR2xELDhEQUFDRTtzQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoQjtHQXpEd0J2Qjs7UUFDS0Qsa0RBQVNBOzs7S0FEZEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanM/MjlhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tcG9uZW50U3R5bGVzIGZyb20gXCIuL2xheW91dC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB7IHBhdGhuYW1lLCBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2coXCJwYXRobmFtZTogXCIgKyBwYXRobmFtZSk7XG4gIGNvbnN0IGhvbWVQYXRoID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdIHx8IFwiXCI7XG4gIGNvbnNvbGUubG9nKFwiaG9tZVBhdGg6IFwiICsgaG9tZVBhdGgpO1xuICBjb25zdCBsYW5ndWFnZU9wdGlvbnMgPSBbXG4gICAgeyBwYXRoOiBcIi9cIiwgbGFiZWw6IFwiRW5nbGlzaFwiIH0sXG4gICAgeyBwYXRoOiBcIi96aFwiLCBsYWJlbDogXCLnroDkvZPkuK3mlodcIiB9LFxuICAgIHsgcGF0aDogXCIvdGNcIiwgbGFiZWw6IFwi57mB6auU5Lit5paHXCIgfSxcbiAgICB7IHBhdGg6IFwiL2tyXCIsIGxhYmVsOiBcIu2VnOq1reyduFwiIH0sXG4gICAgeyBwYXRoOiBcIi9qcFwiLCBsYWJlbDogXCLml6XmnKzoqp5cIiB9LFxuICAgIHsgcGF0aDogXCIvcnVcIiwgbGFiZWw6IFwi0KDRg9GB0YHQutC40LlcIiB9LFxuICAgIHsgcGF0aDogXCIvZXNcIiwgbGFiZWw6IFwiRXNwYcOxb2xcIiB9LFxuICAgIHsgcGF0aDogXCIvdm5cIiwgbGFiZWw6IFwiVGnhur9uZyBWaeG7h3RcIiB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMYW5ndWFnZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBwdXNoKHNlbGVjdGVkTGFuZ3VhZ2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMubGF5b3V0fT5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7aG9tZVBhdGh9YH0gY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMubG9nb30+XG4gICAgICAgICAgICAgIDxzcGFuPlVSTHhjb2RlPC9zcGFuPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+eCA9IEVuL0RlPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAge3BhdGhuYW1lLmxlbmd0aCA8PSAzMCAmJiAoXG4gICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlTGFuZ3VhZ2VDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAge2xhbmd1YWdlT3B0aW9ucy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0ucGF0aH0gdmFsdWU9e2l0ZW0ucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLm1haW59PntjaGlsZHJlbn08L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICA8c3Bhbj5PbmxpbmUgVVJMIEVuY29kZS9EZWNvZGUgVG9vbC4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IDIwMjN7XCIgXCJ9XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9yb2tjc28uY29tXCI+cm9rY3NvIPCfjak8L0xpbms+XG4gICAgICAgICAgICAuJm5ic3A7XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9zcGFuPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvbmVudFN0eWxlcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJob21lUGF0aCIsInNwbGl0IiwibGFuZ3VhZ2VPcHRpb25zIiwicGF0aCIsImxhYmVsIiwiaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImxheW91dCIsImhlYWRlciIsImhlYWRlckNvbnRlbnQiLCJocmVmIiwibG9nbyIsInNwYW4iLCJiciIsImxlbmd0aCIsIm5hdiIsInNlbGVjdCIsIm9uQ2hhbmdlIiwibWFwIiwiaXRlbSIsIm9wdGlvbiIsIm1haW4iLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});