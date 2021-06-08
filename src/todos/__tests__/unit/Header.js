import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '@jest/globals';

import Header from '../../components/Header';

Enzyme.configure({ adapter: new Adapter() });

it('Header 组件包含一个 input 框', () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find('[data-test="input"]');
  expect(inputElem.length).toBe(1);
});

it('Header 组件 input 框内容，初始化应该为空', () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find('[data-test="input"]');
  expect(inputElem.prop('value')).toEqual('');
});

it('Header 组件 input 框内容，当用户输入时，会跟随变化', () => {
  const wrapper = shallow(<Header />);
  const inputElem = wrapper.find('[data-test="input"]');
  const userInput = '今天要学习 Jest';
  inputElem.simulate('change', {
    target: { value: userInput },
  });
  // expect(wrapper.state('value')).toEqual(userInput); // state 只能在class 组件中使用
  const newInputElem = wrapper.find('[data-test="input"]');
  expect(newInputElem.prop('value')).toEqual(userInput);
});

// it('Header 组件 input 框输入回车时，如果 input 无内容，无操作', () => {
//   const fn = jest.fn();
//   const wrapper = shallow(<Header />);
//   const inputElem = wrapper.find('[data-test="input"]');
//   // setState 只能在class 组件中使用
//   wrapper.setState({
//     value: '',
//   });
//   inputElem.simulate('keyUp', {
//     keyCode: 13,
//   });
//   expect(fn).not.toHaveBeenCalled();
// });

// it('Header 组件 input 框输入回车时，如果 input 无内容，函数应该被调用', () => {
//   const fn = jest.fn();
//   const wrapper = shallow(<Header />);
//   const inputElem = wrapper.find('[data-test="input"]');
//   const userInput = '学习 React';
//   // setState 只能在class 组件中使用
//   wrapper.setState({
//     value: userInput,
//   });
//   inputElem.simulate('keyUp', {
//     keyCode: 13,
//   });
//   expect(fn).toHaveBeenCalled();
//   expect(fn).toHaveBeenLastCalledWith(userInput);
// });
