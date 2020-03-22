import React from "react";
import "./App.css";
import Iteration1 from "./Components/Iteration1";
import Iteration2 from "./Components/iteration2";

function App() {
  return (
    <div /*className="App"*/>
      <ul>
        <h1>map 함수를 이용한 컴포넌트 반복</h1>
        <Iteration1 />
      </ul>
      <hr />
      <ul>
        <h1>컴포넌트 추가 및 삭제</h1>
        <ul>
          <li>
            <h2>input을 통한 compent 추가</h2>
          </li>
          <li>
            <h2>더블클릭으로 삭제</h2>
          </li>
        </ul>
        <Iteration2 />
      </ul>
    </div>
  );
}

export default App;
