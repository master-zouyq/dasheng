//react markdown preview
import React from 'react';
import CodePreivew from '@uiw/react-code-preview';
import ReactMarkdown from 'react-markdown';
import { message, Button } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';
import { Tween } from 'react-gsap';
import styles from './index.less';

const dependencise = {
  useState: React.useState,
  useEffect: React.useEffect,
  useLayoutEffect: React.useLayoutEffect,
  useMemo: React.useMemo,
  useCallback: React.useCallback,
  useImperativeHandle: React.useImperativeHandle,
  memo: React.memo,
  useRef: React.useRef,
  useReducer: React.useReducer,
  useContext: React.useContext,
  message,
  Button,
};
export default () => {
  const content = require('./index.md');
  return (
    <div className={styles.wrapper}>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            return (
              <>
                <SyntaxHighlighter language="tsx" children={String(children)} />
                {className !== 'lalanguage-ignorenge' && (
                  <CodePreivew
                    dependencies={dependencise}
                    code={`${String(children)}\n 
                    ReactDOM.render(<Component/>,_mount_);`}
                  />
                )}
              </>
            );
          },
        }}
        remarkPlugins={[gfm]}
      >
        {content.default}
      </ReactMarkdown>
    </div>
  );
};
