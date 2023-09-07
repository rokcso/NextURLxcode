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

/***/ "./lib/getPostsData.js":
/*!*****************************!*\
  !*** ./lib/getPostsData.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getPostsData; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_posts_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/posts/en.json */ \"./public/posts/en.json\");\n/* harmony import */ var _public_posts_zh_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/posts/zh.json */ \"./public/posts/zh.json\");\n/* harmony import */ var _public_posts_kr_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/posts/kr.json */ \"./public/posts/kr.json\");\n/* harmony import */ var _public_posts_jp_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/posts/jp.json */ \"./public/posts/jp.json\");\n/* harmony import */ var _public_posts_ru_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/posts/ru.json */ \"./public/posts/ru.json\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction getPostsData() {\n    _s();\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const languageMap = {\n        \"/\": _public_posts_en_json__WEBPACK_IMPORTED_MODULE_1__,\n        \"/zh\": _public_posts_zh_json__WEBPACK_IMPORTED_MODULE_2__,\n        \"/kr\": _public_posts_kr_json__WEBPACK_IMPORTED_MODULE_3__,\n        \"/jp\": _public_posts_jp_json__WEBPACK_IMPORTED_MODULE_4__,\n        \"/ru\": _public_posts_ru_json__WEBPACK_IMPORTED_MODULE_5__\n    };\n    const postsData = languageMap[pathname] || _public_posts_en_json__WEBPACK_IMPORTED_MODULE_1__;\n    return postsData;\n}\n_s(getPostsData, \"QpP2vYJstxsDz0K+Qwttl8PPVoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0UG9zdHNEYXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFL0IsU0FBU007O0lBQ3RCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdQLHNEQUFTQTtJQUM5QixNQUFNUSxjQUFjO1FBQ2xCLEtBQUtQLGtEQUFPQTtRQUNaLE9BQU9DLGtEQUFPQTtRQUNkLE9BQU9DLGtEQUFPQTtRQUNkLE9BQU9DLGtEQUFPQTtRQUNkLE9BQU9DLGtEQUFPQTtJQUNoQjtJQUNBLE1BQU1JLFlBQVlELFdBQVcsQ0FBQ0QsU0FBUyxJQUFJTixrREFBT0E7SUFDbEQsT0FBT1E7QUFDVDtHQVh3Qkg7O1FBQ0ROLGtEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZ2V0UG9zdHNEYXRhLmpzPzM0MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgZW5Qb3N0cyBmcm9tIFwiLi4vcHVibGljL3Bvc3RzL2VuLmpzb25cIjtcbmltcG9ydCB6aFBvc3RzIGZyb20gXCIuLi9wdWJsaWMvcG9zdHMvemguanNvblwiO1xuaW1wb3J0IGtyUG9zdHMgZnJvbSBcIi4uL3B1YmxpYy9wb3N0cy9rci5qc29uXCI7XG5pbXBvcnQganBQb3N0cyBmcm9tIFwiLi4vcHVibGljL3Bvc3RzL2pwLmpzb25cIjtcbmltcG9ydCBydVBvc3RzIGZyb20gXCIuLi9wdWJsaWMvcG9zdHMvcnUuanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQb3N0c0RhdGEoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBsYW5ndWFnZU1hcCA9IHtcbiAgICBcIi9cIjogZW5Qb3N0cyxcbiAgICBcIi96aFwiOiB6aFBvc3RzLFxuICAgIFwiL2tyXCI6IGtyUG9zdHMsXG4gICAgXCIvanBcIjoganBQb3N0cyxcbiAgICBcIi9ydVwiOiBydVBvc3RzLFxuICB9O1xuICBjb25zdCBwb3N0c0RhdGEgPSBsYW5ndWFnZU1hcFtwYXRobmFtZV0gfHwgZW5Qb3N0cztcbiAgcmV0dXJuIHBvc3RzRGF0YTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJlblBvc3RzIiwiemhQb3N0cyIsImtyUG9zdHMiLCJqcFBvc3RzIiwicnVQb3N0cyIsImdldFBvc3RzRGF0YSIsInBhdGhuYW1lIiwibGFuZ3VhZ2VNYXAiLCJwb3N0c0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/getPostsData.js\n"));

/***/ }),

