---
marp: true
theme: custom
paginate: true
auto-scaling: true
---

# Performance upgrade 

---

# 느려지는 원인
## 컴포넌트가 리렌더링 되는 상황
- 자신이 전달받은 props가 변경될 때
- 자신의 state가 바뀔 때
- 부모 컴포넌트가 리렌더링 될때
- forceUpdate 함수가 실행될 때

---

# React.memo를 사용한 컴포넌트 성능 최적화
- shoudComponentUpdate 라이프사이클 메소드 사용(클래스형 컴포넌트)
- React.memo 사용(함수형 컴포넌트)
```js
const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
    />
  );
};                                                                                                                                                                                                      
export default React.memo(TodoList);
```

---

# 불변성의 중요성
### Javascript 타입
- Primitive Type
  - Boolean, null, undefined, string, Number
  - 데이터 전달시 실제 value가 복사
- Reference Type
  - Array, Function, Object
  - 데이터 전달시 해당 객체의 주소값이 전달(reference 전달)

***

## shallow copy
- ES6 이후 기준 
  - Object.assign()
  - spread 연산자 ({...})

***

### Primitive type
```js
var original = '원본';
var copy = original;
console.log('copy의 값은?', copy); // 원본
    
copy = '복제품';
console.log('original의 값은?', original); // 원본
console.log('copy의 값은?', copy); // 복제품
```

***

### Objects
```js
  let original = { a: 1, b: { c: 1 } };
  console.log('original :', JSON.stringify(original)); //  {"a":1,"b":{"c":1}}
  let copy = original;
  let spreadCopy1 = { ...original };
  let spreadCopy2 = { ...original, 
    b : {...original.b}
   };

  original.a = 2;
  original.b.c = 3;

  console.log('original : ', JSON.stringify(original));       // {"a":2,"b":{"c":3}}
  console.log('copy : ', JSON.stringify(copy));               // {"a":2,"b":{"c":3}}
  console.log('spreadCopy1 : ', JSON.stringify(spreadCopy1)); // {"a":1,"b":{"c":3}}
  console.log('spreadCopy2 : ', JSON.stringify(spreadCopy2)); // {"a":1,"b":{"c":1}}
```

---

# immer.js
- state update가 까다올때 사용
- 불변성을 유지하는 코드가 복잡할 때만 사용하는것을 추천
- `yarn add immer`

***

### immer 사용법
```js
import produce from 'immer';
```

```js
 const state = {
    number: 1,
    dontChangeMe: 2,
  };

  const nextState = produce(state, (draft) => {
    draft.number += 1;
    draft.dontChangeMe = 12;
  });

  console.log(state);     // {number: 1, dontChangeMe: 2}
  console.log(nextState); //{number: 2, dontChangeMe: 12}
```

***

### immer 사용법(In reducer)
```js
function reducer(state, action)
{
	switch(action.type){
    	case 'CREATE_USER':
        	return produce(state, draft => {
            	draft.users.push(action.user);
        });
    }
}
```

- immer가 알아서 불변성 유지를 해주기 때문에 push함수 사용 가능

---

# react-virtualized를 사용한 렌더링 최적화
- `yarn add react-virtualized`
