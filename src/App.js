import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NavBarPrivate from './components/NavBarPrivate';
import SignUp from './components/SignUp';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey,
    error: pink,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme = { theme }>
        <div className="App">
          <header className="head">
            <NavBarPrivate />
            <h1 className="page-title">My Jams</h1>
          </header>
          <main>
            <Route exact path='/' component={ Home } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route path='/signup' component={ SignUp } />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
