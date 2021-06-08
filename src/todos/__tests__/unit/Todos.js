import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '@jest/globals';

import Todos from '../../index';

Enzyme.configure({ adapter: new Adapter() });

it('Todos 初始化列表为空', () => {
  // const wrapper = shallow(<Todos />);
  // expect(wrapper.state('undoList')).toEqual([]);
});

// it('Todos 应该给 Header 传递一个增加 undoList 内容的方法', () => {
//   const wrapper = shallow(<Todos />);
//   const Header = wrapper.find('Header');
//   expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem);
// });

// it('当 Header 回车时，undoList 应该新增内容', () => {
//   const wrapper = shallow(<Todos />);
//   const Header = wrapper.find('Header');
//   const addFunc = Header.prop('addUndoItem');
//   addFunc('学习React');
//   expect(wrapper.state('undoList').length).toBe(1);
//   expect(wrapper.state('undoList')[0]).toBe('学习React');
// });
