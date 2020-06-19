import React, { useState } from 'react';
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
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
          <button
            onClick={() => {
              onReomove(item.id);
            }}
          >
            点击删除这个list元素
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CanRomoveList;
