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

/***/ "./components/postsList.js":
/*!*********************************!*\
  !*** ./components/postsList.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PostsList(param) {\n    let { posts, texts } = param;\n    _s();\n    const safeTexts = texts || {};\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let path = \"\";\n    if (pathname !== \"/\") {\n        path = pathname;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: safeTexts.aboutURL\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"\".concat(path, \"/posts/\").concat(post.id),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: post.excerpt\n                                }, void 0, false, {\n                                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, post.id, true, {\n                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/postsList.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(PostsList, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PostsList;\nvar _c;\n$RefreshReg$(_c, \"PostsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzTGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVztBQUV6QixTQUFTRSxVQUFVLEtBQWdCO1FBQWhCLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFLEdBQWhCOztJQUNoQyxNQUFNQyxZQUFZRCxTQUFTLENBQUM7SUFDNUIsTUFBTSxFQUFFRSxRQUFRLEVBQUUsR0FBR0wsc0RBQVNBO0lBQzlCLElBQUlNLE9BQU87SUFDWCxJQUFJRCxhQUFhLEtBQUs7UUFDcEJDLE9BQU9EO0lBQ1Q7SUFDQSxxQkFDRTtrQkFDRSw0RUFBQ0U7OzhCQUNDLDhEQUFDQzs4QkFBSUosVUFBVUssUUFBUTs7Ozs7OzhCQUN2Qiw4REFBQ0Y7OEJBQ0VMLE1BQU1RLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0o7OzhDQUNDLDhEQUFDUixrREFBSUE7b0NBQUNhLE1BQU0sR0FBaUJELE9BQWRMLE1BQUssV0FBaUIsT0FBUkssS0FBS0UsRUFBRTs4Q0FDbEMsNEVBQUNDO2tEQUFJSCxLQUFLSSxLQUFLOzs7Ozs7Ozs7Ozs4Q0FFakIsOERBQUNDOzhDQUFHTCxLQUFLTSxPQUFPOzs7Ozs7OzJCQUpSTixLQUFLRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVc3QjtHQXhCd0JaOztRQUVERCxrREFBU0E7OztLQUZSQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Bvc3RzTGlzdC5qcz9kOWNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0c0xpc3QoeyBwb3N0cywgdGV4dHMgfSkge1xuICBjb25zdCBzYWZlVGV4dHMgPSB0ZXh0cyB8fCB7fTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gIGxldCBwYXRoID0gXCJcIjtcbiAgaWYgKHBhdGhuYW1lICE9PSBcIi9cIikge1xuICAgIHBhdGggPSBwYXRobmFtZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+e3NhZmVUZXh0cy5hYm91dFVSTH08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cGF0aH0vcG9zdHMvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxwPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlBvc3RzTGlzdCIsInBvc3RzIiwidGV4dHMiLCJzYWZlVGV4dHMiLCJwYXRobmFtZSIsInBhdGgiLCJkaXYiLCJoMiIsImFib3V0VVJMIiwibWFwIiwicG9zdCIsImhyZWYiLCJpZCIsImgzIiwidGl0bGUiLCJwIiwiZXhjZXJwdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/postsList.js\n"));

/***/ })

});