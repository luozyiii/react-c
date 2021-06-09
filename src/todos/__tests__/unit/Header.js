import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '@jest/globals';
import { findTestWrapper } from '../../../utils/testUtils';
import Header from '../../components/Header';

it('Header 渲染样式正常', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

it('Header 组件包含一个 input 框', () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, 'input');
  expect(inputElem.length).toBe(1);
});

it('Header 组件 input 框内容，初始化应该为空', () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, 'input');
  expect(inputElem.prop('value')).toEqual('');
});

it('Header 组件 input 框内容，当用户输入时，会跟随变化', () => {
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, 'input');
  const userInput = '今天要学习 Jest';
  inputElem.simulate('change', {
    target: { value: userInput },
  });
  // expect(wrapper.state('value')).toEqual(userInput); // state 只能在class 组件中使用
  const newInputElem = wrapper.find('[data-test="input"]');
  expect(newInputElem.prop('value')).toEqual(userInput);
});

it('Header 组件 input 框输入回车时，如果 input 无内容，无操作', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElem = findTestWrapper(wrapper, 'input');
  // setState 只能在class 组件中使用
  wrapper.setState({
    value: '',
  });
  inputElem.simulate('keyUp', {
    keyCode: 13,
  });
  expect(fn).not.toHaveBeenCalled();
});

it('Header 组件 input 框输入回车时，如果 input 有内容，函数应该被调用', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header addUndoItem={fn} />);
  const inputElem = findTestWrapper(wrapper, 'input');
  const userInput = '学习 React';
  // setState 只能在class 组件中使用
  wrapper.setState({
    value: userInput,
  });
  inputElem.simulate('keyUp', {
    keyCode: 13,
  });
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenLastCalledWith(userInput);
});

it('Header 组件 input 框输入回车时，如果 input 无内容，最后应该清除掉', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Header />);
  const inputElem = findTestWrapper(wrapper, 'input');
  const userInput = '';
  // setState 只能在class 组件中使用
  wrapper.setState({
    value: userInput,
  });
  inputElem.simulate('keyUp', {
    keyCode: 13,
  });
  const newInputElem = wrapper.find('[data-test="input"]');
  expect(newInputElem.prop('value')).toBe('');
});
