import React, { useState } from 'react';
import { Button } from 'antd';
const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url: 'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'A complete React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
];
function CanRomoveList() {
  const [list, setList] = useState(INITIAL_LIST);
  function onReomove(id: string) {
    const newList = list.filter(item => item.id != id);
    setList(newList);
  }
  const onAdd = () => {
    setList([
      ...list,
      {
        id: Math.random() * 30 + '',
        title: 'A complete React with Apollo and GraphQL Tutorial',
        url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
      },
    ]);
  };
  return (
    <>
      <ul>
        {list.map(item => (
          <li key={item.id} style={{ margin: '10px' }}>
            <a href={item.url}>{item.title}</a>
            <Button
              style={{ marginLeft: '10px' }}
              onClick={() => {
                onReomove(item.id);
              }}
            >
              点击删除这个list元素
            </Button>
          </li>
        ))}
      </ul>
      <Button
        style={{ marginLeft: '10px' }}
        onClick={() => {
          onAdd();
        }}
      >
        点击添加一个元素
      </Button>
    </>
  );
}

export default CanRomoveList;
