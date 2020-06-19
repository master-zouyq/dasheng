import React, { Component, useState } from 'react';

export default function CounterFunc() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击了{count}次</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击+1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        点击-1
      </button>
    </div>
  );
}
