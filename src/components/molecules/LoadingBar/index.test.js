import React from 'react';
import { mount } from 'enzyme';
import LoadingBar from './index';
import css from './style.css';

describe('Component', () => {
  describe('LoadingBar', () => {
    it('should render the loading bar when isPageLoading is true', () => {
      const wrapper = mount(<LoadingBar isPageLoading />);
      expect(wrapper.find(`div.${css.progressBarLoading}`)).to.have.length(1);
    });
  });
});
