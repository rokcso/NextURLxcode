import { useRef, useState } from "react";
import componentStyles from "./URLConvertor.module.css";

export default function URLConvertor({ texts }) {
  const safeTexts = texts || {};
  const [copyMsg, setCopyMsg] = useState("");
  const [mode, setMode] = useState("decode");
  const [decoded, setDecoded] = useState("");
  const [encoded, setEncoded] = useState("");
  const [optionSelected, setOptionSelected] = useState("uri");
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const handleDecode = () => {
    setMode("decode");
    const inputValue = inputRef.current.value;
    const decoded = decodeURIComponent(inputValue);
    setDecoded(decoded);
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
    setEncoded(encoded);
  };
  const handleCopy = () => {
    const outputValue = outputRef.current.value;
    try {
      navigator.clipboard.writeText(outputValue);
      setCopyMsg(safeTexts.copyMsgSuccess);
      setTimeout(() => {
        setCopyMsg("");
      }, 500);
    } catch {
      setCopyMsg(safeTexts.copyMsgError);
      setTimeout(() => {
        setCopyMsg("");
      }, 500);
    }
  };
  const handleClear = () => {
    setEncoded("");
    setDecoded("");
    inputRef.current.value = "";
    outputRef.current.value = "";
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
  return (
    <div className={componentStyles.convertor}>
      <h1>{safeTexts.promptTitle}</h1>
      <div className={componentStyles.textAreaBox}>
        <textarea
          className={componentStyles.textInputBox}
          placeholder={safeTexts.placeHolderInput}
          ref={inputRef}
        ></textarea>
        <textarea
          className={componentStyles.textOutputBox}
          placeholder={safeTexts.placeHolderOutput}
          ref={outputRef}
          value={mode === "decode" ? decoded : encoded}
          readOnly
        ></textarea>
      </div>
      <div className={componentStyles.btnGroupTop}>
        <div className={componentStyles.btnGroupInnerOne}>
          <button className={componentStyles.btnCopy} onClick={handleCopy}>
            {copyMsg || safeTexts.btnCopyText}
          </button>
        </div>
        <div className={componentStyles.btnGroupInnderTwo}>
          <button onClick={handleDecode}>{safeTexts.btnDecodeText}</button>
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
