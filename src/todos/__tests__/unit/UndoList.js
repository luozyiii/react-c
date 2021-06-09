import React from 'react';
import { shallow } from 'enzyme';
import { expect } from '@jest/globals';

import { findTestWrapper } from '../../../utils/testUtils';

import UndoList from '../../components/UndoList';

describe('UndoList 组件', () => {
  it('渲染样式正常', () => {
    const wrapper = shallow(<UndoList list={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('列表数据为空数组时， count 数目为0，列表无内容', () => {
    const wrapper = shallow(<UndoList list={[]} />);
    const countElem = findTestWrapper(wrapper, 'count');
    const listItem = findTestWrapper(wrapper, 'list-item');
    expect(countElem.text()).toEqual('0');
    expect(listItem.length).toEqual(0);
  });

  it('列表数据有内容时， count 数目显示数据长度，列表不为空', () => {
    const listData = [
      { status: 'div', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const countElem = findTestWrapper(wrapper, 'count');
    const listItem = findTestWrapper(wrapper, 'list-item');
    expect(countElem.text()).toEqual('3');
    expect(listItem.length).toEqual(3);
  });

  it('列表数据有内容时， 存在删除按钮', () => {
    const listData = [
      { status: 'div', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const deleteItem = findTestWrapper(wrapper, 'delete-item');
    expect(deleteItem.length).toEqual(3);
  });

  it('列表数据有内容时， 点击某个删除按钮，会调用删除方法', () => {
    const listData = [
      { status: 'div', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList deleteItem={fn} list={listData} />);
    const deleteItem = findTestWrapper(wrapper, 'delete-item');
    deleteItem.at(index).simulate('click');
    expect(fn).toHaveBeenLastCalledWith(index);
  });

  it('当某一项被点击时，触发 执行 changeStatus 函数', () => {
    const listData = [
      { status: 'div', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList changeStatus={fn} list={listData} />);
    const listItem = findTestWrapper(wrapper, 'list-item');
    listItem.at(index).simulate('click');
    expect(fn).toHaveBeenLastCalledWith(index);
  });

  it('当某一项状态是 input 时，展示输入框', () => {
    const listData = [
      { status: 'input', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const inputItem = findTestWrapper(wrapper, 'input');
    expect(inputItem.length).toBe(1);
  });

  it('当某一输入框失去焦点时，触发执行 handleBlur 函数', () => {
    const listData = [
      { status: 'input', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    const fn = jest.fn();
    const wrapper = shallow(<UndoList handleBlur={fn} list={listData} />);
    const inputItem = findTestWrapper(wrapper, 'input');
    inputItem.simulate('blur');
    expect(fn).toHaveBeenLastCalledWith(0);
  });

  it('当某一输入框变更时，触发执行 changeValue 函数', () => {
    const listData = [
      { status: 'input', value: '学习Jest' },
      { status: 'div', value: '学习React组件' },
      { status: 'div', value: '学习TDD' },
    ];
    const value = '学习BDD';
    const fn = jest.fn();
    const wrapper = shallow(<UndoList changeValue={fn} list={listData} />);
    const inputItem = findTestWrapper(wrapper, 'input');
    inputItem.simulate('change', {
      target: { value },
    });
    expect(fn).toHaveBeenLastCalledWith(0, value);
  });
});
