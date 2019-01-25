import React from 'react';

const Smurf = props => {

  // const smurf = props.smurfs.find(
  //   smurf => `${smurf.id}` === props.match.params.smurfId);

  //   if (!smurf) return <h2>Aww, sorry there is no smurf here!</h2>
  
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>

    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