/***/ "./public/posts/ru.json":
/*!******************************!*\
  !*** ./public/posts/ru.json ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('[{"id":"what-is-url","title":"URL: Comprehensive Introduction to Uniform Resource Locator","excerpt":"URL: Uniform Resource Locator for locating internet resources. It consists of protocol, domain name, path, query string, and fragment identifier. Enables easy access to web pages, images, files, and more through a simple text format.","content":"URL, short for Uniform Resource Locator, is a string used to locate and identify resources on the internet. URL is one of the foundations of the modern internet, allowing us to access web pages, images, videos, files, and other online resources through a simple text format. [|] URL consists of several components, each serving a specific purpose and functionality. Here are the main components of a URL: [|] 1. Protocol: The protocol specifies the communication protocol required to access the resource, such as HTTP (Hypertext Transfer Protocol), HTTPS (HTTP Secure), FTP (File Transfer Protocol), etc. The protocol is typically located at the beginning of the URL, followed by a colon and two slashes (e.g., http:// or https://). [|] 2. Domain Name: The domain name uniquely identifies a computer or network on the internet. It can be a hostname (e.g., www.example.com) or an IP address (e.g., 192.168.0.1). The domain name follows the protocol and is usually separated by a slash. [|] 3. Path: The path specifies the location of the resource on the server. It is a string separated by slashes, used to identify the directory structure or file location on the server. The path comes after the domain name and can contain multiple levels as needed. [|] 4. Query String: The query string is used to pass parameters and data to the server. It begins with a question mark (?) and is followed by parameters represented in key-value pairs. Multiple parameters are separated by an ampersand (&). [|] 5. Fragment Identifier: The fragment identifier specifies a specific section or anchor within a webpage or document. It starts with a hash (#) followed by the name or identifier of the fragment. Fragment identifiers are commonly used to point to specific parts within a page. [|] Example of a URL: [|] Suppose we want to access an image named \\"pic.jpg\\" on a website called example.com, located at /images/ path, with parameters width=500 and height=300. The corresponding URL might be: http://www.example.com/images/pic.jpg?width=500&height=300 [|] URL serves the purpose of identifying and locating resources on the internet. Through URLs, we can conveniently access various online resources, whether it\'s web pages, images, or other types of files. Understanding the structure and components of a URL helps us better comprehend and utilize the internet.","siteTitle":"What is URL? - URL Encode/Decode - Online Tool - URLxcode.com","siteDescription":"URL: Uniform Resource Locator for locating internet resources. It consists of protocol, domain name, path, query string, and fragment identifier. Enables easy access to web pages, images, files, and more through a simple text format.","siteKeywords":"URL, Encode, Decode, Online, Tool","siteCanonical":"https://www.urlxcode.com/what-is-url"},{"id":"what-is-url-encoding","title":"Understanding URL Encoding: Simplifying Web Addresses for Everyone","excerpt":"In this article, we will explore the concept of URL encoding, which is an essential aspect of web browsing. Designed for individuals without a strong computer background, this article aims to provide a comprehensive yet accessible understanding of URL encoding. We will delve into the basics of URLs, explain the need for encoding, and discuss the key principles and techniques involved. By the end of this article, you will have a clearer grasp of URL encoding and how it ensures seamless communication on the internet.","content":"Have you ever wondered how web addresses work? You might have noticed that they often contain strange characters like %20 or %3F. These seemingly random symbols are not errors but rather an essential part of URLs called URL encoding. [|] In this article, we will demystify URL encoding and explain its significance in the world of web browsing. [|] What is a URL? [|] Before we delve into URL encoding, let\'s first understand what a URL is. URL stands for Uniform Resource Locator and is essentially the address that helps us locate resources on the internet. URLs are used to access web pages, images, videos, and other content available on the World Wide Web. [|] The Need for URL Encoding: [|] URLs are designed to be human-readable and descriptive. However, the web is a global platform, and different languages and characters are used worldwide. Unfortunately, URLs are not designed to handle all possible characters. Some characters, such as spaces, special symbols, and non-English characters, have special meanings in the underlying technology that powers the web. When these characters appear directly in a URL, they can cause confusion or even break the intended functionality. [|] What is URL Encoding? [|] URL encoding is a technique used to convert special characters, symbols, and non-English characters into a standardized format that can be safely transmitted through the internet. It ensures that the URLs remain valid and functional, regardless of the characters they contain. [|] The Principles of URL Encoding: [|] URL encoding follows a few fundamental principles: [|] Converting Characters to ASCII: To encode a character, it is first converted into its ASCII (American Standard Code for Information Interchange) representation. ASCII is a widely used character encoding standard that assigns a unique numeric value to each character. [|] Representing Characters as Percent Encoding: Once the character is converted into ASCII, it is then represented using percent encoding. Percent encoding replaces the character with a percent sign (\\"%\\") followed by two hexadecimal digits that represent the ASCII value. For example, the space character ( ) is encoded as \\"%20,\\" and the question mark (?) is encoded as \\"%3F.\\" [|] Handling Reserved Characters: Some characters have reserved meanings in URLs, such as the ampersand (&), equals sign (=), and forward slash (/). To use these characters as part of the actual content in a URL, they need to be encoded. For instance, the ampersand (&) is encoded as \\"%26.\\" [|] URL Encoding in Practice: [|] URL encoding is automatically performed by web browsers and web servers when necessary. When you click on a link containing special characters or submit a form with non-English text, the browser takes care of encoding the URL before sending it to the server. Similarly, web servers decode the URL to retrieve the intended resource. [|] In Conclusion: [|] URL encoding is a crucial mechanism that enables seamless communication on the internet. It ensures that web addresses can handle a wide range of characters while maintaining their integrity and functionality. By understanding the basics of URL encoding, you are now equipped with the knowledge to navigate the web with confidence and better appreciate the underlying technology that powers the internet.","siteTitle":"What is URL Encoding? - URL Encode/Decode - Online Tool - URLxcode.com","siteDescription":"In this article, we will explore the concept of URL encoding, which is an essential aspect of web browsing. Designed for individuals without a strong computer background, this article aims to provide a comprehensive yet accessible understanding of URL encoding. We will delve into the basics of URLs, explain the need for encoding, and discuss the key principles and techniques involved. By the end of this article, you will have a clearer grasp of URL encoding and how it ensures seamless communication on the internet.","siteKeywords":"URL, Encode, Decode, Online, Tool","siteCanonical":"https://www.urlxcode.com/what-is-url-encoding"}]');

/***/ })

});