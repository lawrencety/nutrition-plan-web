import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
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
      credentials: 'omit',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json()
    })
    .then((response) => {
      console.log('Success:', response);
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
                <Grid container spacing={24}>
                  <Grid item xs sm={1}></Grid>
                  <Grid item xs={12} sm={5}>
                    <FormControl>
                      <TextField
                        id="firstName"
                        label="First Name"
                        style={{ margin: 0 }}
                        placeholder="Enter First Name"
                        fullWidth
                        margin="normal"
                        value={this.state.firstName}
                        onChange={(e) =>this.handleChange("firstName", e)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <FormControl>
                      <TextField
                        id="lastName"
                        label="Last Name"
                        style={{ margin: 0 }}
                        placeholder="Enter Last Name"
                        fullWidth
                        margin="normal"
                        value={this.state.lastName}
                        onChange={(e) =>this.handleChange("lastName", e)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs sm={1}></Grid>
                  <Grid item xs sm={1}></Grid>
                  <Grid item xs={12} sm={5}>
                    <FormControl>
                      <TextField
                        id="email"
                        label="Email"
                        style={{ margin: 0 }}
                        placeholder="Enter Email"
                        fullWidth
                        margin="normal"
                        value={this.state.email}
                        onChange={(e) =>this.handleChange("email", e)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <FormControl>
                      <TextField
                        id="password"
                        label="Password"
                        style={{ margin: 0 }}
                        placeholder="Enter Password"
                        fullWidth
                        margin="normal"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={(e) =>this.handleChange("password", e)}
                        InputProps= {{
                          endAdornment:
                            <InputAdornment position="end">
                              <IconButton aria-label="Toggle password visibility" onClick={() => this.handleClickShowPassword()}>
                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs sm={1}></Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl>
                      <Button type="submit" variant="contained" color="primary">Sign Up</Button>
                    </FormControl>
                  </Grid>
                </Grid>
              </form>
            </CardActions>
          </Card>
        </div>
      </section>
    )
  }
}


export default SignUp;
