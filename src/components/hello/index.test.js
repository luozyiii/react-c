import React from 'react';
import Hello from './index';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from '@jest/globals';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<Hello />);
  expect(wrapper.find('[data-test="hello"]').length).toBe(1);

  // toExist 是jest-enzyme 的匹配器
  expect(wrapper.find('[data-test="hello"]')).toExist();

  // toHaveText
  expect(wrapper.find('[data-test="hello"]')).toHaveText('hello, this is React Component');

  // 快照
  expect(wrapper).toMatchSnapshot();
});
