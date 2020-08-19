import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, getProfile } from '../../actions/auth.action'
import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    const { login } = this.props;
    e.preventDefault();
    console.log({ ...this.state });
    login({ ...this.state });
  }

  componentDidMount() {
    const { getProfile, isAuthenticated, loading } = this.props;
    if (!loading && !isAuthenticated && localStorage.getItem("token") !== null) {
      getProfile();
    }
  }

  render() {
    const { isAuthenticated, loading } = this.props;
    const { email, password } = this.state;
    if (isAuthenticated) {
      return <Redirect to={'/'} />
    }
    return (
      <div className='card card-body w-50 mx-auto mt-5 loginForm authForm'>
        <h2 className="text-center">Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" name='email' className="form-control" id="email" required onChange={this.handleInputChange} value={email} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' className="form-control" id="password" required onChange={this.handleInputChange} value={password} />
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary w-100">{loading ? 'Logging In...' : 'Submit'}</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { isAuthenticated, loading, errors } = auth;
  return {
    loading,
    isAuthenticated,
    errors
  }
}

export default connect(mapStateToProps, { login, getProfile })(Login);