/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/post/[id]"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fwaringhu%2FDeveloper%2FnextURLxcode%2Fpages%2Fpost%2F%5Bid%5D.js&page=%2Fpost%2F%5Bid%5D!":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fwaringhu%2FDeveloper%2FnextURLxcode%2Fpages%2Fpost%2F%5Bid%5D.js&page=%2Fpost%2F%5Bid%5D! ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/post/[id]\",\n      function () {\n        return __webpack_require__(/*! ./pages/post/[id].js */ \"./pages/post/[id].js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/post/[id]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRndhcmluZ2h1JTJGRGV2ZWxvcGVyJTJGbmV4dFVSTHhjb2RlJTJGcGFnZXMlMkZwb3N0JTJGJTVCaWQlNUQuanMmcGFnZT0lMkZwb3N0JTJGJTVCaWQlNUQhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0RBQXNCO0FBQzdDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9kOWZlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvcG9zdC9baWRdXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9wb3N0L1tpZF0uanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL3Bvc3QvW2lkXVwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fwaringhu%2FDeveloper%2FnextURLxcode%2Fpages%2Fpost%2F%5Bid%5D.js&page=%2Fpost%2F%5Bid%5D!\n"));

/***/ }),

/***/ "./pages/api/post.js":
/*!***************************!*\
  !*** ./pages/api/post.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPosts: function() { return /* binding */ getPosts; }\n/* harmony export */ });\n/* harmony import */ var _public_posts_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/posts/en.json */ \"./public/posts/en.json\");\n// 使用fetch请求json文件\n\nfunction getPosts() {\n    return _public_posts_en_json__WEBPACK_IMPORTED_MODULE_0__;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtCQUFrQjtBQUM2QjtBQUV4QyxTQUFTQztJQUNkLE9BQU9ELGtEQUFLQTtBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwaS9wb3N0LmpzP2VmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5L2/55SoZmV0Y2jor7fmsYJqc29u5paH5Lu2XG5pbXBvcnQgcG9zdHMgZnJvbSBcIi4uLy4uL3B1YmxpYy9wb3N0cy9lbi5qc29uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgcmV0dXJuIHBvc3RzO1xufVxuIl0sIm5hbWVzIjpbInBvc3RzIiwiZ2V0UG9zdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/post.js\n"));

/***/ }),

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/post */ \"./pages/api/post.js\");\n\n\nvar __N_SSG = true;\n// 显示单个文章\nfunction Post(param) {\n    let { post } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/post/[id].js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.excerpt\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/post/[id].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: post.content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/post/[id].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/waringhu/Developer/nextURLxcode/pages/post/[id].js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVDOztBQUV2QyxTQUFTO0FBQ00sU0FBU0MsS0FBSyxLQUFRO1FBQVIsRUFBRUMsSUFBSSxFQUFFLEdBQVI7SUFDM0IscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUlGLEtBQUtHLEtBQUs7Ozs7OzswQkFDZiw4REFBQ0M7MEJBQUdKLEtBQUtLLE9BQU87Ozs7OzswQkFDaEIsOERBQUNDO2dCQUFJQyx5QkFBeUI7b0JBQUVDLFFBQVFSLEtBQUtTLE9BQU87Z0JBQUM7Ozs7Ozs7Ozs7OztBQUczRDtLQVJ3QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9baWRdLmpzPzQ5NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tIFwiLi4vYXBpL3Bvc3RcIjtcblxuLy8g5pi+56S65Y2V5Liq5paH56ugXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgPHA+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRQb3N0KHBhcmFtcy5pZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImdldFBvc3RzIiwiUG9zdCIsInBvc3QiLCJMYXlvdXQiLCJoMSIsInRpdGxlIiwicCIsImV4Y2VycHQiLCJkaXYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[id].js\n"));

/***/ }),

