import React, { Component } from 'react';
import "./App.css";
import Validation from "./components/Validation";
import ScrollBox from "./components/ScrollBox";

class App extends Component {
  render() {
    return (
      <div>
        <h1>ref by creatRef</h1>
        <Validation />
        <h1> ref by callback function</h1>
        <ScrollBox ref={ref => (this.myBox = ref)} />
        <button onClick={() => this.myBox.scrollToBottom()}>
          맨 밑으로 가기
        </button>
      </div>
    );
  }
}

export default App;
