import React, { Component } from 'react';
import axios from 'axios';

import './SmurfForm.css';
import helloSmurf from '../helloSmurf.jpg';

const baseUrl = 'http://localhost:3333';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {name: '',
      age: '',
      height: ''
    },
      isUpdating: false
    };
  }

   handleSubmit = e => {
    e.preventDefault();
    if (this.state.isUpdating) {
      this.updateSmurf();
    } else {
      this.addSmurf();
    }
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

  updateSmurf = () => {
    axios
      .put(`${baseUrl}/smurfs/${this.state.smurf.id}`, this.state.smurf)
      .then(res => {
        this.setState({
          smurfs: res.data,
          isUpdating: false,
          smurf: {
            name: '',
            age: '',
            height: ''
          }
        });
        this.props.history.push('/smurfs')
      })
      .catch(err => {
        console.log('Update fn is not working');
      })
  }

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
          <button type="submit" className="addFormButton">Add to the village</button>
        </form>
        <img className="formSmurf" src={helloSmurf} alt="waving Smurf"/>
      </div>
    );
  }
}

export default SmurfForm;
