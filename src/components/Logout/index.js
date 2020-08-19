import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from '../Loader';

class Logout extends Component {

  // componentDidMount() {

  //   this.setState({
  //     redirect: true
  //   });

  // }

  render() {
    const { dispatch, } = this.props;
    dispatch({ type: 'LOGOUT' });
    window.location.pathname = '/';
    return <Loader />;
  }
}

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(null, mapDispatchToProps)(Logout);
