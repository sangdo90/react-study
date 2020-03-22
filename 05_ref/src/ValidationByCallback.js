import React, { Component } from "react";
import "./Validation.css";

class ValidationByCallback extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };

  // input 이벤트를 통해 state.password 변경
  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "password"
    });
  };

  // enter key press event
  appKeyPress = e => {
    if (e.key === "Enter") {
      this.handleButtonClick();
    }
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          ref={this.input}
          onChange={this.handleChange}
          //TIP: 비밀번호가 password 일 경우 success, 아닐경우 failure style 적용
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          onKeyPress={this.appKeyPress}
        />
        <button onClick={this.handleButtonClick}> 비밀번호 확인 </button>
      </div>
    );
  }
}
export default ValidationByCallback;
