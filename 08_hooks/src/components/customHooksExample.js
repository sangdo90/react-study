import React from "react";
import useInputs from "./customHooks/userInput";

const Custom = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;

  return (
    <div>
      <h1>custom hooks example</h1>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Custom;
