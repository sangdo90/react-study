import React, { Component } from "react";
import "../Validation.css";

class Validation extends Component {
  // Input DOM 엘리먼트를 저장하기 위한 ref를 생성
  input = React.createRef();

  state = {
    password: "",
    clicked: false,
    validated: false
  };

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
    this.input.current.select();
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
          ref={this.input}
          type="password"
          value={this.state.password}
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
export default Validation;
