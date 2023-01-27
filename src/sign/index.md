### 基本使用

```tsx
import React from 'react';
import Editor from '../../Editor';
import Sign from './';

export default () => {
  const config = {
    width: 400,
    height: 200,
    lineWidth: 4,
    strokeColor: 'red',
    lineCap: 'round',
    lineJoin: 'round',
    bgColor: 'transparent',
    showBtn: true
  }
  return (
    <Editor initValue={config}>
      {(config) => {
        return <Sign {...config} onDrawEnd={(c) => console.log(c)} />;
      }}
    </Editor>
  );
};
```

<API></API>
