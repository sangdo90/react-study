import React, { useState, useMemo } from "react";

const getAverage = numbers => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  // state 초기화
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = e => {
    console.log("onchange");
    setNumber(e.target.value);
  };

  const onInsert = () => {
    console.log("onInsert");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]); // list 배열이 바뀔때만 getAverage 함수 호출

  return (
    <div>
      <h1>useMemo example</h1>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
        <br />
        {/* <b>평균값:</b> {getAverage(list)} */}
      </div>
    </div>
  );
};

export default Average;
