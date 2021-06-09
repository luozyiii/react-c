import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '@jest/globals';
import { findTestWrapper } from '../../../utils/testUtils';
import Header from '../../components/Header';

describe('Header 组件', () => {
  it('渲染样式正常', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('组件包含输入框', () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, 'input');
    expect(inputElem.length).toBe(1);
  });

  it('输入框内容，初始化为空', () => {
    const wrapper = shallow(<Header />);
    const inputElem = findTestWrapper(wrapper, 'input');
    expect(inputElem.prop('value')).toEqual('');
  });

  it('输入框内容，随用户输入变化', () => {
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

  it('输入框无内容时，触发回车事件，无反应', () => {
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

  it('输入框有内容回车事件被触发时，外部传入的函数被调用， 内容清空', () => {
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

    const newInputElem = wrapper.find('[data-test="input"]');
    expect(newInputElem.prop('value')).toBe('');
  });
});
