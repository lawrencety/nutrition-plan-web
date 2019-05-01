import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="home">
        <div className="hero">
          <Card className="card">
            <CardContent>
              <h2>Today's Performance</h2>
              <Divider />
              <h3>Overall</h3>
              <Divider />
              <h3>Major Nutrients</h3>
            </CardContent>
          </Card>
          <Card className="card">
            <CardContent>
              <h1>Good morning</h1>
              <h1>What did you have for breakfast?</h1>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">Add Foods</Button>
            </CardActions>
          </Card>
        </div>
      </section>
    )
  }
}


export default Dashboard;
