import React, { Component } from "react";
import "../Validation.css";

class ValidationByCallback extends Component {
  constructor(props) {
    super(props);
    this.input = null;
    
    this.state = {
      password: "",
      clicked: false,
      validated: false
    };
  }

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
    console.log("this.input")
    console.log(this.input)
    this.input.select();
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
          ref={ref => {
            this.input = ref;
          }}
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
export default ValidationByCallback;
