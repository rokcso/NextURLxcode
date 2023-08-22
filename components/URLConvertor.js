import { useRef, useState } from "react";
import componentStyles from "./URLConvertor.module.css";

export default function URLConvertor({ texts }) {
  // 如果没有获取到 texts，就使用 {}，避免报错
  const safeTexts = texts || {};

  // 将输入、输出内容绑定
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  // 复制操作提示信息
  const [copyMsg, setCopyMsg] = useState("");
  // 复制功能
  const handleCopy = () => {
    // 获取当前输出内容
    const outputValue = outputRef.current.value;
    try {
      navigator.clipboard.writeText(outputValue);
      // 如果复制内容到剪贴板成功，就设定复制操作提示信息为成功提示
      setCopyMsg(safeTexts.copyMsgSuccess);
      // 500ms 后清空复制操作提示信息
      setTimeout(() => {
        setCopyMsg("");
      }, 500);
    } catch {
      // 如果复制内容到剪贴板失败，就设定复制操作提示信息为失败提示
      setCopyMsg(safeTexts.copyMsgError);
      // 500ms 后清空复制操作提示信息
      setTimeout(() => {
        setCopyMsg("");
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

  const handleEncode = () => {
    setMode("encode");
    const inputValue = inputRef.current.value;
    let encoded = "";
    if (optionSelected === "uri") {
      encoded = encodeURI(inputValue);
    } else {
      encoded = encodeURIComponent(inputValue);
    }
    setResult(encoded);
  };

  const [optionSelected, setOptionSelected] = useState("uri");
  // 如果 input 发生变化，调整 input 状态
  const handleInputChange = () => {
    setInputIsEmpty(false);
    setInputIsInvalid(false);
  };

  const handleClear = () => {
    setResult("");
    inputRef.current.value = "";
    outputRef.current.value = "";
    handleInputChange();
  };
  const handleSwap = () => {
    const input = inputRef.current.value;
    const output = outputRef.current.value;
    inputRef.current.value = output;
    outputRef.current.value = input;
  };
  const handleParse = () => {};
  const handleToJson = () => {
    const url = inputRef.current.value;
    const params = new URLSearchParams(url);
    setEncoded(JSON.stringify(Object.fromEntries(params)));
  };
  const inputTextAreaClassName = `${componentStyles.textInputBox} ${
    inputIsEmpty ? componentStyles.emptyInput : ""
  } ${inputIsInvalid ? componentStyles.invalidInput : ""}`;
  const runTips = inputIsEmpty
    ? safeTexts.inputEmptyTips
    : inputIsInvalid
    ? safeTexts.inputInvalidTips
    : "";
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
        <span>{safeTexts.runTipsTitle}</span>
        &nbsp;
        <span className={componentStyles.runTipsText}>{runTips}</span>
      </div>
      <div className={componentStyles.btnGroupTop}>
        <div className={componentStyles.btnGroupInnerOne}>
          {/* 复制按钮，点击执行 handleCopy 方法，如果复制操作提示信息为空，就显示按钮文案 */}
          <button className={componentStyles.btnCopy} onClick={handleCopy}>
            {copyMsg || safeTexts.btnCopyText}
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
