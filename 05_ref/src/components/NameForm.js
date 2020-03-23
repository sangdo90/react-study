import React from 'react';


/* 
비제어 컴포넌트 ( uncontrolled component ) - 비제어 컴포넌트는 DOM 자체에서 폼 데이터가 다루어진다.
DOM 노드에 ref 를 주고서 폼 값을 가져온다.
상태 업데이트에 대한 이벤트 핸들러를 작성하지 않고 DOM이 폼 데이터를 다룸.
*/
class NameForm extends React.Component {

    input = React.createRef();
  
    handleSubmit = event => {
      alert('A name was submitted: ' + this.input.current.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default NameForm;