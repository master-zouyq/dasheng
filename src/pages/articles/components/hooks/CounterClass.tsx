import React, { Component } from 'react';

class CounterClass extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <p>你点击了{this.state.count}次</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          点击+1
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          点击-1
        </button>
      </div>
    );
  }
}
export default CounterClass;
