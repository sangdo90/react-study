---
marp: true
theme: custom
paginate: true
auto-scaling: true
---

# Hooks 

---

# Hooks
- React 16.8 버전에 새로 추가
- 클래스 컴포넌트를 작성하지 않아도 state와 같은 특징을 사용할 수 있음

---
# useState 
- 가장 기본적인 hook이며 가변적인 상태를 지닐 수 있게 해줌
- 사용법
  - `const [state, setState] = useState(initialState);`


``` javaScript
import React, { useState } from 'react';

function Example() {
  // 새로운 state 변수를 선언하고, count라 부르겠습니다.
  const [count, setCount] = useState(0); // 상태의 기본값을 설정

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}							         			                                    
```
***
## useState 여러번 사용
``` javaScript

```

---
# useEffect
- 리액트 컴포넌트가 렌더링될 때마다 특저 작업을 수행하도록 설정할 수 있는 Hook
- 클래스형 컴포넌트의 **componentDidMount**, **componentDidUpdate**, **componentWillUnmount** 합친 기능과 비슷함
- Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component
- 사용법
  - `useEffect(didUpdate);`

***
### 마운트 될 때만 실행 하고 싶을 때
- 맨 처음 렌더링 될 때만 실행하고, 업데이이트 될 때는 실핼 할 경우
  
```javaScript
useEffect(()=>{
	console.log('마운트 될 경우에만 실행');
}, []); // 두 번째 파라미터로 비어 있는 배열을 넣어줌
```

***

### <!-- fit --> 특정값이 업데이트 될 때만 실행 하고 싶을 때
<!-- _class: split -->

<div class=ldiv>

#### 클래스형 컴포넌트
``` javaScript
componentDidUpdate(prevProps, prevState) {
	if( prevProps.value !== this.props.value) {
		// do something...
	}
}
``` 
</div>
<div class=rdiv>

#### 함수형 컴포넌트
``` javaScript
useEffect(()=>{
	console.log('업데이트 될 경우에만 실행');
}, [name]);

``` 
</div>

***

### 정리(clean_up)를 이용하는 Effects
- 외부데이터에 subscription을 설정해야 하는 경우  메모리  누수가 발생하지 않도록 clean-up 하는 것이 중요함
``` javaScript
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // effect 이후에 어떻게 정리(clean-up)할 것인지 표시합니다.
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}																	
```
  

---

# useReducer
- useState의 대체 함수
- 사용법
  - <span style="font-size:90%">`const [state, dispatch] = useReducer(reducer, initialArg, init);` </span>

---

# useCallback
- 사용법
``` javaScript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

---

# useRef
- 사용법
  - `const refContainer = useRef(initialValue);`


---

# custom Hooks
**제목** 
- 내용 
- 내용

---

# 이외의 다양한 Hooks

- [ https://github.com/rehooks/awesome-react-hooks ](https://github.com/rehooks/awesome-react-hooks)
- [ https://nikgraf.github.io/react-hooks) ](https://nikgraf.github.io/react-hooks/)

