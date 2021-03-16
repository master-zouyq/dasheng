import React, { Component, useState } from 'react';
import { Button } from 'antd';

export default function CounterFunc() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击了{count}次</p>
      <Button
        style={{ marginLeft: '10px' }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击+1
      </Button>
      <Button
        style={{ marginLeft: '10px' }}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        点击-1
      </Button>
    </div>
  );
}
