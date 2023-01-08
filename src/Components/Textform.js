import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    if (text === "") {
      props.alert("Enter the text to capitalize", "warning");
    } else {
      let newText = text.toUpperCase();
      setText(newText);
    }
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const lowercase = () => {
    if (text === "") {
      props.alert("Enter the text to make it small", "warning");
    } else {
      let newText = text.toLowerCase();
      setText(newText);
    }
  };
  const copy = () => {
    if (text === "") {
      props.alert("Enter the text to copy", "warning");
    } else {
      let txt = document.getElementById("exampleFormControlTextarea1");
      txt.select();
      txt.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(txt.value);
    }
  };
  const bold = () => {
    if (text === "") {
      props.alert("Enter the text to make it bold", "warning");
    } else {
      let txt = document.getElementById("exampleFormControlTextarea1");
      txt.style.fontWeight = "bolder";
      setText(txt.value);
    }
  };
  const lgt = () => {
    if (text === "") {
      props.alert("Enter the text to make it light", "warning");
    } else {
      let txt = document.getElementById("exampleFormControlTextarea1");
      txt.style.fontWeight = 100;
      setText(txt.value);
    }
  };
  
  const [text, setText] = useState("");
  let pre;
  if(text === ""){
    pre = "0 words and 0 characters"
  }else {
    pre = text.split(" ").length + " words & " + text.length + " characters"
  }
  return (
    <>
      <div
        className={`bg-${props.mode} text-${
          props.mode === "light" ? "dark" : "light"
        } my-4`}
      >
        <div
          className={`bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <label
            htmlFor="exampleFormControlTextarea1"
            className={`bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            {props.heading}
          </label>
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter you text here!"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className={`btn bg-${
            props.mode === "light" ? "primary" : "secondary"
          } text-${props.mode === "light" ? "dark" : "light"} my-3 mx-3`}
          id=""
          onClick={handleUpClick}
        >
          To uppercase
        </button>
        <button
          className={`btn bg-${
            props.mode === "light" ? "primary" : "secondary"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="remains"
          onClick={lowercase}
        >
          To lowercase
        </button>
        <button
          className={`btn bg-${
            props.mode === "light" ? "primary" : "secondary"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="remains"
          onClick={copy}
        >
          Copy Text
        </button>
        <button
          className={`btn bg-${
            props.mode === "light" ? "primary" : "secondary"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="remains"
          onClick={bold}
        >
          To bold
        </button>
        <button
          className={`btn bg-${
            props.mode === "light" ? "primary" : "secondary"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="remains"
          onClick={lgt}
        >
          Light
        </button>
      </div>
      <div
        className={`container  bg-${props.mode} text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1 className="my-0">Your Text summary is below:</h1>
        <p>
          {pre}
        </p>
        <p>{0.0008 * text.split(" ").length} minutes to read!</p>
      </div>
    </>
  );
}
