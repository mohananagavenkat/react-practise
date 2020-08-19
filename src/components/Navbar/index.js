import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    const { menuItems } = this.props;
    // console.log(this.props);
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
          <ul className="navbar-nav ml-auto">
            {
              menuItems.map(item => {
                return <li key={item.link} className={item.active === true ? 'nav-item active' : 'nav-item'}>
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

// const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
//   isAuthenticated,
// })

// export default connect(mapStateToProps, null)(Navbar);