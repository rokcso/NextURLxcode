"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/kr",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const { pathname, push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(pathname);\n    const homePath = pathname.split(\"/\")[1] || \"\";\n    const languageOptions = [\n        {\n            path: \"/\",\n            label: \"English\"\n        },\n        {\n            path: \"/zh\",\n            label: \"简体中文\"\n        },\n        {\n            path: \"/tc\",\n            label: \"繁體中文\"\n        },\n        {\n            path: \"/kr\",\n            label: \"한국인\"\n        },\n        {\n            path: \"/jp\",\n            label: \"日本語\"\n        },\n        {\n            path: \"/ru\",\n            label: \"Русский\"\n        },\n        {\n            path: \"/es\",\n            label: \"Espa\\xf1ol\"\n        },\n        {\n            path: \"/vn\",\n            label: \"Tiếng Việt\"\n        }\n    ];\n    const handleLanguageChange = (event)=>{\n        const selectedLanguage = event.target.value;\n        push(selectedLanguage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().layout),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\".concat(homePath),\n                                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"URLxcode\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"x = En/De\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            pathname.length <= 30 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: handleLanguageChange,\n                                    children: languageOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: item.path,\n                                            children: item.label\n                                        }, item.path, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Online URL Encode/Decode Tool.\\xa0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Copyright \\xa9 2023 \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"https://rokcso.com\",\n                                    children: \"rokcso\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 35\n                                }, this),\n                                \".\\xa0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"iByxMMxcsL+Mr6fMHv/yYcNrWLw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNyQjtBQUNXO0FBRXpCLFNBQVNHLE9BQU8sS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFLEdBQUdKLHNEQUFTQTtJQUNwQ0ssUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU1JLFdBQVdKLFNBQVNLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJO0lBQzNDLE1BQU1DLGtCQUFrQjtRQUN0QjtZQUFFQyxNQUFNO1lBQUtDLE9BQU87UUFBVTtRQUM5QjtZQUFFRCxNQUFNO1lBQU9DLE9BQU87UUFBTztRQUM3QjtZQUFFRCxNQUFNO1lBQU9DLE9BQU87UUFBTztRQUM3QjtZQUFFRCxNQUFNO1lBQU9DLE9BQU87UUFBTTtRQUM1QjtZQUFFRCxNQUFNO1lBQU9DLE9BQU87UUFBTTtRQUM1QjtZQUFFRCxNQUFNO1lBQU9DLE9BQU87UUFBVTtRQUNoQztZQUFFRCxNQUFNO1lBQU9DLE9BQU87UUFBVTtRQUNoQztZQUFFRCxNQUFNO1lBQU9DLE9BQU87UUFBYTtLQUNwQztJQUVELE1BQU1DLHVCQUF1QixDQUFDQztRQUM1QixNQUFNQyxtQkFBbUJELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUMzQ1osS0FBS1U7SUFDUDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDRztZQUFJQyxXQUFXcEIsa0VBQXNCOzs4QkFDcEMsOERBQUNzQjtvQkFBT0YsV0FBV3BCLGtFQUFzQjs4QkFDdkMsNEVBQUNtQjt3QkFBSUMsV0FBV3BCLHlFQUE2Qjs7MENBQzNDLDhEQUFDQyxrREFBSUE7Z0NBQUN1QixNQUFNLElBQWEsT0FBVGY7Z0NBQVlXLFdBQVdwQixnRUFBb0I7O2tEQUN6RCw4REFBQzBCO2tEQUFLOzs7Ozs7a0RBQ04sOERBQUNDOzs7OztrREFDRCw4REFBQ0Q7a0RBQUs7Ozs7Ozs7Ozs7Ozs0QkFFUHJCLFNBQVN1QixNQUFNLElBQUksb0JBQ2xCLDhEQUFDQzswQ0FDQyw0RUFBQ0M7b0NBQU9DLFVBQVVqQjs4Q0FDZkgsZ0JBQWdCcUIsR0FBRyxDQUFDLENBQUNDLHFCQUNwQiw4REFBQ0M7NENBQXVCaEIsT0FBT2UsS0FBS3JCLElBQUk7c0RBQ3JDcUIsS0FBS3BCLEtBQUs7MkNBREFvQixLQUFLckIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBU2xDLDhEQUFDdUI7b0JBQUtmLFdBQVdwQixnRUFBb0I7OEJBQUdJOzs7Ozs7OEJBQ3hDLDhEQUFDZ0M7b0JBQU9oQixXQUFXcEIsa0VBQXNCOztzQ0FDdkMsOERBQUMwQjtzQ0FBSzs7Ozs7O3NDQUNOLDhEQUFDQTs7Z0NBQUs7OENBQ2tCLDhEQUFDekIsa0RBQUlBO29DQUFDdUIsTUFBSzs4Q0FBcUI7Ozs7OztnQ0FBYTs7Ozs7OztzQ0FHckUsOERBQUNFO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBdkR3QnZCOztRQUNLRCxrREFBU0E7OztLQURkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5qcz8yOWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSBcIi4vbGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUsIHB1c2ggfSA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhwYXRobmFtZSk7XG4gIGNvbnN0IGhvbWVQYXRoID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdIHx8IFwiXCI7XG4gIGNvbnN0IGxhbmd1YWdlT3B0aW9ucyA9IFtcbiAgICB7IHBhdGg6IFwiL1wiLCBsYWJlbDogXCJFbmdsaXNoXCIgfSxcbiAgICB7IHBhdGg6IFwiL3poXCIsIGxhYmVsOiBcIueugOS9k+S4reaWh1wiIH0sXG4gICAgeyBwYXRoOiBcIi90Y1wiLCBsYWJlbDogXCLnuYHpq5TkuK3mlodcIiB9LFxuICAgIHsgcGF0aDogXCIva3JcIiwgbGFiZWw6IFwi7ZWc6rWt7J24XCIgfSxcbiAgICB7IHBhdGg6IFwiL2pwXCIsIGxhYmVsOiBcIuaXpeacrOiqnlwiIH0sXG4gICAgeyBwYXRoOiBcIi9ydVwiLCBsYWJlbDogXCLQoNGD0YHRgdC60LjQuVwiIH0sXG4gICAgeyBwYXRoOiBcIi9lc1wiLCBsYWJlbDogXCJFc3Bhw7FvbFwiIH0sXG4gICAgeyBwYXRoOiBcIi92blwiLCBsYWJlbDogXCJUaeG6v25nIFZp4buHdFwiIH0sXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZExhbmd1YWdlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHB1c2goc2VsZWN0ZWRMYW5ndWFnZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5sYXlvdXR9PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5oZWFkZXJDb250ZW50fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtob21lUGF0aH1gfSBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgPHNwYW4+VVJMeGNvZGU8L3NwYW4+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8c3Bhbj54ID0gRW4vRGU8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7cGF0aG5hbWUubGVuZ3RoIDw9IDMwICYmIChcbiAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVMYW5ndWFnZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VPcHRpb25zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5wYXRofSB2YWx1ZT17aXRlbS5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMubWFpbn0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxzcGFuPk9ubGluZSBVUkwgRW5jb2RlL0RlY29kZSBUb29sLiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIENvcHlyaWdodCAmY29weTsgMjAyMyA8TGluayBocmVmPVwiaHR0cHM6Ly9yb2tjc28uY29tXCI+cm9rY3NvPC9MaW5rPlxuICAgICAgICAgICAgLiZuYnNwO1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5BbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjb21wb25lbnRTdHlsZXMiLCJMaW5rIiwidXNlUm91dGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwYXRobmFtZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiaG9tZVBhdGgiLCJzcGxpdCIsImxhbmd1YWdlT3B0aW9ucyIsInBhdGgiLCJsYWJlbCIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwiZXZlbnQiLCJzZWxlY3RlZExhbmd1YWdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYXlvdXQiLCJoZWFkZXIiLCJoZWFkZXJDb250ZW50IiwiaHJlZiIsImxvZ28iLCJzcGFuIiwiYnIiLCJsZW5ndGgiLCJuYXYiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm1hcCIsIml0ZW0iLCJvcHRpb24iLCJtYWluIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});