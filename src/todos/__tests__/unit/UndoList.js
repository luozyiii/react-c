import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '@jest/globals';

import { findTestWrapper } from '../../../utils/testUtils';

import UndoList from '../../components/UndoList';

describe('UndoList 组件', () => {
  it('列表数据为空数组时， count 数目为0，列表无内容', () => {
    const wrapper = shallow(<UndoList list={[]} />);
    const countElem = findTestWrapper(wrapper, 'count');
    const listItem = findTestWrapper(wrapper, 'list-item');
    expect(countElem.text()).toEqual('0');
    expect(listItem.length).toEqual(0);
  });

  it('列表数据有内容时， count 数目显示数据长度，列表不为空', () => {
    const listData = ['学习Jest', '学习React组件', '学习TDD'];
    const wrapper = shallow(<UndoList list={listData} />);
    const countElem = findTestWrapper(wrapper, 'count');
    const listItem = findTestWrapper(wrapper, 'list-item');
    expect(countElem.text()).toEqual('3');
    expect(listItem.length).toEqual(3);
  });

  it('列表数据有内容时， 存在删除按钮', () => {
    const listData = ['学习Jest', '学习React组件', '学习TDD'];
    const wrapper = shallow(<UndoList list={listData} />);
    const deleteItem = findTestWrapper(wrapper, 'delete-item');
    expect(deleteItem.length).toEqual(3);
  });

  it('列表数据有内容时， 点击某个删除按钮，会调用删除方法', () => {
    const listData = ['学习Jest', '学习React组件', '学习TDD'];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />);
    const deleteItem = findTestWrapper(wrapper, 'delete-item');
    deleteItem.at(index).simulate('click');
    expect(fn).toHaveBeenLastCalledWith(index);
  });
});
