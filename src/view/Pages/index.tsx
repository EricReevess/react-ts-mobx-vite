import React, { useState } from 'react';
import cs from 'classnames';
import Tab, { TabItem } from '@src/components/Tab';

import { useLRU } from './hooks';

export type Props = {
  style?: React.CSSProperties;
  className?: string;
}

const TAB_DATA: TabItem[] = [
  {
    id: '1',
    name: '页面1',
    content: 'page1',
  },
  {
    id: '2',
    name: '页面2',
    content: 'page2',
  },
  {
    id: '3',
    name: '页面3',
    content: 'page3',
  },
  {
    id: '4',
    name: '页面4',
    content: 'page4',
  },
  {
    id: '5',
    name: '页面5',
    content: 'page5',
  },
  {
    id: '6',
    name: '页面6',
    content: 'page6',
  },
  {
    id: '7',
    name: '页面7',
    content: 'page7',
  },
  {
    id: '8',
    name: '页面8',
    content: 'page8',
  },
  {
    id: '9',
    name: '页面9',
    content: 'page9',
  },
  {
    id: '10',
    name: '页面10',
    content: 'page10',
  },
];

function Pages({ style, className }: Props): JSX.Element {
  const [currentKey, setCurrentKey] = useState<React.Key>('1');
  const [lruArray, get, set, lruCacheKeys] = useLRU<string>();
  return (
    <div style={style} className={cs(className)}>
      <Tab
        className="mr-20 flex-2"
        contentClassName="rounded-12 rounded-tl-none"
        currentKey={currentKey}
        onChange={(key) => {
          if (lruCacheKeys.includes(key)) {
            get(key);
          } else {
            set(key, key);
          }
          setCurrentKey(key);
        }}
        items={TAB_DATA}
      />
      <div>
        <span>最近浏览</span>
        <div>
          {
            lruArray.map(({ key, value }) => (
              <span key={key}>{key}</span>
            ))
          }
        </div>
      </div>
    </div>

  );
}

export default Pages;
