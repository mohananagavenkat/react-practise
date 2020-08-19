import React from 'react';
import './App.css';
import RootPage from './pages/RootPage';
import { withRouter } from 'react-router-dom';
import Loader from './components/Loader';

const Root = withRouter(RootPage);

function App(props) {
  // return <Loader />
  return <Root />
}

export default App;
