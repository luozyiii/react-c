# react-c

React 组件库开发, rollup 负责构建；enzyem + jest 负责前端自动化测试；.prettierrc + vscode 自定义工作区, 保持代码风格一致。

### react 前端自动化测试

- [jest](https://jestjs.io/zh-Hans/)
- [enzyme](https://github.com/enzymejs/enzyme)
- [jest-enzyme](https://github.com/enzymejs/enzyme-matchers/tree/master/packages/jest-enzyme)

```javascript
yarn add jest -D

// package.json
"test": "jest"

// 自定义 jest 配置
yarn jest --init

// react 相关的
yarn add enzyme enzyme-adapter-react-16 -D

// jest-enzyme 需配置jest.config.js
yarn add jest-enzyme -D
// jest.config.js
setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js'],

```

- jest 模拟 css 模块

```javascript
yarn add identity-obj-proxy -D

// jest.config.js
moduleNameMapper: {
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/__mocks__/fileMock.js',
  '\\.(css|less)$': 'identity-obj-proxy',
},
```

### jest 如何测试 hooks？

> 测试有返回值的 hook

- @testing-library/react

```javascript
yarn add --dev @testing-library/react
```

### 简单示例 Hello 组件

```javascript
// src/components/hello
```

### 项目指令说明

```javascript
// demo 打包后，配合 npm 包 serve 在本地构建服务器, 浏览器访问 example
yarn dev:demo
serve ./

// 组件测试开发
yarn dev
// 组件打包,不压缩
yarn build
// 组件打包，压缩，正式环境
yarn build:prod

// 前端测试自动化
yarn test
```
