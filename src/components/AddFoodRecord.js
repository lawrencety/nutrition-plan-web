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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';

class AddFoodRecord extends Component {
  constructor(props) {
    super(props);

    this.state= {
      ndbno: null,
      meal: 'breakfast',
      foodname: '',
      amount: '',
      unit: '',
      foods: [],
      searchResults: [],
      anchorE1: null,
      nutrientInfo: [],
    }
  }

  componentDidMount() {
    const url = this.props.apiUrl + '/records/' + this.props.user.id;
    fetch(url, {

    })
    .then((res) => {
      console.log(res);
      res.json()
    })
    .then((response) => {
      console.log(response);
    })
    if(this.state.foods) {
      this.setState({
        foods: [
          {id: 12, ndbno: 1234567, name: 'Scrambled Eggs', userId: 123, meal: 'breakfast', amount: 12.3, unit: "g"}
        ]
      });
    }
  }

  handleChange(prop, e) {
    this.setState({ [prop]: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    const url = '//api.nal.usda.gov/ndb/search'
    const data = {
      api_key: this.props.apiKey,
      q: this.state.foodname,
      max: 25,
      offset: 0
    }
    const call = url + '/?format=json&q=' + data.q + '&sort=n&max=' + data.max + '&offset=' + data.offset + '&api_key=' + data.api_key
    fetch(call)
    .then((res) => {
      return res.json()
    })
    .then((response) => {
      this.setState({
        anchorE1: e.relatedTarget,
        searchResults: response.list.item
      });
    })
  }

  handleClose(e) {
    const data = {
      api_key: this.props.apiKey,
      ndbno: e.target.value
    }
    const url = '//api.nal.usda.gov/ndb/V2/reports'
    const call = url + '?ndbno=' + data.ndbno + '&type=b&format=json&api_key=' + data.api_key
    fetch(call)
    .then((res) => {
      return res.json()
    })
    .then((response) => {
      let food = response.foods[0].food;
      this.setState({
        ndbno: food.desc.ndbno,
        foodname: food.desc.name,
        nutrientInfo: food.nutrients,
        searchResults: [],
        anchorE1: null,
      });
    })
  };

  handleSubmit(e) {
    e.preventDefault();
    const newRecord = {
      ndbno: this.state.ndbno,
      name: this.state.foodname,
      userId: this.props.user.id,
      meal: this.state.meal,
      amount: this.state.amount,
      unit: this.state.unit,
      nutrients: this.state.nutrientInfo
    }
    const url = this.props.apiUrl + '/records/create';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(newRecord),
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      res.json()
    })
    .then((response) => {
      console.log('Success:', JSON.stringify(response));
      this.setState({
        foods: this.state.foods.concat(newRecord),
        ndbno: null,
        foodname: '',
        amount: '',
        unit: ''
      })
    })
    .catch((err) => {
      console.log('Error:', err)
    });
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
                    .filter((food) => food.meal === this.state.meal )
                    .map((food) =>
                      <ExpansionPanel key={food.id}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="body2">
                            {(food.name.length < 30) ? food.name : (food.name.substring(0,27) + '...')}
                          </Typography>
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
                  <form className="form" onSubmit={(e) => this.handleSearch(e)}>
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
                          value={this.state.foodname}
                          onChange={(e) =>this.handleChange("foodname", e)}
                          InputProps= {{
                            endAdornment:
                              <InputAdornment position="end">
                                <IconButton aria-label="Search" type="submit">
                                  <SearchIcon />
                                </IconButton>
                              </InputAdornment>
                          }}
                          aria-owns={this.state.anchorEl ? "search-menu" : undefined}
                        />
                          <Menu id="search-menu" anchorEl={this.state.anchorEl} open={this.state.anchorE1 !== null}>
                            {
                              this.state.searchResults
                              .map((result) =>
                                <MenuItem key={result.ndbno} value={result.ndbno} onClick={(e) => this.handleClose(e)}>
                                  {result.name}
                                </MenuItem>
                              )
                            }
                          </Menu>
                      </Grid>
                      <Grid item xs={1}>
                      </Grid>
                    </Grid>
                  </form>
                </CardActions>
                <CardActions>
                  <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <Grid container spacing={24}>
                      <Grid item xs={1}>
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          id="amount"
                          label="How much did you have?"
                          style={{ margin: 0 }}
                          placeholder="Enter Amount"
                          fullWidth
                          value={this.state.amount}
                          margin="normal"
                          onChange={(e) =>this.handleChange("amount", e)}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <FormControl style={{ minWidth: 90 }}>
                          <InputLabel htmlFor="unit">Unit</InputLabel>
                          <Select value={this.state.unit} onChange={(e) => this.handleChange("unit", e)} inputProps={{name: 'unit', id: 'unit'}} autoWidth>
                            <MenuItem value='g'>grams</MenuItem>
                            <MenuItem value='oz'>ounces</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant="contained" color="primary" type="submit">Add Food</Button>
                      </Grid>
                      <Grid item xs={1}>
                      </Grid>
                    </Grid>
                  </form>
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
