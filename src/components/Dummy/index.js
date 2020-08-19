import React, { Component } from 'react'
import Dummy2 from '../Dummy2';

class Dummy extends Component {
  state = {
    users: []
  }

  handleClick = () => {
    this.setState(pState => ({ users: [...pState.users, 'User' + Math.random()] }))
  }

  render() {
    console.log('dummy1 render');
    return (
      <div>
        <h2>This is a dummy component.</h2>
        <button onClick={this.handleClick}>Add user</button>
        <Dummy2 />
      </div>
    )
  }
  componentDidUpdate() {
    console.log('this is dummy1 update');
  }
}

export default Dummy
