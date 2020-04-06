import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import './App.css';


// 2500개 list 생성
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      username: `사용자 ${i}`,
      email: `example${i}@gmail.com`,
      active: false,
    });
  }
  return array;
}

// 활성화된 게정 확인
function countActiveUsers(users) {
  console.log('활성화 계정 확인중...');
  return users.filter(user => user.active).length;
}


function App() {

  // users 리스트 배열로 초기화
  const [users, setUsers] = useState(createBulkTodos);
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const nextId = useRef(createBulkTodos().length + 1);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);

  const onCreate = useCallback(() => {

    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users => users.concat(user));
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;

  }, [username, email]);

  const onRemove = useCallback(id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users => users.filter(user => user.id !== id));
    // setUsers(users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);


  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성화 계정 : {count}</div>
    </>
  );
}

export default App;
