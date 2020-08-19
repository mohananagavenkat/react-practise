import React, { Component } from 'react'
import Dummy from '../Dummy'
import ErrorBoundary from '../ErrorBoundary'
import Users from '../Users'

export default class Home extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>This is root page</h1>
        <p>This is some content</p>
        <Users />
        <Dummy />
      </div>
    )
  }
}