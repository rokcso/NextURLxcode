"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jp/[id]",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Layout(param) {\n    let { children, texts } = param;\n    _s();\n    const safeTexts = texts || {};\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    let homePath = \"\";\n    if (pathname.split(\"/\")[1].length !== 2) {\n        homePath = \"\";\n    } else {\n        homePath = pathname.split(\"/\")[1] || \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"baidu-site-verification\",\n                        content: \"codeva-yd4vTyGhor\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"google-site-verification\",\n                        content: \"h9_G-edVa7uTlUrYdzBl-7zMXQbInCXjG70uZ__CVmk\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: safeTexts.siteTitle\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: safeTexts.siteDescription\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon/icon16x16.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon/icon32x32.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon/icon48x48.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon/icon64x64.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon/icon128x128.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://umami.rokcso.com/script.js\",\n                        \"data-website-id\": \"6cdcdba8-3a86-4ae9-9244-bfc1ef144b6e\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        dangerouslySetInnerHTML: {\n                            __html: '\\n    var _hmt = _hmt || [];\\n    (function () {\\n      var hm = document.createElement(\"script\");\\n      hm.src = \"https://hm.baidu.com/hm.js?54ef289bd991df8f8430238e83790b15\";\\n      var s = document.getElementsByTagName(\"script\")[0];\\n      s.parentNode.insertBefore(hm, s);\\n    })();\\n    '\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        async: true,\n                        src: \"https://www.googletagmanager.com/gtag/js?id=G-B1CEHJ1G63\"\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        dangerouslySetInnerHTML: {\n                            __html: \"\\n    window.dataLayer = window.dataLayer || [];\\n    function gtag() { dataLayer.push(arguments); }\\n    gtag('js', new Date());\\n\\n    gtag('config', 'G-B1CEHJ1G63');\\n    \"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().layout),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerContent),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\".concat(homePath),\n                                    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"URLxcode\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"x = En/De\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                pathname.length <= 10 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            children: \"English\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"\\xa0\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/zh\",\n                                            children: \"简体中文\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"\\xa0\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/kr\",\n                                            children: \"한국인\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"\\xa0\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/jp\",\n                                            children: \"日本語\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this) : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Online URL Encode/Decode Tool.\\xa0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Copyright \\xa9 2023 \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"https://rokcso.com\",\n                                        children: \"rokcso\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 35\n                                    }, this),\n                                    \".\\xa0\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"All rights reserved.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/waringhu/Developer/rokcso Studio/NextURLxcode/components/layout.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5qcz8yOWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21wb25lbnRTdHlsZXMgZnJvbSBcIi4vbGF5b3V0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgdGV4dHMgfSkge1xuICBjb25zdCBzYWZlVGV4dHMgPSB0ZXh0cyB8fCB7fTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gIGxldCBob21lUGF0aCA9IFwiXCI7XG4gIGlmIChwYXRobmFtZS5zcGxpdChcIi9cIilbMV0ubGVuZ3RoICE9PSAyKSB7XG4gICAgaG9tZVBhdGggPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIGhvbWVQYXRoID0gcGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdIHx8IFwiXCI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgey8qIEJhaUR1IOaQnOe0oui1hOa6kOermeeCuemqjOivgSAqL31cbiAgICAgICAgPG1ldGEgbmFtZT1cImJhaWR1LXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cImNvZGV2YS15ZDR2VHlHaG9yXCIgLz5cbiAgICAgICAgey8qIEdvb2dsZSDmkJzntKLotYTmupDnq5nngrnpqozor4EgKi99XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiXG4gICAgICAgICAgY29udGVudD1cImg5X0ctZWRWYTd1VGxVcllkekJsLTd6TVhRYkluQ1hqRzcwdVpfX0NWbWtcIlxuICAgICAgICAvPlxuICAgICAgICA8dGl0bGU+e3NhZmVUZXh0cy5zaXRlVGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c2FmZVRleHRzLnNpdGVEZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi9pY29uMTZ4MTYucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi9pY29uMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi9pY29uNDh4NDgucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi9pY29uNjR4NjQucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi9pY29uMTI4eDEyOC5wbmdcIiAvPlxuXG4gICAgICAgIHsvKiDnp4HmnInljJbpg6jnvbLnmoQgdW1hbWkg57uf6K6h5YiG5p6QICovfVxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBzcmM9XCJodHRwczovL3VtYW1pLnJva2Nzby5jb20vc2NyaXB0LmpzXCJcbiAgICAgICAgICBkYXRhLXdlYnNpdGUtaWQ9XCI2Y2RjZGJhOC0zYTg2LTRhZTktOTI0NC1iZmMxZWYxNDRiNmVcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIHsvKiDnmb7luqbnu5/orqHliIbmnpAgKi99XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBgXG4gICAgdmFyIF9obXQgPSBfaG10IHx8IFtdO1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgaG0uc3JjID0gXCJodHRwczovL2htLmJhaWR1LmNvbS9obS5qcz81NGVmMjg5YmQ5OTFkZjhmODQzMDIzOGU4Mzc5MGIxNVwiO1xuICAgICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaG0sIHMpO1xuICAgIH0pKCk7XG4gICAgYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICB7LyogR29vZ2xlIOe7n+iuoeWIhuaekCAqL31cbiAgICAgICAgey8qIEdvb2dsZSB0YWcgKGd0YWcuanMpICovfVxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctQjFDRUhKMUc2M1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IGBcbiAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICBmdW5jdGlvbiBndGFnKCkgeyBkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpOyB9XG4gICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcblxuICAgIGd0YWcoJ2NvbmZpZycsICdHLUIxQ0VISjFHNjMnKTtcbiAgICBgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmxheW91dH0+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjb21wb25lbnRTdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmhlYWRlckNvbnRlbnR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2hvbWVQYXRofWB9IGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgICA8c3Bhbj5VUkx4Y29kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxzcGFuPnggPSBFbi9EZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHtwYXRobmFtZS5sZW5ndGggPD0gMTAgPyAoXG4gICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5FbmdsaXNoPC9MaW5rPlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvemhgfT7nroDkvZPkuK3mloc8L0xpbms+XG4gICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9rcmB9Pu2VnOq1reyduDwvTGluaz5cbiAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2pwYH0+5pel5pys6KqePC9MaW5rPlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e2NvbXBvbmVudFN0eWxlcy5tYWlufT57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y29tcG9uZW50U3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgPHNwYW4+T25saW5lIFVSTCBFbmNvZGUvRGVjb2RlIFRvb2wuJm5ic3A7PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyAyMDIzIDxMaW5rIGhyZWY9XCJodHRwczovL3Jva2Nzby5jb21cIj5yb2tjc288L0xpbms+XG4gICAgICAgICAgICAuJm5ic3A7XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkFsbCByaWdodHMgcmVzZXJ2ZWQuPC9zcGFuPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNvbXBvbmVudFN0eWxlcyIsIkhlYWQiLCJMaW5rIiwidXNlUm91dGVyIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0ZXh0cyIsInNhZmVUZXh0cyIsInBhdGhuYW1lIiwiaG9tZVBhdGgiLCJzcGxpdCIsImxlbmd0aCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIiwic2l0ZVRpdGxlIiwic2l0ZURlc2NyaXB0aW9uIiwibGluayIsInJlbCIsImhyZWYiLCJzY3JpcHQiLCJhc3luYyIsInNyYyIsImRhdGEtd2Vic2l0ZS1pZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZGl2IiwiY2xhc3NOYW1lIiwibGF5b3V0IiwiaGVhZGVyIiwiaGVhZGVyQ29udGVudCIsImxvZ28iLCJzcGFuIiwiYnIiLCJuYXYiLCJtYWluIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n"));

/***/ })

});