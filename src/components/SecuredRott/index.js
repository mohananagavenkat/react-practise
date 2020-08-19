import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class SecuredRoot extends Component {
  render() {
    console.log(this.props);
    const { isAuthenticated, component: Component, ...props } = this.props;
    console.log(isAuthenticated, Component);
    return isAuthenticated ? <Component {...props} /> : <Redirect to='/home' />;
  }
}

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated } = auth;
  return {
    isAuthenticated,
  }
}

export default connect(mapStateToProps, null)(SecuredRoot);