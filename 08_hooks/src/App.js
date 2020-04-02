import React, { useState } from "react";
import "./App.css";
import Info from "./components/useStateExample";
import Info2 from "./components/useEffectExample";
import Info3 from "./components/useReducerExample";
import Average from "./components/useMemoExample";
import Average2 from "./components/useCallbackExample";
import Average3 from "./components/useRefExample";
import Custom from "./components/customHooksExample";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <Info />
      </div>

      <hr />

      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        {visible && <Info2 />}
      </div>

      <hr />
      {/* <div>
        <Counter/>
      </div> */}
      <div>
        <Info3/>
      </div>
      <div>
        <Average/>
      </div>
      <div>
        <Average2/>
      </div>
      <div>
        <Average3 />
      </div>

      <hr />
      
      <div>
        <Custom />
      </div>
    </div>
  );
}

export default App;
