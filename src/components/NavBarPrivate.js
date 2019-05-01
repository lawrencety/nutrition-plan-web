import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const NavBarPrivate = () => (
  <AppBar color= 'primary'>
    <Toolbar className="nav">
      <Link className="nav-link" component= { RouterLink } to='/'>Home</Link>
      <Link className="nav-link" component= { RouterLink } to='/dashboard'>Dashboard</Link>
    </Toolbar>
  </AppBar>
)

export default NavBarPrivate;
