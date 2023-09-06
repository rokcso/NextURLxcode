import { useRef, useState } from "react";
import componentStyles from "./URLConvertor.module.css";

export default function URLConvertor({ texts }) {
  // 如果没有获取到 texts，就使用 {}，避免报错
  const safeTexts = texts || {};

  // 将输入、输出内容绑定
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  // 复制操作提示信息
  const [copyInputMsg, setCopyInputMsg] = useState("");
  const [copyOutputMsg, setCopyOutputMsg] = useState("");
  // 复制功能
  const handleCopyOutput = () => {
    umami.track("clickCopyOutputBtn");
    // 获取当前输出内容
    const outputValue = outputRef.current.value;
    try {
      navigator.clipboard.writeText(outputValue);
      // 如果复制内容到剪贴板成功，就设定复制操作提示信息为成功提示
      setCopyOutputMsg(safeTexts.copyMsgSuccess);
      // 500ms 后清空复制操作提示信息
      setTimeout(() => {
        setCopyOutputMsg("");
      }, 500);
    } catch {
      // 如果复制内容到剪贴板失败，就设定复制操作提示信息为失败提示
      setCopyOutputMsg(safeTexts.copyMsgError);
      // 500ms 后清空复制操作提示信息
      setTimeout(() => {
        setCopyOutputMsg("");
      }, 500);
    }
  };
  const handleCopyInput = () => {
    umami.track("clickCopyInputBtn");
    const inputValue = inputRef.current.value;
    try {
      navigator.clipboard.writeText(inputValue);
      setCopyInputMsg(safeTexts.copyMsgSuccess);
      setTimeout(() => {
        setCopyInputMsg("");
      }, 500);
    } catch {
      setCopyInputMsg(safeTexts.copyMsgError);
      setTimeout(() => {
        setCopyInputMsg("");
      }, 500);
    }
  };

  // 用于记录 input 异常情况
  const [inputIsEmpty, setInputIsEmpty] = useState(false);
  const [inputIsInvalid, setInputIsInvalid] = useState(false);

  // 声明 result State 用于存储输出结果
  const [result, setResult] = useState("");
  // 解码功能
  const handleDecode = () => {
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
    } catch {
      // 如果解码失败，则输入异常
      setInputIsInvalid(true);
    }
  };

  // 设定编码选项默认为 encodeURI
  const [optionSelected, setOptionSelected] = useState("uri");

  // 编码功能
  const handleEncode = () => {
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
      } catch {
        // 编码失败
        setInputIsInvalid(true);
      }
    } else {
      try {
        const encoded = encodeURIComponent(inputValue);
        setResult(encoded);
      } catch {
        setInputIsInvalid(true);
      }
    }
  };

  // 清除功能
  const handleClear = () => {
    umami.track("clickClearBtn");
    // 将 input 和 output 的内容值设定为空
    inputRef.current.value = "";
    setResult("");
    setInputIsEmpty(false);
    setInputIsInvalid(false);
  };

  // 如果 input 发生变化，调整 input 状态，清除异常提醒
  const handleInputChange = () => {
    setInputIsEmpty(false);
    setInputIsInvalid(false);
    setResult("");
  };

  // 交换 input output
  const handleSwap = () => {
    umami.track("clickSwapBtn");
    const input = inputRef.current.value;
    const output = outputRef.current.value;
    inputRef.current.value = output;
    setResult(input);
  };

  // 解析 URL 功能
  const handleParse = () => {
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
      urlObj.searchParams.forEach((key, value) => {
        result += value + "=" + key + "\n";
      });
    }
    setResult(result);
  };

  // URL 格式校验
  const validateURL = (url) => {
    try {
      // 创建 URL 对象，不能成功创建则说明传入的 url 不符合 URL 格式要求
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // URL 转 Json 功能
  const handleToJson = () => {
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
      searchParams: Object.fromEntries(urlObj.searchParams),
    };
    // 将 resJson 序列化为 JSON 字符串，null 意味着不过滤任何内容，2 意味着每层 JSON 对象缩进 2 空格
    const result = JSON.stringify(resJson, null, 2);
    setResult(result);
  };

  // 输入框的 class，根据条件判断为 input 赋予不同的 class，用以修改不同的样式
  const inputTextAreaClassName = `${componentStyles.textInputBox} ${
    inputIsEmpty ? componentStyles.emptyInput : ""
  } ${inputIsInvalid ? componentStyles.invalidInput : ""}`;

  // 提示内容，根据条件判断赋值不同的提示内容
  const runTips = inputIsEmpty
    ? safeTexts.inputEmptyTips
    : inputIsInvalid
    ? safeTexts.inputInvalidTips
    : "";

  // 返回 HTML 内容
  return (
    <div className={componentStyles.convertor}>
      <h1>{safeTexts.promptTitle}</h1>
      <div className={componentStyles.textAreaBox}>
        <textarea
          className={inputTextAreaClassName}
          placeholder={safeTexts.placeHolderInput}
          onChange={handleInputChange}
          ref={inputRef}
        ></textarea>
        <textarea
          className={componentStyles.textOutputBox}
          placeholder={safeTexts.placeHolderOutput}
          ref={outputRef}
          value={result}
          readOnly
        ></textarea>
      </div>
      <div className={componentStyles.runTips}>
        <span>
          {safeTexts.runTipsTitle}
          &nbsp;
          <span className={componentStyles.runTipsText}>{runTips}</span>
        </span>
      </div>
      <div className={componentStyles.btnGroupTop}>
        <div className={componentStyles.btnGroupInnerOne}>
          {/* 复制按钮，点击执行 handleCopy 方法，如果复制操作提示信息为空，就显示按钮文案 */}
          <button className={componentStyles.btnCopy} onClick={handleCopyInput}>
            {copyInputMsg || safeTexts.btnCopyInputText}
          </button>
          <button
            className={componentStyles.btnCopy}
            onClick={handleCopyOutput}
          >
            {/* 如果复制操作提示信息没有内容，就显示按钮文字，否则显示提示信息 */}
            {copyOutputMsg || safeTexts.btnCopyOutputText}
          </button>
        </div>
        <div className={componentStyles.btnGroupInnderTwo}>
          {/* 解码按钮，点击执行 handleDecode 方法 */}
          <button onClick={handleDecode}>{safeTexts.btnDecodeText}</button>
          {/* 编码按钮，点击执行 handleEncode 方法 */}
          <button onClick={handleEncode}>{safeTexts.btnEncodeText}</button>
          <div className={componentStyles.optionGroup}>
            <div className={componentStyles.singleOption}>
              <input
                type="radio"
                id="uri"
                checked={optionSelected === "uri"}
                onChange={() => {
                  setOptionSelected("uri");
                }}
              />
              <label title={safeTexts.URITooltip} htmlFor="uri">
                {safeTexts.optionURIText}
              </label>
            </div>
            <div className={componentStyles.singleOption}>
              <input
                type="radio"
                id="uricomponent"
                checked={optionSelected === "uricomponent"}
                onChange={() => {
                  setOptionSelected("uricomponent");
                }}
              />
              <label
                title={safeTexts.URIComponentTooltip}
                htmlFor="uricomponent"
              >
                {safeTexts.optionURIComponentText}
              </label>
            </div>
          </div>
          <button onClick={handleClear}>{safeTexts.btnClearText}</button>
          <button onClick={handleSwap}>{safeTexts.btnSwapText}</button>
          <button onClick={handleParse}>{safeTexts.btnParseText}</button>
          <button onClick={handleToJson}>{safeTexts.btnToJsonText}</button>
        </div>
      </div>
    </div>
  );
}
