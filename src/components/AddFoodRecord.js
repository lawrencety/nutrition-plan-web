import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class AddFoodRecord extends Component {
  constructor(props) {
    super(props);

    this.state= {
      meal: '',
      foodname: '',
      amount: null,
      unit: '',
      foods: []
    }
  }

  componentDidMount() {
    this.setState({
      foods: [
        {ndbno: 1234567 ,name: 'Scrambled Eggs', userId: 12, meal: 'breakfast', amount: 12.3, unit: "g"}
      ]
    });
  }

  handleChange(prop, e) {
    this.setState({ [prop]: e.target.value });
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
                <CardActions>
                  <FormControl style={{ margin: "auto", minWidth: 120 }}>
                    <InputLabel htmlFor="meal">Meal</InputLabel>
                    <Select value={this.state.meal} onChange={(e) => this.handleChange("meal", e)} inputProps={{name: 'meal', id: 'meal'}} autoWidth>
                      <MenuItem value='breakfast'>Breakfast</MenuItem>
                      <MenuItem value='lunch'>Lunch</MenuItem>
                      <MenuItem value='dinner'>Dinner</MenuItem>
                      <MenuItem value='snack'>Snack</MenuItem>
                    </Select>
                  </FormControl>
                </CardActions>
                <Divider />
                <CardContent>
                  {
                    this.state.foods
                      .filter( food => food.meal === this.state.meal )
                      .map( (food) =>
                        <ExpansionPanel>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="body2">{food.name}</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <Typography>Amount: {food.amount} {food.unit}</Typography>
                          </ExpansionPanelDetails>
                          <Divider />
                          <ExpansionPanelActions>
                            <div>
                              <IconButton aria-label="Edit">
                                <EditIcon />
                              </IconButton>
                              <IconButton aria-label="Delete">
                                <DeleteIcon />
                              </IconButton>
                            </div>
                          </ExpansionPanelActions>
                        </ExpansionPanel>
                      )
                  }
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Card className="card dashboard-card">
                <CardContent>
                  <Typography variant="headline">Add Food</Typography>
                  <Divider />
                </CardContent>
                <CardActions>
                  <Grid container spacing={24}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={10}>
                      <TextField
                        id="foodname"
                        label="Search Foods"
                        style={{ margin: 0 }}
                        placeholder="Search Foods"
                        fullWidth
                        margin="normal"
                        onChange={(e) =>this.handleChange("foodname", e)}
                      />
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        id="amount"
                        label="How much did you have?"
                        style={{ margin: 0 }}
                        placeholder="Enter Amount"
                        fullWidth
                        margin="normal"
                        onChange={(e) =>this.handleChange("amount", e)}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <FormControl style={{ minWidth: 90 }}>
                        <InputLabel htmlFor="unit">Unit</InputLabel>
                        <Select value={this.state.unit} onChange={(e) => this.handleChange("unit", e)} inputProps={{name: 'unit', id: 'unit'}} autoWidth>
                          <MenuItem value='g'>grams</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                      <Button variant="contained" color="primary">Add Food</Button>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                  </Grid>
                </CardActions>
                <Divider />
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


export default AddFoodRecord;
