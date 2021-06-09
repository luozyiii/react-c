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

- jest 如何测试 hooks？

> 测试有返回值的 hook

- @testing-library/react

```javascript
yarn add --dev @testing-library/react
```

- 公用代码抽离

```javascript
// utils/testUtils.js

// utils/testSetup.js 然后在jest.config.js 配置；
// 结果：测试代码执行前, 先加载 testSetup.js
setupFilesAfterEnv: ['./node_modules/jest-enzyme/lib/index.js', '<rootDir>/src/utils/testSetup.js'],

```

### 简单示例 Hello 组件

```javascript
// src/components/hello
```

### 采用 TDD 模式开发一个 Todos 项目， 编写单元测试

```javascript
// 单元测试代码 todos/__test__/unit
// 项目代码 todos/
```

- TDD
  代码质量提高; 先写测试，再写代码。
- 单元测试
  > 适合工具函数库
  > 测试覆盖率高、业务耦合度高、代码量大、过于独立

### TDD 和集成测试

```javascript
// 集成测试代码 todos/__test__/integration
// 项目代码 todos/
```

- TDD
  先写功能模块代码，再写测试用例
- 集成测试

- jest mount Cannot read property 'child' of undefined
  [link](https://github.com/enzymejs/enzyme/issues/2429)

```javascript
// 更换包
yarn add --dev @wojtekmaj/enzyme-adapter-react-17

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
```

### TDD 与 BDD 区别

- TDD

```
1. 先写测试再写代码
2. 一般结合单元测试使用，是白盒测试
3. 测试重点在代码
4. 安全感低
5. 速度快
```

- BDD

```
1. 先写代码再写测试
2. 一般结合集成测试使用，是黑盒测试
3. 测试重点在UI（DOM）
4. 安全感高
5. 速度慢
```

### 使用 BDD 和集成测试进行 Redux 项目的测试

```javascript
yarn add redux react-redux -D
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
