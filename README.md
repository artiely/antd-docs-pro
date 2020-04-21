# 快速上手
## 安装主题
使用 `yarn` 安装 AntDocs-pro 主题：
```sh
yarn add vuepress-theme-antdocs-pro
```
或者使用 npm 安装它：
```sh
npm i vuepress-theme-antdocs-pro
```

## 引用主题
打开 `.vuepress/config.js` 文件，然后在合适位置引用它：
```js
module.exports = {
  ...
  theme: 'antdocs',
  ...
}
```
如果你对 `VuePress` 主题配置不是很了解，请点这里：使用主题

配置完毕后，你就可以直接 `yarn run docs:dev` 或 `npm run docs:dev` 查看效果。
