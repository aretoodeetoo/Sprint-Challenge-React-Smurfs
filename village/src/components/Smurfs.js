import React, { Component } from 'react';
// import axios from 'axios';

import './SmurfVillage.css';
import Smurf from './Smurf';

// const baseUrl = 'https://localhost:3333';

class Smurfs extends Component {
  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <div className="Smurfs">
        <h1 className="villageHeader">Smurf Village</h1>
        <div className="smurfContainer">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
              );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
