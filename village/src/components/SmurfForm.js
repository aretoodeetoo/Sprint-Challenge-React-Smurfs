import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const baseUrl = 'http://localhost:3333';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    axios
    .post(`${baseUrl}/smurfs`, this.state)
    .then(res => {
      console.log(res);
      this.setState({ state: res.data })
      this.props.history.push('/smurfs')
    })
    .catch(err => {
      console.log('Ya done smurfed it up again!')
    })
    // add code to create the smurf using the api

    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  // addSmurf = event => {
  //   event.preventDefault();
  //   axios
  //   .post(`${baseUrl}/smurfs`, this.state.smurf)
  //   .then(res => {
  //     console.log(res);
  //     this.setState({ smurfs: res.data });
  //     this.props.history.push('/smurfs');
  //   })
  //   .catch(err => {
  //     console.log('Ya done smurfed it up again!');
  //   })
  //   // add code to create the smurf using the api
  // }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        <Link to={`/smurfs`} style={{textDecoration: 'none', color: 'blue'}}>Go See Your Smurf Residents Here!</Link>
        <Link to={`/`} style={{textDecoration: 'none', color: 'blue'}}>Or If You Prefer, Head Home</Link>
      </div>
    );
  }
}

export default SmurfForm;
