import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Upper Case", "success");
  };
  const handleLowClick = () => {
    console.log("Lower case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lower Case", "success");
  };
  const handleClearClick = () => {
    console.log("Lower case was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text has been removed!!!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
