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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { children } = param;\n    _s();\n    const [selectedLang, setSelectedLang] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLangChange = (event)=>{\n        setSelectedLang(event.target.value);\n        router.push(selectedLang);\n    };\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const homePath = pathname.split(\"/\")[1] || \"\";\n    const langOptions = [\n        {\n            path: \"/\",\n            label: \"English\"\n        },\n        {\n            path: \"/zh\",\n            label: \"简体中文\"\n        },\n        {\n            path: \"/tc\",\n            label: \"繁體中文\"\n        },\n        {\n            path: \"/kr\",\n            label: \"한국인\"\n        },\n        {\n            path: \"/jp\",\n            label: \"日本語\"\n        },\n        {\n            path: \"/ru\",\n            label: \"Русский\"\n        },\n        {\n            path: \"/es\",\n            label: \"Espa\\xf1ol\"\n        },\n        {\n            path: \"/vn\",\n            label: \"Tiếng Việt\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().layout),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerContent),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\".concat(homePath),\n                                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"URLxcode\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"x = En/De\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            pathname.length <= 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: selectedLang,\n                                    onChange: handleLangChange,\n                                    children: langOptions.map((param)=>/*#__PURE__*/ {\n                                        let { path, label } = param;\n                                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: path,\n                                            children: label\n                                        }, path, false, {\n                                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 21\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Online URL Encode/Decode Tool.\\xa0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Copyright \\xa9 2023 \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"https://rokcso.com\",\n                                    children: \"rokcso\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 35\n                                }, this),\n                                \".\\xa0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"All rights reserved.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/NextURLxcode/components/layout.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"pA5bKaopnk+EaBGA0ySQGT/kKiY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ3JCO0FBQ1c7QUFDUDtBQUVsQixTQUFTSSxPQUFPLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDN0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0osK0NBQVFBLENBQUM7SUFDakQsTUFBTUssU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLG1CQUFtQixDQUFDQztRQUN4QkgsZ0JBQWdCRyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7UUFDbENKLE9BQU9LLElBQUksQ0FBQ1A7SUFDZDtJQUNBLE1BQU0sRUFBRVEsUUFBUSxFQUFFLEdBQUdaLHNEQUFTQTtJQUM5QixNQUFNYSxXQUFXRCxTQUFTRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSTtJQUMzQyxNQUFNQyxjQUFjO1FBQ2xCO1lBQUVDLE1BQU07WUFBS0MsT0FBTztRQUFVO1FBQzlCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFPO1FBQzdCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFPO1FBQzdCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFNO1FBQzVCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFNO1FBQzVCO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFVO1FBQ2hDO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFVO1FBQ2hDO1lBQUVELE1BQU07WUFBT0MsT0FBTztRQUFhO0tBQ3BDO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVdyQixrRUFBc0I7OzhCQUNwQyw4REFBQ3VCO29CQUFPRixXQUFXckIsa0VBQXNCOzhCQUN2Qyw0RUFBQ29CO3dCQUFJQyxXQUFXckIseUVBQTZCOzswQ0FDM0MsOERBQUNDLGtEQUFJQTtnQ0FBQ3dCLE1BQU0sSUFBYSxPQUFUVjtnQ0FBWU0sV0FBV3JCLGdFQUFvQjs7a0RBQ3pELDhEQUFDMkI7a0RBQUs7Ozs7OztrREFDTiw4REFBQ0M7Ozs7O2tEQUNELDhEQUFDRDtrREFBSzs7Ozs7Ozs7Ozs7OzRCQUVQYixTQUFTZSxNQUFNLElBQUksbUJBQ2xCLDhEQUFDQzswQ0FDQyw0RUFBQ0M7b0NBQU9uQixPQUFPTjtvQ0FBYzBCLFVBQVV2Qjs4Q0FDcENRLFlBQVlnQixHQUFHLENBQUM7NENBQUMsRUFBRWYsSUFBSSxFQUFFQyxLQUFLLEVBQUU7K0NBQy9CLDhEQUFDZTs0Q0FBa0J0QixPQUFPTTtzREFDdkJDOzJDQURVRDs7Ozs7b0NBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBY3BCLDhEQUFDaUI7b0JBQUtkLFdBQVdyQixnRUFBb0I7OEJBQUdLOzs7Ozs7OEJBQ3hDLDhEQUFDK0I7b0JBQU9mLFdBQVdyQixrRUFBc0I7O3NDQUN2Qyw4REFBQzJCO3NDQUFLOzs7Ozs7c0NBQ04sOERBQUNBOztnQ0FBSzs4Q0FDa0IsOERBQUMxQixrREFBSUE7b0NBQUN3QixNQUFLOzhDQUFxQjs7Ozs7O2dDQUFhOzs7Ozs7O3NDQUdyRSw4REFBQ0U7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0E5RHdCdkI7O1FBRVBGLGtEQUFTQTtRQUtIQSxrREFBU0E7OztLQVBSRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5qcz8yOWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSBcIi4vbGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbc2VsZWN0ZWRMYW5nLCBzZXRTZWxlY3RlZExhbmddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVMYW5nQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRMYW5nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgcm91dGVyLnB1c2goc2VsZWN0ZWRMYW5nKTtcbiAgfTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhvbWVQYXRoID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdIHx8IFwiXCI7XG4gIGNvbnN0IGxhbmdPcHRpb25zID0gW1xuICAgIHsgcGF0aDogXCIvXCIsIGxhYmVsOiBcIkVuZ2xpc2hcIiB9LFxuICAgIHsgcGF0aDogXCIvemhcIiwgbGFiZWw6IFwi566A5L2T5Lit5paHXCIgfSxcbiAgICB7IHBhdGg6IFwiL3RjXCIsIGxhYmVsOiBcIue5gemrlOS4reaWh1wiIH0sXG4gICAgeyBwYXRoOiBcIi9rclwiLCBsYWJlbDogXCLtlZzqta3snbhcIiB9LFxuICAgIHsgcGF0aDogXCIvanBcIiwgbGFiZWw6IFwi5pel5pys6KqeXCIgfSxcbiAgICB7IHBhdGg6IFwiL3J1XCIsIGxhYmVsOiBcItCg0YPRgdGB0LrQuNC5XCIgfSxcbiAgICB7IHBhdGg6IFwiL2VzXCIsIGxhYmVsOiBcIkVzcGHDsW9sXCIgfSxcbiAgICB7IHBhdGg6IFwiL3ZuXCIsIGxhYmVsOiBcIlRp4bq/bmcgVmnhu4d0XCIgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmxheW91dH0+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmhlYWRlckNvbnRlbnR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2hvbWVQYXRofWB9IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgICA8c3Bhbj5VUkx4Y29kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxzcGFuPnggPSBFbi9EZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtwYXRobmFtZS5sZW5ndGggPD0gMyAmJiAoXG4gICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17c2VsZWN0ZWRMYW5nfSBvbkNoYW5nZT17aGFuZGxlTGFuZ0NoYW5nZX0+XG4gICAgICAgICAgICAgICAgICB7bGFuZ09wdGlvbnMubWFwKCh7IHBhdGgsIGxhYmVsIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3BhdGh9IHZhbHVlPXtwYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAvLyA8bmF2PlxuICAgICAgICAgICAgICAvLyAgIHtsYW5nT3B0aW9ucy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgLy8gICAgIDxMaW5rIGtleT17aXRlbS5wYXRofSBocmVmPXtpdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAvLyAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgLy8gICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgLy8gICApKX1cbiAgICAgICAgICAgICAgLy8gPC9uYXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMubWFpbn0+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxzcGFuPk9ubGluZSBVUkwgRW5jb2RlL0RlY29kZSBUb29sLiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIENvcHlyaWdodCAmY29weTsgMjAyMyA8TGluayBocmVmPVwiaHR0cHM6Ly9yb2tjc28uY29tXCI+cm9rY3NvPC9MaW5rPlxuICAgICAgICAgICAgLiZuYnNwO1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5BbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjb21wb25lbnRTdHlsZXMiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsInJvdXRlciIsImhhbmRsZUxhbmdDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHVzaCIsInBhdGhuYW1lIiwiaG9tZVBhdGgiLCJzcGxpdCIsImxhbmdPcHRpb25zIiwicGF0aCIsImxhYmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwibGF5b3V0IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsImhyZWYiLCJsb2dvIiwic3BhbiIsImJyIiwibGVuZ3RoIiwibmF2Iiwic2VsZWN0Iiwib25DaGFuZ2UiLCJtYXAiLCJvcHRpb24iLCJtYWluIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});