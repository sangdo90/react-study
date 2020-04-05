import React, { useReducer } from "react";

const initialState = {
  name: "",
  address: ""
};

function reducer(state, action) {
  console.log(state);
  console.log(action);
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, address } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <h1>useReducer example</h1>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="address" value={address} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {address}
        </div>
      </div>
    </div>
  );
};

export default Info3;
