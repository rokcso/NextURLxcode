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

/***/ "./components/postsList.js":
/*!*********************************!*\
  !*** ./components/postsList.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PostsList(param) {\n    let { posts, texts } = param;\n    _s();\n    const safeTexts = texts || {};\n    console.log(safeTexts);\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let path = \"\";\n    if (pathname !== \"/\") {\n        path = pathname;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: safeTexts.aboutURL\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"\".concat(path, \"/posts/\").concat(post.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.excerpt\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, post.id, true, {\n                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(PostsList, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PostsList;\nvar _c;\n$RefreshReg$(_c, \"PostsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzTGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVztBQUV6QixTQUFTRSxVQUFVLEtBQWdCO1FBQWhCLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFLEdBQWhCOztJQUNoQyxNQUFNQyxZQUFZRCxTQUFTLENBQUM7SUFDNUJFLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLEVBQUVHLFFBQVEsRUFBRSxHQUFHUCxzREFBU0E7SUFDOUIsSUFBSVEsT0FBTztJQUNYLElBQUlELGFBQWEsS0FBSztRQUNwQkMsT0FBT0Q7SUFDVDtJQUNBLHFCQUNFO2tCQUNFLDRFQUFDRTs7OEJBQ0MsOERBQUNDOzhCQUFJTixVQUFVTyxRQUFROzs7Ozs7OEJBQ3ZCLDhEQUFDRjs4QkFDRVAsTUFBTVUsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDSjs7OENBQ0MsOERBQUNWLGtEQUFJQTtvQ0FBQ2UsTUFBTSxHQUFpQkQsT0FBZEwsTUFBSyxXQUFpQixPQUFSSyxLQUFLRSxFQUFFOzhDQUNsQyw0RUFBQ0M7a0RBQUlILEtBQUtJLEtBQUs7Ozs7Ozs7Ozs7OzhDQUVqQiw4REFBQ0M7OENBQUdMLEtBQUtNLE9BQU87Ozs7Ozs7MkJBSlJOLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzdCO0dBekJ3QmQ7O1FBR0RELGtEQUFTQTs7O0tBSFJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdHNMaXN0LmpzP2Q5Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzTGlzdCh7IHBvc3RzLCB0ZXh0cyB9KSB7XG4gIGNvbnN0IHNhZmVUZXh0cyA9IHRleHRzIHx8IHt9O1xuICBjb25zb2xlLmxvZyhzYWZlVGV4dHMpO1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHBhdGggPSBcIlwiO1xuICBpZiAocGF0aG5hbWUgIT09IFwiL1wiKSB7XG4gICAgcGF0aCA9IHBhdGhuYW1lO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57c2FmZVRleHRzLmFib3V0VVJMfTwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwYXRofS9wb3N0cy8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPHA+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiUG9zdHNMaXN0IiwicG9zdHMiLCJ0ZXh0cyIsInNhZmVUZXh0cyIsImNvbnNvbGUiLCJsb2ciLCJwYXRobmFtZSIsInBhdGgiLCJkaXYiLCJoMiIsImFib3V0VVJMIiwibWFwIiwicG9zdCIsImhyZWYiLCJpZCIsImgzIiwidGl0bGUiLCJwIiwiZXhjZXJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/postsList.js\n"));

/***/ })

});