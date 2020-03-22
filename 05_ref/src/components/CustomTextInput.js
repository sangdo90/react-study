import React, { Component } from "react";

class CustomTextInput extends Component {
    constructor(props) {
      super(props);
      // textInput DOM 엘리먼트를 저장하기 위한 ref를 생성
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // DOM API를 사용하여 명시적으로 text 타입의 input 엘리먼트를 포커스
      //  DOM 노드를 얻기 위해 "current" 프로퍼티에 접근
      this.textInput.current.select(alert("select!"));
    }
  
    render() {
      // React에게 우리가 text 타입의 input 엘리먼트를
      // 우리가 생성자에서 생성한 `textInput` ref와 연결하고 싶다고 이야기합니다.
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }
  export default CustomTextInput;