import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';

import Navbar from './';

describe('Navbar Component', () => {

  let wrapper;
  const menuItems = [
    {
      text: 'Home',
      link: '/home',
      exact: true,
      secure: false,
    },
    {
      text: 'Login',
      link: '/login',
      exact: true,
      secure: false,
    },
    {
      text: 'Register',
      link: '/register',
      exact: true,
      secure: false,
    },
  ]

  beforeEach(() => {
    wrapper = shallow(<Navbar menuItems={[]} />)
  })

  it('Should render', () => {
    expect(wrapper.length).toBe(1);
  })

  it('Contain no links', () => {
    const links = findByTestAttr(wrapper, 'navLink');
    console.log(links);
    expect(links.length).toBe(0);
  })

  it('Should contain links for given menuItems', () => {
    wrapper.setProps({
      menuItems
    });
    const links = findByTestAttr(wrapper, 'navLink');
    console.log(links.debug());
    expect(links.length).toBe(menuItems.length);
  })

  it('Should give warning message if props are not passed properly', () => {
    const propError = checkProps(Navbar, menuItems);
    expect(propError).toBeDefined();
  })

  it('Should not give warning message if props are passed properly', () => {
    const props = {
      menuItems: menuItems.map(item => {
        item.component = Navbar;
        return item;
      }),
      something:'something'
    }
    menuItems['something'] = 'something';
    const propError = checkProps(Navbar, props);
    expect(propError).toBeUndefined();
  })


});