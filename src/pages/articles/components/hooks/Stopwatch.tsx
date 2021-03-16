import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

export default function Stopwatch() {
  const [isON, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);
  //在useEffect中加载的定时器或者监听器，可以返回一个函数用于清除。这样当组件卸载的时候监听器会被卸载
  useEffect(() => {
    let interval: any;
    if (isON) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isON]);
  return (
    <div>
      <div>{timer}</div>
      {!isON && (
        <Button style={{ marginLeft: '10px' }} onClick={() => setIsOn(true)}>
          开始
        </Button>
      )}
      {isON && (
        <Button
          style={{ marginLeft: '10px' }}
          onClick={() => {
            setIsOn(false);
          }}
        >
          关闭
        </Button>
      )}
      <Button
        style={{ marginLeft: '10px' }}
        disabled={timer <= 0}
        onClick={() => {
          setIsOn(false);
          setTimer(0);
        }}
      >
        重置
      </Button>
    </div>
  );
}
