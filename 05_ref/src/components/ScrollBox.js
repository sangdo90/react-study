import React, { Component } from "react";
class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* TIP: ES6 문법 - 비구조화 할당
    const scrollHeight = this.box.scrollHeight;
    const clientHeight = this.box.cliengHeight;
    */


    /* TIP:
    scrollTop : 세로 스크롤바 위치 (0 ~ 700 px) 
    scrollHeight : 스크롤이 있는 박스 안에서 div의 높이 (1400px) == 전체 높이
    clientHeight : 스크롤이 있는 박스 높이 (700px) == 눈에 보이는 만큼 높이
     */
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "400px",
      width: "600px",
      overflow: "auto",
      position: "relative"
    };
    const innerStyle = {
      width: "100%",
      height: "1400px",
      background: "linear-gradient(white, black)"
    };
    return (
      <div
        style={style}
        ref={ref => {this.box=ref}}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default ScrollBox;
