import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

import { findTestWrapper } from '../../../utils/testUtils';
import Todos from '../../index';

it(`
  1. Header 输入框输入内容
  2. 点击回车
  3. 列表展示用户输入的内容
`, () => {
  const wrapper = mount(<Todos />);
  const inputElem = findTestWrapper(wrapper, 'header-input');
  const content = 'Dell Less';
  inputElem.simulate('change', {
    target: { value: content },
  });
  inputElem.simulate('keyUp', {
    keyCode: 13,
  });
  const listItem = findTestWrapper(wrapper, 'list-item');
  expect(listItem.length).toEqual(1);
  expect(listItem.text()).toContain(content);
});
