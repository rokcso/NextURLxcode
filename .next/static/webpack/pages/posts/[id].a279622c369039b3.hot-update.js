"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _lib_useI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/useI18n */ \"./lib/useI18n.js\");\n\nvar _s = $RefreshSig$();\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { post } = param;\n    _s();\n    const texts = (0,_lib_useI18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const pStr = post.content.split(\"|\");\n    console.log(pStr);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            texts: texts,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/posts/[id].js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this),\n                    pStr.map((str, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"\".concat(str)\n                        }, index, false, {\n                            fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/posts/[id].js\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.content\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/posts/[id].js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/posts/[id].js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/posts/[id].js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Post, \"JoBkdkib0JLAW/ISp67mzZBvKTY=\", false, function() {\n    return [\n        _lib_useI18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0w7O0FBR3pCLFNBQVNFLEtBQUssS0FBUTtRQUFSLEVBQUVDLElBQUksRUFBRSxHQUFSOztJQUMzQixNQUFNQyxRQUFRSCx3REFBT0E7SUFDckIsTUFBTUksT0FBT0YsS0FBS0csT0FBTyxDQUFDQyxLQUFLLENBQUM7SUFDaENDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDWixxQkFDRTtrQkFDRSw0RUFBQ0wsMERBQU1BO1lBQUNJLE9BQU9BO3NCQUNiLDRFQUFDTTs7a0NBQ0MsOERBQUNDO2tDQUFJUixLQUFLUyxLQUFLOzs7Ozs7b0JBQ2RQLEtBQUtRLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZCw4REFBQ0M7c0NBQWUsR0FBTyxPQUFKRjsyQkFBWEM7Ozs7O2tDQUVWLDhEQUFDQztrQ0FBR2IsS0FBS0csT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFCO0dBakJ3Qko7O1FBQ1JELG9EQUFPQTs7O0tBRENDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tpZF0uanM/Nzk2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHVzZUkxOG4gZnJvbSBcIi4uLy4uL2xpYi91c2VJMThuXCI7XG5pbXBvcnQgcG9zdHNEYXRhIGZyb20gXCIuLi8uLi9wdWJsaWMvcG9zdHMvZW4uanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSB7XG4gIGNvbnN0IHRleHRzID0gdXNlSTE4bigpO1xuICBjb25zdCBwU3RyID0gcG9zdC5jb250ZW50LnNwbGl0KFwifFwiKTtcbiAgY29uc29sZS5sb2cocFN0cik7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgdGV4dHM9e3RleHRzfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICB7cFN0ci5tYXAoKHN0ciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PntgJHtzdHJ9YH08L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBwb3N0c0RhdGEubWFwKChwb3N0KSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgaWQ6IHBvc3QuaWQsXG4gICAgfSxcbiAgfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuICBjb25zdCBwb3N0ID0gcG9zdHNEYXRhLmZpbmQoKHBvc3QpID0+IHBvc3QuaWQgPT09IGlkKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsInVzZUkxOG4iLCJQb3N0IiwicG9zdCIsInRleHRzIiwicFN0ciIsImNvbnRlbnQiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsInRpdGxlIiwibWFwIiwic3RyIiwiaW5kZXgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});