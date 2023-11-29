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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const { pathname, push } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const targetPath = pathname.substring(3);\n    console.log(targetPath);\n    const homePath = pathname.split(\"/\")[1] || \"\";\n    const languageOptions = [\n        {\n            path: \"/\",\n            label: \"English\"\n        },\n        {\n            path: \"/zh\",\n            label: \"简体中文\"\n        },\n        {\n            path: \"/tc\",\n            label: \"繁體中文\"\n        },\n        {\n            path: \"/kr\",\n            label: \"한국인\"\n        },\n        {\n            path: \"/jp\",\n            label: \"日本語\"\n        },\n        {\n            path: \"/ru\",\n            label: \"Русский\"\n        },\n        {\n            path: \"/es\",\n            label: \"Espa\\xf1ol\"\n        },\n        {\n            path: \"/vn\",\n            label: \"Tiếng Việt\"\n        }\n    ];\n    const handleLanguageChange = (event)=>{\n        const selectedLanguage = event.target.value;\n        push(selectedLanguage);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().layout),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().headerContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\".concat(homePath),\n                                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"URLxcode\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"x = En/De\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            pathname.length <= 30 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    onChange: handleLanguageChange,\n                                    children: languageOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: item.path,\n                                            children: item.label\n                                        }, item.path, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 21\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Online URL Encode/Decode Tool.\\xa0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Copyright \\xa9 2023\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"https://rokcso.com\",\n                                    children: \"rokcso \\uD83C\\uDF69\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                \".\\xa0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"iByxMMxcsL+Mr6fMHv/yYcNrWLw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNyQjtBQUNXO0FBRXpCLFNBQVNHLE9BQU8sS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUM3QixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFLEdBQUdKLHNEQUFTQTtJQUNwQyxNQUFNSyxhQUFhRixTQUFTRyxTQUFTLENBQUM7SUFDdENDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixNQUFNSSxXQUFXTixTQUFTTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSTtJQUMzQyxNQUFNQyxrQkFBa0I7UUFDdEI7WUFBRUMsTUFBTTtZQUFLQyxPQUFPO1FBQVU7UUFDOUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU87UUFDN0I7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU87UUFDN0I7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU07UUFDNUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQU07UUFDNUI7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQVU7UUFDaEM7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQVU7UUFDaEM7WUFBRUQsTUFBTTtZQUFPQyxPQUFPO1FBQWE7S0FDcEM7SUFFRCxNQUFNQyx1QkFBdUIsQ0FBQ0M7UUFDNUIsTUFBTUMsbUJBQW1CRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7UUFDM0NkLEtBQUtZO0lBQ1A7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0c7WUFBSUMsV0FBV3RCLGtFQUFzQjs7OEJBQ3BDLDhEQUFDd0I7b0JBQU9GLFdBQVd0QixrRUFBc0I7OEJBQ3ZDLDRFQUFDcUI7d0JBQUlDLFdBQVd0Qix5RUFBNkI7OzBDQUMzQyw4REFBQ0Msa0RBQUlBO2dDQUFDeUIsTUFBTSxJQUFhLE9BQVRmO2dDQUFZVyxXQUFXdEIsZ0VBQW9COztrREFDekQsOERBQUM0QjtrREFBSzs7Ozs7O2tEQUNOLDhEQUFDQzs7Ozs7a0RBQ0QsOERBQUNEO2tEQUFLOzs7Ozs7Ozs7Ozs7NEJBRVB2QixTQUFTeUIsTUFBTSxJQUFJLG9CQUNsQiw4REFBQ0M7MENBQ0MsNEVBQUNDO29DQUFPQyxVQUFVakI7OENBQ2ZILGdCQUFnQnFCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDcEIsOERBQUNDOzRDQUF1QmhCLE9BQU9lLEtBQUtyQixJQUFJO3NEQUNyQ3FCLEtBQUtwQixLQUFLOzJDQURBb0IsS0FBS3JCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVNsQyw4REFBQ3VCO29CQUFLZixXQUFXdEIsZ0VBQW9COzhCQUFHSTs7Ozs7OzhCQUN4Qyw4REFBQ2tDO29CQUFPaEIsV0FBV3RCLGtFQUFzQjs7c0NBQ3ZDLDhEQUFDNEI7c0NBQUs7Ozs7OztzQ0FDTiw4REFBQ0E7O2dDQUFLO2dDQUNrQjs4Q0FDdEIsOERBQUMzQixrREFBSUE7b0NBQUN5QixNQUFLOzhDQUFxQjs7Ozs7O2dDQUFnQjs7Ozs7OztzQ0FHbEQsOERBQUNFO3NDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBekR3QnpCOztRQUNLRCxrREFBU0E7OztLQURkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5qcz8yOWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSBcIi4vbGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUsIHB1c2ggfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0YXJnZXRQYXRoID0gcGF0aG5hbWUuc3Vic3RyaW5nKDMpO1xuICBjb25zb2xlLmxvZyh0YXJnZXRQYXRoKTtcbiAgY29uc3QgaG9tZVBhdGggPSBwYXRobmFtZS5zcGxpdChcIi9cIilbMV0gfHwgXCJcIjtcbiAgY29uc3QgbGFuZ3VhZ2VPcHRpb25zID0gW1xuICAgIHsgcGF0aDogXCIvXCIsIGxhYmVsOiBcIkVuZ2xpc2hcIiB9LFxuICAgIHsgcGF0aDogXCIvemhcIiwgbGFiZWw6IFwi566A5L2T5Lit5paHXCIgfSxcbiAgICB7IHBhdGg6IFwiL3RjXCIsIGxhYmVsOiBcIue5gemrlOS4reaWh1wiIH0sXG4gICAgeyBwYXRoOiBcIi9rclwiLCBsYWJlbDogXCLtlZzqta3snbhcIiB9LFxuICAgIHsgcGF0aDogXCIvanBcIiwgbGFiZWw6IFwi5pel5pys6KqeXCIgfSxcbiAgICB7IHBhdGg6IFwiL3J1XCIsIGxhYmVsOiBcItCg0YPRgdGB0LrQuNC5XCIgfSxcbiAgICB7IHBhdGg6IFwiL2VzXCIsIGxhYmVsOiBcIkVzcGHDsW9sXCIgfSxcbiAgICB7IHBhdGg6IFwiL3ZuXCIsIGxhYmVsOiBcIlRp4bq/bmcgVmnhu4d0XCIgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVMYW5ndWFnZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkTGFuZ3VhZ2UgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgcHVzaChzZWxlY3RlZExhbmd1YWdlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmxheW91dH0+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmhlYWRlckNvbnRlbnR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2hvbWVQYXRofWB9IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgICA8c3Bhbj5VUkx4Y29kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxzcGFuPnggPSBFbi9EZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtwYXRobmFtZS5sZW5ndGggPD0gMzAgJiYgKFxuICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUxhbmd1YWdlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgIHtsYW5ndWFnZU9wdGlvbnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtLnBhdGh9IHZhbHVlPXtpdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5tYWlufT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgPHNwYW4+T25saW5lIFVSTCBFbmNvZGUvRGVjb2RlIFRvb2wuJm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyAyMDIze1wiIFwifVxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vcm9rY3NvLmNvbVwiPnJva2NzbyDwn42pPC9MaW5rPlxuICAgICAgICAgICAgLiZuYnNwO1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5BbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjb21wb25lbnRTdHlsZXMiLCJMaW5rIiwidXNlUm91dGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJwYXRobmFtZSIsInB1c2giLCJ0YXJnZXRQYXRoIiwic3Vic3RyaW5nIiwiY29uc29sZSIsImxvZyIsImhvbWVQYXRoIiwic3BsaXQiLCJsYW5ndWFnZU9wdGlvbnMiLCJwYXRoIiwibGFiZWwiLCJoYW5kbGVMYW5ndWFnZUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRMYW5ndWFnZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGF5b3V0IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsImhyZWYiLCJsb2dvIiwic3BhbiIsImJyIiwibGVuZ3RoIiwibmF2Iiwic2VsZWN0Iiwib25DaGFuZ2UiLCJtYXAiLCJpdGVtIiwib3B0aW9uIiwibWFpbiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});