/***/ "./public/posts/en.json":
/*!******************************!*\
  !*** ./public/posts/en.json ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = JSON.parse('[{"id":"post01","title":"An Introduction to URLs","excerpt":"This article introduces what URLs are and how they work on the web.","content":"A URL, short for Uniform Resource Locator, is a reference or address for a resource on the Internet. URLs are used to identify the location of files, web pages, images, videos and other resources on the web.    A typical URL consists of several parts, including the protocol, hostname, path and optional query parameters. For example, in the URL https://www.example.com/page?id=1, the protocol is \'https\', the hostname is \'www.example.com\', and the path is \'/page\' followed by a query parameter \'id\'.    When a web browser requests a URL, the domain name system (DNS) first resolves the hostname to an IP address. The browser then sends an HTTP request to that IP address to retrieve the resource. The web server at that address will return the appropriate content based on the path and parameters specified in the URL.    Below are some key components of URLs:    Protocol - The network protocol used such as HTTP, HTTPS, FTP  Hostname - The domain name or IP address of the server   Path - The path to the resource on the host   Parameters - Additional key-value parameters attached to the path  Fragments - An internal page reference within the resource    By structuring URLs in this standard format, it allows resources to be uniquely identified and located on the web. URLs enable seamless navigation between websites, pages and resources across the internet."},{"id":"post02","title":"URL Encoding Explained","excerpt":"This article explains what URL encoding is and why it is used.","content":"URL encoding converts characters into a format that can be transmitted over the Internet. It encodes characters using the percent-encoding mechanism.     In this mechanism, each character is represented as a percent sign % followed by two hexadecimal digits corresponding to the character code. For example, the space character with ASCII code 32 is encoded as %20.    The main reason URL encoding is needed is because URLs can only contain a limited set of characters like alphabets, numbers and some symbols. But data that needs to be transmitted via URLs may contain special characters or symbols that are not allowed.     For example, usernames, passwords or query parameters may have characters like @, &, spaces etc.  To allow such data to be part of URLs, the special characters need to be URL encoded.    Some examples of URL encoding:    @ -> %40  & -> %26   Space -> %20    Without URL encoding, sending such data through URLs would cause errors or could change the meaning of the URL. Additionally, different systems may interpret special characters differently, so encoding helps standardize the format.    In web development, developers need to ensure user-supplied input is properly URL encoded before attaching it to URLs or using it for server requests. Functions like encodeURI() or encodeURIComponent() can be used in JavaScript for encoding.    Most programming languages and web frameworks provide methods for URL encoding and decoding during generation or parsing of URLs parameters."},{"id":"post03","title":"How to Encode URLs in JavaScript","excerpt":"This article shows different methods to encode URLs in JavaScript.","content":"JavaScript provides inbuilt functions to encode URLs and their components:    encodeURI()  This function encodes a complete URL string to convert characters like spaces to %20.    For example:    const url = \'https://www.example.com/path name\'    const encoded = encodeURI(url);    Here encoded will contain the URL with \'path name\' converted to \'path%20name\'.    encodeURIComponent()  This function encodes the individual components of a URL like path, query parameters etc.     For example:     const query = \'user=john doe\'    const encodedQuery = encodeURIComponent(query);     Here it will convert \'john doe\' to \'john%20doe\'.    The main difference between the two is that encodeURI() won\'t encode certain characters that are allowed in URLs like /, ?, =, & etc while encodeURIComponent() will encode everything unsafe.    So encodeURIComponent() can be used when encoding URL parameters while encodeURI() can be used on complete URLs.    The escape() function can also encode strings similarly. But it is not recommended in most cases as it doesn\'t encode as thoroughly as encodeURIComponent().    To decode an encoded string, the decodeURI() and decodeURIComponent() functions can be used."},{"id":"post04","title":"Decoding URL-Encoded Strings","excerpt":"This article shows how to decode URL-encoded strings in various languages.","content":"URL-encoded strings can be decoded back to original format in languages like:    JavaScript:    Use the decodeURI() or decodeURIComponent() functions.    const encoded = \'path%20name\'  const decoded = decodeURI(encoded) // \'path name\'    Python:     Use the urllib.parse.unquote or urllib.parse.unquote_plus functions.    import urllib  decoded = urllib.parse.unquote(encoded)    Java:    Use the java.net.URLDecoder class.    String encoded = \\"path%20name\\";  String decoded = URLDecoder.decode(encoded, \\"UTF-8\\");    PHP:    Use the rawurldecode() or urldecode() functions.     $encoded = \'path%20name\';  $decoded = rawurldecode($encoded);    Ruby:    Use the CGI.unescape() function.    require \'cgi\'  decoded = CGI.unescape(encoded) So in summary, most programming languages provide built-in utilities to easily decode percent-encoded URLs and parameters. The key is to identify the encoded string, and apply the language\'s decoding function on it.    Proper decoding ensures that any encoded strings are converted back to their original intended characters and values."},{"id":"post05","title":"Best Practices for URL Encoding","excerpt":"This article shares some best practices for URL encoding and decoding.","content":"Here are some recommended practices to keep in mind when encoding URLs:    Use encodeURIComponent() instead of escape() in JavaScript: The escape() function does not encode some characters properly. encodeURIComponent() gives fully encoded strings consistently.    Encode user-supplied parameters before embedding in URL: Any input taken from users that needs to go into the URL should be encoded first for safety.    Encode full URLs as well as components: Both complete URLs and individual parts like query strings need encoding for special characters.    Prefer Percent encoding over Hex encoding: Hex encoding like %20 is more compact and universally recognized over %2F.    Encode late, Decode early: Encode just before inserting data into URL, and decode as soon as extracting from URL to avoid errors.    Use UTF-8 for encoding and decoding: UTF-8 can handle all Unicode characters correctly.    Use the language\'s standard library: Rely on well-tested encoding libraries in the language rather than custom utils.    Percent encode all reserved characters: Even reserved chars like /,?,= etc should be encoded in components.    Watch out for double encoding: Applying encoding twice can break decoding, so encode only once.    Test with various input: Use different types of input strings including special characters to test encoding.    By following these best practices, developers can avoid common errors and build more robust handling of URLs and encoded data."}]');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fwaringhu%2FDeveloper%2FnextURLxcode%2Fpages%2Fpost%2F%5Bid%5D.js&page=%2Fpost%2F%5Bid%5D!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);