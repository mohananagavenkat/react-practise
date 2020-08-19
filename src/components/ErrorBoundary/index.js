import React, { Component } from 'react'

class ErrorBoundary extends Component {

  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    console.log('ComponentDidCatch', error, info);
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h2>{errorMessage}</h2>
    } else {
      return children
    }
  }
}

export default ErrorBoundary
