import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const NavBarPrivate = () => (
  <AppBar color= 'primary'>
    <Grid container spacing={24}>
      <Grid item xs={1}>
        <Link className="nav-link" component= { RouterLink } to='/dashboard'>
          <img className="logo-link" src={require('../images/nutritiontracker-logo-white.png')}></img>
        </Link>
      </Grid>
      <Grid item xs={7}></Grid>
      <Grid item xs={4}>
        <Toolbar className="nav">
          <Link className="nav-link private-nav" component= { RouterLink } to='/dashboard'>Dashboard</Link>
        </Toolbar>
      </Grid>
    </Grid>
  </AppBar>
)

export default NavBarPrivate;
