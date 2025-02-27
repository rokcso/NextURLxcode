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

module.exports = JSON.parse('[{"id":"what-is-url","title":"URL：统一资源定位符的全面介绍","excerpt":"URL: 统一资源定位符，用于定位互联网资源。包含协议、域名、路径、查询字符串和片段标识符等组成部分。通过简单文本格式，方便访问网页、图片和文件等资源。","content":"URL，全称为统一资源定位符（Uniform Resource Locator），是用于定位和标识互联网上资源的字符串。URL是现代互联网的基础之一，它允许我们通过简单的文本方式访问网页、图像、视频、文件和其他在线资源。 [|] URL由多个部分组成，每个部分都具有特定的含义和功能。下面是URL的主要组成部分： [|] 1. 协议（Protocol）：协议指定了访问资源所需使用的通信协议，例如HTTP（超文本传输协议）、HTTPS（HTTP安全版本）、FTP（文件传输协议）等。协议通常位于URL的开头，后跟冒号和两个斜杠（如http://或https://）。 [|] 2. 域名（Domain Name）：域名是唯一标识互联网上计算机或网络的名称。它可以是一个主机名（如www.example.com），也可以是一个IP地址（如192.168.0.1）。域名紧随协议后面，通常以斜杠作为分隔符。 [|] 3. 路径（Path）：路径指定了资源在服务器上的位置。它是一个由斜杠分隔的字符串，用于标识服务器上的目录结构或文件位置。路径位于域名之后，可以根据需要包含多个层级。 [|] 4. 查询字符串（Query String）：查询字符串用于向服务器传递参数和数据。它以问号（?）开头，后面跟随以键值对形式表示的参数。多个参数之间使用和号（&）分隔。 [|] 5. 片段标识符（Fragment Identifier）：片段标识符指定了网页或文档中的特定片段或锚点。它以井号（#）开头，后面跟随片段的名称或标识符。片段标识符通常用于指向页面内的特定部分。 [|] URL的示例： [|] 假设我们要访问一个名为example.com的网站上的一张图片，路径为/images/pic.jpg，并附带参数width=500和height=300。对应的URL可能是：http://www.example.com/images/pic.jpg?width=500&height=300 [|] URL的中文翻译为统一资源定位符，它的作用是标识和定位互联网上的资源。通过URL，我们可以方便地访问各种在线资源，无论是网页、图片还是其他类型的文件。了解URL的结构和组成部分可以帮助我们更好地理解和使用互联网。","siteTitle":"什么是 URL? - URL 编码/解码 - 在线工具 - URLxcode.com","siteDescription":"URL: 统一资源定位符，用于定位互联网资源。包含协议、域名、路径、查询字符串和片段标识符等组成部分。通过简单文本格式，方便访问网页、图片和文件等资源。","siteKeywords":"URL, 编码, 解码, 在线, 工具","siteCanonical":"https://www.urlxcode.com/zh/what-is-url"},{"id":"what-is-url-encoding","title":"理解 URL 编码：为所有人简化网页地址","excerpt":"本文将介绍 URL 编码的概念，它是网络浏览的重要组成部分。本文旨在为没有太多计算机基础的人提供全面而易懂的 URL 编码理解。我们将深入探讨 URL 的基础知识，解释编码的必要性，并讨论涉及的关键原则和技术。通过阅读本文，您将更清楚地了解 URL 编码以及它如何确保互联网上的无缝通信。","content":"您是否曾经想过网页地址是如何工作的？您可能注意到它们通常包含像 %20 或 %3F 这样的奇怪字符。这些看似随机的符号不是错误，而是 URL 中的一个重要部分，被称为 URL 编码。 [|] 在本文中，我们将揭开 URL编码的神秘面纱，并解释它在网络浏览世界中的重要性。 [|] 什么是 URL？ [|] 在我们深入了解 URL 编码之前，让我们先了解一下什么是 URL。URL 代表统一资源定位符，基本上是帮助我们在互联网上定位资源的地址。URL 用于访问网页、图片、视频和其他在万维网上可用的内容。 [|] URL 编码的需求： [|] URL 旨在具有人类可读性和描述性。然而，互联网是一个全球平台，全球各地使用不同的语言和字符。不幸的是，并非所有字符都能在 URL 中正常工作。某些字符（例如空格、特殊符号和非英文字符）在支持网页的底层技术中具有特殊含义。当这些字符直接出现在 URL 中时，它们可能会引起混淆，甚至破坏预期的功能。 [|] 什么是 URL 编码？ [|] URL 编码是一种将特殊字符、符号和非英文字符转换为标准化格式的技术，以便通过互联网安全传输。它确保 URL 保持有效和功能正常，无论其中包含哪些字符。 [|] URL 编码的原则： [|] URL 编码遵循一些基本原则： [|] 将字符转换为 ASCII：要对字符进行编码，首先将其转换为 ASCII（美国信息交换标准代码）表示。ASCII 是一种广泛使用的字符编码标准，为每个字符分配一个唯一的数值。 [|] 用百分号编码表示字符：字符一旦转换为 ASCII，就会用百分号编码表示。百分号编码用百分号（\\"%\\"）后跟两个十六进制数字来替代字符，这些数字表示 ASCII 值。例如，空格字符（ ）被编码为 \\"%20\\"，问号（?）被编码为 \\"%3F\\"。 [|] 处理保留字符：某些字符在 URL 中具有保留含义，例如和号（&）、等号（=）和正斜杠（/）。要在 URL 的实际内容中使用这些字符，需要对它们进行编码。例如，和号（&）被编码为 \\"%26\\"。 [|] URL 编码的实际应用： [|] 当需要时，URL 编码由网络浏览器和 Web 服务器自动执行。当您单击包含特殊字符的链接或提交带有非英文文本的表单时，浏览器会在将 URL 发送到服务器之前进行编码。同样，Web 服务器会解码 URL 以检索预期的资源。 [|] 总结： [|] URL 编码是一种关键机制，它确保互联网上的无缝通信。它确保网页地址可以处理各种字符，同时保持其完整性和功能性。通过了解 URL 编码的基础知识，您现在掌握了在互联网上自信导航并更好地理解支持互联网的底层技术所需的知识。","siteTitle":"什么是URL编码？ - URL 编码/解码 - 在线工具 - URLxcode.com","siteDescription":"本文将介绍 URL 编码的概念，它是网络浏览的重要组成部分。本文旨在为没有太多计算机基础的人提供全面而易懂的 URL 编码理解。我们将深入探讨 URL 的基础知识，解释编码的必要性，并讨论涉及的关键原则和技术。通过阅读本文，您将更清楚地了解 URL 编码以及它如何确保互联网上的无缝通信。","siteKeywords":"URL, 编码, 解码, 在线, 工具","siteCanonical":"https://www.urlxcode.com/zh/what-is-url-encoding"},{"id":"non-english-characters-in-url","title":"URL 中非英语字符的重要性：URL 编码和国际化域名（IDN）","excerpt":"本文探讨了非英文字符在URL中的重要性、URL编码、国际化域名（IDN）及最佳实践。非英文字符的使用提高了全球用户体验，URL编码确保正确传输和解析。IDN允许使用非英文字符的域名。应遵循最佳实践，如URL编码、权衡可读性和兼容性，以促进全球互联网发展。","content":"介绍 [|] 在现代互联网时代，URL（统一资源定位符）是我们在浏览器中输入以访问网页的标准方式。大多数 URL 中包含的字符是标准的英文字母、数字和一些特殊字符。 [|] 然而，URL 也可以包含非英文字符，这为全球用户提供了更多的灵活性和便利性。在本文中，我们将探讨 URL 中的非英文字符的重要性、如何处理这些字符以及相关的最佳实践。 [|] 非英文字符在 URL 中的重要性 [|] 随着互联网的全球化发展，越来越多的用户来自不同的语言和文化背景。使用非英文字符在 URL 中可以更好地满足这些用户的需求。例如，对于访问日语、中文或俄语等非英语网站的用户来说，使用他们熟悉的字符集可以提供更好的用户体验和易用性。 [|] URL 编码 [|] URL 编码是一种将非英文字符转换为 ASCII 字符的过程，以便在 URL 中进行传输和处理。常见的 URL 编码方式是使用百分号（%）后跟两位十六进制数来表示字符的 ASCII 值。 [|] 例如，汉字「中」的 URL 编码是「%E4%B8%AD」。 [|] 这种编码方式确保了字符的准确传输和解析。 [|] Internationalized Domain Names (IDN) [|] 国际化域名（Internationalized Domain Names，简称 IDN）是一种允许在域名中包含非英文字符的标准。IDN 使得用户可以在浏览器中直接输入和访问包含非英文字符的域名。 [|] 例如，一个包含中文字符的域名「例子.中国」可以通过 IDN 在浏览器中访问。 [|] URL 的最佳实践 [|] 在使用非英文字符的 URL 中，有一些最佳实践可以帮助确保准确性和兼容性： [|] 1. 使用 URL 编码：遵循 URL 编码规则，将非英文字符转换为 ASCII 字符，以确保正确的传输和解析。 [|] 2. 可读性与易用性的平衡：在选择使用非英文字符时，要权衡可读性和易用性。确保 URL 对用户友好且易于记忆，同时避免使用过于复杂或冗长的字符序列。 [|] 3. 浏览器和服务器的兼容性：确保您使用的浏览器和服务器都支持处理和解析非英文字符的 URL。在开发和测试过程中，要进行全面的兼容性测试，以确保网站在各种环境中的正常运行。 [|] 总结 [|] URL 中的非英文字符为全球用户提供了更好的访问体验和便利性。通过使用 URL 编码和遵循最佳实践，我们可以确保非英文字符在 URL 中的正确传输和解析。这为用户提供了更多的语言选择，并促进了全球互联网的发展。 [|] 请注意，尽管非英文字符在 URL 中是被允许的，但建议在实际使用中谨慎选择和处理这些字符，以避免潜在的兼容性和可读性问题。","siteTitle":"URL 中的非英文字符 - URL 编码/解码 - 在线工具 - URLxcode.com","siteDescription":"本文探讨了非英文字符在URL中的重要性、URL编码、国际化域名（IDN）及最佳实践。非英文字符的使用提高了全球用户体验，URL编码确保正确传输和解析。IDN允许使用非英文字符的域名。应遵循最佳实践，如URL编码、权衡可读性和兼容性，以促进全球互联网发展。","siteKeywords":"URL, 编码, 解码, 在线, 工具","siteCanonical":"https://urlxcode.skillix.cc/zh/non-english-characters-in-url"}]');

/***/ })

});