"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const { pathname, push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const homePath = pathname.split(\"/\")[1] || \"\";\n    const languageOptions = [\n        {\n            path: \"/\",\n            label: \"English\"\n        },\n        {\n            path: \"/zh\",\n            label: \"简体中文\"\n        },\n        {\n            path: \"/tc\",\n            label: \"繁體中文\"\n        },\n        {\n            path: \"/kr\",\n            label: \"한국인\"\n        },\n        {\n            path: \"/jp\",\n            label: \"日本語\"\n        },\n        {\n            path: \"/ru\",\n            label: \"Русский\"\n        },\n        {\n            path: \"/es\",\n            label: \"Espa\\xf1ol\"\n        },\n        {\n            path: \"/vn\",\n            label: \"Tiếng Việt\"\n        }\n    ];\n    const handleLanguageChange = (event)=>{\n        const selectedLanguage = event.target.value;\n        push(selectedLanguage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().layout),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\".concat(homePath),\n                                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"URLxcode\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"x = En/De\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            pathname.length <= 30 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: handleLanguageChange,\n                                    children: languageOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"$pathname[0:1]+$item.path+$pathname[3:]\",\n                                            children: item.label\n                                        }, item.path, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Online URL Encode/Decode Tool.\\xa0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Copyright \\xa9 2023\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"https://rokcso.com\",\n                                    children: \"rokcso \\uD83C\\uDF69\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                \".\\xa0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"iByxMMxcsL+Mr6fMHv/yYcNrWLw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNyQjtBQUNXO0FBRXpCLFNBQVNHLE9BQU8sS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFLEdBQUdKLHNEQUFTQTtJQUNwQyxNQUFNSyxXQUFXRixTQUFTRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSTtJQUMzQyxNQUFNQyxrQkFBa0I7UUFDdEI7WUFBRUMsTUFBTTtZQUFLQyxPQUFPO1FBQVU7UUFDOUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU87UUFDN0I7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU87UUFDN0I7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU07UUFDNUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU07UUFDNUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQVU7UUFDaEM7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQVU7UUFDaEM7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQWE7S0FDcEM7SUFFRCxNQUFNQyx1QkFBdUIsQ0FBQ0M7UUFDNUIsTUFBTUMsbUJBQW1CRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7UUFDM0NWLEtBQUtRO0lBQ1A7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0c7WUFBSUMsV0FBV2xCLGtFQUFzQjs7OEJBQ3BDLDhEQUFDb0I7b0JBQU9GLFdBQVdsQixrRUFBc0I7OEJBQ3ZDLDRFQUFDaUI7d0JBQUlDLFdBQVdsQix5RUFBNkI7OzBDQUMzQyw4REFBQ0Msa0RBQUlBO2dDQUFDcUIsTUFBTSxJQUFhLE9BQVRmO2dDQUFZVyxXQUFXbEIsZ0VBQW9COztrREFDekQsOERBQUN3QjtrREFBSzs7Ozs7O2tEQUNOLDhEQUFDQzs7Ozs7a0RBQ0QsOERBQUNEO2tEQUFLOzs7Ozs7Ozs7Ozs7NEJBRVBuQixTQUFTcUIsTUFBTSxJQUFJLG9CQUNsQiw4REFBQ0M7MENBQ0MsNEVBQUNDO29DQUFPQyxVQUFVakI7OENBQ2ZILGdCQUFnQnFCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDcEIsOERBQUNDOzRDQUVDaEIsT0FBUTtzREFFUGUsS0FBS3BCLEtBQUs7MkNBSE5vQixLQUFLckIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBVzVCLDhEQUFDdUI7b0JBQUtmLFdBQVdsQixnRUFBb0I7OEJBQUdJOzs7Ozs7OEJBQ3hDLDhEQUFDOEI7b0JBQU9oQixXQUFXbEIsa0VBQXNCOztzQ0FDdkMsOERBQUN3QjtzQ0FBSzs7Ozs7O3NDQUNOLDhEQUFDQTs7Z0NBQUs7Z0NBQ2tCOzhDQUN0Qiw4REFBQ3ZCLGtEQUFJQTtvQ0FBQ3FCLE1BQUs7OENBQXFCOzs7Ozs7Z0NBQWdCOzs7Ozs7O3NDQUdsRCw4REFBQ0U7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0ExRHdCckI7O1FBQ0tELGtEQUFTQTs7O0tBRGRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbXBvbmVudFN0eWxlcyBmcm9tIFwiLi9sYXlvdXQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBwYXRobmFtZSwgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhvbWVQYXRoID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdIHx8IFwiXCI7XG4gIGNvbnN0IGxhbmd1YWdlT3B0aW9ucyA9IFtcbiAgICB7IHBhdGg6IFwiL1wiLCBsYWJlbDogXCJFbmdsaXNoXCIgfSxcbiAgICB7IHBhdGg6IFwiL3poXCIsIGxhYmVsOiBcIueugOS9k+S4reaWh1wiIH0sXG4gICAgeyBwYXRoOiBcIi90Y1wiLCBsYWJlbDogXCLnuYHpq5TkuK3mlodcIiB9LFxuICAgIHsgcGF0aDogXCIva3JcIiwgbGFiZWw6IFwi7ZWc6rWt7J24XCIgfSxcbiAgICB7IHBhdGg6IFwiL2pwXCIsIGxhYmVsOiBcIuaXpeacrOiqnlwiIH0sXG4gICAgeyBwYXRoOiBcIi9ydVwiLCBsYWJlbDogXCLQoNGD0YHRgdC60LjQuVwiIH0sXG4gICAgeyBwYXRoOiBcIi9lc1wiLCBsYWJlbDogXCJFc3Bhw7FvbFwiIH0sXG4gICAgeyBwYXRoOiBcIi92blwiLCBsYWJlbDogXCJUaeG6v25nIFZp4buHdFwiIH0sXG4gIF07XG5cbiAgY29uc3QgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZExhbmd1YWdlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHB1c2goc2VsZWN0ZWRMYW5ndWFnZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5sYXlvdXR9PlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5oZWFkZXJDb250ZW50fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtob21lUGF0aH1gfSBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgPHNwYW4+VVJMeGNvZGU8L3NwYW4+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8c3Bhbj54ID0gRW4vRGU8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7cGF0aG5hbWUubGVuZ3RoIDw9IDMwICYmIChcbiAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVMYW5ndWFnZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICB7bGFuZ3VhZ2VPcHRpb25zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2AkcGF0aG5hbWVbMDoxXSskaXRlbS5wYXRoKyRwYXRobmFtZVszOl1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLm1haW59PntjaGlsZHJlbn08L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICA8c3Bhbj5PbmxpbmUgVVJMIEVuY29kZS9EZWNvZGUgVG9vbC4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBDb3B5cmlnaHQgJmNvcHk7IDIwMjN7XCIgXCJ9XG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9yb2tjc28uY29tXCI+cm9rY3NvIPCfjak8L0xpbms+XG4gICAgICAgICAgICAuJm5ic3A7XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9zcGFuPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvbmVudFN0eWxlcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwicHVzaCIsImhvbWVQYXRoIiwic3BsaXQiLCJsYW5ndWFnZU9wdGlvbnMiLCJwYXRoIiwibGFiZWwiLCJoYW5kbGVMYW5ndWFnZUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRMYW5ndWFnZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGF5b3V0IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsImhyZWYiLCJsb2dvIiwic3BhbiIsImJyIiwibGVuZ3RoIiwibmF2Iiwic2VsZWN0Iiwib25DaGFuZ2UiLCJtYXAiLCJpdGVtIiwib3B0aW9uIiwibWFpbiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});