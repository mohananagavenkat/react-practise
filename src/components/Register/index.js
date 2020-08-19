import React, { Component } from 'react'

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className='card card-body w-50 mx-auto mt-5 registerForm authForm'>
        <h2 className="text-center">Register</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" name='name' className="form-control" id="name" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' className="form-control" id="email" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' className="form-control" id="password" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name='confirmPassword' className="form-control" id="confirmPassword" onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    )
  }
}
