import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="head">
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
          </nav>
          <h1 className="page-title">My Jams</h1>
        </header>
        <main>
          <Route exact path='/' component={ Home } />
          <Route path='/dashboard' component={ Dashboard } />
        </main>
      </div>
    );
  }
}

export default App;
