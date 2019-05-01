import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


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
              <h1>Track your nutritional intake, every detail</h1>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="secondary">Learn More</Button>
              <Button variant="contained" color="primary">Sign Up</Button>
            </CardActions>
          </Card>
        </div>
      </section>
    )
  }
}


export default Home;
