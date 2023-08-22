exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 2921:
/***/ ((module) => {

// Exports
module.exports = {
	"convertor": "URLConvertor_convertor__TBezp",
	"textAreaBox": "URLConvertor_textAreaBox__aia6T",
	"textInputBox": "URLConvertor_textInputBox__vUtJ0",
	"textOutputBox": "URLConvertor_textOutputBox__DVF7F",
	"btnGroupTop": "URLConvertor_btnGroupTop__6F76j",
	"btnGroupInnerOne": "URLConvertor_btnGroupInnerOne__lH7Em",
	"btnCopy": "URLConvertor_btnCopy__btgeM",
	"btnGroupInnderTwo": "URLConvertor_btnGroupInnderTwo__VtgjT",
	"optionGroup": "URLConvertor_optionGroup__3D9IU",
	"singleOption": "URLConvertor_singleOption__Ppkpa"
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
    const safeTexts = texts || {};
    const [copyMsg, setCopyMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("decode");
    const [decoded, setDecoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [encoded, setEncoded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [optionSelected, setOptionSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("uri");
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const outputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handleDecode = ()=>{
        setMode("decode");
        const inputValue = inputRef.current.value;
        const decoded = decodeURIComponent(inputValue);
        setDecoded(decoded);
    };
    const handleEncode = ()=>{
        setMode("encode");
        const inputValue = inputRef.current.value;
        let encoded = "";
        if (optionSelected === "uri") {
            encoded = encodeURI(inputValue);
        } else {
            encoded = encodeURIComponent(inputValue);
        }
        setEncoded(encoded);
    };
    const handleCopy = ()=>{
        const outputValue = outputRef.current.value;
        try {
            navigator.clipboard.writeText(outputValue);
            setCopyMsg(safeTexts.copyMsgSuccess);
            setTimeout(()=>{
                setCopyMsg("");
            }, 500);
        } catch  {
            setCopyMsg(safeTexts.copyMsgError);
            setTimeout(()=>{
                setCopyMsg("");
            }, 500);
        }
    };
    const handleClear = ()=>{
        setEncoded("");
        setDecoded("");
        inputRef.current.value = "";
        outputRef.current.value = "";
    };
    const handleSwap = ()=>{
        const input = inputRef.current.value;
        const output = outputRef.current.value;
        inputRef.current.value = output;
        outputRef.current.value = input;
    };
    const handleParse = ()=>{};
    const handleToJson = ()=>{
        const url = inputRef.current.value;
        const params = new URLSearchParams(url);
        setEncoded(JSON.stringify(Object.fromEntries(params)));
    };
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
                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textInputBox),
                        placeholder: safeTexts.placeHolderInput,
                        ref: inputRef
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().textOutputBox),
                        placeholder: safeTexts.placeHolderOutput,
                        ref: outputRef,
                        value: mode === "decode" ? decoded : encoded,
                        readOnly: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupTop),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnGroupInnerOne),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_URLConvertor_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnCopy),
                            onClick: handleCopy,
                            children: copyMsg || safeTexts.btnCopyText
                        })
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
const i18n_namespaceObject = JSON.parse('{"en":{"siteName":"URLxcode","siteTitle":"URL Encode/Decode - Online Tool - URLxcode.com","siteDescription":"Encode URL to URL-encoded format or decode from it easily. Our site is an online tool to convert your URL.","placeHolderInput":"Please enter the text to encod/decod.","placeHolderOutput":"URL encoded/decoded result.","promptTitle":"Encode to URL-encoded format or decode from it","copyMsgSuccess":"Copied!","copyMsgError":"Copy failed.","btnCopyText":"Copy output","btnDecodeText":"Decode","btnEncodeText":"Encode","btnClearText":"Clear","btnSwapText":"Swap","btnParseText":"Parse","btnToJsonText":"To JSON","optionURIText":"Don\'t encode special characters","optionURIComponentText":"Encode special characters","URITooltip":"Using the encodeURI() method of JavaScript to implement.","URIComponentTooltip":"Using the encodeURIComponent() method of JavaScript to implement."},"zh":{"siteName":"URLxcode","siteTitle":"URL 编码、解码 - 在线工具 - URLxcode.com","siteDescription":"将 URL 编码为 URL 编码格式或轻松解码。我们的网站是一个在线工具，可以转换您的URL。","placeHolderInput":"请输入要编码/解码的文本。","placeHolderOutput":"URL 编码/解码结果。","promptTitle":"编码为 URL 编码格式或从中解码","copyMsgSuccess":"已复制！","copyMsgError":"复制失败。","btnCopyText":"复制结果","btnDecodeText":"解码","btnEncodeText":"编码","btnClearText":"清除","btnSwapText":"交换","btnParseText":"解析","btnToJsonText":"转为 JSON","optionURIText":"不对特殊字符进行编码","optionURIComponentText":"对特殊字符进行编码","URITooltip":"使用 JavaScript 的 encodeURI() 方法实现。","URIComponentTooltip":"使用 JavaScript 的 encodeURIComponent() 方法实现。"},"jp":{"siteName":"URLxcode","siteTitle":"URL エンコード/デコード - オンラインツール - URLxcode.com","siteDescription":"URLをURLエンコード形式に簡単にエンコードまたはデコードします。 当サイトは、URLを変換するオンラインツールです。","placeHolderInput":"エンコード/デコードするテキストを入力してください。","placeHolderOutput":"URLエンコード/デコード結果。","promptTitle":"URLエンコード形式にエンコードするか、そこからデコードする","copyMsgSuccess":"コピーしました!","copyMsgError":"コピーに失敗しました。","btnCopyText":"出力をコピー","btnDecodeText":"デコード","btnEncodeText":"エンコード","btnClearText":"クリア","btnSwapText":"スワップ","btnParseText":"解析","btnToJsonText":"JSONに変換","optionURIText":"特殊文字をエンコードしない","optionURIComponentText":"特殊文字をエンコードする","URITooltip":"JavaScript の encodeURI() メソッドを使用して実装。","URIComponentTooltip":"JavaScript の encodeURIComponent() メソッドを使用して実装。"},"kr":{"siteName":"URLxcode","siteTitle":"URL 인코딩/디코딩 - 온라인 도구 - URLxcode.com","siteDescription":"URL을 URL 인코딩 형식으로 쉽게 인코딩하거나 디코딩합니다. 당사 사이트는 URL을 변환하는 온라인 도구입니다.","placeHolderInput":"인코딩/디코딩할 텍스트를 입력하세요.","placeHolderOutput":"URL 인코딩/디코딩 결과.","promptTitle":"URL 인코딩 형식으로 인코딩하거나 거기에서 디코딩","copyMsgSuccess":"복사했습니다!","copyMsgError":"복사에 실패했습니다.","btnCopyText":"출력 복사","btnDecodeText":"디코드","btnEncodeText":"인코드","btnClearText":"비우기","btnSwapText":"교체","btnParseText":"구문 분석","btnToJsonText":"JSON으로 변환","optionURIText":"특수 문자 인코딩 안 함","optionURIComponentText":"특수 문자 인코딩","URITooltip":"자바스크립트의 encodeURI() 메서드를 사용하여 구현합니다.","URIComponentTooltip":"자바스크립트의 encodeURIComponent() 메서드를 사용하여 구현합니다."}}');
;// CONCATENATED MODULE: ./lib/useI18n.js


function useI18n() {
    // 获取当前访问页面路由的 pathname
    const { pathname } = (0,router_.useRouter)();
    if (pathname === "/") {
        return i18n_namespaceObject.en;
    } else if (pathname === "/zh") {
        return i18n_namespaceObject.zh;
    } else if (pathname === "/kr") {
        return i18n_namespaceObject.kr;
    } else if (pathname === "/jp") {
        return i18n_namespaceObject.jp;
    } else {
        return i18n_namespaceObject.en;
    }
}


/***/ })

};
;