"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./public/posts/zh.json":
/*!******************************!*\
  !*** ./public/posts/zh.json ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('[{"id":"post01","title":"URL简介","excerpt":"本文介绍了什么是URL以及它在网页中的作用。","content":"URL(统一资源定位符)是互联网上资源的地址,用来标识网页、图片、视频等资源的位置。 [|] 典型的URL由几部分组成,包括网络协议、主机名、路径等。 [|] 例如在https://www.example.com/page?id=1中,协议是“https”,主机名是“www.example.com”,路径是“/page”,后面带有一个“id”查询参数。 [|]  当浏览器请求一个URL时,首先将主机名转换为IP地址,然后向该IP地址发送HTTP请求,服务器将根据URL路径和参数返回对应的资源内容。 [|] URL的几个常见组成部分: [|] 协议 - 网络协议如HTTP、HTTPS、FTP等 [|] 主机名 - 域名或IP地址 [|] 路径 - 服务器上资源的路径 [|] 参数 - 附加在路径上的键值 [|] 参数片段 - 资源内部的锚点链接 [|] 通过这种统一的URL格式,互联网上的资源可以被唯一标识和定位。URL使网页、资源之间的链接与导航变得简单。"},{"id":"post02","title":"URL编码解码详解","excerpt":"本文介绍了什么是URL编码以及为什么使用它。","content":"URL编码可以将字符转换为可通过网络传输的格式。它使用百分号编码来对字符进行编码,即每个字符使用%XX的形式来表示,XX是该字符对应的两位十六进制数字。之所以需要URL编码是因为URL只能包含特定的字母、数字和符号。但是像用户名、密码这样的数据就可能包含 URL 不允许的特殊符号。为了让这些数据可以在URL中传输,需要使用URL编码来转换特殊符号。例如:@ 编码为 %40& 编码为 %26空格 编码为 %20没有URL编码,这些特殊字符就可能导致网络传输错误,或者改变URL的含义。此外,不同系统可能对这些特殊符号的解释也不同,URL编码可以标准化表示方法。在Web开发中,开发者需要确保对用户输入的数据在用于URL或服务器请求之前进行适当的URL编码。JavaScript中的encodeURI()和encodeURIComponent()可以用来编码URL。大部分编程语言和Web框架都提供了用于生成和解析URL时的参数编码解码函数。"},{"id":"post03","title":"如何在JavaScript中编码URL","excerpt":"本文展示了在JavaScript中实现URL编码的不同方式。","content":"JavaScript中有两种内置方法可以对URL及其组成部分进行编码:encodeURI()可以对完整的URL进行编码,将空格等字符编码为%20等格式。例如:const url = \'https://www.example.com/path name\' const encoded = encodeURI(url);这里encoded的值会将\'path name\'编码为\'path%20name\'。encodeURIComponent()可以对URL中的各组成部分如路径、查询参数进行编码。例如:const query = \'user=john doe\'const encoded = encodeURIComponent(query);这里就会将\'john doe\'编码为\'john%20doe\'。二者的主要区别是,encodeURI()不会对一些在URL中可保留的字符如:/=?&进行编码,而encodeURIComponent()会编码所有的非安全字符。所以在编码查询参数时更适合使用encodeURIComponent(),在编码完整URL时则使用encodeURI()。escape()函数也可以用于编码,但大部分情况下不推荐,因为它不如encodeURIComponent()全面。编码后的字符串可以使用decodeURI()和decodeURIComponent()进行解码。"},{"id":"post04","title":"解码被URL编码的字符串","excerpt":"本文展示了如何在不同语言中解码被URL编码的字符串。","content":"各种语言解码被URL编码的字符串的方式:JavaScript:使用decodeURI()或decodeURIComponent()。const encoded = \'path%20name\';const decoded = decodeURI(encoded); Python:使用urllib.parse.unquote或urllib.parse.unquote_plus。import urllibdecoded = urllib.parse.unquote(encoded)Java:使用java.net.URLDecoder。String encoded = \\"path%20name\\";String decoded = URLDecoder.decode(encoded, \\"UTF-8\\");PHP:使用rawurldecode()或urldecode()。$encoded = \'path%20name\';$decoded = rawurldecode($encoded);Ruby:使用CGI.unescape()。require \'cgi\'decoded = CGI.unescape(encoded)总结一下,主流语言基本都内置了用于解析URL编码的函数,关键是识别编码后的字符串,并用合适的解码方法处理。正确解码非常必要,以确保编码后的字符串可以转换回原本预期的字符和值。"},{"id":"post05","title":"URL编码的最佳实践","excerpt":"本文分享了一些URL编码和解码的最佳实践。","content":"这里分享几个处理URL编码时的建议:使用encodeURIComponent()而不是escape():后者不能处理某些字符对用户输入数据编码:任何需要嵌入URL的用户输入应先编码编码完整URL及其组成部分:如查询字符串都应该编码优先使用百分号编码:比如%20,更简洁可读晚编码早解码:仅在插入URL前编码,取出后立即解码使用UTF-8编码:它可以支持所有Unicode字符使用语言内置库:如js内置的encodeURIComponent()编码所有保留字符:如/,?,=等在组件中也应编码注意避免重复编码:两次编码会导致解码错误测试不同字符串:用各种特殊字符来测试编码效果按照这些最佳实践,可以避免常见问题,构建健壮的URL编码应用。"}]');

/***/ })

});