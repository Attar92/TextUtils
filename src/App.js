import "./App.css";
import About from "./Components/About";
import NavBar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// let name = "Abdul Habib Attari"
function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
      // setInterval(()=>{
      //   document.title = "Install this app"
      // }, 1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // setInterval(()=>{
      //   document.title = "Don't Install this app"
      // }, 2200)
    }
  };
  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={<Textform
                heading="Enter the text to analyze:"
                mode={mode}
                alert={showAlert}
              />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
