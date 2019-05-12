import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const NavBarPrivate = () => (
  <AppBar color= 'secondary'>
    <Grid container spacing={24}>
      <Grid item xs={8}>
        <Typography variant="title">Logo</Typography>
      </Grid>
      <Grid item xs={4}>
        <Toolbar className="nav">
          <Link className="nav-link" component= { RouterLink } to='/'>Home</Link>
          <Link className="nav-link" component= { RouterLink } to='/signin'>Sign In</Link>
        </Toolbar>
      </Grid>
    </Grid>
  </AppBar>
)

export default NavBarPrivate;
