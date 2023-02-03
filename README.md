## Hello react-sign2!

简单轻量的电子签名组件, 轻松定制可扩展的电子签名.

### Install | 安装

```bash
yarn add react-sign2
```

### Use | 使用

```js
import React from 'react';
import Editor from 'h5-dooring/Editor';
import Sign from 'react-sign2';

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

### 演示 | Demo

<a href="http://h5.dooring.cn/react-sign">Demo</a>

### 更多产品推荐 | More Production

| name                                                                              | Description                                                                             |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [H5-Dooring](https://github.com/MrXujiang/h5-Dooring)                             | 让 H5 制作像搭积木一样简单, 轻松搭建 H5 页面, H5 网站, PC 端网站, LowCode 平台.         |
| [V6.Dooring](https://github.com/MrXujiang/v6.dooring.public)                      | 可视化大屏解决方案, 提供一套可视化编辑引擎, 助力个人或企业轻松定制自己的可视化大屏应用. |
| [dooring-electron-lowcode](https://github.com/MrXujiang/dooring-electron-lowcode) | 基于 electron 的 H5-Dooring 编辑器桌面端.                                               |
| [xijs](https://github.com/MrXujiang/xijs)                             | 开箱即用的js业务工具库                                                            |
| [DooringX](https://github.com/H5-Dooring/dooringx)                                | 快速高效搭建可视化拖拽平台.                                                             |

## 赞助 | Sponsored

开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## 技术反馈和交流群 | Technical feedback and communication

微信：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />
