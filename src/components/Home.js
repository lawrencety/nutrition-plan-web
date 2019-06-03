import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="home">
        <div className="hero">
          <Card className="home-card">
            <CardContent>
              <Typography variant="headline">Track your nutritional intake, every detail</Typography>
            </CardContent>
            <CardActions>
              <Grid container spacing={24}>
                <Grid xs={0} sm={2}></Grid>
                <Grid xs={6} sm={4}>
                  <Button variant="contained" color="secondary">Learn More</Button>
                </Grid>
                <Grid xs={6} sm={4}>
                  <Button variant="contained" color="primary" component= { Link } to="/signup">Sign Up</Button>
                </Grid>
                <Grid xs={0} sm={2}></Grid>
              </Grid>
            </CardActions>
          </Card>
        </div>
      </section>
    )
  }
}


export default Home;
