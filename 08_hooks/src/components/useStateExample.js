import React, {useState} from 'react';

const Info = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeAddress = e => {
    setAddress(e.target.value)
  }

  return (
    <div>
      <h1>useState example</h1>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={address} onChange={onChangeAddress} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>주소: </b> {address}
        </div>
      </div>
    </div>
  );
};

export default Info;
