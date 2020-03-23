import React, { Component } from "react";
import "./App.css";
import Validation from "./components/Validation";
import ScrollBox from "./components/ScrollBox";
import ValidationByCallback from "./components/ValidationByCallback";
import FilterBar from "./components/FilterBar";

// TIP: 콜백 함수를 통한 class component에 ref 사용
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>ref example 1 - html element에 사용</h1>
//         <FilterBar />
//         <hr />
//         <ValidationByCallback/>
//         <hr />
//         <h1>ref example 3 - class component에 사용</h1>
//         {/*   TIP:callback 함수를 통한 ref 설정 */}
//         <ScrollBox ref={ref => (this.myBox = ref)} />
//         <button onClick={() => this.myBox.scrollToBottom()}>
//           맨 밑으로 가기
//         </button>
//         <hr />
//         {/* <h1> ref by callback function</h1>
//         <CustomTextInput /> */}
//       </div>
//     );
//   }
// }
// export default App;

// TIP: createRef를 사용한 class component에 ref 사용
class App extends Component {
  constructor(props) {
    super(props);
    this.myBox = React.createRef();
  }

  /*
  componentDidMount
  TIP: 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
  이 메소드 안에서 다른 javascript 프레임워크를 연동하거나,
  setTimeout, setInterval, AJAX 처리 logic을 넣음
  */
  componentDidMount() {
    // this.myBox.current.scrollToBottom();
  }

  render() {
    return (
      <div>
        <h1>ref example 1 - html element에 사용</h1>
        <FilterBar />
        <hr />
        <ValidationByCallback />
        <hr />
        <h1>ref example 2 - class component에 사용</h1>
        {/*   TIP: createRef()를 통한 ref 설정 */}
        <ScrollBox ref={this.myBox} />
        <button onClick={() => this.myBox.current.scrollToBottom()}>맨 밑으로 가기</button>
        <hr />
        {/* <h1> ref by callback function</h1>
        <CustomTextInput /> */}
      </div>
    );
  }
}
export default App;
