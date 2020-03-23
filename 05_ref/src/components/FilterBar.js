import React,{Component, createRef} from 'react';

class FilterBar extends Component {

    inputRef = createRef();
    tempval = '';
  
    handleClear = () => {
      // clear the input
      this.inputRef.current.value = '';
      console.log("this.inputRef.current") ;
      console.log(this.inputRef.current) ;
      console.log("this.inputRef.current.value") ;
      console.log(this.inputRef.current.value) ;
  
      const someState = {};
      this.setState(
        someState,
        () => {
          this.inputRef.current.select(); // focus the input
        }
      );
    };
  
    render() {
      return (
        <>
          <input ref={this.inputRef} type="text" />
          <button onClick={this.handleClear}>버튼</button>
          {/* ... */}
        </>
      );
    }
  }
  
  export default FilterBar;