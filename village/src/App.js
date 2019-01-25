import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch(err => {
      console.log('No Smurfs here');
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome to Smurf Village!</h1>
      <h3>Find a list of Smurfs:</h3>
      <Link to={`/smurfs`} style={{textDecoration: 'none', color: 'blue'}}>Smurf Residents</Link>
      <Link to={`/smurf-form`} style={{textDecoration: 'none', color: 'green'}}>Add a Smurf Here</Link>
      <Route exact path="/smurf-form" render={props => <SmurfForm {...props}/> } />
      <Route exact path="/smurfs" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
      </div>
    );
  }
}

export default App;
