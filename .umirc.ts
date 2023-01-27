import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'react-sign',
  favicon: 'http://h5.dooring.cn/uploads/logo_1742fd359da.png',
  logo: 'http://h5.dooring.cn/uploads/logo_1742fd359da.png',
  outputPath: '../../dooring-bs/server/static/react-sign',
  base: '/react-sign/',
  publicPath: '/react-sign/',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
