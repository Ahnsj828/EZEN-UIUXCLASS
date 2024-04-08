// rcc
import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    // 이렇게 해야지 상속받을 수 있다
    this.state = {
      counter: 0,
      num: 1,
    };
  }

  // method 정의
  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        {/* <div>0</div> */}
        <div>{this.state.counter}</div>
        {/* 항상 클래스 컴포넌트에는 this가 있어야한다 */}
        <button onClick={this.increase}>클릭!</button>
      </div>
    );
  }
}
// return이 아니라 render
