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

  it('addUndoItem 被调用，undoList 数据线增加', () => {
    const wrapper = shallow(<Todos />);
    const { addUndoItem } = wrapper.instance();
    const content = '学习React';
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toBe(content);
    addUndoItem(content);
    expect(wrapper.state('undoList').length).toBe(2);
  });

  it('UndoList 组件应该接收 list 和 deleteItem 两个参数', () => {
    const wrapper = shallow(<Todos />);
    const UndoList = wrapper.find('UndoList');
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deleteItem')).toBeTruthy();
  });

  it('deleteItem 方法被调用，undoList 数据项被删除', () => {
    const wrapper = shallow(<Todos />);
    const data = ['学习Jest', '学习React组件', '学习TDD'];
    wrapper.setState({
      undoList: data,
    });
    wrapper.instance().deleteItem(1);
    expect(wrapper.state('undoList')).toEqual([data[0], data[2]]);
  });
});
