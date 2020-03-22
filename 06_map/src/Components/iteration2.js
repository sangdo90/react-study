import React, { useState } from "react";

const Iteration2 = () => {
  const [names, setNames] = useState([
    { id: 1, text: "string1" },
    { id: 2, text: "string2" },
    { id: 3, text: "string3" },
    { id: 4, text: "string4" }
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(names.length + 1); //새로운 배열값 추가를 위한 id

  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    /* TIP: react에서는 push 대신 concat을 사용함
    state update 할 경우 리액트 컴포넌트 성능 최적화를 위해
     기존 상태를 그대로 두면서 새로운 state를 설정해야함 (불변성 유지)
    */
    const nextName = names.concat({
      id: nextId,
      text: inputText
    });
    setNextId(nextId + 1); // nestId 에 + 1
    setNames(nextName); // names 배열 업데이트
    setInputText(""); // inputText 비우기
  };
  const onRemove = id => {
    /* 
    TIP: (불변성 유지를 위해)concat과 마찬가지로 pop 대신 filter을 사용함
    */
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default Iteration2;
