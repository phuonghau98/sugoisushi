import React, { Component, Fragment } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Fetch from './components/Fetch';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Fragment >
            <Route exact path="/" component={Landing}/>
            <Route path="/fetch" component={Fetch} />
        </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
