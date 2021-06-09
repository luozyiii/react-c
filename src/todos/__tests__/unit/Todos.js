import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '@jest/globals';

import Todos from '../../index';

describe('Todos 组件', () => {
  it('初始化列表为空', () => {
    const wrapper = shallow(<Todos />);
    expect(wrapper.state('undoList')).toEqual([]);
  });

  it('Header 组件存在 addUndoItem 属性', () => {
    const wrapper = shallow(<Todos />);
    const Header = wrapper.find('Header');
    expect(Header.prop('addUndoItem')).toBeTruthy();
  });

  it('addUndoItem 被调用，undoList 数据项增加', () => {
    const wrapper = shallow(<Todos />);
    const { addUndoItem } = wrapper.instance();
    const content = '学习React';
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toEqual({
      status: 'div',
      value: content,
    });
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(2);
  });

  it('UndoList 组件应该接收 list, deleteItem, changeStatus, handleBlur, changeValue 5个参数', () => {
    const wrapper = shallow(<Todos />);
    const UndoList = wrapper.find('UndoList');
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deleteItem')).toBeTruthy();
    expect(UndoList.prop('changeStatus')).toBeTruthy();
    expect(UndoList.prop('handleBlur')).toBeTruthy();
    expect(UndoList.prop('changeValue')).toBeTruthy();
  });

  it('deleteItem 方法被调用，undoList 数据项被删除', () => {
    const wrapper = shallow(<Todos />);
    const data = [
      { status: 'div', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    wrapper.setState({
      undoList: data,
    });
    wrapper.instance().deleteItem(1);
    expect(wrapper.state('undoList')).toEqual([data[0], data[2]]);
  });

  it('changeStatus 方法被调用，undoList 数据项被修改', () => {
    const wrapper = shallow(<Todos />);
    const data = [
      { status: 'div', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    wrapper.setState({
      undoList: data,
    });
    wrapper.instance().changeStatus(1);
    expect(wrapper.state('undoList')[1]).toEqual({ status: 'input', value: '学习React组件' });
  });

  it('handleBlur 方法被调用，undoList 数据项status被修改', () => {
    const wrapper = shallow(<Todos />);
    const data = [
      { status: 'input', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    wrapper.setState({
      undoList: data,
    });
    wrapper.instance().handleBlur(0);
    expect(wrapper.state('undoList')[0]).toEqual({ ...data[0], status: 'div' });
  });

  it('changeValue 方法被调用，undoList 数据项 value 被修改', () => {
    const wrapper = shallow(<Todos />);
    const data = [{ status: 'input', value: '学习Jest' }];
    const value = 'dell lee';
    wrapper.setState({
      undoList: data,
    });
    wrapper.instance().changeValue(0, value);
    expect(wrapper.state('undoList')[0]).toEqual({
      ...data[0],
      value,
    });
  });
});
