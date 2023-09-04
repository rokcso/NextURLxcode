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

/***/ "./public/posts/en.json":
/*!******************************!*\
  !*** ./public/posts/en.json ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('[{"id":"post01","title":"An Introduction to URLs","excerpt":"This article introduces what URLs are and how they work on the web.","content":"A URL, short for Uniform Resource Locator, is a reference or address for a resource on the Internet. | URLs are used to identify the location of files, web pages, images, videos and other resources on the web.    A typical URL consists of several parts, including the protocol, hostname, path and optional query parameters. For example, in the URL https://www.example.com/page?id=1, the protocol is \'https\', the hostname is \'www.example.com\', and the path is \'/page\' followed by a query parameter \'id\'.    When a web browser requests a URL, the domain name system (DNS) first resolves the hostname to an IP address. The browser then sends an HTTP request to that IP address to retrieve the resource. The web server at that address will return the appropriate content based on the path and parameters specified in the URL.    Below are some key components of URLs:    Protocol - The network protocol used such as HTTP, HTTPS, FTP  Hostname - The domain name or IP address of the server   Path - The path to the resource on the host   Parameters - Additional key-value parameters attached to the path  Fragments - An internal page reference within the resource    By structuring URLs in this standard format, it allows resources to be uniquely identified and located on the web. URLs enable seamless navigation between websites, pages and resources across the internet."},{"id":"post02","title":"URL Encoding Explained","excerpt":"This article explains what URL encoding is and why it is used.","content":"URL encoding converts characters into a format that can be transmitted over the Internet. It encodes characters using the percent-encoding mechanism.     In this mechanism, each character is represented as a percent sign % followed by two hexadecimal digits corresponding to the character code. For example, the space character with ASCII code 32 is encoded as %20.    The main reason URL encoding is needed is because URLs can only contain a limited set of characters like alphabets, numbers and some symbols. But data that needs to be transmitted via URLs may contain special characters or symbols that are not allowed.     For example, usernames, passwords or query parameters may have characters like @, &, spaces etc.  To allow such data to be part of URLs, the special characters need to be URL encoded.    Some examples of URL encoding:    @ -> %40  & -> %26   Space -> %20    Without URL encoding, sending such data through URLs would cause errors or could change the meaning of the URL. Additionally, different systems may interpret special characters differently, so encoding helps standardize the format.    In web development, developers need to ensure user-supplied input is properly URL encoded before attaching it to URLs or using it for server requests. Functions like encodeURI() or encodeURIComponent() can be used in JavaScript for encoding.    Most programming languages and web frameworks provide methods for URL encoding and decoding during generation or parsing of URLs parameters."},{"id":"post03","title":"How to Encode URLs in JavaScript","excerpt":"This article shows different methods to encode URLs in JavaScript.","content":"JavaScript provides inbuilt functions to encode URLs and their components:    encodeURI()  This function encodes a complete URL string to convert characters like spaces to %20.    For example:    const url = \'https://www.example.com/path name\'    const encoded = encodeURI(url);    Here encoded will contain the URL with \'path name\' converted to \'path%20name\'.    encodeURIComponent()  This function encodes the individual components of a URL like path, query parameters etc.     For example:     const query = \'user=john doe\'    const encodedQuery = encodeURIComponent(query);     Here it will convert \'john doe\' to \'john%20doe\'.    The main difference between the two is that encodeURI() won\'t encode certain characters that are allowed in URLs like /, ?, =, & etc while encodeURIComponent() will encode everything unsafe.    So encodeURIComponent() can be used when encoding URL parameters while encodeURI() can be used on complete URLs.    The escape() function can also encode strings similarly. But it is not recommended in most cases as it doesn\'t encode as thoroughly as encodeURIComponent().    To decode an encoded string, the decodeURI() and decodeURIComponent() functions can be used."},{"id":"post04","title":"Decoding URL-Encoded Strings","excerpt":"This article shows how to decode URL-encoded strings in various languages.","content":"URL-encoded strings can be decoded back to original format in languages like:    JavaScript:    Use the decodeURI() or decodeURIComponent() functions.    const encoded = \'path%20name\'  const decoded = decodeURI(encoded) // \'path name\'    Python:     Use the urllib.parse.unquote or urllib.parse.unquote_plus functions.    import urllib  decoded = urllib.parse.unquote(encoded)    Java:    Use the java.net.URLDecoder class.    String encoded = \\"path%20name\\";  String decoded = URLDecoder.decode(encoded, \\"UTF-8\\");    PHP:    Use the rawurldecode() or urldecode() functions.     $encoded = \'path%20name\';  $decoded = rawurldecode($encoded);    Ruby:    Use the CGI.unescape() function.    require \'cgi\'  decoded = CGI.unescape(encoded) So in summary, most programming languages provide built-in utilities to easily decode percent-encoded URLs and parameters. The key is to identify the encoded string, and apply the language\'s decoding function on it.    Proper decoding ensures that any encoded strings are converted back to their original intended characters and values."},{"id":"post05","title":"Best Practices for URL Encoding","excerpt":"This article shares some best practices for URL encoding and decoding.","content":"Here are some recommended practices to keep in mind when encoding URLs:    Use encodeURIComponent() instead of escape() in JavaScript: The escape() function does not encode some characters properly. encodeURIComponent() gives fully encoded strings consistently.    Encode user-supplied parameters before embedding in URL: Any input taken from users that needs to go into the URL should be encoded first for safety.    Encode full URLs as well as components: Both complete URLs and individual parts like query strings need encoding for special characters.    Prefer Percent encoding over Hex encoding: Hex encoding like %20 is more compact and universally recognized over %2F.    Encode late, Decode early: Encode just before inserting data into URL, and decode as soon as extracting from URL to avoid errors.    Use UTF-8 for encoding and decoding: UTF-8 can handle all Unicode characters correctly.    Use the language\'s standard library: Rely on well-tested encoding libraries in the language rather than custom utils.    Percent encode all reserved characters: Even reserved chars like /,?,= etc should be encoded in components.    Watch out for double encoding: Applying encoding twice can break decoding, so encode only once.    Test with various input: Use different types of input strings including special characters to test encoding.    By following these best practices, developers can avoid common errors and build more robust handling of URLs and encoded data."}]');

/***/ })

});