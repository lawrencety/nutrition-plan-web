import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      showPassword: false
    }
  }

  handleChange(prop, e) {
    this.setState({ [prop]: e.target.value });
  }

  handleClickShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newUser = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password
    }
    const url = this.props.apiUrl + '/users/signup'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newUser),
      credentials: 'include',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      res.json()
    })
    .then((response) => {
      console.log('Success:', JSON.stringify(response));
      this.props.setUser(response);
    })
    .catch((err) => {
      console.log('Error:', err)
    });
  }

  render() {
    return (
      <section className="home">
        <div className="hero">
          <Card className="home-card">
            <CardContent>
              <Typography variant="headline">Sign Up</Typography>
            </CardContent>
            <CardActions>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <FormControl>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input id="email" placeholder= "Enter Email" value={this.state.email} onChange={(e) =>this.handleChange("email", e)} />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                  <Input id="firstName" placeholder= "Enter First Name" value={this.state.firstName} onChange={(e) =>this.handleChange("firstName", e)} />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="firstName">Last Name</InputLabel>
                  <Input id="lastName" placeholder= "Enter Last Name" value={this.state.lastName} onChange={(e) =>this.handleChange("lastName", e)} />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input id="password" placeholder= "Enter Password" type={this.state.showPassword ? 'text' : 'password'} value={this.state.password} onChange={(e) => this.handleChange("password", e)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="Toggle password visibility" onClick={() => this.handleClickShowPassword()}>
                          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                <Button type="submit" variant="contained" color="primary">Sign Up</Button>
                </FormControl>
              </form>
            </CardActions>
          </Card>
        </div>
      </section>
    )
  }
}


export default SignUp;
