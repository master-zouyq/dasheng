import React, { Component } from 'react';
import { Button } from 'antd';

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
        <Button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          点击+1
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          点击-1
        </Button>
      </div>
    );
  }
}
export default CounterClass;
