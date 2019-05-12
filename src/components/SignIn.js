import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

  render() {
    return (
      <section className="home">
        <div className="hero">
          <Card className="home-card">
            <CardContent>
              <Typography variant="headline">Sign In</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" component= { Link } to="/signup">Sign Up Here</Button>
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" placeholder= "Enter Email" value={this.state.email} onChange={(e) =>this.handleChange("email", e)} />
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
                <Button variant="contained" color="primary">Sign In</Button>
              </FormControl>
            </CardActions>
          </Card>
        </div>
      </section>
    )
  }
}


export default SignUp;
