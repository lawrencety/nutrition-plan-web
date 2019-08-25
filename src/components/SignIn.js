import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    const url = this.props.apiUrl + '/users/signin'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
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
              <Typography variant="headline">Sign In</Typography>
            </CardContent>
            <CardActions>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <Grid container spacing={24}>
                  <Grid item xs={0} sm={1}></Grid>
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
                  <Grid item xs={0} sm={1}></Grid>
                  <Grid item xs={0} sm={1}></Grid>
                  <Grid item xs={12} sm={5}>
                    <Button variant="contained" color="primary" component= { Link } to="/signup">Sign Up Here</Button>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Button type="submit" variant="contained" color="primary">Sign In</Button>
                  </Grid>
                  <Grid item xs={0} sm={1}></Grid>
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
