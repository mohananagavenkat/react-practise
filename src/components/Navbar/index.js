import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { menuItems } = this.props;
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <ul className="navbar-nav ml-auto">
            {
              menuItems.map(item => {
                return <li data-test="navLink" key={item.link} className={item.active === true ? 'nav-item active' : 'nav-item'}>
                  <Link className="nav-link" to={item.link}>{item.text}</Link>
                </li>
              })
            }
          </ul>
        </nav>
      </>
    )
  }
}

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
    secure: PropTypes.bool.isRequired,
    component: PropTypes.elementType.isRequired
  })),
  something: PropTypes.string.isRequired
}