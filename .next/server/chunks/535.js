exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 2921:
/***/ ((module) => {

// Exports
module.exports = {
	"convertor": "URLConvertor_convertor__TBezp",
	"textAreaBox": "URLConvertor_textAreaBox__aia6T",
	"textInputBox": "URLConvertor_textInputBox__vUtJ0",
	"textOutputBox": "URLConvertor_textOutputBox__DVF7F",
	"runTips": "URLConvertor_runTips__6TN8w",
	"runTipsText": "URLConvertor_runTipsText__nfRIq",
	"btnGroupTop": "URLConvertor_btnGroupTop__6F76j",
	"btnGroupInnerOne": "URLConvertor_btnGroupInnerOne__lH7Em",
	"btnCopy": "URLConvertor_btnCopy__btgeM",
	"btnGroupInnderTwo": "URLConvertor_btnGroupInnderTwo__VtgjT",
	"optionGroup": "URLConvertor_optionGroup__3D9IU",
	"singleOption": "URLConvertor_singleOption__Ppkpa",
	"invalidInput": "URLConvertor_invalidInput__ETxHV",
	"emptyInput": "URLConvertor_emptyInput__R5xac"
};


/***/ }),

/***/ 889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ URLConvertor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2921);
/* harmony import */ var _URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2__);



