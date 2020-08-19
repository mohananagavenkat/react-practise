import React, { Component } from 'react'

class Dummy2 extends Component {
  render() {
    console.log('Dummy2 render');
    return (
      <div>
        This is Dummy 2 component
      </div>
    )
  }
  componentDidUpdate() {
    console.log('this is dummy2 update');
  }
}

export default Dummy2
