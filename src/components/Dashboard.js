import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="home">
        <div className="hero">
          <Grid container spacing={24}>
            <Grid item sm={1}>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Card className="card dashboard-card">
                <CardContent>
                  <Typography variant="headline">Today's Performance</Typography>
                  <Divider />
                  <Typography variant="title">Overall</Typography>
                  <Divider />
                  <Typography variant="title">Major Nutrients</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Card className="card dashboard-card">
                <CardContent>
                  <Typography variant="headline">Good morning,</Typography>
                  <Typography variant="headline">What did you have for breakfast?</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary" component= { Link } to="/addfood">Add Foods</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item sm={1}>
            </Grid>
          </Grid>
        </div>
      </section>
    )
  }
}


export default Dashboard;
