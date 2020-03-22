import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Validation from "./Validation";
import ValidationCB from "./ValidationByCallback";

function App() {
  return (
    <div>
      <h1> ref by callback function</h1>
      <ValidationCB/>
      <br></br>
      <br></br>
      <h1>ref by creatRef</h1>
      <Validation />
    </div>
  );
}

export default App;