function URLConvertor({ texts }) {
    // 如果没有获取到 texts，就使用 {}，避免报错
    const safeTexts = texts || {};
    // 将输入、输出内容绑定
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const outputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    // 复制操作提示信息
    const [copyInputMsg, setCopyInputMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [copyOutputMsg, setCopyOutputMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // 复制功能
    const handleCopyOutput = ()=>{
        umami.track("clickCopyOutputBtn");
        // 获取当前输出内容
        const outputValue = outputRef.current.value;
        try {
            navigator.clipboard.writeText(outputValue);
            // 如果复制内容到剪贴板成功，就设定复制操作提示信息为成功提示
            setCopyOutputMsg(safeTexts.copyMsgSuccess);
            // 500ms 后清空复制操作提示信息
            setTimeout(()=>{
                setCopyOutputMsg("");
            }, 500);
        } catch  {
            // 如果复制内容到剪贴板失败，就设定复制操作提示信息为失败提示
            setCopyOutputMsg(safeTexts.copyMsgError);
            // 500ms 后清空复制操作提示信息
            setTimeout(()=>{
                setCopyOutputMsg("");
            }, 500);
        }
    };
    const handleCopyInput = ()=>{
        umami.track("clickCopyInputBtn");
        const inputValue = inputRef.current.value;
        try {
            navigator.clipboard.writeText(inputValue);
            setCopyInputMsg(safeTexts.copyMsgSuccess);
            setTimeout(()=>{
                setCopyInputMsg("");
            }, 500);
        } catch  {
            setCopyInputMsg(safeTexts.copyMsgError);
            setTimeout(()=>{
                setCopyInputMsg("");
            }, 500);
        }
    };
    // 用于记录 input 异常情况
    const [inputIsEmpty, setInputIsEmpty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [inputIsInvalid, setInputIsInvalid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // 声明 result State 用于存储输出结果
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // 解码功能
    const handleDecode = ()=>{
        umami.track("clickDecodeBtn");
        // 获取当前输入内容
        const inputValue = inputRef.current.value;
        // 如果输入内容为空
        if (inputValue.trim() === "") {
            setInputIsEmpty(true);
            return; // 结束功能
        }
        try {
            // 尝试解码输入内容，如果解码成功，将解码后的结果传递给 result
            const decoded = decodeURIComponent(inputValue);
            setResult(decoded);
        } catch  {
            // 如果解码失败，则输入异常
            setInputIsInvalid(true);
        }
    };
    // 设定编码选项默认为 encodeURI
    const [optionSelected, setOptionSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("uri");
    // 编码功能
    const handleEncode = ()=>{
        umami.track("clickEncodeBtn");
        // 获取当前输入内容
        const inputValue = inputRef.current.value;
        // 判断输入是否为空，为空则结束
        if (inputValue.trim() === "") {
            setInputIsEmpty(true);
            return;
        }
        // 如果编码模式选择的 encodeURI
        if (optionSelected === "uri") {
            try {
                // 尝试编码
                const encoded = encodeURI(inputValue);
                setResult(encoded);
            } catch  {
                // 编码失败
                setInputIsInvalid(true);
            }
        } else {
            try {
                const encoded = encodeURIComponent(inputValue);
                setResult(encoded);
            } catch  {
                setInputIsInvalid(true);
            }
        }
    };
    // 清除功能
    const handleClear = ()=>{
        umami.track("clickClearBtn");
        // 将 input 和 output 的内容值设定为空
        inputRef.current.value = "";
        setResult("");
        setInputIsEmpty(false);
        setInputIsInvalid(false);
    };
    // 如果 input 发生变化，调整 input 状态，清除异常提醒
    const handleInputChange = ()=>{
        setInputIsEmpty(false);
        setInputIsInvalid(false);
        setResult("");
    };
    // 交换 input output
    const handleSwap = ()=>{
        umami.track("clickSwapBtn");
        const input = inputRef.current.value;
        const output = outputRef.current.value;
        inputRef.current.value = output;
        setResult(input);
    };
    // 解析 URL 功能
    const handleParse = ()=>{
        umami.track("clickParseBtn");
        const inputValue = inputRef.current.value;
        if (!validateURL(inputValue)) {
            // 输入的内容不符合 URL 格式
            setInputIsInvalid(true);
            return;
        }
        let result = "";
        // 匹配解析 URL 的各个组成部分
        const urlObj = new URL(inputValue);
        // 非请求参数部分
        result += urlObj.protocol + "//" + urlObj.hostname + urlObj.pathname + "\n";
        // 请求参数部分
        if (urlObj.searchParams) {
            urlObj.searchParams.forEach((key, value)=>{
                result += value + "=" + key + "\n";
            });
        }
        setResult(result);
    };
    // URL 格式校验
    const validateURL = (url)=>{
        try {
            // 创建 URL 对象，不能成功创建则说明传入的 url 不符合 URL 格式要求
            new URL(url);
            return true;
        } catch  {
            return false;
        }
    };
    // URL 转 Json 功能
    const handleToJson = ()=>{
        umami.track("clickToJsonBtn");
        const inputValue = inputRef.current.value;
        if (!validateURL(inputValue)) {
            // 输入的内容不符合 URL 格式
            setInputIsInvalid(true);
            return;
        }
        const urlObj = new URL(inputValue);
        const resJson = {
            protocol: urlObj.protocol,
            hostname: urlObj.hostname,
            pathname: urlObj.pathname,
            // 将 URLSearchParams 对象（以 ["key", "value"] 形式存储 URL 请求参数键值对）转换为 JavaScript 普通对象格式
            searchParams: Object.fromEntries(urlObj.searchParams)
        };
        // 将 resJson 序列化为 JSON 字符串，null 意味着不过滤任何内容，2 意味着每层 JSON 对象缩进 2 空格
        const result = JSON.stringify(resJson, null, 2);
        setResult(result);
    };
    // 输入框的 class，根据条件判断为 input 赋予不同的 class，用以修改不同的样式
    const inputTextAreaClassName = `${(_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textInputBox)} ${inputIsEmpty ? (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().emptyInput) : ""} ${inputIsInvalid ? (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().invalidInput) : ""}`;
    // 提示内容，根据条件判断赋值不同的提示内容
    const runTips = inputIsEmpty ? safeTexts.inputEmptyTips : inputIsInvalid ? safeTexts.inputInvalidTips : "";
    // 返回 HTML 内容
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().convertor),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: safeTexts.promptTitle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textAreaBox),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: inputTextAreaClassName,
                        placeholder: safeTexts.placeHolderInput,
                        onChange: handleInputChange,
                        ref: inputRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textOutputBox),
                        placeholder: safeTexts.placeHolderOutput,
                        ref: outputRef,
                        value: result,
                        readOnly: true
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().runTips),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        safeTexts.runTipsTitle,
                        "\xa0",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().runTipsText),
                            children: runTips
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupTop),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnerOne),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),
                                onClick: handleCopyInput,
                                children: copyInputMsg || safeTexts.btnCopyInputText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),
                                onClick: handleCopyOutput,
                                children: copyOutputMsg || safeTexts.btnCopyOutputText
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnderTwo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleDecode,
                                children: safeTexts.btnDecodeText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleEncode,
                                children: safeTexts.btnEncodeText
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().optionGroup),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().singleOption),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                id: "uri",
                                                checked: optionSelected === "uri",
                                                onChange: ()=>{
                                                    setOptionSelected("uri");
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                title: safeTexts.URITooltip,
                                                htmlFor: "uri",
                                                children: safeTexts.optionURIText
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().singleOption),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                id: "uricomponent",
                                                checked: optionSelected === "uricomponent",
                                                onChange: ()=>{
                                                    setOptionSelected("uricomponent");
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                title: safeTexts.URIComponentTooltip,
                                                htmlFor: "uricomponent",
                                                children: safeTexts.optionURIComponentText
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleClear,
                                children: safeTexts.btnClearText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleSwap,
                                children: safeTexts.btnSwapText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleParse,
                                children: safeTexts.btnParseText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: handleToJson,
                                children: safeTexts.btnToJsonText
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PostsList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function PostsList({ posts, texts }) {
    const safeTexts = texts || {};
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let path = "";
    if (pathname !== "/") {
        path = pathname;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: safeTexts.aboutURL
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `${path}/${post.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: post.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: post.excerpt
                                })
                            ]
                        }, post.id))
                })
            ]
        })
    });
}


/***/ }),

/***/ 7483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getPostsData)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_posts_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9998);
/* harmony import */ var _public_posts_zh_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8908);
/* harmony import */ var _public_posts_kr_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4126);
/* harmony import */ var _public_posts_jp_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6092);
/* harmony import */ var _public_posts_ru_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5871);
/* harmony import */ var _public_posts_tc_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5568);
/* harmony import */ var _public_posts_es_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8358);
/* harmony import */ var _public_posts_vn_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9929);
/* harmony import */ var _public_posts_in_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9136);
/* harmony import */ var _public_posts_de_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2533);











function getPostsData() {
    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const languageMap = {
        "/": _public_posts_en_json__WEBPACK_IMPORTED_MODULE_1__,
        "/zh": _public_posts_zh_json__WEBPACK_IMPORTED_MODULE_2__,
        "/kr": _public_posts_kr_json__WEBPACK_IMPORTED_MODULE_3__,
        "/jp": _public_posts_jp_json__WEBPACK_IMPORTED_MODULE_4__,
        "/ru": _public_posts_ru_json__WEBPACK_IMPORTED_MODULE_5__,
        "/tc": _public_posts_tc_json__WEBPACK_IMPORTED_MODULE_6__,
        "/es": _public_posts_es_json__WEBPACK_IMPORTED_MODULE_7__,
        "/vn": _public_posts_vn_json__WEBPACK_IMPORTED_MODULE_8__,
        "/in": _public_posts_in_json__WEBPACK_IMPORTED_MODULE_9__,
        "/de": _public_posts_de_json__WEBPACK_IMPORTED_MODULE_10__
    };
    const postsData = languageMap[pathname] || _public_posts_en_json__WEBPACK_IMPORTED_MODULE_1__;
    return postsData;
}


/***/ }),

/***/ 1634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ useI18n)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./public/i18n.json
const i18n_namespaceObject = JSON.parse('{"en":{"langToEn":"English","siteName":"URLxcode","siteTitle":"URL Encode/Decode - URL to JSON - URL Params Parse - Online Tool - URLxcode.com","siteDescription":"URLxcode is a collection of easy-to-use URL online tools, providing URL encoding/decoding services, supporting URL parameter parsing and converting to JSON, including URL-related knowledge.","siteKeywords":"URL, Encode, Decode, Online, Tool","siteCanonical":"https://www.urlxcode.com","placeHolderInput":"Please enter the text to encod/decod, for example: https://www.urlxcode.com/","placeHolderOutput":"URL encoded/decoded result.","promptTitle":"Encode to URL-encoded format or decode from it","inputEmptyTips":"Input is empty!","inputInvalidTips":"Input is invalid!","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"Copied!","copyMsgError":"Copy failed.","btnCopyInputText":"Copy input","btnCopyOutputText":"Copy output","btnDecodeText":"Decode","btnEncodeText":"Encode","btnClearText":"Clear","btnSwapText":"Swap","btnParseText":"Parse Params","btnToJsonText":"To JSON","optionURIText":"Don\'t encode special characters","optionURIComponentText":"Encode special characters","URITooltip":"Using the encodeURI() method of JavaScript to implement.","URIComponentTooltip":"Using the encodeURIComponent() method of JavaScript to implement.","aboutURL":"About URL"},"zh":{"langToEn":"Simplified Chinese","siteName":"URLxcode","siteTitle":"URL 编码/解码 - URL 转 JSON - URL 参数解析 - 在线工具 - URLxcode.com","siteDescription":"URLxcode 是一个简单易用的 URL 在线工具集合，提供 URL 编码/解码服务，支持 URL 参数解析并转换为 JSON，包含 URL 相关知识。","siteKeywords":"URL, 编码, 解码, 在线, 工具","siteCanonical":"https://www.urlxcode.com/zh","placeHolderInput":"请输入要编码/解码的文本，例如：https://www.urlxcode.com/。","placeHolderOutput":"URL 编码/解码结果。","promptTitle":"编码为 URL 编码格式或从中解码","inputEmptyTips":"输入内容为空！","inputInvalidTips":"输入内容不合法！","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"已复制！","copyMsgError":"复制失败。","btnCopyInputText":"复制输入","btnCopyOutputText":"复制输出","btnDecodeText":"解码","btnEncodeText":"编码","btnClearText":"清除","btnSwapText":"交换","btnParseText":"参数解析","btnToJsonText":"转为 JSON","optionURIText":"不对特殊字符进行编码","optionURIComponentText":"对特殊字符进行编码","URITooltip":"使用 JavaScript 的 encodeURI() 方法实现。","URIComponentTooltip":"使用 JavaScript 的 encodeURIComponent() 方法实现。","aboutURL":"关于 URL"},"jp":{"langToEn":"Japanese","siteName":"URLxcode","siteTitle":"URL エンコード/デコード - URL から JSON への変換 - URL パラメータ解析 - オンライン ツール - URLxcode.com","siteDescription":"URLxcode は、URL エンコード/デコード サービスを提供し、URL パラメーターの解析と JSON への変換をサポートし、URL 関連の知識を含む使いやすい URL オンライン ツールのコレクションです。","siteKeywords":"URL, エンコード, デコード, オンライン, ツール","siteCanonical":"https://www.urlxcode.com/jp","placeHolderInput":"エンコード/デコードするテキストを入力してください (例: https://www.urlxcode.com/)。","placeHolderOutput":"URLエンコード/デコード結果。","promptTitle":"URLエンコード形式にエンコードするか、そこからデコードする","inputEmptyTips":"入力が空です!","inputInvalidTips":"入力が無効です!","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"コピーしました!","copyMsgError":"コピーに失敗しました。","btnCopyInputText":"入力をコピーする","btnCopyOutputText":"出力をコピーする","btnDecodeText":"デコード","btnEncodeText":"エンコード","btnClearText":"クリア","btnSwapText":"スワップ","btnParseText":"パラメータを解析する","btnToJsonText":"JSON に変換する","optionURIText":"特殊文字をエンコードしない","optionURIComponentText":"特殊文字をエンコードする","URITooltip":"JavaScript の encodeURI() メソッドを使用して実装。","URIComponentTooltip":"JavaScript の encodeURIComponent() メソッドを使用して実装。","aboutURL":"URLについて"},"kr":{"langToEn":"Korean","siteName":"URLxcode","siteTitle":"URL 인코딩/디코드 - URL을 JSON으로 변환 - URL 매개변수 구문 분석 - 온라인 도구 - URLxcode.com","siteDescription":"URLxcode는 URL 관련 지식을 포함하여 URL 인코딩/디코딩 서비스를 제공하고 URL 매개변수 구문 분석 및 JSON으로 변환을 지원하는 사용하기 쉬운 URL 온라인 도구 모음입니다.","siteKeywords":"URL, 인코딩, 디코딩, 온라인, 도구","siteCanonical":"https://www.urlxcode.com/kr","placeHolderInput":"인코딩/디코딩할 텍스트를 입력하세요(예: https://www.urlxcode.com/).","placeHolderOutput":"URL 인코딩/디코딩 결과.","promptTitle":"URL 인코딩 형식으로 인코딩하거나 거기에서 디코딩","inputEmptyTips":"입력이 비어 있습니다!","inputInvalidTips":"입력이 잘못되었습니다!","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"복사했습니다!","copyMsgError":"복사에 실패했습니다.","btnCopyInputText":"복사 입력","btnCopyOutputText":"복사 출력","btnDecodeText":"디코드","btnEncodeText":"인코드","btnClearText":"비우기","btnSwapText":"교체","btnParseText":"매개변수 구문 분석","btnToJsonText":"JSON으로 변환","optionURIText":"특수 문자 인코딩 안 함","optionURIComponentText":"특수 문자 인코딩","URITooltip":"자바스크립트의 encodeURI() 메서드를 사용하여 구현합니다.","URIComponentTooltip":"자바스크립트의 encodeURIComponent() 메서드를 사용하여 구현합니다.","aboutURL":"URL 정보"},"ru":{"langToEn":"Russian","siteName":"URLxcode","siteTitle":"Кодирование/декодирование URL-адреса — URL-адрес в JSON — Анализ параметров URL-адреса — онлайн-инструмент - URLxcode.com","siteDescription":"URLxcode — это набор простых в использовании онлайн-инструментов URL-адресов, предоставляющих услуги кодирования/декодирования URL-адресов, поддерживающих анализ параметров URL-адресов и их преобразование в JSON, включая знания, связанные с URL-адресами.","siteKeywords":"URL, Кодировать, Декодировать, Онлайн, Инструмент","siteCanonical":"https://www.urlxcode.com/ru","placeHolderInput":"Введите текст для кодирования/декодирования, например: https://www.urlxcode.com/","placeHolderOutput":"Результат кодирования/декодирования URL.","promptTitle":"Кодировать в формат URL-кодирования или декодировать из него","inputEmptyTips":"Ввод пуст!","inputInvalidTips":"Ввод недействителен!","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"Скопировано!","copyMsgError":"Копировать не удалось.","btnCopyInputText":"Копировать ввод","btnCopyOutputText":"Копировать вывод","btnDecodeText":"Декодировать","btnEncodeText":"Кодировать","btnClearText":"Прозрачный","btnSwapText":"Менять","btnParseText":"Анализ параметров","btnToJsonText":"Преобразовать в JSON","optionURIText":"Не кодировать специальный символs","optionURIComponentText":"Кодировать специальные символы","URITooltip":"Для реализации используется метод JavaScript encodeURI().","URIComponentTooltip":"Для реализации используется метод JavaScript encodeURIComponent().","aboutURL":"О URL-адресе"},"tc":{"langToEn":"Traditional Chinese","siteName":"URLxcode","siteTitle":"URL 編碼/解碼 - URL 轉 JSON - URL 參數解析 - 在線工具 - URLxcode.com","siteDescription":"URLxcode是一個簡單易用的URL在線工具集合，提供URL編碼/解碼服務，支持URL參數解析並轉換為JSON，包含URL相關知識。","siteKeywords":"URL, 編碼, 解碼, 在線, 工具","siteCanonical":"https://www.urlxcode.com/tc","placeHolderInput":"請輸入要編碼/解碼的文本，例如：https://www.urlxcode.com/","placeHolderOutput":"URL 編碼/解碼結果。","promptTitle":"編碼為 URL 編碼格式或從中解碼","inputEmptyTips":"輸入內容為空！","inputInvalidTips":"輸入無效！","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"複製了！","copyMsgError":"複製失敗。","btnCopyInputText":"複製輸入","btnCopyOutputText":"複製輸出","btnDecodeText":"解碼","btnEncodeText":"編碼","btnClearText":"清除","btnSwapText":"交換","btnParseText":"解析參數","btnToJsonText":"轉為 JSON","optionURIText":"不要對特殊字符進行編碼","optionURIComponentText":"對特殊字符進行編碼","URITooltip":"使用JavaScript的encodeURI()方法來實現。","URIComponentTooltip":"使用JavaScript的encodeURIComponent()方法來實現。","aboutURL":"關於 URL"},"es":{"langToEn":"Spanish","siteName":"URLxcode","siteTitle":"Codificación/decodificación de URL - Convertir a JSON - Análisis de parámetros de URL - Herramienta en línea - URLxcode.com","siteDescription":"URLxcode es una colección de herramientas de URL en línea fáciles de usar, que proporciona servicios de codificación/decodificación de URL, admite el análisis de parámetros de URL y la conversión a JSON, incluido el conocimiento relacionado con URL.","siteKeywords":"URL, Codificar, Decodificar, En Línea, Herramienta","siteCanonical":"https://www.urlxcode.com/es","placeHolderInput":"Por favor ingrese el texto para codificar/decodificar, por ejemplo: https://www.urlxcode.com/","placeHolderOutput":"Resultado URL codificado/decodificado.","promptTitle":"Codificar en formato codificado en URL o decodificarlo","inputEmptyTips":"¡La entrada está vacía!","inputInvalidTips":"¡La entrada no es válida!","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"Éxito!","copyMsgError":"La copia falló.","btnCopyInputText":"Copiar entrada","btnCopyOutputText":"Copiar salida","btnDecodeText":"Descodificar","btnEncodeText":"Codificar","btnClearText":"Claro","btnSwapText":"Intercambio","btnParseText":"Analizar parámetros","btnToJsonText":"Convertir a JSON","optionURIText":"No codificar caracteres especiales","optionURIComponentText":"Codificar caracteres especiales","URITooltip":"Usando el método encodeURI() de JavaScript para implementar.","URIComponentTooltip":"Usando el método encodeURIComponent() de JavaScript para implementar.","aboutURL":"Acerca de la URL"},"vn":{"langToEn":"Vietnamese","siteName":"URLxcode","siteTitle":"Mã hóa/Giải mã URL - URL tới JSON - Phân tích tham số URL - Công cụ trực tuyến - URLxcode.com","siteDescription":"URLxcode là tập hợp các công cụ URL trực tuyến dễ sử dụng, cung cấp dịch vụ mã hóa/giải mã URL, hỗ trợ phân tích tham số URL và chuyển đổi sang JSON, bao gồm cả kiến ​​thức liên quan đến URL.","siteKeywords":"URL, Mã Hóa, Giải Mã, Trực Tuyến, Công Cụ","siteCanonical":"https://www.urlxcode.com/vn","placeHolderInput":"Hãy nhập nội dung cần mã hóa/giải mã, ví dụ: https://www.urlxcode.com/","placeHolderOutput":"Kết quả được mã hóa/giải mã URL.","promptTitle":"Mã hóa sang định dạng được mã hóa URL hoặc giải mã từ nó","inputEmptyTips":"Đầu vào trống!","inputInvalidTips":"Đầu vào không hợp lệ!","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"Đã sao chép!","copyMsgError":"Sao chép không thành công.","btnCopyInputText":"Sao chép đầu vào","btnCopyOutputText":"Sao chép đầu ra","btnDecodeText":"Giải mã","btnEncodeText":"Mã hóa","btnClearText":"Thông thoáng","btnSwapText":"Tráo đổi","btnParseText":"Phân tích thông số","btnToJsonText":"Tới JSON","optionURIText":"Không mã hóa các ký tự đặc biệt","optionURIComponentText":"Mã hóa các ký tự đặc biệt","URITooltip":"Sử dụng phương thức mã hóaURI() của JavaScript để triển khai.","URIComponentTooltip":"Sử dụng phương thức mã hóaURIComponent() của JavaScript để triển khai.","aboutURL":"Giới thiệu về URL"},"in":{"langToEn":"Hindi","siteName":"URLxcode","siteTitle":"यूआरएल एनकोड/डीकोड - यूआरएल को जेएसओएन में बदलें - यूआरएल पैराम्स पार्स - ऑनलाइन टूल - URLxcode.com","siteDescription":"यूआरएलएक्सकोड उपयोग में आसान यूआरएल ऑनलाइन टूल का एक संग्रह है, जो यूआरएल एन्कोडिंग/डिकोडिंग सेवाएं प्रदान करता है, यूआरएल पैरामीटर पार्सिंग का समर्थन करता है और यूआरएल से संबंधित ज्ञान सहित जेएसओएन में कनवर्ट करता है।","siteKeywords":"यूआरएल, एनकोड, डीकोड, ऑनलाइन, टूल","siteCanonical":"https://www.urlxcode.com/in","placeHolderInput":"कृपया एनकोड/डीकोड करने के लिए टेक्स्ट दर्ज करें, उदाहरण के लिए: https://www.urlxcode.com/","placeHolderOutput":"यूआरएल एन्कोडेड/डीकोडेड परिणाम।","promptTitle":"यूआरएल-एनकोडेड प्रारूप में एनकोड करें या उससे डीकोड करें","inputEmptyTips":"इनपुट खाली है!","inputInvalidTips":"इनपुट अमान्य है!","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"नकल की गई!","copyMsgError":"प्रतिलिपि विफल.","btnCopyInputText":"इनपुट कॉपी करें","btnCopyOutputText":"आउटपुट कॉपी करें","btnDecodeText":"व्याख्या करना","btnEncodeText":"एन्कोड","btnClearText":"स्पष्ट","btnSwapText":"बदलना","btnParseText":"पार्स पैराम्स","btnToJsonText":"JSON में कनवर्ट करें","optionURIText":"विशेष वर्णों को एन्कोड न करें","optionURIComponentText":"विशेष वर्णों को एनकोड करें","URITooltip":"कार्यान्वयन के लिए JavaScript की encodeURI() विधि का उपयोग करना।","URIComponentTooltip":"कार्यान्वयन के लिए जावास्क्रिप्ट की encodeURIComponent() विधि का उपयोग करना।","aboutURL":"यूआरएल के बारे में"},"de":{"langToEn":"German","siteName":"URLxcode","siteTitle":"URL-Kodierung/Dekodierung – URL-Konvertierung in JSON – URL-Parameter-Analyse – Online-Tool - URLxcode.com","siteDescription":"URLxcode ist eine Sammlung benutzerfreundlicher URL-Online-Tools, die URL-Kodierungs-/Dekodierungsdienste bereitstellen, das Parsen von URL-Parametern und die Konvertierung in JSON unterstützen, einschließlich URL-bezogenem Wissen.","siteKeywords":"URL, Kodieren, Dekodieren, Online, Tool","siteCanonical":"https://www.urlxcode.com/de","placeHolderInput":"Bitte geben Sie den zu kodierenden/dekodierenden Text ein, zum Beispiel: https://www.urlxcode.com/","placeHolderOutput":"URL-codiertes/decodiertes Ergebnis.","promptTitle":"In ein URL-kodiertes Format kodieren oder daraus dekodieren","inputEmptyTips":"Eingabe ist leer!","inputInvalidTips":"Eingabe ist ungültig!","runTipsTitle":"❤️ URLxcode.com:","copyMsgSuccess":"Kopiert!","copyMsgError":"Das Kopieren ist fehlgeschlagen.","btnCopyInputText":"Eingabe kopieren","btnCopyOutputText":"Ausgabe kopieren","btnDecodeText":"Dekodieren","btnEncodeText":"Kodieren","btnClearText":"Klar","btnSwapText":"Tauschen","btnParseText":"Parameter analysieren","btnToJsonText":"In JSON konvertieren","optionURIText":"Kodieren Sie keine Sonderzeichen","optionURIComponentText":"Sonderzeichen kodieren","URITooltip":"Verwendung der encodeURI()-Methode von JavaScript zur Implementierung.","URIComponentTooltip":"Verwendung der encodeURIComponent()-Methode von JavaScript zur Implementierung.","aboutURL":"Über URL"}}');
;// CONCATENATED MODULE: ./lib/useI18n.js


function useI18n() {
    const { pathname } = (0,router_.useRouter)();
    const languageMap = {
        "/": "en",
        "/zh": "zh",
        "/kr": "kr",
        "/jp": "jp",
        "/ru": "ru",
        "/tc": "tc",
        "/es": "es",
        "/vn": "vn",
        "/in": "in",
        "/de": "de"
    };
    const language = languageMap[pathname] || "en";
    return i18n_namespaceObject[language];
}


/***/ })

};
;