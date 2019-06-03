import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NavBarPrivate from './components/NavBarPrivate';
import NavBarPublic from './components/NavBarPublic';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddFoodRecord from './components/AddFoodRecord';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
const usdaApiKey = 'OD6vNuSSaTnRUYMo3feYXbE8gdn1MTpf4ZqJ3OYi'

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
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      navbar: null,
      apiUrl: '//localhost:5000'//'//nutrition-plan-api.herokuapp.com'
    }
  }

  setUser(e) {
    if (e === null) {
      this.setState({ user: {} })}
    else {
      this.setState({ user: e.user })
    }
  }

  componentDidMount() {
    if (this.state.user) {
      this.setState({
        navbar: <NavBarPrivate />,
        apiKey: usdaApiKey
      })
    } else {
      this.setState({
        navbar: <NavBarPublic />,
        apiKey: usdaApiKey
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider theme = { theme }>
        <div className="App">
          <header className="head">
            {this.state.navbar}
          </header>
          <main>
            <Route exact path='/' component={ Home } />
            <Route path='/dashboard'
              render={(props) => <Dashboard {...props}
                user={this.state.user}
              />}
            />
            <Route path='/signin'
              render={(props) => <SignIn {...props}
                apiUrl={this.state.apiUrl}
                setUser={(e) => this.setUser(e)}
              />}
            />
            <Route path='/signup'
              render={(props) => <SignUp {...props}
                apiUrl={this.state.apiUrl}
                setUser={(e) => this.setUser(e)}
              />}
            />
            <Route path='/addfood'
              render={(props) => <AddFoodRecord {...props}
                user={this.state.user}
                apiKey={this.state.apiKey}
                apiUrl={this.state.apiUrl}
              />}
            />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
